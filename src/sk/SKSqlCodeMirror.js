import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, Proxy0, SK} from 'sk-js';
import sqlFormatter from 'sql-formatter';
import Comp from '../Comp';
import CodeMirror from '../3/Codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/display/fullscreen.css';
import 'codemirror/addon/display/fullscreen';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

CodeMirror.defaultProps = SK.extends(true, {}, {}, CodeMirror.defaultProps, {});

CodeMirror.propTypes = SK.extends(true, {}, {}, CodeMirror.propTypes, {});

CodeMirror.NON_SK_COMP_NAME = 'SqlCodeMirror';

/**
 * @MustModelId
 */
export default class SKSqlCodeMirror extends Comp {
  static SK_COMP_NAME = 'SKSqlCodeMirror';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, CodeMirror.defaultProps, {
    ksCompTag: CodeMirror,
    options: {
      autofocus: true,
      extraKeys: {
        'Alt-/': 'autocomplete',
        'Ctrl-/': 'toggleComment',
      },
      hintOptions: {
        tables: {
          table_example: ['column_example'],
        },
      },
      indentWithTabs: true,
      lineNumbers: true,
      matchBrackets: true,
      mode: 'text/x-sql',
      placeholder: Mesgs.get('Please_input'),
      smartIndent: true,
    },
  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, CodeMirror.propTypes, {
    formatId: PropTypes.string,
    hintOptionsId: PropTypes.string,
    optionsId: PropTypes.string,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSqlCodeMirror.SK_COMP_NAME;
    this.handleChange = (value) => {
      if (this.props.onChange && Proxy0._.isFunction(this.props.onChange)) {
        this.props.onChange(value);
      } else {
        this.n2m(value);
      }
    };
    this.handleFormat = () => {
      let selectedCode = this.codeMirrorDomRef.codeMirror.getSelection();
      if (selectedCode) {
        this.codeMirrorDomRef.codeMirror.replaceSelection(sqlFormatter.format(selectedCode), 'around');
      } else {
        this.skVal(sqlFormatter.format(this.skVal()));
      }
    };
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.hintOptionsId);
    this.model().addIdChangedListener(this.props.formatId, this.handleFormat);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.hintOptionsId);
    this.model().rmvIdChangedListener(this.props.formatId, this.handleFormat);
  }

  render() {
    const {ksCompTag: KsCompTag} = this.props;
    //TODO
    //this.skBfo(Comp.SK_PROPS.PREVIEW) ? {readOnly: true} : {}
    let options = SK.extends(true, {}, SKSqlCodeMirror.defaultProps.options, this.props.options, this.props.optionsId ? this.model().skVal(this.props.optionsId) : {});
    options = this.props.hintOptionsId ? SK.extends(true, {}, options, {hintOptions: this.model().skVal(this.props.hintOptionsId)}) : options;

    return (
      <KsCompTag {...this.transProps2Self(KsCompTag)} onChange={this.handleChange} options={options}
                 ref={refNode => this.codeMirrorDomRef = refNode} value={this.skVal()}>
        {this.transProps2Child()}
      </KsCompTag>
    );
  }
}
