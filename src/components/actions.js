const UPDATE = "UPDATE";

const UpdatePost = (post) => {
  return {
    type: UPDATE,
    post,
  };
};

export default UpdatePost;
