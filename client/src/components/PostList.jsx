import React from 'react';
import '../styles/PostList.css';

const PostList = ({ posts }) => {
    if (!posts.length) {
        return <h6> No Posts Yet </h6>
    }

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="card mb-3 post-card">
                        <h5 className="p-2 m-0">
                            {post.postAuthor} <br />
                            <span style={{ fontSize: '1rem' }}>
                                Post created on {post.createdAt}
                            </span>
                        </h5>
                        <div className="card-body bg-light p-2">
                            <p>{post.postText}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default PostList;