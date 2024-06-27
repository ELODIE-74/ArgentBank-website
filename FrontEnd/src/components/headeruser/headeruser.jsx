import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../actions/authActions";
import EditUserInfo from "../../components/EditUserInfo/EditUserInfo";

function Header() {
  const [showEditUserInfo, setShowEditUserInfo] = useState(false);
  const { userProfile, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchUserProfile(accessToken));
    }
  }, [dispatch, accessToken]);

  const toggleEditUserInfo = () => {
    setShowEditUserInfo(!showEditUserInfo);
  };

  return (
    <div className="header">
      {userProfile ? (
        <>
          <h1>
            Welcome back
            <br />
            {userProfile.userName}
          </h1>
          <div className="header-actions">
            <button className="edit-button" onClick={toggleEditUserInfo}>
              {showEditUserInfo ? "Close" : "EditName"}
            </button>
          </div>
          {showEditUserInfo && <EditUserInfo />}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Header;
