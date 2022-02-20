import React, { useEffect, useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});
    const [btnDisabled, setbtnDisabled] = useState(true);

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    };

    useEffect(() => {
        (post.title.length > 6 && post.body.length > 6) ? setbtnDisabled(false) : setbtnDisabled(true);
    }, [post.title.length, post.body.length]);

    return (
      <form>
          <Input type={'text'} ph={'Title post'} value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>
          <Input type={'text'} ph={'Description post'} value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}/>
          <Button cb={addNewPost} title={'Создать пост'} disabled={btnDisabled}/>
      </form>
    );
};

export default PostForm;