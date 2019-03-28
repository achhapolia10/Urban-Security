import React,{Component} from 'react';
import Layout from '../Components/Layout'
import {Row,Col} from 'react-bootstrap'
import First from '../Components/first'
class Home extends Component{


  render(){
    return(
      <Layout active='/'>
        <First />
      </Layout>
    )
  }
}

export default Home
