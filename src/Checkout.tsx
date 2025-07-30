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
  handleAddProduct,
  handleRemoveProduct,
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
        <button
          className={styles.actionButton}
          onClick={handleAddProduct}
          disabled={orderedQuantity == availableCount}
        >
          +
        </button>
        <button
          className={styles.actionButton}
          onClick={handleRemoveProduct}
          disabled={orderedQuantity == 0}
        >
          -
        </button>
      </td>
    </tr>
  );
};

const initialState = {
  products: [],
  total: 0,
};

const reducer = (state, action) => {
  console.log("prev", state, "action", action);

  switch (action.type) {
    case "FETCH_PRODUCTS": {
      const { products } = action.payload;
      return {
        ...state,
        products: products.map((p) => {
          return {
            ...p,
            total: 0,
            orderedQuantity: 0,
          };
        }),
      };
    }
    case "ADD_PRODUCT": {
      const { product } = action.payload;
      const auxState = {
        ...state,
        products: [
          ...state.products.map((p) => {
            if (p.id == product.id) {
              return {
                ...p,
                orderedQuantity: product.orderedQuantity + 1,
                total: p.price * (product.orderedQuantity + 1),
              };
            }
            return p;
          }),
        ],
      };
      return {
        ...auxState,
        total: auxState.products.reduce((total, p) => total + p.total, 0),
      };
    }
    case "REMOVE_PRODUCT": {
      const { product } = action.payload;
      const auxState = {
        ...state,
        total: state.total - product.price,
        products: state.products.map((p) => {
          if (p.id == product.id) {
            return {
              ...p,
              orderedQuantity: product.orderedQuantity - 1,
              total: p.price * (product.orderedQuantity - 1),
            };
          }
          return p;
        }),
      };
      return {
        ...auxState,
        total: auxState.products.reduce((total, p) => total + p.total, 0),
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

  const handleAddProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
  };
  const handleRemoveProduct = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: { product } });
  };

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
                // if (!product) return null;
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    total={product.total}
                    availableCount={product.availableCount}
                    orderedQuantity={product.orderedQuantity}
                    handleAddProduct={() => handleAddProduct(product)}
                    handleRemoveProduct={() => handleRemoveProduct(product)}
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
        <p>{`Total: $${state.total} `}</p>
      </main>
    </div>
  );
};

export default Checkout;
