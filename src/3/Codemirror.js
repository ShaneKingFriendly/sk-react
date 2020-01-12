//https://github.com/JedWatson/react-codemirror/blob/master/src/Codemirror.js
import {Proxy0} from 'sk-js';

const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
const classNames = require('classnames');
const createReactClass = require('create-react-class');

function normalizeLineEndings(str) {
  if (!str) return str;
  return str.replace(/\r\n|\r/g, '\n');
}

export default createReactClass({
  NON_SK_COMP_NAME: 'CodeMirror',
  propTypes: {
    autoFocus: PropTypes.bool,
    className: PropTypes.any,
    codeMirrorInstance: PropTypes.func,
    defaultValue: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onCursorActivity: PropTypes.func,
    onFocusChange: PropTypes.func,
    onScroll: PropTypes.func,
    options: PropTypes.object,
    value: PropTypes.string,
    preserveScrollPosition: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      preserveScrollPosition: true,
    };
  },
  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || require('codemirror');
  },
  getInitialState() {
    return {
      isFocused: false,
    };
  },
  componentWillMount() {
    this.componentWillReceiveProps = Proxy0._.debounce(this.componentWillReceiveProps, 0);
  },
  componentDidMount() {
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(this.textareaDomRef, this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged);
    this.codeMirror.on('cursorActivity', this.cursorActivity);
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this.codeMirror.on('scroll', this.scrollChanged);
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
  },
  componentWillUnmount() {
    // is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  },
  componentWillReceiveProps: function (nextProps) {
    // if (this.codeMirror && nextProps.value !== undefined && nextProps.value !== this.props.value && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
    if (this.codeMirror && nextProps.value !== undefined && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
      if (this.props.preserveScrollPosition) {
        let prevScrollPosition = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(nextProps.value);
        this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
      } else {
        this.codeMirror.setValue(nextProps.value);
      }
    }
    if (typeof nextProps.options === 'object') {
      for (let optionName in nextProps.options) {
        if (nextProps.options.hasOwnProperty(optionName)) {
          this.setOptionIfChanged(optionName, nextProps.options[optionName]);
        }
      }
    }
  },
  setOptionIfChanged(optionName, newValue) {
    const oldValue = this.codeMirror.getOption(optionName);
    if (!Proxy0._.isEqual(oldValue, newValue)) {
      this.codeMirror.setOption(optionName, newValue);
    }
  },
  getCodeMirror() {
    return this.codeMirror;
  },
  focus() {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  },
  focusChanged(focused) {
    this.setState({
      isFocused: focused,
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  },
  cursorActivity(cm) {
    this.props.onCursorActivity && this.props.onCursorActivity(cm);
  },
  scrollChanged(cm) {
    this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
  },
  codemirrorValueChanged(doc, change) {
    if (this.props.onChange && change.origin !== 'setValue') {
      this.props.onChange(doc.getValue(), change);
    }
  },
  render() {
    const editorClassName = classNames(
      'ReactCodeMirror',
      this.state.isFocused ? 'ReactCodeMirror--focused' : null,
      this.props.className,
    );
    return (
      <div className={editorClassName}>
				<textarea
          ref={refNode => this.textareaDomRef = refNode}
          name={this.props.name}
          defaultValue={this.props.value}
          autoComplete='off'
          autoFocus={this.props.autoFocus}
        />
      </div>
    );
  },
});
