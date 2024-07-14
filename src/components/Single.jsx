import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios  from 'axios'
import { Loader } from './Loader'

const Single = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(false);
    // const {pathname} = useLocation();
    // console.log('location', pathname);

    useEffect(() => {
        const fetchSingleProduct = async () => { 
            setLoader(true);
            const singleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log('singleProduct', singleProduct.data);
            setProduct(singleProduct?.data);
            setLoader(false);
        }
        fetchSingleProduct();
    }, [id]);
  return (
    <div className="container mt-5">
    { loader ? <Loader /> : (
        <div className="row">
            <div className="col-md-6">
            <img src={product?.image} className="img-fluid" alt="Product Image" />
            </div>
            <div className="col-md-6">
            <h1>{product?.title}</h1>
            <h4 className="text-muted">$99.99</h4>
            <div className="mb-3">
                <label for="quantity" className="form-label">Quantity</label>
                <input type="number" className="form-control" id="quantity" value="1" min="1" />
            </div>
            <button className="btn btn-primary mb-3">Add to Cart</button>
            <h5>Description</h5>
            <p>{product?.description}</p>
            </div>
        </div>
    )}
    </div>

  )
}

export default Single