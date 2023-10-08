import React, { useState } from 'react';
import css from './ButtonAddTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className={css.ButtonAddTransactions} onClick={handleOpenModal}>
        <svg className={css.AddIcon}>
          <use xlinkHref={`${svg}#icon-plus`}></use>
        </svg>
      </div>

      {isModalOpen && <ModalAddTransaction setOpenModal={setIsModalOpen} />}
    </div>
  );
};

export default ButtonAddTransactions;

// testowanie edycji

// const ButtonAddTransactions = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false); // Dodajemy stan dla trybu edycji
//   const [transactionToEdit, setTransactionToEdit] = useState(null); // Dodajemy dane transakcji do edycji

//   const handleOpenModal = transactionData => {
//     setIsModalOpen(true);
//     setIsEditing(true); // Ustaw tryb edycji na true
//     setTransactionToEdit(transactionData); // Przekaż dane transakcji do edycji
//   };

//   return (
//     <div>
//       <div className={css.ButtonAddTransactions} onClick={() => handleOpenModal(null)}>
//         <svg className={css.AddIcon}>
//           <use xlinkHref={`${svg}#icon-plus`}></use>
//         </svg>
//       </div>

//       {isModalOpen && (
//         <ModalAddTransaction
//           setOpenModal={setIsModalOpen}
//           isEditing={isEditing}
//           transactionToEdit={transactionToEdit} // Przekazujemy dane transakcji do edycji
//         />
//       )}
//     </div>
//   );
// };

// export default ButtonAddTransactions;
