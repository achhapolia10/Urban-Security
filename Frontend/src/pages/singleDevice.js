import React,{Component} from 'react';
import Layout from '../Components/Layout'


class SingleDevice extends Component{


  render(){
    return(
      <Layout active='/devices'>
      <h1>This is a Single Device:{this.props.match.params.id}</h1>
      </Layout>
    )
  }
}

export default SingleDevice
