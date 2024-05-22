import React, { useState } from 'react'
import { MdClose } from "react-icons/md";

const UploadProduct = ({onClose}) => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        productImage: "",
        description: "",
        price: "",
        selling: ""
    })
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-50 top-0 right-0 bottom-0 flex justify-center items-center'>
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]">
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-lg'>Upload Product</h2>
            <div className='w-fit ml-auto text-2xl hover:text-purple-600 cursor-pointer' onClick={onClose}>
            <MdClose />
            </div>
        </div>
        <form action="">
            <label htmlFor="productName">Product Name:(5:57) time to start</label>
        </form>
      </div>
    </div>
  )
}

export default UploadProduct
