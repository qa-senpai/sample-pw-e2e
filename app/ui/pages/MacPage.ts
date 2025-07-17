import { Locator, Page } from "@playwright/test";
import { ContentBannerComponent } from "../components/ContentBannerComponent";
import { BasePage } from "./BasePage";

export class MacPage extends BasePage {
  private contentBannerComponent: ContentBannerComponent;
  private locators: MacPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new MacPageLocators(page);
    this.contentBannerComponent = new ContentBannerComponent(page);
  }

  async clickOnMacByTitle() {
    await this.locators.iphoneIcon.click();
  }
}

class MacPageLocators {
  iphoneIcon: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.iphoneIcon = this.page.locator("h1");
    // десятки локаторів
  }
}
