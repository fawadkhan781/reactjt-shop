import React from 'react'

export const Contact = () => {
  return (
    <div className="container">
    <h3> contact page</h3>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputphone" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="inputphone" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Address</label>
        <textarea className="form-control" id="inputAddress" rows="3"></textarea>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    </div>
  )
}
