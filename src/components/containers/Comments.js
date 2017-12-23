import React, {Component} from 'react';
import Comment from '../presentations/Comment'
import superagent from 'superagent';

class Comments extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            comment:{
                username:'',
                body:''
            },
            list:[
            ]
        }
    }
    componentDidMount(){
        superagent
            .get('/api/comment')
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

    updateUsername(event){
        let username = event.target.value;
        this.setState(prevState => prevState.comment.username = username)
        console.log(this.state.comment)
    }

    updateBody(event){
        let body = event.target.value;
        // let updatedBody = Object.assign({}, this.state.comment)
        // updatedBody['body'] = body;
        this.setState(prevState => prevState.comment.body = body)
        console.log(this.state.comment)
        
    }

    commentOnSubmit(){
        let comment = this.state.comment
        console.log(comment)
        this.setState(prevState => prevState.list.push(comment));
        this.setState({comment:{username:'',body:''}})
    }

    render(){
        const itemList = this.state.list.map((comment, i) => {
            return (
                <div key={i}>
                    <Comment currentComment={comment} />
                </div>
            )
        })
        return(
            <div className="column is-half">
                <div className="column">
                    <h1 className="title">Zone 1 Comments</h1>
                </div>
                {itemList}
                <div className="column">
                    <div className="control box">
                        <label className="label">Username</label>
                        <input 
                            className="input" 
                            type="text"
                            name="username" 
                            onKeyUp={this.updateUsername.bind(this)}
                            placeholder="Text input" 
                        />
                        <label className="label">Comment</label>
                        <input 
                            className="input" 
                            type="text" 
                            name="body"
                            onKeyUp={this.updateBody.bind(this)}
                            placeholder="Text input" 
                        />
                        <br />
                        <button 
                            type="submit"
                            className="button is-primary"
                            onClick={this.commentOnSubmit.bind(this)}
                        >Submit</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Comments;