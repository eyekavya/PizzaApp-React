/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { StyledTopping } from "./StyledTopping";
import info from "../../images/info.svg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { usePizza } from "../../context/pizzaContext";

function Topping() {
  const { pizza, setPizza, setToppingPrice } = usePizza();
  const { toppings } = pizza;

  const updateTopping = (event) => {
    setPizza({
      ...pizza,
      toppings: {
        ...toppings,
        [event.target.name]: event.target.checked,
      },
    });
  };

  useEffect(() => {
    let selectedTopping = Object.keys(toppings).filter((key) => {
      return toppings[key];
    });

    setToppingPrice(selectedTopping.length * 45);
  }, [pizza]);

  return (
    <StyledTopping>
      <div className="wrapper">
        <h3 className="sub-heading">
          Select Toppings{" "}
          <img
            src={info}
            alt="INR 45"
            className="info"
            data-tooltip-id="app-title"
          />
          <ReactTooltip
            className="info-tooltip"
            id="app-title"
            place="right"
            content="₹ 45 per topping"
          />
        </h3>
        <div className="flex-topping">
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                // Point to be noted my lord
                checked={toppings.paneer}
                name="paneer"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Paneer
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.corn}
                name="corn"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Corn
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.onion}
                name="onion"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Onion
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.tomato}
                name="tomato"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Tomato
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.mushroom}
                name="mushroom"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Mushroom
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.redpepper}
                name="redpepper"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Red Pepper
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.capsicum}
                name="capsicum"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Capsicum
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                checked={toppings.jalapeno}
                name="jalapeno"
                onChange={updateTopping}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Jalapeno
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledTopping>
  );
}

export default Topping;
