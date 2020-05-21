import React, { useState, useEffect } from 'react';
import './Product.css';
import { Container, Segment, Tab, Breadcrumb, Grid, Icon, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProductAsync } from '../../../redux/singleProduct/productAction';
import Review from './review/Review';
import Properties from './properties/Properties';
import Comments from './comments/Comments';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { addItemToCart } from '../../../redux/cart/cartActions';
import { successMessage } from '../../../utils/showMessage';
import ImageViewer from '../../../components/imageViewer/ImageViewer';
import ProductSliderTemplate from '../../../components/widgets/productSliderTemplate/ProductSliderTemplate';
import { getSingleSubmenuAsync } from '../../../redux/submenu/submenuActions';
import { getSingleCategoryAsync } from '../../../redux/category/categoryActions';
import { getSingleCollectionAsync } from '../../../redux/collection/collectionActions';

const MAX_ITEMS = 3;

const Product = ({ match }) => {

    const dispatch = useDispatch();


    const [showColor, setShowColor] = useState(false);
    const [showProperty, setShowProperty] = useState(false);

    const product = useSelector(state => state.singleProduct);
    const products = useSelector(state => state.shop.products);
    const loading = useSelector(state => state.singleProduct.isLoading);
    const submenu = useSelector(state => state.singleSubmenu);
    const submenus = useSelector(state => state.shop.submenus)
    const category = useSelector(state => state.singleCategory);
    const collection = useSelector(state => state.singleCollection);

    useEffect(() => {
        dispatch(getSingleProductAsync(match.params.id));
        dispatch(getSingleSubmenuAsync(product.submenu));
        dispatch(getSingleCategoryAsync(product.category));
        dispatch(getSingleCollectionAsync(product.products));

        return () => {
            setShowColor(false);
            setShowProperty(false)
        }
    }, [dispatch, match, product.submenu, product.category, product.products]);

    const panes = [
        {
            menuItem: { key: 'eye', icon: 'eye', color: "teal", content: 'نقد و بررسی' },
            render: () => <Tab.Pane> <Review product={product} /> </Tab.Pane>,
        },
        {
            menuItem: { key: 'property', icon: 'list ul', color: "teal", content: 'مشخصات' },
            render: () => <Tab.Pane><Properties product={product} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'comments', icon: 'comments outline', color: "teal", content: 'نظرات کاربران' },
            render: () => <Tab.Pane><Comments product={product} /></Tab.Pane>,
        },
        {
            menuItem: { key: 'questions', icon: 'question circle outline', color: "teal", content: 'پرسش و پاسخ' },
            render: () => <Tab.Pane> پرسش و پاسخم </Tab.Pane>,
        }

    ];

    const toggleColor = () => {
        setShowColor(!showColor);
    };

    const toggleProperty = () => {
        setShowProperty(!showProperty);
    };

    function getRenderedColor(props) {
        if (showColor) {
            return props
        }
        return props.slice(0, MAX_ITEMS)
    }

    function getRenderedProperty(props) {
        if (showProperty) {
            return props
        }
        return props.slice(0, MAX_ITEMS)
    }


    return (
        <Segment basic loading={loading} style={{ margin: "30px 0" }}>
            <Breadcrumb>
                <Breadcrumb.Section style={{ margin: "5px 0" }}>
                    <Link className="breadcrumbLink" to={`/category/${category.id}`}>{category.title}</Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section style={{ margin: "5px 0" }}>
                    <Link className="breadcrumbLink" to={`/products?submenus=${submenu.id}`}>{submenu.title}</Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section style={{ margin: "5px 0" }}>
                    <Link className="breadcrumbLink" to={`/products?collections=${collection.id}`}>{collection.title}</Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section style={{ margin: "5px 0" }} active>
                    {product.title}
                </Breadcrumb.Section>
            </Breadcrumb>
            <Container fluid style={{ margin: "30px 0" }}>
                <Segment raised loading={loading} color="teal">
                    <Grid>
                        <Grid.Row stretched verticalAlign="middle">
                            <Grid.Column computer={3} tablet={3} mobile={16}>
                                <ImageViewer product={product} />
                            </Grid.Column>

                            <Grid.Column computer={10} tablet={10} mobile={16}>
                                <div className={"product-detail-in-productPage"}>
                                    <Grid.Row>
                                        <h3>{product.title}</h3>
                                        <hr />
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid columns={2} padded="vertically">
                                            <Grid.Column>
                                                <b>برند: </b>
                                                <span>{product.brand}</span>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <b> دسته بندی: </b>
                                                <span>{submenu.title}</span>
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <b> رنگ های موجود: </b>
                                        {product.color ?
                                            getRenderedColor(product.color)
                                                .map((item, i) => {
                                                    return <div key={i} className={"color-box-in-productPage"}
                                                        style={{ backgroundColor: `${item.code}` }}>
                                                        <label> &nbsp; </label>
                                                    </div>
                                                }
                                                )
                                            : null}
                                        {
                                            product.color && product.color.length > 3 ?
                                                <span onClick={toggleColor} className={"toggle-less-more"}>
                                                    {
                                                        showColor ? "نمایش رنگ کمتر" : "نمایش رنگ های بیشتر "
                                                    }
                                                </span> :
                                                null
                                        }
                                    </Grid.Row>
                                    <Grid.Row className={"margin-productPage"}>
                                        <b> ویژگی های محصول: </b>
                                        {product.properties ?
                                            getRenderedProperty(product.properties)
                                                .map(item =>
                                                    <div key={item.id}>
                                                        <div className={"padding-properties"}>
                                                            <Icon name={"check"} />
                                                            <span>{item.title}:</span>
                                                            <span>{item.description}</span>
                                                        </div>
                                                    </div>
                                                )
                                            : null}
                                        {
                                            product.properties && product.properties.length > 3 ?
                                                <span onClick={toggleProperty} className={"toggle-less-more"}>
                                                    {
                                                        showProperty ? "ویژگی های کمتر" : "ویژگی های بیشتر "
                                                    }
                                                </span> :
                                                null
                                        }
                                    </Grid.Row>
                                </div>
                            </Grid.Column>

                            <Grid.Column only={"computer tablet"} width={3} className={"pic-in-productPage"}>
                                <div className={'div-picture-productPage'}>
                                    <h2 className={"product-price"}>
                                        <NumberFormat
                                            value={product.price}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            className={"format-number"}
                                        />
                                        تومان
                                    </h2>
                                    <Button
                                        color={"red"}
                                        icon
                                        size="small"
                                        labelPosition='left'
                                        onClick={() => {
                                            dispatch(addItemToCart(product));
                                            successMessage("محصول به سبد شما اضافه شد");
                                        }}
                                    >
                                        <Icon name='shopping cart' />
                                            اضافه به سبد
                                    </Button>

                                </div>
                            </Grid.Column>

                            <Grid.Column width={16} only="mobile">
                                <Button
                                    color="red"
                                    icon
                                    labelPosition='right'
                                    onClick={() => {
                                        dispatch(addItemToCart(product));
                                        successMessage("محصول به سبد شما اضافه شد");
                                    }}>
                                    <Icon name='shopping cart' />
                                        اضافه به سبد خرید
                                        </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/*  similar products */}
                <Container style={{ margin: "50px 0" }}>
                    <h4>محصولات مشابه</h4>
                    <ProductSliderTemplate
                        type="productSlider"
                        data={products}
                        color="teal"
                        submenu={submenu}
                        newSettings={{
                            autoplay: true,
                            arrows: true,
                            autoplaySpeed: 3000,
                            slidesToShow: 4,
                            dots: false
                        }}
                    />
                </Container>

                <Grid className={"tabMenu-in-productPage"}>
                    <Grid.Row>
                        <Grid.Column>
                            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                {/*  similar products */}
                <Container style={{ margin: "50px 0" }}>
                    <ProductSliderTemplate
                        type="productSlider"
                        data={products}
                        color="teal"
                        submenu={submenus[1]}
                        newSettings={{
                            autoplay: true,
                            arrows: true,
                            autoplaySpeed: 3000,
                            slidesToShow: 4,
                            dots: false
                        }}
                    />
                </Container>

            </Container>
        </Segment>
    )
}

export default Product;