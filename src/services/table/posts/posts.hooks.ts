import locationDataToParams from '../../../hooks/location-data-to-params';import updateLocation from '../../../hooks/update-location';export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [locationDataToParams()],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [updateLocation()],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
