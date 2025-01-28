import React from "react";

const TablePage = ({ data, setData, setEditData }) => {
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const handleEdit = (item) => {
        setEditData(item);
    };

    return (
        <div>
            <h2>Data Table</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>10th Mark</th>
                        <th>12th Mark</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.tenthMark}</td>
                            <td>{item.twelfthMark}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablePage;
