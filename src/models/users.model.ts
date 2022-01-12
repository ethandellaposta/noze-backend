// users-model.ts - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import { Application } from "../declarations";

export default function (app: Application) {
  const db = app.get("knexClient");
  const tableName = "users";

  db.schema.hasTable(tableName).then((exists: any) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table: any) => {
          table.increments("id");
          table.string("username").unique();
          table.datetime("created_at");
          table.datetime("updated_at");
          table.datetime("deleted_at");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e: any) =>
          console.error(`Error creating ${tableName} table`, e)
        );
    }
  });

  return db;
}
