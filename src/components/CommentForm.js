import  React,{ Component } from 'react';
import { Button } from 'reactstrap';

class Comment extends Component{
    render(){
        return(
            <div className="row">
            <Button className="fa fa-pencil btn btn-outline-secondary col-12"> Submit Comment</Button>
            </div>
        );
    }
    
}

export default Comment;