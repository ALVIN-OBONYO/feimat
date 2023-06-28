import React from 'react';
import { cart} from 'assets/images';
import SocialMediaButton from './SocialMediaButton';

function CartButton(props) {
	return <SocialMediaButton imageUrl={cart} {...props} to='' />;
}

export default CartButton;