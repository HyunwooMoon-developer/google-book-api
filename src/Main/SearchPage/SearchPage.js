import React from 'react';
import './searchpage.css';

const SearchPage = function(props){
        return (
            <div className="searchpage">
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="search">Search : </label>
                    <input type="text" onChange={props.handleSearch} placeholder="add book name" required/>
                    <button type="submit" className="submit-button">Search</button>
                    <br />
                    <label htmlFor="print-type">Print Type : </label>
                    <select name="print-type" onChange={props.handlePrintType} className="select">
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type : </label>
                    <select name="book-type" className="select">
                        <option value="no-filter">No Filter</option>
                    </select>
                </form>
            </div>
        )
}

export default SearchPage;