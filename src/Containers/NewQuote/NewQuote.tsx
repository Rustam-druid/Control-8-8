import FormItems from "../../components/FormItems/FormItems.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {IPostMutation} from "../../types";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";


const NewQuote = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmitAddNewPost = async (post: IPostMutation) => {
        try {
            await axiosApi.post('posts.json', post)
            navigate('/')
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }


    let form = <FormItems  onSubmitActions={onSubmitAddNewPost} />
    if (loading) form = <Spinner/>
    return (
        <div>
            {form}
        </div>
    );
};

export default NewQuote;