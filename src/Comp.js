import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import Model from './Model';
import Reacts from './Reacts';

export default class Comp extends React.Component {
  static KS_PROPS_PREFIX = 'ks';//apply for self element
  static SK_COMP_NAME = 'Comp';
  static SK_COMP_STATE_ID_PREFIX = 'skCompStateUid';
  static SK_PROPS_PREFIX = 'sk';//apply for sub element

  static defaultProps = {};
  static propTypes = {
    ksCompTag: PropTypes.any,
    ksModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(part of page), PlainObject
    ksModelId: PropTypes.string,
    ksMonitor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]), //ksMonitor is string[reg], array[string] or object of ksModelId
    ksM2nConverter: PropTypes.func, //Model 2 Node
    ksN2mConverter: PropTypes.func, //Node 2 Model
    skModel: Comp.IS_PROP_TYPES_MODEL, //Business Model(page), PlainObject
    skSysModel: Comp.IS_PROP_TYPES_MODEL, //System Model(whole of page), PlainObject
  };

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = Comp.SK_COMP_NAME;
    this.monitors = [];
    this.updateUI = (evt) => {
      this.setState({stateUid: Proxy0._.uniqueId(Comp.SK_COMP_STATE_ID_PREFIX)});
    };
  }

  static IS_PROP_TYPES_MODEL(props, propName, componentName) {
    if (props[propName] && !(props[propName] instanceof Model)) {
      return new Error(`The [${componentName}]'s [${propName}] is not a model!`);
    }
  }

  static ksPropsFilter(k) {
    return Proxy0._.startsWith(SK.s4s(k), Comp.KS_PROPS_PREFIX);
  }

  static skPropsFilter(k) {
    return Proxy0._.startsWith(SK.s4s(k), Comp.SK_PROPS_PREFIX);
  }

  // react
  componentDidMount() {
    //super.componentDidMount();
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUpdate() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
    //super.componentWillUpdate();
  }

  componentDidUpdate() {
    //super.componentDidUpdate();
    this.addAllChangedMonitor();
    this.addExtendChangedMonitor();
  }

  componentWillUnmount() {
    this.rmvAllChangedMonitor();
    this.rmvExtendChangedMonitor();
    //super.componentWillUnmount();
  }

  render() {
    const {ksCompTag: KsCompTag} = this.props;

    return (
      <KsCompTag {...this.transProps2Self(KsCompTag)}>
        {this.transProps2Child()}
      </KsCompTag>
    );
  }

  // monitor
  addAllChangedMonitor() {
    Model.parseSao(this.props.ksMonitor).forEach((item) => {
      this.addChangedMonitor(item);
    });
    //Self value monitor
    if (this.modelId()) {
      this.addChangedMonitor(this.modelId());
    }
  }

  addChangedMonitor(idOrReg) {
    if (!Proxy0._.isNil(idOrReg)) {
      if (this.monitors.indexOf(idOrReg) < 0) {
        this.monitors.push(idOrReg);
      }
      if (Proxy0._.isRegExp(idOrReg)) {
        this.model().addRegChangedListener(idOrReg, this.updateUI);
      } else {
        this.model().addIdChangedListener(idOrReg, this.updateUI);
      }
    }
  }

  addExtendChangedMonitor() {

  }

  rmvAllChangedMonitor() {
    this.monitors.forEach((item) => {
      this.rmvChangedMonitor(item);
    });
  }

  rmvChangedMonitor(idOrReg) {
    if (Proxy0._.isRegExp(idOrReg)) {
      this.model().rmvRegChangedListener(idOrReg, this.updateUI);
    } else {
      this.model().rmvIdChangedListener(idOrReg, this.updateUI);
    }
    this.monitors.skRmv(idOrReg);
  }

  rmvExtendChangedMonitor() {

  }

  // other
  allowTransProps2Child(child) {
    return [];
  }

  allowTransProps2Self(comp = this.props.ksCompTag, prop = this.props) {
    return [];
  }

  denyTransProps2Child(child) {
    return [];
  }

  denyTransProps2Self(comp = this.props.ksCompTag, prop = this.props) {
    return [];
  }

  //model 2 node(DOM Element Node/React Component Node)
  m2n() {
    return Proxy0._.isFunction(this.props.ksM2nConverter) ? this.props.ksM2nConverter(this.skVal(), this.model(), this) : this.m2nConverter();
  }

  m2nConverter() {
    return this.skVal();
  }

  model() {
    return this.props.ksModel === undefined ? (this.props.skModel === undefined ? this.props.skSysModel : this.props.skModel) : this.props.ksModel;
  }

  modelId() {
    return this.props.ksModelId;
  }

  n2m(val) {
    return this.skVal(Proxy0._.isFunction(this.props.ksN2mConverter) ? this.props.ksN2mConverter(val, this.model(), this) : this.n2mConverter(val));
  }

  n2mConverter(val) {
    return val;
  }

  //props -> skProps
  p2(prop, defaultValue = undefined) {
    let rtn = this.props[prop];
    if (rtn === undefined) {
      rtn = this.props[Comp.SK_PROPS_PREFIX + SK.upperWordsFirstChar(prop)];
    }
    return rtn === undefined ? defaultValue : rtn;
  }

  skVal(val) {
    let mdl = this.model();
    if (mdl) {
      if (arguments.length > 0) {
        mdl.skVal(this.modelId(), val);
        return this;
      } else {
        return mdl.skVal(this.modelId());
      }
    }
  }

  sysModel() {
    return this.props.skSysModel;
  }

  transProps2Child(children = this.props.children) {
    const skProps = Object.keys(this.props.skFilter(false, Comp.skPropsFilter));
    const ksProps = Object.keys(this.props.skFilter(false, Comp.ksPropsFilter));

    let rtn = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        let allowProps = this.allowTransProps2Child(child);
        allowProps = allowProps.concat(Reacts.TAG[child.type] ? [] : skProps);//if html node, nothing to do

        let denyProps = this.denyTransProps2Child(child);
        denyProps = denyProps.concat(['children', 'className']);
        denyProps = denyProps.concat(child.props ? Object.keys(child.props) : []);//ignore child has props
        denyProps = denyProps.concat(ksProps);

        return React.cloneElement(child, Proxy0._.omit(Proxy0._.pick(this.props, allowProps), denyProps));
      }
      return child;
    });

    if (!Proxy0._.isArray(children) && Proxy0._.isArray(rtn)) {
      rtn = rtn[0];
    }
    return rtn;
  }

  transProps2Self(comp = this.props.ksCompTag, prop = this.props) {
    const skProps = Object.keys(prop.skFilter(false, Comp.skPropsFilter));
    const ksProps = Object.keys(prop.skFilter(false, Comp.ksPropsFilter));

    let allowProps = this.allowTransProps2Self(comp, prop);
    allowProps = allowProps.concat(comp.propTypes ? Object.keys(comp.propTypes) : []);
    allowProps = allowProps.concat(Reacts.TAG[comp] ? [] : ksProps);
    allowProps = allowProps.concat(Reacts.TAG[comp] ? [] : Reacts.P.skVals());
    allowProps = allowProps.concat(Reacts.TAG[comp] ? [] : skProps);
    allowProps = allowProps.concat(Reacts.TAG[comp] ? SK.s4a(Reacts.TP[comp]) : []);

    let denyProps = this.denyTransProps2Self(comp, prop);
    denyProps = denyProps.concat(Reacts.TAG[comp] ? ksProps : []);
    denyProps = denyProps.concat(Reacts.TAG[comp] ? skProps : []);

    return Proxy0._.omit(Proxy0._.pick(prop, allowProps), denyProps);
  }
}
