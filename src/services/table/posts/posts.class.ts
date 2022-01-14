import { Id, Params } from "@feathersjs/feathers";
import { Service, KnexServiceOptions } from "feathers-knex";
import app from "../../../app";
import { Application } from "../../../declarations";

export interface SQLPost {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  location: {
    x: number;
    y: number;
  };
  thread_post_id?: null;
}
export class Posts extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: "posts",
    });
  }
}
