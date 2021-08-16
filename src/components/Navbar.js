import React, { Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component{
//     static contextType = ThemeContext
//     render(){
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) =>{
//                     const {isAuthenticated, toggleAuth} = authContext
//                     const {isLightTheme, light, dark} = themeContext
//                     const theme = isLightTheme? light: dark
//                     return ( 
//                         <nav style={{background: theme.ui, color: theme.syntax}}>
//                             <h1>Context App</h1>
//                             <div>
//                                 {isAuthenticated? 'Loggedin': 'Logged out'}
//                                 <div>
//                                  <button onClick={toggleAuth}>Toggle Auth</button>
//                                 </div>
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     );
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>

//         )
//     }
// }

const Navbar = () =>{
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {isAuthenticated, toggleAuth} = useContext(AuthContext)
    const theme = isLightTheme? light: dark
    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div>
                {isAuthenticated? 'Loggedin': 'Logged out'}
                <div>
                    <button onClick={toggleAuth}>Toggle Auth</button>
                </div>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar