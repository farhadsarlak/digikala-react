import React, { useContext } from 'react';
import { Container, Grid, Segment, Card, Pagination } from 'semantic-ui-react';
import { filterProductContext } from '../../../components/context/filter/filterProductContext';
import { Helmet } from 'react-helmet/es/Helmet';
import ProductSidebar from '../../../components/products/productSidebar/ProductSidebar';

const AllProduct = () => {

    const filterContext = useContext(filterProductContext);

    const {
        currentPage,
        setCurrentPage,
        perPage,
        handlePaginationChange,
        productData,
        filteredProduct
    } = filterContext;

    const totalPage = Math.ceil((filteredProduct.length) / perPage);

    if (totalPage === 1) setCurrentPage(1);

    return (
        <Container fluid style={{ margin: "50px 0" }}>
            <Helmet>
                <title>تمامی محصولات | دیجی کالا</title>
            </Helmet>
            <Grid padded>
                <Grid.Row stretched>
                    <Grid.Column only={"computer tablet"} computer={4} tablet={5}>
                        <ProductSidebar />
                    </Grid.Column>

                    <Grid.Column computer={12} tablet={11} mobile={16}>
                        {
                            filteredProduct.length <= 0 ?
                                <h4 style={{ textAlign: "center", margin: "0 auto", color: "red" }}>
                                    محصولی برای نمایش وجود ندارد
                            </h4> :
                                <Segment raised color="teal">

                                    {
                                        productData.map(product =>
                                            <p>{product.title}</p>)
                                    }
                                    {/* </Card.Group> */}
                                </Segment>
                        }
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <div style={{ textAlign: "center", margin: "40px auto" }}>
                {
                    filteredProduct.length > 0 && totalPage > 1 &&
                    <Pagination
                        totalPages={totalPage}
                        onPageChange={handlePaginationChange}
                        defaultActivePage={currentPage}
                        pointing
                        secondary
                    />
                }
            </div>

        </Container>
    )
}

export default AllProduct;