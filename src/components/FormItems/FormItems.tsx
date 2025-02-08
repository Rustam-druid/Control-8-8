import { useState} from "react";
import { IQuoteForm} from "../../types";
import * as React from "react";

interface IFormItem {
    onSubmitActions: (quote: IQuoteForm) => void

}
const initialState = {
    author: '',
    text: '',
    category: '',
}

const FormItems: React.FC<IFormItem> = ({ onSubmitActions, }) => {
    const [form, setForm] = useState<IQuoteForm>(initialState);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(form.author.trim().length > 0 && form.text.trim().length > 0 && form.category.trim().length > 0  ){
            onSubmitActions({...form});
        }else {
            alert('Поля должны быть заполнены')
        }
       
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {value, name} = e.target;
        setForm(prevState => ({...prevState, [name]: value}));
    };


    return (
        <form onSubmit={onSubmit}>
            <h4> ADD</h4>
            <hr/>
            
            <div className="mb-3">
                <label htmlFor="category">Category
                    <select className='form-select' name="category" onChange={inputChangeHandler} value={form.category}>
                        <option value='-' selected disabled> Select the category</option>
                        <option value="about-beauty">About beauty</option>
                        <option value="about-happiness-and-love">About happiness and love</option>
                        <option value="star-wars">Star Wars</option>
                        <option value="motivational">Motivational</option>
                        <option value="humour">Humour</option>

                    </select>
                </label>
            </div>
            
            <div className="form-group">
                <label htmlFor="name">Author</label>
                <input
                    type="text"
                    id="title"
                    name="author"
                    className="form-control"
                    value={form.author}
                    onChange={inputChangeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="text"
                    className="form-control"
                    value={form.text}
                    onChange={inputChangeHandler}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add</button>
        </form>
    );
};

export default FormItems;
