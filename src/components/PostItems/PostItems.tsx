import {IPost} from "../../types";
import * as React from "react";
import {NavLink} from "react-router-dom";


interface IPostItems {
    post: IPost;

}

const PostItems: React.FC<IPostItems> = ({post,}) => { // Принимаем post как пропс
    return (
        <div>
            <h6 className='data'>{post.data}</h6>
            <h4>{post.title}</h4>
            <NavLink to={`/posts/${post.id}/edit`} className='btn border border-black border-3'>Read more</NavLink>
            {/*<button onClick={onDelete} className=' ms-2 btn border border-black border-3' type='button'>del</button>*/}
        </div>
    );
};

export default PostItems;
