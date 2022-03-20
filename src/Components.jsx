import React, { useState } from "react";

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
    if (!amount || amount <= 0) return;
    let idx = cart.findIndex((c) => c.name === name);
    if (idx !== -1) {
      let newCart = [...cart];
      newCart[idx].amount += amount;
      newCart[idx].price += amount * price;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          name: name,
          price: price * amount,
          amount: amount,
        },
      ]);
    }
  };

  const deleteFromCart = (name) => {
    let newCart = [...cart];
    let idx = cart.findIndex((c) => c.name === name);
    newCart.splice(idx, 1);
    setCart(newCart);
  };

  return (
    <div className="page-wrapper">
      <Menu addToCart={addToCart}></Menu>
      <Cart cart={cart} deleteFromCart={deleteFromCart}></Cart>
    </div>
  );
}

function Cart(props) {
  const calTotalToPay = (cart) => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    return price;
  };

  return (
    <div className="container">
      <h1>CART</h1>
      <hr />
      <h2>Total To Pay: ${calTotalToPay(props.cart)}</h2>
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
  const [amount, setAmount] = useState(0);

  return (
    <div className="option">
      <h2>{props.name}</h2>
      <h2>${props.price}</h2>
      <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <div
        className="red-button"
        onClick={() => {
            props.addToCart(props.name, props.price, amount)
            setAmount(0)
        }}
      >
        Add
      </div>
    </div>
  );
}

export { Page };
