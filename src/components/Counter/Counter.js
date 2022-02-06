import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setZero,
} from "../../reducers/counterReducer/counterActions";

import {
  incrementSizeCounter,
  decrementSizeCounter,
} from "../../reducers/counterSizeReducer/counterSizeActions";

import "./Counter.scss";

const Counter = () => {
  const dispath = useDispatch();
  const counterValue = useSelector((state) => state.counter);
  const counterSize = useSelector((state) => state.counterSize);

  return (
    <div className="counter">
      <div
        style={{ fontSize: `${counterSize}px` }}
        className="counter__current-value"
      >
        {counterValue}
      </div>
      <div className="counter__buttons">
        <button
          onClick={() => dispath(incrementCounter())}
          type="button"
          className="button__increment btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispath(decrementCounter())}
          type="button"
          className="button__decrement btn btn-danger"
        >
          -
        </button>
        <button
          onClick={() => dispath(setZero())}
          type="button"
          className="button__zero btn btn-secondary"
        >
          Set zero
        </button>
        <button
          onClick={() => dispath(incrementSizeCounter())}
          type="button"
          className="button__zero btn btn-warning"
        >
          Size +
        </button>
        <button
          onClick={() => dispath(decrementSizeCounter())}
          type="button"
          className="button__zero btn btn-warning"
        >
          Size -
        </button>
      </div>
    </div>
  );
};

export default Counter;
