import React from 'react';
import { useSelector } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router';
import MainLayout from './mainLayout/MainLayout';
import HomePage from '../pages/homePage/HomePage';
import Product from '../pages/products/singleProduct/Product';
import Checkout from '../pages/checkout/Checkout';
import AllProduct from '../pages/products/allProduct/AllProduct';
import FilterContext from '../components/context/filter/filterContext';
import Categories from '../pages/categories/Categories';



const MainContainer = () => {

    const isFetching = useSelector(state => state.shop.isFetching);
    const products = useSelector(state => state.shop.products);
    const categories = useSelector(state => state.shop.categories);
    const submenus = useSelector(state => state.shop.submenus);
    const collections = useSelector(state => state.shop.collections);
    const brands = useSelector(state => state.shop.brands);


    return (
        <Container fluid>
            <Segment loading={isFetching} basic style={{ margin: "0!important", padding: "0" }}>
                <Switch>
                    <MainLayout>

                        <Route path="/products" render={() =>
                            products.length > 0 && !isFetching &&
                            <FilterContext
                                isLoading={isFetching}
                                products={products}
                                collections={collections}
                                submenus={submenus}
                                brands={brands}
                            >
                                <AllProduct />
                            </FilterContext>
                        } />

                        <Route path="/checkout" component={Checkout} />

                        <Route path="/category/:id" component={Categories} />

                        <Route
                            path={"/product/:id"}
                            component={Product}
                        />

                        <Route
                            exact
                            path={"/"}
                            render={() =>
                                <HomePage
                                    categories={categories}
                                    products={products}
                                    submenus={submenus}
                                    collections={collections}
                                />
                            }
                        />
                    </MainLayout>
                </Switch>
            </Segment>
        </Container>
    )
}

export default MainContainer;