// posts-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import { Knex } from "knex";
import { Application } from "../declarations";

export default function (app: Application): Knex {
  const db: Knex = app.get("knexClient");
  const tableName = "posts";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id");
          table.integer("user_id");
          table.dateTime("created_at").defaultTo(db.fn.now());
          table.dateTime("updated_at").defaultTo(db.fn.now());
          table.dateTime("deleted_at");
          table.integer("thread_post_id");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
}
