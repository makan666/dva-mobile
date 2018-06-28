import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { Button, WhiteSpace } from 'antd-mobile';
import './Page2.scss'

class Page2 extends React.Component {
  static propTypes = {
    subscriptions: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div className='employee-page'>
        员工
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions
});

export default connect(mapStateToProps)(Page2);
