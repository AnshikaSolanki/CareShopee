import React from "react";

export default function UnderNav(){
    return(
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <img src="assets/log.png" className="img-fluid rounded-start" alt="products"/>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h4 className="card-title">Personalized SkinCare Routine</h4>
                <p className="card-text ">Get your personalized routine by just answering a simple 2-minute quiz. Our professionals will review and evaluate your concerns and we will create the most suitable regimen for you.</p>
                <button className="btn btn-dark" type="submit">Build Now</button>
              </div>
            </div>
           </div>
        </div>
    )
};