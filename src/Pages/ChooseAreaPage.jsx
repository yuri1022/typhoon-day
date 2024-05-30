import React ,{useState}from 'react';
import Navbar from '../components/navbar';
import '../assets/scss/area.scss';
import Citybg from '../assets/svg/city.svg';
import Countrybg from '../assets/svg/country.svg';

function ChooseAreaPage() {
  const [selectedArea, setSelectedArea] = useState(null);

  const onChoose = (area) => {
    setSelectedArea(area);
  }

  console.log(selectedArea);

  return (
    <div className='choosepage'>
      <Navbar />
      <div className="choose-container w100 h100 d-flex flex-column" >
      <div className="choosetop w100 bg-black">
        <div className="title title-2 w100 h100 white d-flex align-items-center justify-content-center">選擇地區</div>
      </div>

      <div className="choosebot w100 bg-grey200 d-flex justify-content-center align-items-center">
        <div className={`choose-item h100 col-6 d-flex flex-column ${selectedArea === 'city' ? 'active' : ''}`}  style={{backgroundImage:`url(${Citybg})`}} onClick={() => onChoose('city')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-3">城市</div>
          </div>        </div>
        <div className={`choose-item h100 col-6 d-flex flex-column ${selectedArea === 'country' ? 'active' : ''}`} style={{backgroundImage:`url(${Countrybg})`}} onClick={() => onChoose('country')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-3">郊區</div>
          </div>
        </div>
      </div>
      
      <div className="button">
        <div className="btn">下一步</div>
      </div>
      </div>

    </div>
  );
}

export default ChooseAreaPage;