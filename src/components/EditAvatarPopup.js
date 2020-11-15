import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) { 

  const avatarLinkRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
        avatar: avatarLinkRef.current.value
    });
}

  return (
  <PopupWithForm 
    name="edit-pic" 
    title="Change Userpic" 
    submitButtonText="Save"
    isOpen={props.isOpen} 
    onClose={props.onClose} 
    onSubmit={handleSubmit}
  >
    <label className="form__label">
      <input 
        className="form__input form__input_edit-pic" 
        name="edit-pic" id="edit-pic" 
        type="url" 
        placeholder="Image Link" 
        ref={avatarLinkRef} 
        required 
      />
      <span className="form__input-error" id="edit-pic-error" />
    </label>
  </PopupWithForm>
  )

}

export default EditAvatarPopup;
