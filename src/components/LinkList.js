import React from "react";
import { graphql } from "react-apollo";

import feedquery from "../queries/feedquery";
import Link from "./Link";

const LinkList = ({ data: { loading, error, feed } }) => {
  return (
    <>
      {!loading && !error ? (
        <>
          {feed.links.map(link => (
            <Link key={link.id} link={link} />
          ))}
        </>
      ) : (
        <div>Is Loading...</div>
      )}
    </>
  );
};

export default graphql(feedquery)(LinkList);
