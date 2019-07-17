import * as go from 'gojs';
import PropTypes from 'prop-types';
import React from 'react';
import { Proxy0, SK } from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

/**
 * @MustModelId
 * @NoChild
 */
//a.$q=b.V[Za("7eba17a4ca3b1a8346")][Za("78a118b7")](b.V,yk,4,4);
//a.$q=function(){return true;};
export default class SKGoJSDag extends Comp {
  static SK_COMP_NAME = 'SKGoJSDag';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,
    diagramProps: {
      allowCopy: false,
      allowHorizontalScroll: true,
      allowSelect: true,
      allowVerticalScroll: true,
      allowZoom: true,
      initialAutoScale: go.Diagram.UniformToFill,
      initialContentAlignment: go.Spot.TopCenter,
      isReadOnly: false,
      validCycle: go.Diagram.CycleNotDirected,
    },
    layoutProps: {
      angle: 90,
    },
    layoutStyle: { backgroundColor: '#f0f2f5', leftWidth: '128px' },
    keyProp: 'id',
  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    diagramContextMenus: PropTypes.array,
    diagramProps: PropTypes.object,
    layoutProps: PropTypes.object,
    layoutStyle: PropTypes.object,
    linkDataArrayId: PropTypes.string.isRequired,
    nodeContextMenus: PropTypes.array,
    nodeDataArrayId: PropTypes.string.isRequired,
    paletteNodeModels: PropTypes.array.isRequired,
    rootDivCls: PropTypes.string,
    keyProp: PropTypes.string,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKGoJSDag.SK_COMP_NAME;
    const _uniqueId = Proxy0._.uniqueId();
    this.diagramDomId = `${this.SK_COMP_NAME}_${_uniqueId}_diagramDomId`;
    this.overviewDomId = `${this.SK_COMP_NAME}_${_uniqueId}_overviewDomId`;
    this.paletteDomId = `${this.SK_COMP_NAME}_${_uniqueId}_paletteDomId`;
    this.nodeSelectionHandler = node => {
      //node.data[this.props.keyProp] always equals node.key
      if (node.data[this.props.keyProp]) {
        this.diagram.model.commit(m => {
          m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) + (node.isSelected ? 10 : -10));
        }, `selectionChanged ${node}`);

        if (this.getModelId() && node.key > 0) {
          let selectedKeys = this.m2n();
          if (node.isSelected) {
            this.n2m([...selectedKeys, node.key]);
          } else {
            const nodeIndexToRemove = selectedKeys.findIndex(key => key === node.key);
            if (nodeIndexToRemove === -1) {
              return;
            }
            this.n2m([...selectedKeys.slice(0, nodeIndexToRemove), ...selectedKeys.slice(nodeIndexToRemove + 1)]);
          }
        }
      }
    };
  }

  componentDidMount() {
    super.componentDidMount();
    let that = this;
    let diagramProps = SK.extends(true, {}, SKGoJSDag.defaultProps.diagramProps, that.props.diagramProps);
    let layoutProps = SK.extends(true, {}, SKGoJSDag.defaultProps.layoutProps, that.props.layoutProps);

    that.diagram = go.GraphObject.make(go.Diagram, that.diagramDomId, { ...diagramProps, layout: go.GraphObject.make(go.TreeLayout, layoutProps) });
    if (that.props.diagramContextMenus) {
      that.diagram.contextMenu = go.GraphObject.make('ContextMenu',
        that.props.diagramContextMenus.map((menuCfg) => {
          return go.GraphObject.make('ContextMenuButton', { click: menuCfg.click }, go.GraphObject.make(go.TextBlock, { margin: 6, alignment: go.Spot.Left, text: menuCfg.text }));
        }),
      );
    }

    that.diagram.nodeTemplate = go.GraphObject.make(go.Node, 'Spot', {
        mouseEnter: (e, node) => {
          if (node.data[that.props.keyProp]) {
            that.diagram.model.commit(m => {
              m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) + 1);
            }, `mouseEnter ${node}`);
          }
        },
        mouseLeave: (e, node) => {
          if (node.data[that.props.keyProp]) {
            that.diagram.model.commit(m => {
              m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) - 1);
            }, `mouseLeave ${node}`);
          }
        },
        selectionAdorned: false,
        selectionChanged: that.nodeSelectionHandler,
      },
      go.GraphObject.make(go.Panel, 'Auto',
        go.GraphObject.make(go.Shape, 'RoundedRectangle', { fill: 'rgba(255, 255, 255, 0.5)', stroke: 'rgba(215, 57, 37, 0.5)', strokeWidth: 1 },
          new go.Binding('fill', 'mouseSelected', (v, n) => {
            return SK.s4n(v) >= 1 || n.isSelected
              ? 'rgb(255, 255, 255)'
              : 'rgba(255, 255, 255, 0.5)';
          }),
          new go.Binding('stroke', 'mouseSelected', (v, n) => {
            return SK.s4n(v) >= 10 || n.isSelected
              ? 'rgb(215, 57, 37)'
              : 'rgba(215, 57, 37, 0.5)';
          }),
        ),
        go.GraphObject.make(go.Panel, 'Horizontal',
          go.GraphObject.make(go.Picture, { maxSize: new go.Size(16, 16), width: 16 },
            new go.Binding('source', 'type', (v, n) => {
              return `/png/${v}.png`;
            }),
          ),
          go.GraphObject.make(go.TextBlock, { margin: 6, editable: true },
            new go.Binding('text').makeTwoWay(),
          ),
          go.GraphObject.make(go.Picture, { maxSize: new go.Size(16, 16), width: 16 },
            new go.Binding('source', 'status', (v, n) => {
              return `/png/${v}.png`;
            }),
          ),
        ),
      ),
      // output port
      go.GraphObject.make(go.Panel, 'Auto', { alignment: go.Spot.Bottom, portId: 'from', fromLinkable: true, cursor: 'pointer' },
        go.GraphObject.make(go.Shape, 'Circle', { width: 6, height: 6, fill: 'white', stroke: 'gray' })),
      // input port
      go.GraphObject.make(go.Panel, 'Auto', { alignment: go.Spot.Top, portId: 'to', toLinkable: true },
        go.GraphObject.make(go.Shape, 'Circle', { width: 6, height: 6, fill: 'white', stroke: 'gray' })),
      (that.props.nodeContextMenus ? {
        contextMenu: go.GraphObject.make('ContextMenu',
          that.props.nodeContextMenus.map((menuCfg) => {
            return menuCfg.divider ? go.GraphObject.make(go.Shape, 'LineH', { strokeWidth: 1, height: 1, stretch: go.GraphObject.Horizontal })
              : go.GraphObject.make('ContextMenuButton', { click: menuCfg.click }, go.GraphObject.make(go.TextBlock, { margin: 6, alignment: go.Spot.Left, text: menuCfg.text }),
              );
          }),
        ),
      } : {}),
    );
    that.diagram.linkTemplate = go.GraphObject.make(go.Link,
      {
        curve: go.Link.Bezier,
        fromEndSegmentLength: 30,
        toEndSegmentLength: 30,
      },
      go.GraphObject.make(go.Shape, { stroke: '#787878', strokeWidth: 1 }),
      go.GraphObject.make(go.Shape, { toArrow: 'Standard', fill: '#787878', stroke: null, strokeWidth: 1 }),
    );
    that.palette = go.GraphObject.make(go.Palette, that.paletteDomId, {
      allowCopy: true,
      allowHorizontalScroll: true,
      allowSelect: true,
      allowVerticalScroll: true,
      allowZoom: false,
      autoScale: go.Diagram.UniformToFill,
      contentAlignment: go.Spot.TopCenter,
      initialContentAlignment: go.Spot.TopCenter,

      nodeTemplate: go.GraphObject.make(go.Node, 'Spot', { selectionAdorned: false, selectionChanged: that.nodeSelectionHandler },
        go.GraphObject.make(go.Panel, 'Auto',
          go.GraphObject.make(go.Shape, 'RoundedRectangle', { fill: 'rgba(255, 255, 255, 0.5)', stroke: 'rgba(215, 57, 37, 0.5)', strokeWidth: 1 }),
          go.GraphObject.make(go.Panel, 'Horizontal', go.GraphObject.make(go.Picture, { maxSize: new go.Size(16, 16), width: 16 },
            new go.Binding('source', 'type', (v, n) => {
              return `/png/${v}.png`;
            }),
            ),
            go.GraphObject.make(go.TextBlock, { margin: 6, editable: true },
              new go.Binding('text'),
            ),
            go.GraphObject.make(go.Picture, { maxSize: new go.Size(16, 16), width: 16 },
              new go.Binding('source', 'status', (v, n) => {
                return `/png/${v}.png`;
              }),
            ),
          ),
        ),
      ),
      model: go.GraphObject.make(go.GraphLinksModel, { copiesKey: false, nodeKeyProperty: that.props.keyProp, nodeDataArray: that.props.paletteNodeModels }),
    });
    that.overview = go.GraphObject.make(go.Overview, that.overviewDomId, {
      observed: that.diagram,
      contentAlignment: go.Spot.Center,
    });
    that.diagram.toolManager.linkingTool.isValidLink = (fn, fp, tn, tp) => {
      return (
        that.diagram.toolManager.linkingTool.isValidCycle(fn, tn) &&
        that.diagram.model.linkDataArray.find(ele => {
          return ele.from === fn.data[that.props.keyProp] && ele.to === tn.data[that.props.keyProp];
        }) === undefined
      );
    };
    that.diagram.model = go.GraphObject.make(go.GraphLinksModel, {
      linkDataArray: that.skModel().skVal(that.props.linkDataArrayId),
      nodeKeyProperty: that.props.keyProp,
      nodeDataArray: that.skModel().skVal(that.props.nodeDataArrayId),
    });
    that.diagram.model.copiesKey = false;
    that.diagram.model.makeUniqueKeyFunction = (model, objectData) => {
      return SK.uuidShort();
    };
    //https://gojs.net/latest/intro/legends.html#StaticParts
    //layerName: Grid -> Background -> XXX -> Foreground -> Adornment -> Tool
    that.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(that.diagram.div.offsetWidth - 40, that.diagram.div.offsetHeight - 160);
        },
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            that.diagram.layoutDiagram(true);
          },
        },
        go.GraphObject.make(go.TextBlock, '㊣'),
      ),
      ),
    );
    that.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(that.diagram.div.offsetWidth - 40, that.diagram.div.offsetHeight - 130);
        },
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            that.diagram.zoomToFit();
          },
        },
        go.GraphObject.make(go.TextBlock, '▣'),
      ),
      ),
    );
    that.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(that.diagram.div.offsetWidth - 40, that.diagram.div.offsetHeight - 100);
        },
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            that.diagram.commandHandler.increaseZoom();
          },
        },
        go.GraphObject.make(go.TextBlock, '+'),
      ),
      ),
    );
    that.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(that.diagram.div.offsetWidth - 40, that.diagram.div.offsetHeight - 70);
        },
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            that.diagram.commandHandler.decreaseZoom();
          },
        },
        go.GraphObject.make(go.TextBlock, '-'),
      ),
      ),
    );
    that.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(that.diagram.div.offsetWidth - 40, that.diagram.div.offsetHeight - 40);
        },
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            that.diagram.makeImageData({
              background: 'white',
              returnType: 'blob',
              scale: 1,
              callback: blob => {
                let url = window.URL.createObjectURL(blob);
                let filename = 'sql.png';

                var a = document.createElement('a');
                a.style = 'display: none';
                a.href = url;
                a.download = filename;

                // IE 11
                if (window.navigator.msSaveBlob !== undefined) {
                  window.navigator.msSaveBlob(blob, filename);
                  return;
                }

                document.body.appendChild(a);
                requestAnimationFrame(function() {
                  a.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                });
              },
            });
          },
        },
        go.GraphObject.make(go.TextBlock, '↓'),
      ),
      ),
    );
    that.diagram.addDiagramListener('ViewportBoundsChanged', e => {
      e.diagram.commit(function(dia) {
        dia.parts.each(function(part) {
          if (part._viewPosition) {
            part.position = dia.transformViewToDoc(part._viewPosition());
            part.scale = 1 / dia.scale;
          }
        });
      }, 'fix Parts');
    });
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.diagram.startTransaction();
    this.diagram.updateAllRelationshipsFromData();
    this.diagram.updateAllTargetBindings();
    this.diagram.commitTransaction('updated');
  }

  componentWillUnmount() {
    this.diagram.clear();
  }

  render() {
    const { compTag: CompTag, rootDivCls } = this.props;
    let layoutStyle = SK.extends(true, {}, SKGoJSDag.defaultProps.layoutStyle, this.props.layoutStyle);

    return (
      <CompTag className={rootDivCls} style={{ display: 'flex', flexFlow: 'row' }}>
        <div style={{ display: 'flex', flexFlow: 'column', width: layoutStyle.leftWidth }}>
          <div id={this.paletteDomId} style={{ backgroundColor: layoutStyle.backgroundColor, flex: 'auto' }}/>
          <div style={{ height: '1px' }}/>
          <div id={this.overviewDomId} style={{ backgroundColor: layoutStyle.backgroundColor, height: layoutStyle.leftWidth }}/>
        </div>
        <div style={{ width: '1px' }}/>
        <div id={this.diagramDomId} style={{ backgroundColor: layoutStyle.backgroundColor, flex: 'auto' }}/>
      </CompTag>
    );
  }
}
