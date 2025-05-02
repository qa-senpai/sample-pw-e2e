import { APIRequestContext } from "@playwright/test";
import { SearchController } from "./controllers/SearchController";

export class ControllersManage {
  searchController: SearchController;

  constructor(request: APIRequestContext) {
    this.searchController = new SearchController(request);
  }
}
