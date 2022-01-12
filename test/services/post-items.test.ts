import app from '../../src/app';

describe('\'post-items\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-items');
    expect(service).toBeTruthy();
  });
});
