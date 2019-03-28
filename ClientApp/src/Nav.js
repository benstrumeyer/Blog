import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Button, Toolbar } from 'react-md';
import { withRoute, Link} from 'react-router5';
import NavItemLink from './NavItemLink';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Nav extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            position: 'left'
        };

        this.showDrawer = this.showDrawer.bind(this);  
        this.hideDrawer = this.hideDrawer.bind(this);  
        this.handleVisibility = this.handleVisibility.bind(this);  
    }
    componentDidMount() {
      this.state.dialog = 'test';
    }


      showDrawer () {
        this.setState({ visible: true});
      };
    
    
      hideDrawer  ()  {
        this.setState({ visible: false });
      };
    
      handleVisibility (visible) {
        this.setState({ visible });
      };
  
    render() {
        const { toolbarTitle } = this.state;
        const { location } = this.props;
        const { router } = this.props;
        const { visible } = this.state.visible;
        const isLeft = this.state.position === 'left';
        const closeBtn = <Button icon onClick={this.closeDrawer}>{isLeft ? 'arrow_back' : 'close'}</Button>;
        const navItems = [{
            routeName: 'home',
            router: router,
            routeOptions: {reload: true},
            label: 'home'
        }, {
            routeName: 'about',
            router: router,
            routeOptions: {reload: true},
            label: 'about'
        }];
        
        return (
          <div>
          <Toolbar colored fixed title="Routing Example" nav={<Button icon onClick={this.showDrawer}>menu</Button>} />
          <CSSTransitionGroup
            component="div"
            transitionName="md-cross-fade"
            transitionEnterTimeout={300}
            transitionLeave={false}
            className="md-toolbar-relative md-grid"
          >
          </CSSTransitionGroup>
          <Drawer
            type={Drawer.DrawerTypes.TEMPORARY}
            visible={this.state.visible}
            position={this.state.position}
            onVisibilityChange={this.handleVisibility}
            header={<Toolbar title={'Drawer Example'} />}
            renderNode={this.dialog}
            navItems={navItems.map(props => <NavItemLink {...props} key={props.routeName} />)}
          />
        </div> 
        );
    }
}

export default withRoute(Nav)