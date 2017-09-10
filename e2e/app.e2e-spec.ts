import { MeetingCenterPage } from './app.po';

describe('meeting-center App', () => {
  let page: MeetingCenterPage;

  beforeEach(() => {
    page = new MeetingCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
