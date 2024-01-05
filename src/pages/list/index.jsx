import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
      createdAt
    }
  }
`;

export default function List() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const posts = data.posts;

  return (
    <ul className="list-wrapper">
      {posts.map((post) => (
        <li key={String(post.id)} className="list-item">
          <Link to={`/${post.id}`}>
            <img src="https://source.unsplash.com/random" alt="" />
          </Link>

          <div className="list-cont">
            <h4 className="titles">
              <Link to={`/${post.id}`}>{post.title}</Link>
            </h4>
            <p className="lead line-6x2">
              <Link to={`/${post.id}`}>{post.content}</Link>
            </p>
            <span className="publication">
              <em>{post.createdAt}</em>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
