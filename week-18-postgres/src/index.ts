import { Client } from "pg";

const pgClient = new Client({
  user: "postgres",
  port: 5432,
  host: "localhost",
  database: "test",
  password: "root",
});

async function main() {
  await pgClient.connect();

  const res = await pgClient.query("SELECT * FROM users");
  console.log(res.rows);

  // To prevent SQL injection, use parameterized queries
  // const query = "INSERT INTO users (name, email) VALUES ($1, $2)";
  // const val = await pgClient.query(query, ["John", "jhon@gmai.com"]);
  
}

main();
