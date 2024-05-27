import React from 'react';
import './ProductCard.css';

const ProductCard = ({
  product_image,
  product_rating,
  product_txt_description,
  product_promotion_price,
  product_msrp_price,
  badge_product_choice,
  badge_product_storehouse,
  badge_product_status,
}) => {
  return (
    <div className="product-card">
      <img src={product_image} alt="Product" className="product-image" />
      <div className="product-details">
        <div className="badges">
          {badge_product_choice && <span className="badge choice">Top Choice</span>}
          {badge_product_storehouse && <span className={`badge ${badge_product_storehouse.toLowerCase()}`}>{badge_product_storehouse}</span>}
          {badge_product_status && (
            <span className={`badge ${typeof badge_product_status === 'string' ? badge_product_status : 'discount'}`}>
              {typeof badge_product_status === 'string' ? badge_product_status : `${badge_product_status}% off`}
            </span>
          )}
        </div>
        <div className="rating">{`Rating: ${product_rating}`}</div>
        <div className="description">{product_txt_description}</div>
        <div className="prices">
          {product_promotion_price && <span className="promotion-price">MXN {product_promotion_price}</span>}
          <span className={`msrp-price ${product_promotion_price ? 'line-through' : ''}`}>MXN {product_msrp_price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
