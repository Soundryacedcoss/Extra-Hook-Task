import React from "react";
import { useReducer } from "react";
import "./LandingPage.css";
import OutputModel from "./OutputModel";
import reducer1 from "./Reducer";
const LandingPage = () => {
  const intial_state = {
    title: "",
    discription: "",
    time: "",
    sku: "",
    barcode: "Barcode",
    category: "",
    radio: "",
  };
  const [state, dispatch] = useReducer(reducer1, intial_state);
  const ChangeHandler = (event) => {
    dispatch({
      type: "Change_Handler",
      field: event.target.name,
      payload: event.target.value,
    });
  };
  return (
    <div className="LandingPage">
      <div className="flex">
        <div className="width">
          <h2>Title</h2>
          <p>
            Mention the title of the product that you want to display to the
            customers on the Amazon marketplace.
          </p>
        </div>
        <div className="InputDiv">
          <input
            type="text"
            name="title"
            value={state.Title}
            placeholder="title.."
            onChange={(e) => ChangeHandler(e)}
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Discription</h2>
          <p>
            Mention a detailed yet precise product description embedded with
            'Keywords' that define the product appropriately here. To know more
            about Amazon's product description policy, click on the link HERE!
          </p>
        </div>
        <div className="InputDiv">
          <input
            type="text"
            name="discription"
            placeholder="discription.."
            value={state.discription}
            onChange={(e) => ChangeHandler(e)}
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Handling Time</h2>
          Mention the title of the product that you want to display to the
          customers on the Amazon marketplace.
        </div>
        <div className="InputDiv">
          <input
            type="text"
            placeholder="Time.."
            value={state.time}
            name="time"
            onChange={(e) => ChangeHandler(e)}
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Amazon Parent Sku</h2>
          Set the unique SKU that identifies the Shopify products against Amazon
          listings.
        </div>

        <div className="InputDiv">
          <input
            type="text"
            placeholder="Sku.."
            value={state.sku}
            name="sku"
            onChange={(e) => ChangeHandler(e)}
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Barcode/GTIN Exemption</h2>
          Enable the checkbox to upload products with Barcode exemption on
          Amazon.
        </div>
        <div className="InputDiv checkbox">
          <input
            type="checkbox"
            name="barcode"
            value={state.barcode}
            onChange={(e) => ChangeHandler(e)}
          />
          Barcode/GTIN Exemption
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Add Amazon Category</h2>
          Set Amazon Category / Browse Node for a product, to set the
          Searchability & browsing hierarchy on Amazon Marketplace.
        </div>
        <div className="InputDiv">
          <input
            type="text"
            name="category"
            value={state.category}
            onChange={(e) => ChangeHandler(e)}
          />
        </div>
      </div>
      <hr />
      <div className="flex">
        <div className="width">
          <h2>Image Selection</h2>
          Select the best image combinations or add new images (a maximum of 9)
          for your product displayed as part of the product images when it gets
          uploaded on Amazon.
        </div>
        <div className="InputDiv radio">
          <input
            type="radio"
            name="radio"
            value={"Set Product image as shown on shopify"}
            onChange={(e) => ChangeHandler(e)}
          />
          Set Product image as shown on shopify
          <br />
          <input
            type="radio"
            name="radio"
            value={"Set custome amazon image"}
            onChange={(e) => ChangeHandler(e)}
          />{" "}
          Set custome amazon image
        </div>
      </div>
      <OutputModel value1={state} />
      <hr />
    </div>
  );
};
export default LandingPage;
