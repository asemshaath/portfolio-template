import { Component } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

class Project extends Component{

    render(){
        return(
            <>     
                <div className='card-wrapper'>
                    <Card>
                        <Card.Img 
                        variant="top" 
                        src= {this.props.imageUrl}                          
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/150x150'}} 
                        />

                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Link href={this.props.url}>HHHH</Card.Link>
                            <Card.Text > {this.props.details} </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </>
        );
    }
}

export default Project;
