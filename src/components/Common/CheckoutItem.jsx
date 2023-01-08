import React from 'react'

export default function CheckoutItem({ cart }) {
    return (
        <>
            <div class="item-1-container">
                <div class="name">{cart.item.name}</div>
                <div class="number">{cart.quantity}</div>
                <div class="price">${cart.item.price}</div>
            </div>
        </>
    )
}
