import React from 'react';
import { Proxy0 } from 'sk-js';

export default class Reacts {
  static EVENT = {
    /*Clipboard*/
    onCopy: 'onCopy',
    onCut: 'onCut',
    onPaste: 'onPaste',
    /*Composition*/
    onCompositionEnd: 'onCompositionEnd',
    onCompositionStart: 'onCompositionStart',
    onCompositionUpdate: 'onCompositionUpdate',
    /*Keyboard*/
    onKeyDown: 'onKeyDown',
    onKeyPress: 'onKeyPress',
    onKeyUp: 'onKeyUp',
    /*Focus*/
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    /*Form*/
    onChange: 'onChange',
    onInput: 'onInput',
    onSubmit: 'onSubmit',
    /*Mouse*/
    onClick: 'onClick',
    onContextMenu: 'onContextMenu',
    onDoubleClick: 'onDoubleClick',
    onDrag: 'onDrag',
    onDragEnd: 'onDragEnd',
    onDragEnter: 'onDragEnter',
    onDragExit: 'onDragExit',
    onDragLeave: 'onDragLeave',
    onDragOver: 'onDragOver',
    onDragStart: 'onDragStart',
    onDrop: 'onDrop',
    onMouseDown: 'onMouseDown',
    onMouseEnter: 'onMouseEnter',
    onMouseLeave: 'onMouseLeave',
    onMouseMove: 'onMouseMove',
    onMouseOut: 'onMouseOut',
    onMouseOver: 'onMouseOver',
    onMouseUp: 'onMouseUp',
    /*Selection*/
    onSelect: 'onSelect',
    /*Touch*/
    onTouchCancel: 'onTouchCancel',
    onTouchEnd: 'onTouchEnd',
    onTouchMove: 'onTouchMove',
    onTouchStart: 'onTouchStart',
    /*UI*/
    onScroll: 'onScroll',
    /*Wheel*/
    onWheel: 'onWheel',
    /*Media*/
    onAbort: 'onAbort',
    onCanPlay: 'onCanPlay',
    onCanPlayThrough: 'onCanPlayThrough',
    onDurationChange: 'onDurationChange',
    onEmptied: 'onEmptied',
    onEncrypted: 'onEncrypted',
    onEnded: 'onEnded',
    onError: 'onError',
    onLoadedData: 'onLoadedData',
    onLoadedMetadata: 'onLoadedMetadata',
    onLoadStart: 'onLoadStart',
    onPause: 'onPause',
    onPlay: 'onPlay',
    onPlaying: 'onPlaying',
    onProgress: 'onProgress',
    onRateChange: 'onRateChange',
    onSeeked: 'onSeeked',
    onSeeking: 'onSeeking',
    onStalled: 'onStalled',
    onSuspend: 'onSuspend',
    onTimeUpdate: 'onTimeUpdate',
    onVolumeChange: 'onVolumeChange',
    onWaiting: 'onWaiting',
    /*Image*/
    onLoad: 'onLoad',
    // 'onError': 'onError',
    /*Animation*/
    onAnimationStart: 'onAnimationStart',
    onAnimationEnd: 'onAnimationEnd',
    onAnimationIteration: 'onAnimationIteration',
    /*Transition*/
    onTransitionEnd: 'onTransitionEnd',
  };
  static PROP = {
    key: 'key',
    /*HTML*/
    accept: 'accept',
    acceptCharset: 'acceptCharset',
    accessKey: 'accessKey',
    action: 'action',
    allowFullScreen: 'allowFullScreen',
    allowTransparency: 'allowTransparency',
    alt: 'alt',
    async: 'async',
    autoComplete: 'autoComplete',
    autoFocus: 'autoFocus',
    autoPlay: 'autoPlay',
    capture: 'capture',
    cellPadding: 'cellPadding',
    cellSpacing: 'cellSpacing',
    challenge: 'challenge',
    charSet: 'charSet',
    checked: 'checked',
    cite: 'cite',
    classID: 'classID',
    className: 'className',
    cols: 'cols',
    colSpan: 'colSpan',
    content: 'content',
    contentEditable: 'contentEditable',
    contextMenu: 'contextMenu',
    controls: 'controls',
    coords: 'coords',
    crossOrigin: 'crossOrigin',
    data: 'data',
    dateTime: 'dateTime',
    default: 'default',
    defer: 'defer',
    dir: 'dir',
    disabled: 'disabled',
    download: 'download',
    draggable: 'draggable',
    encType: 'encType',
    form: 'form',
    formAction: 'formAction',
    formEncType: 'formEncType',
    formMethod: 'formMethod',
    formNoValidate: 'formNoValidate',
    formTarget: 'formTarget',
    frameBorder: 'frameBorder',
    headers: 'headers',
    height: 'height',
    hidden: 'hidden',
    high: 'high',
    href: 'href',
    hrefLang: 'hrefLang',
    htmlFor: 'htmlFor',
    httpEquiv: 'httpEquiv',
    icon: 'icon',
    id: 'id',
    inputMode: 'inputMode',
    integrity: 'integrity',
    is: 'is',
    keyParams: 'keyParams',
    keyType: 'keyType',
    kind: 'kind',
    label: 'label',
    lang: 'lang',
    list: 'list',
    loop: 'loop',
    low: 'low',
    manifest: 'manifest',
    marginHeight: 'marginHeight',
    marginWidth: 'marginWidth',
    max: 'max',
    maxLength: 'maxLength',
    media: 'media',
    mediaGroup: 'mediaGroup',
    method: 'method',
    min: 'min',
    minLength: 'minLength',
    multiple: 'multiple',
    muted: 'muted',
    name: 'name',
    noValidate: 'noValidate',
    nonce: 'nonce',
    open: 'open',
    optimum: 'optimum',
    pattern: 'pattern',
    placeholder: 'placeholder',
    poster: 'poster',
    preload: 'preload',
    profile: 'profile',
    radioGroup: 'radioGroup',
    readOnly: 'readOnly',
    rel: 'rel',
    required: 'required',
    reversed: 'reversed',
    role: 'role',
    rows: 'rows',
    rowSpan: 'rowSpan',
    sandbox: 'sandbox',
    scope: 'scope',
    scoped: 'scoped',
    scrolling: 'scrolling',
    seamless: 'seamless',
    selected: 'selected',
    shape: 'shape',
    size: 'size',
    sizes: 'sizes',
    span: 'span',
    spellCheck: 'spellCheck',
    src: 'src',
    srcDoc: 'srcDoc',
    srcLang: 'srcLang',
    srcSet: 'srcSet',
    start: 'start',
    step: 'step',
    style: 'style',
    summary: 'summary',
    tabIndex: 'tabIndex',
    target: 'target',
    title: 'title',
    type: 'type',
    useMap: 'useMap',
    value: 'value',
    width: 'width',
    wmode: 'wmode',
    wrap: 'wrap',
    /*SVG*/
    accentHeight: 'accentHeight',
    accumulate: 'accumulate',
    additive: 'additive',
    alignmentBaseline: 'alignmentBaseline',
    allowReorder: 'allowReorder',
    alphabetic: 'alphabetic',
    amplitude: 'amplitude',
    arabicForm: 'arabicForm',
    ascent: 'ascent',
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 'azimuth',
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baselineShift',
    bbox: 'bbox',
    begin: 'begin',
    bias: 'bias',
    by: 'by',
    calcMode: 'calcMode',
    capHeight: 'capHeight',
    clip: 'clip',
    clipPath: 'clipPath',
    clipPathUnits: 'clipPathUnits',
    clipRule: 'clipRule',
    colorInterpolation: 'colorInterpolation',
    colorInterpolationFilters: 'colorInterpolationFilters',
    colorProfile: 'colorProfile',
    colorRendering: 'colorRendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 'cursor',
    cx: 'cx',
    cy: 'cy',
    d: 'd',
    decelerate: 'decelerate',
    descent: 'descent',
    diffuseConstant: 'diffuseConstant',
    direction: 'direction',
    display: 'display',
    divisor: 'divisor',
    dominantBaseline: 'dominantBaseline',
    dur: 'dur',
    dx: 'dx',
    dy: 'dy',
    edgeMode: 'edgeMode',
    elevation: 'elevation',
    enableBackground: 'enableBackground',
    end: 'end',
    exponent: 'exponent',
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 'fill',
    fillOpacity: 'fillOpacity',
    fillRule: 'fillRule',
    filter: 'filter',
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'floodColor',
    floodOpacity: 'floodOpacity',
    focusable: 'focusable',
    fontFamily: 'fontFamily',
    fontSize: 'fontSize',
    fontSizeAdjust: 'fontSizeAdjust',
    fontStretch: 'fontStretch',
    fontStyle: 'fontStyle',
    fontVariant: 'fontVariant',
    fontWeight: 'fontWeight',
    format: 'format',
    from: 'from',
    fx: 'fx',
    fy: 'fy',
    g1: 'g1',
    g2: 'g2',
    glyphName: 'glyphName',
    glyphOrientationHorizontal: 'glyphOrientationHorizontal',
    glyphOrientationVertical: 'glyphOrientationVertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 'hanging',
    horizAdvX: 'horizAdvX',
    horizOriginX: 'horizOriginX',
    ideographic: 'ideographic',
    imageRendering: 'imageRendering',
    in: 'in',
    in2: 'in2',
    intercept: 'intercept',
    k: 'k',
    k1: 'k1',
    k2: 'k2',
    k3: 'k3',
    k4: 'k4',
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 'kerning',
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letterSpacing',
    lightingColor: 'lightingColor',
    limitingConeAngle: 'limitingConeAngle',
    local: 'local',
    markerEnd: 'markerEnd',
    markerHeight: 'markerHeight',
    markerMid: 'markerMid',
    markerStart: 'markerStart',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 'mask',
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 'mathematical',
    mode: 'mode',
    numOctaves: 'numOctaves',
    offset: 'offset',
    opacity: 'opacity',
    operator: 'operator',
    order: 'order',
    orient: 'orient',
    orientation: 'orientation',
    origin: 'origin',
    overflow: 'overflow',
    overlinePosition: 'overlinePosition',
    overlineThickness: 'overlineThickness',
    paintOrder: 'paintOrder',
    panose1: 'panose1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointerEvents',
    points: 'points',
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 'r',
    radius: 'radius',
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'renderingIntent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 'restart',
    result: 'result',
    rotate: 'rotate',
    rx: 'rx',
    ry: 'ry',
    scale: 'scale',
    seed: 'seed',
    shapeRendering: 'shapeRendering',
    slope: 'slope',
    spacing: 'spacing',
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 'speed',
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 'stemh',
    stemv: 'stemv',
    stitchTiles: 'stitchTiles',
    stopColor: 'stopColor',
    stopOpacity: 'stopOpacity',
    strikethroughPosition: 'strikethroughPosition',
    strikethroughThickness: 'strikethroughThickness',
    string: 'string',
    stroke: 'stroke',
    strokeDasharray: 'strokeDasharray',
    strokeDashoffset: 'strokeDashoffset',
    strokeLinecap: 'strokeLinecap',
    strokeLinejoin: 'strokeLinejoin',
    strokeMiterlimit: 'strokeMiterlimit',
    strokeOpacity: 'strokeOpacity',
    strokeWidth: 'strokeWidth',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'textAnchor',
    textDecoration: 'textDecoration',
    textLength: 'textLength',
    textRendering: 'textRendering',
    to: 'to',
    transform: 'transform',
    u1: 'u1',
    u2: 'u2',
    underlinePosition: 'underlinePosition',
    underlineThickness: 'underlineThickness',
    unicode: 'unicode',
    unicodeBidi: 'unicodeBidi',
    unicodeRange: 'unicodeRange',
    unitsPerEm: 'unitsPerEm',
    vAlphabetic: 'vAlphabetic',
    vHanging: 'vHanging',
    vIdeographic: 'vIdeographic',
    vMathematical: 'vMathematical',
    values: 'values',
    vectorEffect: 'vectorEffect',
    version: 'version',
    vertAdvY: 'vertAdvY',
    vertOriginX: 'vertOriginX',
    vertOriginY: 'vertOriginY',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 'visibility',
    widths: 'widths',
    wordSpacing: 'wordSpacing',
    writingMode: 'writingMode',
    x: 'x',
    x1: 'x1',
    x2: 'x2',
    xChannelSelector: 'xChannelSelector',
    xHeight: 'xHeight',
    xlinkActuate: 'xlinkActuate',
    xlinkArcrole: 'xlinkArcrole',
    xlinkHref: 'xlinkHref',
    xlinkRole: 'xlinkRole',
    xlinkShow: 'xlinkShow',
    xlinkTitle: 'xlinkTitle',
    xlinkType: 'xlinkType',
    xmlBase: 'xmlBase',
    xmlLang: 'xmlLang',
    xmlSpace: 'xmlSpace',
    y: 'y',
    y1: 'y1',
    y2: 'y2',
    yChannelSelector: 'yChannelSelector',
    z: 'z',
    zoomAndPan: 'zoomAndPan',
  };
  static P = Proxy0._.assign({}, Reacts.EVENT, Reacts.PROP);
  static TAG = {
    /*HTML*/
    a: 'a',
    abbr: 'abbr',
    address: 'address',
    area: 'area',
    article: 'article',
    aside: 'aside',
    audio: 'audio',
    b: 'b',
    base: 'base',
    bdi: 'bdi',
    bdo: 'bdo',
    big: 'big',
    blockquote: 'blockquote',
    body: 'body',
    br: 'br',
    button: 'button',
    canvas: 'canvas',
    caption: 'caption',
    cite: 'cite',
    code: 'code',
    col: 'col',
    colgroup: 'colgroup',
    data: 'data',
    datalist: 'datalist',
    dd: 'dd',
    del: 'del',
    details: 'details',
    dfn: 'dfn',
    dialog: 'dialog',
    div: 'div',
    dl: 'dl',
    dt: 'dt',
    em: 'em',
    embed: 'embed',
    fieldset: 'fieldset',
    figcaption: 'figcaption',
    figure: 'figure',
    footer: 'footer',
    form: 'form',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    head: 'head',
    header: 'header',
    hgroup: 'hgroup',
    hr: 'hr',
    html: 'html',
    i: 'i',
    iframe: 'iframe',
    img: 'img',
    input: 'input',
    ins: 'ins',
    kbd: 'kbd',
    keygen: 'keygen',
    label: 'label',
    legend: 'legend',
    li: 'li',
    link: 'link',
    main: 'main',
    map: 'map',
    mark: 'mark',
    menu: 'menu',
    menuitem: 'menuitem',
    meta: 'meta',
    meter: 'meter',
    nav: 'nav',
    noscript: 'noscript',
    object: 'object',
    ol: 'ol',
    optgroup: 'optgroup',
    option: 'option',
    output: 'output',
    p: 'p',
    param: 'param',
    picture: 'picture',
    pre: 'pre',
    progress: 'progress',
    q: 'q',
    rp: 'rp',
    rt: 'rt',
    ruby: 'ruby',
    s: 's',
    samp: 'samp',
    script: 'script',
    section: 'section',
    select: 'select',
    small: 'small',
    source: 'source',
    span: 'span',
    strong: 'strong',
    style: 'style',
    sub: 'sub',
    summary: 'summary',
    sup: 'sup',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    textarea: 'textarea',
    tfoot: 'tfoot',
    th: 'th',
    thead: 'thead',
    time: 'time',
    title: 'title',
    tr: 'tr',
    track: 'track',
    u: 'u',
    ul: 'ul',
    var: 'var',
    video: 'video',
    wbr: 'wbr',
    /*SVG*/
    circle: 'circle',
    clipPath: 'clipPath',
    defs: 'defs',
    ellipse: 'ellipse',
    g: 'g',
    image: 'image',
    line: 'line',
    linearGradient: 'linearGradient',
    mask: 'mask',
    path: 'path',
    pattern: 'pattern',
    polygon: 'polygon',
    polyline: 'polyline',
    radialGradient: 'radialGradient',
    rect: 'rect',
    stop: 'stop',
    svg: 'svg',
    text: 'text',
    tspan: 'tspan',
  };
  static TP = {
    'a': ['className', 'onClick', 'style', 'title'],
    'aside': ['className', 'style', 'title'],
    'br': ['className', 'style', 'title'],
    'canvas': ['className', 'style', 'title'],
    'div': ['className', 'onClick', 'style', 'title'],
    'h1': ['className', 'style', 'title'],
    'h2': ['className', 'style', 'title'],
    'h3': ['className', 'style', 'title'],
    'h4': ['className', 'style', 'title'],
    'h5': ['className', 'style', 'title'],
    'h6': ['className', 'style', 'title'],
    'p': ['className', 'onClick', 'style', 'title'],
    'span': ['className', 'onClick', 'style', 'title'],
  };

  /**
   * Count the number of 'valid components' in the Children container.
   *
   * @param {?*} children Children tree container.
   * @returns {number}
   */
  static count(children) {
    let result = 0;

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }

      result += 1;
    });

    return result;
  }

  /**
   * Safe chained function
   *
   * @param {function} funcs to chain
   * @returns {function|null}
   */
  static createChainedFunction(...funcs) {
    return funcs
      .filter(f => f !== null)
      .reduce((acc, f) => {
        if (!Proxy0._.isFunction(f)) {
          throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }

        if (acc === null) {
          return f;
        }

        return function chainedFunction(...args) {
          acc.apply(this, args);
          f.apply(this, args);
        };
      }, null);
  }

  static every(children, func, context) {
    let index = 0;
    let result = true;

    React.Children.forEach(children, child => {
      if (!result) {
        return;
      }
      if (!React.isValidElement(child)) {
        return;
      }

      if (!func.call(context, child, index += 1)) {
        result = false;
      }
    });

    return result;
  }

  /**
   * Finds children that are typically specified as `props.children`,
   * but only iterates over children that are 'valid components'.
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child with the index reflecting the position relative to 'valid components'.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for func.
   * @returns {array} of children that meet the func return statement
   */
  static filter(children, func, context) {
    let index = 0;
    const result = [];

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index += 1)) {
        result.push(child);
      }
    });

    return result;
  }

  static find(children, func, context) {
    let index = 0;
    let result;

    React.Children.forEach(children, child => {
      if (result) {
        return;
      }
      if (!React.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index += 1)) {
        result = child;
      }
    });

    return result;
  }

  /**
   * Iterates through children that are 'valid components'.
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child with the index reflecting the position relative to 'valid components'.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for context.
   */
  static forEach(children, func, context) {
    let index = 0;

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }

      func.call(context, child, index += 1);
    });
  }

  /**
   * Iterates through children that are typically specified as `props.children`,
   * but only maps over children that are 'valid components'.
   *
   * The mapFunction provided index will be normalised to the components mapped,
   * so an invalid component would not increase the index.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func.
   * @param {*} context Context for func.
   * @return {object} Object containing the ordered map of results.
   */
  static map(children, func, context) {
    let index = 0;

    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      return func.call(context, child, index += 1);
    });
  }

  static some(children, func, context) {
    let index = 0;
    let result = false;

    React.Children.forEach(children, child => {
      if (result) {
        return;
      }
      if (!React.isValidElement(child)) {
        return;
      }

      if (func.call(context, child, index += 1)) {
        result = true;
      }
    });

    return result;
  }

  static toArray(children) {
    const result = [];

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) {
        return;
      }

      result.push(child);
    });

    return result;
  }
}
