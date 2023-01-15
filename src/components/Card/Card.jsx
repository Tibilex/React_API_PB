import './Card.css';
import CardBuy from './Extensions'
import React, {useEffect, useState} from 'react';

function Card () {
    //const [ccy, setCcy] = useState('ccy');
    //const [base_ccy, setBase_ccy] = useState('base_ccy');
    //const [buy, setBuy] = useState('buy');
    //const [sale, setSale] = useState('sale');
    const [data, setData] = useState([]);
    
    

    useEffect(() => {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //setCcy(data.ccy);
            //setBase_ccy(data.base_ccy);
            //setBuy(data.buy);
            //setSale(data.sale);
            setData(data);
        })
        .catch((err) =>{
            console.log(err.massage);
        });
    }, []);

    

    return (
        <div className='container'>
            {data.map((post) =>{
                return(
                    <div className="currency__card" key={post.id}>
                        <div className='card__front front'>
                            <div>Ин.Валюта - <span>{post.ccy}</span></div>
                            <div>Валюта - <span>{post.base_ccy}</span></div>                      
                            <div>Продажа - <span>{post.sale}</span></div>
                            <div>Покупка - <span>{post.buy}</span></div>
                        </div>
                    </div>                  
                );
            })}
            
        </div>
    );
};

export default Card;