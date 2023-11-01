import React from 'react'
import { PRODUCTS3 } from './products3'
import { Product3 } from './product3'
import Footer from '../../../Footer'

const MetalInv = () => {
    return (
        <div>
          <div  className='metalInventory'>
            <h1>Take A Look At Our KnickKnacks and Wood Art</h1>
          </div>
          <div className='products3'>
            {PRODUCTS3.map((product3) => <Product3 data={product3} />)}
          </div>
          <Footer/>
        </div>
      )
    }
    
    
    
    
    export default MetalInv