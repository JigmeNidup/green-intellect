import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";

import pg from "@/utils/database/pgsql";
import moment from "moment";

export const POST = async (req, res) => {
  //protected route
  let session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify("Not Authorized"), {
      status: 401,
    });
  }
  const { date } = await req.json();
  try {
    let today = date;
    let yesterday = moment(today).subtract(4, "days").format("YYYY-MM-DD");
    // let sensordata = await pg.query(
    //   "SELECT * FROM store WHERE date > $1 AND date <= $2",
    //   [yesterday, today]
    // );

    let max = await pg.query(
      `SELECT
        MAX(temp) AS max_temp,
        MAX(humi) AS max_humi,
        MAX(moist) AS max_moist,
        MAX(n) AS max_n,
        MAX(p) AS max_p,
        MAX(k) AS max_k
    FROM
        store WHERE date > $1 AND date <= $2`,
      [yesterday, today]
    );

    let min = await pg.query(
      `SELECT
        MIN(temp) AS min_temp,
        MIN(humi) AS min_humi,
        MIN(moist) AS min_moist,
        MIN(n) AS min_n,
        MIN(p) AS min_p,
        MIN(k) AS min_k
    FROM
        store WHERE date > $1 AND date <= $2`,
      [yesterday, today]
    );

    let avg = await pg.query(
      `SELECT
        AVG(temp) AS avg_temp,
        AVG(humi) AS avg_humi,
        AVG(moist) AS avg_moist,
        AVG(n) AS avg_n,
        AVG(p) AS avg_p,
        AVG(k) AS avg_k
    FROM
        store WHERE date > $1 AND date <= $2`,
      [yesterday, today]
    );

    let sensordata = await pg.query(
      "SELECT * FROM store WHERE date > $1 AND date <= $2",
      [yesterday, today]
    );
    // let sensordata = await pg.query(
    //   "SELECT * FROM store WHERE time > '10:00:00' AND time <= '12:26:00'"
    // );

    let data = {
      min: min.rows[0],
      max: max.rows[0],
      avg: avg.rows[0],
      sensordata: sensordata.rows,
    };
    return new Response(JSON.stringify(data), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new post", {
      status: 500,
    });
  }
};
