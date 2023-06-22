
import './SectionTwo.css';
import GroupArrow from './Group arrow.png';


const SectionTwo= () => {
  
  return (
    <>
      <div className="section-two-arrow">
        <img
          src={GroupArrow}
          // className="img-fluid rounded-start mb-4"
          // style={{ width: 150 }}
          alt="Group arrow"
        />
      </div>

      <div className="section-two-layout">
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
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Company1"
                id="flexCheckDefault"
                // onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Company1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Company1"
                id="flexCheckDefault"
                // onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Company1
              </label>
            </div>
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

export default SectionTwo;
