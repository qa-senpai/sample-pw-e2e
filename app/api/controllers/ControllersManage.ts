import { APIRequestContext } from "@playwright/test";
import { SearchController } from "./SearchController";

export class ControllersManage {
  searchController: SearchController;

  constructor(request: APIRequestContext) {
    this.searchController = new SearchController(request);
  }
}
