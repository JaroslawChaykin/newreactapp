import React, { useEffect, useState } from 'react';
import { useFetching } from '../Hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import { usePosts } from '../Hooks/usePosts';
import Modal from '../Components/Modal/Modal';
import PostForm from '../Components/PostForm/PostForm';
import Button from '../Components/UI/Button/Button';
import PostFilter from '../Components/PostFilter/PostFilter';
import Pagination from '../Components/UI/Pagination/Pagination';
import Loader from '../Components/UI/Loader/Loader';
import PostList from '../Components/PostList/PostList';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(()=> {
        fetchPosts()
    }, [page])

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const changePage = (page) => {
        setPage(page)
    }

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
              Посты
          </h1>
          <PostFilter filter={filter} setFilter={setFilter}/>
          <Pagination page={page} changePage={changePage} totalPages={totalPages} />
          {
              postError &&
              <h1>Ошибка</h1>
          }
          {
              isPostsLoading
                ? <Loader/>
                : <PostList sortedPosts={sortedAndSearchedPosts} deletePost={deletePost} posts={posts}/>
          }
      </div>
    );
};

export default Posts;