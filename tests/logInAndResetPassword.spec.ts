import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import jsonData from '../userdata.json';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev342711.service-now.com/');
});

test('has title', async ({ page }) => {
  const pm = new PageManager(page);

  const user = jsonData.user;
  const username = user[0].userID;
  const password = user[0].password;

  await pm.logIn().logInAs(username, password);

  //await page.waitForTimeout(2000);

  await expect(page.locator('#header-logo-image')).toBeVisible();
});
