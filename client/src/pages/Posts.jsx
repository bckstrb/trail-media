import React, { useState } from "react";
import "../styles/Posts.css";
import trailSearch from "../utils/API";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import PostList from '../components/PostList';
import { Navbar, Nav,Button, Container, Modal, Tab } from 'react-bootstrap';








export default function Posts(apiData) { //get the data that the user chose from the home page from the api call and pass it as variable
    const [showModal, setShowModal] = useState(false);

    //probably need the trailId like we did with profileId and hope the trailId is the same each time to add posts to that certain trail?
    // maybe it'll be like comments instead of posts?? 
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log(apiData);

  return (
    <div className="trail-containter">
      <div className="trail-details">
        <img src="#" className="img-background"></img>
        {/* apiData.thumbnail for background img src*/}
        {/* need to do inline styling?? */}
        <div className="trail-info">
          <h2 className="header"> apiData.name </h2> 
          <div className="trail-location">
            <p className="header"> apiData.city </p>
          </div>
        </div>
      </div>

      <div className="trail-description">
        <h5 className="description"> Description </h5>
        <p> apiData.description </p>
      </div>
      <div className="trail-direction">
        <h5 className="direction"> Directions </h5>
        <p> apiData.directions </p>
      </div>

            <div className='trail-posts'>
                <h5> Posts </h5>
                <PostList 
                    posts={posts}
                />
                 <Button variant="success" onClick={() => setShowModal(true)}>Create A Post</Button>
            </div>

            <Modal
        size='md'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                    <form>
                        {/* <input type="text" value={formState.posts}placeholder="Post"></input> */}
                        <input className="post-field" type="text" placeholder="Post"></input>
                        <br></br>
                        <input className="author-field" type="text" placeholder="Post Author"></input>
                        <br></br>
                        <Button variant="success"type="submit">Create Post</Button>
                    </form>
                  
                </Nav.Item>
                <Nav.Item>
                  
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
               
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
              
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

        </div>
    )

}
