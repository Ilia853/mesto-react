import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            <div className="popup popup_type_edit">
                <div className="popup__container">
                    <button type="button" className="popup__close-button popup__close-button_type_edit"></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form popup__form_type_edit" name="form-name-job" noValidate>
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
                        <button type="submit" className="popup__form-button">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_mesto">
                <div className="popup__container">
                    <button type="button" className="popup__close-button popup__close-button_type_mesto"></button>
                    <h2 className="popup__title">Новое место</h2>
                    <form className="popup__form popup__form_type_mesto" id="2" name="form-name-job" noValidate>
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
                        <button type="submit" className="popup__form-button">
                            Создать
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_delete-card">
                <div className="popup__container">
                    <button type="button" className="popup__close-button popup__close-button_type_mesto"></button>
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form className="popup__form popup__form_type_delete-card">
                        <button type="submit" className="popup__form-button">
                            Да
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup popup_type_avatar">
                <div className="popup__container">
                    <button type="button" className="popup__close-button popup__close-button_type_avatar"></button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form className="popup__form popup__form_type_avatar" name="form-name-avatar" noValidate>
                        <input
                            type="url"
                            name="avatar"
                            id="popup__input-type-avatar"
                            className="popup__input popup__input_type_avatar"
                            placeholder="Ссылка на новый аватар"
                            required
                        />
                        <span className="popup__input-error-message popup__input-type-avatar-error"></span>
                        <button type="submit" className="popup__form-button">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup image-popup">
                <div className="image-popup__container">
                    <button type="button" className="popup__close-button popup__close-button_type_image"></button>
                    <img className="image-popup__pic" alt="" />
                    <h2 className="image-popup__title"></h2>
                </div>
            </div>
            <template className="card-element">
                <div className="element">
                    <img className="element__image" />
                    <button className="element__del-button" type="button"></button>
                    <div className="element__box">
                        <h2 className="element__title"></h2>
                        <div className="element__like-box">
                            <button className="element__like-button" type="button"></button>
                            <span className="element__like-score"></span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    );
}

export default App;
