// import React from 'react';
// import Photo from './Photo';
// import Comments from './Comments';
//
// const Single = React.createClass({
//
//   render() {
//     const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
//
//     return (
//       <div className="single-photo">
//         <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
//         <Comments {...this.props} postId={i} />
//       </div>
//     );
//   }
// });
//
// export default Single;


import React from 'react';
import Photo from './Photo';
// import comments
import Comments from './Comments';
const Single = React.createClass({
        render() {
            const {postId} = this.props.params;
            // index of the post
            const i = this.props.posts.findIndex((post)=> post.code === postId);
            // get us to post
            const post = this.props.posts[i];
            const postComments = this.props.comments[postId] || [];
            return (
                <div className="single-photo">
                    <Photo i={i} post={post} {...this.props}/>
                    <Comments postComments = {postComments} {...this.props}/>
                </div>
            )
        }
    }
)

export default Single;