import React from 'react';
import { Card, CardImg,  CardBody, CardText, CardTitle } from 'reactstrap';
import moment from 'moment';

    
    function RenderDish({dish}) {
        if (dish!=null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {dish.comments.map(comment => (
                            <ul className="list-unstyled" key={comment.id}>
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {moment(comment.date).format('MMM DD, YYYY')}</p>
                                </li>
                            </ul>
                        )
                    )}
                </div>);
        } else {
            return(
                console.log("hello"),
                <div></div>
            );
        }
    }
    const DishDetail =(props) =>{

        console.log('dishDetail Component render is invoked!')
        return(
            <div className="container">
               <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments dish={props.dish}/>
                </div>
            </div>
        );
    }

export default DishDetail;