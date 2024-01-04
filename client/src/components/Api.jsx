import React, { useState, useEffect } from 'react';

const Api = () => {
    const [items, setItems] = useState([]);

    const api = '';

    useEffect(() => {
        // Fetch data from the API
        fetch(`${api}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched items
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>List of Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Api;
