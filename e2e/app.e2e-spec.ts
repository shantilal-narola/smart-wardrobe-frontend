import { SmartWardrobePage } from './app.po';

describe('smart-wardrobe App', () => {
  let page: SmartWardrobePage;

  beforeEach(() => {
    page = new SmartWardrobePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
