import React from 'react';
import BookInfo from './BookInfo';

const BookList = function(props){
    
        const booklists= props
                        .booklists
                        .map((booklist, i) => <BookInfo 
                                                key={i}
                                                img={booklist.volumeInfo.imageLinks.thumbnail}
                                                title={booklist.volumeInfo.title}
                                                authors={booklist.volumeInfo.authors}
                                                publisher={booklist.volumeInfo.publisher}
                                                desc={booklist.volumeInfo.description}
                                                />)

        return (
            <div className="booklist">
                {booklists}
            </div>
        )
    }

export default BookList;