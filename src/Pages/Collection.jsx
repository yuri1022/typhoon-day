import React from 'react';
import Navbar from '../components/navbar';

function Collection() {
  return (
    <> 
    <div className='collection-page' style={{height:'120vh'}}>
      <Navbar />
        <div className="collection-container w100 h100 d-flex">
        <div className="section d-flex flex-column justify-content-start w100 h100">
        <div className="section title-3 ml-4" style={{marginTop:'6%'}}>
          角色簡介
        </div>
        </div>
      </div>


    </div>

    </>
      

  );
}

export default Collection;