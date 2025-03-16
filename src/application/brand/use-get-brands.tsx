
import { BrandRepository } from '../../domain/repository/brandRepository';
import { Pagination } from '../../domain/pagination';
import { Brand } from '@/services/brand/brand.interface';

export const brandUseCase = async (brandRepository: BrandRepository, pagination: Pagination | undefined)  => {
    return await brandRepository.getBrands(pagination);
};

export const saveBrandUseCase = async (brandRepository: BrandRepository, brand: Brand)  => {
  return await brandRepository.postBrand(brand);
};

export const saveEditBrandUseCase = async (brandRepository: BrandRepository, brand: Brand, brandId: number | string)  => {
  return await brandRepository.editBrand(brand, brandId);
};

export const detailBrandUseCase = async (brandRepository: BrandRepository, brandId: number | string)  => {
  return await brandRepository.detailBrand(brandId);
};

export const deleteBrandUseCase = async (brandRepository: BrandRepository, brandId: number | string)  => {
  return await brandRepository.deleteBrand(brandId);
};

