import React from 'react';

const Landing = () => {
    return ( 
        <div className="App">
            <h1 className="text-center mt-3 title-text"><span style={{fontSize:'90px', color:"#ff0055"}}>Hearty</span><br/> Listen, study, learn</h1>
            <div className="text-center">
                <img className="landing-image"  src={process.env.PUBLIC_URL + "/assets/heartbeat.png"} alt="heartbeat"></img>
            </div>
            <ul className="list-inline text-center">
                <li className="list-inline-item">
                    <a href="/learn" className="btn btn-block btn-lg btn-info btn-action"><span>Learn</span></a>
                </li>
                <li className="list-inline-item">
                    <a href="/study" style={{backgroundColor:'#ff0055', color:'white'}} className="btn btn-block btn-lg btn-action"><span>Study</span></a>
                </li>
            </ul>
            <br/><br/>    
            <hr className="mt-5"/>
            <div className="text-center text-white mt-5 description">
                
                <h1>What is Hearty?</h1>
                <br/>
                <p>Hearty is an app to improve your abilities on listening heart sounds, recognizing deseases and blurs.</p>
                <p>Hearty can help you on Heart courses, and cand make you a better listener, for this you will need a pair of headphones</p>
                <p>Hearty gives you the option to learn the sounds, recognizing and relationing them with images to make your learning easier.</p>
                <p>With <span style={{fontSize:'45px', color: '#e17055'}}>Hearty</span>, studying sounds never was so easy.</p>
            </div>
        </div>
     );
}
 
export default Landing;