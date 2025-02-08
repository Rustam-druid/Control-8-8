import FormItems from "../../components/FormItems/FormItems.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { IQuoteForm} from "../../types";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../Ul/Spiner/Spinner.tsx";



const NewQuote = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmitAddNewQuote = async (quote: IQuoteForm) => {
       setLoading(true)
        try {
            await axiosApi.post('quotes.json', quote)
            navigate('/quotes/' + quote.category)
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            {loading ? <Spinner /> : <FormItems  onSubmitActions={onSubmitAddNewQuote} />}
        </>
    );
};

export default NewQuote;