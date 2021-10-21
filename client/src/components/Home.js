import React from 'react'

export default function Home() {
    return (
        <div className="container mt-5 py-5 " style={{ maxWidth:'600px'}}>
            <div className=" py-4 my-5 text-center" style={{boxShadow: ' 5px 5px 8px #000'}}>
                <div className="my-5 d-flex justify-content-around">
                  
                        <button className="btn btn-danger">SignUp With Google</button>
                 
                   
                        <button className="btn btn-primary">SignUp With Facebook</button>
                  


                </div>
            </div>
        </div>
    )
}
