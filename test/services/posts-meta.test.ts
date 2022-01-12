import app from '../../src/app';

describe('\'posts-meta\' service', () => {
  it('registered the service', () => {
    const service = app.service('posts-meta');
    expect(service).toBeTruthy();
  });
});
