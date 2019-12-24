import { SK } from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKBr extends HtmlComp {
  static SK_COMP_NAME = 'SKBr';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.br,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBr.SK_COMP_NAME;
  }
}
