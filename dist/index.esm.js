import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject, _templateObject2, _templateObject3;
var CustomButton = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 3.9px;\n  height: 42px;\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.64px;\n  text-align: center;\n  margin: 5px;\n  margin-top: 10px;\n  color: #fafafa;\n  border: solid 1.2px #154734;\n  background-color: #154734;\n  ", "\n  ", "\n"])), function (props) {
  return props.outline && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      color: #154734;\n      border: solid 1.5px #154734;\n      background-color: #ffffff;\n    "])));
}, function (props) {
  return props.disabled && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      color: #828282;\n      border: solid 1.5px #e0e0e0;\n      background-color: #e0e0e0;\n      cursor: not-allowed;\n    "])));
});

var Button = function Button(_ref) {
  var children = _ref.children,
      outline = _ref.outline,
      props = _objectWithoutProperties(_ref, ["children", "outline"]);

  return /*#__PURE__*/React.createElement(CustomButton, _extends({
    outline: outline
  }, props), children);
};

Button.propTypes = {
  children: PropTypes.any,
  outline: PropTypes.bool
};
Button.defaultProps = {
  outline: false
};
Button.displayName = "Button";

export { Button };
