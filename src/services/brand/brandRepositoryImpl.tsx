import { BrandRepository } from '../../domain/repository/brandRepository';
import { Pagination } from '../../domain/pagination';
import { apiClient } from '../api-client';
import { GetBrandsResponseDto } from './brand.interface';

export const brandRepository : BrandRepository = {

  async getBrands(pagination: Pagination) : Promise<GetBrandsResponseDto[]> {

    let params : any = {
      '_page': pagination.page,
      '_limit': pagination.limit,
      '_sort': pagination.sort,
      '_order': pagination.order,
    };

    if(pagination.query) {
      params = {
        ...params,
        'q': pagination.query,
      };
    }

    const res = await apiClient('/brands', {
      method: 'GET',
      params,
    });
    return res.data;
  },
};
