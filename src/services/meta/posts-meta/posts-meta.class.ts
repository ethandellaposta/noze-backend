import { Id, Params } from "@feathersjs/feathers";
import { Service, MemoryServiceOptions } from "feathers-memory";
import app from "../../../app";
import { Application } from "../../../declarations";
import { Point, WithTimestamps } from "../../../types/utils";
import { PostItemsFindResponseData } from "../../table/post-items/post-items.class";
import { PostReactionsFindResponseData } from "../../table/post-reactions/post-reactions.class";

export type PostGetResponseData = WithTimestamps<{
  id: number;
  user_id: number;
  location: Point;
  thread_post_id?: number | null;
  items: PostItemsFindResponseData;
  reactions: PostReactionsFindResponseData;
}>;

export class PostsMeta extends Service {
  app: Application;

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  async get(id: Id, params?: Params): Promise<{}> {
    return {
      ...(await app.service("posts").get(id)),
      items: await (app.service("post-items") as any).find({
        query: {
          deleted_at: null,
          post_id: id,
        },
      }),
      reactions: ((await app.service("post-reactions")) as any).find({
        query: {
          deleted_at: null,
          post_id: id,
        },
      }),
    };
  }

  // async find(params?: Params): Promise<any> {}
}
