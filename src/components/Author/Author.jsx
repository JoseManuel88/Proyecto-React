import axios from "axios";
import React, { useEffect, useState } from "react";

const Author = ({id}) => {
  const [author, setAuthor] = useState("");
  useEffect(() => {
    axios.get("https://proyecto-final-react-seven.vercel.app/users/" + id).then((res) => {
      setAuthor(res.data);
    });
  });

  return <p className="comment--author">{author}</p>;
};

export default Author;
