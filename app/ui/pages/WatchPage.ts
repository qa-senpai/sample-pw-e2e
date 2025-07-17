import { Locator, Page } from "@playwright/test";
import { ContentBannerComponent } from "../components/ContentBannerComponent";
import { BasePage } from "./BasePage";

export class WatchPage extends BasePage {
  private contentBannerComponent: ContentBannerComponent;
  private locators: WatchPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new WatchPageLocators(page);
    this.contentBannerComponent = new ContentBannerComponent(page);
  }

  async clickOnWatchByTitle() {
    await this.locators.iphoneIcon.click();
  }
}

class WatchPageLocators {
  iphoneIcon: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.iphoneIcon = this.page.locator("h1");
    // десятки локаторів
  }
}
