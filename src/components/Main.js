import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardsContext from "../contexts/CardsContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    
    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__image-box">
                        <img className="profile__image" src={currentUser.avatar} alt="Фото профиля" />
                        <div className="profile__image-overlay">
                            <span className="profile__image-edit" onClick={onEditAvatar}></span>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-container">
                            <h1 className="profile__title" name="name">
                                {currentUser.name}
                            </h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <h2 className="profile__subtitle">{currentUser.about}</h2>
                    </div>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <div className="elements__list">{cards}</div>
            </section>
        </main>
    );
}

export default Main;
