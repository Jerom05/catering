import React from 'react'
import wed from '../../Project-Image/photgraphy/wed.webp'
import birth from '../../Project-Image/photgraphy/birth.jpg'
import annual from '../../Project-Image/photgraphy/annual.jpg'
import pesonal from '../../Project-Image/photgraphy/personal.jpg'

export const data =[
    {
        id:1,
        price:20000,
        title:"Wedding Photography",
        description:"",
        feature:['Contrast Your Neutrals', "Play With Texture", "Work in Some Wood","Mix Up Your Upholstery"],
        image: wed
    },
    {
        id:2, 
        price:15000,
        description:"",
        title:" One Day Program",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: birth
    },
    {
        id:3, 
        price:8000,
        description:"",
        title:"Two Day Program",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: pesonal
    },
    {
        id:4, 
        price:20000,
        title:"Personal Photography",
        description:"",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: annual
    },
]
