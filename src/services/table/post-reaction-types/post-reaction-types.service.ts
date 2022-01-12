// Initializes the `post-reaction-types` service on path `/post-reaction-types`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../../declarations";
import { PostReactionTypes } from "./post-reaction-types.class";
import createModel from "../../../models/post-reaction-types.model";
import hooks from "./post-reaction-types.hooks";

// Add this service to the service type index
declare module "../../../declarations" {
  interface ServiceTypes {
    "post-reaction-types": PostReactionTypes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/post-reaction-types", new PostReactionTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("post-reaction-types");

  service.hooks(hooks);
}
