// Initializes the `post-items` service on path `/post-items`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../../declarations";
import { PostItems } from "./post-items.class";
import createModel from "../../../models/post-items.model";
import hooks from "./post-items.hooks";

// Add this service to the service type index
declare module "../../../declarations" {
  interface ServiceTypes {
    "post-items": PostItems & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/post-items", new PostItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("post-items");

  service.hooks(hooks);
}
