import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import svg from '../../assets/icons/icons.svg';
import css from './ModalAddTransaction.module.css';

const MySelectComponent = ({ categoryOptions, onCategoryChange, editCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const findCategory = categoryOptions.find(
    category => category.label.toLowerCase() === editCategory
  );

  useEffect(() => setSelectedCategory(findCategory), [findCategory]);

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
          fontFamily: 'Circe',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          cursor: 'pointer',
          height: '2.75rem',
          color: state.isFocused ? '#ff6596' : '#000',
          backgroundColor: state.isFocused ? 'none' : 'none',
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
