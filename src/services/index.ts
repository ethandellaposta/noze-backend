import { Application } from "../declarations";
import users from "./table/users/users.service";
import posts from "./table/posts/posts.service";
import postReactions from "./table/post-reactions/post-reactions.service";
import postReactionTypes from "./table/post-reaction-types/post-reaction-types.service";
import postItems from "./table/post-items/post-items.service";
import postItemTypes from "./table/post-item-types/post-item-types.service";

import postsMeta from "./meta/posts-meta/posts-meta.service";

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(posts);
  app.configure(postReactions);
  app.configure(postReactionTypes);
  app.configure(postItems);
  app.configure(postItemTypes);
  app.configure(postsMeta);
}
