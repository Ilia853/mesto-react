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
import EditProfilePopup from "./EditProfilePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ name: "", link: "" });
    const [currentUser, setCurrentUser] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfile()
            .then((userData) => {
                //console.log(userData)
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log("userDataError", err);
            });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((cardsData) => {
                //console.log(cardsData)
                setCards(
                    cardsData.map((item) => (
                        <Card
                            card={item}
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            link={item.link}
                            likes={item.likes}
                            onCardClick={setSelectedCard}
                            onCardDelete={handleCardDelete}
                        />
                    ))
                );
            })
            .catch((err) => {
                console.log("initialCards", err);
            });
    }, []);

    const handleCardDelete = (id) => {
        api.delImage(id)
            .then(() => {
                console.log(cards);
                setCards((cards) => cards.filter((c) => c._id !== id));
                console.log(id);
            })
            .catch((err) => {
                console.log("deletingCard", err);
            });
    };

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
                        onCardDelete={handleCardDelete}
                    />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
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
