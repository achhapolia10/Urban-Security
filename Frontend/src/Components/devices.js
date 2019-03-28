import React,{Component} from 'react'
import {Card,ListGroup,Container} from 'react-bootstrap'


class Cdevice extends Component{



    render(){
        return(
            <Container  style={{margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'}}>
            <Card style={{ width: '18rem',background:'transparent',color:'indigo', margin: '0',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',width:'40%'}}>
                <Card.Header style={{paddingTop:'17px',textAlign:'center'}}><h3>Featured</h3></Card.Header>
                <Card>
                <Card style={{background:'transparent'}}>
                    <p style={{textAlign:'center',paddingTop:'12px',fontSize:'150%'}}>Devive name</p>
                </Card>
                <Card style={{background:'transparent'}}>
                    <p style={{textAlign:'center',paddingTop:'12px',fontSize:'150%'}}>Devive name</p>
                </Card>
                <Card style={{background:'transparent'}}>
                    <p style={{textAlign:'center',paddingTop:'12px',fontSize:'150%'}}>Devive name</p>
                </Card>
                <Card style={{background:'transparent'}}>
                    <p  style={{textAlign:'center',paddingTop:'12px',fontSize:'150%'}}>Devive name</p>
                </Card>
                <Card style={{background:'transparent'}}>
                    <p  style={{textAlign:'center',paddingTop:'12px',fontSize:'150%'}}>Devive name</p>
                </Card>
                </Card>
            </Card>
            </Container>
        )
    }
}


export default Cdevice