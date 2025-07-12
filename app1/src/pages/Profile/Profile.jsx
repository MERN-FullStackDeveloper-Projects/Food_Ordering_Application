import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/users";
import { toast } from "react-toastify";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [profile, setProfile] = useState(null);
  const loadProfile = async () => {
    const result = await getProfile();
    if (result["status"] == "success") {
      // console.log(result)
      setProfile(result["data"]);
      setFirstName(result["data"]["firstName"]);
      setLastName(result["data"]["lastName"]);
    } else {
      toast.error(result["error"]);
    }
  };

  useEffect(() => {
    //load the user profile
    loadProfile();
    // console.log(`profile component got loaded`)
    return () => {
      console.log(`profile components unloaded`);
    };
  }, []);

  const onUpdate = async () => {
    if (firstName.length == 0) {
      toast.warn("please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("please the the last name");
    } else {
      const result = await updateProfile(firstName, lastName);
      if (result["status"] === "success") {
      toast.success("Successfully updated profile");
    } else {
      toast.error(result["error"]);
    }
    }
  };

  return (
    <div>
      <h2 className="page-header">Profile</h2>
      {profile && (
        <div>
          <div className="row">
            <div className="mb-3">
              <label htmlFor="">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                // value={profile['firstName']}
                value={firstName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
                // value={profile['lastName']}
                value={lastName}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="">Email</label>
              <input
                readOnly
                disabled
                type="email"
                className="form-control"
                value={profile["email"]}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <button onClick={onUpdate} className="btn btn-success">
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
