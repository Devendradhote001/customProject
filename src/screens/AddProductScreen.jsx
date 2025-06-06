import React from 'react'
import { AddProductForm } from '../components/AddProductForm'

export const AddProductScreen = () => {
  return (
    <div className='p-4'>
    <h1 className='text-2xl'>Add your Product</h1>
    <AddProductForm />
    </div>
  )
}
