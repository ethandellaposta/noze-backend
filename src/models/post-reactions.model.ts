// post-reactions-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import { Knex } from "knex";
import { Application } from "../declarations";

export interface PostReaction {
  id: number;
  post_id: number;
  post_reaction_type_id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  user_id: number;
}

export default function (app: Application): Knex {
  const db: Knex = app.get("knexClient");
  const tableName = "post_reactions";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table: any) => {
          table.increments("id");
          table.integer("post_id");
          table.integer("post_reaction_type_id");
          table.dateTime("created_at").defaultTo(db.fn.now());
          table.dateTime("updated_at").defaultTo(db.fn.now());
          table.dateTime("deleted_at").nullable();
          table.integer("user_id");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e: any) =>
          console.error(`Error creating ${tableName} table`, e)
        );
    }
  });

  return db;
}
