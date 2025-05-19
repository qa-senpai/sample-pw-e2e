import { expect } from "@playwright/test";
import { test } from "@uiFixture/base.fixture";

test("has title", async ({ pages, apiClient }) => {
  const response = await apiClient.searchController.getSearchRequest({
    query: "IPhone",
  });

  expect(response.ok()).toBeTruthy();

  await pages.iPhonePage.clickOnIphoneByTitle();
});
