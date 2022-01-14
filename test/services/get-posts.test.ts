import app from '../../src/app';

describe('\'get-posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('get-posts');
    expect(service).toBeTruthy();
  });
});
