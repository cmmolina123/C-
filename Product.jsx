import React, { useState } from "react";
import productService from "./productService";
import toastr from "toastr";

function Products() {
   const [userData, setUserData] = useState({
      name: "",
      manufacture: "",
      description: "",
      cost: "12345",
   });

   const onFormFieldChange = (event) => {
      console.log("onChange", { syntheticEvent: event });
      const target = event.target;
      const value = target.value;
      const name = target.name;

      setUserData((prevState) => {
         console.log("updater onChange");

         const newUserObject = {
            ...prevState,
         };

         newUserObject[name] = value;
         return newUserObject;
      });
   };

   const onClickSubmit = (e) => {
      e.preventDefault();
      productService.postProduct(userData).then(onSuccess).catch(onError);
   };
   const onSuccess = (response) => {
      console.log("product created ok", response);
      toastr.success("Product Creation Success");
   };

   const onError = (err) => {
      console.log("register err", err);
      toastr.error("Product Creation failed");
   };

   return (
      <React.Fragment>
         <main role="main">
            <div className="container">
               <div className="row">
                  <h2>Product Form</h2>
               </div>
               <div className="row">
                  <div className="text-center">
                     <form className="col-lg-6 offset-lg-4">
                        <div className="center-content">
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="theName"
                                 className=" col-md-4  fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control- text-center"
                                 name="name"
                                 id="name"
                                 placeholder="Enter Name"
                                 value={userData.name}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="theManufacture"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Manufacture
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-lg  text-center"
                                 name="manufacturer"
                                 id="manufacturer"
                                 placeholder="Enter Manufacture"
                                 value={userData.manufacture}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="theDescription"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Description
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-lg  text-center"
                                 id="description"
                                 name="description"
                                 placeholder="Enter Description"
                                 value={userData.description}
                                 onChange={onFormFieldChange}
                              />
                              <div className="form-group ">
                                 <label
                                    htmlFor="exampleCost"
                                    className="fw-bold"
                                    style={{ fontWeight: "bold" }}
                                 >
                                    Cost
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control form-control-lg  text-center"
                                    id="cost"
                                    name="cost"
                                    placeholder="Cost Here"
                                    value={userData.cost}
                                    onChange={onFormFieldChange}
                                 />
                              </div>
                              <button
                                 type="submit"
                                 onClick={onClickSubmit}
                                 className="btn btn-primary mt-3 btn-lg"
                                 id="cmdSubmit"
                              >
                                 Submit
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <hr />
         </main>
      </React.Fragment>
   );
}

export default Products;
