import React from 'react';
import './Review.css';
import ShowMoreTex from 'react-show-more-text';


const Review = ({ product }) => (
    <div className={"Review-description"}>
        <h2 className={"Review-Title"}>نقد و بررسی اجمالی</h2>
        <p className={"Review-ProductTitle"}>{product.title}</p>

        <ShowMoreTex
            lines={2}
            more='ادامه مطلب'
            less='بستن'
            anchorClass=''
            expanded={false}
        >
            {product.description}
        </ShowMoreTex>
    </div>
);

export default Review;

