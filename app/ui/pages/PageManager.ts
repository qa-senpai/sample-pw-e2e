import { Page } from "@playwright/test";
import { IPhonePage } from "./IPhonePage";

export class PageManager {
  iPhonePage: IPhonePage;

  constructor(page: Page) {
    this.iPhonePage = new IPhonePage(page);
  }
}
