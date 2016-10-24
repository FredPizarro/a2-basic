import { A2BasicPage } from './app.po';

describe('a2-basic App', function() {
  let page: A2BasicPage;

  beforeEach(() => {
    page = new A2BasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
