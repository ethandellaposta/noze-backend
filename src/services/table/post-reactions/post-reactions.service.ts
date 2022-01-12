// Initializes the `post-reactions` service on path `/post-reactions`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../../declarations";
import { PostReactions } from "./post-reactions.class";
import createModel from "../../../models/post-reactions.model";
import hooks from "./post-reactions.hooks";

// Add this service to the service type index
declare module "../../../declarations" {
  interface ServiceTypes {
    "post-reactions": PostReactions & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/post-reactions", new PostReactions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("post-reactions");

  service.hooks(hooks);
}
