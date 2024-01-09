export namespace TCommon {
  export type Nullable<T> = T | null;

  export type QueryType<FiltersType = unknown> = {
    search?: string;
    page?: number;
    size?: number;
    filters?: FiltersType;
  };

  export type PaginationResponse<T> = {
    data: T[];
    meta: {
      page: number;
      size: number;
      count: number;
    };
  };
}
