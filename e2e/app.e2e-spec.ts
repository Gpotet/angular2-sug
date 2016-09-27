import { SugPage } from './app.po';

describe('sug App', function() {
  let page: SugPage;

  beforeEach(() => {
    page = new SugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
