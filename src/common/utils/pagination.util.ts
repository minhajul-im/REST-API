export function createPaginationMeta(
  total: number,
  page: number,
  limit: number,
) {
  const totalPages = Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    pages: totalPages,
    hasPrev: page > 1,
    hasNext: page < totalPages,
    prevPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null,
  };
}

export function createPaginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
) {
  return {
    success: true,
    data,
    meta: createPaginationMeta(total, page, limit),
  };
}
