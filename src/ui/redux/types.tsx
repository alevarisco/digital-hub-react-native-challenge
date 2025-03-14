import { Pagination } from '../../domain/pagination';
import { GetBrandsResponseDto } from '../../services/brand/brand.interface';

export interface BrandTableState {
    items: GetBrandsResponseDto[];
    pagination: Pagination,
}
