import React, { useEffect } from 'react'
import Header from '../components/Common/Header'
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { push } from "connected-react-router";
import Item from '../components/Common/Item';
import { fetchCarts } from "../reducks/carts/operations";
import { getSubtotal } from "../reducks/carts/selectors";
import Imgbackground from "../assets/img/main-pic.png";

const Home = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const items = getItems(selector);
    const subtotal = getSubtotal(selector);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem("LOGIN_USER_KEY")) {
            dispatch(fetchCarts());
        }
    }, []);

    // const dispatch = useDispatch();

    const checkCart = () => {
        dispatch(push("/cart"));
    };

    return (
        <>
            <div class="background" style={{ backgroundImage: `url(${Imgbackground})` }}>
                <Header />

                <div class="border-container-container">
                    <div class="border-container">
                        <div class="header-bottom-border"></div>
                    </div>
                </div>

                <div class="bg-text-container">
                    <div class="bg-text">
                        <div>Culture</div>
                        <div>Creativity</div>
                        <div>&artisans</div>
                    </div>
                </div>
            </div>
            <ul class="items">
                {items &&
                    items.map((item) => (
                        <li>
                            <Item key={item.id} item={item} />
                        </li>
                    ))}
            </ul>

            <div class="list-border-container">
                <div class="list-container-bottom-border"></div>
            </div>

            <div class="subtotal-container-container">
                <div class="subtotal-container">
                    <div class="subtotal-item">Subtotal : $ {subtotal}</div>
                    <button
                        class="subtotal-item"
                        onClick={checkCart}
                        style={{ cursor: `pointer` }}
                    >Check your cart</button>
                </div>
            </div>
        </>
    );
}

export default Home;