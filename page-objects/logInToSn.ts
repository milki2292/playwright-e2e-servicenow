import { Page, expect } from '@playwright/test';

export class LogInToSn {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logInAs(login: string, password: string) {
    await this.page.locator('#user_name').fill(login);
    await this.page.locator('#user_password').fill(password);

    await this.page.getByRole('button', { name: 'Log in' }).click();
  }
}
