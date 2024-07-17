import React from 'react';
import '../assets/scss/sliderwithmark.scss';

const SliderWithMarks = ({ title }) => {
  const numMarks = 10;
  const marks = [];

  for (let i = 0; i <= numMarks; i++) {
    marks.push(
      <div
        key={i}
        className="mark"
        style={{ left: `${(i / numMarks) * 100}%` }}
      />
    );
  }

  return (
    <div className="slider-section mb-1 mr-1 ml-1">
      <div className="title-5">{title}</div>
      <div className="num d-flex justify-content-between mt-1 mb-1">
        <div className="volume-min">0</div>
        <div className="volume-max">10</div>
      </div>
      <div className="slider-container ml-1 mr-1">
        <input type="range" min="0" max="10" defaultValue="5" className="slider w100" />
        <div className="marks">{marks}</div>
      </div>
    </div>
  );
};

export default SliderWithMarks;
