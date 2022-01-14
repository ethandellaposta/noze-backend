import app from '../../src/app';

describe('\'post-items-meta\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-items-meta');
    expect(service).toBeTruthy();
  });
});
