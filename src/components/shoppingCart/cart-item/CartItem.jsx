import React from 'react';
import './CartItem.css';
import { Menu, Image, Icon, Label } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";

import { removeItemFromCart } from "../../../redux/cart/cartActions";
import { useDispatch } from 'react-redux';
import { errorMessage } from '../../../utils/showMessage';


const CartItem = ({ item, history }) => {

    const { id, quantity, title, products } = item;
    const dispatch = useDispatch();

    return (
        <Menu secondary
            className={"cart-items-class"}
            as={Link}
            to={`/product/${id}`}
            onClick={() =>
                history.replace(`/product/${id}`)
            }>
            <Image
                src={`/assets/images/products/${products}/${id}/product_1.jpg`}
                alt={title} />
            <div className={"item-details-cart"}>
                <span className={"name-in-dropdown"}>{title}</span>
                <Label className={"quantity-in-dropdown"} color='teal' pointing>{quantity} عدد </Label>
            </div>

            <div className={"trash-icon-in-carts"}>
                <Icon
                    onClick={() => {
                        dispatch(removeItemFromCart(item));
                        errorMessage("محصول از سبد شما حدف شد")
                    }}
                    name={"trash alternate"} size={"large"} color={"red"}
                />
            </div>
        </Menu>
    );
};

export default withRouter(CartItem);