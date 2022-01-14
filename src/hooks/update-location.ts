// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { location } = context.params;
    const { id } = context.result;
    const db = context.app.get("knexClient");
    const post = await db.raw(
      `UPDATE posts SET location = POINT(${location.lat}, ${location.long}) WHERE id = :id;`,
      {
        id,
      }
    );
    context.result = {
      ...context.result,
      location,
    };
    return context;
  };
};
