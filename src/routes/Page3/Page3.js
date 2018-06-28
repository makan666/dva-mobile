import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { Button, WhiteSpace } from 'antd-mobile';
import './Page3.scss'

class Page3 extends React.Component {
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
      <div className='follow-page'>
        关注
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions
});

export default connect(mapStateToProps)(Page3);
