import { test } from "@fixtures/base.fixture";

test("create collection, should be created", async ({
  pages: { iPhonePage, watchPage }, // приклад використання деконструкції для отримання лише тих пейджей які тобі потрібні
}) => {
  await iPhonePage.clickOnIphoneByTitle();
  await watchPage.clickOnWatchByTitle();
});
