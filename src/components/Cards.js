import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out These Beautiful Art Works!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='/public/images/pottery.jpg' text='Explore our inventory of varies Mexican Pottery' label="Pottery Inventory" path='/pottery-inventory' />
                    <CardItem src='images/.jpg' text='Explore our inventory of varies Metal Art Work' label="Metal Inventory" path='/metal-inventory' />
                    <CardItem src='images/wood-art.jpg' text='Explore our inventory of varies Knick Knacks' label="Knick-Knacks Inventory" path='/wood-inventory' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards