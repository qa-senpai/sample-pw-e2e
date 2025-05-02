import { Locator, Page } from "@playwright/test";
import { ContentBannerComponent } from "../components/ContentBannerComponent";
import { BasePage } from "./BasePage";

export class IPhonePage extends BasePage {
  private contentBannerComponent: ContentBannerComponent;
  private locators: IPhoneLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new IPhoneLocators(page);
    this.contentBannerComponent = new ContentBannerComponent(page);
  }

  async clickOnIphoneByTitle() {
    await this.locators.iphoneIcon.click();
  }
}

class IPhoneLocators {
  iphoneIcon: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.iphoneIcon = this.page.locator("h1");
    // десятки локаторів
  }
}
