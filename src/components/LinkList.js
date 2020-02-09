import React from "react";
import { useQuery } from "@apollo/react-hooks";

import FEED_QUERY from "../queries/feedquery";
import Link from "./Link";

const LinkList = () => {
  const { data, loading, error } = useQuery(FEED_QUERY);

  if (loading && !error) {
    return <div>Is Loading...</div>;
  }

  return (
    <>
      {data.feed.links.map(link => (
        <Link key={link.id} link={link} />
      ))}
    </>
  );
};

export default LinkList;
