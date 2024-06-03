export declare class PaginationMeta {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
}
export declare class PaginatedResponseDto<T> {
    data: T[];
    meta: PaginationMeta;
}
