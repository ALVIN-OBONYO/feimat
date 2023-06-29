import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import Footer from './Footer';

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <>
      <div className="px-20 py-4">
        <h1 className="text-black font-bold text-4xl">All Watches</h1>
        <div>
          <div>
            {items.map((item) => (
              <div className="flex flex-row mt-4 mb-4" key={item.id}>
                <div>
                  <img src={item.img} alt={item.title} width={300} />
                </div>
                <div className="ml-8">
                  <p className="text-xl">{item.title}</p>
                  <p className="text-xl">Satoshi. {item.price}</p>
                  <button
                    className="px-6 py-3 text-sm bg-black rounded text-white mt-4"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    ADD TO CART
                  </button>
                </div>
                <hr className="my-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
