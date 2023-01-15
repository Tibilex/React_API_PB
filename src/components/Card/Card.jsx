import './Card.css';
import ReactCardFlip from 'react-card-flip'
import React, {useEffect, useState} from 'react';

function Card () {
    //const [ccy, setCcy] = useState('ccy');
    //const [base_ccy, setBase_ccy] = useState('base_ccy');
    //const [buy, setBuy] = useState('buy');
    //const [sale, setSale] = useState('sale');
    const [data, setData] = useState([]);
    const [isFlipped, setFlipped] = useState(false);
    
    const handleClick = () => {
        setFlipped(!isFlipped);
    };

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
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        <div onClick={handleClick} className='currency__card'>
                            <div>Ин.Валюта - <span>{post.ccy}</span></div>
                            <div>Валюта - <span>{post.base_ccy}</span></div>                      
                            <div>Продажа - <span>{post.sale}</span></div>
                        </div>
                        <div onClick={handleClick} className='currency__card'>
                            <div>Ин.Валюта - <span>{post.ccy}</span></div>
                            <div>Валюта - <span>{post.base_ccy}</span></div>                      
                            <div>Покупка - <span>{post.buy}</span></div>
                        </div>
                    </ReactCardFlip>     
                );
            })}
            
        </div>
    );
};

export default Card;