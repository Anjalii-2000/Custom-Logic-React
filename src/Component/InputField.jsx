import React, { useCallback, useState } from 'react'
import './InputField.css';
import ItemCard from './ItemCard';

const InputField = () => {
    const [form, setForm] = useState({
        title: "",
        description: ""
    })
    const [data, setData] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleClick = () => {
        let newObject = { ...form, id: Date.now() };
        console.log("FORM", form);
        setData((prev) => [...prev, newObject])
        setForm({
            title: "",
            description: ""
        })
    }

    const deleteButton = useCallback((id) => {
        setData((prev) => prev.filter((item) => item.id !== id));

    }, []);

    return (
        <div className="app-container">

            <label htmlFor='title'>Title</label>
            <input type='text'
                name='title'
                placeholder='Enter a title'
                value={form.title}
                onChange={handleChange}
            />

            <label htmlFor='description'>Description</label>
            <input type='text'
                placeholder='Enter description'
                name='description'
                value={form.description}
                onChange={handleChange}
            />

            <div>
                <button type='button' onClick={handleClick}>
                    Add
                </button>
            </div>

            <div>
                <ItemCard data={data} deleteButton={deleteButton} />
            </div>

        </div>
    )
}

export default InputField