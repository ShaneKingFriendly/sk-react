import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH3 extends HtmlComp {
  static SK_COMP_NAME = 'SKH3';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.h3,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH3.SK_COMP_NAME;
  }
}
