import React from "react";
import "../styles/Profile.css";
import { QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import PostProfileList from "../components/PostProfileList";

export default function Profile() {
  const user = Auth.getProfile();
  const profileId = user.data._id;

  const { data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { _id: profileId },
  });

  const profile = data?.profile || {};
  const posts = data?.profile.posts || [];

  return (
    <div className="profile-container">
      <div>
        <div className="profile-title">
          <h2>Profile</h2>
        </div>
        <form className="profile-form">
          <div>
            <h5> User: {profile.name} </h5>
            <br></br>
            <h5>Email: {profile.email}</h5>
          </div>
        </form>
      </div>

      <div>
        <div className="profile-title">
          <h2> Previous Posts </h2>
        </div>
        <div className="row profile-previous-posts">
          <div className="col-sm-4">
            <PostProfileList
              posts={posts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
