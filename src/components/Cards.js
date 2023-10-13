import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Pottery from './images/pottery.jpg'
import WoodArt from './images/wood-art.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These Beautiful Art Works!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem text='Explore our Mexican Pottery inventory' label="Pottery Inventory" imgsrc={Pottery} path='./pottery' />
                    <CardItem text='Explore our Metal Art Work inventory' label="Metal Inventory" imgsrc={Pottery} />
                    <CardItem text='Explore our Knick Knacks inventory' label="Knick-Knacks Inventory" imgsrc={WoodArt} />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards