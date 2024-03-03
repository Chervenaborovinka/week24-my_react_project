import { useState } from 'react';
import words from '../../src/data/words';
import "./WordList.module.css";

const WordList = (data) => {
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState(data);

    const handleEdit = () => {
        setEditing(true);
    };

    // const handleSave = () => {
    //     setEditing(false);
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleCancel = () => {
        setEditing(false);
        setEditedData(data);
    };

    // const handleDelete = (id) => {
    //     setEditedData({ ...editing, [id]: false });
    // };


    return (
        <table className="wordList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Оригинал</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>Тема</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id}>
                        {editing ? (
                            <>
                                <td><input type="text" name="name" value={editedData.name} onChange={handleChange} /></td>
                                <td><input type="text" name="value" value={editedData.value} onChange={handleChange} /></td>
                                <td>
                                    <button onClick={handleCancel}>Отмена</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{data.name}</td>
                                <td>{data.value}</td>
                                <td>
                                    <button onClick={handleEdit}>Редактировать</button>
                                </td>
                            </>
                        )
                        }
                    </tr>
                ))
                };
            </tbody>
        </table >
    );
};


export default WordList;