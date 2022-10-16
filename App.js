import logo from './logo.svg';
import './App.css';
import Navbar from './Redesignapp/Navbar';
import './Redesignapp/component.css';
import Home from './Redesignapp/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Redesignapp/Cart';
function App() {
   const [quant,setQuant]=useState("0");
   const[cartArr,setCartarr]=useState([]);
  let arrProduct=[
    {
       "id":"1",
       "image":"https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg",
       "productname":"Tomato",
       "price":"Rs 10",
        "prodquantity":"0",
         "calprice":"0",
       "quantity":"200g",
       "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
    },
    {
      "id":"2",
      "image":"https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
      "productname":"Potato",
      "price":"Rs 20",
       "quantity":"1kg",
       "prodquantity":"0",
       "calprice":"0",
      "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
   },
   {
      "id":"3",
      "image":"http://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-usa-vegetables-red-onion-fresh-food-in-dubai-and-abu-dhabi-24624338062_1200x1200.jpg?v=1536787851",
      "productname":"Onion",
      "price":"Rs 20",
       "quantity":"1kg",
       "prodquantity":"0",
       "calprice":"0",
      "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
   }
   ,{
      "id":"4",
      "image":"https://www.astrogle.com/images/2015/01/brinjal.jpg",
      "productname":"Brinjal",
      "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
      "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
   },
   {
      "id":"5",
      "image":"https://www.maaz.lk/wp-content/uploads/2021/05/Lady-FInger.jpg",
      "productname":"Ladie Fingers",
      "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
      "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
   },
   {
    "id":"6",
    "image":"https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg",
    "productname":"Tomato",
    "price":"Rs 10",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
    "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
 },
 {
   "id":"7",
   "image":"https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
   "productname":"Potato",
   "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
},
{
   "id":"8",
   "image":"http://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-usa-vegetables-red-onion-fresh-food-in-dubai-and-abu-dhabi-24624338062_1200x1200.jpg?v=1536787851",
   "productname":"Onion",
   "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
}
,{
   "id":"9",
   "image":"https://www.astrogle.com/images/2015/01/brinjal.jpg",
   "productname":"Brinjal",
   "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
},
{
   "id":"10",
   "image":"https://www.maaz.lk/wp-content/uploads/2021/05/Lady-FInger.jpg",
   "productname":"Ladie Fingers",
   "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
   "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
},
{
  "id":"11",
  "image":"https://m.media-amazon.com/images/I/71DYmqoq-VL._SL1024_.jpg",
  "productname":"Tomato",
  "price":"Rs 10",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
  "discription":"The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as the tomato plant. The species originated in western South America, Mexico, and Central America.",
},
{
 "id":"12",
 "image":"https://m.media-amazon.com/images/I/61yXL70-RaL._SX679_.jpg",
 "productname":"Potato",
 "price":"Rs 20",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
 "discription":"The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable and a fruit native to the Americas. The plant is a perennial in the nightshade family Solanaceae.",
},
{
 "id":"13",
 "image":"http://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-usa-vegetables-red-onion-fresh-food-in-dubai-and-abu-dhabi-24624338062_1200x1200.jpg?v=1536787851",
 "productname":"Onion",
 "price":"Rs 20",
  "quantity":"1kg",
  "prodquantity":"0",
  "calprice":"0",
 "discription":"An onion, also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. The shallot is a botanical variety of the onion which was classified as a separate species until 2010.",
}
,{
 "id":"14",
 "image":"https://www.astrogle.com/images/2015/01/brinjal.jpg",
 "productname":"Brinjal",
 "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
 "discription":"Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition",
},
{
 "id":"15",
 "image":"https://www.maaz.lk/wp-content/uploads/2021/05/Lady-FInger.jpg",
 "productname":"Ladie Fingers",
 "price":"Rs 20",
    "quantity":"1kg",
    "prodquantity":"0",
    "calprice":"0",
 "discription":"Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is a flowering plant in the mallow family. It has edible green seed pods.",
}
  ]

  const increment=(e)=>
  {
   let indx=e.target.getAttribute("qunt");
   let index=e.target.getAttribute("indx");
   arrProduct[index].prodquantity=parseInt(arrProduct[index].prodquantity)+parseInt(1);
   console.log(index,arrProduct[index].prodquantity);
  }
  const addCart=(e)=>
 {
   let index=e.target.getAttribute("ind");
   console.log(index);
   let temp=-1;
   for(let i=0;i<cartArr.length;i++)
   {
     if(cartArr[i].id===arrProduct[index].id)
     {
       temp=i;
     }
   }
   if(temp>=0)
   {
     cartArr[temp].prodquantity++;
     cartArr[temp].calprice=cartArr[temp].prodquantity*cartArr[temp].price;
     setCartarr(cartArr);
   }
   else{
   cartArr.push(arrProduct[index-1]);
   cartArr[index-1].calprice=cartArr[index-1].prodquantity*cartArr[index-1].price;
   setCartarr([...cartArr]);
   console.log(cartArr);
  }
 }
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Home arr={arrProduct} increment={increment} addcart={addCart} ></Home>}/>
    <Route path='/cart' element={<Cart arrCart={cartArr} ></Cart>}></Route>
    </Routes>
   
    </>
  );
}

export default App;
 