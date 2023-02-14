import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ name: "", link: "" });

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ name: "", link: "" });
    }

    return (
        <div>
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
                    required
                    minLength="2"
                    maxLength="200"
                />
                <span className="popup__input-error-message popup__input-type-job-error"></span>
            </PopupWithForm>
            <PopupWithForm title="Новое место" name="mesto" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Создать">
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
        </div>
    );
}

export default App;
