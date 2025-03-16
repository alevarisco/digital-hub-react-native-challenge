export interface Pagination {
    page: number,
    limit: number,
    sort: string,
    order: string,
    end: boolean,
    query: string | undefined,
}
