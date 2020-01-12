import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH1 extends HtmlComp {
  static SK_COMP_NAME = 'SKH1';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.h1,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH1.SK_COMP_NAME;
  }
}
