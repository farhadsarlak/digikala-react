import React, { useEffect, useState } from 'react';
import { filterProductContext } from './filterProductContext';
import { withRouter } from 'react-router-dom';
import { paginate } from '../../../utils/Paginate';
import { Segment } from 'semantic-ui-react';
import { orderBy } from 'lodash';


const FilterContext = ({ children, location, products, isLoading }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(20);
    const [search, setSearch] = useState("");
    const [ProductList, setProductList] = useState(products);
    const [checkboxValue, setCheckboxValue] = useState("all");

    const sortFieldItem = [
        { key: "title", text: "عنوان", value: "title", icon: "text height" },
        { key: "price", text: "قیمت", value: "price", icon: "money bill alternate outline" },
    ];
    const sortFieldBy = [
        { key: "asc", text: "صعودی", value: "asc", icon: "sort amount up" },
        { key: "desc", text: "نزولی", value: "desc", icon: "sort amount down" },
    ];

    const sortProduct = (type = "title", order = "asc") => {
        setProductList(orderBy(ProductList, [type], [order]))
    };

    const priceRange = array => {
        setProductList(
            products?.filter(product => product.price >= array[0] && product.price <= array[1])
        )
    };

    const handlePaginationChange = (e, { activePage }) => {
        setCurrentPage(activePage);
    };

    let filterText = location.search ? (location.search.substr(1)) : "";

    const filteredProduct = ProductList?.filter
        (product => product.title?.toLowerCase().includes(search.toLowerCase()));

    const productData = paginate(filteredProduct, currentPage, perPage);

    useEffect(() => {
        switch (filterText) {
            case "":
                setProductList(products.filter(product => product));
                setCheckboxValue("all");
                break;
            case "discount":
                setProductList(products.filter(product => product.discount && product));
                setCheckboxValue("discount");
                break;
            default: setProductList(products)
        }
    }, [products, filterText]);

    const toggleCheckboxes = (e, { value }) => {
        setCheckboxValue(value);
        switch (value) {
            case "all":
                setProductList(products.filter(product => product));
                break;
            case "discount":
                setProductList(products.filter(product => product.discount && product));
                break;

            default: setProductList(products)
        }
    };


    return (
        <filterProductContext.Provider value={{
            priceRange,
            sortProduct,
            sortFieldBy,
            sortFieldItem,
            toggleCheckboxes,
            checkboxValue,
            products,
            currentPage,
            perPage,
            handlePaginationChange,
            setCurrentPage,
            productData,
            setSearch,
            filteredProduct,
            search
        }}>
            <Segment basic loading={isLoading}>
                {children}
            </Segment>
        </filterProductContext.Provider>
    )


}

export default withRouter(FilterContext);