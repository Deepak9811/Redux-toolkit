import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => {
        console.log("id :-> ", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByLimit: builder.query({
      query: (num) => {
        return {
          url: `posts?_limit=${num}`,
        };
      },
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("delete :-> ", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("create data :-> ", newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("update Post: ", updatePostData);
        const {id,...data}=updatePostData
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
