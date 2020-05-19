import React, { Fragment, useState } from "react";
import './CheckoutItem.css';

import { Segment, Image, Grid, Button, Label, Modal, Icon } from "semantic-ui-react";

import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, decrement } from "../../redux/cart/cartActions";
import { errorMessage, successMessage, warningMessage } from "../../utils/showMessage";

const CheckoutItem = ({ cartItem }) => {

	const [showModal, setShowModal] = useState(false);
	const onOpenModal = () => setShowModal(true);
	const onCloseModal = () => setShowModal(false);

	const dispatch = useDispatch();

	return (
		<Fragment>
			<Segment raised color={"red"} className={"checkoutPage-segment"} >
				<Grid>
					<Grid.Column width={4} className={"image-in-checkOutItemPage"}>
						<Image
							verticalAlign='middle'
							size={"tiny"}
							src={`/assets/images/products/${cartItem.products}/${cartItem.id}/product_1.jpg`}
						/>
					</Grid.Column>
					<Grid.Column width={12} column={2}>
						<Grid.Column width={12}>
							<Grid.Row>
								<p className={"checkoutPage-title"}>
									{cartItem.title}
								</p>
							</Grid.Row>
							<Grid.Row className={"checkoutPage-item-container"}>
								{cartItem.color && (
									<div>
										<Label circular color={cartItem.color[0].code} key={cartItem.color[0].code} >
											{cartItem.color[0].name}
										</Label>
									</div>
								)}
							</Grid.Row>
							<Grid.Row className={"checkoutPage-item-container"}>
								{cartItem.properties && (
									cartItem.properties.filter((property, index) => index < 3)
										.map(property =>
											<div key={property.id}>
												<p className={"propertiesTitle"}>
													<Icon name={"checkmark"} />
													{property.title}:{property.description}
												</p>
											</div>
										)
								)}
							</Grid.Row>
							<Grid.Row className={"checkoutPage-item-container"}>
								<Grid.Column width={16}>
									<Button.Group>
										<Button icon={"plus"} onClick={() => {
											dispatch(addItemToCart(cartItem));
											successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
										}} />
										<Button.Or text={cartItem.quantity} />
										<Button icon={"minus"} onClick={() => {
											dispatch(decrement(cartItem));
											warningMessage("از تعداد درخواستی محصول کم شد ")
										}} />
										<Button icon={"trash alternate"} color={"red"} onClick={onOpenModal} />

									</Button.Group>
								</Grid.Column>
							</Grid.Row>
						</Grid.Column>
						<Grid.Column with={4}>
							<Label color={"red"} attached='bottom right' className={"label-price"}>
								<NumberFormat
									value={cartItem.price * cartItem.quantity}
									displayType={'text'}
									thousandSeparator={true}
								/>
								{" "}  تومان
			    </Label>
						</Grid.Column>
					</Grid.Column>
				</Grid>
			</Segment>
			<Modal size={"mini"} open={showModal} onClose={onCloseModal} dimmer={"blurring"}>
				<Modal.Header>
					حذف محصول
		    <h5 style={{ padding: "5px 0" }}>{cartItem.title}</h5>
				</Modal.Header>

				<Modal.Content>
					<p>از حذف محصول اطمینان دارید؟</p>
				</Modal.Content>
				<Modal.Actions>
					<Button
						positive
						icon={"checkmark"}
						labelPosition={"left"}
						content={"بله، کاملا"}
						size={"small"}
						onClick={() => {
							dispatch(removeItemFromCart(cartItem));
							errorMessage("محصول از سبد خرید شما حذف شد");
							onCloseModal();
						}}
					/>
					<Button negative content={"خیر"} onClick={onCloseModal} />

				</Modal.Actions>
			</Modal>

		</Fragment>
	)
};

export default CheckoutItem;
