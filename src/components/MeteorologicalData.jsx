import React, { useState, useEffect } from 'react';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Graphic from '@arcgis/core/Graphic.js';
import Circle from "@arcgis/core/geometry/Circle.js";
import { intersects } from '@arcgis/core/geometry/geometryEngine.js';
import { CityRange } from '../assets/data/CityRange';
import APIService from '../service/APIService.ts';

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
        zoom: 5
      });

      const selectedArea = localStorage.getItem('typhoonday-selectedArea');

      const cityPolygon = drawCity(view, selectedArea === 'city' ? CityRange.Taipei : CityRange.Hualien);

      // Get predict data
      APIService.getTyphoonPredict()
        .then(response => response.json())
        .then(res => {
          if (res.status === 'success') {
            var prevLocation = null;

            res.data.data.forEach(typhoonLocation => {
              console.log(typhoonLocation);
              drawCircle(view, typhoonLocation.longitude, typhoonLocation.latitude, typhoonLocation.radius, 'solid');
              drawCircle(view, typhoonLocation.longitude, typhoonLocation.latitude, 10, 'solid');   // 畫颱風中心的圓

              if(prevLocation) {
                drawLine(view, prevLocation[0], prevLocation[1], typhoonLocation.longitude, typhoonLocation.latitude, 'solid')
              }
              prevLocation = [typhoonLocation.longitude, typhoonLocation.latitude]
            });

            res.data.predictData.forEach(predictLocation => {
              console.log(predictLocation);
              drawCircle(view, predictLocation.longitude, predictLocation.latitude, predictLocation.radius, 'dash');
              drawCircle(view, predictLocation.longitude, predictLocation.latitude, 10, 'dash');  // 畫颱風中心的圓

              if(prevLocation) {
                drawLine(view, prevLocation[0], prevLocation[1], predictLocation.longitude, predictLocation.latitude, 'dash')
              }
              prevLocation = [predictLocation.longitude, predictLocation.latitude]
            });
          } else {
            console.error(res.message);
          }
        })
        .catch(error => {
          console.error(error);
        });;

      //const typhoonCircle = drawCircle(view, 122, 23, 100, 'solid');

      //checkTyphoonCityIntersection(cityPolygon, typhoonCircle);
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
        width: 1,
      }
    };

    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);

    return polygonGraphic.geometry;
  }

  function drawCircle(view, posiX, posiY, radius, style) {

    const circleGeometry = new Circle({
      center: [posiX, posiY],
      geodesic: true,
      numberOfPoints: 36,
      radius: radius,
      radiusUnit: "kilometers"
    });

    const fillSymbol = {
      type: "simple-fill",
      color: [227, 0, 0, 0.2],
      outline: {
        color: [200, 0, 0],
        width: 1,
        style: style
      }
    };

    const polygonGraphic = new Graphic({
      geometry: circleGeometry,
      symbol: fillSymbol
    });

    view.graphics.addMany([polygonGraphic]);

    return polygonGraphic.geometry;
  }

  function drawLine(view, startPosiX, startPosiY, endPosiX, endPosiY, style) {
    const polyline = {
      type: "polyline",
      paths: [
        [startPosiX, startPosiY], //Longitude, latitude
        [endPosiX, endPosiY], //Longitude, latitude
      ]
    };

    const simpleLineSymbol = {
      type: "simple-line",
      color: [200, 0, 0], // Orange
      width: 1,
      style: style
    };

    const polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol
    });

    view.graphics.add(polylineGraphic);

    return polylineGraphic.geometry;
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