// import './App.css';
// import { Navbar, Nav, NavDropdown, ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DateTime from './components/dateTime';
// import Clock from './components/clock';
// import Greet from './components/greet';
// import Calculator from './components/calculator';
// import Card from './components/card';
// import data from './cardDetails';
// import Form from './components/form';
// import EffectMemo from './effectMemo';
// import Counter from './components/counter';
// import CompC from './components/compC';
// import React from 'react';
// import MyComponent from './classComponent';
// import Login from './login'

// export const userContext = React.createContext();

// const marks = [85,95,78,99,74];

// function App() {
//   return (
//     <div className="App">

//       <ProgressBar marks= {marks}/>

//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">React Practice</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <MyComponent/>
//       <Greet/>
//       <Clock/>
//       <DateTime/>
//       <Calculator/>
//       <Form/>
//       <EffectMemo/>
//       <userContext.Provider value = {'Sampad'}>
//       <CompC/>
//       </userContext.Provider>
//       <Counter/>
//       {data.map((item)=>{
//         return(
//           <Card heading1 = {item.heading1} heading2 ={item.heading2} img1={item.img1} img2 ={item.img2}/>
//         )
//       })}

//       <Login/>
//     </div>

//   );
// }

// export default App;

// // import React, { useState, useEffect } from 'react';

// // function App() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetch('https://jsonplaceholder.typicode.com/posts')
// //       .then(response => response.json())
// //       .then(data => setData(data));
// //   }, []);

// //   return (
// //     <div>
// //       {data.map(item => (
// //         <div key={item.id}>
// //           <h2>{item.title}</h2>
// //           <p>{item.body}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;

// //Create Table 
// // import React, { useState } from 'react';

// // function AddItemForm({ addItem }) {
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     addItem({ title, description });
// //     setTitle('');
// //     setDescription('');
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         Title:
// //         <input
// //           type="text"
// //           value={title}
// //           onChange={(event) => setTitle(event.target.value)}
// //         />
// //       </label>
// //       <br />
// //       <label>
// //         Description:
// //         <textarea
// //           value={description}
// //           onChange={(event) => setDescription(event.target.value)}
// //         />
// //       </label>
// //       <br />
// //       <button type="submit">Add Item</button>
// //     </form>
// //   );
// // }

// // function Table({ items }) {
// //   return (
// //     <table>
// //       <thead>
// //         <tr>
// //           <th>Title</th>
// //           <th>Description</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {items.map((item, index) => (
// //           <tr key={index}>
// //             <td>{item.title}</td>
// //             <td>{item.description}</td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // }

// // function App() {
// //   const [items, setItems] = useState([]);

// //   const addItem = (item) => {
// //     setItems([...items, item]);
// //   };

// //   return (
// //     <div>
// //       <AddItemForm addItem={addItem} />
// //       <Table items={items} />
// //     </div>
// //   );
// // }

// // export default App;

// //Shopping Cart
// // import React, { useState } from 'react';
// // import Cart from './cart';
// // import Product from './components/product';

// // function App() {
// //   const [cartItems, setCartItems] = useState([]);

// //   const handleAddToCart = (product) => {
// //     setCartItems([...cartItems, product]);
// //   };

// //   return (
// //     <div>
// //       <h1>My Online Store</h1>
// //       <Product
// //         product={{
// //           id: 1,
// //           name: 'Product 1',
// //           price: 10.99,
// //           imageUrl: 'https://via.placeholder.com/150',
// //         }}
// //         onAddToCart={handleAddToCart}
// //       />
// //       <Product
// //         product={{
// //           id: 2,
// //           name: 'Product 2',
// //           price: 19.99,
// //           imageUrl: 'https://via.placeholder.com/150',
// //         }}
// //         onAddToCart={handleAddToCart}
// //       />
// //       <Cart cartItems={cartItems} />
// //     </div>
// //   );
// // }

// // export default App;




// // 6. Display the countdown timer

// // import React from 'react';
// // import Countdown from './Countdown';

// // function App() {
// //   return (
// //     <div>
// //       <Countdown countdownTime={60} />
// //     </div>
// //   );
// // }

// // export default App;
