import { Page } from "@playwright/test";

export async function loginUser(username: string, page: Page) {
  await page.locator("").fill(username);
  await page.locator("").click();
}
