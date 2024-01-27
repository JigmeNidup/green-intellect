import { Pool } from "pg";

let pg;

if (!pg) {
  // pg = new Pool({
  //   host: process.env.PSQL_HOST,
  //   user: process.env.PSQL_USER,
  //   port: process.env.PSQL_PORT,
  //   database: process.env.PSQL_DATABASE,
  //   password: process.env.PSQL_PASSWORD,
  // });
  pg = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  });
}

export default pg;
