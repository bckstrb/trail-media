import React, { useState } from 'react';
import '../styles/Posts.css';
import trailSearch from "../utils/API";
import { QUERY_POSTS } from "../utils/queries";
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import PostList from '../components/PostList';




export default function Posts(apiData) { //get the data that the user chose from the home page from the api call and pass it as variable

    //probably need the trailId like we did with profileId and hope the trailId is the same each time to add posts to that certain trail?
    // maybe it'll be like comments instead of posts?? 
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];


    return (
        <div className='trail-containter'>
            <div className='trail-details'>
                <img src="#" alt="trail" className='img-background'></img>
                {/* apiData.thumbnail for background img src*/}
                {/* need to do inline styling?? */}
                <div className='trail-info'>
                    <h2> apiData.name </h2> {/*{apiData.name} */}
                    <div className='trail-location'>
                        <p> apiData.city </p>
                    </div>
                </div>
            </div>

            <div className='trail-description'>
                <h5 className='description'> Description </h5>
                <p> apiData.description </p>
            </div>
            <div className='trail-direction'>
                <h5 className='direction'> Directions </h5>
                <p> apiData.directions </p>
            </div>

            <div className='trail-posts'>
                <h5> Posts </h5>
                <PostList 
                    posts={posts}
                />
            </div>


        </div>
    )

}

