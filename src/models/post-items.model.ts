// post-items-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import { Knex } from "knex";
import { Application } from "../declarations";

export interface PostItem {
  id: number;
  post_id: number;
  post_item_type_id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  data: string;
}

export default function (app: Application): any {
  const db: any = app.get("knexClient");
  const tableName = "post_items";
  db.schema.hasTable(tableName).then((exists: any) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table: any) => {
          table.increments("id");
          table.integer("post_id");
          table.integer("post_item_type_id");
          table.dateTime("created_at").defaultTo(db.fn.now());
          table.dateTime("updated_at").defaultTo(db.fn.now());
          table.dateTime("deleted_at").nullable();
          table.string("data");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e: any) =>
          console.error(`Error creating ${tableName} table`, e)
        );
    }
  });

  return db;
}
