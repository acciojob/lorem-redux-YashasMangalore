import { connect } from "react-redux";
import APP from "./component.js";
import UpdatePost from "./actions.js";

const mapStateToProps = (state) => {
  return {
    post: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Posting: (e) => dispatch(UpdatePost(e)),
  };
};

const PostValue = connect(mapStateToProps, mapDispatchToProps)(APP);

export default PostValue;
