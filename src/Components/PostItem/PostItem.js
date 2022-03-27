import React from 'react';
import './PostItem.css'
import Counter from '../Counter/Counter';

const PostItem = (props) => {
    return (
      <div className={'post-item'}>
          <div className="post__content">
              <strong>{props.post.id}. {props.post.title}</strong>
              <div>
                  {props.post.body}
              </div>
              <Counter />
          </div>
          <div className="post__btns">
              <button onClick={() => props.deletePost(props.post)}>+</button>
          </div>
      </div>
    );
};

export default PostItem;