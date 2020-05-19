import React from 'react';
import { useSelector } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router';
import MainLayout from './mainLayout/MainLayout';
import HomePage from '../pages/homePage/HomePage';
import Product from '../pages/products/singleProduct/Product';
import Checkout from '../pages/checkout/Checkout';


const MainContainer = () => {

    const isFetching = useSelector(state => state.shop.isFetching);
    const products = useSelector(state => state.shop.products);
    const categories = useSelector(state => state.shop.categories);
    const submenus = useSelector(state => state.shop.submenus);
    const collections = useSelector(state => state.shop.collections);


    return (
        <Container fluid>
            <Segment loading={isFetching} basic style={{ margin: "0!important", padding: "0" }}>
                <Switch>
                    <MainLayout>

                        <Route path="/checkout" component={Checkout} />

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