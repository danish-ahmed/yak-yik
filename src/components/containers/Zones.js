import React, {Component} from 'react';
import Zone from '../presentations/Zone';
import superagent from 'superagent';

class Zones extends Component{

    constructor(){
        super();
        this.state={
            zone:{},
            list:[
            ]
        };
    };
    componentDidMount(){
        superagent
            .get('/api/zone')
            .query(null) // query string
            .set('Accept','application/json')
            .end((err, res) => {
                if(err){
                    alert("ERROR WHILE FETCHING "+err)
                }
                let results = res.body.results;
                this.setState({list:results});

        });
    }
    render(){
        const listItems = this.state.list.map((zone,i) => {
            return(
                <div key={i}>
                    <Zone currentZone={zone} />
                </div>
            )
        });
        console.log(this.state.lists);
        return(
            <div className="column is-two-fifths">
                {listItems}
                <div className="column">
                    <div className="control box">
                        <label className="label">Zone Name</label>
                        <input className="input" type="text" placeholder="Text input" />
                        <label className="label">Zip Code</label>
                        <input className="input" type="text" placeholder="Text input" />
                        <br />
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Zones;