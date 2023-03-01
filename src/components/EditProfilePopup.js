import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    return (
        <PopupWithForm
                        title="Редактировать профиль"
                        name="edit"
                        isOpen={isOpen}
                        onClose={onClose}
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
    )
}

export default EditProfilePopup;