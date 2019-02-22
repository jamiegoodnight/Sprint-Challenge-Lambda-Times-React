import React from 'react';

const Tab = props => {
  if (props.tab.tab===props.selectedTab)
  props.tab.classList.add('tab active-tab')
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={(tab) => {
        props.selectTabHandler
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;   
