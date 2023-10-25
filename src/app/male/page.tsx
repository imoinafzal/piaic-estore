import { maleProductFethcerFromSanity } from '@/components/utils/apiCalling'
import { allProductFetcherFromSanityType } from '@/components/utils/types'
import ProductList from '@/components/views/ProductList'
import React from 'react'

const MaleProducts = async () => {
    const data = await maleProductFethcerFromSanity() as allProductFetcherFromSanityType
    
    return (
        <div>
            <ProductList ProductData={data.result}/>
        </div>
      )
}

export default MaleProducts