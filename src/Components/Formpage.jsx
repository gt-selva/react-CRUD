import React, { useState, useEffect } from "react";
import './Formpage.css'

const FormPage = ({ data, setData, editData, setEditData }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        tenthMark: "",
        twelfthMark: "",
    });

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        }
    }, [editData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editData) {
            setData(
                data.map((item) =>
                    item.id === editData.id ? { ...formData, id: item.id } : item
                )
            );
        } else {
            setData([...data, { ...formData, id: Date.now() }]);
        }
        setEditData(null);
        setFormData({
            name: "",
            email: "",
            age: "",
            tenthMark: "",
            twelfthMark: "",
        });
    };

    return (
        <div id="form">
            <h2>{editData ? "Edit Details:" : "Register:"}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                </label>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label>
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>
                    Age:
                </label>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label>
                    10th Mark:
                </label>
                <input
                    type="number"
                    name="tenthMark"
                    placeholder="10th Mark"
                    value={formData.tenthMark}
                    onChange={handleChange}
                    required
                />
                <label>
                    12th Mark:
                </label>
                <input
                    type="number"
                    name="twelfthMark"
                    placeholder="12th Mark"
                    value={formData.twelfthMark}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{editData ? "Update" : "Add"}</button>
            </form>
        </div>
    );
};

export default FormPage;
