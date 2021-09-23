import React from 'react';
import './Main.css'
import {useState,useEffect} from 'react';
import Products from '../Products/Products';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Main = () => {
const [products,setProducts] = useState([]) 
const [itm,setItm] = useState([]);
const [search,setSearche] = useState([]);


useEffect(() =>{
    fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => {setProducts(data)
        setSearche(data)
    })
},[])

useEffect(() =>{
const storeData = getStoredCart();
const storeCart = [];

if(products.length){
for(const element in storeData){
    const matchedData = products.find(product => product.key === element);
    if(matchedData){
        const quantity = storeData[element];
        matchedData.quantity=quantity;
        storeCart.push(matchedData);
    }
  
}

setItm(storeCart)
}


},[products])

function clickHandler(item){
    const newData = [...itm,item];
    setItm(newData);
  addToDb(item.key)
}

let totalQuantity =0;
let container =0;
for(const ele of itm){
    ele.quantity= ele.quantity? ele.quantity: 1;
container=container+ Number(ele.price) * ele.quantity; 
totalQuantity=totalQuantity+ ele.quantity;
}


function handleChange(event){
    const userText = event.target.value;
    const foundData = products.filter(match=> match.name.toLowerCase().includes(userText.toLowerCase()));
    setSearche(foundData);
}

// console.log(itm)

    return (
        <>
          <input onChange={handleChange} type="text" />
        <div className="main-container">
          
           <div className="product-section">
                {search.map(item => <Products key={item.key} handler={clickHandler} items={item}/> )}
           </div>
           <div className="card-section">
                   <div className="card" style={{width: '25rem'}}>
             
                            <div className="card-body">
                              <h5 className="card-title">quantity: {totalQuantity}</h5>
                              <p className="card-text">price : {container.toFixed(2)}</p>
                             
                             </div>
                    </div>
           </div>
        </div>
        </>
    );
};

export default Main;