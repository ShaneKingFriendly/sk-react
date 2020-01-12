import {SK} from 'sk-js';
import HtmlComp from './HtmlComp';
import Reacts from '../Reacts';

export default class SKCanvas extends HtmlComp {
  static SK_COMP_NAME = 'SKCanvas';
  static defaultProps = SK.extends(true, {}, HtmlComp.defaultProps, {
    compTag: Reacts.TAG.canvas,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCanvas.SK_COMP_NAME;
  }
}
