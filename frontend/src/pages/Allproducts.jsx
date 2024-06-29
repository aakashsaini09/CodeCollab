import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'
const Allproducts = () => {
  const [openUploadProduct, setopenUploadProduct] = useState(false)
  return (
    // all products listing
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center" >
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-purple-600 text-purple-600 hover:text-white hover:bg-purple-600 py-1 px-3 rounded-md' onClick={()=> setopenUploadProduct(true)}>Upload product</button>
      </div>
      {/* Upload product */}
      {openUploadProduct && (
      <UploadProduct onClose={()=>setopenUploadProduct(false)}/>
      )}
    </div>
  )
}

export default Allproducts
