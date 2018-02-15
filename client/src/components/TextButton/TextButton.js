import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

class TextButton extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        className={classnames('btn outline white-purple', this.props.className)}
        type={this.props.type}
        role={this.props.role}
        style={this.props.style}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        { this.props.children }
      </button>
    );
  }
}

TextButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};
TextButton.defaultProps = {
  id: '',
  className: '',
  role: 'presentation',
  type: '',
  style: {},
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
};
export default TextButton;
