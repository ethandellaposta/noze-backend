import app from '../../src/app';

describe('\'post-reactions-meta\' service', () => {
  it('registered the service', () => {
    const service = app.service('meta/post-reactions-meta');
    expect(service).toBeTruthy();
  });
});
