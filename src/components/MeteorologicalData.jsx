import React, { useState,useEffect } from 'react';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Graphic from '@arcgis/core/Graphic.js';
import { intersects } from '@arcgis/core/geometry/geometryEngine.js';
import { CityRange } from '../assets/data/CityRange';

function DataModal({ onClose, onTyphoonIntersection }) {
  var count = 0;
  const [typhoonIntersects, setTyphoonIntersects] = useState(false);

  function init() {
    if (count === 0) {
      count++;

      // https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
      /**
       * 
        satellite
        hybrid
        oceans
        osm
        terrain
        dark-gray / dark-gray-vector
        gray / gray-vector
        streets / streets-vector
        streets-night-vector
        streets-navigation-vector
        topo / topo-vector
        streets-relief-vector
       */
      const map = new Map({
        basemap: "dark-gray"
      });

      const view = new MapView({
        center: [121, 24],
        container: "viewDiv",
        map: map,
        zoom: 7
      });

      
      const cityPolygon = drawCity(view, CityRange.Taipei);

      const typhoonCircle = drawCircle(view, 122, 23, 1);

      checkTyphoonCityIntersection(cityPolygon, typhoonCircle);
    }
  }

  function drawCity(view, points) {
    const polygon = {
      type: "polygon",
      rings: points
    };

    const fillSymbol = {
      type: "simple-fill",
      color: [227, 0, 0, 0.2],
      outline: {
        color: [200, 0, 0],
        width: 1
      }
    };

    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);

    return polygonGraphic.geometry;
  }

  function drawCircle(view, posiX, posiY, radius) {
    var segment = 24;
    var points = [];
    for (let i = 0; i < segment; ++i) {
      points.push([posiX + radius * Math.cos(2 * i * Math.PI / segment), posiY + radius * Math.sin(2 * i * Math.PI / segment)]);
    }

    const polygon = {
      type: "polygon",
      rings: points
    };

    const fillSymbol = {
      type: "simple-fill",
      color: [227, 0, 0, 0.2],
      outline: {
        color: [200, 0, 0],
        width: 1
      }
    };

    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);

    return polygonGraphic.geometry;
  }

  function checkTyphoonCityIntersection(cityPolygon, typhoonCircle) {
    const intersection = intersects(cityPolygon, typhoonCircle);
    if (intersection) {
      console.log("Typhoon path intersects with the city");
    } else {
      console.log("Typhoon path does not intersect with the city");
    }
  }

  useEffect(() => {
    init();
  }, []);

    useEffect(() => {
    if (typhoonIntersects) {
      onTyphoonIntersection(typhoonIntersects);
    }
  }, [typhoonIntersects, onTyphoonIntersection]);

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
            <div id="viewDiv" className="typhoon-pic-container w100 bd-2 bdrs-5 mt-2" style={{ height: '25rem' }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataModal;