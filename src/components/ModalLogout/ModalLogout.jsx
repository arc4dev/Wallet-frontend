// (Nie ma w makietach). W rzeczywistości jest to wyjaśnienie, czy użytkownik naprawdę chce wyjść i "tak" lub "nie". Pojawia się, gdy użytkownik naciska przycisk wyjścia z programu.

// Układ telefon, tablet, desktop (okno modalne powinno być na górze wszystkich elementów)

// Na przycisku "Nie" wykorzystywać akcję na zamykanie okna modalnego, także ta akcja powinna być wywoływana przez kliknięcie przycisku Escape, a także naciśnięcie na szare tło

// Na przycisku "Tak" napisać operację wylogowania, przy udanej operacji wyczyszczać cały redux store w initial state, przy nieudanej operacji za pomocą biblioteki react-toastify wyświetlać błąd i zamykać okno modalne

import ReactModal from 'react-modal';
import css from './ModalLogout.module.css';
import { useState } from 'react';
import svg from '../../assets/icons/icons.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsModalLogoutOpen } from 'redux/global/selectors';
// import { globalReset } from 'redux/global/slice';

const ModalLogout = () => {
  // const dispatch = useDispatch();
  // const isLogin = useSelector(selectIsModalLogoutOpen);
  const [modalIsOpen, setIsOpen] = useState(false);

  const notifySuccess = () =>
    toast.success('I glad YOU stay!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  const notify = () =>
    toast('See you soon!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    notifySuccess();
    setIsOpen(false);
  };
  const logoutModal = () => {
    notify();
    setIsOpen(false);
  };
  // const logout = () => {
  //   dispatch(globalReset());
  //   dispatch(financeReset());
  //   dispatch(authReset());
  // }
  return (
    <>
      <div>
        <div onClick={openModal} className={css['btn-icon']}>
          <svg width="20" height="20">
            <use xlinkHref={`${svg}#icon-exit`}></use>
          </svg>
        </div>
        {modalIsOpen && (
          <ReactModal
            isOpen={modalIsOpen}
            // isOpen={isLogin}
            onRequestClose={closeModal}
            className={css.modalLogout}
            contentLabel="Example Modal"
          >
            <h3 className={css['header-3']}>Are you really want to leave?</h3>
            <h4 className={css['header-4']}>Choose wisely</h4>

            <div className={css['btn-wrapper']}>
              <button className={css.button} onClick={logoutModal}>
                logout
              </button>
              <button className={css.button} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </ReactModal>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default ModalLogout;
