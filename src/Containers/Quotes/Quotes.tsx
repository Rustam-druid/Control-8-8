import PostItems from "../../components/PostItems/PostItems.tsx";
import { IPost, IPostAPI } from "../../types";
import  { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { useNavigate } from "react-router-dom";


const Quotes = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        try {
            const response = await axiosApi<IPostAPI>("/posts.json");
            if (response.data === null) {
                setPosts([]);
            } else {
                const ordersObject = response.data;
                const ordersKey = Object.keys(response.data);
                const orderArrOfObj = ordersKey.map(key => {
                    return {
                        id: key,
                        ...ordersObject[key],
                    };
                });
                setPosts(orderArrOfObj);
                console.log(orderArrOfObj);
            }
        } catch (e) {
            console.error(e);
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const deletePost = async (IdDelete: string) => {
        if (IdDelete) {
            try {
                await axiosApi.delete<IPostAPI>(`posts/${IdDelete}.json`);
                void fetchData();
                navigate('/');
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            {posts.map(post => (
                <div className='mb-3 item-post p-3 border border-black border-3' key={post.id}>
                    <PostItems post={post} />
                </div>
            ))}
        </>
    );
};

export default Quotes;