import React from 'react';
import { IndexLink, Link } from 'react-router';
import className from 'classnames';
import ChangeLocale from './ChangeLocale';

export default class Header extends React.Component {
  state = {
    menuOpen: false,
  };

  handleClickMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };

  linkProps = {
    className: 'navbar-item',
    activeClassName: 'is-active',
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>

              <div className={className('navbar-burger', {'is-active': menuOpen})} onClick={this.handleClickMenu}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={className('navbar-menu', {'is-active': menuOpen})}>
              <div className="navbar-start">
                <IndexLink to="/" {...this.linkProps}>Home</IndexLink>
                <Link to="/counter" {...this.linkProps}>Counter</Link>
                <Link to="/todo" {...this.linkProps}>Todo</Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <ChangeLocale />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
