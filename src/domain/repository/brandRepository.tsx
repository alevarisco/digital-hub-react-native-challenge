import { GetBrandsResponseDto } from '../../services/brand/brand.interface';
import { Pagination } from '../pagination';

export interface BrandRepository {
    getBrands(pagination: Pagination): Promise<GetBrandsResponseDto[]>
}
