import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKH5 extends HtmlComp {
  static SK_COMP_NAME = 'SKH5';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    ksCompTag: Reacts.TAG.h5,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKH5.SK_COMP_NAME;
  }
}
