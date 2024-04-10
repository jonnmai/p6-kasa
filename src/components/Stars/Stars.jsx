import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />
const starEmpty = <FontAwesomeIcon icon={faStar} />

function Stars(props) {
    const starValue = props.starValue
    // console.log(starValue);

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='housing_page_header_hoster_ratings'>
            {range.map((rangeElem) =>
                starValue >= rangeElem ? 
                    <span key={rangeElem.toString()} className='housing_page_header_hoster_ratings_star'>{star}</span> 
                    : <span key={rangeElem.toString()}  className='housing_page_header_hoster_ratings_star housing_page_header_hoster_ratings_starempty'>{starEmpty}</span>
            )}
        </div>
    )
}

export default Stars;