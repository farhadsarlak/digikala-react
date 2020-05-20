import React from 'react';
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';


const ShowProductData = ({ product: { id, discount, products, title, images, price } }) => (
    <Card
        className={"cardItem"}
        as={Link}
        to={`/product/${id}`}
        color="orange"
        fluid
    >
        <Image
            src={`/assets/images/products/${products}/${id}/${images[0]}.jpg`}
            ui={false}
            centered
            size="mini"
            wrapped
        />
        <Card.Content>
            <Card.Header className={"cart-header-productOffer"}>
                {title}
            </Card.Header>
        </Card.Content>
        <Card.Content extra>
            <div className={"textLeft"}>
                <NumberFormat
                    value={price}
                    displayType={'text'}
                    thousandSeparator={true}
                />{" "}
                                    تومان
                                </div>
            {discount ?
                <Card.Content extra>
                    <div className={"textLeft"}>
                        <Label color={"red"} pointing>
                            <Icon name={"percent"} />
                            {discount}
                        </Label>
                    </div>
                </Card.Content> : null
            }
        </Card.Content>
    </Card>
);
export default ShowProductData;