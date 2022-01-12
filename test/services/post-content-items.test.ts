import app from '../../src/app';

describe('\'post-content-items\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-content-items');
    expect(service).toBeTruthy();
  });
});
