import { Pagination } from '../../domain/pagination';
import { Brand } from '../../services/brand/brand.interface';

export interface BrandTableState {
    items: Brand[];
    pagination: Pagination,
}
