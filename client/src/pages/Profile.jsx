import React, { useState } from "react";
import "../styles/Profile.css";
import { QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

export default function Profile() {
  const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
    variables: { profileId: profileId },
  });

  const profile = data?.profile || {};

  // const [firstName, setFirstName] = useState('');
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
            <label for="first-name" id="first-name-label">
              <h5>{profile.name}</h5>
            </label>
            <br></br>
            {/* <input value={firstName} type="text" name="first-name"></input>
            <br></br>
            <label for="last-name" id="last-name-label">
              <h5>User's Last Name</h5>
            </label>
            <br></br>
            <input value={lastName} type="text" name="last-name"></input>
            <br></br>
            <label for="email" id="email-label">
              <h5>User's Email</h5>
            </label>
            <br></br>
            <input value={email} type="text" name="email"></input> */}
          </div>
        </form>

        <div className="title">
          <h2> Previous Posts </h2>
        </div>

        <div className="row posts">
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
