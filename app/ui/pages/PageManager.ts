import { Page } from "@playwright/test";
import { IPhonePage } from "./IPhonePage";
import { MacPage } from "./MacPage";
import { WatchPage } from "./WatchPage";

export class PageManager {
  iPhonePage: IPhonePage;
  macPage: MacPage;
  watchPage: WatchPage;

  constructor(page: Page) {
    this.iPhonePage = new IPhonePage(page);
    this.macPage = new MacPage(page);
    this.watchPage = new WatchPage(page);
  }
}
