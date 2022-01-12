import app from '../../src/app';

describe('\'post-item-types\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-item-types');
    expect(service).toBeTruthy();
  });
});
