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
                Log out
              </button>
              <button className={css.button} onClick={closeModal}>
                Cancel
              </button>
            </div>
            <svg
              className={css.background}
              xmlns="http://www.w3.org/2000/svg"
              width="280"
              height="93"
              viewBox="0 0 280 93"
              fill="none"
            >
              <path
                d="M22.4 38.5645L0 61.8797V73C0 84.0457 8.95431 93 20 93H250C266.569 93 280 79.5686 280 63V20.1766C278.98 19.5416 277.495 19.3295 276.864 19.2798C271.954 18.8929 269.138 22.5841 265.216 26.0053L265.167 26.0478C264.008 27.06 261.108 29.5923 255.808 29.5923C250.432 29.5923 246.699 27.201 245.504 26.0053L227.584 7.17389C225.195 4.78259 219.968 0 214.144 0C208.32 0 203.691 4.78259 201.6 7.17389L118.72 87.4366C117.376 88.9312 113.254 91.9203 107.52 91.9203C101.786 91.9203 97.664 88.9312 96.32 87.4366L48.384 36.3227C46.7413 34.5292 41.9328 30.9423 35.84 30.9423C29.7472 30.9423 24.3413 36.0238 22.4 38.5645Z"
                fill="url(#paint0_linear_53401_98)"
                fillOpacity="0.2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_53401_98"
                  x1="140"
                  y1="-8.06575"
                  x2="140"
                  y2="108.081"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </ReactModal>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default ModalLogout;
