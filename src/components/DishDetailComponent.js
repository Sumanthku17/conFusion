import React from 'react';
import { Card, CardImg,  CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderDish({dish}) {
         if(dish!=null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,postComment,dishId}) {
        if(comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'}}>
            
                    </FadeTransform>
                    <h4>Comments</h4>
                        {comments.map(comment => (
                            <ul className="list-unstyled" key={comment.id}>
                                <Stagger in>
                                    <Fade in>
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author} , {moment(comment.date).format('MMM DD, YYYY')}</p>
                                    </li>
                                    </Fade>
                                </Stagger>
                            </ul>
                            
                        )
                    )}
                    <CommentForm dishId={dishId} postComment={postComment}/>
                
                </div>);
        } else {
            return(
                <div></div>
            );
        }
    }
    const DishDetail=(props) =>{
        console.log('DishDetail Component render is invoked!')
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    </div>
                   <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
                    </div>
                </div>
            );
        }
    }

export default DishDetail;