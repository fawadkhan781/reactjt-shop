import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({lists=[]}) => {
   const limitWords = (str) => {
     return str.split(' ').slice(0, 5).join(' ')
   }
  return (
    <section className="products py-5">
    <div className="container">
      <div className="row">
        { lists.map((list, index) => (
          <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={list?.image} className="card-img-top img-fluid img-thumbnail" style={{height: '400px'}} alt="Product 1" />
            <div className="card-body">
              <h6 className="card-title">{limitWords(list?.title)}</h6>
              <p className="card-text">${list?.price}</p>
              <Link to={`/single/${list.id}`} className="btn btn-primary">View Product</Link>
            </div>
          </div>
        </div>
        ))}
        
       
      </div>
    </div>
  </section>
  )
}

export {Products}