import { TechFitFEPage } from './app.po';

describe('tech-fit-fe App', () => {
  let page: TechFitFEPage;

  beforeEach(() => {
    page = new TechFitFEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
