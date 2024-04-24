import React, {FC} from 'react';
import { IPost } from "../models/IPost";


const PostItem = ({post}) => {
    return (
        <div className="post">
          {post.id}. {post.title}
          <button>Delete</button>
        </div>
    );
};

export default PostItem;