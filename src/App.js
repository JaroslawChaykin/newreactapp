import React, { useState } from 'react';
import './App.css';
import Button from './Components/UI/Button/Button';
import PostFilter from './Components/PostFilter/PostFilter';
import PostList from './Components/PostList/PostList';
import Modal from './Components/Modal/Modal';
import { usePosts } from './Hooks/usePosts';
import PostForm from './Components/PostForm/PostForm';
import PostService from './API/PostService';
import Loader from './Components/UI/Loader/Loader';
import { useFetching } from './Hooks/useFetching';

function App() {

    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});

    const [ fetchPosts, isPostsLoading, postError] = useFetching(async ()=> {
        const postsFrom = await PostService.getAll();
        setPosts([...posts, ...postsFrom]);
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const deletePost = (item) => {
        setPosts(posts.filter((post) => post.id !== item.id));
    };

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    return (
      <div className={'App'}>
          <Modal visible={modal} setVisible={setModal}>
              <h1>Создание поста</h1>
              <PostForm create={createPost}/>
          </Modal>
          <h1 className={'main-title'}>
              <Button cb={() => setModal(true)} title={'+'}/>
              <Button cb={fetchPosts} title={'Запросить посты'}/>
              <Button cb={() => {setPosts([])}} title={'Удалить посты'}/>
              Посты
          </h1>
          <PostFilter filter={filter} setFilter={setFilter}/>
          {
              postError &&
                <h1>Ошибка</h1>
          }
          {
              isPostsLoading
                ? <Loader />
                : <PostList sortedPosts={sortedAndSearchedPosts} deletePost={deletePost} posts={posts}/>
          }
      </div>
    );
}


export default App;
