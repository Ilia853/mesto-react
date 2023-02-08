import React from "react";

function Card ({id, name, link, score}) {
    return (
        <div className="element">
            <img className="element__image" style={{ backgroundImage: `url(${link})` }} />
            <button className="element__del-button" type="button"></button>
            <div className="element__box">
                <h2 className="element__title">{name}</h2>
                <div className="element__like-box">
                    <button className="element__like-button" type="button"></button>
                    <span className="element__like-score">{score}</span>
                </div>
            </div>
        </div>
    );
}

export default Card