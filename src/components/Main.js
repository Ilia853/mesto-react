import React from "react";
import api from "./Api"

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__image-box">
                        <img className="profile__image" src="#" alt="Фото профиля" />
                        <div className="profile__image-overlay">
                            <span className="profile__image-edit" onClick={onEditAvatar}></span>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-container">
                            <h1 className="profile__title" name="name">
                                Жак-Ив Кусто
                            </h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <h2 className="profile__subtitle">Исследователь океана</h2>
                    </div>
                </div>
                <button className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                <div className="elements__list"></div>
            </section>
        </main>
    );
}

export default Main;
