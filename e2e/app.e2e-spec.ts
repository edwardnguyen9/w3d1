import { Week3d1Page } from './app.po';

describe('week3d1 App', function() {
  let page: Week3d1Page;

  beforeEach(() => {
    page = new Week3d1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
