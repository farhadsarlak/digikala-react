import React from 'react';
import './ShowCategories.css';
import { Icon, Grid, Segment, Divider } from 'semantic-ui-react';

const ShowCategories = ({ categories }) => {

    let template = null;

    template = categories.map(category =>
        <Grid.Column key={category.id}>
            <div className={"main-div-category"}>
                <Icon className={'categoryIcon'} color={'teal'} name={`${category.icon}`} size={'huge'} />
                <p className={'categoryTitle'}>{category.title}</p>
                <p className={'categoryCount'}>1000+</p>
            </div>
        </Grid.Column>
    );

    return (
        <Segment raised>
            <Divider horizontal>
                <h3 style={{ margin: "20px 0" }}>بیش از 20000 کالا در دسته بندی های مختلف</h3>
            </Divider>
            <Grid columns={9}>
                {template}
            </Grid>
        </Segment>
    )
}

export default ShowCategories;