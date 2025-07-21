import React, { useEffect, useState } from "react";
import { config } from "../../services/config";

import "./Cart.css";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCartAction,
  updateQuantityAction,
} from "../../slices/cartSlice";
function Cart() {
  const [total, setTotal] = useState(0);
  const { items } = useSelector((store) => store.cart);
  //get the dispatch function reference
  const dispatch = useDispatch();
  const calculateTotal = () => {
    console.log(`calculating total: `, items);
    let total = 0;
    for (const item of items) {
      total += item.price * item.quantity;
    }
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  useEffect(() => {
    //when there is change in item call calculate total then useeffect will be called but its not the way going away
    calculateTotal();
  }, [items]);

  const onIncrement = (item) => {
    //adding to the cart
    //update the quantity
    dispatch(
      updateQuantityAction({
        id: item.id,
        quantity: 1,
      })
    );
  };
  const onDecrement = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCartAction({ id: item.id }));
    } else {
      //adding to the cart
      //update the quantity
      dispatch(
        updateQuantityAction({
          id: item.id,
          quantity: -1,
        })
      );
    }

    //quantity decrement items from cart
  };

  return (
    <div>
      <h2 className="page-header">Cart Page</h2>
      {items.length > 0 && (
        <div className="row">
          <div className="col-9">
            {items.map((item) => {
              const imageUrl = `${config.serverBaseUrlCatalog}/${item["image"]}`;

              return (
                <div
                  className="item-container"
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <img src={imageUrl} className="thumbnail" />
                  <div className="title">{item.title}</div>
                  <div className=" description">{item.description}</div>
                  <div className="item-container">
                    <div>
                    <div>Price:</div>
                    <div style={{textAlign:'center'}}> Rs.{item.price}</div>
                    </div>
                    <div>
                    <div>total Price:</div>
                    <div style={{textAlign:'center'}}> Rs.{item.price * item.quantity}</div>
                    </div>

                    <div className="item-container">
                      <button
                        onClick={() => onIncrement(item)}
                        className="btn btn-success"
                      >
                        +
                      </button>
                      <div>{item.quantity}</div>
                      <button
                        onClick={() => onDecrement(item)}
                        className="btn btn-success"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-3">
            {/* <h4>Summary</h4> */}
            <div className="cart-summary">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Total</td>
                    <td>Rs. {total}</td>
                  </tr>
                  <tr>
                    <td>GST</td>
                    <td>Rs. {total * 0.18} </td>
                  </tr>
                  <tr>
                    <td>total amount</td>
                    <td className="title">Rs.{total + total * 0.18}</td>
                  </tr>
                </tbody>
              </table>

              <button style={{width:'100%'}} className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      )}
      {items.length == 0 && (
        <h4 className="page-header">there are no items in the Cart</h4>
      )}
    </div>
  );
}

export default Cart;
