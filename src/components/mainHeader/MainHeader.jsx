import React from 'react';
import './MainHeader.css'

import { Link } from 'react-router-dom';
import { Button, Icon, Image } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { mouseInHidden, mouseOutHidden } from '../../redux/cart/cartActions';
import { cartItemsCount } from '../../utils/cartItemUtils';
import CartDropdown from '../shoppingCart/cartDropdown/CartDropdown';
import SearchInHeader from '../search/SearchInHeader';

const MainHeader = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const hiddenCartDropDown = useSelector(state => state.cart.hidden);

    return (
        <div className="mainHeaderContainer">
            <Image
                className="logoItem"
                as={Link}
                to="/"
                src="/assets/images/banner1.png"
                size="tiny"
            />
            <div className="searchItem">
                <SearchInHeader width="70%" />
            </div>
            <div className="loginLogoutItem">
                <Button
                    basic
                    icon
                    size="small"
                    as={Link}
                    to={"/loginRegister"}
                    style={{ paddingRight: '0.5em' }}
                >
                    <Icon name={"user md"} />
                    {" "}ورود / عضویت
                </Button>
            </div>
            <div
                className="shoppingIconItem"
                onMouseEnter={() => dispatch(mouseInHidden())}
                onMouseLeave={() => dispatch(mouseOutHidden())}
            >
                <span className={"item-count"}> {cartItemsCount(cartItems)} </span>
            </div>
            {
                !hiddenCartDropDown &&
                <CartDropdown />
            }
        </div >
    )
}

export default MainHeader;