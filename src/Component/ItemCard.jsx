import React from 'react'

const ItemCard = ({ data, deleteButton }) => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className="item-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <button className="delete-btn"
                        onClick={() => deleteButton(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ItemCard