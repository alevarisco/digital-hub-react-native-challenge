
import { BrandRepository } from '../../domain/repository/brandRepository';
import { Pagination } from '../../domain/pagination';

export const brandUseCase = async (brandRepository: BrandRepository, pagination: Pagination)  => {
    return await brandRepository.getBrands(pagination);
};

