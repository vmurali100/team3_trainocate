import React, { Component } from 'react'
import { connect } from 'react-redux';

class Products extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>description</th>
                    <th>category</th>
                    <th>rate</th>
                    <th>count</th>
                    <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product) =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.rating.rate}</td>
                            <td>{product.rating.count}</td>
                            <td><img src={product.image} style={{height: "250px"}} alt={product.title} /></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        products:state.products
    }
}

export default connect(mapStateToProps)(Products)
