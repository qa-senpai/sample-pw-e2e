import { APIRequestContext } from "@playwright/test";

export abstract class BaseApiContext {
  constructor(protected request: APIRequestContext) {}
}
