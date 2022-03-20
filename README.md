# Stater Code for Quiz 2
Congrats! You received a frontend offer from a well-known local farm lately, and the owner of the farm ask you to create a simple ordering web page for them. As part of the development team, you only need to fulfill two simple functions of the page: <strong>adding items to cart</strong> and <strong>removing items from cart</strong>. Try your best to finish that!

## Add items to cart
1. Before clicking the <strong>Add</strong> button: clients have to put in the amount of the item they want to purchase. Non-positive number or non-integer IS NOT ALLOWED. If an invalid number is input, no item should be created in the cart.
2. After clicking the <strong>Add</strong> button: if it is a new item, create a new cart item on the cart panel; if the item has already been created in the cart, just simply increment the data of that item (both total amount and total price), based on the input number.
3. After clicking the <strong>Add</strong> button: for the user-friendly purpose: the input field should be reset to 0
4. The total price of the cart should be incremented as items put into the cart.  

<strong> Total Price of Item = Item's Price * Item's Account </strong>

<strong> Total Price of Cart = Sum of All Items' Total Price </strong>

## Remove items from cart
1. After clicking the <strong>X</strong> button: the item will be immediately removed from the cart
2. After clicking the <strong>X</strong> button: the total price of cart will be decremented by the number of total price of removed item


