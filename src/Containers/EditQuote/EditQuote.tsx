import  {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import FormItems from "../../components/FormItems/FormItems.tsx";
import { IQuoteForm} from "../../types";
import Spinner from "../../Ul/Spiner/Spinner.tsx";



const EditQuote = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {categoryId} = useParams();

    const onSubmitAddNewGame = async (quote: IQuoteForm) => {
        try{
         await axiosApi.put(`quotes/${categoryId}.json`, quote)

            navigate('/')
        }catch(e){
            console.log(e);
        }finally {
            setLoading(false);
        }
    }


    let form = <FormItems  idQuote={categoryId} onSubmitActions={onSubmitAddNewGame}/>
    if (loading) form = <Spinner />
    return (
        <div>
            {form}
        </div>
    );
};

export default EditQuote;