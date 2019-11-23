import React, { useState, useEffect } from 'react';

const Products = (state) => {
    const [products, setProducts] = useState(null)
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)


    const productsApiCaller = async () => {
        try {
            const res = await fetch("api/products");
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setProducts(response)
            console.log(products)
        }
        catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        productsApiCaller()
    }, [])

    return (

        <div className="container-filter">
            <h2>Filters</h2>
            <div className="filter-container">
                <div className="container-drop">
                    <form>
                        <h3>Reset Filter</h3>
                        <input type="button" value="reset"></input>
                    </form>
                </div>
                <div className="container-drop">
                    <h3 className="tag">Filter by Galaxy</h3>
                    <form className="dropdown-filter" name="type-drop">
                        <select >
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Galaxy ---</option>
                            <option value="character">Galaxy #1</option>
                            <option value="animal">Galaxy #2</option>
                            <option value="other">Galaxy #3</option>
                        </select>
                    </form>
                </div>

                <div className="container-drop">
                    <h3 className="tag">Filter by Time</h3>
                    <form className="dropdown-filter" name="price-drop">
                        <select>
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Time ---</option>
                            <option value="1">Time #1</option>
                            <option value="2">Time #2</option>
                            <option value="3">Time #3</option>
                        </select>
                    </form>
                </div>

                <div className="container-drop">
                    <h3 className="tag">Filter by Price</h3>
                    <form className="dropdown-filter" name="price-drop">
                        <select>
                            <option defaultValue={true} disabled="disabled" value="any">--- Select A Price ---</option>
                            <option value="1">Price #1</option>
                            <option value="2">Price #2</option>
                            <option value="3">Price #3</option>
                        </select>
                    </form>
                </div>
            </div>
            <React.Fragment>
            <div className="album py-5">
            <div className="container">
                <div className="row">
                {products && products.map((item) => {
                    return (
                        
                                    <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-deck">
                                                <div className="card" id="foo">
                                                    <div className="card-body">
                                                        <img className="img-thumbnail" src={`/img/${item.img}`} alt={item.product_name} />
                                                        <h6 className="card-title">{item.product_name}</h6>
                                                        <p className="card-text">{item.product_desc}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="price">${item.base_price}</small>
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary float-right"
                                                        >
                                                            Buy
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                            </div>
                        
                    )
                })}
                )
                </div>
                </div>
                </div>
    </React.Fragment>
        </div>
    )
}


export default Products;