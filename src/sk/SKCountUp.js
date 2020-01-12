import {CountUp} from 'countup.js';
import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/**
 * @MustModelId
 * @NoChild
 */
export default class SKCountUp extends Comp {
  static SK_COMP_NAME = 'SKCountUp';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.span,
    decimal: SK.CHAR_DOT,
    decimals: 0,
    duration: 3,
    easingFn: null,
    end: 100,
    formattingFn: null,
    onComplete: undefined,
    onStart: undefined,
    prefix: SK.STR_EMPTY,
    separator: SK.CHAR_COMMA,
    start: 0,
    suffix: SK.STR_EMPTY,
    redraw: false,
    style: undefined,
    useEasing: true,
    useGrouping: true,
  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    decimal: PropTypes.string,
    decimals: PropTypes.number,
    duration: PropTypes.number,
    easingFn: PropTypes.func,
    end: PropTypes.number,
    formattingFn: PropTypes.func,
    onComplete: PropTypes.func,
    onStart: PropTypes.func,
    prefix: PropTypes.string,
    separator: PropTypes.string,
    start: PropTypes.number,
    suffix: PropTypes.string,
    useEasing: PropTypes.bool,
    useGrouping: PropTypes.bool,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCountUp.SK_COMP_NAME;
  }

  componentDidMount() {
    super.componentDidMount();
    this.startAnimation(this);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.startAnimation(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.duration !== nextProps.duration ||
      this.props.end !== nextProps.end ||
      Proxy0.$Any(this.countupDomRef).text() !== this.skVal().skCurrencyFmt(nextProps.decimals) ||
      this.props.start !== nextProps.start;
  }

  startAnimation(comp) {
    if (comp && this.countupDomRef) {
      const {
        decimal,
        decimals,
        duration,
        easingFn,
        formattingFn,
        onComplete,
        onStart,
        prefix,
        separator,
        start,
        suffix,
        useEasing,
        useGrouping,
      } = comp.props;

      let {
        end,
      } = comp.props;

      end = this.skVal();

      const countupInstance = new CountUp(
        this.countupDomRef,
        start,
        end,
        decimals,
        duration,
        {
          decimal,
          easingFn,
          formattingFn,
          separator,
          prefix,
          suffix,
          useEasing,
          useGrouping,
        },
      );

      if (Proxy0._.isFunction(onStart)) {
        onStart();
      }

      countupInstance.start(onComplete);
    } else {
      throw new Error(
        'You need to pass the CountUp component as an argument!\neg. this.myCountUp.startAnimation(this.myCountUp);',
      );
    }
  }

  render() {
    const {compTag: CompTag, start} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} ref={refNode => this.countupDomRef = refNode}>
        {start}
      </CompTag>
    );
  }
}
