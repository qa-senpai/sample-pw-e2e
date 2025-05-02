import { Page } from "@playwright/test";

export class BasePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
