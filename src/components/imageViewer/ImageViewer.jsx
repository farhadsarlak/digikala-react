import React, { useState } from 'react';
import './ImageViewer.css';
import Viewer from 'react-viewer';
import { Image } from "semantic-ui-react";

const ImageViewer = ({ product }) => {

    let images = [];

    product.images.map(image =>
        images.push({
            src: `/assets/images/products/${product.products}/${product.id}/${image}.jpg`
        })
    );

    const [visible, setVisible] = useState(false);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image className={'pointer'} verticalAlign='middle' src={images[0].src} size={'small'} centered onClick={() => { setVisible(true) }} />
            <Viewer
                className={"image-imageViewerComponent"}
                visible={visible}
                onClose={() => { setVisible(false); }}
                images={images}
            />
        </div>
    )
};

export default ImageViewer;