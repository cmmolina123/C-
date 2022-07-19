import React from "react";

function SingleCar(props) {
   const theCar = props.car;
   return (
      <React.Fragment>
         <div className="card col-md-3 m-1">
            <div className="card-body">
               <h5 className="card-title">{theCar.make}</h5>
               <h5 className="card-text">{theCar.model}</h5>
               <h5 className="card-text">{theCar.year}</h5>
            </div>
         </div>
      </React.Fragment>
   );
}

export default SingleCar;
