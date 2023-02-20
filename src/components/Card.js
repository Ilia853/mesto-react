import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";


function Card ({id, name, link, likes, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    
    const handleCardClick = () => {
        onCardClick({ name, link });
    }

    const isOwn = id === currentUser._id;

    const isLiked = likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__like-button ${isLiked && 'element__like-button_active'}` 
      );

    return (
        <div className="element" key={id}>
            <img className="element__image" alt={name} src={link} onClick={handleCardClick} />
            {isOwn && <button className="element__del-button" type="button" />}
            <div className="element__box">
                <h2 className="element__title">{name}</h2>
                <div className="element__like-box">
                    <button className={cardLikeButtonClassName} type="button"></button>
                    <span className="element__like-score">{likes.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Card