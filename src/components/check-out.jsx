import Button from "./Button";
import "../styles/check-out/check-out.css";

const CheckOut = ({ onCancel }) => {
  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("Submited");
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">Confirm</Button>
    </form>
  );
};

export default CheckOut;
