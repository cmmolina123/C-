import React, { useState } from "react";
import toastr from "toastr";
import userService from "../../services/userService";

function Login() {
   const [userData, setUserData] = useState({
      email: "",
      password: "",
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
      userService.postLogIn(userData).then(onSuccess).catch(onError);
   };
   const onSuccess = (response) => {
      console.log("login ok", response);
      toastr.success("Login Success");
   };

   const onError = (err) => {
      console.log("login err", err);
      toastr.error("Login failed");
   };
   return (
      <React.Fragment>
         <main role="main">
            <div className="container">
               <div className="row">
                  <h2>Login Here</h2>
               </div>

               <div className="row">
                  <div className="text center">
                     <form className="mb-3">
                        <div className="center-content">
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="exampleInputEmail1"
                                 className=" col-md-4  fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Email Address
                              </label>
                              <input
                                 type="email"
                                 className="form-control form-control-md text-center"
                                 id="emailLog"
                                 name="email"
                                 placeholder="Enter Email"
                                 value={userData.email}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="exampleInputPassword1"
                                 className=" fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control form-control-md text-center"
                                 id="passwordLog"
                                 name="password"
                                 placeholder="Enter Password"
                                 value={userData.password}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <button
                              type="submit"
                              className="btn btn-primary mt-2 btn-md"
                              onClick={onClickSubmit}
                           >
                              Submit
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

export default Login;
