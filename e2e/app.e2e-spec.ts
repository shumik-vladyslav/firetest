import { FiretestPage } from './app.po';

describe('firetest App', () => {
  let page: FiretestPage;

  beforeEach(() => {
    page = new FiretestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
