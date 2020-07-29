import  React,{ Component } from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Button, Modal,ModalBody,ModalHeader,Label,Row } from 'reactstrap';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal =this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen  
        });
    }
    handleSubmit(values){
        console.log("Current State is : "+JSON.stringify(values));
        alert("Current State is : "+JSON.stringify(values));
    }  
    render(){
        return(
            <div className="row">
            <Button className="fa fa-pencil btn btn-outline-secondary" onClick={this.toggleModal}>Submit Comment</Button>
             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group mx-auto">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row>
                         <Row className="form-group mx-auto">
                            <Label htmlFor="name">Your Name</Label>
                            <Control.text model=".name" className="form-control" placeholder="Your Name"/>
                        </Row>
                        <Row className="form-group mx-auto">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" className="form-control" rows="6" />
                        </Row>
                        <Button type="submit" value="submit" colour="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
        );
    }
    
}

export default Comment;