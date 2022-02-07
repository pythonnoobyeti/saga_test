import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCharacterAync,
  getPlanetsAync,
} from "../../reducers/swapiReducer/swapiActions";

import "./Swapi.scss";

const Swapi = () => {
  const dispath = useDispatch();
  const info = useSelector((state) => state.swdata);

  return (
    <div className="swapi">
      <h1 className="swapi__title">Star Wars information</h1>
      <div className="swapi__buttons">
        <button
          onClick={async () => dispath(getCharacterAync())}
          type="button"
          className="button__zero btn btn-warning"
        >
          Characters
        </button>
        <button
          onClick={async () => dispath(getPlanetsAync())}
          type="button"
          className="button__zero btn btn-info"
        >
          Planets
        </button>
      </div>
      <div className="swapi__info">
        {info.map((item, index) => (
          <div key={item.name} className="swapi__info-item">
            {index + 1}. {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swapi;
