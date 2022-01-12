import app from '../../src/app';

describe('\'post-reaction-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-reaction-types');
    expect(service).toBeTruthy();
  });
});
