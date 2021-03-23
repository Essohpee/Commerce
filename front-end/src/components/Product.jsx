import React from 'react'
import { Card } from 'antd';
import {   } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { Meta } = Card;
const Product = ({product}) => {
    
    return (
        <Link to={`products/${product._id}`}>
            <Card hoverable
    style={{ width: 250 }}
    cover={
      <img
        alt={product.name}
        src={product.image} className="py-3 p-3 " style={{background: "#efefef"}}
      />
    }
  >
      
    <Meta
      
      title={product.name}
      
    />
    <h4 style={{ fontWeight :"bold", color: '#cc2a41'}}>{product.price} $</h4>
  </Card>
        </Link>
    )
}

export default Product
