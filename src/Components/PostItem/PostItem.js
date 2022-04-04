import React from 'react';
import './PostItem.css'
import { useNavigate } from 'react-router-dom';

const PostItem = ({post, deletePost}) => {

    const navigate = useNavigate()

    return (
      <div className={'post-item'}>
          <div className="post__content">
              <strong>{post.id}. {post.title}</strong>
              <div>
                  {post.body}
              </div>
          </div>
          <div className="post__btns">
              <button onClick={() => deletePost(post)}>+</button>
              <button className={'toPage'} onClick={() => navigate(`/posts/${post.id}`)}>▷</button>
          </div>
      </div>
    );
};

export default PostItem;