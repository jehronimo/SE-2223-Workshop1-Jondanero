import React from 'react'
import Card from '@mui/material/Card'
import './ProductCard.css'

interface ProductCardProps {
    name : string
    originalPrice : number
    markedDownPrice? : number
    image : string
}

export default function ProductCard({ name, originalPrice, markedDownPrice, image } : ProductCardProps) {
    
    const markedDownFormat = <div style={{display : 'flex', justifyContent: 'center'}}>
                        <p style={{textDecoration: 'line-through', opacity: 0.5, marginRight: 10}}> ₱{originalPrice} </p>
                        <p> ₱{markedDownPrice} </p>
                        </div>
    return (
        <Card variant="outlined"  className="product-card" >
       
            <div id='prod-pic-div'>
                <img src={image} alt="" width={200} height={200}/>
            </div>
            <div id='prod-name-div'>
                {name}
            </div>
            <div id='prod-price-div' >
                {markedDownPrice ? markedDownFormat 
                                : <div><p> ₱{originalPrice} </p></div>
                }
            </div>
            <div id='check-sale-btn'>
                <button>Click here to check Sale</button>
            </div>
       
        </Card>
    )
}

