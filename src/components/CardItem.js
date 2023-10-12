import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
// import Pottery from './images/pottery.jpg'

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img className='cards__item__img' src={props.imgsrc} alt='Inventory' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>

        </li>
            {/* <img className='test' src={props.imgsrc}  /> */}
    </>
  )
}

export default CardItem