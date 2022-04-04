import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../Hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';

const PostId = () => {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    }, []);
    return (
      <div className={'container'}>
          {
              isLoading
                ? <Loader/>
                :
                <div>
                    <h4>Пост {post?.id}</h4>
                    <h3>{post?.title}</h3>
                    <p>{post?.body}</p>
                </div>
          }
          <h2>Комментарии</h2>
          <div>
              {
                  isComLoading
                    ? <Loader/>
                    : comments.map((comment) => {
                        return <div key={comment.id}>
                            <h4>{comment.email}</h4>
                            <p>{comment.body}</p>
                            <hr/>
                        </div>
                    })
              }
          </div>
      </div>
    );
};

export default PostId;