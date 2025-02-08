import * as React from "react";
import {IQuote} from "../../types";
import {NavLink} from "react-router-dom";

interface ItemsList {
    quote: IQuote;
    onDelete: React.MouseEventHandler;
}

const ItemsList: React.FC<ItemsList> = ({quote, onDelete}) => {
    return (
        <>
            <div key={quote.id} className="row p-3 mb-3 border border-black border-3">
                <div className='col-9'>
                    <h4>{quote.text}</h4>
                </div>
                <div className='col row'>
                    <div className="edit col p-0">
                        <NavLink to={`/quotes/${quote.id}/edit`}>
                            <img className='col' style={{height: 50, width: 50}}
                                 src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="$"/></NavLink>

                    </div>
                    <button onClick={onDelete} className='p-0 col bg-transparent border-0'>
                        <img style={{height: 30, width: 30}}
                             src="https://cdn-icons-png.flaticon.com/128/657/657059.png" alt="$"/></button>

                </div>
            </div>

        </>
    );
};

export default ItemsList;