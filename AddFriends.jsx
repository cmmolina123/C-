import React, { useState } from "react";
import friendService from "../../services/friendService";
import toastr from "toastr";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AddFriends() {
   const [userData, setUserData] = useState({
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
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
      friendService.postAddFriend(userData).then(onSuccess).catch(onError);
   };
   const onSuccess = (response) => {
      console.log("add friend ok", response);
      toastr.success("Added Friend Success");
   };

   const onError = (err) => {
      console.log("add friend err", err);
      toastr.error("Add Friend Failed");
   };
   return (
      <React.Fragment>
         <main role="main">
            <div className="container">
               <div className="row">
                  <h2>Add/Edit Friend</h2>
                  <Link
                     to="/friends"
                     type="button"
                     className="btn btn-primary"
                     style={{ margin: "8px" }}
                  >
                     Friends
                  </Link>
               </div>

               <div className="row">
                  <div className="text-center">
                     <form className="mb-3">
                        <div className="center-content">
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="theTitle"
                                 className=" col-md-4  fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Title
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md text-center"
                                 name="title"
                                 id="title"
                                 placeholder="Enter Title"
                                 value={userData.title}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="theBio"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Bio
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 name="bio"
                                 id="bio"
                                 placeholder="Enter Bio"
                                 value={userData.bio}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="theSummary"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Enter Summary
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 name="summary"
                                 id="summary"
                                 placeholder="Enter Summary"
                                 value={userData.summary}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="mb-1">
                              <label
                                 htmlFor="theHeadline"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Headline
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 name="headline"
                                 id="headline"
                                 placeholder="Enter Headline"
                                 value={userData.headline}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group ">
                              <label
                                 htmlFor="exampleSlug"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Slug
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 id="slug"
                                 name="slug"
                                 placeholder="Enter Slug"
                                 value={userData.slug}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group ">
                              <label
                                 htmlFor="exampleStatusId"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Status Id
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md  text-center"
                                 id="statusId"
                                 name="statusId"
                                 placeholder="Enter Status Id"
                                 value={userData.statusId}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <div className="form-group mb-2">
                              <label
                                 htmlFor="examplePrimaryImage"
                                 className="fw-bold"
                                 style={{ fontWeight: "bold" }}
                              >
                                 Primary Image
                              </label>
                              <input
                                 type="text"
                                 className="form-control form-control-md text-center"
                                 id="primaryImage"
                                 name="primaryImage"
                                 placeholder="Enter Primary Image Url"
                                 value={userData.primaryImage}
                                 onChange={onFormFieldChange}
                              />
                           </div>
                           <button
                              type="submit"
                              onClick={onClickSubmit}
                              className="btn btn-primary mt-3 btn-md"
                              id="cmdSubmit"
                           >
                              Add Friend
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <hr />
         </main>
         <hr />
      </React.Fragment>
   );
}

AddFriends.propTypes = {
   userData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      statusId: PropTypes.string.isRequired,
      primaryImage: PropTypes.string.isRequired,
   }),
};

export default AddFriends;
