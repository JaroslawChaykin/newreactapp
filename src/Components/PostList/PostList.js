import React from 'react';
import classes from './PostList.module.css'
import PostItem from '../PostItem/PostItem';
import Warning from '../UI/Warning/Warning';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({sortedPosts, deletePost, posts}) => {

    if (!posts.length) {
        return <Warning className={'primary'} text={'Постов нет'}/>
    } else if (!sortedPosts.length) {
        return <Warning className={'warning'} text={'Поиск не дал результатов'}/>
    }
    return (
      <div>
          <TransitionGroup className={'post-list'}>
              {sortedPosts.map((post, index) =>
                  <CSSTransition
                    key={post.id}
                    timeout={150}
                    classNames="post"
                  >
                      <PostItem post={post} count={index + 1} deletePost={deletePost}/>
                  </CSSTransition>
              )
              }
          </TransitionGroup>
      </div>
    );
};

export default PostList;