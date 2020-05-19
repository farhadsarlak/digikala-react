import React, { useContext, useState } from 'react';
import '../ProductsComponent.css';

import { Segment, Grid, Input, Form, Checkbox, Label, Divider, Icon } from 'semantic-ui-react';
import { filterProductContext } from '../../context/filter/filterProductContext';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import NumberFormat from 'react-number-format';

const ProductSidebar = () => {

    const filterContext = useContext(filterProductContext);

    const {
        toggleCheckboxes,
        checkboxValue,
        products,
        setSearch,
        priceRange,
        search
    } = filterContext;

    const [priceRangeText, setPriceRangeText] = useState([]);

    return (
        <Segment raised color="teal">
            <Divider horizontal>
                <h4 style={{ backgroundColor: "#efefef", borderRadius: "10px", padding: "3px 10px" }}>
                    {products.length} محصول
                </h4>
            </Divider>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div style={{ margin: "2px 0" }}>
                            <Label
                                color="teal"
                                icon={"filter"}
                                content={"فیلترهای اعمال شده"}
                                pointing={"below"}
                            />
                        </div>
                        {
                            (search !== "") ?
                                <Label>
                                    {search}
                                    <Icon name="delete" onClick={() => setSearch("")} />
                                </Label> : null
                        }
                        {
                            checkboxValue === "all" ? <Label>
                                همه
                            </Label> : <Label>محصولات با تخفیف</Label>
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Input
                            className="searchInput"
                            placeholder="محصول مورد نظر"
                            name="search"
                            icon="search"
                            size="mini"
                            value={search}
                            onChange={e => setSearch(e.target.value)}

                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <Checkbox
                                    radio
                                    label="همه"
                                    value="all"
                                    name="checkboxFilter"
                                    checked={checkboxValue === "all"}
                                    onChange={toggleCheckboxes}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    radio
                                    label={"محصولات با تخفیف"}
                                    name={"checkboxFilter"}
                                    value={"discount"}
                                    checked={checkboxValue === "discount"}
                                    onChange={toggleCheckboxes}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <h3 style={{ margin: "20px 0" }}>براساس محدوده قیمت</h3>
                        {priceRangeText.length > 0 &&
                            <p style={{ fontSize: "13px" }}> از محدوده قیمتی
				                <span style={{ color: "red", fontWeight: "bold", padding: "0 6px" }}>
                                    <NumberFormat
                                        value={priceRangeText[0]}
                                        displayType="text"
                                        thousandSeparator={true}
                                    />
                                    {" "}تومان{" "}
                                </span>
				                تا محدوده قیمتی
				                <span style={{ color: "red", fontWeight: "bold", padding: "0 6px" }}>
                                    <NumberFormat
                                        value={priceRangeText[1]}
                                        displayType="text"
                                        thousandSeparator={true}
                                    />
                                    {" "}تومان{" "}
                                </span>
                            </p>
                        }
                        <Range
                            min={0}
                            max={100000000}
                            defaultValue={[0, 10000000]}
                            onChange={(e) => {
                                setPriceRangeText(e);
                                priceRange(e);
                            }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment >
    )
}

export default ProductSidebar;