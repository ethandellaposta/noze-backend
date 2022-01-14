import { Params } from "@feathersjs/feathers";
import { Service } from "feathers-memory";
import { Application } from "../../declarations";
import * as faker from "faker";
import { Knex } from "knex";

export class DevTools extends Service {
  app: Application;
  constructor(options: any, app: Application) {
    super({
      ...options,
      name: "dev-tools",
    });
    this.app = app;
  }

  async generate_new_user(options: { quantity: number }) {
    const users: any[] = [];
    for (let x = 0; x < options.quantity; x++) {
      const user_create_body = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
      const user = await this.app.service("users").create(user_create_body);
      const posts: any[] = [];
      for (let i = 0; i < 5; i++) {
        const post_item_type_id = faker.datatype.number({
          min: 1,
          max: 4,
        });
        const post_item_data: { [key: string]: any } = {
          1: faker.hacker.phrase(),
          2: faker.image.animals(),
          3: faker.image.sports(),
          4: faker.image.nature(),
        };
        const post = await this.app.service("posts-meta").create({
          user_id: user.id,
          items: [
            {
              post_item_type_id,
              data: post_item_data[post_item_type_id],
            },
          ],
          location: {
            lat: parseFloat(faker.address.latitude(39, 41)),
            long: parseFloat(faker.address.latitude(-72, -70)),
          },
          thread_post_id: null,
        });
        const post_reactions: any[] = [];
        for (let j = 0; j < 3; j++) {
          const post_reaction_type_id = faker.datatype.number({
            min: 1,
            max: 4,
          });
          const user_ids = (
            await this.app.service("users").find({ paginate: false })
          ).map((user: any) => user.id);
          const post_reaction = await this.app
            .service("post-reactions")
            .create({
              post_id: post.id,
              user_id:
                user_ids[
                  faker.datatype.number({ min: 0, max: user_ids.length - 1 })
                ],
              post_reaction_type_id,
            } as any);
          post_reactions.push(post_reaction);
        }
        posts.push({ ...post, reactions: post_reactions });
      }
      users.push({
        user: { ...user, password: user_create_body.password },
        posts,
      });
    }
    return users;
  }

  async create(
    data: {
      type: "generate_new_user";
      options: any;
    },
    params?: Params
  ): Promise<any> {
    const { type, options } = data;
    if (type === "generate_new_user") {
      return this.generate_new_user(options);
    } else {
      return;
    }
  }
}
