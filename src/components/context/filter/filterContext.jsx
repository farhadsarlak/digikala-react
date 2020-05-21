import React, { useEffect, useState } from 'react';
import { filterProductContext } from './filterProductContext';
import { withRouter, useLocation } from 'react-router-dom';
import { paginate } from '../../../utils/Paginate';
import { Segment } from 'semantic-ui-react';
import { orderBy } from 'lodash';


const FilterContext = ({ children, submenus, location, products, collections, isLoading }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(18);
    const [search, setSearch] = useState("");
    const [ProductList, setProductList] = useState(products);
    const [checkboxValue, setCheckboxValue] = useState("all");
    const [mainCollection, setMainCollection] = useState();
    const [mainSubmenu, setMainSubmenu] = useState();
    const [queryString, setQueryString] = useState([]);


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
        setTimeout(() => {
            window.scrollTo({
                top: 100,
                left: 0,
                behavior: "smooth"
            });
        }, 2)
    };

    const filterText = useLocation().search.substr(1);

    const filteredProduct = ProductList?.filter
        (product => product.title?.toLowerCase().includes(search.toLowerCase()));

    const productData = paginate(filteredProduct, currentPage, perPage);

    useEffect(() => {

        setQueryString(filterText.split("="));

        switch (queryString[0]) {
            case "":
                setProductList(products.filter(product => product));
                setCheckboxValue("all");
                break;

            case "discount":
                setProductList(products.filter(product => product.discount && product));
                setCheckboxValue("discount");
                break;

            case "collections":
                setProductList(products.filter(product => product.products === parseInt(queryString[1])));
                setMainCollection(collections.filter(coll => coll.id === parseInt(queryString[1])))
                setCheckboxValue("collections");
                break;

            case "submenus":
                setProductList(products.filter(product => product.submenu === parseInt(queryString[1])));
                setMainSubmenu(submenus.filter(sub => sub.id === parseInt(queryString[1])));
                setCheckboxValue("submenus")
                break

            default: setProductList(products)
        };

        return () => {
            setCheckboxValue("");
        }

    }, [products, queryString[0], queryString[1], filterText, collections, submenus]);

    const toggleCheckboxes = (e, { value }) => {
        setCheckboxValue(value);
        switch (value) {
            case "all":
                setProductList(products.filter(product => product));
                setMainSubmenu([]);
                setMainCollection([]);
                break;
            case "discount":
                setProductList(products.filter(product => product.discount && product));
                setMainCollection([]);
                setMainSubmenu([]);
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
            search,
            mainCollection,
            setQueryString,
            setMainCollection,
            mainSubmenu,
            setMainSubmenu
        }}>
            <Segment basic loading={isLoading}>
                {children}
            </Segment>
        </filterProductContext.Provider>
    )


}

export default withRouter(FilterContext);