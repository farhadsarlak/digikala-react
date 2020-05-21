import { createContext } from 'react';

export const filterProductContext = createContext({
    priceRange: () => { },
    products: [],
    currentPage: 1,
    setCurrentPage: () => { },
    perPage: 5,
    handlePaginationChange: () => { },
    setSearch: () => { },
    productData: [],
    sortProduct: () => { },
    toggleCheckboxes: () => { },
    checkboxValue: true,
    sortFieldItem: [],
    sortFieldBy: [],
    search: "",
})