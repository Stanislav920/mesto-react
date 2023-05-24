import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    console.log(currentUser);
    setName(currentUser.name);
    setSubtitle(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleSubtitleChange(evt) {
    setSubtitle(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name: name,
      about: subtitle
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="username-input"
        type="text"
        className="popup__input"
        name="username"
        placeholder="Ваше имя"
        value={name}
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        onChange={handleNameChange}
      />
      <span className="username-input-error popup__input-error"> </span>

      <input
        id="subtitle-input"
        type="text"
        className="popup__input"
        name="subtitle"
        placeholder="О себе"
        autoComplete="off"
        required
        value={subtitle}
        minLength="2"
        maxLength="200"
        onChange={handleSubtitleChange}
      />
      <span className="subtitle-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
