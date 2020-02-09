import gql from "graphql-tag";

const FEED_QUERY = gql`
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

export default FEED_QUERY;
