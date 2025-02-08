import {useCallback, useEffect, useState} from "react";
import { IPostMutation} from "../../types";
import axiosApi from "../../axiosApi.ts";
import {useNavigate} from "react-router-dom";
import * as React from "react";
import DeleteItem from "../DeleteItem/DeleteItem.tsx";

interface IFormItem {
    isEdit?: boolean
    idPost?: string
    onSubmitActions: (post: IPostMutation) => void

}
const initialState = {
    title: '',
    description: '',
    data: new Date().toISOString(),
}

const FormItems: React.FC<IFormItem> = ({ onSubmitActions, idPost, isEdit}) => {
    const [form, setForm] = useState<IPostMutation>(initialState);
    const navigate = useNavigate();

    const fetchOnePost = useCallback(async () => {
        try {
            const response = await axiosApi<IPostMutation>(`posts/${idPost}.json`)

            setForm(response.data || initialState)

        } catch (e) {
            console.log(e)
        }

    }, [idPost, navigate])

    useEffect(() => {
        void fetchOnePost();

    }, [fetchOnePost]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitActions({...form});
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        setForm(prevState => ({...prevState, [name]: value}));
    };


    return (
        <form onSubmit={onSubmit}>
            <h4>{isEdit ? 'Edit' : 'Add new '} Post</h4>
            <hr/>
            <div className="form-group">
                <label htmlFor="name">title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    value={form.title}
                    onChange={inputChangeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    value={form.description}
                    onChange={inputChangeHandler}
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Add</button>
            <DeleteItem/>
        </form>
    );
};

export default FormItems;
