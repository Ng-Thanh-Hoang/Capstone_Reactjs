import React from 'react'

const Search = () => {
    return (
        <div className="search container py-3 mt-4">
            <div className="form-group ms-5 mb-4">
                <label htmlFor="text" className='d-block'>Search</label>
                <input type="text" placeholder='product name ...' className='form-control py-1 border-0  rounded-1 bg-body-secondary ps-2 mt-2 w-25 d-inline' />
                <button className='rounded-pill btn py-1 px-4 text-white ms-4' style={{ background: '#6200ee' }}>Search</button>
            </div>
            <h1 className='ps-4 mt-2'>Search result</h1>
            <div className="form-group">
                <label htmlFor="select" className='d-block'>Price</label>
                <select name="select" id="select" className='form-select w-25 py-2 border-0  rounded-1 bg-body-secondary ps-2 mt-2' >
                    <option value="ascending" className='mt-2'>decrease</option>
                </select>
                <input type="text" placeholder='ascending' className='py-2 border-0 rounded-1 bg-body-secondary ps-2 mt-1 form-control w-25' />
            </div>
            <div className="row text-center">
                <div className="col-4 pe-0 mt-5">
                    <i class="fa fa-heart"></i>
                    <div className="img py-2" style={{ background: '#f8f8f8' }}>
                        <img src="../../public/img/Shoes.png" alt width={250} />
                        <div className="text-start pb-2 ms-4">
                            <h3>Adidas Prophere</h3>
                            <p className="d-inline">short descript ...</p>
                        </div>
                    </div>
                    <div className="price d-flex">
                        <button className="buy w-50 border-0 px-2 py-3" style={{ background: '#9DE167', fontWeight: 400 }}>Buy now</button>
                        <span className="w-50 pt-3" style={{ background: '#dedddc', fontWeight: 600 }}>85$</span>
                    </div>
                </div>
                <div className="col-4 pe-0 mt-5">
                    <i class="fa fa-heart"></i>
                    <div className="img py-2" style={{ background: '#f8f8f8' }}>
                        <img src="../../public/img/Shoes.png" alt width={250} />
                        <div className="text-start pb-2 ms-4">
                            <h3>Adidas Prophere</h3>
                            <p className="d-inline">short descript ...</p>
                        </div>
                    </div>
                    <div className="price d-flex">
                        <button className="buy w-50 border-0 px-2 py-3" style={{ background: '#9DE167', fontWeight: 400 }}>Buy now</button>
                        <span className="w-50 pt-3" style={{ background: '#dedddc', fontWeight: 600 }}>85$</span>
                    </div>
                </div>
                <div className="col-4 pe-0 mt-5">
                    <i class="fa fa-heart"></i>
                    <div className="img py-2" style={{ background: '#f8f8f8' }}>
                        <img src="../../public/img/Shoes.png" alt width={250} />
                        <div className="text-start pb-2 ms-4">
                            <h3>Adidas Prophere</h3>
                            <p className="d-inline">short descript ...</p>
                        </div>
                    </div>
                    <div className="price d-flex">
                        <button className="buy w-50 border-0 px-2 py-3" style={{ background: '#9DE167', fontWeight: 400 }}>Buy now</button>
                        <span className="w-50 pt-3" style={{ background: '#dedddc', fontWeight: 600 }}>85$</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search