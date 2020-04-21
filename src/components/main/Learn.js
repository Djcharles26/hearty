import React from 'react'


const Learn = () => {
    return ( 
        <div style={{height:"100vh"}}>
            <h1 className="text-center learn-title-text">Learn</h1>
            <div className="container">
                <button style={{backgroundColor:'#ff0055'}} className="btn btn-block btn-lg text-white btn-action">
                    <span style={{fontFamily:'Bangers', fontSize:20}}>Start lesson</span></button>
            </div>
        </div>
    );
}
 
export default Learn;