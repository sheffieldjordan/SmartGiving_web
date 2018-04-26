import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Button from 'material-ui/Button';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

/*these are links attached to the three buttons inside the toggle menu*/

const LinkToTeam = props => <Link to="/home/team" {...props} />
const LinkToContribute = props => <Link to="/" {...props} />
const LinkToWhitepaper = props => <Link to="/" {...props} />

class AboutUsToggle extends Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
              <Button color="inherit"
                aria-owns={open ? 'menu-list-grow' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
                className={AboutUsToggle.button}

              >
                About Us
              </Button>
            </div>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleClose} component={LinkToTeam}>Team</MenuItem>
                    <MenuItem onClick={this.handleClose} component={LinkToContribute}>Contribute</MenuItem>
                    <MenuItem onClick={this.handleClose} component={LinkToWhitepaper}>Whitepaper</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>

      </div>
    );
  }
}

AboutUsToggle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsToggle);
