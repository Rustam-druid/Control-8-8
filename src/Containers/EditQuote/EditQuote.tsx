import  {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import FormItems from "../../components/FormItems/FormItems.tsx";
import {IPostMutation} from "../../types";
import Spinner from "../../Ul/Spiner/Spinner.tsx";



const EditQuote = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {idPost} = useParams();

    const onSubmitAddNewGame = async (post: IPostMutation) => {
        try{
         await axiosApi.put(`posts/${idPost}.json`, post)

            navigate('/')
        }catch(e){
            console.log(e);
        }finally {
            setLoading(false);
        }
    }

    let form = <FormItems isEdit idPost={idPost} onSubmitActions={onSubmitAddNewGame}/>
    if (loading) form = <Spinner />
    return (
        <div>
            {form}
        </div>
    );
};

export default EditQuote;