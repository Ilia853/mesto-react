import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose }) {
    
    return (
        <div className={`popup popup_type_${name} ` + (isOpen ? "image-popup_opened" : "")}>
            <div className="popup__container">
                <button type="button" className={`popup__close-button popup__close-button_type_${name}`} onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_type_${name}`} name={`form-name-${name}`} noValidate>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
