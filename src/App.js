import React, { useEffect, useState, useMemo } from 'react';
import './App.css';
import PostItem from './Components/PostItem/PostItem';
import Input from './Components/UI/Input/Input';
import Button from './Components/UI/Button/Button';
import PostFilter from './Components/PostFilter/PostFilter';

function App() {
    const [value, setValue] = useState('');

    const [posts, setPosts] = useState([
        {id: 1, title: 'яя', description: 'бб'},
        {id: 2, title: 'бб', description: 'аа'},
        {id: 3, title: 'фф', description: 'яя'},
    ]);

    const [postName, setPostName] = useState('');
    const [postBody, setPostBody] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title: postName,
            description: postBody
        };
        setPosts([...posts, newPost]);
        setPostName('');
        setPostBody('');
    };

    const deletePost = (item) => {
        setPosts(posts.filter((post) => post.id !== item.id));
    };

    const sortedPosts = useMemo(() => {
        console.log('Отработала');
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    useEffect(() => {
        (postName.length > 6 && postBody.length > 6) ? setbtnDisabled(false) : setbtnDisabled(true);
    }, [postName.length, postBody.length]);

    return (
      <div className={'App'}>
          <h1>{value}</h1>
          <Input type={'text'} ph={'Title web'} onChange={(e) => setValue(e.target.value)}/>
          <form>
              <Input type={'text'} ph={'Title post'} value={postName} onChange={(e) => setPostName(e.target.value)}/>
              <Input type={'text'} ph={'Description post'} value={postBody}
                     onChange={(e) => setPostBody(e.target.value)}/>
              <Button cb={addNewPost} title={'Создать пост'} disabled={btnDisabled}/>
          </form>
          <hr/>
          <PostFilter filter={filter} setFilter={setFilter} />
          {
              posts.length
                ?
                sortedAndSearchedPosts.length
                    ? sortedAndSearchedPosts.map((post, index) => {
                      return <PostItem post={post} count={index + 1} key={post.id} deletePost={deletePost}/>;
                  })
                    : <div style={{textAlign: 'center', margin: '20px'}}>Поиск не дал результатов</div>

                : <div style={{textAlign: 'center', margin: '20px'}}>Постов нет</div>
          }
      </div>
    );
}


export default App;
