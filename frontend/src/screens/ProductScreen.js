import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  // console.log(props.match.params.id);

  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch, props.match.params.id]);

  const handelAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className='back-to-result'>
        <Link to='/'>Mavk to result</Link>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='details'>
          <div className='details-image'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='details-info'>
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Starts ({product.numReviews} Reviews)
              </li>
              <li>
                <b>{product.price}</b>
              </li>
              <li>
                Descreption
                <div>{product.descreption}</div>
              </li>
            </ul>
          </div>
          <div className='details-action'>
            <ul>
              <li>Price: ${product.price}</li>
              <li>
                Status:{" "}
                {product.countInStock > 0
                  ? product.countInStock
                  : "Unavailable"}
              </li>
              <li>
                QTY:{" "}
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button onClick={handelAddToCart} className='button primary'>
                    Add to cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
