/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React from 'react';
import SearchPage from './SearchPage/SearchPage';
import BookList from './BookPage/BookList';



class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            booklists :[],
            searching : '',
            printType: '',
            error: null
        }
    }

    handleSearch=(e) =>{
        this.setState({
            searching : e.target.value
        })
    }

    handlePrintType = (e) =>{
        console.log(e.target.value);
        this.setState({
            printType : e.target.value
        })
    }


    handleSubmit =(e) =>{
        console.log('submit');
        e.preventDefault();

        const api_key = 'AIzaSyDf8MH6uTm2nLYoNSxN2TI1tjzq7VQlZwM'
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searching}&key=${api_key}`;
       if(this.state.printType === ""){
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searching}&key=${api_key}`
        }else{url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searching}&printType=${this.state.printType}&key=${api_key}`;
    };
    
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw new Error('Something went wrong, try again later')
            }
            return res.json();
        }).then(data => {
            console.log(data);
            this.setState({
                booklists : data.items
            })
        })
        .catch(e =>{this.setState({
            error: e.message
        });
        });

    };

  

    render(){
        const error = this.state.error
    ?<div className="error">{this.state.error}</div>
    : "";
        return(
            <main>
                <SearchPage handleSubmit={this.handleSubmit}
                            handleSearch={this.handleSearch}
                            handlePrintType={this.handlePrintType}/>
                {error}
                <BookList booklists={this.state.booklists}/>
            </main>
        )
    }
}

export default Main;