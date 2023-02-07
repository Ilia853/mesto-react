import React from "react";

function ImagePopup() {
    return (
        <div className="popup image-popup">
            <div className="image-popup__container">
                <button type="button" className="popup__close-button popup__close-button_type_image"></button>
                <img className="image-popup__pic" alt="" />
                <h2 className="image-popup__title"></h2>
            </div>
        </div>
    );
}

export default ImagePopup;