import { BaseApiContext } from "../BaseApiContext";

export class SearchController extends BaseApiContext {
  async getSearchRequest(data: { query: string }) {
    const response = await this.request.get(
      `/api/v1/search?site=19&query=${data.query}`
    );
    return response;
  }
}
