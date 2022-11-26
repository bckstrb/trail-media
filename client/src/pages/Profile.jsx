import React, { useState } from "react";
import "../styles/Profile.css";
import { QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
// import Link from 'react-router-dom';

export default function Profile() {
  const user = Auth.getProfile();
  const profileId = user.data._id;

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { _id: profileId },
  });

  const profile = data?.profile || {};

  // const postList = data?.posts || [];

  // const [count, setCount] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <div className="container">
      <div>
        <div className="title">
          <h2>Profile</h2>
        </div>
        <form>
          <div>
            <h5> User: {profile.name} </h5>
            <br></br>
            <h5>Email: {profile.email}</h5>
            <br></br>
            <h5>Number of posts: {profile.posts} </h5>
          </div>
        </form>
      </div>

      <div>
        <div className="title">
          <h2> Previous Posts </h2>
        </div>

        <div className="row posts">
          <div className="col-sm-4">
            <div className="post">
              <div>
                <h5 className="card-title">Trail Name</h5>
                <p className="card-text">User Post about the trail </p>
                {/* {postList.map((matchup) => { From Mern MiniProj
                  return (
                    <li key={matchup._id}>
                      <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                        {matchup.tech1} vs. {matchup.tech2}
                      </Link>
                    </li>
                  );
                })} */}
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="post">
              <div>
                <h5 className="card-title">Trail Name</h5>
                <p className="card-text">User Post about the trail </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="post">
              <div>
                <h5 className="card-title">Trail Name</h5>
                <p className="card-text">User Post about the trail </p>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="post">
              <div>
                <h5 className="card-title">Trail Name</h5>
                <p className="card-text">User Post about the trail </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
