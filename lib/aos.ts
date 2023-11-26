"use client"

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


 export const AosInit =  AOS.init({
    duration: 2000,
    once: false,
  })
 
