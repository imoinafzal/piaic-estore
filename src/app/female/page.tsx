import { femaleProductFethcerFromSanity } from '@/components/utils/apiCalling'
import { allProductFetcherFromSanityType } from '@/components/utils/types'
import ProductList from '@/components/views/ProductList'
import React from 'react'

const FemalProducts = async () => {
    const maleData = await femaleProductFethcerFromSanity() as allProductFetcherFromSanityType
    
    return (
        <div>
            <ProductList ProductData={maleData.result}/>
        </div>
      )
}

export default FemalProducts