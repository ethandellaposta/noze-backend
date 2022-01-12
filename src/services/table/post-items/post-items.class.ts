import { Service, KnexServiceOptions } from "feathers-knex";
import { Application } from "../../../declarations";
import { WithTimestamps } from "../../../types/utils";

export type PostItemsFindResponseData = WithTimestamps<{
  id: number;
  post_id: number;
  post_item_type_id: number;
  data: string;
}>;

export class PostItems extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: "post_items",
    });
  }
}
