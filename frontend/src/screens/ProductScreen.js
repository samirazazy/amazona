import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  // console.log(props.match.params.id);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch, props.match.params.id]);
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
              <li>Price:${product.price}</li>
              <li>Status: {product.status}</li>
              <li>
                QTY:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
                <button className='button primary'>Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
