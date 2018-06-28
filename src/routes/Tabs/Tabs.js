import React from 'react';
import {connect} from 'dva';
import {TabBar} from 'antd-mobile';
import Home from '../Page1/Page1';
import Follow from '../Page3/Page3';
import Employee from '../Page2/Page2';
import Shop from '../Page4/Page4';
import {NavBar, Icon} from 'antd-mobile';
import './Tabs.scss';


const Tabs = ({ dispatch, tabs }) => {
  function selectedTab(id) {
    dispatch({
      type: 'tabs/selected',
      payload: id,
    });
  }
  function renderContent(pageText) {
    return (
      <div style={{backgroundColor: 'white', height: '100%', textAlign: 'center'}}>
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="0" type="ellipsis" style={{marginRight: '16px'}}/>
          ]}
        >{pageText}</NavBar>
        {selectedShow(pageText)}
      </div>
    );
  }

  function selectedShow(pageText) {
    switch (pageText) {
      case '首页':
        return <Home/>;
      case '关注':
        return <Follow/>;
      case '店铺':
        return <Shop/>;
      case '员工':
        return <Employee/>;
      default:
        return <Home/>;
    }
  }
  return (
    <div className='tabs-page' style={tabs.fullScreen ? {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0
    } : {height: '100%'}}>
      <TabBar
        unselectedTintColor="#6b6c6d"
        tintColor="#e25050"
        barTintColor="white"
        hidden={tabs.hidden}
      >
        <TabBar.Item
          icon={{uri: require('../../assets/home-gray.svg')}}
          selectedIcon={{uri: require('../../assets/home-red.svg')}}
          title="首页"
          key="首页"
          selected={tabs.selected === 'home'}
          onPress={() => {
            selectedTab('home')
          }}
          data-seed="logId"
        >
          {renderContent('首页')}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: require('../../assets/follow-gray.svg')}}
          selectedIcon={{uri: require('../../assets/follow-red.svg')}}
          title="关注"
          key="关注"
          selected={tabs.selected === 'follow'}
          onPress={() => {
            selectedTab('follow')
          }}
          data-seed="logId1"
        >
          {renderContent('关注')}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: require('../../assets/shop-gray.svg')}}
          selectedIcon={{uri: require('../../assets/shop-red.svg')}}
          title="店铺"
          key="店铺"
          selected={tabs.selected === 'shop'}
          onPress={() => {
            selectedTab('shop')
          }}
        >
          {renderContent('店铺')}
        </TabBar.Item>
        <TabBar.Item
          icon={{uri: require('../../assets/employee-gray.svg')}}
          selectedIcon={{uri: require('../../assets/employee-red.svg')}}
          title="员工"
          key="员工"
          selected={tabs.selected === 'employee'}
          onPress={() => {
            selectedTab('employee')
          }}
        >
          {renderContent('员工')}
        </TabBar.Item>
      </TabBar>
    </div>
  );
};

// export default Products;
export default connect(({ tabs }) => ({ tabs }))(Tabs);
