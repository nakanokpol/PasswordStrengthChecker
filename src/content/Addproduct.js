import React from 'react'
import Tabadd from './Addproduct/Tabadd'
import { global_url_token } from '../page/global_url_token'

function Addproduct() {
  return (
    <div>
        <>
        <h1 class='m-4  xl:text-2xl font-semibold	md:text-xl '>เพิ่มสินค้า</h1>
        <Tabadd/>
        </>
    </div>
  )
}

export default Addproduct