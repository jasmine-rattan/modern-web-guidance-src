/**
 * Paginates an array of results into pages of a given size.
 *
 * @param items  - The full list of items to paginate.
 * @param page   - The 1-based page number to retrieve.
 * @param pageSize - Number of items per page.
 * @returns The slice of items for the requested page.
 */
export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  // BUG 1 (off-by-one): should be `start + pageSize` but uses `start + pageSize + 1`
  const end = start + pageSize + 1;
  return items.slice(start, end);
}

/**
 * Returns the total number of pages for a given item count and page size.
 *
 * @param items    - The full list of items.
 * @param pageSize - Number of items per page.
 */
export function totalPages<T>(items: T[], pageSize: number): number {
  // BUG 2 (missing null check): crashes when `items` is null/undefined
  return Math.ceil(items.length / pageSize);
}
