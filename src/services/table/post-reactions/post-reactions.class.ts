import { Service, KnexServiceOptions } from "feathers-knex";
import { Application } from "../../../declarations";
import { WithTimestamps } from "../../../types/utils";

export type PostReactionsFindResponseData = WithTimestamps<{
  id: number;
  post_id: number;
  user_id: number;
  post_reaction_type_id: number;
}>;

export class PostReactions extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: "post_reactions",
    });
  }
}
