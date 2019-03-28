import React,{Component} from 'react';
import Layout from '../Components/Layout'
import Cdevice from '../Components/devices'

class Devices extends Component{

  render(){
    return(
      <Layout active={'/devices'}>
      <h1>This is Devices</h1>
          <Cdevice /> 
      </Layout>
    )
  }
}

export default Devices
