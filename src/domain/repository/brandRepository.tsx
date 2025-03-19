import { Brand } from '../../services/brand/brand.interface';
import { Pagination } from '../pagination';

export interface BrandRepository {
    getBrands(pagination: Pagination | undefined): Promise<Brand[]>
    postBrand(brand: Brand): Promise<Brand>
    editBrand(brand: Brand, brandId: number | string): Promise<Brand>
    detailBrand(brandId: number | string): Promise<Brand>
    deleteBrand(brandId: number | string): Promise<Brand>
}
