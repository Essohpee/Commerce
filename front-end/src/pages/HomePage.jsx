import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
const HomePage = () => {
    return (
        <div>
            {
                <Row>
                    {
                        products.map(product => 
                            <Col sm={12}md={6} lg={4} xl={3}>

                            <Product product={product}/>
                            
                            </Col>
                            )
                    }
                </Row>
            }
        </div>
    )
}

export default HomePage
