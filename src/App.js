import React from 'react'
import './App.css';
import { useCreatePostMutation, useDeletePostMutation, useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useUpdatePostMutation } from './service/post';

function App() {
  const responseInfo = useGetAllPostQuery()
  const responseById = useGetPostByIdQuery(5)
  const responseByLimit = useGetPostByLimitQuery(15)
  const [deletePost,postDelete] = useDeletePostMutation()
  const [createPost,createResponse] = useCreatePostMutation()
  const [updatePost,updateResponse] = useUpdatePostMutation()
  console.log("data :-> ",updateResponse)

  const newPost={
        title: "This is New Title",
        body: "This is New Body",
        userId: 1,
      }

      const updatePostData={
        id:1,
        title: "This is Update Post Title",
        body: "This is Update Post Body",
        userId: 1,
      }



  if(responseInfo.isLoading)return <div>Loading...</div>
  if(responseInfo.isError)return <h2>An error occurred</h2>

  return (
    <div className="App">
      <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
      {/* GET ALL Data */}
      {/* {responseInfo.data.map((post,i)=>{
        return(
          <React.Fragment key={i}>
            <div>
              <h2>{post.id+". "+post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </div>
          </React.Fragment>
        )
      })} */}


       {/* Get Single Data */}

            {/* <div>
              <h2>{responseById.data.id+". "+responseById.data.title}</h2>
              <p>{responseById.data.body}</p>
              <hr />
            </div> */}


             {/* GET Limited Data */}
      {/* {responseByLimit.data.map((post,i)=>{
        return(
          <React.Fragment key={i}>
            <div>
              <h2>{post.id+". "+post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </div>
          </React.Fragment>
        )
      })} */}


      {/* Delete Data */}

      <button onClick={()=>{deletePost(2)}}>Delete Post</button>
      <button onClick={()=>{createPost(newPost)}}>Create Post</button>
      <button onClick={()=>{updatePost(updatePostData)}}>update Post</button>
         

    </div>
  );
}

export default App;
