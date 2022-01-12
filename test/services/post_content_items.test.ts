import app from '../../src/app';

describe('\'post_content_items\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-content-items');
    expect(service).toBeTruthy();
  });
});
