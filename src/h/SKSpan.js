import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKSpan extends HtmlComp {
  static SK_COMP_NAME = 'SKSpan';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    ksCompTag: Reacts.TAG.span,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSpan.SK_COMP_NAME;
  }
}
