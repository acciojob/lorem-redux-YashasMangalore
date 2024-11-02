import React from "react";
import Poster from "./posting.js";
import Intro from "./Intro.js";

class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true, error: null });
    this.props
      .fetchPosts() // Assuming fetchPosts is connected via mapDispatchToProps
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        this.setState({ loading: false, error: "Failed to load posts." });
      });
  }

  render() {
    const { post } = this.props;
    const { loading, error } = this.state;

    return (
      <div>
        <Intro />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && (
          <ul>
            {post.map((data, i) => (
              <Poster key={i} title={data.title} body={data.body} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default APP;
