// post-item-types-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import Knex from "knex";
import { Application } from "../declarations";

export default function (app: Application): any {
  const db: any = app.get("knexClient");
  const tableName = "post_item_types";
  db.schema.hasTable(tableName).then((exists: any) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table: any) => {
          table.increments("id");
          table.string("text");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e: any) =>
          console.error(`Error creating ${tableName} table`, e)
        );
    }
  });

  return db;
}
