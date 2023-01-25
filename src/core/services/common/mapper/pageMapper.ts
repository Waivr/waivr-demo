import { MappingException } from '../../../domain/exceptions/mappingException';
import { Page } from '../../../domain/common/pageable/page';
import { Pageable } from '../../../domain/common/pageable/pageable';
import { Sortable } from '../../../domain/common/pageable/sortable';

const mapSortable = (sort: any): Sortable => new Sortable(
    sort.empty,
    sort.sorted,
    sort.unsorted,
  );

/**
 * Needs backend to change how pageable is being serialized.
 * For now, it was removed from mapping.
 *
 * @param pageable
 */
const mapPageable = (pageable: any): Pageable => {
  const sort = mapSortable(pageable.sort);

  return new Pageable(
    pageable.offset,
    pageable.pageNumber,
    pageable.pageSize,
    pageable.paged,
    sort,
    pageable.unpaged,
  );
};

const mapPage = <T>(page: any, content: T[]): Page<T> => {
  const sort = mapSortable(page.sort);
  return new Page(
    content,
    page.empty,
    page.first,
    page.last,
    page.number,
    page.numberOfElements,
    page.size,
    sort
  );
};

const pageMapper = <T>(page: any, content: T[]): Page<T> => {
  try {
    return mapPage(page, content);
  } catch (err) {
    const stack = err instanceof Error ? err.stack : undefined;
    throw new MappingException(`Unknown err=${err} has happened while mapping Page response.`, stack);
  }
};

export default pageMapper;
