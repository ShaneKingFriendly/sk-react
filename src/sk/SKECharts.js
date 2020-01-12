//https://github.com/ecomfe/echarts
import echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/**
 * @NoChild
 */
export default class SKECharts extends Comp {
  static SK_COMP_NAME = 'SKECharts';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,

    lazyUpdate: true,
    live: true,
    locale: SK.cookies(SK.STR_LANGUAGE),
    notMerge: false,
    onChartReady: (chart) => {
      chart.hideLoading();
    },
    onEvents: {},
  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    lazyUpdate: PropTypes.bool,
    notMerge: PropTypes.bool,
    onChartReady: PropTypes.func,
    onEvents: PropTypes.object,
    // option: PropTypes.object,
    optionUpdate: PropTypes.func,
    style: PropTypes.object,
    theme: PropTypes.string,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKECharts.SK_COMP_NAME;
  }

  componentDidMount() {
    super.componentDidMount();

    const echartsIns = this.renderEChartDom();
    this.bindEvents(echartsIns, this.props.onEvents);
    // on chart ready
    if (Proxy0._.isFunction(this.props.onChartReady)) {
      this.props.onChartReady(echartsIns);
    }

    // on resize
    elementResizeEvent(this.echartsDomRef, () => {
      echartsIns.resize();
    });
  }

  //!important
  // componentWillUpdate(){
  //   echarts.dispose(this.echartsDomRef);
  //   super.componentWillUpdate();
  // }

  componentDidUpdate() {
    super.componentDidUpdate();
    const echartsIns = this.renderEChartDom();
    this.bindEvents(echartsIns, this.props.onEvents);
  }

  componentWillUnmount() {
    if (typeof elementResizeEvent.unbind === SK.JS_KEYWORD_FUNCTION) {
      elementResizeEvent.unbind(this.echartsDomRef);
    }
    echarts.dispose(this.echartsDomRef);
    super.componentWillUnmount();
  }

  bindEvents(instance, events) {
    const _loop = function _loop(eventName) {
      // ignore the event config which not satisfy
      if (Proxy0._.isString(eventName) && Proxy0._.isFunction(events[eventName])) {
        // binding event
        instance.off(eventName);
        instance.on(eventName, (param) => {
          events[eventName](param, instance);
        });
      }
    };

    for (const eventName in events) {
      if (!events.hasOwnProperty(eventName)) continue;
      _loop(eventName);
    }
  }

  getEChartsInstance() {
    // return the echarts object
    return echarts.getInstanceByDom(this.echartsDomRef) || echarts.init(this.echartsDomRef, this.props.theme);
  }

  handleOptionUpdate(option) {
    return this.props.optionUpdate ? this.props.optionUpdate(this, option) : option;
  }

  renderEChartDom() {
    // init the echarts instance
    const echartsIns = this.getEChartsInstance();
    // set the echarts option
    // echartsIns.setOption(this.handleOptionUpdate(this.props.option), this.props.notMerge, this.props.lazyUpdate);
    echartsIns.setOption(this.handleOptionUpdate(this.skVal()), this.props.notMerge, this.props.lazyUpdate);
    // set loading mask
    if (this.props.showLoading) {
      echartsIns.showLoading(this.props.loadingOption);
    } else {
      echartsIns.hideLoading();
    }
    return echartsIns;
  }

  render() {
    const {compTag: CompTag, style} = this.props;
    let styled = Proxy0._.isEmpty(style) ? {height: '300px', width: '100%'} : style;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        style={styled}
        ref={refNode => this.echartsDomRef = refNode}
      />
    );
  }
}
