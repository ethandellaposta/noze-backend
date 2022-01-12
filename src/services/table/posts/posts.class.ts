import { Id, Params } from "@feathersjs/feathers";
import { Service, KnexServiceOptions } from "feathers-knex";
import app from "../../../app";
import { Application } from "../../../declarations";
import { PostGetResponseData } from "../../../models/posts.model";

export class Posts extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<KnexServiceOptions>, app: Application) {
    super({
      ...options,
      name: "posts",
    });
  }
}
