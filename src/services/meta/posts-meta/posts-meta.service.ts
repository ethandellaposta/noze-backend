// Initializes the `posts-meta` service on path `/posts-meta`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../../declarations";
import { PostsMeta } from "./posts-meta.class";
import hooks from "./posts-meta.hooks";

// Add this service to the service type index
declare module "../../../declarations" {
  interface ServiceTypes {
    "posts-meta": PostsMeta & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/posts-meta", new PostsMeta(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("posts-meta");

  service.hooks(hooks);
}
