import { BrandRepository } from '../../domain/repository/brandRepository';
import { Pagination } from '../../domain/pagination';
import { apiClient } from '../api-client';
import { Brand } from './brand.interface';

export const brandRepository : BrandRepository = {

  async getBrands(pagination: Pagination) : Promise<Brand[]> {

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

  async postBrand(brand: Brand) : Promise<Brand> {
    const res = await apiClient('/brands', {
      method: 'POST',
      data: brand,
    });
    return res.data;
  },

  async editBrand(brand: Brand, brandId: number | string) : Promise<Brand> {
    const res = await apiClient(`/brands/${brandId}`, {
      method: 'PUT',
      data: brand,
    });
    return res.data;
  },

  async detailBrand(brandId: number | string) : Promise<Brand> {
    const res = await apiClient(`/brands/${brandId}`, {
      method: 'GET',
    });
    return res.data;
  },

  async deleteBrand(brandId: number | string) : Promise<Brand> {
    const res = await apiClient(`/brands/${brandId}`, {
      method: 'DELETE',
    });
    return res.data;
  },
};
