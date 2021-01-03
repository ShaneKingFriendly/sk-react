import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH2 extends HtmlComp {
  static SK_COMP_NAME = 'SKH2';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    ksCompTag: Reacts.TAG.h2,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH2.SK_COMP_NAME;
  }
}
