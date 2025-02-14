import { getPool } from "../db/db";

export class Newsletter_subscriber {
  static async findAll() {
    const result = await getPool().query("SELECT * FROM subscriber_newsletter");
    return result.rows;
  }
}
