import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './Footer';

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../features/cartSlice';

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <>
      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="mb-4">
                  <div className="py-3">
                    <h2 className="mb-0">{cart.length} Items in Cart</h2>
                  </div>
                  <div>
                    {cart?.map((data) => (
                      <div className="row">
                        {/* This is the image section */}
                        <div className="flex mb-4">
                          <div
                            className="bg-image rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.img}
                              width={200}
                              alt="Blue Jeans Jacket"
                            />
                          </div>
                        </div>
                        {/* This is the button and title section */}
                        <div className="flex gap-4 justify-between">
                          <p className="text-lg">{data.title}</p>

                          <button
                            type="button"
                            className="btn bg-black text-white btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem(data.id))}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: '300px' }}
                          >
                            <button
                              className="bg-black text-white px-3 me-2"
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-minus"></i>
                            </button>

                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={data.quantity}
                                type="number"
                                className="form-control"
                                onChange={() => null}
                              />
                              {/* <label className="form-label" for="form1">
                                Quantity
                              </label> */}
                            </div>

                            <button
                              className="bg-black text-white px-3 ms-2"
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>

                          <p className="text-center text-xl text-semibold">
                            Satoshi. {data.price}
                          </p>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <div className="py-3">
                    <h2 className="mb-0">Summary</h2>
                  </div>
                  <div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-xl">
                        <div>Total Quantity</div>
                        <span>{totalQuantity}</span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 text-xl">
                        <div>Total amount</div>
                        <span>
                          <strong>{totalPrice}</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      className="px-4 py-3 text-xl bg-black rounded text-white mt-4"
                    >
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
