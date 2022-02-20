import React, { useState } from 'react';
import './App.css';
import Button from './Components/UI/Button/Button';
import PostFilter from './Components/PostFilter/PostFilter';
import PostList from './Components/PostList/PostList';
import Modal from './Components/Modal/Modal';
import { usePosts } from './Hooks/usePosts';
import PostForm from './Components/PostForm/PostForm';
import axios from 'axios';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'яя', body: 'бб'},
        {id: 2, title: 'бб', body: 'аа'},
        {id: 3, title: 'фф', body: 'яя'},
    ]);

    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const deletePost = (item) => {
        setPosts(posts.filter((post) => post.id !== item.id));
    };

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }


    return (
      <div className={'App'}>
          <Modal visible={modal} setVisible={setModal}>
              <h1>Создание поста</h1>
              <PostForm create={createPost} />
          </Modal>
          <h1 className={'main-title'}>
              <Button cb={() => setModal(true)} title={'+'} />
              <Button cb={fetchPosts} title={'Запросить посты'} />
              Posts
          </h1>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList sortedPosts={sortedAndSearchedPosts} deletePost={deletePost} posts={posts} />
      </div>
    );
}


export default App;
