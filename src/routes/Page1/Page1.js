import React from 'react';
import {connect} from 'dva';
import './Page1.scss'

const Page1 = ({dispatch, home}) => {

  return (
    <div className='home-page'>首页</div>
  )
}

export default connect(({home}) => ({home}))(Page1);
