import React, { useState, useEffect, useCallback } from "react";
import friendService from "../../services/friendService";
import FriendCard from "./FriendCard";
import { Link } from "react-router-dom";
import debug from "sabio-debug";


const Friends = () => {
   const _logger = debug.extend("Friends");
   _logger("Something Important Hereee..");
   const [pageData, setPageData] = useState({
      arrayOfFriends: [],
      friendComponents: [],
   });

   const [count, setCount] = useState(0); //rendering friends.

   const [isShown, setIsShown] = useState(false); //needed to toggle.

   const toggle = () => setIsShown((isShown) => !isShown);

   const onDeleteRequested = useCallback((myFriend, eObj) => {
      console.log(myFriend.id, { myFriend, eObj });
      // const idToBeDeleted = myFriend.id.value;
      const handler = getDeleteSuccessHandler(myFriend.id);

      friendService
         .deleteFriend(myFriend.id)
         .then(handler)
         .catch(onDeleteError);
   }, []);

   const getDeleteSuccessHandler = (idToBeDeleted) => {
      console.log("getDeleteSuccessHandler", idToBeDeleted);

      return () => {
         console.log("onDeleteSuccess", idToBeDeleted);

         setPageData((prevState) => {
            const pd = { ...prevState };
            pd.arrayOfFriends = [...pd.arrayOfFriends];

            const indxOf = pd.arrayOfFriends.findIndex((friend) => {
               let result = false;
               if (friend.id === idToBeDeleted) {
                  result = true;
               }
               return result;
            });

            if (indxOf >= 0) {
               pd.arrayOfFriends.splice(indxOf, 1);
               pd.friendComponents = pd.arrayOfFriends.map(mapFriend);
            }
            return pd;
         });
      };
   };

   // const onDeleteSuccess = (idToBeDeleted) => {
   //    console.log("onDeleteSuccess", idToBeDeleted);
   //    setPageData((prevState) => {
   //       const pd = { ...prevState };
   //       pd.arrayOfFriends = [...pd.arrayOfFriends];
   //       // pd.arrayOfFriends = arrayOfPeeps;
   //       // pd.friendComponents = arrayOfPeeps.map(mapFriend);

   //       const indxOf = pd.arrayOfFriends.findIndex((friend) => {
   //          let result = false;
   //          if (friend.id.value === idToBeDeleted) {
   //             result = true;
   //          }
   //          return result;
   //       });

   //       if (indxOf >= 0) {
   //          pd.arrayOfFriends.splice(indxOf, 1);
   //          pd.friendComponents = pd.arrayOfFriends.map(mapFriend);
   //       }
   //       return pd;
   //    });
   // };

   const mapFriend = (aFriend) => {
      // console.log("mapping", aFriend);
      return (
         <FriendCard
            friendcard={aFriend}
            key={aFriend.id}
            onFriendClicked={onDeleteRequested}
         />
      );
   };

   useEffect(() => {
      console.log("firing useEffect for get friend");
      friendService
         .getFriend(0, 8)
         .then(onGetFriendSuccess)
         .catch(onGetFriendError);
   }, []);

   const onGetFriendSuccess = (data) => {
      console.log(data);
      let arrayOfPeeps = data.item.pagedItems;
      console.log({ arrayOfPeeps });
      setPageData((prev) => ({
         ...prev,
         arrayOfFriends: data.item.pagedItems,
         friendComponents: data.item.pagedItems.map(mapFriend),
      }));
   };

   const onGetFriendError = (err) => {
      console.log(err);
   };

   const onDeleteError = (err) => {
      console.log("Deleting", err);
   };

   const onHeaderClicked = () => {
      setCount((prevState) => {
         return prevState + 1;
      });
   };
   return (
      <React.Fragment>
         <div className="container">
            <h2>Friends</h2>
            <div className=" col-md-3">
               <div className="row">
                  <button
                     style={{ margin: "8px" }}
                     type="submit"
                     className="btn btn-danger mt-3 btn-sm"
                     id="cmdSubmit"
                     onClick={toggle}
                  >
                     Toggle the Friends!!
                  </button>
                  <div className=" col-md-3">
                     <div className="row">
                        <Link
                           to="/addFriends/new"
                           type="button"
                           className="btn btn-primary mt-3 btn-sm"
                           style={{ margin: "8px" }}
                        >
                           Add Friends
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            <h3 onClick={onHeaderClicked}>Friends Rendering {count}</h3>
            <div className="row">
               <div>{isShown && pageData.arrayOfFriends.map(mapFriend)}</div>
               {/* <div>{isShown && pageData.friendComponents}</div> */}
            </div>
         </div>
         <hr />
      </React.Fragment>
   );
};

export default Friends;
