// Importing hooks, data & react icons
import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";



// Main function & Destructuring
// As index changes, value changes.
const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];


// Functions 
   //If the item is bigger (people.length -1) than array,show last item. If it's less, return 0 => 1st item in the array.
const checkNumber = (number) => {
    if (number > people.length - 1) {
        return 0;
    }
    if (number < 0) {
        return people.length - 1;
    }
    return number;
}


    //  -1 to see the previous person
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }


    // +1 to see the next person
    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }


    // Return - UI Update
    return (
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
      
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    );
}

export default Review;