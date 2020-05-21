import React, { useEffect } from 'react';
import { getSingleCategoryAsync } from '../../redux/category/categoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import CategoriesSidebar from '../../components/categories/categoriesSidebar/CategoriesSidebar';
import ProductSliderTemplate from '../../components/widgets/productSliderTemplate/ProductSliderTemplate';
import Advertising from '../../components/widgets/advertising/Advertising';


const Categories = ({ match }) => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.singleCategory);
    const submenus = useSelector(state => state.shop.submenus);
    const collections = useSelector(state => state.shop.collections);
    const products = useSelector(state => state.shop.products);

    const mainSubmenu = submenus?.filter(sub => sub.category_id === category?.id);

    useEffect(() => {
        dispatch(getSingleCategoryAsync(match.params.id));

    }, [dispatch, match]);

    return (
        <Container fluid style={{ margin: "30px 0" }}>
            <Grid columns={2} padded>
                <Grid.Row stretched>

                    <Grid.Column only={"computer tablet"} computer={4} tablet={5}>
                        <CategoriesSidebar
                            submenu={mainSubmenu}
                            collections={collections}
                            category={category}
                        />
                    </Grid.Column>

                    <Grid.Column computer={12} tablet={11} mobile={16}>
                        <Grid.Row stretched>
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
                        </Grid.Row>
                        <Grid padded>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <Advertising imageUrl="/assets/images/submenu/1.jpg" />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Advertising imageUrl="/assets/images/submenu/2.jpg" />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Advertising imageUrl="/assets/images/submenu/3.jpg" />
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Advertising imageUrl="/assets/images/submenu/7.jpg" />
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                        <Grid padded>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Advertising imageUrl="/assets/images/submenu/5.jpg" />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Advertising imageUrl="/assets/images/submenu/4.jpg" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        <Grid padded>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Advertising
                                        imageUrl={'/assets/images/submenu/6.jpg'}
                                    />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Advertising
                                        imageUrl={'/assets/images/submenu/8.jpg'}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        {mainSubmenu.map((sub, index) =>
                            <Grid padded key={index}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <ProductSliderTemplate
                                            data={products}
                                            type="productSlider"
                                            submenu={sub}
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
                                </Grid.Row>
                            </Grid>
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Categories;