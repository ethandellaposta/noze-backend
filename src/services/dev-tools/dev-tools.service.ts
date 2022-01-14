// Initializes the `test` service on path `/test`
import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { DevTools } from "./dev-tools.class";
import hooks from "./dev-tools.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "dev-tools": DevTools & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get("paginate"),
  };

  // Initialize our service with any options it requires
  app.use("/dev-tools", new DevTools(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("dev-tools");

  service.hooks(hooks);
}
