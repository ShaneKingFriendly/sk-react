import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKP extends HtmlComp {
  static SK_COMP_NAME = 'SKP';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.p,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKP.SK_COMP_NAME;
  }
}
