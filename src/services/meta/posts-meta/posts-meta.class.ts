import { Id, NullableId, Params } from "@feathersjs/feathers";
import { Service, MemoryServiceOptions } from "feathers-memory";
import app from "../../../app";
import { Application } from "../../../declarations";
import { Location, WithTimestamps, Point } from "../../../types/utils";
import { PostItemsFindResponseData } from "../../table/post-items/post-items.class";
import { PostReactionsFindResponseData } from "../../table/post-reactions/post-reactions.class";

export type PostGetResponseData = WithTimestamps<{
  id: number;
  user_id: number;
  location: Location;
  thread_post_id?: number | null;
  items: PostItemsFindResponseData;
  reactions: PostReactionsFindResponseData;
}>;

export type PostFindRequestParams = {
  location?: Location;
};
export type PostFindResponseData = PostGetResponseData[];

export type PostCreateRequestData = {
  user_id: number;
  location: Location;
  items: {
    post_item_type_id: number;
    data: string;
  }[];
  thread_post_id: number | null;
};
export type PostCreateResponseData = PostGetResponseData;

export class PostsMeta extends Service {
  app: Application;

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  async get(id: Id, params?: Params): Promise<PostGetResponseData> {
    const post = await app.service("posts").get(id);
    return {
      ...{
        ...post,
        location: {
          lat: post.location.x,
          lon: post.location.y,
        },
      },
      items: await (app.service("post-items") as any).find({
        query: {
          deleted_at: null,
          post_id: id,
        },
        paginate: false,
      }),
      reactions: ((await app.service("post-reactions")) as any).find({
        query: {
          deleted_at: null,
          post_id: id,
        },
        paginate: false,
      }),
    };
  }

  async find(params?: PostFindRequestParams): Promise<PostFindResponseData> {
    const posts = (await app
      .service("posts")
      .find({ paginate: false })) as any[];
    return Promise.all(posts.map(async (post: any) => this.get(post.id)));
  }

  async create(
    data: PostCreateRequestData,
    params?: Params
  ): Promise<PostCreateResponseData> {
    const { user_id, location, items, thread_post_id } = data;
    const post = await this.app.service("posts").create({
      user_id,
      location,
      thread_post_id,
    });
    return {
      ...post,
      items: Promise.all(
        items.map((item) =>
          this.app.service("post-items").create({
            ...item,
            post_id: post.id,
          })
        )
      ),
      reactions: [],
    };
  }

  async update(id: NullableId, data: any, params?: Params): Promise<any> {}
}
