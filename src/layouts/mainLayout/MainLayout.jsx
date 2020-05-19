import React, { Fragment } from 'react';
import "./mainLayout.css";
import { Helmet } from 'react-helmet/es/Helmet';
import { Container, Grid } from 'semantic-ui-react';
import MainHeader from '../../components/mainHeader/MainHeader';
import MainMenu from '../../components/mainMenu/MainMenu';
import Footer from '../../components/footer/Footer';

const MainLayout = props => {

    return (
        <Fragment>

            <Helmet>
                <title>فروشگاه اینترنتی دیجی‌کالا</title>
            </Helmet>

            <Grid className="mainMenuInMainLayout">
                <Grid.Row only="computer tablet">
                    <MainHeader />
                </Grid.Row>
                <Grid.Row>
                    <MainMenu />
                </Grid.Row>

            </Grid>

            <Container fluid>
                {props.children}
            </Container>

            <Footer />

        </Fragment>
    );
}

export default MainLayout;