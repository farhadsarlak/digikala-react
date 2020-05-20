import React, { useState, useContext } from 'react';
import '../ProductsComponent.css';

import { Menu, Grid, Dropdown, Label } from 'semantic-ui-react';
import { filterProductContext } from '../../context/filter/filterProductContext';

const SortProduct = () => {

    const [sortByType, setSortByType] = useState();
    const [sortByOrder, setSortByOrder] = useState();
    const filterContext = useContext(filterProductContext);

    const {
        sortFieldItem,
        sortFieldBy,
        sortProduct,
        currentPage,
    } = filterContext;

    return (
        <Grid padded>
            <Label ribbon color="red">
                صفحه {currentPage}
            </Label>

            <Grid.Row columns={2}>
                <Menu secondary className="mainSortMenu">
                    <Menu.Item className="sortMenuItem">
                        <Dropdown
                            button
                            className="icon dropdownSortItem"
                            floating
                            labeled
                            icon="sort"
                            options={sortFieldItem}
                            defaultValue={sortFieldItem[0].value}
                            selection
                            onChange={(e, { value }) => {
                                setSortByType(value);
                                sortProduct(sortByType, sortByOrder)
                            }}
                        />
                    </Menu.Item>
                    <Menu.Item className="sortMenuItem">
                        <Dropdown
                            button
                            className="icon dropdownSortItem"
                            floating
                            labeled
                            icon="sort"
                            options={sortFieldBy}
                            defaultValue={sortFieldBy[0].value}
                            selection
                            onChange={(e, { value }) => {
                                setSortByOrder(value);
                                sortProduct(sortByType, sortByOrder)
                            }}
                        />
                    </Menu.Item>
                </Menu>
            </Grid.Row>
        </Grid>
    )
}

export default SortProduct;