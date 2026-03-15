import Button from "./Button";
import "../styles/check-out/check-out.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckOut = ({ onCancel, onSubmit }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    onSubmit({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  return (
    <form onSubmit={confirmHandler} className="form">
      <div className={`control ${formInputsValidity.name ? "" : "invalid"}`}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`control ${formInputsValidity.street ? "" : "invalid"}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={`control ${formInputsValidity.postal ? "" : "invalid"}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputsValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={`control ${formInputsValidity.city ? "" : "invalid"}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className="actions">
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="submit">
          Confirm
        </Button>
      </div>
    </form>
  );
};

export default CheckOut;
