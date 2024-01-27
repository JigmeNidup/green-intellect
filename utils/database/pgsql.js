import { Pool } from "pg";

let pg;

if (!pg) {
  pg = new Pool({
    host: process.env.PSQL_HOST,
    user: process.env.PSQL_USER,
    port: process.env.PSQL_PORT,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
  });
}

export default pg;
