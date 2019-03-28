import React,{Component} from 'react';
import logo from './images/Capture.PNG'
import {Card,Form,Button} from 'react-bootstrap'

class First extends Component{


    render(){
        return(
            <Card style={{margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',width:'40%'}}>
                <Card.Body>
            <Form >
                <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:'purple',fontSize:'20px'}}>Identification</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Id" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{color:'purple',fontSize:'20px'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="secondary" type="submit" >
                    Submit
                </Button>
            </Form>
            </Card.Body>
            </Card>
        )
    }
}

export default First;