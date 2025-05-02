import { Page } from "@playwright/test";

export class ContentBannerComponent {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
