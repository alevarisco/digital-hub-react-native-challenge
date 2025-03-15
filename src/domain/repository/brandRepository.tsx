import { Brand } from '../../services/brand/brand.interface';
import { Pagination } from '../pagination';

export interface BrandRepository {
    getBrands(pagination: Pagination): Promise<Brand[]>
    postBrand(brand: Brand): Promise<Brand>
}
