import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: String(process.env.DATABASE_HOST),
  user: String(process.env.DATABASE_USER),
  password: String(process.env.DATABASE_PASSWORD),
  database: String(process.env.DATABASE_NAME),
  port: Number(process.env.DATABASE_PORT),
});

export default pool;
