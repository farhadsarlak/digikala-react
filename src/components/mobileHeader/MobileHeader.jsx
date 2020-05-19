import React from 'react';
import './MobileHeader.css';

import { Icon, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import SearchInHeader from '../search/SearchInHeader';
import { useSelector } from 'react-redux';
import { cartItemsCount } from '../../utils/cartItemUtils';

const MobileHeader = ({ history }) => {

    const cartItems = useSelector(state => state.cart.cartItems);

    return (
        <div className="mainMobileHeader">
            <div className="mainMobileHeaderContainer">
                <div className="menuBarItem">
                    <Icon name="bars" />
                </div>
                <div className="logoMobileItem">
                    <Image
                        as={Link}
                        to="/"
                        src="/assets/images/banner1.png"
                        size="tiny"
                    />
                </div>
                <div className="questionItem">
                    <Icon name="question circle outline" size="large" />
                </div>
            </div>
            <div className="mobileHeaderDivSearch">
                <SearchInHeader width="100%" />
                <div
                    className="shoppingIconItem"
                    onClick={() => history.replace("/checkout")}
                >
                    <span className={"item-count"}> {cartItemsCount(cartItems)} </span>
                </div>
                <div>
                    <Icon name="user" />
                </div>
            </div>

        </div>
    )
}

export default withRouter(MobileHeader);