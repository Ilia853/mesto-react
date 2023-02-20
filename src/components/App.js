import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardsContext from "../contexts/CardsContext";
import Card from "./Card";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ name: "", link: "" });
    const [currentUser, setCurrentUser] = React.useState("");
    const [cards, setCards] = React.useState(null);

    React.useEffect(() => {
        api.getProfile()
            .then((userData) => {
                console.log(userData)
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log("userDataError", err);
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                console.log(cardsData)
                setCards(
                    cardsData.map((item) => {
                        return (
                            <Card
                                card={item}
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                link={item.link}
                                likes={item.likes}
                                onCardClick={setSelectedCard}
                            />
                        );
                    })
                );
            })
            .catch((err) => {
                console.log("initialCards", err);
            });
    }, []);

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ name: "", link: "" });
    }

    return (
        <div>
            <CurrentUserContext.Provider value={currentUser}>
                <CardsContext.Provider value={cards}>
                    <Header />
                    <Main
                        onEditProfile={() => setIsEditProfilePopupOpen(true)}
                        onAddPlace={() => setIsAddPlacePopupOpen(true)}
                        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
                        onCardClick={setSelectedCard}
                    />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                    <PopupWithForm
                        title="Редактировать профиль"
                        name="edit"
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        buttonText="Сохранить"
                    >
                        <input
                            type="text"
                            name="name"
                            id="popup__input-type-name"
                            className="popup__input popup__input_type_name"
                            placeholder="Имя"
                            required
                            minLength="2"
                            maxLength="40"
                        />
                        <span className="popup__input-error-message popup__input-type-name-error"></span>
                        <input
                            type="text"
                            name="about"
                            id="popup__input-type-job"
                            className="popup__input popup__input_type_job"
                            placeholder="Занятие"
                            required
                            minLength="2"
                            maxLength="200"
                        />
                        <span className="popup__input-error-message popup__input-type-job-error"></span>
                    </PopupWithForm>
                    <PopupWithForm
                        title="Новое место"
                        name="mesto"
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        buttonText="Создать"
                    >
                        <input
                            type="text"
                            name="name"
                            id="popup__input-type-mesto"
                            className="popup__input popup__input_type_mesto"
                            placeholder="Название"
                            required
                            minLength="2"
                            maxLength="30"
                        />
                        <span className="popup__input-error-message popup__input-type-mesto-error"></span>
                        <input
                            type="url"
                            name="link"
                            id="popup__input-type-link"
                            className="popup__input popup__input_type_link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__input-error-message popup__input-type-link-error"></span>
                    </PopupWithForm>
                    <PopupWithForm
                        title="Обновить аватар"
                        name="avatar"
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        buttonText="Сохранить"
                    >
                        <input
                            type="url"
                            name="avatar"
                            id="popup__input-type-avatar"
                            className="popup__input popup__input_type_avatar"
                            placeholder="Ссылка на новый аватар"
                            required
                        />
                        <span className="popup__input-error-message popup__input-type-avatar-error"></span>
                    </PopupWithForm>
                    <Footer />
                </CardsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
