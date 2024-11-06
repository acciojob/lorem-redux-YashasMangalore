import React from "react";
import Poster from "./posting.js";
import Intro from "./Intro.js";

class APP extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          let newjs = result;
          console.log(newjs);
          this.props.Posting([...result]);
          //this.props.Posting(newjs);
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Intro />
        <ul>
          {post.map((data, i) => (
            <Poster key={i} title={data.title} body={data.body} />
          ))}
        </ul>
      </div>
    );
  }
}

export default APP;
