import React from "react";

function Main() {
    // const profileEditButton = document.querySelector('.profile__edit-button');

    // function handleEditProfileClick() {
    //     const profileEditPopup = document.querySelector('.popup_type_edit');
    //     profileEditPopup.classList.add('image-popup_opened');
    // }

    // profileEditButton.addEventListener('click', handleEditProfileClick);

    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__image-box">
                        <img className="profile__image" src="#" alt="Фото профиля" />
                        <div className="profile__image-overlay">
                            <span className="profile__image-edit"></span>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-container">
                            <h1 className="profile__title" name="name">
                                Жак-Ив Кусто
                            </h1>
                            <button className="profile__edit-button" type="button"></button>
                        </div>
                        <h2 className="profile__subtitle">Исследователь океана</h2>
                    </div>
                </div>
                <button className="profile__add-button"></button>
            </section>
            <section className="elements">
                <div className="elements__list"></div>
            </section>
        </main>
    );
}

export default Main;
