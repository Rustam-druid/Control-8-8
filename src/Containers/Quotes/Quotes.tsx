import {categories} from "../../constants.ts";
import {NavLink} from "react-router-dom";

const Categories = categories

const Quotes = () => {


    return (
        <>
           <div className="container">
               <div className="row justify-content-between">
                   <div className="col-5">
                       <ul>
                           {Categories.map((category) => (
                               <li><NavLink to={``}</li>
                           ))}
                       </ul>
                   </div>
                   <div className="col-5"></div>
               </div>
           </div>
        </>
    );
};

export default Quotes;