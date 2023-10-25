'use client'

import { searchProductFethcerFromSanity } from '@/components/utils/apiCalling';
import { allProductFetcherFromSanityType } from '@/components/utils/types';
import ProductList from '@/components/views/ProductList';
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const Search = async() => {
    const params = useSearchParams() ;
    if(!params.has("query")) redirect("/products")

    const searchValue = params.get("query")  as string ;

    const data = await searchProductFethcerFromSanity(searchValue) as allProductFetcherFromSanityType ;

  return (
    <div>
        <ProductList ProductData={data.result}/>
    </div>
  )
}

export default Search