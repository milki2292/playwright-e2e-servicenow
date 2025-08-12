import { Page } from '@playwright/test';
import { LogInToSn } from './logInToSn';

export class PageManager {
  private readonly page: Page;
  private readonly logInToSn: LogInToSn;

  constructor(page: Page) {
    this.page = page;
    this.logInToSn = new LogInToSn(this.page);
  }

  logIn() {
    return this.logInToSn;
  }
}
