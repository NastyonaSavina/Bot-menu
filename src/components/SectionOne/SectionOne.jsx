import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import './SectionOne.css';



const SectionOne = () => {


//   const handleChange = (value, name) => {
//     setValues(prev => ({ ...prev, [name]: value }));
//   };

//   const handleChangeCompany = event => {
//      setValues(prev => ({ ...prev, companyName: event.target.value }));
//   };

//   const handleChangeCurrency = event => {
//     if (event.target.checked === true) {
//       setValues(prev => ({ ...prev, currency: event.target.value }));
//     }
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     try {

//       await dispatch(addBill(values));

//       setIsOpenForm(false);
//       toast.success('Success!');
//       setValues(initialState);
//     } catch (e) {
//       console.log(e);
//       toast.error('Some error');
//     }
//   };

//   const handleOpenForm = (event) => {
//         setIsOpenForm(true);

// }



  return (
    <>
      <div className="section-layout">
        <div className="section-text-area"></div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">
            Preference
          </label>
          <select
            className="form-select"
            id="autoSizingSelect"
            // onChange={handleChangeCompany}
            required
          >
            <option value=""> Виберіть значення...</option>
            <option value="Company1">Варіант 1</option>
            <option value="Company2">Варіант 2</option>
            <option value="Company3">Варіант 3</option>
            <option value="Company4">Варіант 4</option>
            <option value="Company5">Варіант 5</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
