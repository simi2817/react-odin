import { useMemo } from "react";

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      {/* Some other content in the cart */}
      {/* Products to display */}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}

export default Cart;

/*
In the example above, we can easily memoize the calculated value by wrapping it in a useMemo, as the syntax is pretty much the same as useEffect and almost works the same. Where useMemo will also execute the callback on mount, and on subsequent re-renders, it will only re-execute the callback whenever one of the dependencies changes. In our case, whenever the products prop changes.

This way, whenever a user opens/closes the cart multiple times, it will not recalculate the totalPrice and use the cached value as long as products did not change.
*/