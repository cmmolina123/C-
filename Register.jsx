import React, { useState } from "react";
import userService from "../../services/userService";
import toastr from "toastr";

function Register() {
   const [userData, setUserData] = useState({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      avatarUrl: "",
      tenantId: "U037SDAE0GG",
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
      userService.postRegister(userData).then(onSuccess).catch(onError);
   };
   const onSuccess = (response) => {
      console.log("register ok", response);
      toastr.success("Registration Success");
   };

   const onError = (err) => {
      console.log("register err", err);
      toastr.error("Registration failed");
   };
   return (
      <React.Fragment>
         <main role="main">
            <div className="container">
               <div className="row">
                  <h2>The Register Form</h2>
               </div>

               <div className="row">
                  <div className="text-center">
                     <form className="mb-3">
                        <div className="center-content">
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="theFirstName"
                                 className=" col-md-4  fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 First Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md text-center"
                                 name="firstName"
                                 id="theFirstName"
                                 placeholder="Enter First Name"
                                 value={userData.firstName}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="theLastName"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Last Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 name="lastName"
                                 id="theLastName"
                                 placeholder="Enter Last Name"
                                 value={userData.lastName}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="inputEmail"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Email Address
                              </label>
                              <input
                                 type="email"
                                 className="form-control form-control-md  text-center"
                                 id="inputEmail"
                                 name="email"
                                 placeholder="Enter Email"
                                 value={userData.email}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="inputPassword"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control form-control-md  text-center"
                                 id="inputPassword"
                                 name="password"
                                 placeholder="Enter Password"
                                 value={userData.password}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="confirm"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Confirm Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control form-control-md  text-center"
                                 id="confirm"
                                 name="passwordConfirm"
                                 placeholder="Confirm Password"
                                 value={userData.passwordConfirm}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="exampleAvatar"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Profile URL
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md text-center"
                                 id="avatar"
                                 name="avatarUrl"
                                 placeholder="Enter Profile URL"
                                 value={userData.avatarUrl}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group ">
                              <label
                                 htmlFor="exampleTenant"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Tenant ID
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 id="Tenant"
                                 name="theTenant"
                                 placeholder="Tenant Id Here"
                                 value={userData.tenantId}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <button
                              type="submit"
                              onClick={onClickSubmit}
                              className="btn btn-primary mt-3 btn-md"
                              id="cmdSubmit"
                           >
                              Register Now
                           </button>
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

export default Register;
