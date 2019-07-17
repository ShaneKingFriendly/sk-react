import { SK } from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH6 extends HtmlComp {
  static SK_COMP_NAME = 'SKH6';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.h6,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH6.SK_COMP_NAME;
  }
}
