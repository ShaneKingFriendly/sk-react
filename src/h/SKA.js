import React from 'react';
import {Proxy0, SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKA extends HtmlComp {
  static SK_COMP_NAME = 'SKA';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.a,
  });
  static propTypes = SK.extends(true, {}, HtmlComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKA.SK_COMP_NAME;
    this.handleClick = (domEvent) => {
      if (this.props.onClick && Proxy0._.isFunction(this.props.onClick)) {
        this.props.onClick(domEvent);
      }
    };
  }

  render() {
    const {compTag: CompTag, href} = this.props;
    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        href={href || 'javascript:void(0);'}
        onClick={this.handleClick}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
