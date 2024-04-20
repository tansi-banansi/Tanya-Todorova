import React, {useState} from "react";
import {Button, Carousel} from 'react-bootstrap'
import carouselAttributes from "../utilities/carouselAttributes"

function CustomCarousel(){

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex)=>{
        setActiveIndex(selectedIndex)
    }

    return(

            <div className="d-flex flex-column justify-content-center align-items-center ">

                <Carousel data-bs-theme='dark' activeIndex={activeIndex} onSelect={handleSelect} className="pb-5">  
        
                {carouselAttributes.map((item, index) =>(

                        <Carousel.Item key={index}>
                            
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <img src={item.path} className="d-block w-100-xs w-50-sm rounded-2 shadow" alt={item.alt}/>
                            </div> 

                        </Carousel.Item>
                ))}

                </Carousel>

                <div className="pt-4 text-center">
                    <h5>{carouselAttributes[activeIndex].caption}</h5>
                    <p>{carouselAttributes[activeIndex].info}</p>
                    <p className="fst-italic fw-light">{carouselAttributes[activeIndex].technologies}</p>
                    <a href={carouselAttributes[activeIndex].buttonLink} target="blank"><Button type='button' className='bg-button-custom  fw-medium px-5 py-2 rounded-0 '>See More</Button></a>
                </div>

            </div>
        )
    }

export default CustomCarousel;