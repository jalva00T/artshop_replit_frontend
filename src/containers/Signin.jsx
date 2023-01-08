import React, { useEffect } from 'react';
import Imgbackground from "../assets/img/main-pic.png";
import Header from '../components/Common/Header';
import { signIn } from "../reducks/user/operations";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { push } from "connected-react-router";
import Item from '../components/Common/Item';
import { getItems } from "../reducks/items/selectors";
import { getSubtotal } from "../reducks/carts/selectors";
import { fetchItems } from "../reducks/items/operations";
import { fetchCarts } from "../reducks/carts/operations";


export default function Signin() {
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

    const closeButton = () => {
        dispatch(push("/"));
    };

    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const inputEmail = (event) => {
        setEmail(event.target.value);
    };

    const inputPassword = (event) => {
        setPassword(event.target.value);
    };

    const submitButton = (event) => {
        event.preventDefault();
        dispatch(signIn(email, password));
        setEmail("");
        setPassword("");
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

            {/* <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest2} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" >
                        <img alt="" src={Imgtest3} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self 2</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest2} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={Imgtest3} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>Inner-Self 2</div>
                            <div>Yakisoba</div>
                            <div>Video Synthesizer</div>
                            <div>August 28 2021</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$3800</div>
                            <button class="add-button">Add +</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="list-border-container">
                <div class="list-container-bottom-border"></div>
            </div>

            <div class="subtotal-container-container">
                <div class="subtotal-container">
                    <div class="subtotal-item">Subtotal: $ {subtotal}</div>
                    <button class="subtotal-item">Check you cart</button>
                </div>
            </div>

            {/* SIGN IN */}

            <div class="sign-in-container">
                <div class="sign-in-inner">
                    <div class="top">
                        <div class="art-and-soul-2">Art and Soul</div>
                        <div
                            class="close-window sign-in-close"
                            onClick={closeButton}
                            style={{ cursor: `pointer` }}>X</div>
                    </div>

                    <div class="sign-in-pop-up">SIGN IN</div>

                    <form class="form-container">
                        <input
                            class="sign-in-input"
                            placeholder="Email address"
                            type="email"
                            name="email"
                            id="email"
                            onChange={inputEmail}
                        />
                        <br />
                        <input
                            class="sign-in-input"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                            onChange={inputPassword}
                        />
                        <button
                            class="sign-in-button"
                            onClick={submitButton}
                            type="submit"
                            style={{ cursor: `pointer` }}
                            name="signin"
                            value="SIGN IN"
                        >SIGN IN</button>
                    </form>

                    <div class="bottom">
                        <div class="member">Not a Member?</div>
                        <a class="sign-in-link" href="/signup">Join us</a>
                    </div>
                </div>
            </div>
        </>
    );
}
