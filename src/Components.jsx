import React, { useState } from "react";

// Please put in your name here
const student_name = "Chuan-Hsin Chen";

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
  console.log("Page is rendered!, current Cart: ", cart);
  // cart: [{
  //         name: "apple",
  //         price: 1,
  //         amount: 5
  //       },
  //       {
  //         name: "lemon",
  //         price: 2,
  //         amount: 10
  //       }]


  const addToCart = (name, price, amount) => {
    // function used to add item into cart, with all information as parameters

/**
    const newCart = [...cart];
    let nameExists = false;

    for (let item of newCart) {
      if (item.name === name) {
        nameExists = true;
        item.amount += amount;
      }
    }

    if (!nameExists) {
      newCart.push(
        {
          name,
          price,
          amount
        }
      );
    } 

    setCart(newCart);
*/

    // Or: if the new state is calculated from previous state,
    // we can pass in a function to setState() function:
    // e.g. setState(state=> state+1);
    // Here, it will be:
    setCart(cart => {
      // NOTICE: For OBJECT-type state, NEVER MODIFY the ORIGINAL state object.
      // Otherwise, the state hook will be confused what the current state is.
      // ALWAYS RETURN A NEW OBJECT! 
      const newCart = [...cart];

      let nameExists = false;
      for (let item of newCart) {
        if (item.name === name) {
          nameExists = true;
          item.amount += amount;
        }
      }

      if (!nameExists) {
        newCart.push(
          {name, price, amount}
        );
      }

      return newCart;
    })
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
  console.log("Menu is rendered!");
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
  const [amount, setAmount] = useState(0);
  console.log("Option is renderd! current amount: ", amount);

  return (
    <div className="option">
      <h2>{props.name}</h2>
      <h2>${props.price}</h2>
      <input
        type="number"
        placeholder={amount}   // hint value when app is first loaded
        value={amount.toString()}  // control what gets display after user starts typing into the input box
        // NOTE: use toString() to get rid of the leading 0
        onChange = {e => {
          const numberValue = Number(e.target.value); 
          console.log("string value: ", e.target.value, "numberValue", numberValue);
          setAmount(numberValue);
        }}
        
           
   
        // NOTE: When <input> tag's value attribute is specified,
        // it is the initla value. 
        // Difference between "value" and "placeholder" attribute in <input> tag:
        // (Whether we should use placeholder={amount}, or value={amount} HERE!)

        // "placeholder" is just a hint displayed for the user. (grayed-out)
        // Whenever there's something inside the input box, the placeholder is not displayed.
        // e.g. Suppose we only specify placeholder="0" (but doesn't specify value)in the <input>,
        // and we call setAmount in onChange and in red-button's onClick.
        // If user enters 5 in apple Option, then click "Add", 
        // although the setAmount(0) in red-button's onClick will cause Option to be re-rendered,
        // the apple Option still shows 5, because the input box already contains something (5), 
        // and so the placeholder(with the updated state/amount value 0) will no longer be displayed.
        // The placeholder 0 will only show up after the user manually delete the entered 5.
        
        
        // However, when we specify "value" attribute, it represents the initial/default value.
        // It's not a hint, so every-time the component is re-rendered,
        // it is always the value that gets displayed, no matter if there's already something in the input box before.
        // By setting value={amount}, (amount is the state thay's changing)
        // when after the setAmount(0) in red-button's onClick triggers Option's re-rendering,
        // the input will display value(which is equal to the current amount, reset to 0).
      
        // More: Difference between "value" and "placeholder" attribute in a <iput> tage that's related to a form:
        // "placeholder" is just a hint displayed for user. It's not the actual value that gets submitted to the server.
        // If user enters nothing and submits, the submitted value will be empty.
        // "value" is the actual value that's sent to the sever.
        // It is also the initial/default value.
        // If user enters nothing and submits, the submitted value will be this default value.
        // 

       
      />
      <div
        className="red-button"
        onClick={() => {
          console.log("Amount before adding: ", amount);
          console.log(amount>0, Number.isInteger(amount))
          if (amount > 0 && Number.isInteger(amount)) {
            props.addToCart(props.name, props.price, amount);
            console.log("Added to Cart")
          }
          setAmount(0);
        }}
      >
        Add
      </div>
    </div>
  );
}

function Cart(props) {
  console.log("Cart is rendered!");
  // const[totalToPay, setTotalToPay] = useState(0);

  const calculateTotalToPay = (cart) => {
    // Please write the logic to calculate total to pay of the cart here
    let totalPrice = 0;
    for (let purchase of cart) {
      totalPrice += purchase.price * purchase.amount;
    }

    return totalPrice;
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
  console.log("CartItem is rendered!");
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
