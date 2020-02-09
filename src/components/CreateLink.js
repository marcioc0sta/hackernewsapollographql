import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import POST_MUTATION from "../mutations/postMutation";

const CreateLink = () => {
  const InitialState = {
    description: "",
    url: ""
  };

  const [state, setState] = useState(InitialState);
  const { description, url } = state;
  const [PostMutation, { loading, error }] = useMutation(POST_MUTATION);

  const fieldChange = (value, fieldName) => {
    setState(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  if (loading && !error) {
    return <div>Is Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          defaultValue=""
          onChange={e => fieldChange(e.target.value, "description")}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          defaultValue=""
          onChange={e => fieldChange(e.target.value, "url")}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button onClick={() => PostMutation({ variables: { description, url } })}>
        Submit
      </button>
    </div>
  );
};

export default CreateLink;
