import React ,{useState,useEffect}from 'react';
import Navbar from '../components/navbar';
import '../assets/scss/area.scss';
import Citybg from '../assets/svg/city.svg';
import Countybg from '../assets/svg/county.svg';
import { useNavigate } from 'react-router-dom';


function ChooseAreaPage() {
  const [selectedArea, setSelectedArea] = useState('city');
  const navigate = useNavigate();

  useEffect(() => {
    //initial set selected area = city
    localStorage.setItem('typhoonday-selectedArea', 'city');
  },[]);

  const onChoose = (area) => {
    localStorage.setItem('typhoonday-selectedArea', area);
    setSelectedArea(area);
  }

    const handleNext = () =>{
    navigate('/main')
  }

  console.log(selectedArea);

  return (
    <div className='choosepage'>
      <Navbar />
      <div className="choose-container w100 h100 d-flex flex-column" >
      <div className="choosetop w100 bg-black">
        <div className="title title-2 w100 h100 white d-flex align-items-center justify-content-center">選擇地區</div>
      </div>
      <div className="choosetop-mb w100 d-flex">
        <div className={`choose-item-mb h100 col-6 ${selectedArea === 'city' ? 'active' : 'inactive'}`} onClick={() => onChoose('city')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-2">城市</div>
          </div>        
        </div>
      <div className={`choose-item-mb h100 col-6 ${selectedArea === 'county' ? 'active' : 'inactive'}`} onClick={() => onChoose('county')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-2">郊區</div>
          </div>        
        </div>
      </div>



      <div className="choosebot w100 bg-grey200 d-flex justify-content-center align-items-center">

        <div className={`choose-item-pc h100 col-12 col-md-6 d-flex flex-column ${selectedArea === 'city' ? 'active' : 'inactive'}`}  style={{backgroundImage:`url(${Citybg})`}} onClick={() => onChoose('city')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-3">城市</div>
          </div>        
            <div className={`description text-center bg-black bdrs-5 ${selectedArea === 'city' ? 'active' : ''}`}>
            <div className="text title-5 white mt-2 mb-2 mr-3 ml-3">台北是一個人口密集、擁有現代基礎設施的大城市，需考慮到公共安全和經濟影響。</div>
            </div>
          </div>
        <div className={`choose-item-pc h100 col-12 col-md-6 d-flex flex-column ${selectedArea === 'county' ? 'active' : 'inactive'}`} style={{backgroundImage:`url(${Countybg})`}} onClick={() => onChoose('county')}>
        <div className="item d-flex align-items-center justify-content-center">
          <div className="title-3">郊區</div>
          </div>
          <div className={`description text-center bg-black bdrs-5 ${selectedArea === 'county' ? 'active' : ''}`}>
            <div className="text title-5 white mt-2 mb-2 mr-3 ml-3">花蓮是一個多山多河谷的地方，居民主要從事農業和漁業，對於天氣變化很敏感。</div>
            </div>
        </div>
      </div>
      
      <div className="button">
        <div className="btn" onClick={handleNext}>下一步</div>
      </div>
      </div>

    </div>
  );
}

export default ChooseAreaPage;