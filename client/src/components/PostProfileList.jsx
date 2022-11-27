import React from 'react';
import '../styles/PostProfileList.css';

const PostProfileList = ({ posts }) => {
    if (!posts.length) {
        return <h6> No Posts Yet </h6>
    }

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="row profile-posts-div">
                        <div className="col-sm-4">
                            <div className="profile-post">
                                <div>
                                    <h5 className="card-title">Trail Name</h5>
                                    <br />
                                    <h6 className="card-text">{post.postText} <br />
                                        <span>
                                            created at {post.createdAt}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default PostProfileList;