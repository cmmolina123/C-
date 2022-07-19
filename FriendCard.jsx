import React from "react";
import PropTypes from "prop-types"; 

function FriendCard(props) {
   // console.log("FriendCard", props.FriendCard);
   const aFriend = props.friendcard;
   const onLocalFriendClicked = (e) => {
      e.preventDefault();
      props.onFriendClicked(aFriend, e);
      // onLocalFriendClicked
   };

   return (
      <div className="col-md-3">
         <div className="card mt-4">
            <div className="card">
               <img
                  style={{
                     textAlign: "center",
                     height: "175px",
                     width: "220px",
                  }}
                  src={aFriend.primaryImage.imageUrl}
                  className="card-img-top"
                  alt="Friend"
                  onClick={onLocalFriendClicked}
               />
               <div
                  className="card-body"
                  style={{
                     textAlign: "center",
                     height: "175px",
                     width: "220px",
                  }}
               >
                  <h5 className="card-title">{aFriend.title}</h5>
                  <p className="card-text">{aFriend.headline}</p>

                  <button
                     style={{ height: "45px", width: "70px" }}
                     type="submit"
                     className="btn btn-warning mt-3 btn-sm"
                     id="cmdSubmit"
                     onClick={onLocalFriendClicked}
                  >
                     Delete Friend
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

FriendCard.propTypes = {
   aFriend: PropTypes.shape({
      primaryImage: PropTypes.string.isRequired,
      imagesUrl: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      headline:PropTypes.string.isRequired

   })

}

export default React.memo(FriendCard); //same input and output with react.memo()
