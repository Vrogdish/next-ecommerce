"use client"
import { useProductStore } from '@/store/products'
import React, { useEffect } from 'react'

export default function useProducts() {
 
    const getAllProducts = useProductStore((state)=>state.getAllProducts)
    const products = useProductStore((state)=>state.products)
    const isLoading = useProductStore((state)=>state.isLoading)
    const productError = useProductStore((state)=>state.error)


useEffect(()=>{
    getAllProducts()
},[getAllProducts])

  return (
    {products, productError, isLoading}
  )
}
