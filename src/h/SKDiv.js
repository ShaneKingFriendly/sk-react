import { SK } from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKDiv extends HtmlComp {
  static SK_COMP_NAME = 'SKDiv';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.div,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKDiv.SK_COMP_NAME;
  }
}
