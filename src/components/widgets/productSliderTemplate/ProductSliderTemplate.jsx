import React from 'react';
import './ProductSliderTemplate.css';
import { Card, Image, Segment, Label, Icon, Divider } from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const ProductSliderTemplate = ({ newSettings, type, data, submenu, color }) => {

    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    padding: "20px 0",
                    margin: "0 auto!important"
                }}
            >
                <Label className="dots-slick" horizontal basic size={"tiny"} style={{ margin: "0 auto" }}>
                    {dots}
                </Label>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ],
        ...newSettings
    };

    switch (type) {

        case ("homeSlide"):
            template = data.filter((item, index) => index < 5).map((item, index) =>
                <Image
                    key={index}
                    as={Link}
                    to={`/products?collections=${item.id}`}
                    src={`/assets/images/slider/slider${index + 1}.jpg`}
                    size={"big"}
                    rounded
                    centered
                />
            );
            break;

        case ("offer"):
            template = data.map(item =>
                item.discount && (
                    <Segment className={"offerItems"} key={item.id}>
                        <Card as={Link} to={`/product/${item.id}`} className="ui yellow fluid card card-productOffers">
                            <Image
                                src={`/assets/images/products/${item.products}/${item.id}/${item.images[0]}.jpg`}
                                ui={false}
                                centered
                                size={"small"}
                                wrapped
                            />
                            <Card.Content>
                                <Card.Header
                                    className={"cart-header-productOffer"}>{item.title.substring(0, 50) + '...'}</Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <div className={"textLeft"}>
                                    <NumberFormat
                                        value={item.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                    تومان
                                </div>
                                <div className={"textLeft"}>
                                    <Label color={"red"} pointing>
                                        <Icon name={"percent"} />
                                        {item.discount}
                                    </Label>
                                </div>
                            </Card.Content>
                        </Card>
                    </Segment>
                ));
            break;


        case ("productSlider"):
            template = data.filter(product => product.submenu === submenu.id).map(item =>
                <Segment raised className={"suggestedProductItems"} key={item.id}>
                    <Card as={Link} to={`/product/${item.id}`} className={"card-productOffers"}>
                        <Image
                            src={`/assets/images/products/${item.products}/${item.id}/${item.images[0]}.jpg`}
                            wrapped ui={false} />
                        <Card.Content>
                            <Card.Description className={"textRight-suggestedProduct"}>
                                {item.title}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <h4 className={"price-suggestedProduct"}>
                                <NumberFormat
                                    value={item.price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                />
                                تومان
                            </h4>
                        </Card.Content>
                    </Card>
                </Segment>
            );
            break;
        default:
            template = null
    }

    return (
        type === "productSlider" ?
            <Segment color={color} raised className={"main-segment-productSlider"}>
                <Divider horizontal>
                    <h4 style={{ margin: "20px auto" }}>{submenu.title}</h4>
                </Divider>
                <Slider {...settings}>
                    {template}
                </Slider>
            </Segment>
            :
            <Slider {...settings}>
                {template}
            </Slider>
    )
}

export default ProductSliderTemplate;