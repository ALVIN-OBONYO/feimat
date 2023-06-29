import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import watch from './watch.png';
import logo from './logo.png';
import { getCartTotal } from '../features/cartSlice';

export default function App() {
  const [open, setOpen] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <nav className="bg-black text-white">
      <div className="flex font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between">
          <img src={watch} alt="logo" className="md:cursor-pointer h-20 pt-2" />
          <p className="pt-6 pl-4 text-3xl">FEIMAT SHOP</p>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden gap-4 text-xl">
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Men Watches
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Women Watches
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Kid Watches
            </Link>
          </li>
          <li>
            <Link to="/cart" className="py-7 px-3 inline-block text-white">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="logo"
                  width={20}
                />
                ({totalQuantity})
              </div>
            </Link>
          </li>
        </ul>
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Men" className="py-7 px-3 inline-block">
              Men Watches
            </Link>
          </li>
          <li>
            <Link to="/Women" className="py-7 px-3 inline-block">
              Women Watches
            </Link>
          </li>
          <li>
            <Link to="/Kid" className="py-7 px-3 inline-block">
              Kid Watches
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="py-7 px-3 inline-block">
              Cart
            </Link>
          </li>
          {/* <NavBarLinks /> */}
          <div className="py-5">{/* <Button /> */} </div>
        </ul>
      </div>
    </nav>
  );
}
