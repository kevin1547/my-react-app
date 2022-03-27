import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './btnSlider'
import Photo from './Photo'
import MoveDot from './MoveDot'

export default function Slider({src}) {
    const dataSlider = src
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () =>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1);
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index =>{
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <Photo index={index} slideIndex={slideIndex} key={obj.id}/>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className='container-dots'>
            {Array.from({length:5}).map((item, index) =>{
                    return(
                    <MoveDot index={index} slideIndex={slideIndex} moveDot={moveDot} />
                    )
        })}
            </div>

        </div>
    )
}
