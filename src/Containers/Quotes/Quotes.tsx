import {categories} from "../../constants.ts";
import {NavLink, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import {IQuote, IQuoteAPI} from "../../types";
import Spinner from "../../Ul/Spiner/Spinner.tsx";

const Categories = categories

const Quotes = () => {
    const [quotes, setQuotes] = useState<IQuote[]>([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams();

    const fetchData = useCallback(async () => {
        try {
            const response = await axiosApi<IQuoteAPI>(
                !categoryId ? 'quotes.json' : `/quotes.json?orderBy="category"&equalTo="${categoryId}"`,)

            if (response.data === null) {
                setQuotes([]);
            } else {
                const ordersObject = response.data;
                const ordersKey = Object.keys(response.data);
                const orderArrOfObj = ordersKey.map(key => {
                    return {
                        id: key,
                        ...ordersObject[key],
                    };
                });
                setQuotes(orderArrOfObj);
                console.log(orderArrOfObj);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, [categoryId])

    useEffect(() => {
        void fetchData()
    }, [categoryId, fetchData]);

    const findTitle = (categoryId:string) => {
        const CLickTitle = Categories.filter((c) => {
            return c.id === categoryId;
        });

        return CLickTitle[0].title
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <ul>
                            <li><NavLink to={`/`}>All</NavLink></li>
                            {Categories.map((category) => (
                                <li key={category.id}><NavLink to={`/quotes/${category.id}`}>{category.title}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-8">
                        <h3>{!categoryId ? 'All' : findTitle(categoryId)}</h3>
                        <div>
                            {loading ? <Spinner/> :
                                <>
                                    {quotes.length === 0 ? <p>No quotes yet</p> :
                                        <>
                                            {quotes.map((quote) => (
                                                <div key={quote.id} className="p-3 border border-black border-3">
                                                    <h4>{quote.author}</h4>
                                                    <h4>{quote.text}</h4>
                                                </div>
                                            ))}
                                        </>
                                    }
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quotes;