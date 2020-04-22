import React from 'react'


const Learn = () => {
    return ( 
        <div style={{height:"100vh"}}>
            <h1 className="text-center learn-title-text mb-5">Learn</h1>
            <div style={{height: '100px'}}></div>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Listen and see</h2>
                            </div>
                            <div className="card-body">
                                <p>In this lesson you can listen sounds and some echographies, you can learn about how heart sound</p>
                            </div>
                            <div className="card-footer">
                            <button style={{backgroundColor:'#ff0055'}} className="btn btn-block btn-lg text-white btn-action">
                                <span style={{fontFamily:'Bangers', fontSize:20}}>Start lesson</span>
                            </button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Just listen</h2>
                            </div>
                            <div className="card-body">
                                <p>In this lesson you just listen for the heart sounds and read the name of the sound</p>
                                <br/>
                            </div>
                            <div className="card-footer">
                                <button style={{backgroundColor:'#ff0055'}} className="btn btn-block btn-lg text-white btn-action">
                                    <span style={{fontFamily:'Bangers', fontSize:20}}>Start lesson</span>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Listen and read</h2>
                            </div>
                            <div className="card-body">
                                <p>In this lesson you read about the sound, you listen the sound and the image of some echographies</p>
                            </div>
                            <div className="card-footer">
                                <button style={{backgroundColor:'#ff0055'}} className="btn btn-block btn-lg text-white btn-action">
                                    <span style={{fontFamily:'Bangers', fontSize:20}}>Start lesson</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Learn;