import { useDispatch, useSelector } from 'react-redux';

import './SectionOne.css';
import { selectFirstStepItems } from 'redux/firstStep/firstStep.selectors';
import { setStepOne } from 'redux/firstStep/firstStep.reducer';



const SectionOne = () => {
  const firstStepList = useSelector(selectFirstStepItems);
  const dispatch = useDispatch();

    const handleSelection = event => {
       dispatch(setStepOne(event.target.value));
    };

  
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
            onChange={handleSelection}
            required
          >
            <option value=""> Виберіть значення...</option>
            <option value="Company1">Варіант 1</option>
            <option value="Company2">Варіант 2</option>
            <option value="Company3">Варіант 3</option>
            <option value="Company4">Варіант 4</option>
            <option value="Company5">Варіант 5</option>
            <option value="Company5">Варіант 6</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
