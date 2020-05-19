import React from 'react';
import './Properties.css';
import {Table} from "semantic-ui-react";


const Properties=({product})=>(
    <div>
        <h2 className={"Review-Title"}> مشخصات محصول</h2>
        <p className={"properties-ProductTitle"}>{product.title}</p>
        <Table basic={"very"} className={"properties-table"}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={4}>ویژگی</Table.HeaderCell>
                    <Table.HeaderCell width={12}>توضیحات</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {product.properties.map(property=>
                    <Table.Row key={property.id}>
                        <Table.Cell width={4}> {property.title} </Table.Cell>
                        <Table.Cell width={12}>{property.description}</Table.Cell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    </div>
);

export default Properties;
