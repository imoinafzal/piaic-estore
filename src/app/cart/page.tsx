import { getAllCartProductsByUserId } from '@/components/utils/apiCalling';
import CartMain from '@/components/views/CartComp';
import { typeOfCart } from '@/lib/drizzle';
import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { LogInIcon } from 'lucide-react';
import React from 'react'

const Cart = async () => {

    const {getUser} = getKindeServerSession() ;
    const user = getUser() ;

    if(!user){
        return (
            <div className='h-[80vh] flex items-center justify-center flex-col gap-3'>
                <LoginLink>
                    <LogInIcon color='purple' size={32} />
                </LoginLink>
                <h2 className='text-2xl font-semibold text-gray-600'>
                    Please login to view cart.
                </h2>
            </div>
        )
    }

    const data : typeOfCart[] = await getAllCartProductsByUserId(user.id as string) ;

  return (
    <div>
        <CartMain user={user} data={data}/>
    </div>
  )
}

export default Cart