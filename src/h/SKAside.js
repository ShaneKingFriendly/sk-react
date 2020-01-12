import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKAside extends HtmlComp {
  static SK_COMP_NAME = 'SKAside';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.aside,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKAside.SK_COMP_NAME;
  }
}
