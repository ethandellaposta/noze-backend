import app from '../../src/app';

describe('\'post-content-item-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-content-item-types');
    expect(service).toBeTruthy();
  });
});
