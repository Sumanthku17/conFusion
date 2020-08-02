import  React,{ Component } from 'react';
import {Control,LocalForm, Errors } from 'react-redux-form';
import { Button,Modal,Row,ModalBody,ModalHeader,Label } from 'reactstrap';
const maxlength = (len) => (val) =>!(val) || (val.length <= len);
const minlength = (len) => (val) =>(val) && (val.length >= len);
class CommentForm extends Component{
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
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.name,values.comment);
        console.log(JSON.stringify(values));
    }  
    render(){
        return(
            <>
            <div className="row">
            <Button className="fa fa-pencil btn btn-outline-secondary" onClick={this.toggleModal}>Submit Comment</Button>
            </div>
            <div className="row">
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
                            <Control.text model=".name" className="form-control" placeholder="Your Name" validators={{
                                        minlength:minlength(3),
                                        maxlength:maxlength(15)
                                    }}/>
                            <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                                  minlength: 'Must be greater than 2 characters',
                                                  maxlength:'Must be 16 characters or less'
                                                 }}/>
                        </Row>
                        <Row className="form-group mx-auto">
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" className="form-control" rows="6" />
                        </Row>
                        <Button color="primary" type="submit">Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
            </>
        );
    }
    
}

export default CommentForm;