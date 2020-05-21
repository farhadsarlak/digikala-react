import React from "react";
import './EmptyCart.css';
import { Container, Grid, Segment, Image } from "semantic-ui-react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import ProductSliderTemplate from '../../widgets/productSliderTemplate/ProductSliderTemplate';

const EmptyCart = ({ product }) => {

	const products = useSelector(state => state.shop.products);
	const submenus = useSelector(state => state.shop.submenus);

	return (
		<Container fluid className={"main-container-emptyCart"}>
			<Grid columns={2}>
				<Grid.Row stretched>
					<Grid.Column className={"emptyCart-grid"} computer={12} tablet={16} mobile={16}>
						<Segment raised color={"teal"} className={"segment-emptyCart"}>
							<Grid.Row className={"imageInEmptyCart"}>
								<Image size={"medium"} src={'./assets/images/emptyCart.png'} wrapped />
							</Grid.Row>
							<Grid.Row className={"marginTopBottom-1"}>
								<p >سبد خرید شما خالی است!</p>
							</Grid.Row>
							<Grid.Row className={"marginTopBottom-1"}>
								<Link to={"/"}>بازگشت به صفحه اصلی</Link>
							</Grid.Row>
						</Segment>
					</Grid.Column>
					<Grid.Column only={"computer"} computer={4} className={"suggested-grid"}>
						<ProductSliderTemplate
							type="productSlider"
							data={products}
							color="teal"
							submenu={submenus[2]}
							newSettings={{
								autoplay: true,
								autoplaySpeed: 3000,
								slidesToShow: 1,
								arrows: false,
								dots: false,
								responsive: [
									{
										breakpoint: 1024,
										settings: {
											slidesToShow: 1,
											slidesToScroll: 1,
											infinite: true,
											dots: false
										}
									}
								]
							}}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Container>
				<Grid>
					<Grid.Column>
						<ProductSliderTemplate
							type="productSlider"
							data={products}
							color="teal"
							submenu={submenus[1]}
							newSettings={{
								autoplay: false,
								arrows: true,
								autoplaySpeed: 3000,
								slidesToShow: 4,
								dots: false
							}}
						/>
					</Grid.Column>
				</Grid>
			</Container>
		</Container >
	)
};

export default EmptyCart;
