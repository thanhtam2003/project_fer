// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './App.css';
// import { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';

// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState('');
//   const [isVisible, setIsVisible] = useState(false);
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const [color, setColor] = useState('');
//   const handleAdd = () => {
//     if (input.trim() !== '') {
//       setTodos([...todos, input]);
//       setInput('');
//     }
//   }
//   const handleDelete = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   }
//   return (
//     <>
//       <Container>
//         <Row className='bg-dark text-white mt-3 p-3'>
//           <Col className='text-center'>
//             <button onClick={() => setCount(count + 1)}> Increment</button>
//             <p>Count: {count}</p>
//             <input value={value} onChange={(e) => setValue(e.target.value)} />
//             <p>Input Text: {value}</p>
//             <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>
//             {isVisible && <p>"aiss shiba"</p>}
//           </Col>
//         </Row>

//         <Row className='bg-dark text-white mt-3 p-3'>
//           <Col className='text-center'>
//             <input className='m-3 p-2' value={input} placeholder='Enter todo' onChange={(e) => setInput(e.target.value)} />
//             <button className='btn btn-danger' onClick={()=>handleAdd()}>Add</button>

//           </Col>

//           <Col className='text-center'>
//             <h2>Todo List</h2>
//             <ul>
//               {todos.map((todo, index) => (
//                 <li key={index}>
//                   {todo}
//                   <button onClick={()=>handleDelete(index)} className='btn btn-danger'>Delete</button>
//                   </li>
//               ))}
//             </ul>
//           </Col>
//         </Row>

//         <Row className='bg-dark text-white mt-3 p-3'>
//           <Col className='text-center'>
//             <select onChange={(e) => setColor(e.target.value)}>
//               <option value="">Select Color</option>
//               <option value="red">Red</option>
//               <option value="green">Green</option>
//               <option value='blue'>Blue</option>
//             </select>
//             <div style={{margin: '0 auto' , width: '100px', height: '100px', background: color}}></div>
//           </Col>   
//         </Row>   

//       </Container>
//     </>
//   );
// }

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ThemeContext, ThemeProvider } from './ex14/ThemeContext';
import { CartProvider } from './cartex14/CartContext';
import DishesList from './cartex14/DishesList';
import Cart from './cartex14/Cart';

function App() {
    const ThemeButton = () => {
        const { theme, toggleTheme } = useContext(ThemeContext);
        return (
            <>
                <button onClick={toggleTheme} style={{ background: theme.background, color: theme.foreground }}>Toggle theme</button>
            </>
        )
    }
    return (
        <>
            <Container>
                <Row className='bg-dark text-white mt-3 p-3'>
                    <Col className='text-center'>
                        <ThemeProvider>
                            <ThemeButton />
                        </ThemeProvider>

                        <CartProvider>
                            <DishesList />
                            <Cart />
                        </CartProvider>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App


