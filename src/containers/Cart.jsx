import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import CartItem from '../components/Common/CartItem';
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import Imgbackground from "../assets/img/main-pic.png"
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { getItems } from "../reducks/items/selectors";
import { getSubtotal } from "../reducks/carts/selectors";

export default function Cart() {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);
    const subtotal = getSubtotal(selector);
    const checkOut = () => {
        dispatch(push("/checkout"));
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (user.token != "") {
            dispatch(fetchCarts(user.token));
            console.log("test");
            console.log(carts);
        }
    }, [user]);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
    }, []);

    return (
        <>
            <div class="background" style={{ backgroundImage: `url(${Imgbackground})` }}>
                <Header />

                <div class="border-container-container">
                    <div class="border-container">
                        <div class="header-bottom-border"></div>
                    </div>
                </div>

                {/* <div class="bg-text-container">
                    <div class="bg-text-phone">
                        <div>Cart</div>
                    </div>
                </div> */}
            </div>

            <ul>
                {carts &&
                    carts.map((cart) => (
                        <li>
                            <CartItem key={cart.item.id} presentcart={cart} />
                        </li>
                    ))}
            </ul>

            <div class="list-border-container">
                <div class="list-container-bottom-border"></div>
            </div>

            <div class="subtotal-container-container">
                <div class="subtotal-container">
                    <div class="subtotal-item">Subtotal: $ {subtotal}</div>
                    <button
                        class="subtotal-item"
                        onClick={checkOut}
                        style={{ cursor: `pointer` }}
                    >Check out</button>
                </div>
            </div>
        </>
    )
}
