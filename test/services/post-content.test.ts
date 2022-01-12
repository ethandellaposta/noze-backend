import app from '../../src/app';

describe('\'post-content\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-content');
    expect(service).toBeTruthy();
  });
});
