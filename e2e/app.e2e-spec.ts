import { SoundCloudSassPage } from './app.po';

describe('sound-cloud-sass App', () => {
  let page: SoundCloudSassPage;

  beforeEach(() => {
    page = new SoundCloudSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
