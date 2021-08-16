import React, { Component, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class BookList extends Component {
//     render() { 
//         return (
//             <ThemeContext.Consumer>{(context) =>{
//                 const {isLightTheme, light, dark} = context
//                 const theme = isLightTheme? light: dark
//                 return ( 
//                     <div className='book-list' style={{background: theme.bg}}>
//                         <ul>
//                             <li style={{background: theme.ui}}>the way of kings</li>
//                             <li style={{background: theme.ui}}>the name of wind</li>
//                             <li style={{background: theme.ui}}>the final empire</li>
//                         </ul>
//                     </div>
//                 );
//                 }}
//             </ThemeContext.Consumer>
//         )

//     }
// }
 
// export default BookList;

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme? light: dark

    return (
        <div className='book-list' style={{background: theme.bg}}>
            <ul>
                {books.map(book => <li key={book.id} style={{background: theme.ui}}>{book.title}</li>)}
               
            </ul>
        </div>
    )
}

export default BookList;