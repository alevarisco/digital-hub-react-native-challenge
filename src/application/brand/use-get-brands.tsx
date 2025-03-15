
import { BrandRepository } from '../../domain/repository/brandRepository';
import { Pagination } from '../../domain/pagination';
import { Brand } from '@/services/brand/brand.interface';

export const brandUseCase = async (brandRepository: BrandRepository, pagination: Pagination)  => {
    return await brandRepository.getBrands(pagination);
};

export const saveBrandUseCase = async (brandRepository: BrandRepository, brand: Brand)  => {
  return await brandRepository.postBrand(brand);
};

