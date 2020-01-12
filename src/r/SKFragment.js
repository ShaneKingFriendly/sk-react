import React from 'react';
import {SK} from 'sk-js';
import ReactComp from './ReactComp';

export default class SKFragment extends ReactComp {
  static SK_COMP_NAME = 'SKFragment';
  static defaultProps = SK.extends(true, {}, ReactComp.defaultProps, {
    compTag: React.Fragment,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFragment.SK_COMP_NAME;
  }
}
