import { test as base } from "@playwright/test";
import { PageManager } from "@page/PageManager";
import { ControllersManage } from "@controllers/ControllersManage";

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
