import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

  
    const handleSearch = async () => {
        try {
            const response = await axios.get('https://shop.cyberlearn.vn/api/Product');
            let products = response.data.content;

           
            products = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

      
            products = products.map(product => ({
                ...product,
                price: parseFloat(product.price) // Chuyển đổi price thành số
            }));

         
            products = _.orderBy(products, ['price'], [sortOrder]);

            setSearchResults(products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

   
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); 
        }
    };

    return (
        <div className="search container py-3 mt-4">
            <div className="form-group ms-5 mb-4">
                <label htmlFor="text" className="d-block">Search</label>
                <input
                    type="text"
                    placeholder="product name ..."
                    className="form-control py-1 border-0 rounded-1 bg-body-secondary ps-2 mt-2 w-25 d-inline"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown} // Thêm sự kiện onKeyDown để lắng nghe phím Enter
                />
                <button
                    className="rounded-pill btn py-1 px-4 text-white ms-4"
                    style={{ background: '#6200ee' }}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <h1 className="ps-4 mt-2">Search result</h1>
            <div className="form-group">
                <label htmlFor="select" className="d-block">Price</label>
                <select
                    name="select"
                    id="select"
                    className="form-select w-25 py-2 border-0 rounded-1 bg-body-secondary ps-2 mt-2"
                    onChange={handleSortOrderChange}
                >
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="row text-center">
                {searchResults.length > 0 ? (
                    searchResults.map(product => (
                        <div className="col-4 pe-0 mt-5" key={product.id}>
                            <i className="fa fa-heart"></i>
                            <div className="img py-2" style={{ background: '#f8f8f8' }}>
                                <img src={product.image} alt={product.name} width={250} />
                                <div className="text-start pb-2 ms-4">
                                    <h3>{product.name}</h3>
                                    <p className="d-inline">{product.shortDescription}</p>
                                </div>
                            </div>
                            <div className="price d-flex">
                                <button
                                    className="buy w-50 border-0 px-2 py-3"
                                    style={{ background: '#9DE167', fontWeight: 400 }}
                                >
                                    Buy now
                                </button>
                                <span
                                    className="w-50 pt-3"
                                    style={{ background: '#dedddc', fontWeight: 600 }}
                                >
                                    {product.price}$
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Search
