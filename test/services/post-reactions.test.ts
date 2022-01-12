import app from '../../src/app';

describe('\'post-reactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('post-reactions');
    expect(service).toBeTruthy();
  });
});
