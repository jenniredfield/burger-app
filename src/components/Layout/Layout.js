import React,  {Component} from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer} })
    }//clean way of setting the state when you depend on the old state


    render() {
        return (
        <Aux>
            <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
            <main className='layout__content'>
                {this.props.children}
            </main>
        </Aux>
        );
    }
};

export default Layout;