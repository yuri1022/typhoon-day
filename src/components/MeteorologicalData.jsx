import { React, useEffect } from 'react';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Graphic from '@arcgis/core/Graphic.js';
import { CityRange } from '../assets/data/CityRange';

function DataModal({ onClose }) {
  var count = 0;

  function init() {
    if(count == 0) {
      count++;

      const map = new Map({
        basemap: "hybrid"
      });
  
      const view = new MapView({
        center: [121, 24],
        container: "viewDiv",
        map: map,
        zoom: 7
      });
  
      drawCity(view, CityRange.Taipei);
  
      drawCircle(view, 122, 23, 1);
    }
  }

  function drawCity(view, points) {
    // Create a polygon geometry
    const polygon = {
      type: "polygon", // autocasts as new Polygon()
      rings: points
    };

    // Create a symbol for rendering the graphic
    const fillSymbol = {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: [227, 0, 0, 0.2],
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [200, 0, 0],
        width: 1
      }
    };

    // Add the geometry and symbol to a new graphic
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);
  }

  function drawCircle(view, posiX, posiY, radius) {
    var segment = 24;
    var points = [];
    var i = 0;
    for (i = 0; i < segment; ++i) {
      points.push([posiX + radius * Math.cos(2 * i * Math.PI / segment), posiY + radius * Math.sin(2 * i * Math.PI / segment)]);
    }

    // Create a polygon geometry
    const polygon = {
      type: "polygon", // autocasts as new Polygon()
      rings: points
    };

    // Create a symbol for rendering the graphic
    const fillSymbol = {
      type: "simple-fill", // autocasts as new SimpleFillSymbol()
      color: [227, 0, 0, 0.2],
      outline: {
        // autocasts as new SimpleLineSymbol()
        color: [200, 0, 0],
        width: 1
      }
    };

    // Add the geometry and symbol to a new graphic
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>
        </div>
        <div className="modal-body">
          <div className="data-container">
            <div className="data-title title-3 text-center">
              氣象資料
            </div>
            <div id="viewDiv" className="typhoon-pic-container w100 bd-2 bdrs-5 mt-2" style={{ height: '29rem' }}>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataModal;