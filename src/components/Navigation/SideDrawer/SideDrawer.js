import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  let attaschedClasses = [classes.SideDrawer,classes.Close];
  if(props.open){
    attaschedClasses = [classes.SideDrawer,classes.Open];
  }
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attaschedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>

  );
}

export default sideDrawer;