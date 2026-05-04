// ItemCard.jsx
import React from 'react';

const ItemCard = React.memo(({ data, deleteButton }) => {
  console.log("ItemCard Rendered");
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <button
            className="delete-btn"
            onClick={() => deleteButton(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
});

export default ItemCard;