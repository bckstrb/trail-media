
import React, { useState, useContext } from "react";
import "../styles/Posts.css";
import trailSearch from "../utils/API";
import { QUERY_POSTS } from "../utils/queries";
import { ADD_POST } from "../utils/mutations";
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import PostList from '../components/PostList';
import { Navbar, Nav, Button, Container, Modal, Tab } from 'react-bootstrap';
import { PostContext } from "../utils/postContext";


export default function Posts(apiData) { //get the data that the user chose from the home page from the api call and pass it as variable
    // console.log(apiData);

    const {currentPost} = useContext(PostContext);
    const [showModal, setShowModal] = useState(false);
    const [formState, setFormState] = useState({
        trailId: apiData.id,
        postText: '',
        postAuthor: ''
    })
    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });

                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }
        },
    });

    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addPost({
                variables: { ...formState },
            });
            setFormState({
                thoughtText: '',
                thoughtAuthor: '',
            });

        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    console.log(currentPost);

  return (
    <div className="trail-containter">
      <div className="trail-details">
        <img src={currentPost.image} className="img-background"></img>
        {/* apiData.thumbnail for background img src*/}
        {/* need to do inline styling?? */}
        <div className="trail-info">
          <h2 className="header"> {currentPost.name} </h2> 
          <div className="trail-location">
            <p className="header"> {currentPost.city} </p>
          </div>
        </div>
      </div>

      <div className="trail-description">
        <h5 className="description"> Description </h5>
        <div> {currentPost.description} </div>
      </div>
      <div className="trail-direction">
        <h5 className="direction"> Directions </h5>
        <div dangerouslySetInnerHTML={{__html: currentPost.directions}} /> 
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
                <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills'>
                                <Nav.Item>
                                    <form className="create-post-form"onSubmit={handleFormSubmit}>
                                        <input
                                            className='create-post-input'
                                            type="text"
                                            name="postText"
                                            placeholder="Post"
                                            value={formState.postText}
                                            onChange={handleChange}
                                            required={true}
                                        >
                                        </input>
                                        <input
                                            className='create-post-input'
                                            type="text"
                                            name="postAuthor"
                                            placeholder="Post Author"
                                            value={formState.postAuthor}
                                            onChange={handleChange}
                                            required={true}
                                        >
                                        </input>
                                        <Button className="create-post-button"variant="success" type="submit">Create Post</Button>
                                    </form>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                    </Modal.Header>
                </Tab.Container>
            </Modal>
        </div>
    )

}
