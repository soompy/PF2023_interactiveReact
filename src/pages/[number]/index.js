import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_DATA = gql`
  query {
    // GraphQL 쿼리 내용
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // 데이터 사용
  return (
    <div>
      {/* 데이터 표시 */}
    </div>
  );
};

export default MyComponent;
