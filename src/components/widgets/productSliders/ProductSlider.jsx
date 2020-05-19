import React from 'react';
import './productSlider.css';
import { Grid, Image, Button } from 'semantic-ui-react';
import ProductSliderTemplate from '../productSliderTemplate/ProductSliderTemplate';
import { Link } from 'react-router-dom';


const ProductSlider = props => {
    const { imageUrl, type, backColor, backColorFrom, settings, data } = props;
    return (
        <Grid
            style={{ borderRadius: "10px", background: `linear-gradient(45deg, ${backColorFrom} 0%,${backColor} 55%,${backColor} 71%,${backColor} 100%)` }}
        >

            <Grid.Row columns={2}>
                <Grid.Column computer={3} table={3} mobile={5} verticalAlign={"middle"}>
                    <Grid.Row>
                        <Image src={imageUrl} style={{ backgroundColor: `${backColor}` }}
                            className="ui small centered image" />
                    </Grid.Row>
                    <Grid.Row className={"button-view-all"}>
                        <Button className={"textButton"} inverted as={Link} to={"/products"}>
                            مشاهده همه
                                </Button>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column computer={11} tablet={11} mobile={10} className={"offers"}>
                    <ProductSliderTemplate
                        data={data}
                        type={type}
                        newSettings={settings}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default ProductSlider;