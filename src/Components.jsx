import React, { useState } from "react";

// Please put in your name here
const student_name = "Quiz 2 taker";

// All items are listed here, you don't have to modify anything 
// of this menu_list array
const menu_list = [
  {
    name: "apple",
    price: 1,
  },
  {
    name: "lemon",
    price: 2,
  },
  {
    name: "grape",
    price: 3,
  },
];

function Page() {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price, amount) => {
    // function used to add item into cart, with all information as parameters
  };

  const deleteFromCart = (name) => {
    // function used to remove item from cart with item's name
  };

  return (
    <div className="page-wrapper">
      <h1>{student_name}'s Farm</h1>
      <div className="panel-wrapper">
        <Menu addToCart={addToCart}></Menu>
        <Cart cart={cart} deleteFromCart={deleteFromCart}></Cart>
      </div>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="container">
      <h1>MENU</h1>
      <hr />
      <div className="item-wrapper">
        {menu_list.map((option, idx) => {
          return (
            <Option
              key={idx}
              name={option.name}
              price={option.price}
              addToCart={props.addToCart}
            ></Option>
          );
        })}
      </div>
    </div>
  );
}

function Option(props) {
    // You may have to deal with the amount state here
    // while the input value is changing
    // remeber to set the amount to 0 when an item is add to cart
  const [amount, setAmount] = useState();
  return (
    <div className="option">
      <h2>{props.name}</h2>
      <h2>${props.price}</h2>
      <input
        type="number"
        placeholder="amount"
      />
      <div
        className="red-button"
        onClick={() => {
          props.addToCart(props.name, props.price, amount);
        }}
      >
        Add
      </div>
    </div>
  );
}

function Cart(props) {
  const calculateTotalToPay = (cart) => {
    // Please write the logic to calculate total to pay of the cart here
    return 0;
  };

  return (
    <div className="container">
      <h1>CART</h1>
      <hr />
      <h2>Total To Pay: ${calculateTotalToPay(props.cart)}</h2>
      <div className="item-wrapper">
        {props.cart.map((c, idx) => {
          return (
            <CartItem
              key={idx}
              name={c.name}
              price={c.price}
              amount={c.amount}
              deleteFromCart={props.deleteFromCart}
            ></CartItem>
          );
        })}
      </div>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h2>{props.name}</h2>
        <h4>amount: {props.amount}</h4>
        <h4>total price: {props.price}</h4>
      </div>
      <div
        className="red-button cross"
        onClick={() => {
          props.deleteFromCart(props.name);
        }}
      >
        X
      </div>
    </div>
  );
}

export { Page };
