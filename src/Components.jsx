import React from "react";

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

function Page(props) {
  return (
    <div className="page-wrapper">
      <Menu></Menu>
      <Cart></Cart>
    </div>
  );
}

function Cart(props) {
  return (
    <div className="container">
      <h1>Cart</h1>
      <hr />
      <h2>Total To Pay: $0</h2>
      <div className="item-wrapper">
        <CartItem val="apple"></CartItem>
      </div>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h2>{props.val}</h2>
        <h4>amount: </h4>
        <h4>total price: </h4>
      </div>
      <div className="red-cross">X</div>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="container">
      <h1>MENU</h1>
      <hr />
      <div className="item-wrapper">
        <Option val={menu_list[0].name} price={menu_list[0].price}></Option>
        <Option val={menu_list[1].name} price={menu_list[1].price}></Option>
        <Option val={menu_list[2].name} price={menu_list[2].price}></Option>
      </div>
    </div>
  );
}

function Option(props) {
  return (
    <div className="option-button">
      <h2>{props.val}</h2>
      <h2>${props.price}</h2>
      <input type="number" placeholder="amount" />
    </div>
  );
}

export { Page };
