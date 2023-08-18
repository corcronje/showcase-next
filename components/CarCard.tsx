"use client";
import Image from 'next/image';
import React, {useState} from 'react'
import { CarProps } from '@/types'
import CustomButton from './CustomButton';

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car} : CarCardProps) => {
  return (
    <div>{car.model}</div>
  )
}

export default CarCard