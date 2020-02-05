import gql from "graphql-tag";

const feedquery = gql`
  query FeedQuery {
    feed {
      links {
        id
        createdAt
        description
        url
      }
    }
  }
`;

export default feedquery;
