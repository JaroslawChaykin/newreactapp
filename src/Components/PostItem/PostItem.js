import React from 'react';
import './PostItem.css'
import Counter from '../Counter/Counter';

const PostItem = (props) => {
    return (
      <div className={'post'}>
          <div className="post__content">
              <strong>{props.count}. {props.post.title}</strong>
              <div>
                  {props.post.description}
              </div>
              <Counter />
          </div>
          <div className="post__btns">
              <button onClick={() => props.deletePost(props.post)}>Удалить</button>
          </div>
      </div>
    );
};

export default PostItem;