// Initializes the `post-item-types` service on path `/post-item-types`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../../declarations";
import { PostItemTypes } from "./post-item-types.class";
import createModel from "../../../models/post-item-types.model";
import hooks from "./post-item-types.hooks";

// Add this service to the service type index
declare module "../../../declarations" {
  interface ServiceTypes {
    "post-item-types": PostItemTypes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/post-item-types", new PostItemTypes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("post-item-types");

  service.hooks(hooks);
}
