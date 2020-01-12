//<SKJdenticon modelId='user.username' size={32}/>
import jdenticon from 'jdenticon';
import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/**
 * @MustModelId
 * @NoChild
 */
export default class SKJdenticon extends Comp {
  static SK_COMP_NAME = 'SKJdenticon';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.canvas,

  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    size: PropTypes.number,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKJdenticon.SK_COMP_NAME;
  }

  componentDidMount() {
    super.componentDidMount();
    jdenticon.update(this.jdenticonDomRef, Proxy0.md5.hex(this.skVal()));
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    jdenticon.update(this.jdenticonDomRef, Proxy0.md5.hex(this.skVal()));
  }

  render() {
    const {compTag: CompTag, size} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} height={size} width={size}
               ref={refNode => this.jdenticonDomRef = refNode}/>
    );
  }
}
