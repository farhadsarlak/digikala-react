import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import ProductSlider from '../../components/widgets/productSliders/ProductSlider';
import ProductSliderTemplate from '../../components/widgets/productSliderTemplate/ProductSliderTemplate';
import Advertising from '../../components/widgets/advertising/Advertising';
import ShowCategories from '../../components/widgets/showCategories/ShowCategories';

const HomaPage = ({ products, categories, submenus, collections }) => {

    const isFetching = useSelector(state => state.shop.isFetching);

    return (isFetching ? <p>در حال بارگزاری</p> :
        <Fragment>
            <Container style={{ margin: "50px 0" }}>
                <Grid padded>
                    <Grid.Row stretched>
                        <Grid.Column computer={12} tablet={16} mobile={16}>
                            <ProductSliderTemplate
                                data={collections}
                                type={"homeSlide"}
                                newSettings={{
                                    arrows: false,
                                    dot: true,
                                    slidesToShow: 1,
                                    autoPlay: true,
                                    autoplaySpeed: 4000,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                infinite: true,
                                            }
                                        },
                                        {
                                            breakpoint: 800,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                initialSlide: 1
                                            }
                                        },
                                        {
                                            breakpoint: 600,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1
                                            }
                                        }
                                    ],
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle" only={"computer"} computer={4}>
                            <Grid.Column style={{ margin: "20px 0" }}>
                                <Advertising
                                    imageUrl={'/assets/images/advertising/Advertising7.jpg'}
                                />
                            </Grid.Column>
                            <Grid.Column style={{ margin: "20px 0" }}>
                                <Advertising
                                    imageUrl={'/assets/images/advertising/Advertising8.jpg'}
                                />
                            </Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            {/*  ------------------------------ offer slider ---------------------------- */}
            <Container fluid style={{ margin: "50px 0" }}>
                <ProductSlider
                    type={"offer"}
                    data={products}
                    imageUrl={"/assets/images/productSliderBackground/background-1.png"}
                    backColor={"#ef394e"}
                    backColorFrom={"#E87881"}
                    settings={{
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 4,
                        dots: false
                    }}
                />
            </Container>


            {/*  */}
            <Container style={{ margin: "50px 0" }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising1.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising2.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising3.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising4.jpg'}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising5.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising6.jpg'}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            {/* -------------------------------- offer slider   ------------------------------------- */}

            <Container fluid style={{ margin: "50px 0" }}>
                <ProductSlider
                    type={"offer"}
                    data={products}
                    imageUrl={"/assets/images/productSliderBackground/background-2.png"}
                    backColor={"#6bb927"}
                    backColorFrom={"#bceb95"}
                    settings={{
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 4,
                        dots: false
                    }}
                />
            </Container>

            <Container style={{ margin: "50px 0" }}>
                <Grid>
                    <Grid.Row stretched>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <ProductSliderTemplate
                                data={products}
                                type="productSlider"
                                submenu={submenus[1]}
                                color="teal"
                                newSettings={{
                                    autoplay: false,
                                    arrows: true,
                                    autoplaySpeed: 3000,
                                    slidesToShow: 3,
                                    dots: false
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column only={"computer"} computer={5}>
                            <ProductSliderTemplate
                                data={products}
                                type="productSlider"
                                submenu={submenus[2]}
                                color="teal"
                                newSettings={{
                                    autoplay: true,
                                    autoplaySpeed: 3000,
                                    slidesToShow: 1,
                                    arrows: false,
                                    dots: false,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                infinite: true,

                                            }
                                        }
                                    ]
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container >

            <Container fluid style={{ margin: "50px 0" }}>
                <Grid>
                    <Grid.Row only={"computer tablet"}>
                        <Grid.Column>
                            <ShowCategories
                                categories={categories}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            <Container style={{ margin: "50px 0" }}>
                <ProductSliderTemplate
                    data={products}
                    type="productSlider"
                    submenu={submenus[3]}
                    color="black"
                    newSettings={{
                        autoplay: false,
                        arrows: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 4,
                        dots: false
                    }}
                />
            </Container>

            {/* Advertising */}
            <Container style={{ margin: "50px 0" }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising1_.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising2_.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising3_.jpg'}
                            />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Advertising
                                imageUrl={'/assets/images/advertising/Advertising4_.jpg'}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            {/*end of Advertising */}

            <Container fluid style={{ margin: "50px 0" }}>
                <ProductSliderTemplate
                    data={products}
                    type="productSlider"
                    submenu={submenus[4]}
                    color="yellow"
                    newSettings={{
                        autoplay: false,
                        arrows: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 4,
                        dots: false
                    }}
                />
            </Container>

            <Container fluid style={{ margin: "50px 0" }}>
                <ProductSliderTemplate
                    data={products}
                    type="productSlider"
                    submenu={submenus[0]}
                    color="orange"
                    newSettings={{
                        autoplay: false,
                        arrows: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 4,
                        dots: false
                    }}
                />
            </Container>

        </Fragment>
    )
};

export default HomaPage;