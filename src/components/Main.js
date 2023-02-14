import React from "react";
import api from "./utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState(null);

    React.useEffect(() => {
        api.getProfile()
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
            .catch((err) => {
                console.log("userDataError", err);
            });
    }, [userName, userDescription, userAvatar]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                setCards(
                    cardsData.map((item) => {
                        return (
                            <Card
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                link={item.link}
                                score={item.likes.length}
                                onCardClick={onCardClick}
                            />
                        );
                    })
                );
            })
            .catch((err) => {
                console.log("initialCards", err);
            });
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__image-box">
                        <img className="profile__image" src={userAvatar} alt="Фото профиля" />
                        <div className="profile__image-overlay">
                            <span className="profile__image-edit" onClick={onEditAvatar}></span>
                        </div>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-container">
                            <h1 className="profile__title" name="name">
                                {userName}
                            </h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div>
                        <h2 className="profile__subtitle">{userDescription}</h2>
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
