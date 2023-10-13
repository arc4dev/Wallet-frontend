import React, { useState } from 'react';
import Select, { components } from 'react-select';
import svg from '../../assets/icons/icons.svg';
import css from './ModalAddTransaction.module.css';

const MySelectComponent = ({ categoryOptions, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <svg className={css.categoryIcon}>
            <use xlinkHref={`${svg}#categoryIcon`} />
          </svg>
        </components.DropdownIndicator>
      )
    );
  };

  const handleCategoryChange = selectedOption => {
    setSelectedCategory(selectedOption);
    onCategoryChange(selectedOption.value);
  };

  return (
    <Select
      name="category"
      options={categoryOptions}
      placeholder="Select a category"
      isSearchable={false}
      className={css.categoryBox}
      components={{
        DropdownIndicator,
      }}
      styles={{
        control: provided => ({
          ...provided,
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
        }),
        singleValue: provided => ({
          ...provided,
          border: 'none',
          color: '#000',
          fontFamily: 'Circe',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        }),
        option: (provided, state) => ({
          ...provided,
          color: '#000',
          fontFamily: 'Circe',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          cursor: 'pointer',
          height: '2.75rem',
        }),
        menu: provided => ({
          ...provided,
          background: 'rgba(255, 255, 255, 0.70)',
          borderRadius: '20px',
          boxShadow: '0px 6px 15px 0px rgba(0, 0, 0, 0.10)',
          backdropFilter: 'blur(25px)',
        }),
      }}
      value={selectedCategory}
      onChange={handleCategoryChange}
    />
  );
};

export default MySelectComponent;
