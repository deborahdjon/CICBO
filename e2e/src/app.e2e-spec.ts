import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('CICBO front end testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('login with correct credentials, should go to grid page(calendar view)', function () {
    return page.navigateTo().then(value => {
      return element(by.id('fuserid')).sendKeys('miri').then(() => {
        return element(by.id('fpassword')).sendKeys('blub').then(() => {
          return element(by.id('flogin')).click().then(() => {
            browser.waitForAngular();
            return browser.getCurrentUrl().then((url) => {
              console.log(url);
              return expect<any>(browser.getCurrentUrl()).toEqual('http://localhost:4200/grid%27);
            });
          });
        });
      });
    });
  });*/

  it('Check guest button', () => {
    return page.navigateTo().then(() => {
      return element(by.id('guest-btn-in-menu')).click().then(async () => {
        await browser.waitForAngular();
        return expect(browser.getCurrentUrl()).toBe('http://localhost:4200/guests');
      });
    });
  });

  it('Check alarm button', () => {
    return page.navigateTo().then(() => {
      return element(by.id('alarm-btn-in-menu')).click().then(async () => {
        await browser.waitForAngular();
        return expect(browser.getCurrentUrl()).toBe('http://localhost:4200/alarm');
      });
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
