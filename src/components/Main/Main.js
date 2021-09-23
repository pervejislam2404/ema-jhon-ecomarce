import React from 'react';
import './Main.css'
import {useState,useEffect} from 'react';
import Products from '../Products/Products';


const Main = () => {
const [products,setProducts] = useState([]) 
const [itm,setItm] = useState([]);


useEffect(() =>{
    fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])
function clickHandler(item){
    const newData = [...itm,item];
    setItm(newData);
  
}
let container =0;
for(const ele of itm){
container=container+ Number(ele.price)
}
    return (
        <div className="main-container">
           <div className="product-section">
                {products.map(item => <Products key={item.key} handler={clickHandler} items={item}/> )}
           </div>
           <div className="card-section">
                   <div className="card" style={{width: '25rem'}}>
             
                            <div className="card-body">
                              <h5 className="card-title">quantity: {itm.length}</h5>
                              <p className="card-text">price : {container.toFixed(2)}</p>
                             
                             </div>
                    </div>
           </div>
        </div>
    );
};

export default Main;