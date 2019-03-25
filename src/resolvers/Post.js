const Post = {
  author(parent, args, { db }, info){
    return db.users.find(user => {
      return user.id === parent.author
    });
  },

  comment(parent, args, { db }, info){
    return db.comments.filter(comment => {
      return parent.id === comment.post
    })
  },

};

export default Post;
