import React from 'react';
import PropTypes from 'prop-types'
import Tabs from './Tabs';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={
        props.tab===props.selectedTab ? 'tab active-tab' : 'tab'
      }
      onClick={(tab) => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.object
}

export default Tab;   
