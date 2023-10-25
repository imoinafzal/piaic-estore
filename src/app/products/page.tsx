import React from 'react';
import { allProductFetcherFromSanity } from '@/components/utils/apiCalling';
import { allProductFetcherFromSanityType } from '@/components/utils/types';
import ProductList from '@/components/views/ProductList';

export default async function AllProducts() {
    let data = await allProductFetcherFromSanity() as allProductFetcherFromSanityType ;

  return (
    <div>
        <ProductList ProductData={data.result}/>
    </div>
  )
}
