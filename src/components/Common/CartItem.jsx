import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increaseCart, decreaseCart } from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

export default function CartItem({ presentcart }) {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();

    const clickPlusCart = () => {
        dispatch(increaseCart(presentcart.id));
    };
    const clickMinusCart = () => {
        dispatch(decreaseCart(presentcart.id));
    };

    return (
        <>
            <div class="list-container-container">
                <div class="list-container">
                    <a href="/" target="_blank">
                        <img alt="" src={"https://res.cloudinary.com/dlr6ybcfd/" + presentcart.item.image} />
                    </a>
                    <div class="list-item-container">
                        <div class="description-container">
                            <div>{presentcart.item.name}</div>
                            <div>{presentcart.item.artist}</div>
                            <div>{presentcart.item.description}</div>
                            <div>{presentcart.item.art_created}</div>
                        </div>
                        <div class="border-container">
                            <div class="description-bottom-border"></div>
                        </div>
                        <div class="price-buy-container">
                            <div>$ {presentcart.item.price}</div>
                            <div class="add-btn">
                                <span class="minus" onClick={clickMinusCart}>
                                    -
                                </span>
                                <span class="count">{presentcart.quantity} </span>
                                <span class="plus" onClick={clickPlusCart}>
                                    +
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
