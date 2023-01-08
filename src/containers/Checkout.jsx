import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import API from "../API";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchCarts } from "../reducks/carts/operations";
import { addOrder } from "../reducks/order/operations";
import { push } from "connected-react-router";
export default function Checkout() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const subtotal = getSubtotal(selector);
  const carts = getCarts(selector);
  const [full_name, setFullName] = useState(""),
    [phone, setPhone] = useState(""),
    [address, setAddress] = useState(""),
    [pincode, setPincode] = useState(""),
    [apt, setApt] = useState(""),
    [city, setCity] = useState(""),
    [state, setState] = useState(""),
    [totalitem, setTotalItem] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  useEffect(() => {
    let arr = [];
    if (carts != undefined && carts.length > 0) {
      for (let key in carts) {
        arr.push(carts[key].quantity);
      }
      let sum = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
      setTotalItem(sum);
    }
  }, [carts]);

  const inputFullname = (e) => {
    setFullName(e.target.value);
  };
  const inputPhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const inputAddress = (e) => {
    setAddress(e.target.value);
  };
  const inputPin = (e) => {
    setPincode(e.target.value);
  };
  const inputHouse = (e) => {
    setApt(e.target.value);
  };
  const inputCity = (e) => {
    setCity(e.target.value);
  };
  const inputState = (e) => {
    setState(e.target.value);
  };
  const orderButton = (e) => {
    let params = {
      total_price: subtotal,
      full_name: full_name,
      address_line1: address,
      address_line2: apt,
      city: city,
      state: state,
      postal_code: pincode,
      country: "US",
      telephone: phone,
    };
    dispatch(addOrder(params));
    e.preventDefault();
    dispatch(push("/thanks"));
  };
  return (
    <>
      <Header />
      <div class="message-container">
        <div class="message">- Order your items -</div>
      </div>
      <div class="shipment-container">
        <div class="shipment">
          <div class="details">Shipment Details</div>
          <div class="item-check">Please check your items and confirm it</div>
          {carts &&
            carts.map((cart) => (
              <div class="item-1-container">
                <div class="name">{cart.item.name}</div>
                <div class="number">{cart.quantity}</div>
                <div class="price">${cart.item.price}</div>
              </div>
            ))}
          <div class="border-container">
            <div class="header-bottom-border"></div>
          </div>
          <div class="total-price-container">
            <div class="price-name">Total Price</div>
            <div class="price-number">{totalitem}</div>
            <div class="total-price">$ {subtotal}</div>
          </div>
        </div>
      </div>
      <form class="shipment-form-container">
        <div class="shipment-form">
          <label class="label">Full Name</label>
          <input
            class="cart-input"
            placeholder="Enter Recipients Name"
            onChange={inputFullname}
          />
          <br />
          <br />
          <label class="label">Phone Number</label>
          <input
            class="cart-input"
            placeholder="Enter Phone Number"
            onChange={inputPhoneNumber}
          />
          <br />
          <br />
          <label class="label">Street address or P.O. Box</label>
          <input
            class="cart-input"
            placeholder="Enter Street Address or P.O. Box"
            onChange={inputAddress}
          />
          <br />
          <br />
          <label class="label">PIN Code</label>
          <input
            class="cart-input"
            placeholder="Enter PIN code"
            onChange={inputPin}
          />
          <br />
          <br />
          <label class="label">Apt, suite, unit, building, floor, etc.</label>
          <input
            class="cart-input"
            placeholder="Enter Apt, Suite, Unit, Building, etc."
            onChange={inputHouse}
          />
          <br />
          <br />
          <label>City</label>
          <input
            class="cart-input"
            placeholder="Enter City"
            onChange={inputCity}
          />
          <br />
          <br />
          <label>State</label>
          <input
            class="cart-input"
            placeholder="Enter State"
            onChange={inputState}
          />
          <br />
          <br />
          <button
            class="submit-button"
            onClick={orderButton}
            style={{ cursor: `pointer` }}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}