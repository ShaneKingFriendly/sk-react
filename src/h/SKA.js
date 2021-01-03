import React from 'react';
import {Proxy0, SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKA extends HtmlComp {
  static SK_COMP_NAME = 'SKA';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    ksCompTag: Reacts.TAG.a,
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
    const {ksCompTag: KsCompTag, href} = this.props;
    return (
      <KsCompTag
        {...this.transProps2Self(KsCompTag)}
        href={href || 'javascript:void(0);'}
        onClick={this.handleClick}
      >
        {this.transProps2Child()}
      </KsCompTag>
    );
  }
}
