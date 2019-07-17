import { SK } from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH4 extends HtmlComp {
  static SK_COMP_NAME = 'SKH4';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.h4,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH4.SK_COMP_NAME;
  }
}
