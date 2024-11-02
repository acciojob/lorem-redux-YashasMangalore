import React from "react";

const Poster = ({ title, body }) => (
  <li>
    <div className="title">
      <strong>Title</strong> :{title}
    </div>
    <br />
    <div className="body">
      <strong>Body</strong> :{body}
    </div>
  </li>
);

export default Poster;
