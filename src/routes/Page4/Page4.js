import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import './Page4.scss'

class Page4 extends React.Component {
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
      <div className='shop-page'>
        店铺
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions
});

export default connect(mapStateToProps)(Page4);
