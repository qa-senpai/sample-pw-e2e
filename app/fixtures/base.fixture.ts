import { test as base } from "@playwright/test";
import { PageManager } from "../ui/pages/PageManager";
import { ControllersManage } from "app/api/ControllersManage";

type MyPages = {
  pages: PageManager;
  apiClient: ControllersManage;
};

export const test = base.extend<MyPages>({
  pages: ({ page }, use) => {
    const pages = new PageManager(page);
    use(pages);
  },
  apiClient: ({ request }, use) => {
    const apiClient = new ControllersManage(request);
    use(apiClient);
  },
});
