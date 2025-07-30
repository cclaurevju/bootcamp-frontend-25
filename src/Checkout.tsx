import { useEffect, useReducer } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts } from "./dataService";
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button className={styles.actionButton}>+</button>
        <button className={styles.actionButton}>-</button>
      </td>
    </tr>
  );
};

const initialState = {
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      const { products } = action.payload;
      return {
        ...state,
        products: [...products],
      };
    }

    default: {
      console.error("Unknown action type", action.type);
      return state;
    }
  }
};

const Checkout = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.products.length == 0)
      getProducts().then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_PRODUCTS", payload: { products: res } });
      });
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {state.products ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th># Available</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {state.products.map((product) => {
                return (
                  <Product
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    total={product.availableCount}
                    availableCount={product.availableCount}
                    orderedQuantity={0}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <LoadingIcon />
        )}

        <h2>Order summary</h2>
        <p>Discount: $ </p>
        <p>Total: $ </p>
      </main>
    </div>
  );
};

export default Checkout;
