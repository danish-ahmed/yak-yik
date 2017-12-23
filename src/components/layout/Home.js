import React, {Component} from 'react';
import Hero from '../presentations/Hero';
import Zones from '../containers/Zones';
import Comments from '../containers/Comments'

class Home extends Component{

    render(){
        return(
            <div>
                <Hero />
                <div className="container">
                    <div className="columns">
                        <Zones />
                        <Comments />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;