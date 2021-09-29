const UserInfo = ({state})=>{
    return(
        <div className="mt-2">
                <br />
                <div className="my-profile mb-3 w-50 border border-1 p-3 mt-2">
                    <div className="d-flex">
                        <p>Full Name : </p>
                        <p className="ms-1"> {state.name}</p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <p>Address : </p>
                        <p className="ms-1"> {state.address}</p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <p>Email :<span className="ms-1"> {state.email}</span></p>
                        {/* <p className="ms-1"> {state.email}</p> */}
                    </div>
                    <hr />
                    <div className="d-flex">
                        <p>Phone : </p>
                        <p className="ms-1"> {state.phone}</p>
                    </div>
                    <hr />
                </div>           
        </div>
    )
}

export default UserInfo