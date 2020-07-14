import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardText, CardTitle } from 'reactstrap';
import moment from 'moment';
class DishDetail extends Component {
    renderDish(dish) {
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

    renderComments(dish) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {dish.comments.map(comment => (
                            <ul className="list-unstyled">
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
                <div></div>
            );
        }
    }
    render() {
        return(
            <div className="container">
               <div className="row">
                {this.renderDish(this.props.dish)}
                {this.renderComments(this.props.dish)} 
                </div>
            </div>
        );
    }
}
export default DishDetail;