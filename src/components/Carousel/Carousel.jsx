import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../Carousel/Carousel.scss'

import { useState } from "react";

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const angleRight = <FontAwesomeIcon icon={faAngleRight} />;

function Carousel(props) {
    const [slideId, setSlideId] = useState(0)

    const imgSize = () => {
        const slideShowImg = document.querySelector('.slideshow_container img')
        if(!slideShowImg) {
            return 0
        }
        return slideShowImg.width
    }

    const onNext = () => {
        if(slideId === props.img.length - 1){
            setSlideId(0)
        } else {
            setSlideId(slideId + 1)
        }
    }

    const onPrev = () => {
        if(slideId === 0){
            setSlideId(props.img.length - 1)
        } else {
            setSlideId(slideId - 1)
        }
    }


    return (
        <div className='slideshow'>
            <div className='slideshow_container' style={{transform: `translateX(-${slideId * imgSize()}px)`}}>
                {props.img.map((picture, i) => 
                    <img className='slideshow_container_img' alt='banniere-page-logement' src={picture} key={i} />
                )}
            </div>
            
            {props.img.length > 1 && <>
            <div className='slideshow_controls'>
                <i className='slideshow_controls_chevron' onClick={onPrev}>{angleLeft}</i>
                <i className='slideshow_controls_chevron' onClick={onNext}>{angleRight}</i>
            </div>
            <div className='slideshow_idx'>{slideId + 1} / {props.img.length}</div>
            </>}
        </div>
    )
}

export default Carousel

