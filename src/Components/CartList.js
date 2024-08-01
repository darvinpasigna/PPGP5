import React, { useState, useEffect } from 'react';
import check from '../Images/success.png';
import '../App.css';
import axios from 'axios';
import NavLogin from './NavLogin';
import useCode from '../Code/Code';

const CartList = () => {
  const url = "http://localhost/PP5/1stPP5/cart.php";
  const purchasesUrl = "http://localhost/PP5/1stPP5/purchases.php";

 const {cartItems, setCartItems, selectedItems, setSelectedItems,
        payment, setPayment, showConfirmPayment, setShowConfirmPayment,
        showSuccess, setShowSuccess, paymentMethod, setCartCount,
        cartCount, cartUrl} = useCode();
 const handleQtyChange = (index, event) => {
  const newQty = parseInt(event.target.value, 10);
  const newCartItems = [...cartItems];
  newCartItems[index].qty = newQty;
  newCartItems[index].total = calculateTotal(newCartItems[index].price, newQty);
  setCartItems(newCartItems);
 
};

  const handleDelete = (index) => {
    const itemToDelete = cartItems[index];

    const getData = new FormData();
    getData.append('id', itemToDelete.cart_id); // Use the correct field name
    getData.append('function', 'delete');

    axios({
      method: "POST",
      url: url,
      data: getData,
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((response) => {
      if (response.data.success) {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
        setCartCount((prevCount) => prevCount - 1);
        alert('Item successfully deleted');
      }
    });
  };
  

  const handleSelect = (index, event) => {
    const newSelectedItems = [...selectedItems];
    if (event.target.checked) {
      newSelectedItems.push(index);
    } else {
      const itemIndex = newSelectedItems.indexOf(index);
      newSelectedItems.splice(itemIndex, 1);
    }
    setSelectedItems(newSelectedItems);
  };

  const calculateTotal = (price, qty) => {
    return price * qty;
  };

  const handlePurchase = (item) => {
    let getData = new FormData();
    getData.append('Name', item.Name);
    getData.append('price', item.price);
    getData.append('main_img', item.main_img);
    getData.append('function', 'add');

    axios({
      method: "POST",
      url: purchasesUrl,
      data: getData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      if(response.data.success) {
        console.log("Purchase successful:", response.data);
      }
    })
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const itemsWithQty = data.map(item => ({
          ...item,
          qty: 1,
          total: item.price
        }));
        setCartItems(itemsWithQty);
      });
      axios.get(cartUrl)
      .then((response) => {
        setCartCount(response.data.length);
      });
       
  }, [url, cartUrl]);

  const getTotalPayment = () => {
    return selectedItems.reduce((sum, index) => {
      const total = Number(cartItems[index].total);
      return sum + total;
    }, 0);
  };

  const checkoutItem = () => {
    return selectedItems.map(index => {
      const item = cartItems[index];
      return `${item.Name} (${item.qty} items) - - - - ${item.total}`;
    }).join(', ');
  };

  return (
    <>
    <NavLogin cartCount={cartCount} />
      <div className="container d-flex-wrap" id='cartlist'>
        <div className="row" id='payment'>
          <div className="col-8">
            {cartItems.map((item, index) => (
              <div key={index} className="card mb-3 carditem" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.main_img} className="img-fluid rounded-start" alt="cardpic"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 
                      className="card-title" 
                      id={`itemname-${index}`} 
                      style={{ textAlign: 'left', fontWeight: "600" }}
                      >{item.Name}</h5>
                      
                      <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                      <div className="input-group input-group-sm mb-3" style={{ width: "150px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">QTY</span>
                        <input
                          id={`cardqty-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleQtyChange(index, e)}
                        />
                      </div>
                      <div className="input-group input-group-sm mb-3" style={{ width: "150px" }}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">Total</span>
                        <input
                          id={`totalprice-${index}`}
                          type="number"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          value={(Math.round(item.total * 100) / 100)}
                          readOnly
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button> <br /> <br />
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`flexCheckDefault-${index}`}
                          onChange={(e) => handleSelect(index, e)}
                        />
                        <label className="form-check-label" htmlFor={`flexCheckDefault-${index}`}>
                          SELECT
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-4">
            <div className="col-md-3 checkout">
              <form>
                <legend style={{ fontWeight: 600 }}>CHECKOUT</legend>
                <br />
                <fieldset>
                  <ul>
                    {selectedItems.length > 0 ? (
                      selectedItems.map(index => {
                        const item = cartItems[index];
                        return (
                          <li key={index}>
                            {item.Name.substring(0, 10)}... ({item.qty} items) - - - - {(Math.round(item.total * 100) / 100)}
                          </li>
                        );
                      })
                    ) : (
                      <li>No items selected</li>
                    )}
                  </ul>

                  <div className="d-flex">
                    <h6 style={{ marginRight: '135px' }}>Total Payment</h6>
                    <strong><u>&#8369;{Number(getTotalPayment()).toFixed(2)}</u></strong>
                  </div>
                  <br />
                  <label className="form-label">Payment Option</label>
                  <select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option value="">Select Payment</option>
                    <option value="Cash On Delivery">Cash on Delivery</option>
                    <option value="Gcash">Gcash</option>
                    <option value="Maya">Maya</option>
                  </select>
                  <br />
                  <button
                    type="button"
                    className="form-control btn btn-primary"
                    onClick={() => {
                      if (selectedItems.length === 0 || payment === "") {
                        alert("Please add items to the cart and select a payment option.");
                        return;
                      }
                      setShowConfirmPayment(true);
                    }}
                    disabled={selectedItems.length === 0 || payment === ""}
                  >
                    Place Order
                  </button>
                </fieldset>
              </form>

            </div>
          </div>

          {/* Modal for confirmation */}
          <div className="modal" id='confirm' style={{ display: showSuccess ? 'block' : 'none' }}>
            <div className="modal-dialog" style={{ width: "200px" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" 
                  onClick={() =>{setShowSuccess(false);}}
                  style={{ height: "5px" }}></button>
                </div>
                <div className="modal-body">
                  <img src={check} alt="success" style={{ width: "25px" }} /> SUCCESS!!
                </div>
              </div>
            </div>
          </div>

          {/* Modal for payment confirmation */}
          <div className="modal" tabIndex="-1" id="buy"
            style={{ display: showConfirmPayment ? 'block' : 'none' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header" style={{ textAlign: "center" }}>
                  <h5 className="modal-title">{paymentMethod()}</h5>
                  <button type="button" className="btn-close" 
                  onClick={() =>{setShowConfirmPayment(false);}}
                   aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{ paddingLeft: "5px" }}>
                  <p>{checkoutItem()}</p>
                  <p style={{ textAlign: "right" }}>
                    <strong><u>Total: &#8369;{Number(getTotalPayment()).toFixed(2)}</u></strong>
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger"
                  onClick={() =>{setShowConfirmPayment(false);}}
                  >Cancel</button>
                  <button type="button" className="btn btn-success" 
                  onClick={() => {
                    setShowConfirmPayment(false);
                    setShowSuccess(true);
                    selectedItems.forEach(index => handlePurchase(cartItems[index])); // Call handlePurchase for each selected item
                  }}
                  >Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
