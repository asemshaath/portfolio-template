import { Component } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

class Experince extends Component{

    render(){
        return(
            <>     
                <div className='card-wrapper'>
                    <Card>
                        <Card.Img 
                        variant="top" 
                        src= {this.props.imageUrl}                          
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x150'}} 

                        />
                        <Card.Body>
                            <Card.Title>{this.props.jobTitle}</Card.Title>
                            <Card.Text>{this.props.company}</Card.Text>
                            <Card.Text>{this.props.startDate} - {this.props.endDate}</Card.Text>
                            <Card.Text > {this.props.details} </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </>
        );
    }
}

export default Experince;
