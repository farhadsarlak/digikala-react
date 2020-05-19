import React from 'react';
import './CartDropdown.css';
import { useDispatch, useSelector } from 'react-redux';
import { mouseInHidden, mouseOutHidden } from '../../../redux/cart/cartActions';
import { Grid, Label, Button } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import { cartItemsTotal } from '../../../utils/cartItemUtils';
import { withRouter } from 'react-router';
import CartItem from '../cart-item/CartItem';

const CartDropdown = ({ history }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div
            className="cart-dropdown-in-dropdown"
            onMouseEnter={() => dispatch(mouseInHidden())}
            onMouseLeave={() => dispatch(mouseOutHidden())}
        >
            <div className="cart-items-in-dropdown">
                {cartItems.length ?
                    cartItems.map(cartItem =>
                        <div key={cartItem.id} className="items-in-cartItem">
                            <CartItem item={cartItem} />
                        </div>
                    ) :
                    <span className="empty-message-in-dropdown">
                        سبد شما خالی است
                    </span>
                }
            </div>
            {
                cartItems.length ?
                    <Grid className="checkout-div-in-dropdown">
                        <Button
                            inverted
                            className="button-checkout-in-dropdown"
                            color="red"
                            onClick={() => history.replace('/checkout')}
                        >
                            ثبت سفارش
                        </Button>
                        <Label className="label-in-dropdown" color="teal" tag>
                            مبلغ قابل پرداخت:
                            <NumberFormat
                                value={cartItemsTotal(cartItems)}
                                displayType="text"
                                thousandSeparator={true}
                            />
                            تومان
                        </Label>
                    </Grid> :
                    null
            }
        </div>
    )
}

export default withRouter(CartDropdown);