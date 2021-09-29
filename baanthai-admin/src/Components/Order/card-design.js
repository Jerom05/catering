import { Link } from 'react-router-dom'
const card = ()=>{
    return(
        <div className="card-item border border-1"> 
                    <div className="d-flex justify-content-evenly">
                        <div className="col-lg-3">
                            Order Id
                        </div>
                        <div className="col-lg-3">
                            items
                        </div>
                        <div className="col-lg-3">
                            Total Price
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-evenly">
                        <div className="col-lg-3">
                            123
                        </div>
                        <div className="col-lg-3">
                            8
                        </div>
                        <div className="col-lg-3">
                            55tk
                        </div>
                    </div>
                    <hr />
                    <div className="text-end mb-2">
                        <Link className='btn'>Details</Link>
                    </div>
                    
                </div>
    )
}

export default card