import { kidsProductFethcerFromSanity } from '@/components/utils/apiCalling'
import { allProductFetcherFromSanityType } from '@/components/utils/types'
import ProductList from '@/components/views/ProductList'
import React from 'react'

const KidsProducts = async () => {
    const data = await kidsProductFethcerFromSanity() as allProductFetcherFromSanityType
    
    return (
        <div>
            <ProductList ProductData={data.result}/>
        </div>
      )
}

export default KidsProducts