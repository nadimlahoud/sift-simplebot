(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.firstuse = global.firstuse || {})));
}(this, (function (exports) { 'use strict';

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module) {
	'use strict';
	/* eslint-disable no-unused-vars */

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
});

var index$1 = interopDefault(index);

var require$$7 = Object.freeze({
	default: index$1
});

var reactProdInvariant = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule reactProdInvariant
   * 
   */
  'use strict';

  /**
   * WARNING: DO NOT manually require this module.
   * This is a replacement for `invariant(...)` used by the error code system
   * and will _only_ be required by the corresponding babel pass.
   * It always throws.
   */

  function reactProdInvariant(code) {
    var argCount = arguments.length - 1;

    var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

    for (var argIdx = 0; argIdx < argCount; argIdx++) {
      message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
    }

    message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

    var error = new Error(message);
    error.name = 'Invariant Violation';
    error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

    throw error;
  }

  module.exports = reactProdInvariant;
});

var reactProdInvariant$1 = interopDefault(reactProdInvariant);

var require$$6 = Object.freeze({
  default: reactProdInvariant$1
});

var invariant = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  function invariant(condition, format, a, b, c, d, e, f) {
    if ("production" !== 'production') {}

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  module.exports = invariant;
});

var invariant$1 = interopDefault(invariant);

var require$$1 = Object.freeze({
  default: invariant$1
});

var PooledClass = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule PooledClass
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * Static poolers. Several custom versions for each potential number of
   * arguments. A completely generic pooler is easy to implement, but would
   * require accessing the `arguments` object. In each of these, `this` refers to
   * the Class itself, not an instance. If any others are needed, simply add them
   * here, or in their own files.
   */
  var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, copyFieldsFrom);
      return instance;
    } else {
      return new Klass(copyFieldsFrom);
    }
  };

  var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2);
      return instance;
    } else {
      return new Klass(a1, a2);
    }
  };

  var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3);
      return instance;
    } else {
      return new Klass(a1, a2, a3);
    }
  };

  var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4);
    }
  };

  var fiveArgumentPooler = function fiveArgumentPooler(a1, a2, a3, a4, a5) {
    var Klass = this;
    if (Klass.instancePool.length) {
      var instance = Klass.instancePool.pop();
      Klass.call(instance, a1, a2, a3, a4, a5);
      return instance;
    } else {
      return new Klass(a1, a2, a3, a4, a5);
    }
  };

  var standardReleaser = function standardReleaser(instance) {
    var Klass = this;
    !(instance instanceof Klass) ? _prodInvariant('25') : void 0;
    instance.destructor();
    if (Klass.instancePool.length < Klass.poolSize) {
      Klass.instancePool.push(instance);
    }
  };

  var DEFAULT_POOL_SIZE = 10;
  var DEFAULT_POOLER = oneArgumentPooler;

  /**
   * Augments `CopyConstructor` to be a poolable class, augmenting only the class
   * itself (statically) not adding any prototypical fields. Any CopyConstructor
   * you give this may have a `poolSize` property, and will look for a
   * prototypical `destructor` on instances.
   *
   * @param {Function} CopyConstructor Constructor that can be used to reset.
   * @param {Function} pooler Customizable pooler.
   */
  var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
    var NewKlass = CopyConstructor;
    NewKlass.instancePool = [];
    NewKlass.getPooled = pooler || DEFAULT_POOLER;
    if (!NewKlass.poolSize) {
      NewKlass.poolSize = DEFAULT_POOL_SIZE;
    }
    NewKlass.release = standardReleaser;
    return NewKlass;
  };

  var PooledClass = {
    addPoolingTo: addPoolingTo,
    oneArgumentPooler: oneArgumentPooler,
    twoArgumentPooler: twoArgumentPooler,
    threeArgumentPooler: threeArgumentPooler,
    fourArgumentPooler: fourArgumentPooler,
    fiveArgumentPooler: fiveArgumentPooler
  };

  module.exports = PooledClass;
});

var PooledClass$1 = interopDefault(PooledClass);

var require$$5 = Object.freeze({
  default: PooledClass$1
});

var ReactCurrentOwner = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactCurrentOwner
   */

  'use strict';

  /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */

  var ReactCurrentOwner = {

    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null

  };

  module.exports = ReactCurrentOwner;
});

var ReactCurrentOwner$1 = interopDefault(ReactCurrentOwner);

var require$$5$1 = Object.freeze({
  default: ReactCurrentOwner$1
});

var emptyFunction = createCommonjsModule(function (module) {
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;
});

var emptyFunction$1 = interopDefault(emptyFunction);

var require$$3$1 = Object.freeze({
  default: emptyFunction$1
});

var warning = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var emptyFunction = interopDefault(require$$3$1);

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction;

  if ("production" !== 'production') {}

  module.exports = warning;
});

var warning$1 = interopDefault(warning);

var require$$0$1 = Object.freeze({
  default: warning$1
});

var canDefineProperty = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule canDefineProperty
   */

  'use strict';

  var canDefineProperty = false;
  if ("production" !== 'production') {}

  module.exports = canDefineProperty;
});

var canDefineProperty$1 = interopDefault(canDefineProperty);

var require$$2 = Object.freeze({
  default: canDefineProperty$1
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ReactElement = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactElement
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var ReactCurrentOwner = interopDefault(require$$5$1);

  var warning = interopDefault(require$$0$1);
  var canDefineProperty = interopDefault(require$$2);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  // The Symbol used to tag the ReactElement type. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };

  var specialPropKeyWarningShown, specialPropRefWarningShown;

  function hasValidRef(config) {
    if ("production" !== 'production') {}
    return config.ref !== undefined;
  }

  function hasValidKey(config) {
    if ("production" !== 'production') {}
    return config.key !== undefined;
  }

  function defineKeyPropWarningGetter(props, displayName) {
    var warnAboutAccessingKey = function warnAboutAccessingKey() {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;
        void 0;
      }
    };
    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }

  function defineRefPropWarningGetter(props, displayName) {
    var warnAboutAccessingRef = function warnAboutAccessingRef() {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;
        void 0;
      }
    };
    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }

  /**
   * Factory method to create a new React element. This no longer adheres to
   * the class pattern, so do not use new to call it. Also, no instanceof check
   * will work. Instead test $$typeof field against Symbol.for('react.element') to check
   * if something is a React Element.
   *
   * @param {*} type
   * @param {*} key
   * @param {string|object} ref
   * @param {*} self A *temporary* helper to detect places where `this` is
   * different from the `owner` when React.createElement is called, so that we
   * can warn. We want to get rid of owner and replace string `ref`s with arrow
   * functions, and as long as `this` and owner are the same, there will be no
   * change in behavior.
   * @param {*} source An annotation object (added by a transpiler or otherwise)
   * indicating filename, line number, and/or other information.
   * @param {*} owner
   * @param {*} props
   * @internal
   */
  var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
    var element = {
      // This tag allow us to uniquely identify this as a React Element
      $$typeof: REACT_ELEMENT_TYPE,

      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,

      // Record the component responsible for creating this element.
      _owner: owner
    };

    if ("production" !== 'production') {}

    return element;
  };

  /**
   * Create and return a new ReactElement of the given type.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
   */
  ReactElement.createElement = function (type, config, children) {
    var propName;

    // Reserved names are extracted
    var props = {};

    var key = null;
    var ref = null;
    var self = null;
    var source = null;

    if (config != null) {
      if (hasValidRef(config)) {
        ref = config.ref;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source;
      // Remaining properties are added to a new props object
      for (propName in config) {
        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }

    // Resolve default props
    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;
      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }
    if ("production" !== 'production') {}
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  };

  /**
   * Return a function that produces ReactElements of a given type.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
   */
  ReactElement.createFactory = function (type) {
    var factory = ReactElement.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    // Legacy hook TODO: Warn if this is accessed
    factory.type = type;
    return factory;
  };

  ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

    return newElement;
  };

  /**
   * Clone and return a new ReactElement using element as the starting point.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
   */
  ReactElement.cloneElement = function (element, config, children) {
    var propName;

    // Original props are copied
    var props = _assign({}, element.props);

    // Reserved names are extracted
    var key = element.key;
    var ref = element.ref;
    // Self is preserved since the owner is preserved.
    var self = element._self;
    // Source is preserved since cloneElement is unlikely to be targeted by a
    // transpiler, and the original source is probably a better indicator of the
    // true owner.
    var source = element._source;

    // Owner will be preserved, unless ref is overridden
    var owner = element._owner;

    if (config != null) {
      if (hasValidRef(config)) {
        // Silently steal the ref from the parent.
        ref = config.ref;
        owner = ReactCurrentOwner.current;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      // Remaining properties override existing props
      var defaultProps;
      if (element.type && element.type.defaultProps) {
        defaultProps = element.type.defaultProps;
      }
      for (propName in config) {
        if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          if (config[propName] === undefined && defaultProps !== undefined) {
            // Resolve default props
            props[propName] = defaultProps[propName];
          } else {
            props[propName] = config[propName];
          }
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }

    return ReactElement(element.type, key, ref, self, source, owner, props);
  };

  /**
   * Verifies the object is a ReactElement.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
   * @param {?object} object
   * @return {boolean} True if `object` is a valid component.
   * @final
   */
  ReactElement.isValidElement = function (object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

  module.exports = ReactElement;
});

var ReactElement$1 = interopDefault(ReactElement);



var require$$13 = Object.freeze({
  default: ReactElement$1
});

var getIteratorFn = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getIteratorFn
   * 
   */

  'use strict';

  /* global Symbol */

  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  module.exports = getIteratorFn;
});

var getIteratorFn$1 = interopDefault(getIteratorFn);

var require$$1$1 = Object.freeze({
  default: getIteratorFn$1
});

var KeyEscapeUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule KeyEscapeUtils
   * 
   */

  'use strict';

  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */

  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });

    return '$' + escapedString;
  }

  /**
   * Unescape and unwrap key for human-readable display
   *
   * @param {string} key to unescape.
   * @return {string} the unescaped key.
   */
  function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
      '=0': '=',
      '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

    return ('' + keySubstring).replace(unescapeRegex, function (match) {
      return unescaperLookup[match];
    });
  }

  var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
  };

  module.exports = KeyEscapeUtils;
});

var KeyEscapeUtils$1 = interopDefault(KeyEscapeUtils);

var require$$3$2 = Object.freeze({
  default: KeyEscapeUtils$1
});

var traverseAllChildren = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule traverseAllChildren
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactElement = interopDefault(require$$13);

  var getIteratorFn = interopDefault(require$$1$1);
  var invariant = interopDefault(require$$1);
  var KeyEscapeUtils = interopDefault(require$$3$2);
  var warning = interopDefault(require$$0$1);

  var SEPARATOR = '.';
  var SUBSEPARATOR = ':';

  /**
   * TODO: Test that a single child and an array with one item have the same key
   * pattern.
   */

  var didWarnAboutMaps = false;

  /**
   * Generate a key string that identifies a component within a set.
   *
   * @param {*} component A component that could contain a manual key.
   * @param {number} index Index that is used if a manual key is not provided.
   * @return {string}
   */
  function getComponentKey(component, index) {
    // Do some typechecking here since we call this blindly. We want to ensure
    // that we don't block potential future ES APIs.
    if (component && (typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component.key != null) {
      // Explicit key
      return KeyEscapeUtils.escape(component.key);
    }
    // Implicit key determined by the index in the set
    return index.toString(36);
  }

  /**
   * @param {?*} children Children tree container.
   * @param {!string} nameSoFar Name of the key path so far.
   * @param {!function} callback Callback to invoke with each child found.
   * @param {?*} traverseContext Used to pass information throughout the traversal
   * process.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

    if (type === 'undefined' || type === 'boolean') {
      // All of the above are perceived as null.
      children = null;
    }

    if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
      callback(traverseContext, children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }

    var child;
    var nextName;
    var subtreeCount = 0; // Count of children found in the current subtree.
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = getIteratorFn(children);
      if (iteratorFn) {
        var iterator = iteratorFn.call(children);
        var step;
        if (iteratorFn !== children.entries) {
          var ii = 0;
          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          if ("production" !== 'production') {}
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              child = entry[1];
              nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          }
        }
      } else if (type === 'object') {
        var addendum = '';
        if ("production" !== 'production') {}
        var childrenString = String(children);
        _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
      }
    }

    return subtreeCount;
  }

  /**
   * Traverses children that are typically specified as `props.children`, but
   * might also be specified through attributes:
   *
   * - `traverseAllChildren(this.props.children, ...)`
   * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
   *
   * The `traverseContext` is an optional argument that is passed through the
   * entire traversal. It can be used to store accumulations or anything else that
   * the callback might find relevant.
   *
   * @param {?*} children Children tree object.
   * @param {!function} callback To invoke upon traversing each child.
   * @param {?*} traverseContext Context for traversal.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }

    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }

  module.exports = traverseAllChildren;
});

var traverseAllChildren$1 = interopDefault(traverseAllChildren);



var require$$2$1 = Object.freeze({
  default: traverseAllChildren$1
});

var ReactChildren = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactChildren
   */

  'use strict';

  var PooledClass = interopDefault(require$$5);
  var ReactElement = interopDefault(require$$13);

  var emptyFunction = interopDefault(require$$3$1);
  var traverseAllChildren = interopDefault(require$$2$1);

  var twoArgumentPooler = PooledClass.twoArgumentPooler;
  var fourArgumentPooler = PooledClass.fourArgumentPooler;

  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }

  /**
   * PooledClass representing the bookkeeping associated with performing a child
   * traversal. Allows avoiding binding callbacks.
   *
   * @constructor ForEachBookKeeping
   * @param {!function} forEachFunction Function to perform traversal with.
   * @param {?*} forEachContext Context to perform context with.
   */
  function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
  }
  ForEachBookKeeping.prototype.destructor = function () {
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func;
    var context = bookKeeping.context;

    func.call(context, child, bookKeeping.count++);
  }

  /**
   * Iterates through children that are typically specified as `props.children`.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc
   * @param {*} forEachContext Context for forEachContext.
   */
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
  }

  /**
   * PooledClass representing the bookkeeping associated with performing a child
   * mapping. Allows avoiding binding callbacks.
   *
   * @constructor MapBookKeeping
   * @param {!*} mapResult Object containing the ordered map of results.
   * @param {!function} mapFunction Function to perform mapping with.
   * @param {?*} mapContext Context to perform mapping with.
   */
  function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
  }
  MapBookKeeping.prototype.destructor = function () {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result;
    var keyPrefix = bookKeeping.keyPrefix;
    var func = bookKeeping.func;
    var context = bookKeeping.context;

    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement.isValidElement(mappedChild)) {
        mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }

  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
  }

  /**
   * Maps children that are typically specified as `props.children`.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
   *
   * The provided mapFunction(child, key, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func The map function.
   * @param {*} context Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }

  function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
  }

  /**
   * Count the number of children that are typically specified as
   * `props.children`.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
   *
   * @param {?*} children Children tree container.
   * @return {number} The number of children.
   */
  function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
  }

  /**
   * Flatten a children object (typically specified as `props.children`) and
   * return an array with appropriately re-keyed children.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
   */
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }

  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
  };

  module.exports = ReactChildren;
});

var ReactChildren$1 = interopDefault(ReactChildren);

var require$$3 = Object.freeze({
  default: ReactChildren$1
});

var ReactNoopUpdateQueue = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactNoopUpdateQueue
   */

  'use strict';

  var warning = interopDefault(require$$0$1);

  function warnNoop(publicInstance, callerName) {
    if ("production" !== 'production') {}
  }

  /**
   * This is the abstract API for an update queue.
   */
  var ReactNoopUpdateQueue = {

    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted(publicInstance) {
      return false;
    },

    /**
     * Enqueue a callback that will be executed after all the pending updates
     * have processed.
     *
     * @param {ReactClass} publicInstance The instance to use as `this` context.
     * @param {?function} callback Called after state is updated.
     * @internal
     */
    enqueueCallback: function enqueueCallback(publicInstance, callback) {},

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @internal
     */
    enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
      warnNoop(publicInstance, 'forceUpdate');
    },

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @internal
     */
    enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
      warnNoop(publicInstance, 'replaceState');
    },

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @internal
     */
    enqueueSetState: function enqueueSetState(publicInstance, partialState) {
      warnNoop(publicInstance, 'setState');
    }
  };

  module.exports = ReactNoopUpdateQueue;
});

var ReactNoopUpdateQueue$1 = interopDefault(ReactNoopUpdateQueue);

var require$$5$2 = Object.freeze({
  default: ReactNoopUpdateQueue$1
});

var emptyObject = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var emptyObject = {};

  if ("production" !== 'production') {}

  module.exports = emptyObject;
});

var emptyObject$1 = interopDefault(emptyObject);

var require$$5$3 = Object.freeze({
  default: emptyObject$1
});

var ReactComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactComponent
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactNoopUpdateQueue = interopDefault(require$$5$2);

  var canDefineProperty = interopDefault(require$$2);
  var emptyObject = interopDefault(require$$5$3);
  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  /**
   * Base class helpers for the updating state of a component.
   */
  function ReactComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue;
  }

  ReactComponent.prototype.isReactComponent = {};

  /**
   * Sets a subset of the state. Always use this to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * When a function is provided to setState, it will be called at some point in
   * the future (not synchronously). It will be called with the up to date
   * component arguments (state, props, context). These values can be different
   * from this.* because your function may be called after receiveProps but before
   * shouldComponentUpdate, and this new state, props, and context will not yet be
   * assigned to this.
   *
   * @param {object|function} partialState Next partial state or function to
   *        produce next partial state to be merged with current state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  ReactComponent.prototype.setState = function (partialState, callback) {
    !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? _prodInvariant('85') : void 0;
    this.updater.enqueueSetState(this, partialState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'setState');
    }
  };

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */
  ReactComponent.prototype.forceUpdate = function (callback) {
    this.updater.enqueueForceUpdate(this);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'forceUpdate');
    }
  };

  /**
   * Deprecated APIs. These APIs used to exist on classic React classes but since
   * we would like to deprecate them, we're not going to move them over to this
   * modern base class. Instead, we define a getter that warns if it's accessed.
   */
  if ("production" !== 'production') {}

  module.exports = ReactComponent;
});

var ReactComponent$1 = interopDefault(ReactComponent);



var require$$9 = Object.freeze({
  default: ReactComponent$1
});

var ReactPureComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactPureComponent
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var ReactComponent = interopDefault(require$$9);
  var ReactNoopUpdateQueue = interopDefault(require$$5$2);

  var emptyObject = interopDefault(require$$5$3);

  /**
   * Base class helpers for the updating state of a component.
   */
  function ReactPureComponent(props, context, updater) {
    // Duplicated from ReactComponent.
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue;
  }

  function ComponentDummy() {}
  ComponentDummy.prototype = ReactComponent.prototype;
  ReactPureComponent.prototype = new ComponentDummy();
  ReactPureComponent.prototype.constructor = ReactPureComponent;
  // Avoid an extra prototype jump for these methods.
  _assign(ReactPureComponent.prototype, ReactComponent.prototype);
  ReactPureComponent.prototype.isPureReactComponent = true;

  module.exports = ReactPureComponent;
});

var ReactPureComponent$1 = interopDefault(ReactPureComponent);

var require$$8 = Object.freeze({
  default: ReactPureComponent$1
});

var keyMirror = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks static-only
   */

  'use strict';

  var invariant = interopDefault(require$$1);

  /**
   * Constructs an enumeration with keys equal to their value.
   *
   * For example:
   *
   *   var COLORS = keyMirror({blue: null, red: null});
   *   var myColor = COLORS.blue;
   *   var isColorValid = !!COLORS[myColor];
   *
   * The last line could not be performed if the values of the generated enum were
   * not equal to their keys.
   *
   *   Input:  {key1: val1, key2: val2}
   *   Output: {key1: key1, key2: key2}
   *
   * @param {object} obj
   * @return {object}
   */
  var keyMirror = function keyMirror(obj) {
    var ret = {};
    var key;
    !(obj instanceof Object && !Array.isArray(obj)) ? invariant(false) : void 0;
    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
      ret[key] = key;
    }
    return ret;
  };

  module.exports = keyMirror;
});

var keyMirror$1 = interopDefault(keyMirror);

var require$$0$2 = Object.freeze({
  default: keyMirror$1
});

var ReactPropTypeLocations = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactPropTypeLocations
   */

  'use strict';

  var keyMirror = interopDefault(require$$0$2);

  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });

  module.exports = ReactPropTypeLocations;
});

var ReactPropTypeLocations$1 = interopDefault(ReactPropTypeLocations);

var require$$7$1 = Object.freeze({
  default: ReactPropTypeLocations$1
});

var ReactPropTypeLocationNames = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactPropTypeLocationNames
   */

  'use strict';

  var ReactPropTypeLocationNames = {};

  if ("production" !== 'production') {}

  module.exports = ReactPropTypeLocationNames;
});

var ReactPropTypeLocationNames$1 = interopDefault(ReactPropTypeLocationNames);

var require$$4$1 = Object.freeze({
  default: ReactPropTypeLocationNames$1
});

var keyOf = createCommonjsModule(function (module) {
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  /**
   * Allows extraction of a minified key. Let's the build system minify keys
   * without losing the ability to dynamically use key strings as values
   * themselves. Pass in an object with a single key/val pair and it will return
   * you the string key of that single record. Suppose you want to grab the
   * value for a key 'className' inside of an object. Key/val minification may
   * have aliased that key to be 'xa12'. keyOf({className: null}) will return
   * 'xa12' in that case. Resolve keys you want to use once at startup time, then
   * reuse those resolutions.
   */

  var keyOf = function keyOf(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };

  module.exports = keyOf;
});

var keyOf$1 = interopDefault(keyOf);

var require$$0$3 = Object.freeze({
  default: keyOf$1
});

var ReactClass = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactClass
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var ReactComponent = interopDefault(require$$9);
  var ReactElement = interopDefault(require$$13);
  var ReactPropTypeLocations = interopDefault(require$$7$1);
  var ReactPropTypeLocationNames = interopDefault(require$$4$1);
  var ReactNoopUpdateQueue = interopDefault(require$$5$2);

  var emptyObject = interopDefault(require$$5$3);
  var invariant = interopDefault(require$$1);
  var keyMirror = interopDefault(require$$0$2);
  var keyOf = interopDefault(require$$0$3);
  var warning = interopDefault(require$$0$1);

  var MIXINS_KEY = keyOf({ mixins: null });

  /**
   * Policies that describe methods in `ReactClassInterface`.
   */
  var SpecPolicy = keyMirror({
    /**
     * These methods may be defined only once by the class specification or mixin.
     */
    DEFINE_ONCE: null,
    /**
     * These methods may be defined by both the class specification and mixins.
     * Subsequent definitions will be chained. These methods must return void.
     */
    DEFINE_MANY: null,
    /**
     * These methods are overriding the base class.
     */
    OVERRIDE_BASE: null,
    /**
     * These methods are similar to DEFINE_MANY, except we assume they return
     * objects. We try to merge the keys of the return values of all the mixed in
     * functions. If there is a key conflict we throw.
     */
    DEFINE_MANY_MERGED: null
  });

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {

    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: SpecPolicy.DEFINE_MANY,

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: SpecPolicy.DEFINE_MANY,

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: SpecPolicy.DEFINE_MANY,

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: SpecPolicy.DEFINE_MANY,

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: SpecPolicy.DEFINE_MANY,

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

    /**
     * @return {object}
     * @optional
     */
    getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @nosideeffects
     * @required
     */
    render: SpecPolicy.DEFINE_ONCE,

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: SpecPolicy.DEFINE_MANY,

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: SpecPolicy.DEFINE_MANY,

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: SpecPolicy.DEFINE_MANY,

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: SpecPolicy.DEFINE_MANY,

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: SpecPolicy.DEFINE_MANY,

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: SpecPolicy.OVERRIDE_BASE

  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function displayName(Constructor, _displayName) {
      Constructor.displayName = _displayName;
    },
    mixins: function mixins(Constructor, _mixins) {
      if (_mixins) {
        for (var i = 0; i < _mixins.length; i++) {
          mixSpecIntoComponent(Constructor, _mixins[i]);
        }
      }
    },
    childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
      if ("production" !== 'production') {}
      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
    },
    contextTypes: function contextTypes(Constructor, _contextTypes) {
      if ("production" !== 'production') {}
      Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
      } else {
        Constructor.getDefaultProps = _getDefaultProps;
      }
    },
    propTypes: function propTypes(Constructor, _propTypes) {
      if ("production" !== 'production') {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
    },
    statics: function statics(Constructor, _statics) {
      mixStaticSpecIntoComponent(Constructor, _statics);
    },
    autobind: function autobind() {} };

  // noop
  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an invariant so components
        // don't show up in prod but only in __DEV__
        void 0;
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? _prodInvariant('73', name) : void 0;
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? _prodInvariant('74', name) : void 0;
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if ("production" !== 'production') {}

      return;
    }

    !(typeof spec !== 'function') ? _prodInvariant('75') : void 0;
    !!ReactElement.isValidElement(spec) ? _prodInvariant('76') : void 0;

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? _prodInvariant('77', specPolicy, name) : void 0;

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if ("production" !== 'production') {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      !!isReserved ? _prodInvariant('78', name) : void 0;

      var isInherited = name in Constructor;
      !!isInherited ? _prodInvariant('79', name) : void 0;
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof(two)) === 'object') ? _prodInvariant('80') : void 0;

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        !(one[key] === undefined) ? _prodInvariant('81', key) : void 0;
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if ("production" !== 'production') {}
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {

    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function replaceState(newState, callback) {
      this.updater.enqueueReplaceState(this, newState);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'replaceState');
      }
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted() {
      return this.updater.isMounted(this);
    }
  };

  var ReactClassComponent = function ReactClassComponent() {};
  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

  /**
   * Module for creating composite components.
   *
   * @class ReactClass
   */
  var ReactClass = {

    /**
     * Creates a composite component class given a class specification.
     * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
     *
     * @param {object} spec Class specification (which must define `render`).
     * @return {function} Component constructor function.
     * @public
     */
    createClass: function createClass(spec) {
      var Constructor = function Constructor(props, context, updater) {
        // This constructor gets overridden by mocks. The argument is used
        // by mocks to assert on what gets mounted.

        if ("production" !== 'production') {}

        // Wire up auto-binding
        if (this.__reactAutoBindPairs.length) {
          bindAutoBindMethods(this);
        }

        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;

        this.state = null;

        // ReactClasses doesn't have constructors. Instead, they use the
        // getInitialState and componentWillMount methods for initialization.

        var initialState = this.getInitialState ? this.getInitialState() : null;
        if ("production" !== 'production') {}
        !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

        this.state = initialState;
      };
      Constructor.prototype = new ReactClassComponent();
      Constructor.prototype.constructor = Constructor;
      Constructor.prototype.__reactAutoBindPairs = [];

      injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

      mixSpecIntoComponent(Constructor, spec);

      // Initialize the defaultProps property after all mixins have been merged.
      if (Constructor.getDefaultProps) {
        Constructor.defaultProps = Constructor.getDefaultProps();
      }

      if ("production" !== 'production') {}

      !Constructor.prototype.render ? _prodInvariant('83') : void 0;

      if ("production" !== 'production') {}

      // Reduce time spent doing lookups by setting these on the prototype.
      for (var methodName in ReactClassInterface) {
        if (!Constructor.prototype[methodName]) {
          Constructor.prototype[methodName] = null;
        }
      }

      return Constructor;
    },

    injection: {
      injectMixin: function injectMixin(mixin) {
        injectedMixins.push(mixin);
      }
    }

  };

  module.exports = ReactClass;
});

var ReactClass$1 = interopDefault(ReactClass);



var require$$4 = Object.freeze({
  default: ReactClass$1
});

var ReactComponentTreeHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactComponentTreeHook
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactCurrentOwner = interopDefault(require$$5$1);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  function isNative(fn) {
    // Based on isNative() from Lodash
    var funcToString = Function.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var reIsNative = RegExp('^' + funcToString
    // Take an example native function source for comparison
    .call(hasOwnProperty)
    // Strip regex characters so we can use it for regex
    .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
    // Remove hasOwnProperty from the template to make it generic
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    try {
      var source = funcToString.call(fn);
      return reIsNative.test(source);
    } catch (err) {
      return false;
    }
  }

  var canUseCollections =
  // Array.from
  typeof Array.from === 'function' &&
  // Map
  typeof Map === 'function' && isNative(Map) &&
  // Map.prototype.keys
  Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
  // Set
  typeof Set === 'function' && isNative(Set) &&
  // Set.prototype.keys
  Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

  var itemMap;
  var rootIDSet;

  var itemByKey;
  var rootByKey;

  if (canUseCollections) {
    itemMap = new Map();
    rootIDSet = new Set();
  } else {
    itemByKey = {};
    rootByKey = {};
  }

  var unmountedIDs = [];

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  function getKeyFromID(id) {
    return '.' + id;
  }
  function getIDFromKey(key) {
    return parseInt(key.substr(1), 10);
  }

  function get(id) {
    if (canUseCollections) {
      return itemMap.get(id);
    } else {
      var key = getKeyFromID(id);
      return itemByKey[key];
    }
  }

  function remove(id) {
    if (canUseCollections) {
      itemMap['delete'](id);
    } else {
      var key = getKeyFromID(id);
      delete itemByKey[key];
    }
  }

  function create(id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };

    if (canUseCollections) {
      itemMap.set(id, item);
    } else {
      var key = getKeyFromID(id);
      itemByKey[key] = item;
    }
  }

  function addRoot(id) {
    if (canUseCollections) {
      rootIDSet.add(id);
    } else {
      var key = getKeyFromID(id);
      rootByKey[key] = true;
    }
  }

  function removeRoot(id) {
    if (canUseCollections) {
      rootIDSet['delete'](id);
    } else {
      var key = getKeyFromID(id);
      delete rootByKey[key];
    }
  }

  function getRegisteredIDs() {
    if (canUseCollections) {
      return Array.from(itemMap.keys());
    } else {
      return Object.keys(itemByKey).map(getIDFromKey);
    }
  }

  function getRootIDs() {
    if (canUseCollections) {
      return Array.from(rootIDSet.keys());
    } else {
      return Object.keys(rootByKey).map(getIDFromKey);
    }
  }

  function purgeDeep(id) {
    var item = get(id);
    if (item) {
      var childIDs = item.childIDs;

      remove(id);
      childIDs.forEach(purgeDeep);
    }
  }

  function describeComponentFrame(name, source, ownerName) {
    return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
  }

  function _getDisplayName(element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  }

  function describeID(id) {
    var name = ReactComponentTreeHook.getDisplayName(id);
    var element = ReactComponentTreeHook.getElement(id);
    var ownerID = ReactComponentTreeHook.getOwnerID(id);
    var ownerName;
    if (ownerID) {
      ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
    }
    void 0;
    return describeComponentFrame(name, element && element._source, ownerName);
  }

  var ReactComponentTreeHook = {
    onSetChildren: function onSetChildren(id, nextChildIDs) {
      var item = get(id);
      item.childIDs = nextChildIDs;

      for (var i = 0; i < nextChildIDs.length; i++) {
        var nextChildID = nextChildIDs[i];
        var nextChild = get(nextChildID);
        !nextChild ? _prodInvariant('140') : void 0;
        !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ? _prodInvariant('141') : void 0;
        !nextChild.isMounted ? _prodInvariant('71') : void 0;
        if (nextChild.parentID == null) {
          nextChild.parentID = id;
          // TODO: This shouldn't be necessary but mounting a new root during in
          // componentWillMount currently causes not-yet-mounted components to
          // be purged from our tree data so their parent ID is missing.
        }
        !(nextChild.parentID === id) ? _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
      }
    },
    onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
      create(id, element, parentID);
    },
    onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
      var item = get(id);
      if (!item || !item.isMounted) {
        // We may end up here as a result of setState() in componentWillUnmount().
        // In this case, ignore the element.
        return;
      }
      item.element = element;
    },
    onMountComponent: function onMountComponent(id) {
      var item = get(id);
      item.isMounted = true;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        addRoot(id);
      }
    },
    onUpdateComponent: function onUpdateComponent(id) {
      var item = get(id);
      if (!item || !item.isMounted) {
        // We may end up here as a result of setState() in componentWillUnmount().
        // In this case, ignore the element.
        return;
      }
      item.updateCount++;
    },
    onUnmountComponent: function onUnmountComponent(id) {
      var item = get(id);
      if (item) {
        // We need to check if it exists.
        // `item` might not exist if it is inside an error boundary, and a sibling
        // error boundary child threw while mounting. Then this instance never
        // got a chance to mount, but it still gets an unmounting event during
        // the error boundary cleanup.
        item.isMounted = false;
        var isRoot = item.parentID === 0;
        if (isRoot) {
          removeRoot(id);
        }
      }
      unmountedIDs.push(id);
    },
    purgeUnmountedComponents: function purgeUnmountedComponents() {
      if (ReactComponentTreeHook._preventPurging) {
        // Should only be used for testing.
        return;
      }

      for (var i = 0; i < unmountedIDs.length; i++) {
        var id = unmountedIDs[i];
        purgeDeep(id);
      }
      unmountedIDs.length = 0;
    },
    isMounted: function isMounted(id) {
      var item = get(id);
      return item ? item.isMounted : false;
    },
    getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
      var info = '';
      if (topElement) {
        var type = topElement.type;
        var name = typeof type === 'function' ? type.displayName || type.name : type;
        var owner = topElement._owner;
        info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
      }

      var currentOwner = ReactCurrentOwner.current;
      var id = currentOwner && currentOwner._debugID;

      info += ReactComponentTreeHook.getStackAddendumByID(id);
      return info;
    },
    getStackAddendumByID: function getStackAddendumByID(id) {
      var info = '';
      while (id) {
        info += describeID(id);
        id = ReactComponentTreeHook.getParentID(id);
      }
      return info;
    },
    getChildIDs: function getChildIDs(id) {
      var item = get(id);
      return item ? item.childIDs : [];
    },
    getDisplayName: function getDisplayName(id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (!element) {
        return null;
      }
      return _getDisplayName(element);
    },
    getElement: function getElement(id) {
      var item = get(id);
      return item ? item.element : null;
    },
    getOwnerID: function getOwnerID(id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (!element || !element._owner) {
        return null;
      }
      return element._owner._debugID;
    },
    getParentID: function getParentID(id) {
      var item = get(id);
      return item ? item.parentID : null;
    },
    getSource: function getSource(id) {
      var item = get(id);
      var element = item ? item.element : null;
      var source = element != null ? element._source : null;
      return source;
    },
    getText: function getText(id) {
      var element = ReactComponentTreeHook.getElement(id);
      if (typeof element === 'string') {
        return element;
      } else if (typeof element === 'number') {
        return '' + element;
      } else {
        return null;
      }
    },
    getUpdateCount: function getUpdateCount(id) {
      var item = get(id);
      return item ? item.updateCount : 0;
    },

    getRegisteredIDs: getRegisteredIDs,

    getRootIDs: getRootIDs
  };

  module.exports = ReactComponentTreeHook;
});

var ReactComponentTreeHook$1 = interopDefault(ReactComponentTreeHook);



var require$$1$2 = Object.freeze({
  default: ReactComponentTreeHook$1
});

var ReactPropTypesSecret = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactPropTypesSecret
   */

  'use strict';

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;
});

var ReactPropTypesSecret$1 = interopDefault(ReactPropTypesSecret);

var require$$2$2 = Object.freeze({
  default: ReactPropTypesSecret$1
});

var checkReactTypeSpec = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule checkReactTypeSpec
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactPropTypeLocationNames = interopDefault(require$$4$1);
  var ReactPropTypesSecret = interopDefault(require$$2$2);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  var ReactComponentTreeHook;

  if (typeof process !== 'undefined' && process.env && "production" === 'test') {
    // Temporary hack.
    // Inline requires don't work well with Jest:
    // https://github.com/facebook/react/issues/7240
    // Remove the inline requires when we don't need them anymore:
    // https://github.com/facebook/react/pull/7178
    ReactComponentTreeHook = interopDefault(require$$1$2);
  }

  var loggedTypeFailures = {};

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?object} element The React element that is being type-checked
   * @param {?number} debugID The React component instance that is being type-checked
   * @private
   */
  function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          !(typeof typeSpecs[typeSpecName] === 'function') ? _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        void 0;
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var componentStackInfo = '';

          if ("production" !== 'production') {}

          void 0;
        }
      }
    }
  }

  module.exports = checkReactTypeSpec;
});

var checkReactTypeSpec$1 = interopDefault(checkReactTypeSpec);



var require$$5$4 = Object.freeze({
  default: checkReactTypeSpec$1
});

var ReactElementValidator = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactElementValidator
   */

  /**
   * ReactElementValidator provides a wrapper around a element factory
   * which validates the props passed to the element. This is intended to be
   * used only in DEV and could be replaced by a static type checker for languages
   * that support it.
   */

  'use strict';

  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactComponentTreeHook = interopDefault(require$$1$2);
  var ReactElement = interopDefault(require$$13);
  var ReactPropTypeLocations = interopDefault(require$$7$1);

  var checkReactTypeSpec = interopDefault(require$$5$4);

  var canDefineProperty = interopDefault(require$$2);
  var getIteratorFn = interopDefault(require$$1$1);
  var warning = interopDefault(require$$0$1);

  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner.current) {
      var name = ReactCurrentOwner.current.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  var ownerHasKeyUseWarning = {};

  function getCurrentComponentErrorInfo(parentType) {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      if (parentName) {
        info = ' Check the top-level render call using <' + parentName + '>.';
      }
    }
    return info;
  }

  /**
   * Warn if the element doesn't have an explicit key assigned to it.
   * This element is in an array. The array could grow and shrink or be
   * reordered. All children that haven't already been validated are required to
   * have a "key" property assigned to it. Error statuses are cached so a warning
   * will only be shown once.
   *
   * @internal
   * @param {ReactElement} element Element that requires a key.
   * @param {*} parentType element's parent's type.
   */
  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }
    element._store.validated = true;

    var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
    if (memoizer[currentComponentErrorInfo]) {
      return;
    }
    memoizer[currentComponentErrorInfo] = true;

    // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.
    var childOwner = '';
    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
      // Give the component that originally created this child.
      childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
    }

    void 0;
  }

  /**
   * Ensure that every element either is passed in a static location, in an
   * array with an explicit keys property defined, or in an object literal
   * with valid key property.
   *
   * @internal
   * @param {ReactNode} node Statically passed child of any type.
   * @param {*} parentType node's parent's type.
   */
  function validateChildKeys(node, parentType) {
    if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
      return;
    }
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];
        if (ReactElement.isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (ReactElement.isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);
      // Entry iterators provide implicit keys.
      if (iteratorFn) {
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;
          while (!(step = iterator.next()).done) {
            if (ReactElement.isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }

  /**
   * Given an element, validate that its props follow the propTypes definition,
   * provided by the type.
   *
   * @param {ReactElement} element
   */
  function validatePropTypes(element) {
    var componentClass = element.type;
    if (typeof componentClass !== 'function') {
      return;
    }
    var name = componentClass.displayName || componentClass.name;
    if (componentClass.propTypes) {
      checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
    }
    if (typeof componentClass.getDefaultProps === 'function') {
      void 0;
    }
  }

  var ReactElementValidator = {

    createElement: function createElement(type, props, children) {
      var validType = typeof type === 'string' || typeof type === 'function';
      // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.
      if (!validType) {
        void 0;
      }

      var element = ReactElement.createElement.apply(this, arguments);

      // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.
      if (element == null) {
        return element;
      }

      // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)
      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      validatePropTypes(element);

      return element;
    },

    createFactory: function createFactory(type) {
      var validatedFactory = ReactElementValidator.createElement.bind(null, type);
      // Legacy hook TODO: Warn if this is accessed
      validatedFactory.type = type;

      if ("production" !== 'production') {}

      return validatedFactory;
    },

    cloneElement: function cloneElement(element, props, children) {
      var newElement = ReactElement.cloneElement.apply(this, arguments);
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }
      validatePropTypes(newElement);
      return newElement;
    }

  };

  module.exports = ReactElementValidator;
});

interopDefault(ReactElementValidator);

var ReactDOMFactories = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMFactories
   */

  'use strict';

  var ReactElement = interopDefault(require$$13);

  /**
   * Create a factory that creates HTML tag elements.
   *
   * @private
   */
  var createDOMFactory = ReactElement.createFactory;
  if ("production" !== 'production') {}

  /**
   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
   * This is also accessible via `React.DOM`.
   *
   * @public
   */
  var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    'var': createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),

    // SVG
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan')
  };

  module.exports = ReactDOMFactories;
});

var ReactDOMFactories$1 = interopDefault(ReactDOMFactories);

var require$$6$1 = Object.freeze({
  default: ReactDOMFactories$1
});

var ReactPropTypes = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactPropTypes
   */

  'use strict';

  var ReactElement = interopDefault(require$$13);
  var ReactPropTypeLocationNames = interopDefault(require$$4$1);
  var ReactPropTypesSecret = interopDefault(require$$2$2);

  var emptyFunction = interopDefault(require$$3$1);
  var getIteratorFn = interopDefault(require$$1$1);
  var warning = interopDefault(require$$0$1);

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if ("production" !== 'production') {}
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if ("production" !== 'production') {}
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactElement.isValidElement(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      var locationName = ReactPropTypeLocationNames[location];
      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  module.exports = ReactPropTypes;
});

var ReactPropTypes$1 = interopDefault(ReactPropTypes);



var require$$4$2 = Object.freeze({
  default: ReactPropTypes$1
});

var ReactVersion = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactVersion
   */

  'use strict';

  module.exports = '15.3.2';
});

var ReactVersion$1 = interopDefault(ReactVersion);

var require$$8$1 = Object.freeze({
  default: ReactVersion$1
});

var onlyChild = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule onlyChild
   */
  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactElement = interopDefault(require$$13);

  var invariant = interopDefault(require$$1);

  /**
   * Returns the first child in a collection of children and verifies that there
   * is only one child in the collection.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
   *
   * The current implementation of this function assumes that a single child gets
   * passed without a wrapper, but the purpose of this helper function is to
   * abstract away the particular structure of children.
   *
   * @param {?object} children Child collection structure.
   * @return {ReactElement} The first and only `ReactElement` contained in the
   * structure.
   */
  function onlyChild(children) {
    !ReactElement.isValidElement(children) ? _prodInvariant('143') : void 0;
    return children;
  }

  module.exports = onlyChild;
});

var onlyChild$1 = interopDefault(onlyChild);

var require$$2$3 = Object.freeze({
  default: onlyChild$1
});

var React$1 = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule React
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var ReactChildren = interopDefault(require$$3);
  var ReactComponent = interopDefault(require$$9);
  var ReactPureComponent = interopDefault(require$$8);
  var ReactClass = interopDefault(require$$4);
  var ReactDOMFactories = interopDefault(require$$6$1);
  var ReactElement = interopDefault(require$$13);
  var ReactPropTypes = interopDefault(require$$4$2);
  var ReactVersion = interopDefault(require$$8$1);

  var onlyChild = interopDefault(require$$2$3);
  var warning = interopDefault(require$$0$1);

  var createElement = ReactElement.createElement;
  var createFactory = ReactElement.createFactory;
  var cloneElement = ReactElement.cloneElement;

  if ("production" !== 'production') {}

  var __spread = _assign;

  if ("production" !== 'production') {}

  var React = {

    // Modern

    Children: {
      map: ReactChildren.map,
      forEach: ReactChildren.forEach,
      count: ReactChildren.count,
      toArray: ReactChildren.toArray,
      only: onlyChild
    },

    Component: ReactComponent,
    PureComponent: ReactPureComponent,

    createElement: createElement,
    cloneElement: cloneElement,
    isValidElement: ReactElement.isValidElement,

    // Classic

    PropTypes: ReactPropTypes,
    createClass: ReactClass.createClass,
    createFactory: createFactory,
    createMixin: function createMixin(mixin) {
      // Currently a noop. Will be used to validate and trace mixins.
      return mixin;
    },

    // This looks DOM specific but these are actually isomorphic helpers
    // since they are just generating DOM strings.
    DOM: ReactDOMFactories,

    version: ReactVersion,

    // Deprecated hook for JSX spread, don't use this for anything.
    __spread: __spread
  };

  module.exports = React;
});

var React$2 = interopDefault(React$1);

var require$$0 = Object.freeze({
  default: React$2
});

var react = createCommonjsModule(function (module) {
  'use strict';

  module.exports = interopDefault(require$$0);
});

var React = interopDefault(react);
var Component = react.Component;
var Children = react.Children;
var createElement = react.createElement;
var PropTypes = react.PropTypes;

var DOMProperty = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DOMProperty
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  function checkMask(value, bitmask) {
    return (value & bitmask) === bitmask;
  }

  var DOMPropertyInjection = {
    /**
     * Mapping from normalized, camelcased property names to a configuration that
     * specifies how the associated DOM property should be accessed or rendered.
     */
    MUST_USE_PROPERTY: 0x1,
    HAS_BOOLEAN_VALUE: 0x4,
    HAS_NUMERIC_VALUE: 0x8,
    HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
    HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

    /**
     * Inject some specialized knowledge about the DOM. This takes a config object
     * with the following properties:
     *
     * isCustomAttribute: function that given an attribute name will return true
     * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
     * attributes where it's impossible to enumerate all of the possible
     * attribute names,
     *
     * Properties: object mapping DOM property name to one of the
     * DOMPropertyInjection constants or null. If your attribute isn't in here,
     * it won't get written to the DOM.
     *
     * DOMAttributeNames: object mapping React attribute name to the DOM
     * attribute name. Attribute names not specified use the **lowercase**
     * normalized name.
     *
     * DOMAttributeNamespaces: object mapping React attribute name to the DOM
     * attribute namespace URL. (Attribute names not specified use no namespace.)
     *
     * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
     * Property names not specified use the normalized name.
     *
     * DOMMutationMethods: Properties that require special mutation methods. If
     * `value` is undefined, the mutation method should unset the property.
     *
     * @param {object} domPropertyConfig the config as described above.
     */
    injectDOMPropertyConfig: function injectDOMPropertyConfig(domPropertyConfig) {
      var Injection = DOMPropertyInjection;
      var Properties = domPropertyConfig.Properties || {};
      var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
      var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
      var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
      var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

      if (domPropertyConfig.isCustomAttribute) {
        DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
      }

      for (var propName in Properties) {
        !!DOMProperty.properties.hasOwnProperty(propName) ? _prodInvariant('48', propName) : void 0;

        var lowerCased = propName.toLowerCase();
        var propConfig = Properties[propName];

        var propertyInfo = {
          attributeName: lowerCased,
          attributeNamespace: null,
          propertyName: propName,
          mutationMethod: null,

          mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
          hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
          hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
          hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
          hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
        };
        !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? _prodInvariant('50', propName) : void 0;

        if ("production" !== 'production') {}

        if (DOMAttributeNames.hasOwnProperty(propName)) {
          var attributeName = DOMAttributeNames[propName];
          propertyInfo.attributeName = attributeName;
          if ("production" !== 'production') {}
        }

        if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
          propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
        }

        if (DOMPropertyNames.hasOwnProperty(propName)) {
          propertyInfo.propertyName = DOMPropertyNames[propName];
        }

        if (DOMMutationMethods.hasOwnProperty(propName)) {
          propertyInfo.mutationMethod = DOMMutationMethods[propName];
        }

        DOMProperty.properties[propName] = propertyInfo;
      }
    }
  };

  /* eslint-disable max-len */
  var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
  /* eslint-enable max-len */

  /**
   * DOMProperty exports lookup objects that can be used like functions:
   *
   *   > DOMProperty.isValid['id']
   *   true
   *   > DOMProperty.isValid['foobar']
   *   undefined
   *
   * Although this may be confusing, it performs better in general.
   *
   * @see http://jsperf.com/key-exists
   * @see http://jsperf.com/key-missing
   */
  var DOMProperty = {

    ID_ATTRIBUTE_NAME: 'data-reactid',
    ROOT_ATTRIBUTE_NAME: 'data-reactroot',

    ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
    ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

    /**
     * Map from property "standard name" to an object with info about how to set
     * the property in the DOM. Each object contains:
     *
     * attributeName:
     *   Used when rendering markup or with `*Attribute()`.
     * attributeNamespace
     * propertyName:
     *   Used on DOM node instances. (This includes properties that mutate due to
     *   external factors.)
     * mutationMethod:
     *   If non-null, used instead of the property or `setAttribute()` after
     *   initial render.
     * mustUseProperty:
     *   Whether the property must be accessed and mutated as an object property.
     * hasBooleanValue:
     *   Whether the property should be removed when set to a falsey value.
     * hasNumericValue:
     *   Whether the property must be numeric or parse as a numeric and should be
     *   removed when set to a falsey value.
     * hasPositiveNumericValue:
     *   Whether the property must be positive numeric or parse as a positive
     *   numeric and should be removed when set to a falsey value.
     * hasOverloadedBooleanValue:
     *   Whether the property can be used as a flag as well as with a value.
     *   Removed when strictly equal to false; present without a value when
     *   strictly equal to true; present with a value otherwise.
     */
    properties: {},

    /**
     * Mapping from lowercase property names to the properly cased version, used
     * to warn in the case of missing properties. Available only in __DEV__.
     * @type {Object}
     */
    getPossibleStandardName: null,

    /**
     * All of the isCustomAttribute() functions that have been injected.
     */
    _isCustomAttributeFunctions: [],

    /**
     * Checks whether a property name is a custom attribute.
     * @method
     */
    isCustomAttribute: function isCustomAttribute(attributeName) {
      for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
        var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
        if (isCustomAttributeFn(attributeName)) {
          return true;
        }
      }
      return false;
    },

    injection: DOMPropertyInjection
  };

  module.exports = DOMProperty;
});

var DOMProperty$1 = interopDefault(DOMProperty);

var require$$3$3 = Object.freeze({
  default: DOMProperty$1
});

var ReactDOMComponentFlags = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMComponentFlags
   */

  'use strict';

  var ReactDOMComponentFlags = {
    hasCachedChildNodes: 1 << 0
  };

  module.exports = ReactDOMComponentFlags;
});

var ReactDOMComponentFlags$1 = interopDefault(ReactDOMComponentFlags);

var require$$16 = Object.freeze({
  default: ReactDOMComponentFlags$1
});

var ReactDOMComponentTree = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMComponentTree
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var DOMProperty = interopDefault(require$$3$3);
  var ReactDOMComponentFlags = interopDefault(require$$16);

  var invariant = interopDefault(require$$1);

  var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
  var Flags = ReactDOMComponentFlags;

  var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

  /**
   * Drill down (through composites and empty components) until we get a host or
   * host text component.
   *
   * This is pretty polymorphic but unavoidable with the current structure we have
   * for `_renderedChildren`.
   */
  function getRenderedHostOrTextFromComponent(component) {
    var rendered;
    while (rendered = component._renderedComponent) {
      component = rendered;
    }
    return component;
  }

  /**
   * Populate `_hostNode` on the rendered host/text component with the given
   * DOM node. The passed `inst` can be a composite.
   */
  function precacheNode(inst, node) {
    var hostInst = getRenderedHostOrTextFromComponent(inst);
    hostInst._hostNode = node;
    node[internalInstanceKey] = hostInst;
  }

  function uncacheNode(inst) {
    var node = inst._hostNode;
    if (node) {
      delete node[internalInstanceKey];
      inst._hostNode = null;
    }
  }

  /**
   * Populate `_hostNode` on each child of `inst`, assuming that the children
   * match up with the DOM (element) children of `node`.
   *
   * We cache entire levels at once to avoid an n^2 problem where we access the
   * children of a node sequentially and have to walk from the start to our target
   * node every time.
   *
   * Since we update `_renderedChildren` and the actual DOM at (slightly)
   * different times, we could race here and see a newer `_renderedChildren` than
   * the DOM nodes we see. To avoid this, ReactMultiChild calls
   * `prepareToManageChildren` before we change `_renderedChildren`, at which
   * time the container's child nodes are always cached (until it unmounts).
   */
  function precacheChildNodes(inst, node) {
    if (inst._flags & Flags.hasCachedChildNodes) {
      return;
    }
    var children = inst._renderedChildren;
    var childNode = node.firstChild;
    outer: for (var name in children) {
      if (!children.hasOwnProperty(name)) {
        continue;
      }
      var childInst = children[name];
      var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
      if (childID === 0) {
        // We're currently unmounting this child in ReactMultiChild; skip it.
        continue;
      }
      // We assume the child nodes are in the same order as the child instances.
      for (; childNode !== null; childNode = childNode.nextSibling) {
        if (childNode.nodeType === 1 && childNode.getAttribute(ATTR_NAME) === String(childID) || childNode.nodeType === 8 && childNode.nodeValue === ' react-text: ' + childID + ' ' || childNode.nodeType === 8 && childNode.nodeValue === ' react-empty: ' + childID + ' ') {
          precacheNode(childInst, childNode);
          continue outer;
        }
      }
      // We reached the end of the DOM children without finding an ID match.
      _prodInvariant('32', childID);
    }
    inst._flags |= Flags.hasCachedChildNodes;
  }

  /**
   * Given a DOM node, return the closest ReactDOMComponent or
   * ReactDOMTextComponent instance ancestor.
   */
  function getClosestInstanceFromNode(node) {
    if (node[internalInstanceKey]) {
      return node[internalInstanceKey];
    }

    // Walk up the tree until we find an ancestor whose instance we have cached.
    var parents = [];
    while (!node[internalInstanceKey]) {
      parents.push(node);
      if (node.parentNode) {
        node = node.parentNode;
      } else {
        // Top of the tree. This node must not be part of a React tree (or is
        // unmounted, potentially).
        return null;
      }
    }

    var closest;
    var inst;
    for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
      closest = inst;
      if (parents.length) {
        precacheChildNodes(inst, node);
      }
    }

    return closest;
  }

  /**
   * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
   * instance, or null if the node was not rendered by this React.
   */
  function getInstanceFromNode(node) {
    var inst = getClosestInstanceFromNode(node);
    if (inst != null && inst._hostNode === node) {
      return inst;
    } else {
      return null;
    }
  }

  /**
   * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
   * DOM node.
   */
  function getNodeFromInstance(inst) {
    // Without this first invariant, passing a non-DOM-component triggers the next
    // invariant for a missing parent, which is super confusing.
    !(inst._hostNode !== undefined) ? _prodInvariant('33') : void 0;

    if (inst._hostNode) {
      return inst._hostNode;
    }

    // Walk up the tree until we find an ancestor whose DOM node we have cached.
    var parents = [];
    while (!inst._hostNode) {
      parents.push(inst);
      !inst._hostParent ? _prodInvariant('34') : void 0;
      inst = inst._hostParent;
    }

    // Now parents contains each ancestor that does *not* have a cached native
    // node, and `inst` is the deepest ancestor that does.
    for (; parents.length; inst = parents.pop()) {
      precacheChildNodes(inst, inst._hostNode);
    }

    return inst._hostNode;
  }

  var ReactDOMComponentTree = {
    getClosestInstanceFromNode: getClosestInstanceFromNode,
    getInstanceFromNode: getInstanceFromNode,
    getNodeFromInstance: getNodeFromInstance,
    precacheChildNodes: precacheChildNodes,
    precacheNode: precacheNode,
    uncacheNode: uncacheNode
  };

  module.exports = ReactDOMComponentTree;
});

var ReactDOMComponentTree$1 = interopDefault(ReactDOMComponentTree);

var require$$4$3 = Object.freeze({
  default: ReactDOMComponentTree$1
});

var EventConstants = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventConstants
   */

  'use strict';

  var keyMirror = interopDefault(require$$0$2);

  var PropagationPhases = keyMirror({ bubbled: null, captured: null });

  /**
   * Types of raw signals from the browser caught at the top level.
   */
  var topLevelTypes = keyMirror({
    topAbort: null,
    topAnimationEnd: null,
    topAnimationIteration: null,
    topAnimationStart: null,
    topBlur: null,
    topCanPlay: null,
    topCanPlayThrough: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topDurationChange: null,
    topEmptied: null,
    topEncrypted: null,
    topEnded: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topInvalid: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topLoadedData: null,
    topLoadedMetadata: null,
    topLoadStart: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topPause: null,
    topPlay: null,
    topPlaying: null,
    topProgress: null,
    topRateChange: null,
    topReset: null,
    topScroll: null,
    topSeeked: null,
    topSeeking: null,
    topSelectionChange: null,
    topStalled: null,
    topSubmit: null,
    topSuspend: null,
    topTextInput: null,
    topTimeUpdate: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topTransitionEnd: null,
    topVolumeChange: null,
    topWaiting: null,
    topWheel: null
  });

  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };

  module.exports = EventConstants;
});

var EventConstants$1 = interopDefault(EventConstants);

var require$$18 = Object.freeze({
  default: EventConstants$1
});

var EventPluginRegistry = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventPluginRegistry
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * Injectable ordering of event plugins.
   */
  var EventPluginOrder = null;

  /**
   * Injectable mapping from names to event plugin modules.
   */
  var namesToPlugins = {};

  /**
   * Recomputes the plugin list using the injected plugins and plugin ordering.
   *
   * @private
   */
  function recomputePluginOrdering() {
    if (!EventPluginOrder) {
      // Wait until an `EventPluginOrder` is injected.
      return;
    }
    for (var pluginName in namesToPlugins) {
      var PluginModule = namesToPlugins[pluginName];
      var pluginIndex = EventPluginOrder.indexOf(pluginName);
      !(pluginIndex > -1) ? _prodInvariant('96', pluginName) : void 0;
      if (EventPluginRegistry.plugins[pluginIndex]) {
        continue;
      }
      !PluginModule.extractEvents ? _prodInvariant('97', pluginName) : void 0;
      EventPluginRegistry.plugins[pluginIndex] = PluginModule;
      var publishedEvents = PluginModule.eventTypes;
      for (var eventName in publishedEvents) {
        !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? _prodInvariant('98', eventName, pluginName) : void 0;
      }
    }
  }

  /**
   * Publishes an event so that it can be dispatched by the supplied plugin.
   *
   * @param {object} dispatchConfig Dispatch configuration for the event.
   * @param {object} PluginModule Plugin publishing the event.
   * @return {boolean} True if the event was successfully published.
   * @private
   */
  function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
    !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? _prodInvariant('99', eventName) : void 0;
    EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

    var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
    if (phasedRegistrationNames) {
      for (var phaseName in phasedRegistrationNames) {
        if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
          var phasedRegistrationName = phasedRegistrationNames[phaseName];
          publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
        }
      }
      return true;
    } else if (dispatchConfig.registrationName) {
      publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
      return true;
    }
    return false;
  }

  /**
   * Publishes a registration name that is used to identify dispatched events and
   * can be used with `EventPluginHub.putListener` to register listeners.
   *
   * @param {string} registrationName Registration name to add.
   * @param {object} PluginModule Plugin publishing the event.
   * @private
   */
  function publishRegistrationName(registrationName, PluginModule, eventName) {
    !!EventPluginRegistry.registrationNameModules[registrationName] ? _prodInvariant('100', registrationName) : void 0;
    EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
    EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;

    if ("production" !== 'production') {}
  }

  /**
   * Registers plugins so that they can extract and dispatch events.
   *
   * @see {EventPluginHub}
   */
  var EventPluginRegistry = {

    /**
     * Ordered list of injected plugins.
     */
    plugins: [],

    /**
     * Mapping from event name to dispatch config
     */
    eventNameDispatchConfigs: {},

    /**
     * Mapping from registration name to plugin module
     */
    registrationNameModules: {},

    /**
     * Mapping from registration name to event name
     */
    registrationNameDependencies: {},

    /**
     * Mapping from lowercase registration names to the properly cased version,
     * used to warn in the case of missing event handlers. Available
     * only in __DEV__.
     * @type {Object}
     */
    possibleRegistrationNames: null,

    /**
     * Injects an ordering of plugins (by plugin name). This allows the ordering
     * to be decoupled from injection of the actual plugins so that ordering is
     * always deterministic regardless of packaging, on-the-fly injection, etc.
     *
     * @param {array} InjectedEventPluginOrder
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginOrder}
     */
    injectEventPluginOrder: function injectEventPluginOrder(InjectedEventPluginOrder) {
      !!EventPluginOrder ? _prodInvariant('101') : void 0;
      // Clone the ordering so it cannot be dynamically mutated.
      EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
      recomputePluginOrdering();
    },

    /**
     * Injects plugins to be used by `EventPluginHub`. The plugin names must be
     * in the ordering injected by `injectEventPluginOrder`.
     *
     * Plugins can be injected as part of page initialization or on-the-fly.
     *
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     * @internal
     * @see {EventPluginHub.injection.injectEventPluginsByName}
     */
    injectEventPluginsByName: function injectEventPluginsByName(injectedNamesToPlugins) {
      var isOrderingDirty = false;
      for (var pluginName in injectedNamesToPlugins) {
        if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
          continue;
        }
        var PluginModule = injectedNamesToPlugins[pluginName];
        if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
          !!namesToPlugins[pluginName] ? _prodInvariant('102', pluginName) : void 0;
          namesToPlugins[pluginName] = PluginModule;
          isOrderingDirty = true;
        }
      }
      if (isOrderingDirty) {
        recomputePluginOrdering();
      }
    },

    /**
     * Looks up the plugin for the supplied event.
     *
     * @param {object} event A synthetic event.
     * @return {?object} The plugin that created the supplied event.
     * @internal
     */
    getPluginModuleForEvent: function getPluginModuleForEvent(event) {
      var dispatchConfig = event.dispatchConfig;
      if (dispatchConfig.registrationName) {
        return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
      }
      for (var phase in dispatchConfig.phasedRegistrationNames) {
        if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
          continue;
        }
        var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
        if (PluginModule) {
          return PluginModule;
        }
      }
      return null;
    },

    /**
     * Exposed for unit testing.
     * @private
     */
    _resetEventPlugins: function _resetEventPlugins() {
      EventPluginOrder = null;
      for (var pluginName in namesToPlugins) {
        if (namesToPlugins.hasOwnProperty(pluginName)) {
          delete namesToPlugins[pluginName];
        }
      }
      EventPluginRegistry.plugins.length = 0;

      var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
      for (var eventName in eventNameDispatchConfigs) {
        if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
          delete eventNameDispatchConfigs[eventName];
        }
      }

      var registrationNameModules = EventPluginRegistry.registrationNameModules;
      for (var registrationName in registrationNameModules) {
        if (registrationNameModules.hasOwnProperty(registrationName)) {
          delete registrationNameModules[registrationName];
        }
      }

      if ("production" !== 'production') {}
    }

  };

  module.exports = EventPluginRegistry;
});

var EventPluginRegistry$1 = interopDefault(EventPluginRegistry);

var require$$2$4 = Object.freeze({
  default: EventPluginRegistry$1
});

var ReactErrorUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactErrorUtils
   */

  'use strict';

  var caughtError = null;

  /**
   * Call a function while guarding against errors that happens within it.
   *
   * @param {?String} name of the guard to use for logging or debugging
   * @param {Function} func The function to invoke
   * @param {*} a First argument
   * @param {*} b Second argument
   */
  function invokeGuardedCallback(name, func, a, b) {
    try {
      return func(a, b);
    } catch (x) {
      if (caughtError === null) {
        caughtError = x;
      }
      return undefined;
    }
  }

  var ReactErrorUtils = {
    invokeGuardedCallback: invokeGuardedCallback,

    /**
     * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
     * handler are sure to be rethrown by rethrowCaughtError.
     */
    invokeGuardedCallbackWithCatch: invokeGuardedCallback,

    /**
     * During execution of guarded functions we will capture the first error which
     * we will rethrow to be handled by the top level error handler.
     */
    rethrowCaughtError: function rethrowCaughtError() {
      if (caughtError) {
        var error = caughtError;
        caughtError = null;
        throw error;
      }
    }
  };

  if ("production" !== 'production') {}

  module.exports = ReactErrorUtils;
});

var ReactErrorUtils$1 = interopDefault(ReactErrorUtils);

var require$$11 = Object.freeze({
  default: ReactErrorUtils$1
});

var EventPluginUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventPluginUtils
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var EventConstants = interopDefault(require$$18);
  var ReactErrorUtils = interopDefault(require$$11);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  /**
   * Injected dependencies:
   */

  /**
   * - `ComponentTree`: [required] Module that can convert between React instances
   *   and actual node references.
   */
  var ComponentTree;
  var TreeTraversal;
  var injection = {
    injectComponentTree: function injectComponentTree(Injected) {
      ComponentTree = Injected;
      if ("production" !== 'production') {}
    },
    injectTreeTraversal: function injectTreeTraversal(Injected) {
      TreeTraversal = Injected;
      if ("production" !== 'production') {}
    }
  };

  var topLevelTypes = EventConstants.topLevelTypes;

  function isEndish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
  }

  function isMoveish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
  }
  function isStartish(topLevelType) {
    return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
  }

  var validateEventDispatches;
  if ("production" !== 'production') {}

  /**
   * Dispatch the event to the listener.
   * @param {SyntheticEvent} event SyntheticEvent to handle
   * @param {boolean} simulated If the event is simulated (changes exn behavior)
   * @param {function} listener Application-level callback
   * @param {*} inst Internal component instance
   */
  function executeDispatch(event, simulated, listener, inst) {
    var type = event.type || 'unknown-event';
    event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
    if (simulated) {
      ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
    } else {
      ReactErrorUtils.invokeGuardedCallback(type, listener, event);
    }
    event.currentTarget = null;
  }

  /**
   * Standard/simple iteration through an event's collected dispatches.
   */
  function executeDispatchesInOrder(event, simulated) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;
    if ("production" !== 'production') {}
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        // Listeners and Instances are two parallel arrays that are always in sync.
        executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
      }
    } else if (dispatchListeners) {
      executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
    }
    event._dispatchListeners = null;
    event._dispatchInstances = null;
  }

  /**
   * Standard/simple iteration through an event's collected dispatches, but stops
   * at the first dispatch execution returning true, and returns that id.
   *
   * @return {?string} id of the first dispatch execution who's listener returns
   * true, or null if no listener returned true.
   */
  function executeDispatchesInOrderStopAtTrueImpl(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;
    if ("production" !== 'production') {}
    if (Array.isArray(dispatchListeners)) {
      for (var i = 0; i < dispatchListeners.length; i++) {
        if (event.isPropagationStopped()) {
          break;
        }
        // Listeners and Instances are two parallel arrays that are always in sync.
        if (dispatchListeners[i](event, dispatchInstances[i])) {
          return dispatchInstances[i];
        }
      }
    } else if (dispatchListeners) {
      if (dispatchListeners(event, dispatchInstances)) {
        return dispatchInstances;
      }
    }
    return null;
  }

  /**
   * @see executeDispatchesInOrderStopAtTrueImpl
   */
  function executeDispatchesInOrderStopAtTrue(event) {
    var ret = executeDispatchesInOrderStopAtTrueImpl(event);
    event._dispatchInstances = null;
    event._dispatchListeners = null;
    return ret;
  }

  /**
   * Execution of a "direct" dispatch - there must be at most one dispatch
   * accumulated on the event or it is considered an error. It doesn't really make
   * sense for an event with multiple dispatches (bubbled) to keep track of the
   * return values at each dispatch execution, but it does tend to make sense when
   * dealing with "direct" dispatches.
   *
   * @return {*} The return value of executing the single dispatch.
   */
  function executeDirectDispatch(event) {
    if ("production" !== 'production') {}
    var dispatchListener = event._dispatchListeners;
    var dispatchInstance = event._dispatchInstances;
    !!Array.isArray(dispatchListener) ? _prodInvariant('103') : void 0;
    event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
    var res = dispatchListener ? dispatchListener(event) : null;
    event.currentTarget = null;
    event._dispatchListeners = null;
    event._dispatchInstances = null;
    return res;
  }

  /**
   * @param {SyntheticEvent} event
   * @return {boolean} True iff number of dispatches accumulated is greater than 0.
   */
  function hasDispatches(event) {
    return !!event._dispatchListeners;
  }

  /**
   * General utilities that are useful in creating custom Event Plugins.
   */
  var EventPluginUtils = {
    isEndish: isEndish,
    isMoveish: isMoveish,
    isStartish: isStartish,

    executeDirectDispatch: executeDirectDispatch,
    executeDispatchesInOrder: executeDispatchesInOrder,
    executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
    hasDispatches: hasDispatches,

    getInstanceFromNode: function getInstanceFromNode(node) {
      return ComponentTree.getInstanceFromNode(node);
    },
    getNodeFromInstance: function getNodeFromInstance(node) {
      return ComponentTree.getNodeFromInstance(node);
    },
    isAncestor: function isAncestor(a, b) {
      return TreeTraversal.isAncestor(a, b);
    },
    getLowestCommonAncestor: function getLowestCommonAncestor(a, b) {
      return TreeTraversal.getLowestCommonAncestor(a, b);
    },
    getParentInstance: function getParentInstance(inst) {
      return TreeTraversal.getParentInstance(inst);
    },
    traverseTwoPhase: function traverseTwoPhase(target, fn, arg) {
      return TreeTraversal.traverseTwoPhase(target, fn, arg);
    },
    traverseEnterLeave: function traverseEnterLeave(from, to, fn, argFrom, argTo) {
      return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
    },

    injection: injection
  };

  module.exports = EventPluginUtils;
});

var EventPluginUtils$1 = interopDefault(EventPluginUtils);

var require$$6$2 = Object.freeze({
  default: EventPluginUtils$1
});

var accumulateInto = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule accumulateInto
   * 
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * Accumulates items that must not be null or undefined into the first one. This
   * is used to conserve memory by avoiding array allocations, and thus sacrifices
   * API cleanness. Since `current` can be null before being passed in and not
   * null after this function, make sure to assign it back to `current`:
   *
   * `a = accumulateInto(a, b);`
   *
   * This API should be sparingly used. Try `accumulate` for something cleaner.
   *
   * @return {*|array<*>} An accumulation of items.
   */

  function accumulateInto(current, next) {
    !(next != null) ? _prodInvariant('30') : void 0;

    if (current == null) {
      return next;
    }

    // Both are not empty. Warning: Never call x.concat(y) when you are not
    // certain that x is an Array (x could be a string with concat method).
    if (Array.isArray(current)) {
      if (Array.isArray(next)) {
        current.push.apply(current, next);
        return current;
      }
      current.push(next);
      return current;
    }

    if (Array.isArray(next)) {
      // A bit too dangerous to mutate `next`.
      return [current].concat(next);
    }

    return [current, next];
  }

  module.exports = accumulateInto;
});

var accumulateInto$1 = interopDefault(accumulateInto);

var require$$2$5 = Object.freeze({
  default: accumulateInto$1
});

var forEachAccumulated = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule forEachAccumulated
   * 
   */

  'use strict';

  /**
   * @param {array} arr an "accumulation" of items which is either an Array or
   * a single item. Useful when paired with the `accumulate` module. This is a
   * simple utility that allows us to reason about a collection of items, but
   * handling the case when there is exactly one item (and we do not need to
   * allocate an array).
   */

  function forEachAccumulated(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  }

  module.exports = forEachAccumulated;
});

var forEachAccumulated$1 = interopDefault(forEachAccumulated);

var require$$1$3 = Object.freeze({
  default: forEachAccumulated$1
});

var EventPluginHub = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventPluginHub
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var EventPluginRegistry = interopDefault(require$$2$4);
  var EventPluginUtils = interopDefault(require$$6$2);
  var ReactErrorUtils = interopDefault(require$$11);

  var accumulateInto = interopDefault(require$$2$5);
  var forEachAccumulated = interopDefault(require$$1$3);
  var invariant = interopDefault(require$$1);

  /**
   * Internal store for event listeners
   */
  var listenerBank = {};

  /**
   * Internal queue of events that have accumulated their dispatches and are
   * waiting to have their dispatches executed.
   */
  var eventQueue = null;

  /**
   * Dispatches an event and releases it back into the pool, unless persistent.
   *
   * @param {?object} event Synthetic event to be dispatched.
   * @param {boolean} simulated If the event is simulated (changes exn behavior)
   * @private
   */
  var executeDispatchesAndRelease = function executeDispatchesAndRelease(event, simulated) {
    if (event) {
      EventPluginUtils.executeDispatchesInOrder(event, simulated);

      if (!event.isPersistent()) {
        event.constructor.release(event);
      }
    }
  };
  var executeDispatchesAndReleaseSimulated = function executeDispatchesAndReleaseSimulated(e) {
    return executeDispatchesAndRelease(e, true);
  };
  var executeDispatchesAndReleaseTopLevel = function executeDispatchesAndReleaseTopLevel(e) {
    return executeDispatchesAndRelease(e, false);
  };

  var getDictionaryKey = function getDictionaryKey(inst) {
    // Prevents V8 performance issue:
    // https://github.com/facebook/react/pull/7232
    return '.' + inst._rootNodeID;
  };

  /**
   * This is a unified interface for event plugins to be installed and configured.
   *
   * Event plugins can implement the following properties:
   *
   *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
   *     Required. When a top-level event is fired, this method is expected to
   *     extract synthetic events that will in turn be queued and dispatched.
   *
   *   `eventTypes` {object}
   *     Optional, plugins that fire events must publish a mapping of registration
   *     names that are used to register listeners. Values of this mapping must
   *     be objects that contain `registrationName` or `phasedRegistrationNames`.
   *
   *   `executeDispatch` {function(object, function, string)}
   *     Optional, allows plugins to override how an event gets dispatched. By
   *     default, the listener is simply invoked.
   *
   * Each plugin that is injected into `EventsPluginHub` is immediately operable.
   *
   * @public
   */
  var EventPluginHub = {

    /**
     * Methods for injecting dependencies.
     */
    injection: {

      /**
       * @param {array} InjectedEventPluginOrder
       * @public
       */
      injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

      /**
       * @param {object} injectedNamesToPlugins Map from names to plugin modules.
       */
      injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

    },

    /**
     * Stores `listener` at `listenerBank[registrationName][key]`. Is idempotent.
     *
     * @param {object} inst The instance, which is the source of events.
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @param {function} listener The callback to store.
     */
    putListener: function putListener(inst, registrationName, listener) {
      !(typeof listener === 'function') ? _prodInvariant('94', registrationName, typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) : void 0;

      var key = getDictionaryKey(inst);
      var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
      bankForRegistrationName[key] = listener;

      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.didPutListener) {
        PluginModule.didPutListener(inst, registrationName, listener);
      }
    },

    /**
     * @param {object} inst The instance, which is the source of events.
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @return {?function} The stored callback.
     */
    getListener: function getListener(inst, registrationName) {
      var bankForRegistrationName = listenerBank[registrationName];
      var key = getDictionaryKey(inst);
      return bankForRegistrationName && bankForRegistrationName[key];
    },

    /**
     * Deletes a listener from the registration bank.
     *
     * @param {object} inst The instance, which is the source of events.
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     */
    deleteListener: function deleteListener(inst, registrationName) {
      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);
      }

      var bankForRegistrationName = listenerBank[registrationName];
      // TODO: This should never be null -- when is it?
      if (bankForRegistrationName) {
        var key = getDictionaryKey(inst);
        delete bankForRegistrationName[key];
      }
    },

    /**
     * Deletes all listeners for the DOM element with the supplied ID.
     *
     * @param {object} inst The instance, which is the source of events.
     */
    deleteAllListeners: function deleteAllListeners(inst) {
      var key = getDictionaryKey(inst);
      for (var registrationName in listenerBank) {
        if (!listenerBank.hasOwnProperty(registrationName)) {
          continue;
        }

        if (!listenerBank[registrationName][key]) {
          continue;
        }

        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.willDeleteListener) {
          PluginModule.willDeleteListener(inst, registrationName);
        }

        delete listenerBank[registrationName][key];
      }
    },

    /**
     * Allows registered plugins an opportunity to extract events from top-level
     * native browser events.
     *
     * @return {*} An accumulation of synthetic events.
     * @internal
     */
    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events;
      var plugins = EventPluginRegistry.plugins;
      for (var i = 0; i < plugins.length; i++) {
        // Not every plugin in the ordering may be loaded at runtime.
        var possiblePlugin = plugins[i];
        if (possiblePlugin) {
          var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
          if (extractedEvents) {
            events = accumulateInto(events, extractedEvents);
          }
        }
      }
      return events;
    },

    /**
     * Enqueues a synthetic event that should be dispatched when
     * `processEventQueue` is invoked.
     *
     * @param {*} events An accumulation of synthetic events.
     * @internal
     */
    enqueueEvents: function enqueueEvents(events) {
      if (events) {
        eventQueue = accumulateInto(eventQueue, events);
      }
    },

    /**
     * Dispatches all synthetic events on the event queue.
     *
     * @internal
     */
    processEventQueue: function processEventQueue(simulated) {
      // Set `eventQueue` to null before processing it so that we can tell if more
      // events get enqueued while processing.
      var processingEventQueue = eventQueue;
      eventQueue = null;
      if (simulated) {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
      } else {
        forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
      }
      !!eventQueue ? _prodInvariant('95') : void 0;
      // This would be a good time to rethrow if any of the event handlers threw.
      ReactErrorUtils.rethrowCaughtError();
    },

    /**
     * These are needed for tests only. Do not use!
     */
    __purge: function __purge() {
      listenerBank = {};
    },

    __getListenerBank: function __getListenerBank() {
      return listenerBank;
    }

  };

  module.exports = EventPluginHub;
});

var EventPluginHub$1 = interopDefault(EventPluginHub);



var require$$7$2 = Object.freeze({
  default: EventPluginHub$1
});

var EventPropagators = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EventPropagators
   */

  'use strict';

  var EventConstants = interopDefault(require$$18);
  var EventPluginHub = interopDefault(require$$7$2);
  var EventPluginUtils = interopDefault(require$$6$2);

  var accumulateInto = interopDefault(require$$2$5);
  var forEachAccumulated = interopDefault(require$$1$3);
  var warning = interopDefault(require$$0$1);

  var PropagationPhases = EventConstants.PropagationPhases;
  var getListener = EventPluginHub.getListener;

  /**
   * Some event types have a notion of different registration names for different
   * "phases" of propagation. This finds listeners by a given phase.
   */
  function listenerAtPhase(inst, event, propagationPhase) {
    var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
    return getListener(inst, registrationName);
  }

  /**
   * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
   * here, allows us to not have to bind or create functions for each event.
   * Mutating the event's members allows us to not have to create a wrapping
   * "dispatch" object that pairs the event with the listener.
   */
  function accumulateDirectionalDispatches(inst, upwards, event) {
    if ("production" !== 'production') {}
    var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
    var listener = listenerAtPhase(inst, event, phase);
    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }

  /**
   * Collect dispatches (must be entirely collected before dispatching - see unit
   * tests). Lazily allocate the array to conserve memory.  We must loop through
   * each event and perform the traversal for each one. We cannot perform a
   * single traversal for the entire collection of events because each event may
   * have a different target.
   */
  function accumulateTwoPhaseDispatchesSingle(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
    }
  }

  /**
   * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
   */
  function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
    if (event && event.dispatchConfig.phasedRegistrationNames) {
      var targetInst = event._targetInst;
      var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
      EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
    }
  }

  /**
   * Accumulates without regard to direction, does not look for phased
   * registration names. Same as `accumulateDirectDispatchesSingle` but without
   * requiring that the `dispatchMarker` be the same as the dispatched ID.
   */
  function accumulateDispatches(inst, ignoredDirection, event) {
    if (event && event.dispatchConfig.registrationName) {
      var registrationName = event.dispatchConfig.registrationName;
      var listener = getListener(inst, registrationName);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
      }
    }
  }

  /**
   * Accumulates dispatches on an `SyntheticEvent`, but only for the
   * `dispatchMarker`.
   * @param {SyntheticEvent} event
   */
  function accumulateDirectDispatchesSingle(event) {
    if (event && event.dispatchConfig.registrationName) {
      accumulateDispatches(event._targetInst, null, event);
    }
  }

  function accumulateTwoPhaseDispatches(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
  }

  function accumulateTwoPhaseDispatchesSkipTarget(events) {
    forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
  }

  function accumulateEnterLeaveDispatches(leave, enter, from, to) {
    EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
  }

  function accumulateDirectDispatches(events) {
    forEachAccumulated(events, accumulateDirectDispatchesSingle);
  }

  /**
   * A small set of propagation patterns, each of which will accept a small amount
   * of information, and generate a set of "dispatch ready event objects" - which
   * are sets of events that have already been annotated with a set of dispatched
   * listener functions/ids. The API is designed this way to discourage these
   * propagation strategies from actually executing the dispatches, since we
   * always want to collect the entire set of dispatches before executing event a
   * single one.
   *
   * @constructor EventPropagators
   */
  var EventPropagators = {
    accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
    accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
    accumulateDirectDispatches: accumulateDirectDispatches,
    accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
  };

  module.exports = EventPropagators;
});

var EventPropagators$1 = interopDefault(EventPropagators);

var require$$16$1 = Object.freeze({
  default: EventPropagators$1
});

var ExecutionEnvironment = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {

    canUseDOM: canUseDOM,

    canUseWorkers: typeof Worker !== 'undefined',

    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

    canUseViewport: canUseDOM && !!window.screen,

    isInWorker: !canUseDOM // For now, this is true - might change in the future.

  };

  module.exports = ExecutionEnvironment;
});

var ExecutionEnvironment$1 = interopDefault(ExecutionEnvironment);

var require$$7$3 = Object.freeze({
  default: ExecutionEnvironment$1
});

var getTextContentAccessor = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getTextContentAccessor
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var contentKey = null;

  /**
   * Gets the key used to access text content on a DOM node.
   *
   * @return {?string} Key used to access text content.
   * @internal
   */
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      // Prefer textContent to innerText because many browsers support both but
      // SVG <text> elements don't support innerText even when <div> does.
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }

  module.exports = getTextContentAccessor;
});

var getTextContentAccessor$1 = interopDefault(getTextContentAccessor);

var require$$0$5 = Object.freeze({
  default: getTextContentAccessor$1
});

var FallbackCompositionState = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule FallbackCompositionState
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var PooledClass = interopDefault(require$$5);

  var getTextContentAccessor = interopDefault(require$$0$5);

  /**
   * This helper class stores information about text content of a target node,
   * allowing comparison of content before and after a given event.
   *
   * Identify the node where selection currently begins, then observe
   * both its text content and its current position in the DOM. Since the
   * browser may natively replace the target node during composition, we can
   * use its position to find its replacement.
   *
   * @param {DOMEventTarget} root
   */
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }

  _assign(FallbackCompositionState.prototype, {
    destructor: function destructor() {
      this._root = null;
      this._startText = null;
      this._fallbackText = null;
    },

    /**
     * Get current text of input.
     *
     * @return {string}
     */
    getText: function getText() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },

    /**
     * Determine the differing substring between the initially stored
     * text content and the current content.
     *
     * @return {string}
     */
    getData: function getData() {
      if (this._fallbackText) {
        return this._fallbackText;
      }

      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;

      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }

      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }

      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });

  PooledClass.addPoolingTo(FallbackCompositionState);

  module.exports = FallbackCompositionState;
});

var FallbackCompositionState$1 = interopDefault(FallbackCompositionState);

var require$$3$4 = Object.freeze({
  default: FallbackCompositionState$1
});

var SyntheticEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticEvent
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var PooledClass = interopDefault(require$$5);

  var emptyFunction = interopDefault(require$$3$1);
  var warning = interopDefault(require$$0$1);

  var didWarnForAddedNewProperty = false;
  var isProxySupported = typeof Proxy === 'function';

  var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];

  /**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var EventInterface = {
    type: null,
    target: null,
    // currentTarget is set when dispatching; no use in copying it here
    currentTarget: emptyFunction.thatReturnsNull,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function timeStamp(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };

  /**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events can also subclass this.
   *
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {*} targetInst Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @param {DOMEventTarget} nativeEventTarget Target node.
   */
  function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
    if ("production" !== 'production') {}

    this.dispatchConfig = dispatchConfig;
    this._targetInst = targetInst;
    this.nativeEvent = nativeEvent;

    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      if ("production" !== 'production') {}
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        if (propName === 'target') {
          this.target = nativeEventTarget;
        } else {
          this[propName] = nativeEvent[propName];
        }
      }
    }

    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (defaultPrevented) {
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsFalse;
    return this;
  }

  _assign(SyntheticEvent.prototype, {

    preventDefault: function preventDefault() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (!event) {
        return;
      }

      if (event.preventDefault) {
        event.preventDefault();
      } else if (typeof event.returnValue !== 'unknown') {
        // eslint-disable-line valid-typeof
        event.returnValue = false;
      }
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    },

    stopPropagation: function stopPropagation() {
      var event = this.nativeEvent;
      if (!event) {
        return;
      }

      if (event.stopPropagation) {
        event.stopPropagation();
      } else if (typeof event.cancelBubble !== 'unknown') {
        // eslint-disable-line valid-typeof
        // The ChangeEventPlugin registers a "propertychange" event for
        // IE. This event does not support bubbling or cancelling, and
        // any references to cancelBubble throw "Member not found".  A
        // typeof check of "unknown" circumvents this issue (and is also
        // IE specific).
        event.cancelBubble = true;
      }

      this.isPropagationStopped = emptyFunction.thatReturnsTrue;
    },

    /**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into the pool.
     */
    persist: function persist() {
      this.isPersistent = emptyFunction.thatReturnsTrue;
    },

    /**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */
    isPersistent: emptyFunction.thatReturnsFalse,

    /**
     * `PooledClass` looks for `destructor` on each instance it releases.
     */
    destructor: function destructor() {
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        if ("production" !== 'production') {} else {
          this[propName] = null;
        }
      }
      for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
        this[shouldBeReleasedProperties[i]] = null;
      }
      if ("production" !== 'production') {}
    }

  });

  SyntheticEvent.Interface = EventInterface;

  if ("production" !== 'production') {}
  /**
   * Helper to reduce boilerplate when creating subclasses.
   *
   * @param {function} Class
   * @param {?object} Interface
   */
  SyntheticEvent.augmentClass = function (Class, Interface) {
    var Super = this;

    var E = function E() {};
    E.prototype = Super.prototype;
    var prototype = new E();

    _assign(prototype, Class.prototype);
    Class.prototype = prototype;
    Class.prototype.constructor = Class;

    Class.Interface = _assign({}, Super.Interface, Interface);
    Class.augmentClass = Super.augmentClass;

    PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
  };

  PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

  module.exports = SyntheticEvent;

  /**
    * Helper to nullify syntheticEvent instance properties when destructing
    *
    * @param {object} SyntheticEvent
    * @param {String} propName
    * @return {object} defineProperty object
    */
  function getPooledWarningPropertyDefinition(propName, getVal) {
    var isFunction = typeof getVal === 'function';
    return {
      configurable: true,
      set: set,
      get: get
    };

    function set(val) {
      var action = isFunction ? 'setting the method' : 'setting the property';
      warn(action, 'This is effectively a no-op');
      return val;
    }

    function get() {
      var action = isFunction ? 'accessing the method' : 'accessing the property';
      var result = isFunction ? 'This is a no-op function' : 'This is set to null';
      warn(action, result);
      return getVal;
    }

    function warn(action, result) {
      var warningCondition = false;
      void 0;
    }
  }
});

var SyntheticEvent$1 = interopDefault(SyntheticEvent);

var require$$0$6 = Object.freeze({
  default: SyntheticEvent$1
});

var SyntheticCompositionEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticCompositionEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  /**
   * @interface Event
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
   */
  var CompositionEventInterface = {
    data: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);

  module.exports = SyntheticCompositionEvent;
});

var SyntheticCompositionEvent$1 = interopDefault(SyntheticCompositionEvent);

var require$$2$6 = Object.freeze({
  default: SyntheticCompositionEvent$1
});

var SyntheticInputEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticInputEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  /**
   * @interface Event
   * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
   *      /#events-inputevents
   */
  var InputEventInterface = {
    data: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);

  module.exports = SyntheticInputEvent;
});

var SyntheticInputEvent$1 = interopDefault(SyntheticInputEvent);

var require$$1$4 = Object.freeze({
  default: SyntheticInputEvent$1
});

var BeforeInputEventPlugin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule BeforeInputEventPlugin
   */

  'use strict';

  var EventConstants = interopDefault(require$$18);
  var EventPropagators = interopDefault(require$$16$1);
  var ExecutionEnvironment = interopDefault(require$$7$3);
  var FallbackCompositionState = interopDefault(require$$3$4);
  var SyntheticCompositionEvent = interopDefault(require$$2$6);
  var SyntheticInputEvent = interopDefault(require$$1$4);

  var keyOf = interopDefault(require$$0$3);

  var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
  var START_KEYCODE = 229;

  var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;

  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }

  // Webkit offers a very useful `textInput` event that can be used to
  // directly represent `beforeInput`. The IE `textinput` event is not as
  // useful, so we don't use it.
  var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();

  // In IE9+, we have access to composition events, but the data supplied
  // by the native compositionend event may be incorrect. Japanese ideographic
  // spaces, for instance (\u3000) are not recorded correctly.
  var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);

  /**
   * Opera <= 12 includes TextEvent in window, but does not fire
   * text input events. Rely on keypress instead.
   */
  function isPresto() {
    var opera = window.opera;
    return (typeof opera === 'undefined' ? 'undefined' : _typeof(opera)) === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
  }

  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

  var topLevelTypes = EventConstants.topLevelTypes;

  // Events and their corresponding property names.
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onBeforeInput: null }),
        captured: keyOf({ onBeforeInputCapture: null })
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCompositionEnd: null }),
        captured: keyOf({ onCompositionEndCapture: null })
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCompositionStart: null }),
        captured: keyOf({ onCompositionStartCapture: null })
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCompositionUpdate: null }),
        captured: keyOf({ onCompositionUpdateCapture: null })
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };

  // Track whether we've ever handled a keypress on the space key.
  var hasSpaceKeypress = false;

  /**
   * Return whether a native keypress event is assumed to be a command.
   * This is required because Firefox fires `keypress` events for key commands
   * (cut, copy, select-all, etc.) even though no character is inserted.
   */
  function isKeypressCommand(nativeEvent) {
    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(nativeEvent.ctrlKey && nativeEvent.altKey);
  }

  /**
   * Translate native top level events into event types.
   *
   * @param {string} topLevelType
   * @return {object}
   */
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }

  /**
   * Does our fallback best-guess model think this event signifies that
   * composition has begun?
   *
   * @param {string} topLevelType
   * @param {object} nativeEvent
   * @return {boolean}
   */
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
  }

  /**
   * Does our fallback mode think that this event is the end of composition?
   *
   * @param {string} topLevelType
   * @param {object} nativeEvent
   * @return {boolean}
   */
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        // Command keys insert or clear IME input.
        return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
      case topLevelTypes.topKeyDown:
        // Expect IME keyCode on each keydown. If we get any other
        // code we must have exited earlier.
        return nativeEvent.keyCode !== START_KEYCODE;
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        // Events are not possible without cancelling IME.
        return true;
      default:
        return false;
    }
  }

  /**
   * Google Input Tools provides composition data via a CustomEvent,
   * with the `data` property populated in the `detail` object. If this
   * is available on the event object, use it. If not, this is a plain
   * composition event and we have nothing special to extract.
   *
   * @param {object} nativeEvent
   * @return {?string}
   */
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if ((typeof detail === 'undefined' ? 'undefined' : _typeof(detail)) === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }

  // Track the current IME composition fallback object, if any.
  var currentComposition = null;

  /**
   * @return {?object} A SyntheticCompositionEvent.
   */
  function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var eventType;
    var fallbackData;

    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }

    if (!eventType) {
      return null;
    }

    if (useFallbackCompositionData) {
      // The current composition is stored statically and must not be
      // overwritten while composition continues.
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }

    var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);

    if (fallbackData) {
      // Inject data generated from fallback path into the synthetic event.
      // This matches the property of native CompositionEventInterface.
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }

    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} nativeEvent Native browser event.
   * @return {?string} The string corresponding to this `beforeInput` event.
   */
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        /**
         * If native `textInput` events are available, our goal is to make
         * use of them. However, there is a special case: the spacebar key.
         * In Webkit, preventing default on a spacebar `textInput` event
         * cancels character insertion, but it *also* causes the browser
         * to fall back to its default spacebar behavior of scrolling the
         * page.
         *
         * Tracking at:
         * https://code.google.com/p/chromium/issues/detail?id=355103
         *
         * To avoid this issue, use the keypress event as if no `textInput`
         * event is available.
         */
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }

        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;

      case topLevelTypes.topTextInput:
        // Record the characters to be added to the DOM.
        var chars = nativeEvent.data;

        // If it's a spacebar character, assume that we have already handled
        // it at the keypress level and bail immediately. Android Chrome
        // doesn't give us keycodes, so we need to blacklist it.
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }

        return chars;

      default:
        // For other native event types, do nothing.
        return null;
    }
  }

  /**
   * For browsers that do not provide the `textInput` event, extract the
   * appropriate string to use for SyntheticInputEvent.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} nativeEvent Native browser event.
   * @return {?string} The fallback string for this `beforeInput` event.
   */
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    // If we are currently composing (IME) and using a fallback to do so,
    // try to extract the composed characters from the fallback object.
    // If composition event is available, we extract a string only at
    // compositionevent, otherwise extract it at fallback events.
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }

    switch (topLevelType) {
      case topLevelTypes.topPaste:
        // If a paste event occurs after a keypress, throw out the input
        // chars. Paste events should not lead to BeforeInput events.
        return null;
      case topLevelTypes.topKeyPress:
        /**
         * As of v27, Firefox may fire keypress events even when no character
         * will be inserted. A few possibilities:
         *
         * - `which` is `0`. Arrow keys, Esc key, etc.
         *
         * - `which` is the pressed key code, but no char is available.
         *   Ex: 'AltGr + d` in Polish. There is no modified character for
         *   this key combination and no character is inserted into the
         *   document, but FF fires the keypress for char code `100` anyway.
         *   No `input` event will occur.
         *
         * - `which` is the pressed key code, but a command combination is
         *   being used. Ex: `Cmd+C`. No character is inserted, and no
         *   `input` event will occur.
         */
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }

  /**
   * Extract a SyntheticInputEvent for `beforeInput`, based on either native
   * `textInput` or fallback behavior.
   *
   * @return {?object} A SyntheticInputEvent.
   */
  function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var chars;

    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }

    // If no characters are being inserted, no BeforeInput event should
    // be fired.
    if (!chars) {
      return null;
    }

    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);

    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }

  /**
   * Create an `onBeforeInput` event to match
   * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
   *
   * This event plugin is based on the native `textInput` event
   * available in Chrome, Safari, Opera, and IE. This event fires after
   * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
   *
   * `beforeInput` is spec'd but not implemented in any browsers, and
   * the `input` event does not provide any useful information about what has
   * actually been added, contrary to the spec. Thus, `textInput` is the best
   * available event to identify the characters that have actually been inserted
   * into the target node.
   *
   * This plugin is also responsible for emitting `composition` events, thus
   * allowing us to share composition fallback code for both `beforeInput` and
   * `composition` event types.
   */
  var BeforeInputEventPlugin = {

    eventTypes: eventTypes,

    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
    }
  };

  module.exports = BeforeInputEventPlugin;
});

var BeforeInputEventPlugin$1 = interopDefault(BeforeInputEventPlugin);



var require$$17 = Object.freeze({
  default: BeforeInputEventPlugin$1
});

var CallbackQueue = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule CallbackQueue
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var PooledClass = interopDefault(require$$5);

  var invariant = interopDefault(require$$1);

  /**
   * A specialized pseudo-event module to help keep track of components waiting to
   * be notified when their DOM representations are available for use.
   *
   * This implements `PooledClass`, so you should never need to instantiate this.
   * Instead, use `CallbackQueue.getPooled()`.
   *
   * @class ReactMountReady
   * @implements PooledClass
   * @internal
   */
  function CallbackQueue() {
    this._callbacks = null;
    this._contexts = null;
  }

  _assign(CallbackQueue.prototype, {

    /**
     * Enqueues a callback to be invoked when `notifyAll` is invoked.
     *
     * @param {function} callback Invoked when `notifyAll` is invoked.
     * @param {?object} context Context to call `callback` with.
     * @internal
     */
    enqueue: function enqueue(callback, context) {
      this._callbacks = this._callbacks || [];
      this._contexts = this._contexts || [];
      this._callbacks.push(callback);
      this._contexts.push(context);
    },

    /**
     * Invokes all enqueued callbacks and clears the queue. This is invoked after
     * the DOM representation of a component has been created or updated.
     *
     * @internal
     */
    notifyAll: function notifyAll() {
      var callbacks = this._callbacks;
      var contexts = this._contexts;
      if (callbacks) {
        !(callbacks.length === contexts.length) ? _prodInvariant('24') : void 0;
        this._callbacks = null;
        this._contexts = null;
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i].call(contexts[i]);
        }
        callbacks.length = 0;
        contexts.length = 0;
      }
    },

    checkpoint: function checkpoint() {
      return this._callbacks ? this._callbacks.length : 0;
    },

    rollback: function rollback(len) {
      if (this._callbacks) {
        this._callbacks.length = len;
        this._contexts.length = len;
      }
    },

    /**
     * Resets the internal queue.
     *
     * @internal
     */
    reset: function reset() {
      this._callbacks = null;
      this._contexts = null;
    },

    /**
     * `PooledClass` looks for this.
     */
    destructor: function destructor() {
      this.reset();
    }

  });

  PooledClass.addPoolingTo(CallbackQueue);

  module.exports = CallbackQueue;
});

var CallbackQueue$1 = interopDefault(CallbackQueue);

var require$$6$4 = Object.freeze({
  default: CallbackQueue$1
});

var ReactFeatureFlags = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactFeatureFlags
   * 
   */

  'use strict';

  var ReactFeatureFlags = {
    // When true, call console.time() before and .timeEnd() after each top-level
    // render (both initial renders and updates). Useful when looking at prod-mode
    // timeline profiles in Chrome, for example.
    logTopLevelRenders: false
  };

  module.exports = ReactFeatureFlags;
});

var ReactFeatureFlags$1 = interopDefault(ReactFeatureFlags);

var require$$12$1 = Object.freeze({
  default: ReactFeatureFlags$1
});

var ReactOwner = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactOwner
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * ReactOwners are capable of storing references to owned components.
   *
   * All components are capable of //being// referenced by owner components, but
   * only ReactOwner components are capable of //referencing// owned components.
   * The named reference is known as a "ref".
   *
   * Refs are available when mounted and updated during reconciliation.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return (
   *         <div onClick={this.handleClick}>
   *           <CustomComponent ref="custom" />
   *         </div>
   *       );
   *     },
   *     handleClick: function() {
   *       this.refs.custom.handleClick();
   *     },
   *     componentDidMount: function() {
   *       this.refs.custom.initialize();
   *     }
   *   });
   *
   * Refs should rarely be used. When refs are used, they should only be done to
   * control data that is not handled by React's data flow.
   *
   * @class ReactOwner
   */
  var ReactOwner = {

    /**
     * @param {?object} object
     * @return {boolean} True if `object` is a valid owner.
     * @final
     */
    isValidOwner: function isValidOwner(object) {
      return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
    },

    /**
     * Adds a component by ref to an owner component.
     *
     * @param {ReactComponent} component Component to reference.
     * @param {string} ref Name by which to refer to the component.
     * @param {ReactOwner} owner Component on which to record the ref.
     * @final
     * @internal
     */
    addComponentAsRefTo: function addComponentAsRefTo(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? _prodInvariant('119') : void 0;
      owner.attachRef(ref, component);
    },

    /**
     * Removes a component by ref from an owner component.
     *
     * @param {ReactComponent} component Component to dereference.
     * @param {string} ref Name of the ref to remove.
     * @param {ReactOwner} owner Component on which the ref is recorded.
     * @final
     * @internal
     */
    removeComponentAsRefFrom: function removeComponentAsRefFrom(component, ref, owner) {
      !ReactOwner.isValidOwner(owner) ? _prodInvariant('120') : void 0;
      var ownerPublicInstance = owner.getPublicInstance();
      // Check that `component`'s owner is still alive and that `component` is still the current ref
      // because we do not want to detach the ref if another component stole it.
      if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
        owner.detachRef(ref);
      }
    }

  };

  module.exports = ReactOwner;
});

var ReactOwner$1 = interopDefault(ReactOwner);

var require$$0$7 = Object.freeze({
  default: ReactOwner$1
});

var ReactRef = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactRef
   */

  'use strict';

  var ReactOwner = interopDefault(require$$0$7);

  var ReactRef = {};

  function attachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(component.getPublicInstance());
    } else {
      // Legacy ref
      ReactOwner.addComponentAsRefTo(component, ref, owner);
    }
  }

  function detachRef(ref, component, owner) {
    if (typeof ref === 'function') {
      ref(null);
    } else {
      // Legacy ref
      ReactOwner.removeComponentAsRefFrom(component, ref, owner);
    }
  }

  ReactRef.attachRefs = function (instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      attachRef(ref, instance, element._owner);
    }
  };

  ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
    // If either the owner or a `ref` has changed, make sure the newest owner
    // has stored a reference to `this`, and the previous owner (if different)
    // has forgotten the reference to `this`. We use the element instead
    // of the public this.props because the post processing cannot determine
    // a ref. The ref conceptually lives on the element.

    // TODO: Should this even be possible? The owner cannot change because
    // it's forbidden by shouldUpdateReactComponent. The ref can change
    // if you swap the keys of but not the refs. Reconsider where this check
    // is made. It probably belongs where the key checking and
    // instantiateReactComponent is done.

    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;

    return (
      // This has a few false positives w/r/t empty components.
      prevEmpty || nextEmpty || nextElement.ref !== prevElement.ref ||
      // If owner changes but we have an unchanged function ref, don't update refs
      typeof nextElement.ref === 'string' && nextElement._owner !== prevElement._owner
    );
  };

  ReactRef.detachRefs = function (instance, element) {
    if (element === null || element === false) {
      return;
    }
    var ref = element.ref;
    if (ref != null) {
      detachRef(ref, instance, element._owner);
    }
  };

  module.exports = ReactRef;
});

var ReactRef$1 = interopDefault(ReactRef);

var require$$2$7 = Object.freeze({
  default: ReactRef$1
});

var ReactInvalidSetStateWarningHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInvalidSetStateWarningHook
   */

  'use strict';

  var warning = interopDefault(require$$0$1);

  if ("production" !== 'production') {}

  var ReactInvalidSetStateWarningHook = {
    onBeginProcessingChildContext: function onBeginProcessingChildContext() {
      processingChildContext = true;
    },
    onEndProcessingChildContext: function onEndProcessingChildContext() {
      processingChildContext = false;
    },
    onSetState: function onSetState() {
      warnInvalidSetState();
    }
  };

  module.exports = ReactInvalidSetStateWarningHook;
});

var ReactInvalidSetStateWarningHook$1 = interopDefault(ReactInvalidSetStateWarningHook);

var require$$6$5 = Object.freeze({
  default: ReactInvalidSetStateWarningHook$1
});

var ReactHostOperationHistoryHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactHostOperationHistoryHook
   */

  'use strict';

  var history = [];

  var ReactHostOperationHistoryHook = {
    onHostOperation: function onHostOperation(debugID, type, payload) {
      history.push({
        instanceID: debugID,
        type: type,
        payload: payload
      });
    },
    clearHistory: function clearHistory() {
      if (ReactHostOperationHistoryHook._preventClearing) {
        // Should only be used for tests.
        return;
      }

      history = [];
    },
    getHistory: function getHistory() {
      return history;
    }
  };

  module.exports = ReactHostOperationHistoryHook;
});

var ReactHostOperationHistoryHook$1 = interopDefault(ReactHostOperationHistoryHook);

var require$$5$5 = Object.freeze({
  default: ReactHostOperationHistoryHook$1
});

var ReactChildrenMutationWarningHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactChildrenMutationWarningHook
   */

  'use strict';

  var ReactComponentTreeHook = interopDefault(require$$1$2);

  var warning = interopDefault(require$$0$1);

  function handleElement(debugID, element) {
    if (element == null) {
      return;
    }
    if (element._shadowChildren === undefined) {
      return;
    }
    if (element._shadowChildren === element.props.children) {
      return;
    }
    var isMutated = false;
    if (Array.isArray(element._shadowChildren)) {
      if (element._shadowChildren.length === element.props.children.length) {
        for (var i = 0; i < element._shadowChildren.length; i++) {
          if (element._shadowChildren[i] !== element.props.children[i]) {
            isMutated = true;
          }
        }
      } else {
        isMutated = true;
      }
    }
    if (!Array.isArray(element._shadowChildren) || isMutated) {
      void 0;
    }
  }

  var ReactChildrenMutationWarningHook = {
    onMountComponent: function onMountComponent(debugID) {
      handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
    },
    onUpdateComponent: function onUpdateComponent(debugID) {
      handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
    }
  };

  module.exports = ReactChildrenMutationWarningHook;
});

var ReactChildrenMutationWarningHook$1 = interopDefault(ReactChildrenMutationWarningHook);

var require$$3$5 = Object.freeze({
  default: ReactChildrenMutationWarningHook$1
});

var performance = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var performance;

  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }

  module.exports = performance || {};
});

var performance$1 = interopDefault(performance);

var require$$0$8 = Object.freeze({
  default: performance$1
});

var performanceNow = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var performance = interopDefault(require$$0$8);

  var performanceNow;

  /**
   * Detect if we can use `window.performance.now()` and gracefully fallback to
   * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
   * because of Facebook's testing infrastructure.
   */
  if (performance.now) {
    performanceNow = function performanceNow() {
      return performance.now();
    };
  } else {
    performanceNow = function performanceNow() {
      return Date.now();
    };
  }

  module.exports = performanceNow;
});

var performanceNow$1 = interopDefault(performanceNow);

var require$$1$5 = Object.freeze({
  default: performanceNow$1
});

var ReactDebugTool = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDebugTool
   */

  'use strict';

  var ReactInvalidSetStateWarningHook = interopDefault(require$$6$5);
  var ReactHostOperationHistoryHook = interopDefault(require$$5$5);
  var ReactComponentTreeHook = interopDefault(require$$1$2);
  var ReactChildrenMutationWarningHook = interopDefault(require$$3$5);
  var ExecutionEnvironment = interopDefault(require$$7$3);

  var performanceNow = interopDefault(require$$1$5);
  var warning = interopDefault(require$$0$1);

  var hooks = [];
  var didHookThrowForEvent = {};

  function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
    try {
      fn.call(context, arg1, arg2, arg3, arg4, arg5);
    } catch (e) {
      void 0;
      didHookThrowForEvent[event] = true;
    }
  }

  function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
    for (var i = 0; i < hooks.length; i++) {
      var hook = hooks[i];
      var fn = hook[event];
      if (fn) {
        callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
      }
    }
  }

  var _isProfiling = false;
  var flushHistory = [];
  var lifeCycleTimerStack = [];
  var currentFlushNesting = 0;
  var currentFlushMeasurements = null;
  var currentFlushStartTime = null;
  var currentTimerDebugID = null;
  var currentTimerStartTime = null;
  var currentTimerNestedFlushDuration = null;
  var currentTimerType = null;

  var lifeCycleTimerHasWarned = false;

  function clearHistory() {
    ReactComponentTreeHook.purgeUnmountedComponents();
    ReactHostOperationHistoryHook.clearHistory();
  }

  function getTreeSnapshot(registeredIDs) {
    return registeredIDs.reduce(function (tree, id) {
      var ownerID = ReactComponentTreeHook.getOwnerID(id);
      var parentID = ReactComponentTreeHook.getParentID(id);
      tree[id] = {
        displayName: ReactComponentTreeHook.getDisplayName(id),
        text: ReactComponentTreeHook.getText(id),
        updateCount: ReactComponentTreeHook.getUpdateCount(id),
        childIDs: ReactComponentTreeHook.getChildIDs(id),
        // Text nodes don't have owners but this is close enough.
        ownerID: ownerID || ReactComponentTreeHook.getOwnerID(parentID),
        parentID: parentID
      };
      return tree;
    }, {});
  }

  function resetMeasurements() {
    var previousStartTime = currentFlushStartTime;
    var previousMeasurements = currentFlushMeasurements || [];
    var previousOperations = ReactHostOperationHistoryHook.getHistory();

    if (currentFlushNesting === 0) {
      currentFlushStartTime = null;
      currentFlushMeasurements = null;
      clearHistory();
      return;
    }

    if (previousMeasurements.length || previousOperations.length) {
      var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
      flushHistory.push({
        duration: performanceNow() - previousStartTime,
        measurements: previousMeasurements || [],
        operations: previousOperations || [],
        treeSnapshot: getTreeSnapshot(registeredIDs)
      });
    }

    clearHistory();
    currentFlushStartTime = performanceNow();
    currentFlushMeasurements = [];
  }

  function checkDebugID(debugID) {
    var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (allowRoot && debugID === 0) {
      return;
    }
    if (!debugID) {
      void 0;
    }
  }

  function beginLifeCycleTimer(debugID, timerType) {
    if (currentFlushNesting === 0) {
      return;
    }
    if (currentTimerType && !lifeCycleTimerHasWarned) {
      void 0;
      lifeCycleTimerHasWarned = true;
    }
    currentTimerStartTime = performanceNow();
    currentTimerNestedFlushDuration = 0;
    currentTimerDebugID = debugID;
    currentTimerType = timerType;
  }

  function endLifeCycleTimer(debugID, timerType) {
    if (currentFlushNesting === 0) {
      return;
    }
    if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
      void 0;
      lifeCycleTimerHasWarned = true;
    }
    if (_isProfiling) {
      currentFlushMeasurements.push({
        timerType: timerType,
        instanceID: debugID,
        duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
      });
    }
    currentTimerStartTime = null;
    currentTimerNestedFlushDuration = null;
    currentTimerDebugID = null;
    currentTimerType = null;
  }

  function pauseCurrentLifeCycleTimer() {
    var currentTimer = {
      startTime: currentTimerStartTime,
      nestedFlushStartTime: performanceNow(),
      debugID: currentTimerDebugID,
      timerType: currentTimerType
    };
    lifeCycleTimerStack.push(currentTimer);
    currentTimerStartTime = null;
    currentTimerNestedFlushDuration = null;
    currentTimerDebugID = null;
    currentTimerType = null;
  }

  function resumeCurrentLifeCycleTimer() {
    var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop();

    var startTime = _lifeCycleTimerStack$.startTime;
    var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
    var debugID = _lifeCycleTimerStack$.debugID;
    var timerType = _lifeCycleTimerStack$.timerType;

    var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
    currentTimerStartTime = startTime;
    currentTimerNestedFlushDuration += nestedFlushDuration;
    currentTimerDebugID = debugID;
    currentTimerType = timerType;
  }

  var ReactDebugTool = {
    addHook: function addHook(hook) {
      hooks.push(hook);
    },
    removeHook: function removeHook(hook) {
      for (var i = 0; i < hooks.length; i++) {
        if (hooks[i] === hook) {
          hooks.splice(i, 1);
          i--;
        }
      }
    },
    isProfiling: function isProfiling() {
      return _isProfiling;
    },
    beginProfiling: function beginProfiling() {
      if (_isProfiling) {
        return;
      }

      _isProfiling = true;
      flushHistory.length = 0;
      resetMeasurements();
      ReactDebugTool.addHook(ReactHostOperationHistoryHook);
    },
    endProfiling: function endProfiling() {
      if (!_isProfiling) {
        return;
      }

      _isProfiling = false;
      resetMeasurements();
      ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
    },
    getFlushHistory: function getFlushHistory() {
      return flushHistory;
    },
    onBeginFlush: function onBeginFlush() {
      currentFlushNesting++;
      resetMeasurements();
      pauseCurrentLifeCycleTimer();
      emitEvent('onBeginFlush');
    },
    onEndFlush: function onEndFlush() {
      resetMeasurements();
      currentFlushNesting--;
      resumeCurrentLifeCycleTimer();
      emitEvent('onEndFlush');
    },
    onBeginLifeCycleTimer: function onBeginLifeCycleTimer(debugID, timerType) {
      checkDebugID(debugID);
      emitEvent('onBeginLifeCycleTimer', debugID, timerType);
      beginLifeCycleTimer(debugID, timerType);
    },
    onEndLifeCycleTimer: function onEndLifeCycleTimer(debugID, timerType) {
      checkDebugID(debugID);
      endLifeCycleTimer(debugID, timerType);
      emitEvent('onEndLifeCycleTimer', debugID, timerType);
    },
    onBeginProcessingChildContext: function onBeginProcessingChildContext() {
      emitEvent('onBeginProcessingChildContext');
    },
    onEndProcessingChildContext: function onEndProcessingChildContext() {
      emitEvent('onEndProcessingChildContext');
    },
    onHostOperation: function onHostOperation(debugID, type, payload) {
      checkDebugID(debugID);
      emitEvent('onHostOperation', debugID, type, payload);
    },
    onSetState: function onSetState() {
      emitEvent('onSetState');
    },
    onSetChildren: function onSetChildren(debugID, childDebugIDs) {
      checkDebugID(debugID);
      childDebugIDs.forEach(checkDebugID);
      emitEvent('onSetChildren', debugID, childDebugIDs);
    },
    onBeforeMountComponent: function onBeforeMountComponent(debugID, element, parentDebugID) {
      checkDebugID(debugID);
      checkDebugID(parentDebugID, true);
      emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
    },
    onMountComponent: function onMountComponent(debugID) {
      checkDebugID(debugID);
      emitEvent('onMountComponent', debugID);
    },
    onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
      checkDebugID(debugID);
      emitEvent('onBeforeUpdateComponent', debugID, element);
    },
    onUpdateComponent: function onUpdateComponent(debugID) {
      checkDebugID(debugID);
      emitEvent('onUpdateComponent', debugID);
    },
    onBeforeUnmountComponent: function onBeforeUnmountComponent(debugID) {
      checkDebugID(debugID);
      emitEvent('onBeforeUnmountComponent', debugID);
    },
    onUnmountComponent: function onUnmountComponent(debugID) {
      checkDebugID(debugID);
      emitEvent('onUnmountComponent', debugID);
    },
    onTestEvent: function onTestEvent() {
      emitEvent('onTestEvent');
    }
  };

  // TODO remove these when RN/www gets updated
  ReactDebugTool.addDevtool = ReactDebugTool.addHook;
  ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

  ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
  ReactDebugTool.addHook(ReactComponentTreeHook);
  ReactDebugTool.addHook(ReactChildrenMutationWarningHook);
  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
  if (/[?&]react_perf\b/.test(url)) {
    ReactDebugTool.beginProfiling();
  }

  module.exports = ReactDebugTool;
});

interopDefault(ReactDebugTool);

var ReactInstrumentation = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInstrumentation
   */

  'use strict';

  var debugTool = null;

  if ("production" !== 'production') {}

  module.exports = { debugTool: debugTool };
});

var ReactInstrumentation$1 = interopDefault(ReactInstrumentation);
var debugTool = ReactInstrumentation.debugTool;

var require$$10 = Object.freeze({
  default: ReactInstrumentation$1,
  debugTool: debugTool
});

var ReactReconciler = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactReconciler
   */

  'use strict';

  var ReactRef = interopDefault(require$$2$7);
  var ReactInstrumentation = interopDefault(require$$10);

  var warning = interopDefault(require$$0$1);

  /**
   * Helper to call ReactRef.attachRefs with this composite component, split out
   * to avoid allocations in the transaction mount-ready queue.
   */
  function attachRefs() {
    ReactRef.attachRefs(this, this._currentElement);
  }

  var ReactReconciler = {

    /**
     * Initializes the component, renders markup, and registers event listeners.
     *
     * @param {ReactComponent} internalInstance
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {?object} the containing host component instance
     * @param {?object} info about the host container
     * @return {?string} Rendered markup to be inserted into the DOM.
     * @final
     * @internal
     */
    mountComponent: function mountComponent(internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID // 0 in production and for roots
    ) {
      if ("production" !== 'production') {}
      var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
      if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }
      if ("production" !== 'production') {}
      return markup;
    },

    /**
     * Returns a value that can be passed to
     * ReactComponentEnvironment.replaceNodeWithMarkup.
     */
    getHostNode: function getHostNode(internalInstance) {
      return internalInstance.getHostNode();
    },

    /**
     * Releases any resources allocated by `mountComponent`.
     *
     * @final
     * @internal
     */
    unmountComponent: function unmountComponent(internalInstance, safely) {
      if ("production" !== 'production') {}
      ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
      internalInstance.unmountComponent(safely);
      if ("production" !== 'production') {}
    },

    /**
     * Update a component using a new element.
     *
     * @param {ReactComponent} internalInstance
     * @param {ReactElement} nextElement
     * @param {ReactReconcileTransaction} transaction
     * @param {object} context
     * @internal
     */
    receiveComponent: function receiveComponent(internalInstance, nextElement, transaction, context) {
      var prevElement = internalInstance._currentElement;

      if (nextElement === prevElement && context === internalInstance._context) {
        // Since elements are immutable after the owner is rendered,
        // we can do a cheap identity compare here to determine if this is a
        // superfluous reconcile. It's possible for state to be mutable but such
        // change should trigger an update of the owner which would recreate
        // the element. We explicitly check for the existence of an owner since
        // it's possible for an element created outside a composite to be
        // deeply mutated and reused.

        // TODO: Bailing out early is just a perf optimization right?
        // TODO: Removing the return statement should affect correctness?
        return;
      }

      if ("production" !== 'production') {}

      var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);

      if (refsChanged) {
        ReactRef.detachRefs(internalInstance, prevElement);
      }

      internalInstance.receiveComponent(nextElement, transaction, context);

      if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
      }

      if ("production" !== 'production') {}
    },

    /**
     * Flush any dirty changes in a component.
     *
     * @param {ReactComponent} internalInstance
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, transaction, updateBatchNumber) {
      if (internalInstance._updateBatchNumber !== updateBatchNumber) {
        // The component's enqueued batch number should always be the current
        // batch or the following one.
        void 0;
        return;
      }
      if ("production" !== 'production') {}
      internalInstance.performUpdateIfNecessary(transaction);
      if ("production" !== 'production') {}
    }

  };

  module.exports = ReactReconciler;
});

var ReactReconciler$1 = interopDefault(ReactReconciler);

var require$$8$2 = Object.freeze({
  default: ReactReconciler$1
});

var Transaction = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule Transaction
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * `Transaction` creates a black box that is able to wrap any method such that
   * certain invariants are maintained before and after the method is invoked
   * (Even if an exception is thrown while invoking the wrapped method). Whoever
   * instantiates a transaction can provide enforcers of the invariants at
   * creation time. The `Transaction` class itself will supply one additional
   * automatic invariant for you - the invariant that any transaction instance
   * should not be run while it is already being run. You would typically create a
   * single instance of a `Transaction` for reuse multiple times, that potentially
   * is used to wrap several different methods. Wrappers are extremely simple -
   * they only require implementing two methods.
   *
   * <pre>
   *                       wrappers (injected at creation time)
   *                                      +        +
   *                                      |        |
   *                    +-----------------|--------|--------------+
   *                    |                 v        |              |
   *                    |      +---------------+   |              |
   *                    |   +--|    wrapper1   |---|----+         |
   *                    |   |  +---------------+   v    |         |
   *                    |   |          +-------------+  |         |
   *                    |   |     +----|   wrapper2  |--------+   |
   *                    |   |     |    +-------------+  |     |   |
   *                    |   |     |                     |     |   |
   *                    |   v     v                     v     v   | wrapper
   *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
   * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
   * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
   *                    | |   | |   |   |         |   |   | |   | |
   *                    | |   | |   |   |         |   |   | |   | |
   *                    | |   | |   |   |         |   |   | |   | |
   *                    | +---+ +---+   +---------+   +---+ +---+ |
   *                    |  initialize                    close    |
   *                    +-----------------------------------------+
   * </pre>
   *
   * Use cases:
   * - Preserving the input selection ranges before/after reconciliation.
   *   Restoring selection even in the event of an unexpected error.
   * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
   *   while guaranteeing that afterwards, the event system is reactivated.
   * - Flushing a queue of collected DOM mutations to the main UI thread after a
   *   reconciliation takes place in a worker thread.
   * - Invoking any collected `componentDidUpdate` callbacks after rendering new
   *   content.
   * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
   *   to preserve the `scrollTop` (an automatic scroll aware DOM).
   * - (Future use case): Layout calculations before and after DOM updates.
   *
   * Transactional plugin API:
   * - A module that has an `initialize` method that returns any precomputation.
   * - and a `close` method that accepts the precomputation. `close` is invoked
   *   when the wrapped process is completed, or has failed.
   *
   * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
   * that implement `initialize` and `close`.
   * @return {Transaction} Single transaction for reuse in thread.
   *
   * @class Transaction
   */
  var Mixin = {
    /**
     * Sets up this instance so that it is prepared for collecting metrics. Does
     * so such that this setup method may be used on an instance that is already
     * initialized, in a way that does not consume additional memory upon reuse.
     * That can be useful if you decide to make your subclass of this mixin a
     * "PooledClass".
     */
    reinitializeTransaction: function reinitializeTransaction() {
      this.transactionWrappers = this.getTransactionWrappers();
      if (this.wrapperInitData) {
        this.wrapperInitData.length = 0;
      } else {
        this.wrapperInitData = [];
      }
      this._isInTransaction = false;
    },

    _isInTransaction: false,

    /**
     * @abstract
     * @return {Array<TransactionWrapper>} Array of transaction wrappers.
     */
    getTransactionWrappers: null,

    isInTransaction: function isInTransaction() {
      return !!this._isInTransaction;
    },

    /**
     * Executes the function within a safety window. Use this for the top level
     * methods that result in large amounts of computation/mutations that would
     * need to be safety checked. The optional arguments helps prevent the need
     * to bind in many cases.
     *
     * @param {function} method Member of scope to call.
     * @param {Object} scope Scope to invoke from.
     * @param {Object?=} a Argument to pass to the method.
     * @param {Object?=} b Argument to pass to the method.
     * @param {Object?=} c Argument to pass to the method.
     * @param {Object?=} d Argument to pass to the method.
     * @param {Object?=} e Argument to pass to the method.
     * @param {Object?=} f Argument to pass to the method.
     *
     * @return {*} Return value from `method`.
     */
    perform: function perform(method, scope, a, b, c, d, e, f) {
      !!this.isInTransaction() ? _prodInvariant('27') : void 0;
      var errorThrown;
      var ret;
      try {
        this._isInTransaction = true;
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // one of these calls threw.
        errorThrown = true;
        this.initializeAll(0);
        ret = method.call(scope, a, b, c, d, e, f);
        errorThrown = false;
      } finally {
        try {
          if (errorThrown) {
            // If `method` throws, prefer to show that stack trace over any thrown
            // by invoking `closeAll`.
            try {
              this.closeAll(0);
            } catch (err) {}
          } else {
            // Since `method` didn't throw, we don't want to silence the exception
            // here.
            this.closeAll(0);
          }
        } finally {
          this._isInTransaction = false;
        }
      }
      return ret;
    },

    initializeAll: function initializeAll(startIndex) {
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        try {
          // Catching errors makes debugging more difficult, so we start with the
          // OBSERVED_ERROR state before overwriting it with the real return value
          // of initialize -- if it's still set to OBSERVED_ERROR in the finally
          // block, it means wrapper.initialize threw.
          this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
          this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
        } finally {
          if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
            // The initializer for wrapper i threw an error; initialize the
            // remaining wrappers but silence any exceptions from them to ensure
            // that the first error is the one to bubble up.
            try {
              this.initializeAll(i + 1);
            } catch (err) {}
          }
        }
      }
    },

    /**
     * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
     * them the respective return values of `this.transactionWrappers.init[i]`
     * (`close`rs that correspond to initializers that failed will not be
     * invoked).
     */
    closeAll: function closeAll(startIndex) {
      !this.isInTransaction() ? _prodInvariant('28') : void 0;
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
        var wrapper = transactionWrappers[i];
        var initData = this.wrapperInitData[i];
        var errorThrown;
        try {
          // Catching errors makes debugging more difficult, so we start with
          // errorThrown set to true before setting it to false after calling
          // close -- if it's still set to true in the finally block, it means
          // wrapper.close threw.
          errorThrown = true;
          if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
            wrapper.close.call(this, initData);
          }
          errorThrown = false;
        } finally {
          if (errorThrown) {
            // The closer for wrapper i threw an error; close the remaining
            // wrappers but silence any exceptions from them to ensure that the
            // first error is the one to bubble up.
            try {
              this.closeAll(i + 1);
            } catch (e) {}
          }
        }
      }
      this.wrapperInitData.length = 0;
    }
  };

  var Transaction = {

    Mixin: Mixin,

    /**
     * Token to look for to determine if an error occurred.
     */
    OBSERVED_ERROR: {}

  };

  module.exports = Transaction;
});

var Transaction$1 = interopDefault(Transaction);

var require$$1$6 = Object.freeze({
  default: Transaction$1
});

var ReactUpdates = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactUpdates
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var CallbackQueue = interopDefault(require$$6$4);
  var PooledClass = interopDefault(require$$5);
  var ReactFeatureFlags = interopDefault(require$$12$1);
  var ReactReconciler = interopDefault(require$$8$2);
  var Transaction = interopDefault(require$$1$6);

  var invariant = interopDefault(require$$1);

  var dirtyComponents = [];
  var updateBatchNumber = 0;
  var asapCallbackQueue = CallbackQueue.getPooled();
  var asapEnqueued = false;

  var batchingStrategy = null;

  function ensureInjected() {
    !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? _prodInvariant('123') : void 0;
  }

  var NESTED_UPDATES = {
    initialize: function initialize() {
      this.dirtyComponentsLength = dirtyComponents.length;
    },
    close: function close() {
      if (this.dirtyComponentsLength !== dirtyComponents.length) {
        // Additional updates were enqueued by componentDidUpdate handlers or
        // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
        // these new updates so that if A's componentDidUpdate calls setState on
        // B, B will update before the callback A's updater provided when calling
        // setState.
        dirtyComponents.splice(0, this.dirtyComponentsLength);
        flushBatchedUpdates();
      } else {
        dirtyComponents.length = 0;
      }
    }
  };

  var UPDATE_QUEUEING = {
    initialize: function initialize() {
      this.callbackQueue.reset();
    },
    close: function close() {
      this.callbackQueue.notifyAll();
    }
  };

  var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

  function ReactUpdatesFlushTransaction() {
    this.reinitializeTransaction();
    this.dirtyComponentsLength = null;
    this.callbackQueue = CallbackQueue.getPooled();
    this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(
    /* useCreateElement */true);
  }

  _assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
    getTransactionWrappers: function getTransactionWrappers() {
      return TRANSACTION_WRAPPERS;
    },

    destructor: function destructor() {
      this.dirtyComponentsLength = null;
      CallbackQueue.release(this.callbackQueue);
      this.callbackQueue = null;
      ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
      this.reconcileTransaction = null;
    },

    perform: function perform(method, scope, a) {
      // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
      // with this transaction's wrappers around it.
      return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
    }
  });

  PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

  function batchedUpdates(callback, a, b, c, d, e) {
    ensureInjected();
    batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
  }

  /**
   * Array comparator for ReactComponents by mount ordering.
   *
   * @param {ReactComponent} c1 first component you're comparing
   * @param {ReactComponent} c2 second component you're comparing
   * @return {number} Return value usable by Array.prototype.sort().
   */
  function mountOrderComparator(c1, c2) {
    return c1._mountOrder - c2._mountOrder;
  }

  function runBatchedUpdates(transaction) {
    var len = transaction.dirtyComponentsLength;
    !(len === dirtyComponents.length) ? _prodInvariant('124', len, dirtyComponents.length) : void 0;

    // Since reconciling a component higher in the owner hierarchy usually (not
    // always -- see shouldComponentUpdate()) will reconcile children, reconcile
    // them before their children by sorting the array.
    dirtyComponents.sort(mountOrderComparator);

    // Any updates enqueued while reconciling must be performed after this entire
    // batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
    // C, B could update twice in a single batch if C's render enqueues an update
    // to B (since B would have already updated, we should skip it, and the only
    // way we can know to do so is by checking the batch counter).
    updateBatchNumber++;

    for (var i = 0; i < len; i++) {
      // If a component is unmounted before pending changes apply, it will still
      // be here, but we assume that it has cleared its _pendingCallbacks and
      // that performUpdateIfNecessary is a noop.
      var component = dirtyComponents[i];

      // If performUpdateIfNecessary happens to enqueue any new updates, we
      // shouldn't execute the callbacks until the next render happens, so
      // stash the callbacks first
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;

      var markerName;
      if (ReactFeatureFlags.logTopLevelRenders) {
        var namedComponent = component;
        // Duck type TopLevelWrapper. This is probably always true.
        if (component._currentElement.props === component._renderedComponent._currentElement) {
          namedComponent = component._renderedComponent;
        }
        markerName = 'React update: ' + namedComponent.getName();
        console.time(markerName);
      }

      ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);

      if (markerName) {
        console.timeEnd(markerName);
      }

      if (callbacks) {
        for (var j = 0; j < callbacks.length; j++) {
          transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
        }
      }
    }
  }

  var flushBatchedUpdates = function flushBatchedUpdates() {
    // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
    // array and perform any updates enqueued by mount-ready handlers (i.e.,
    // componentDidUpdate) but we need to check here too in order to catch
    // updates enqueued by setState callbacks and asap calls.
    while (dirtyComponents.length || asapEnqueued) {
      if (dirtyComponents.length) {
        var transaction = ReactUpdatesFlushTransaction.getPooled();
        transaction.perform(runBatchedUpdates, null, transaction);
        ReactUpdatesFlushTransaction.release(transaction);
      }

      if (asapEnqueued) {
        asapEnqueued = false;
        var queue = asapCallbackQueue;
        asapCallbackQueue = CallbackQueue.getPooled();
        queue.notifyAll();
        CallbackQueue.release(queue);
      }
    }
  };

  /**
   * Mark a component as needing a rerender, adding an optional callback to a
   * list of functions which will be executed once the rerender occurs.
   */
  function enqueueUpdate(component) {
    ensureInjected();

    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (This is called by each top-level update
    // function, like setState, forceUpdate, etc.; creation and
    // destruction of top-level components is guarded in ReactMount.)

    if (!batchingStrategy.isBatchingUpdates) {
      batchingStrategy.batchedUpdates(enqueueUpdate, component);
      return;
    }

    dirtyComponents.push(component);
    if (component._updateBatchNumber == null) {
      component._updateBatchNumber = updateBatchNumber + 1;
    }
  }

  /**
   * Enqueue a callback to be run at the end of the current batching cycle. Throws
   * if no updates are currently being performed.
   */
  function asap(callback, context) {
    !batchingStrategy.isBatchingUpdates ? _prodInvariant('125') : void 0;
    asapCallbackQueue.enqueue(callback, context);
    asapEnqueued = true;
  }

  var ReactUpdatesInjection = {
    injectReconcileTransaction: function injectReconcileTransaction(ReconcileTransaction) {
      !ReconcileTransaction ? _prodInvariant('126') : void 0;
      ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
    },

    injectBatchingStrategy: function injectBatchingStrategy(_batchingStrategy) {
      !_batchingStrategy ? _prodInvariant('127') : void 0;
      !(typeof _batchingStrategy.batchedUpdates === 'function') ? _prodInvariant('128') : void 0;
      !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? _prodInvariant('129') : void 0;
      batchingStrategy = _batchingStrategy;
    }
  };

  var ReactUpdates = {
    /**
     * React references `ReactReconcileTransaction` using this property in order
     * to allow dependency injection.
     *
     * @internal
     */
    ReactReconcileTransaction: null,

    batchedUpdates: batchedUpdates,
    enqueueUpdate: enqueueUpdate,
    flushBatchedUpdates: flushBatchedUpdates,
    injection: ReactUpdatesInjection,
    asap: asap
  };

  module.exports = ReactUpdates;
});

var ReactUpdates$1 = interopDefault(ReactUpdates);

var require$$6$3 = Object.freeze({
  default: ReactUpdates$1
});

var getEventTarget = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getEventTarget
   */

  'use strict';

  /**
   * Gets the target node from a native browser event by accounting for
   * inconsistencies in browser DOM APIs.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {DOMEventTarget} Target node.
   */

  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;

    // Normalize SVG <use> element events #4963
    if (target.correspondingUseElement) {
      target = target.correspondingUseElement;
    }

    // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
    // @see http://www.quirksmode.org/js/events_properties.html
    return target.nodeType === 3 ? target.parentNode : target;
  }

  module.exports = getEventTarget;
});

var getEventTarget$1 = interopDefault(getEventTarget);

var require$$1$7 = Object.freeze({
  default: getEventTarget$1
});

var isEventSupported = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule isEventSupported
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
  }

  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }

    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;

    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }

  module.exports = isEventSupported;
});

var isEventSupported$1 = interopDefault(isEventSupported);

var require$$0$9 = Object.freeze({
  default: isEventSupported$1
});

var isTextInputElement = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule isTextInputElement
   * 
   */

  'use strict';

  /**
   * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
   */

  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };

  function isTextInputElement(elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

    if (nodeName === 'input') {
      return !!supportedInputTypes[elem.type];
    }

    if (nodeName === 'textarea') {
      return true;
    }

    return false;
  }

  module.exports = isTextInputElement;
});

var isTextInputElement$1 = interopDefault(isTextInputElement);

var require$$2$8 = Object.freeze({
  default: isTextInputElement$1
});

var ChangeEventPlugin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ChangeEventPlugin
   */

  'use strict';

  var EventConstants = interopDefault(require$$18);
  var EventPluginHub = interopDefault(require$$7$2);
  var EventPropagators = interopDefault(require$$16$1);
  var ExecutionEnvironment = interopDefault(require$$7$3);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactUpdates = interopDefault(require$$6$3);
  var SyntheticEvent = interopDefault(require$$0$6);

  var getEventTarget = interopDefault(require$$1$7);
  var isEventSupported = interopDefault(require$$0$9);
  var isTextInputElement = interopDefault(require$$2$8);
  var keyOf = interopDefault(require$$0$3);

  var topLevelTypes = EventConstants.topLevelTypes;

  var eventTypes = {
    change: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onChange: null }),
        captured: keyOf({ onChangeCapture: null })
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
    }
  };

  /**
   * For IE shims
   */
  var activeElement = null;
  var activeElementInst = null;
  var activeElementValue = null;
  var activeElementValueProp = null;

  /**
   * SECTION: handle `change` event
   */
  function shouldUseChangeEvent(elem) {
    var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
  }

  var doesChangeEventBubble = false;
  if (ExecutionEnvironment.canUseDOM) {
    // See `handleChange` comment below
    doesChangeEventBubble = isEventSupported('change') && (!document.documentMode || document.documentMode > 8);
  }

  function manualDispatchChangeEvent(nativeEvent) {
    var event = SyntheticEvent.getPooled(eventTypes.change, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
    EventPropagators.accumulateTwoPhaseDispatches(event);

    // If change and propertychange bubbled, we'd just bind to it like all the
    // other events and have it go through ReactBrowserEventEmitter. Since it
    // doesn't, we manually listen for the events and so we have to enqueue and
    // process the abstract event manually.
    //
    // Batching is necessary here in order to ensure that all event handlers run
    // before the next rerender (including event handlers attached to ancestor
    // elements instead of directly on the input). Without this, controlled
    // components don't work properly in conjunction with event bubbling because
    // the component is rerendered and the value reverted before all the event
    // handlers can run. See https://github.com/facebook/react/issues/708.
    ReactUpdates.batchedUpdates(runEventInBatch, event);
  }

  function runEventInBatch(event) {
    EventPluginHub.enqueueEvents(event);
    EventPluginHub.processEventQueue(false);
  }

  function startWatchingForChangeEventIE8(target, targetInst) {
    activeElement = target;
    activeElementInst = targetInst;
    activeElement.attachEvent('onchange', manualDispatchChangeEvent);
  }

  function stopWatchingForChangeEventIE8() {
    if (!activeElement) {
      return;
    }
    activeElement.detachEvent('onchange', manualDispatchChangeEvent);
    activeElement = null;
    activeElementInst = null;
  }

  function getTargetInstForChangeEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topChange) {
      return targetInst;
    }
  }
  function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
    if (topLevelType === topLevelTypes.topFocus) {
      // stopWatching() should be a noop here but we call it just in case we
      // missed a blur event somehow.
      stopWatchingForChangeEventIE8();
      startWatchingForChangeEventIE8(target, targetInst);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForChangeEventIE8();
    }
  }

  /**
   * SECTION: handle `input` event
   */
  var isInputEventSupported = false;
  if (ExecutionEnvironment.canUseDOM) {
    // IE9 claims to support the input event but fails to trigger it when
    // deleting text, so we ignore its input events.
    // IE10+ fire input events to often, such when a placeholder
    // changes or when an input with a placeholder is focused.
    isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 11);
  }

  /**
   * (For IE <=11) Replacement getter/setter for the `value` property that gets
   * set on the active element.
   */
  var newValueProp = {
    get: function get() {
      return activeElementValueProp.get.call(this);
    },
    set: function set(val) {
      // Cast to a string so we can do equality checks.
      activeElementValue = '' + val;
      activeElementValueProp.set.call(this, val);
    }
  };

  /**
   * (For IE <=11) Starts tracking propertychange events on the passed-in element
   * and override the value property so that we can distinguish user events from
   * value changes in JS.
   */
  function startWatchingForValueChange(target, targetInst) {
    activeElement = target;
    activeElementInst = targetInst;
    activeElementValue = target.value;
    activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');

    // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
    // on DOM elements
    Object.defineProperty(activeElement, 'value', newValueProp);
    if (activeElement.attachEvent) {
      activeElement.attachEvent('onpropertychange', handlePropertyChange);
    } else {
      activeElement.addEventListener('propertychange', handlePropertyChange, false);
    }
  }

  /**
   * (For IE <=11) Removes the event listeners from the currently-tracked element,
   * if any exists.
   */
  function stopWatchingForValueChange() {
    if (!activeElement) {
      return;
    }

    // delete restores the original property definition
    delete activeElement.value;

    if (activeElement.detachEvent) {
      activeElement.detachEvent('onpropertychange', handlePropertyChange);
    } else {
      activeElement.removeEventListener('propertychange', handlePropertyChange, false);
    }

    activeElement = null;
    activeElementInst = null;
    activeElementValue = null;
    activeElementValueProp = null;
  }

  /**
   * (For IE <=11) Handles a propertychange event, sending a `change` event if
   * the value of the active element has changed.
   */
  function handlePropertyChange(nativeEvent) {
    if (nativeEvent.propertyName !== 'value') {
      return;
    }
    var value = nativeEvent.srcElement.value;
    if (value === activeElementValue) {
      return;
    }
    activeElementValue = value;

    manualDispatchChangeEvent(nativeEvent);
  }

  /**
   * If a `change` event should be fired, returns the target's ID.
   */
  function getTargetInstForInputEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topInput) {
      // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
      // what we want so fall through here and trigger an abstract event
      return targetInst;
    }
  }

  function handleEventsForInputEventIE(topLevelType, target, targetInst) {
    if (topLevelType === topLevelTypes.topFocus) {
      // In IE8, we can capture almost all .value changes by adding a
      // propertychange handler and looking for events with propertyName
      // equal to 'value'
      // In IE9-11, propertychange fires for most input events but is buggy and
      // doesn't fire when text is deleted, but conveniently, selectionchange
      // appears to fire in all of the remaining cases so we catch those and
      // forward the event if the value has changed
      // In either case, we don't want to call the event handler if the value
      // is changed from JS so we redefine a setter for `.value` that updates
      // our activeElementValue variable, allowing us to ignore those changes
      //
      // stopWatching() should be a noop here but we call it just in case we
      // missed a blur event somehow.
      stopWatchingForValueChange();
      startWatchingForValueChange(target, targetInst);
    } else if (topLevelType === topLevelTypes.topBlur) {
      stopWatchingForValueChange();
    }
  }

  // For IE8 and IE9.
  function getTargetInstForInputEventIE(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
      // On the selectionchange event, the target is just document which isn't
      // helpful for us so just check activeElement instead.
      //
      // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
      // propertychange on the first input event after setting `value` from a
      // script and fires only keydown, keypress, keyup. Catching keyup usually
      // gets it and catching keydown lets us fire an event for the first
      // keystroke if user does a key repeat (it'll be a little delayed: right
      // before the second keystroke). Other input methods (e.g., paste) seem to
      // fire selectionchange normally.
      if (activeElement && activeElement.value !== activeElementValue) {
        activeElementValue = activeElement.value;
        return activeElementInst;
      }
    }
  }

  /**
   * SECTION: handle `click` event
   */
  function shouldUseClickEvent(elem) {
    // Use the `click` event to detect changes to checkbox and radio inputs.
    // This approach works across all browsers, whereas `change` does not fire
    // until `blur` in IE8.
    return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
  }

  function getTargetInstForClickEvent(topLevelType, targetInst) {
    if (topLevelType === topLevelTypes.topClick) {
      return targetInst;
    }
  }

  /**
   * This plugin creates an `onChange` event that normalizes change events
   * across form elements. This event fires at a time when it's possible to
   * change the element's value without seeing a flicker.
   *
   * Supported elements are:
   * - input (see `isTextInputElement`)
   * - textarea
   * - select
   */
  var ChangeEventPlugin = {

    eventTypes: eventTypes,

    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

      var getTargetInstFunc, handleEventFunc;
      if (shouldUseChangeEvent(targetNode)) {
        if (doesChangeEventBubble) {
          getTargetInstFunc = getTargetInstForChangeEvent;
        } else {
          handleEventFunc = handleEventsForChangeEventIE8;
        }
      } else if (isTextInputElement(targetNode)) {
        if (isInputEventSupported) {
          getTargetInstFunc = getTargetInstForInputEvent;
        } else {
          getTargetInstFunc = getTargetInstForInputEventIE;
          handleEventFunc = handleEventsForInputEventIE;
        }
      } else if (shouldUseClickEvent(targetNode)) {
        getTargetInstFunc = getTargetInstForClickEvent;
      }

      if (getTargetInstFunc) {
        var inst = getTargetInstFunc(topLevelType, targetInst);
        if (inst) {
          var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
          event.type = 'change';
          EventPropagators.accumulateTwoPhaseDispatches(event);
          return event;
        }
      }

      if (handleEventFunc) {
        handleEventFunc(topLevelType, targetNode, targetInst);
      }
    }

  };

  module.exports = ChangeEventPlugin;
});

var ChangeEventPlugin$1 = interopDefault(ChangeEventPlugin);

var require$$16$2 = Object.freeze({
  default: ChangeEventPlugin$1
});

var DefaultEventPluginOrder = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DefaultEventPluginOrder
   */

  'use strict';

  var keyOf = interopDefault(require$$0$3);

  /**
   * Module that is injectable into `EventPluginHub`, that specifies a
   * deterministic ordering of `EventPlugin`s. A convenient way to reason about
   * plugins, without having to package every one of them. This is better than
   * having plugins be ordered in the same order that they are injected because
   * that ordering would be influenced by the packaging order.
   * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
   * preventing default on events is convenient in `SimpleEventPlugin` handlers.
   */
  var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];

  module.exports = DefaultEventPluginOrder;
});

var DefaultEventPluginOrder$1 = interopDefault(DefaultEventPluginOrder);

var require$$15 = Object.freeze({
  default: DefaultEventPluginOrder$1
});

var SyntheticUIEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticUIEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  var getEventTarget = interopDefault(require$$1$7);

  /**
   * @interface UIEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var UIEventInterface = {
    view: function view(event) {
      if (event.view) {
        return event.view;
      }

      var target = getEventTarget(event);
      if (target.window === target) {
        // target is a window object
        return target;
      }

      var doc = target.ownerDocument;
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function detail(event) {
      return event.detail || 0;
    }
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticEvent}
   */
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

  module.exports = SyntheticUIEvent;
});

var SyntheticUIEvent$1 = interopDefault(SyntheticUIEvent);

var require$$1$8 = Object.freeze({
  default: SyntheticUIEvent$1
});

var ViewportMetrics = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ViewportMetrics
   */

  'use strict';

  var ViewportMetrics = {

    currentScrollLeft: 0,

    currentScrollTop: 0,

    refreshScrollValues: function refreshScrollValues(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }

  };

  module.exports = ViewportMetrics;
});

var ViewportMetrics$1 = interopDefault(ViewportMetrics);

var require$$2$9 = Object.freeze({
  default: ViewportMetrics$1
});

var getEventModifierState = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getEventModifierState
   */

  'use strict';

  /**
   * Translation from modifier key to the associated property in the event.
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
   */

  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };

  // IE8 does not implement getModifierState so we simply map it to the only
  // modifier keys exposed by the event itself, does not support Lock-keys.
  // Currently, all major browsers except Chrome seems to support Lock-keys.
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }

  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }

  module.exports = getEventModifierState;
});

var getEventModifierState$1 = interopDefault(getEventModifierState);

var require$$0$11 = Object.freeze({
  default: getEventModifierState$1
});

var SyntheticMouseEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticMouseEvent
   */

  'use strict';

  var SyntheticUIEvent = interopDefault(require$$1$8);
  var ViewportMetrics = interopDefault(require$$2$9);

  var getEventModifierState = interopDefault(require$$0$11);

  /**
   * @interface MouseEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function button(event) {
      // Webkit, Firefox, IE9+
      // which:  1 2 3
      // button: 0 1 2 (standard)
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      // IE<9
      // which:  undefined
      // button: 0 0 0
      // button: 1 4 2 (onmouseup)
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function relatedTarget(event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    // "Proprietary" Interface.
    pageX: function pageX(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function pageY(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

  module.exports = SyntheticMouseEvent;
});

var SyntheticMouseEvent$1 = interopDefault(SyntheticMouseEvent);

var require$$0$10 = Object.freeze({
  default: SyntheticMouseEvent$1
});

var EnterLeaveEventPlugin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule EnterLeaveEventPlugin
   */

  'use strict';

  var EventConstants = interopDefault(require$$18);
  var EventPropagators = interopDefault(require$$16$1);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var SyntheticMouseEvent = interopDefault(require$$0$10);

  var keyOf = interopDefault(require$$0$3);

  var topLevelTypes = EventConstants.topLevelTypes;

  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({ onMouseEnter: null }),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({ onMouseLeave: null }),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };

  var EnterLeaveEventPlugin = {

    eventTypes: eventTypes,

    /**
     * For almost every interaction we care about, there will be both a top-level
     * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
     * we do not extract duplicate events. However, moving the mouse into the
     * browser from outside will not fire a `mouseout` event. In this case, we use
     * the `mouseover` top-level event.
     */
    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        // Must not be a mouse in or mouse out - ignoring.
        return null;
      }

      var win;
      if (nativeEventTarget.window === nativeEventTarget) {
        // `nativeEventTarget` is probably a window object.
        win = nativeEventTarget;
      } else {
        // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
        var doc = nativeEventTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }

      var from;
      var to;
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = targetInst;
        var related = nativeEvent.relatedTarget || nativeEvent.toElement;
        to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
      } else {
        // Moving to a node from outside the window.
        from = null;
        to = targetInst;
      }

      if (from === to) {
        // Nothing pertains to our managed components.
        return null;
      }

      var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
      var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);

      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
      leave.type = 'mouseleave';
      leave.target = fromNode;
      leave.relatedTarget = toNode;

      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
      enter.type = 'mouseenter';
      enter.target = toNode;
      enter.relatedTarget = fromNode;

      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);

      return [leave, enter];
    }

  };

  module.exports = EnterLeaveEventPlugin;
});

var EnterLeaveEventPlugin$1 = interopDefault(EnterLeaveEventPlugin);

var require$$14 = Object.freeze({
  default: EnterLeaveEventPlugin$1
});

var HTMLDOMPropertyConfig = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule HTMLDOMPropertyConfig
   */

  'use strict';

  var DOMProperty = interopDefault(require$$3$3);

  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
    Properties: {
      /**
       * Standard Properties
       */
      accept: 0,
      acceptCharset: 0,
      accessKey: 0,
      action: 0,
      allowFullScreen: HAS_BOOLEAN_VALUE,
      allowTransparency: 0,
      alt: 0,
      // specifies target context for links with `preload` type
      as: 0,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: 0,
      // autoFocus is polyfilled/normalized by AutoFocusUtils
      // autoFocus: HAS_BOOLEAN_VALUE,
      autoPlay: HAS_BOOLEAN_VALUE,
      capture: HAS_BOOLEAN_VALUE,
      cellPadding: 0,
      cellSpacing: 0,
      charSet: 0,
      challenge: 0,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      cite: 0,
      classID: 0,
      className: 0,
      cols: HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: 0,
      content: 0,
      contentEditable: 0,
      contextMenu: 0,
      controls: HAS_BOOLEAN_VALUE,
      coords: 0,
      crossOrigin: 0,
      data: 0, // For `<object />` acts as `src`.
      dateTime: 0,
      'default': HAS_BOOLEAN_VALUE,
      defer: HAS_BOOLEAN_VALUE,
      dir: 0,
      disabled: HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: 0,
      encType: 0,
      form: 0,
      formAction: 0,
      formEncType: 0,
      formMethod: 0,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: 0,
      frameBorder: 0,
      headers: 0,
      height: 0,
      hidden: HAS_BOOLEAN_VALUE,
      high: 0,
      href: 0,
      hrefLang: 0,
      htmlFor: 0,
      httpEquiv: 0,
      icon: 0,
      id: 0,
      inputMode: 0,
      integrity: 0,
      is: 0,
      keyParams: 0,
      keyType: 0,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: HAS_BOOLEAN_VALUE,
      low: 0,
      manifest: 0,
      marginHeight: 0,
      marginWidth: 0,
      max: 0,
      maxLength: 0,
      media: 0,
      mediaGroup: 0,
      method: 0,
      min: 0,
      minLength: 0,
      // Caution; `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`.
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: 0,
      nonce: 0,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      playsInline: HAS_BOOLEAN_VALUE,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 0,
      readOnly: HAS_BOOLEAN_VALUE,
      referrerPolicy: 0,
      rel: 0,
      required: HAS_BOOLEAN_VALUE,
      reversed: HAS_BOOLEAN_VALUE,
      role: 0,
      rows: HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: HAS_NUMERIC_VALUE,
      sandbox: 0,
      scope: 0,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: 0,
      seamless: HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: 0,
      size: HAS_POSITIVE_NUMERIC_VALUE,
      sizes: 0,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: 0,
      src: 0,
      srcDoc: 0,
      srcLang: 0,
      srcSet: 0,
      start: HAS_NUMERIC_VALUE,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 0,
      target: 0,
      title: 0,
      // Setting .type throws on non-<input> tags
      type: 0,
      useMap: 0,
      value: 0,
      width: 0,
      wmode: 0,
      wrap: 0,

      /**
       * RDFa Properties
       */
      about: 0,
      datatype: 0,
      inlist: 0,
      prefix: 0,
      // property is also supported for OpenGraph in meta tags.
      property: 0,
      resource: 0,
      'typeof': 0,
      vocab: 0,

      /**
       * Non-standard Properties
       */
      // autoCapitalize and autoCorrect are supported in Mobile Safari for
      // keyboard hints.
      autoCapitalize: 0,
      autoCorrect: 0,
      // autoSave allows WebKit/Blink to persist values of input fields on page reloads
      autoSave: 0,
      // color is for Safari mask-icon link
      color: 0,
      // itemProp, itemScope, itemType are for
      // Microdata support. See http://schema.org/docs/gs.html
      itemProp: 0,
      itemScope: HAS_BOOLEAN_VALUE,
      itemType: 0,
      // itemID and itemRef are for Microdata support as well but
      // only specified in the WHATWG spec document. See
      // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
      itemID: 0,
      itemRef: 0,
      // results show looking glass icon and recent searches on input
      // search fields in WebKit/Blink
      results: 0,
      // IE-only attribute that specifies security restrictions on an iframe
      // as an alternative to the sandbox attribute on IE<10
      security: 0,
      // IE-only attribute that controls focus behavior
      unselectable: 0
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {}
  };

  module.exports = HTMLDOMPropertyConfig;
});

var HTMLDOMPropertyConfig$1 = interopDefault(HTMLDOMPropertyConfig);

var require$$13$1 = Object.freeze({
  default: HTMLDOMPropertyConfig$1
});

var DOMNamespaces = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DOMNamespaces
   */

  'use strict';

  var DOMNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg'
  };

  module.exports = DOMNamespaces;
});

var DOMNamespaces$1 = interopDefault(DOMNamespaces);

var require$$24 = Object.freeze({
  default: DOMNamespaces$1
});

var createMicrosoftUnsafeLocalFunction = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule createMicrosoftUnsafeLocalFunction
   */

  /* globals MSApp */

  'use strict';

  /**
   * Create a function which has 'unsafe' privileges (required by windows8 apps)
   */

  var createMicrosoftUnsafeLocalFunction = function createMicrosoftUnsafeLocalFunction(func) {
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      return function (arg0, arg1, arg2, arg3) {
        MSApp.execUnsafeLocalFunction(function () {
          return func(arg0, arg1, arg2, arg3);
        });
      };
    } else {
      return func;
    }
  };

  module.exports = createMicrosoftUnsafeLocalFunction;
});

var createMicrosoftUnsafeLocalFunction$1 = interopDefault(createMicrosoftUnsafeLocalFunction);

var require$$0$12 = Object.freeze({
  default: createMicrosoftUnsafeLocalFunction$1
});

var setInnerHTML = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule setInnerHTML
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);
  var DOMNamespaces = interopDefault(require$$24);

  var WHITESPACE_TEST = /^[ \r\n\t\f]/;
  var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

  var createMicrosoftUnsafeLocalFunction = interopDefault(require$$0$12);

  // SVG temp container for IE lacking innerHTML
  var reusableSVGContainer;

  /**
   * Set the innerHTML property of a node, ensuring that whitespace is preserved
   * even in IE8.
   *
   * @param {DOMElement} node
   * @param {string} html
   * @internal
   */
  var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
    // IE does not have innerHTML for SVG nodes, so instead we inject the
    // new markup in a temp node and then move the child nodes across into
    // the target node
    if (node.namespaceURI === DOMNamespaces.svg && !('innerHTML' in node)) {
      reusableSVGContainer = reusableSVGContainer || document.createElement('div');
      reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
      var svgNode = reusableSVGContainer.firstChild;
      while (svgNode.firstChild) {
        node.appendChild(svgNode.firstChild);
      }
    } else {
      node.innerHTML = html;
    }
  });

  if (ExecutionEnvironment.canUseDOM) {
    // IE8: When updating a just created node with innerHTML only leading
    // whitespace is removed. When updating an existing node with innerHTML
    // whitespace in root TextNodes is also collapsed.
    // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

    // Feature detection; only IE8 is known to behave improperly like this.
    var testElement = document.createElement('div');
    testElement.innerHTML = ' ';
    if (testElement.innerHTML === '') {
      setInnerHTML = function setInnerHTML(node, html) {
        // Magic theory: IE8 supposedly differentiates between added and updated
        // nodes when processing innerHTML, innerHTML on updated nodes suffers
        // from worse whitespace behavior. Re-adding a node like this triggers
        // the initial and more favorable whitespace behavior.
        // TODO: What to do on a detached node?
        if (node.parentNode) {
          node.parentNode.replaceChild(node, node);
        }

        // We also implement a workaround for non-visible tags disappearing into
        // thin air on IE8, this only happens if there is no visible text
        // in-front of the non-visible tags. Piggyback on the whitespace fix
        // and simply check if any non-visible tags appear in the source.
        if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
          // Recover leading whitespace by temporarily prepending any character.
          // \uFEFF has the potential advantage of being zero-width/invisible.
          // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
          // in hopes that this is preserved even if "\uFEFF" is transformed to
          // the actual Unicode character (by Babel, for example).
          // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
          node.innerHTML = String.fromCharCode(0xFEFF) + html;

          // deleteData leaves an empty `TextNode` which offsets the index of all
          // children. Definitely want to avoid this.
          var textNode = node.firstChild;
          if (textNode.data.length === 1) {
            node.removeChild(textNode);
          } else {
            textNode.deleteData(0, 1);
          }
        } else {
          node.innerHTML = html;
        }
      };
    }
    testElement = null;
  }

  module.exports = setInnerHTML;
});

var setInnerHTML$1 = interopDefault(setInnerHTML);

var require$$2$10 = Object.freeze({
  default: setInnerHTML$1
});

var escapeTextContentForBrowser = createCommonjsModule(function (module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * Based on the escape-html library, which is used under the MIT License below:
   *
   * Copyright (c) 2012-2013 TJ Holowaychuk
   * Copyright (c) 2015 Andreas Lubbe
   * Copyright (c) 2015 Tiancheng "Timothy" Gu
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * 'Software'), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   * @providesModule escapeTextContentForBrowser
   */

  'use strict';

  // code copied and modified from escape-html
  /**
   * Module variables.
   * @private
   */

  var matchHtmlRegExp = /["'&<>]/;

  /**
   * Escape special characters in the given string of html.
   *
   * @param  {string} string The string to escape for inserting into HTML
   * @return {string}
   * @public
   */

  function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);

    if (!match) {
      return str;
    }

    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          // "
          escape = '&quot;';
          break;
        case 38:
          // &
          escape = '&amp;';
          break;
        case 39:
          // '
          escape = '&#x27;'; // modified from escape-html; used to be '&#39'
          break;
        case 60:
          // <
          escape = '&lt;';
          break;
        case 62:
          // >
          escape = '&gt;';
          break;
        default:
          continue;
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }

      lastIndex = index + 1;
      html += escape;
    }

    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  // end code copied and modified from escape-html


  /**
   * Escapes text to prevent scripting attacks.
   *
   * @param {*} text Text value to escape.
   * @return {string} An escaped string.
   */
  function escapeTextContentForBrowser(text) {
    if (typeof text === 'boolean' || typeof text === 'number') {
      // this shortcircuit helps perf for types that we know will never have
      // special characters, especially given that this function is used often
      // for numeric dom ids.
      return '' + text;
    }
    return escapeHtml(text);
  }

  module.exports = escapeTextContentForBrowser;
});

var escapeTextContentForBrowser$1 = interopDefault(escapeTextContentForBrowser);

var require$$2$11 = Object.freeze({
  default: escapeTextContentForBrowser$1
});

var setTextContent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule setTextContent
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);
  var escapeTextContentForBrowser = interopDefault(require$$2$11);
  var setInnerHTML = interopDefault(require$$2$10);

  /**
   * Set the textContent property of a node, ensuring that whitespace is preserved
   * even in IE8. innerText is a poor substitute for textContent and, among many
   * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
   * as it should.
   *
   * @param {DOMElement} node
   * @param {string} text
   * @internal
   */
  var setTextContent = function setTextContent(node, text) {
    if (text) {
      var firstChild = node.firstChild;

      if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
        firstChild.nodeValue = text;
        return;
      }
    }
    node.textContent = text;
  };

  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function setTextContent(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }

  module.exports = setTextContent;
});

var setTextContent$1 = interopDefault(setTextContent);

var require$$0$13 = Object.freeze({
  default: setTextContent$1
});

var DOMLazyTree = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DOMLazyTree
   */

  'use strict';

  var DOMNamespaces = interopDefault(require$$24);
  var setInnerHTML = interopDefault(require$$2$10);

  var createMicrosoftUnsafeLocalFunction = interopDefault(require$$0$12);
  var setTextContent = interopDefault(require$$0$13);

  var ELEMENT_NODE_TYPE = 1;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

  /**
   * In IE (8-11) and Edge, appending nodes with no children is dramatically
   * faster than appending a full subtree, so we essentially queue up the
   * .appendChild calls here and apply them so each node is added to its parent
   * before any children are added.
   *
   * In other browsers, doing so is slower or neutral compared to the other order
   * (in Firefox, twice as slow) so we only do this inversion in IE.
   *
   * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
   */
  var enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);

  function insertTreeChildren(tree) {
    if (!enableLazy) {
      return;
    }
    var node = tree.node;
    var children = tree.children;
    if (children.length) {
      for (var i = 0; i < children.length; i++) {
        insertTreeBefore(node, children[i], null);
      }
    } else if (tree.html != null) {
      setInnerHTML(node, tree.html);
    } else if (tree.text != null) {
      setTextContent(node, tree.text);
    }
  }

  var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
    // DocumentFragments aren't actually part of the DOM after insertion so
    // appending children won't update the DOM. We need to ensure the fragment
    // is properly populated first, breaking out of our lazy approach for just
    // this level. Also, some <object> plugins (like Flash Player) will read
    // <param> nodes immediately upon insertion into the DOM, so <object>
    // must also be populated prior to insertion into the DOM.
    if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === DOMNamespaces.html)) {
      insertTreeChildren(tree);
      parentNode.insertBefore(tree.node, referenceNode);
    } else {
      parentNode.insertBefore(tree.node, referenceNode);
      insertTreeChildren(tree);
    }
  });

  function replaceChildWithTree(oldNode, newTree) {
    oldNode.parentNode.replaceChild(newTree.node, oldNode);
    insertTreeChildren(newTree);
  }

  function queueChild(parentTree, childTree) {
    if (enableLazy) {
      parentTree.children.push(childTree);
    } else {
      parentTree.node.appendChild(childTree.node);
    }
  }

  function queueHTML(tree, html) {
    if (enableLazy) {
      tree.html = html;
    } else {
      setInnerHTML(tree.node, html);
    }
  }

  function queueText(tree, text) {
    if (enableLazy) {
      tree.text = text;
    } else {
      setTextContent(tree.node, text);
    }
  }

  function toString() {
    return this.node.nodeName;
  }

  function DOMLazyTree(node) {
    return {
      node: node,
      children: [],
      html: null,
      text: null,
      toString: toString
    };
  }

  DOMLazyTree.insertTreeBefore = insertTreeBefore;
  DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
  DOMLazyTree.queueChild = queueChild;
  DOMLazyTree.queueHTML = queueHTML;
  DOMLazyTree.queueText = queueText;

  module.exports = DOMLazyTree;
});

var DOMLazyTree$1 = interopDefault(DOMLazyTree);

var require$$20 = Object.freeze({
  default: DOMLazyTree$1
});

var createArrayFromMixed = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var invariant = interopDefault(require$$1);

  /**
   * Convert array-like objects to arrays.
   *
   * This API assumes the caller knows the contents of the data type. For less
   * well defined inputs use createArrayFromMixed.
   *
   * @param {object|function|filelist} obj
   * @return {array}
   */
  function toArray(obj) {
    var length = obj.length;

    // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
    // in old versions of Safari).
    !(!Array.isArray(obj) && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function')) ? invariant(false) : void 0;

    !(typeof length === 'number') ? invariant(false) : void 0;

    !(length === 0 || length - 1 in obj) ? invariant(false) : void 0;

    !(typeof obj.callee !== 'function') ? invariant(false) : void 0;

    // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
    // without method will throw during the slice call and skip straight to the
    // fallback.
    if (obj.hasOwnProperty) {
      try {
        return Array.prototype.slice.call(obj);
      } catch (e) {
        // IE < 9 does not support Array#slice on collections objects
      }
    }

    // Fall back to copying key by key. This assumes all keys have a value,
    // so will not preserve sparsely populated inputs.
    var ret = Array(length);
    for (var ii = 0; ii < length; ii++) {
      ret[ii] = obj[ii];
    }
    return ret;
  }

  /**
   * Perform a heuristic test to determine if an object is "array-like".
   *
   *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
   *   Joshu replied: "Mu."
   *
   * This function determines if its argument has "array nature": it returns
   * true if the argument is an actual array, an `arguments' object, or an
   * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
   *
   * It will return false for other array-like objects like Filelist.
   *
   * @param {*} obj
   * @return {boolean}
   */
  function hasArrayNature(obj) {
    return (
      // not null/false
      !!obj && (
      // arrays are objects, NodeLists are functions in Safari
      (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' || typeof obj == 'function') &&
      // quacks like an array
      'length' in obj &&
      // not window
      !('setInterval' in obj) &&
      // no DOM node should be considered an array-like
      // a 'select' element has 'length' and 'item' properties on IE8
      typeof obj.nodeType != 'number' && (
      // a real array
      Array.isArray(obj) ||
      // arguments
      'callee' in obj ||
      // HTMLCollection/NodeList
      'item' in obj)
    );
  }

  /**
   * Ensure that the argument is an array by wrapping it in an array if it is not.
   * Creates a copy of the argument if it is already an array.
   *
   * This is mostly useful idiomatically:
   *
   *   var createArrayFromMixed = require('createArrayFromMixed');
   *
   *   function takesOneOrMoreThings(things) {
   *     things = createArrayFromMixed(things);
   *     ...
   *   }
   *
   * This allows you to treat `things' as an array, but accept scalars in the API.
   *
   * If you need to convert an array-like object, like `arguments`, into an array
   * use toArray instead.
   *
   * @param {*} obj
   * @return {array}
   */
  function createArrayFromMixed(obj) {
    if (!hasArrayNature(obj)) {
      return [obj];
    } else if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray(obj);
    }
  }

  module.exports = createArrayFromMixed;
});

var createArrayFromMixed$1 = interopDefault(createArrayFromMixed);



var require$$2$13 = Object.freeze({
  default: createArrayFromMixed$1
});

var getMarkupWrap = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  /*eslint-disable fb-www/unsafe-html */

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var invariant = interopDefault(require$$1);

  /**
   * Dummy container used to detect which wraps are necessary.
   */
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

  /**
   * Some browsers cannot use `innerHTML` to render certain elements standalone,
   * so we wrap them, render the wrapped nodes, then extract the desired node.
   *
   * In IE8, certain elements cannot render alone, so wrap all elements ('*').
   */

  var shouldWrap = {};

  var selectWrap = [1, '<select multiple="true">', '</select>'];
  var tableWrap = [1, '<table>', '</table>'];
  var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

  var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

  var markupWrap = {
    '*': [1, '?<div>', '</div>'],

    'area': [1, '<map>', '</map>'],
    'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    'legend': [1, '<fieldset>', '</fieldset>'],
    'param': [1, '<object>', '</object>'],
    'tr': [2, '<table><tbody>', '</tbody></table>'],

    'optgroup': selectWrap,
    'option': selectWrap,

    'caption': tableWrap,
    'colgroup': tableWrap,
    'tbody': tableWrap,
    'tfoot': tableWrap,
    'thead': tableWrap,

    'td': trWrap,
    'th': trWrap
  };

  // Initialize the SVG elements since we know they'll always need to be wrapped
  // consistently. If they are created inside a <div> they will be initialized in
  // the wrong namespace (and will not display).
  var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
  svgElements.forEach(function (nodeName) {
    markupWrap[nodeName] = svgWrap;
    shouldWrap[nodeName] = true;
  });

  /**
   * Gets the markup wrap configuration for the supplied `nodeName`.
   *
   * NOTE: This lazily detects which wraps are necessary for the current browser.
   *
   * @param {string} nodeName Lowercase `nodeName`.
   * @return {?array} Markup wrap configuration, if applicable.
   */
  function getMarkupWrap(nodeName) {
    !!!dummyNode ? invariant(false) : void 0;
    if (!markupWrap.hasOwnProperty(nodeName)) {
      nodeName = '*';
    }
    if (!shouldWrap.hasOwnProperty(nodeName)) {
      if (nodeName === '*') {
        dummyNode.innerHTML = '<link />';
      } else {
        dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
      }
      shouldWrap[nodeName] = !dummyNode.firstChild;
    }
    return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
  }

  module.exports = getMarkupWrap;
});

var getMarkupWrap$1 = interopDefault(getMarkupWrap);

var require$$1$9 = Object.freeze({
  default: getMarkupWrap$1
});

var createNodesFromMarkup = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  /*eslint-disable fb-www/unsafe-html*/

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var createArrayFromMixed = interopDefault(require$$2$13);
  var getMarkupWrap = interopDefault(require$$1$9);
  var invariant = interopDefault(require$$1);

  /**
   * Dummy container used to render all markup.
   */
  var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

  /**
   * Pattern used by `getNodeName`.
   */
  var nodeNamePattern = /^\s*<(\w+)/;

  /**
   * Extracts the `nodeName` of the first element in a string of markup.
   *
   * @param {string} markup String of markup.
   * @return {?string} Node name of the supplied markup.
   */
  function getNodeName(markup) {
    var nodeNameMatch = markup.match(nodeNamePattern);
    return nodeNameMatch && nodeNameMatch[1].toLowerCase();
  }

  /**
   * Creates an array containing the nodes rendered from the supplied markup. The
   * optionally supplied `handleScript` function will be invoked once for each
   * <script> element that is rendered. If no `handleScript` function is supplied,
   * an exception is thrown if any <script> elements are rendered.
   *
   * @param {string} markup A string of valid HTML markup.
   * @param {?function} handleScript Invoked once for each rendered <script>.
   * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
   */
  function createNodesFromMarkup(markup, handleScript) {
    var node = dummyNode;
    !!!dummyNode ? invariant(false) : void 0;
    var nodeName = getNodeName(markup);

    var wrap = nodeName && getMarkupWrap(nodeName);
    if (wrap) {
      node.innerHTML = wrap[1] + markup + wrap[2];

      var wrapDepth = wrap[0];
      while (wrapDepth--) {
        node = node.lastChild;
      }
    } else {
      node.innerHTML = markup;
    }

    var scripts = node.getElementsByTagName('script');
    if (scripts.length) {
      !handleScript ? invariant(false) : void 0;
      createArrayFromMixed(scripts).forEach(handleScript);
    }

    var nodes = Array.from(node.childNodes);
    while (node.lastChild) {
      node.removeChild(node.lastChild);
    }
    return nodes;
  }

  module.exports = createNodesFromMarkup;
});

var createNodesFromMarkup$1 = interopDefault(createNodesFromMarkup);

var require$$2$12 = Object.freeze({
  default: createNodesFromMarkup$1
});

var Danger = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule Danger
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var DOMLazyTree = interopDefault(require$$20);
  var ExecutionEnvironment = interopDefault(require$$7$3);

  var createNodesFromMarkup = interopDefault(require$$2$12);
  var emptyFunction = interopDefault(require$$3$1);
  var invariant = interopDefault(require$$1);

  var Danger = {

    /**
     * Replaces a node with a string of markup at its current position within its
     * parent. The markup must render into a single root node.
     *
     * @param {DOMElement} oldChild Child node to replace.
     * @param {string} markup Markup to render in place of the child node.
     * @internal
     */
    dangerouslyReplaceNodeWithMarkup: function dangerouslyReplaceNodeWithMarkup(oldChild, markup) {
      !ExecutionEnvironment.canUseDOM ? _prodInvariant('56') : void 0;
      !markup ? _prodInvariant('57') : void 0;
      !(oldChild.nodeName !== 'HTML') ? _prodInvariant('58') : void 0;

      if (typeof markup === 'string') {
        var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
        oldChild.parentNode.replaceChild(newChild, oldChild);
      } else {
        DOMLazyTree.replaceChildWithTree(oldChild, markup);
      }
    }

  };

  module.exports = Danger;
});

var Danger$1 = interopDefault(Danger);

var require$$6$6 = Object.freeze({
  default: Danger$1
});

var ReactMultiChildUpdateTypes = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactMultiChildUpdateTypes
   */

  'use strict';

  var keyMirror = interopDefault(require$$0$2);

  /**
   * When a component's children are updated, a series of update configuration
   * objects are created in order to batch and serialize the required changes.
   *
   * Enumerates all the possible types of update configurations.
   *
   * @internal
   */
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    SET_MARKUP: null,
    TEXT_CONTENT: null
  });

  module.exports = ReactMultiChildUpdateTypes;
});

var ReactMultiChildUpdateTypes$1 = interopDefault(ReactMultiChildUpdateTypes);

var require$$6$7 = Object.freeze({
  default: ReactMultiChildUpdateTypes$1
});

var DOMChildrenOperations = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DOMChildrenOperations
   */

  'use strict';

  var DOMLazyTree = interopDefault(require$$20);
  var Danger = interopDefault(require$$6$6);
  var ReactMultiChildUpdateTypes = interopDefault(require$$6$7);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactInstrumentation = interopDefault(require$$10);

  var createMicrosoftUnsafeLocalFunction = interopDefault(require$$0$12);
  var setInnerHTML = interopDefault(require$$2$10);
  var setTextContent = interopDefault(require$$0$13);

  function getNodeAfter(parentNode, node) {
    // Special case for text components, which return [open, close] comments
    // from getHostNode.
    if (Array.isArray(node)) {
      node = node[1];
    }
    return node ? node.nextSibling : parentNode.firstChild;
  }

  /**
   * Inserts `childNode` as a child of `parentNode` at the `index`.
   *
   * @param {DOMElement} parentNode Parent node in which to insert.
   * @param {DOMElement} childNode Child node to insert.
   * @param {number} index Index at which to insert the child.
   * @internal
   */
  var insertChildAt = createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
    // We rely exclusively on `insertBefore(node, null)` instead of also using
    // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
    // we are careful to use `null`.)
    parentNode.insertBefore(childNode, referenceNode);
  });

  function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
    DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
  }

  function moveChild(parentNode, childNode, referenceNode) {
    if (Array.isArray(childNode)) {
      moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
    } else {
      insertChildAt(parentNode, childNode, referenceNode);
    }
  }

  function removeChild(parentNode, childNode) {
    if (Array.isArray(childNode)) {
      var closingComment = childNode[1];
      childNode = childNode[0];
      removeDelimitedText(parentNode, childNode, closingComment);
      parentNode.removeChild(closingComment);
    }
    parentNode.removeChild(childNode);
  }

  function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
    var node = openingComment;
    while (true) {
      var nextNode = node.nextSibling;
      insertChildAt(parentNode, node, referenceNode);
      if (node === closingComment) {
        break;
      }
      node = nextNode;
    }
  }

  function removeDelimitedText(parentNode, startNode, closingComment) {
    while (true) {
      var node = startNode.nextSibling;
      if (node === closingComment) {
        // The closing comment is removed by ReactMultiChild.
        break;
      } else {
        parentNode.removeChild(node);
      }
    }
  }

  function replaceDelimitedText(openingComment, closingComment, stringText) {
    var parentNode = openingComment.parentNode;
    var nodeAfterComment = openingComment.nextSibling;
    if (nodeAfterComment === closingComment) {
      // There are no text nodes between the opening and closing comments; insert
      // a new one if stringText isn't empty.
      if (stringText) {
        insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
      }
    } else {
      if (stringText) {
        // Set the text content of the first node after the opening comment, and
        // remove all following nodes up until the closing comment.
        setTextContent(nodeAfterComment, stringText);
        removeDelimitedText(parentNode, nodeAfterComment, closingComment);
      } else {
        removeDelimitedText(parentNode, openingComment, closingComment);
      }
    }

    if ("production" !== 'production') {}
  }

  var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
  if ("production" !== 'production') {}

  /**
   * Operations for updating with DOM children.
   */
  var DOMChildrenOperations = {

    dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,

    replaceDelimitedText: replaceDelimitedText,

    /**
     * Updates a component's children by processing a series of updates. The
     * update configurations are each expected to have a `parentNode` property.
     *
     * @param {array<object>} updates List of update configurations.
     * @internal
     */
    processUpdates: function processUpdates(parentNode, updates) {
      if ("production" !== 'production') {}

      for (var k = 0; k < updates.length; k++) {
        var update = updates[k];
        switch (update.type) {
          case ReactMultiChildUpdateTypes.INSERT_MARKUP:
            insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
            if ("production" !== 'production') {}
            break;
          case ReactMultiChildUpdateTypes.MOVE_EXISTING:
            moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
            if ("production" !== 'production') {}
            break;
          case ReactMultiChildUpdateTypes.SET_MARKUP:
            setInnerHTML(parentNode, update.content);
            if ("production" !== 'production') {}
            break;
          case ReactMultiChildUpdateTypes.TEXT_CONTENT:
            setTextContent(parentNode, update.content);
            if ("production" !== 'production') {}
            break;
          case ReactMultiChildUpdateTypes.REMOVE_NODE:
            removeChild(parentNode, update.fromNode);
            if ("production" !== 'production') {}
            break;
        }
      }
    }

  };

  module.exports = DOMChildrenOperations;
});

var DOMChildrenOperations$1 = interopDefault(DOMChildrenOperations);

var require$$5$6 = Object.freeze({
  default: DOMChildrenOperations$1
});

var ReactDOMIDOperations = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMIDOperations
   */

  'use strict';

  var DOMChildrenOperations = interopDefault(require$$5$6);
  var ReactDOMComponentTree = interopDefault(require$$4$3);

  /**
   * Operations used to process updates to DOM nodes.
   */
  var ReactDOMIDOperations = {

    /**
     * Updates a component's children by processing a series of updates.
     *
     * @param {array<object>} updates List of update configurations.
     * @internal
     */
    dangerouslyProcessChildrenUpdates: function dangerouslyProcessChildrenUpdates(parentInst, updates) {
      var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
      DOMChildrenOperations.processUpdates(node, updates);
    }
  };

  module.exports = ReactDOMIDOperations;
});

var ReactDOMIDOperations$1 = interopDefault(ReactDOMIDOperations);

var require$$0$14 = Object.freeze({
  default: ReactDOMIDOperations$1
});

var ReactComponentBrowserEnvironment = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactComponentBrowserEnvironment
   */

  'use strict';

  var DOMChildrenOperations = interopDefault(require$$5$6);
  var ReactDOMIDOperations = interopDefault(require$$0$14);

  /**
   * Abstracts away all functionality of the reconciler that requires knowledge of
   * the browser context. TODO: These callers should be refactored to avoid the
   * need for this injection.
   */
  var ReactComponentBrowserEnvironment = {

    processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

    replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup

  };

  module.exports = ReactComponentBrowserEnvironment;
});

var ReactComponentBrowserEnvironment$1 = interopDefault(ReactComponentBrowserEnvironment);

var require$$12$2 = Object.freeze({
  default: ReactComponentBrowserEnvironment$1
});

var focusNode = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * @param {DOMElement} node input/textarea to focus
   */

  function focusNode(node) {
    // IE8 can throw "Can't move focus to the control because it is invisible,
    // not enabled, or of a type that does not accept the focus." for all kinds of
    // reasons that are too expensive and fragile to test.
    try {
      node.focus();
    } catch (e) {}
  }

  module.exports = focusNode;
});

var focusNode$1 = interopDefault(focusNode);

var require$$1$10 = Object.freeze({
  default: focusNode$1
});

var AutoFocusUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule AutoFocusUtils
   */

  'use strict';

  var ReactDOMComponentTree = interopDefault(require$$4$3);

  var focusNode = interopDefault(require$$1$10);

  var AutoFocusUtils = {
    focusDOMComponent: function focusDOMComponent() {
      focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
    }
  };

  module.exports = AutoFocusUtils;
});

var AutoFocusUtils$1 = interopDefault(AutoFocusUtils);

var require$$27 = Object.freeze({
  default: AutoFocusUtils$1
});

var CSSProperty = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule CSSProperty
   */

  'use strict';

  /**
   * CSS properties which accept numbers but are not in units of "px".
   */

  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }

  /**
   * Support style names that may come passed in prefixed by adding permutations
   * of vendor prefixes.
   */
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

  // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
  // infinite loop, because it iterates over the newly added props too.
  Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });

  /**
   * Most style properties can be unset by doing .style[prop] = '' but IE8
   * doesn't like doing that with shorthand properties so for the properties that
   * IE8 breaks on, which are listed here, we instead unset each of the
   * individual properties. See http://bugs.jquery.com/ticket/12385.
   * The 4-value 'clock' properties like margin, padding, border-width seem to
   * behave without any problems. Curiously, list-style works too without any
   * special prodding.
   */
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };

  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };

  module.exports = CSSProperty;
});

var CSSProperty$1 = interopDefault(CSSProperty);

var require$$1$11 = Object.freeze({
  default: CSSProperty$1
});

var camelize = createCommonjsModule(function (module) {
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var _hyphenPattern = /-(.)/g;

  /**
   * Camelcases a hyphenated string, for example:
   *
   *   > camelize('background-color')
   *   < "backgroundColor"
   *
   * @param {string} string
   * @return {string}
   */
  function camelize(string) {
    return string.replace(_hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  }

  module.exports = camelize;
});

var camelize$1 = interopDefault(camelize);

var require$$0$15 = Object.freeze({
  default: camelize$1
});

var camelizeStyleName = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  'use strict';

  var camelize = interopDefault(require$$0$15);

  var msPattern = /^-ms-/;

  /**
   * Camelcases a hyphenated CSS property name, for example:
   *
   *   > camelizeStyleName('background-color')
   *   < "backgroundColor"
   *   > camelizeStyleName('-moz-transition')
   *   < "MozTransition"
   *   > camelizeStyleName('-ms-transition')
   *   < "msTransition"
   *
   * As Andi Smith suggests
   * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
   * is converted to lowercase `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }

  module.exports = camelizeStyleName;
});

var camelizeStyleName$1 = interopDefault(camelizeStyleName);

var require$$4$4 = Object.freeze({
  default: camelizeStyleName$1
});

var dangerousStyleValue = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule dangerousStyleValue
   */

  'use strict';

  var CSSProperty = interopDefault(require$$1$11);
  var warning = interopDefault(require$$0$1);

  var isUnitlessNumber = CSSProperty.isUnitlessNumber;
  var styleWarnings = {};

  /**
   * Convert a value into the proper css writable value. The style name `name`
   * should be logical (no hyphens), as specified
   * in `CSSProperty.isUnitlessNumber`.
   *
   * @param {string} name CSS property name such as `topMargin`.
   * @param {*} value CSS property value such as `10px`.
   * @param {ReactDOMComponent} component
   * @return {string} Normalized style value with dimensions applied.
   */
  function dangerousStyleValue(name, value, component) {
    // Note that we've removed escapeTextForBrowser() calls here since the
    // whole string will be escaped when the attribute is injected into
    // the markup. If you provide unsafe user data here they can inject
    // arbitrary CSS which may be problematic (I couldn't repro this):
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
    // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
    // This is not an XSS hole but instead a potential CSS injection issue
    // which has lead to a greater discussion about how we're going to
    // trust URLs moving forward. See #2115901

    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }

    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value; // cast to string
    }

    if (typeof value === 'string') {
      if ("production" !== 'production') {}
      value = value.trim();
    }
    return value + 'px';
  }

  module.exports = dangerousStyleValue;
});

var dangerousStyleValue$1 = interopDefault(dangerousStyleValue);

var require$$3$6 = Object.freeze({
  default: dangerousStyleValue$1
});

var hyphenate = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var _uppercasePattern = /([A-Z])/g;

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  module.exports = hyphenate;
});

var hyphenate$1 = interopDefault(hyphenate);

var require$$0$16 = Object.freeze({
  default: hyphenate$1
});

var hyphenateStyleName = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  'use strict';

  var hyphenate = interopDefault(require$$0$16);

  var msPattern = /^ms-/;

  /**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }

  module.exports = hyphenateStyleName;
});

var hyphenateStyleName$1 = interopDefault(hyphenateStyleName);

var require$$2$14 = Object.freeze({
  default: hyphenateStyleName$1
});

var memoizeStringOnly = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   * @typechecks static-only
   */

  'use strict';

  /**
   * Memoizes the return value of a function that accepts one string argument.
   */

  function memoizeStringOnly(callback) {
    var cache = {};
    return function (string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }

  module.exports = memoizeStringOnly;
});

var memoizeStringOnly$1 = interopDefault(memoizeStringOnly);

var require$$1$12 = Object.freeze({
  default: memoizeStringOnly$1
});

var CSSPropertyOperations = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule CSSPropertyOperations
   */

  'use strict';

  var CSSProperty = interopDefault(require$$1$11);
  var ExecutionEnvironment = interopDefault(require$$7$3);
  var ReactInstrumentation = interopDefault(require$$10);

  var camelizeStyleName = interopDefault(require$$4$4);
  var dangerousStyleValue = interopDefault(require$$3$6);
  var hyphenateStyleName = interopDefault(require$$2$14);
  var memoizeStringOnly = interopDefault(require$$1$12);
  var warning = interopDefault(require$$0$1);

  var processStyleName = memoizeStringOnly(function (styleName) {
    return hyphenateStyleName(styleName);
  });

  var hasShorthandPropertyBug = false;
  var styleFloatAccessor = 'cssFloat';
  if (ExecutionEnvironment.canUseDOM) {
    var tempStyle = document.createElement('div').style;
    try {
      // IE8 throws "Invalid argument." if resetting shorthand style properties.
      tempStyle.font = '';
    } catch (e) {
      hasShorthandPropertyBug = true;
    }
    // IE8 only supports accessing cssFloat (standard) as styleFloat
    if (document.documentElement.style.cssFloat === undefined) {
      styleFloatAccessor = 'styleFloat';
    }
  }

  if ("production" !== 'production') {}

  /**
   * Operations for dealing with CSS properties.
   */
  var CSSPropertyOperations = {

    /**
     * Serializes a mapping of style properties for use as inline styles:
     *
     *   > createMarkupForStyles({width: '200px', height: 0})
     *   "width:200px;height:0;"
     *
     * Undefined values are ignored so that declarative programming is easier.
     * The result should be HTML-escaped before insertion into the DOM.
     *
     * @param {object} styles
     * @param {ReactDOMComponent} component
     * @return {?string}
     */
    createMarkupForStyles: function createMarkupForStyles(styles, component) {
      var serialized = '';
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        var styleValue = styles[styleName];
        if ("production" !== 'production') {}
        if (styleValue != null) {
          serialized += processStyleName(styleName) + ':';
          serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
        }
      }
      return serialized || null;
    },

    /**
     * Sets the value for multiple styles on a node.  If a value is specified as
     * '' (empty string), the corresponding style property will be unset.
     *
     * @param {DOMElement} node
     * @param {object} styles
     * @param {ReactDOMComponent} component
     */
    setValueForStyles: function setValueForStyles(node, styles, component) {
      if ("production" !== 'production') {}

      var style = node.style;
      for (var styleName in styles) {
        if (!styles.hasOwnProperty(styleName)) {
          continue;
        }
        if ("production" !== 'production') {}
        var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
        if (styleName === 'float' || styleName === 'cssFloat') {
          styleName = styleFloatAccessor;
        }
        if (styleValue) {
          style[styleName] = styleValue;
        } else {
          var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
          if (expansion) {
            // Shorthand property that IE8 won't like unsetting, so unset each
            // component to placate it
            for (var individualStyleName in expansion) {
              style[individualStyleName] = '';
            }
          } else {
            style[styleName] = '';
          }
        }
      }
    }

  };

  module.exports = CSSPropertyOperations;
});

var CSSPropertyOperations$1 = interopDefault(CSSPropertyOperations);

var require$$26 = Object.freeze({
  default: CSSPropertyOperations$1
});

var quoteAttributeValueForBrowser = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule quoteAttributeValueForBrowser
   */

  'use strict';

  var escapeTextContentForBrowser = interopDefault(require$$2$11);

  /**
   * Escapes attribute value to prevent scripting attacks.
   *
   * @param {*} value Value to escape.
   * @return {string} An escaped string.
   */
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }

  module.exports = quoteAttributeValueForBrowser;
});

var quoteAttributeValueForBrowser$1 = interopDefault(quoteAttributeValueForBrowser);

var require$$1$13 = Object.freeze({
  default: quoteAttributeValueForBrowser$1
});

var DOMPropertyOperations = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DOMPropertyOperations
   */

  'use strict';

  var DOMProperty = interopDefault(require$$3$3);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactInstrumentation = interopDefault(require$$10);

  var quoteAttributeValueForBrowser = interopDefault(require$$1$13);
  var warning = interopDefault(require$$0$1);

  var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
  var illegalAttributeNameCache = {};
  var validatedAttributeNameCache = {};

  function isAttributeNameSafe(attributeName) {
    if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
      return true;
    }
    if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
      return false;
    }
    if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
      validatedAttributeNameCache[attributeName] = true;
      return true;
    }
    illegalAttributeNameCache[attributeName] = true;
    void 0;
    return false;
  }

  function shouldIgnoreValue(propertyInfo, value) {
    return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
  }

  /**
   * Operations for dealing with DOM properties.
   */
  var DOMPropertyOperations = {

    /**
     * Creates markup for the ID property.
     *
     * @param {string} id Unescaped ID.
     * @return {string} Markup string.
     */
    createMarkupForID: function createMarkupForID(id) {
      return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
    },

    setAttributeForID: function setAttributeForID(node, id) {
      node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
    },

    createMarkupForRoot: function createMarkupForRoot() {
      return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
    },

    setAttributeForRoot: function setAttributeForRoot(node) {
      node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
    },

    /**
     * Creates markup for a property.
     *
     * @param {string} name
     * @param {*} value
     * @return {?string} Markup string, or null if the property was invalid.
     */
    createMarkupForProperty: function createMarkupForProperty(name, value) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        if (shouldIgnoreValue(propertyInfo, value)) {
          return '';
        }
        var attributeName = propertyInfo.attributeName;
        if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
          return attributeName + '=""';
        }
        return attributeName + '=' + quoteAttributeValueForBrowser(value);
      } else if (DOMProperty.isCustomAttribute(name)) {
        if (value == null) {
          return '';
        }
        return name + '=' + quoteAttributeValueForBrowser(value);
      }
      return null;
    },

    /**
     * Creates markup for a custom property.
     *
     * @param {string} name
     * @param {*} value
     * @return {string} Markup string, or empty string if the property was invalid.
     */
    createMarkupForCustomAttribute: function createMarkupForCustomAttribute(name, value) {
      if (!isAttributeNameSafe(name) || value == null) {
        return '';
      }
      return name + '=' + quoteAttributeValueForBrowser(value);
    },

    /**
     * Sets the value for a property on a node.
     *
     * @param {DOMElement} node
     * @param {string} name
     * @param {*} value
     */
    setValueForProperty: function setValueForProperty(node, name, value) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, value);
        } else if (shouldIgnoreValue(propertyInfo, value)) {
          this.deleteValueForProperty(node, name);
          return;
        } else if (propertyInfo.mustUseProperty) {
          // Contrary to `setAttribute`, object properties are properly
          // `toString`ed by IE8/9.
          node[propertyInfo.propertyName] = value;
        } else {
          var attributeName = propertyInfo.attributeName;
          var namespace = propertyInfo.attributeNamespace;
          // `setAttribute` with objects becomes only `[object]` in IE8/9,
          // ('' + value) makes it output the correct toString()-value.
          if (namespace) {
            node.setAttributeNS(namespace, attributeName, '' + value);
          } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
            node.setAttribute(attributeName, '');
          } else {
            node.setAttribute(attributeName, '' + value);
          }
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        DOMPropertyOperations.setValueForAttribute(node, name, value);
        return;
      }

      if ("production" !== 'production') {}
    },

    setValueForAttribute: function setValueForAttribute(node, name, value) {
      if (!isAttributeNameSafe(name)) {
        return;
      }
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, '' + value);
      }

      if ("production" !== 'production') {}
    },

    /**
     * Deletes an attributes from a node.
     *
     * @param {DOMElement} node
     * @param {string} name
     */
    deleteValueForAttribute: function deleteValueForAttribute(node, name) {
      node.removeAttribute(name);
      if ("production" !== 'production') {}
    },

    /**
     * Deletes the value for a property on a node.
     *
     * @param {DOMElement} node
     * @param {string} name
     */
    deleteValueForProperty: function deleteValueForProperty(node, name) {
      var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
      if (propertyInfo) {
        var mutationMethod = propertyInfo.mutationMethod;
        if (mutationMethod) {
          mutationMethod(node, undefined);
        } else if (propertyInfo.mustUseProperty) {
          var propName = propertyInfo.propertyName;
          if (propertyInfo.hasBooleanValue) {
            node[propName] = false;
          } else {
            node[propName] = '';
          }
        } else {
          node.removeAttribute(propertyInfo.attributeName);
        }
      } else if (DOMProperty.isCustomAttribute(name)) {
        node.removeAttribute(name);
      }

      if ("production" !== 'production') {}
    }

  };

  module.exports = DOMPropertyOperations;
});

var DOMPropertyOperations$1 = interopDefault(DOMPropertyOperations);

var require$$5$7 = Object.freeze({
  default: DOMPropertyOperations$1
});

var ReactEventEmitterMixin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactEventEmitterMixin
   */

  'use strict';

  var EventPluginHub = interopDefault(require$$7$2);

  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue(false);
  }

  var ReactEventEmitterMixin = {

    /**
     * Streams a fired top-level event to `EventPluginHub` where plugins have the
     * opportunity to create `ReactEvent`s to be dispatched.
     */
    handleTopLevel: function handleTopLevel(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
      runEventQueueInBatch(events);
    }
  };

  module.exports = ReactEventEmitterMixin;
});

var ReactEventEmitterMixin$1 = interopDefault(ReactEventEmitterMixin);

var require$$3$7 = Object.freeze({
  default: ReactEventEmitterMixin$1
});

var getVendorPrefixedEventName = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getVendorPrefixedEventName
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);

  /**
   * Generate a mapping of standard vendor prefixes using the defined style property and event name.
   *
   * @param {string} styleProp
   * @param {string} eventName
   * @returns {object}
   */
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};

    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes['Webkit' + styleProp] = 'webkit' + eventName;
    prefixes['Moz' + styleProp] = 'moz' + eventName;
    prefixes['ms' + styleProp] = 'MS' + eventName;
    prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

    return prefixes;
  }

  /**
   * A list of event names to a configurable list of vendor prefixes.
   */
  var vendorPrefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
    animationstart: makePrefixMap('Animation', 'AnimationStart'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  /**
   * Event names that have already been detected and prefixed (if applicable).
   */
  var prefixedEventNames = {};

  /**
   * Element to check for prefixes on.
   */
  var style = {};

  /**
   * Bootstrap if a DOM exists.
   */
  if (ExecutionEnvironment.canUseDOM) {
    style = document.createElement('div').style;

    // On some platforms, in particular some releases of Android 4.x,
    // the un-prefixed "animation" and "transition" properties are defined on the
    // style object but the events that fire will still be prefixed, so we need
    // to check if the un-prefixed events are usable, and if not remove them from the map.
    if (!('AnimationEvent' in window)) {
      delete vendorPrefixes.animationend.animation;
      delete vendorPrefixes.animationiteration.animation;
      delete vendorPrefixes.animationstart.animation;
    }

    // Same as above
    if (!('TransitionEvent' in window)) {
      delete vendorPrefixes.transitionend.transition;
    }
  }

  /**
   * Attempts to determine the correct vendor prefixed event name.
   *
   * @param {string} eventName
   * @returns {string}
   */
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    } else if (!vendorPrefixes[eventName]) {
      return eventName;
    }

    var prefixMap = vendorPrefixes[eventName];

    for (var styleProp in prefixMap) {
      if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
        return prefixedEventNames[eventName] = prefixMap[styleProp];
      }
    }

    return '';
  }

  module.exports = getVendorPrefixedEventName;
});

var getVendorPrefixedEventName$1 = interopDefault(getVendorPrefixedEventName);

var require$$1$14 = Object.freeze({
  default: getVendorPrefixedEventName$1
});

var ReactBrowserEventEmitter = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactBrowserEventEmitter
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var EventConstants = interopDefault(require$$18);
  var EventPluginRegistry = interopDefault(require$$2$4);
  var ReactEventEmitterMixin = interopDefault(require$$3$7);
  var ViewportMetrics = interopDefault(require$$2$9);

  var getVendorPrefixedEventName = interopDefault(require$$1$14);
  var isEventSupported = interopDefault(require$$0$9);

  /**
   * Summary of `ReactBrowserEventEmitter` event handling:
   *
   *  - Top-level delegation is used to trap most native browser events. This
   *    may only occur in the main thread and is the responsibility of
   *    ReactEventListener, which is injected and can therefore support pluggable
   *    event sources. This is the only work that occurs in the main thread.
   *
   *  - We normalize and de-duplicate events to account for browser quirks. This
   *    may be done in the worker thread.
   *
   *  - Forward these native events (with the associated top-level type used to
   *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
   *    to extract any synthetic events.
   *
   *  - The `EventPluginHub` will then process each event by annotating them with
   *    "dispatches", a sequence of listeners and IDs that care about that event.
   *
   *  - The `EventPluginHub` then dispatches the events.
   *
   * Overview of React and the event system:
   *
   * +------------+    .
   * |    DOM     |    .
   * +------------+    .
   *       |           .
   *       v           .
   * +------------+    .
   * | ReactEvent |    .
   * |  Listener  |    .
   * +------------+    .                         +-----------+
   *       |           .               +--------+|SimpleEvent|
   *       |           .               |         |Plugin     |
   * +-----|------+    .               v         +-----------+
   * |     |      |    .    +--------------+                    +------------+
   * |     +-----------.--->|EventPluginHub|                    |    Event   |
   * |            |    .    |              |     +-----------+  | Propagators|
   * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
   * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
   * |            |    .    |              |     +-----------+  |  utilities |
   * |     +-----------.--->|              |                    +------------+
   * |     |      |    .    +--------------+
   * +-----|------+    .                ^        +-----------+
   *       |           .                |        |Enter/Leave|
   *       +           .                +-------+|Plugin     |
   * +-------------+   .                         +-----------+
   * | application |   .
   * |-------------|   .
   * |             |   .
   * |             |   .
   * +-------------+   .
   *                   .
   *    React Core     .  General Purpose Event Plugin System
   */

  var hasEventPageXY;
  var alreadyListeningTo = {};
  var isMonitoringScrollValue = false;
  var reactTopListenersCounter = 0;

  // For events like 'submit' which don't consistently bubble (which we trap at a
  // lower node than `document`), binding at `document` would cause duplicate
  // events so we don't include them here
  var topEventMapping = {
    topAbort: 'abort',
    topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
    topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
    topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
    topBlur: 'blur',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topChange: 'change',
    topClick: 'click',
    topCompositionEnd: 'compositionend',
    topCompositionStart: 'compositionstart',
    topCompositionUpdate: 'compositionupdate',
    topContextMenu: 'contextmenu',
    topCopy: 'copy',
    topCut: 'cut',
    topDoubleClick: 'dblclick',
    topDrag: 'drag',
    topDragEnd: 'dragend',
    topDragEnter: 'dragenter',
    topDragExit: 'dragexit',
    topDragLeave: 'dragleave',
    topDragOver: 'dragover',
    topDragStart: 'dragstart',
    topDrop: 'drop',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topFocus: 'focus',
    topInput: 'input',
    topKeyDown: 'keydown',
    topKeyPress: 'keypress',
    topKeyUp: 'keyup',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topMouseDown: 'mousedown',
    topMouseMove: 'mousemove',
    topMouseOut: 'mouseout',
    topMouseOver: 'mouseover',
    topMouseUp: 'mouseup',
    topPaste: 'paste',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topScroll: 'scroll',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topSelectionChange: 'selectionchange',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTextInput: 'textInput',
    topTimeUpdate: 'timeupdate',
    topTouchCancel: 'touchcancel',
    topTouchEnd: 'touchend',
    topTouchMove: 'touchmove',
    topTouchStart: 'touchstart',
    topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting',
    topWheel: 'wheel'
  };

  /**
   * To ensure no conflicts with other potential React instances on the page
   */
  var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

  function getListeningForDocument(mountAt) {
    // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
    // directly.
    if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
      mountAt[topListenersIDKey] = reactTopListenersCounter++;
      alreadyListeningTo[mountAt[topListenersIDKey]] = {};
    }
    return alreadyListeningTo[mountAt[topListenersIDKey]];
  }

  /**
   * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
   * example:
   *
   *   EventPluginHub.putListener('myID', 'onClick', myFunction);
   *
   * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
   *
   * @internal
   */
  var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {

    /**
     * Injectable event backend
     */
    ReactEventListener: null,

    injection: {
      /**
       * @param {object} ReactEventListener
       */
      injectReactEventListener: function injectReactEventListener(ReactEventListener) {
        ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
        ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
      }
    },

    /**
     * Sets whether or not any created callbacks should be enabled.
     *
     * @param {boolean} enabled True if callbacks should be enabled.
     */
    setEnabled: function setEnabled(enabled) {
      if (ReactBrowserEventEmitter.ReactEventListener) {
        ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
      }
    },

    /**
     * @return {boolean} True if callbacks are enabled.
     */
    isEnabled: function isEnabled() {
      return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
    },

    /**
     * We listen for bubbled touch events on the document object.
     *
     * Firefox v8.01 (and possibly others) exhibited strange behavior when
     * mounting `onmousemove` events at some node that was not the document
     * element. The symptoms were that if your mouse is not moving over something
     * contained within that mount point (for example on the background) the
     * top-level listeners for `onmousemove` won't be called. However, if you
     * register the `mousemove` on the document object, then it will of course
     * catch all `mousemove`s. This along with iOS quirks, justifies restricting
     * top-level listeners to the document object only, at least for these
     * movement types of events and possibly all events.
     *
     * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
     *
     * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
     * they bubble to document.
     *
     * @param {string} registrationName Name of listener (e.g. `onClick`).
     * @param {object} contentDocumentHandle Document which owns the container
     */
    listenTo: function listenTo(registrationName, contentDocumentHandle) {
      var mountAt = contentDocumentHandle;
      var isListening = getListeningForDocument(mountAt);
      var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];

      var topLevelTypes = EventConstants.topLevelTypes;
      for (var i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
          if (dependency === topLevelTypes.topWheel) {
            if (isEventSupported('wheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
            } else if (isEventSupported('mousewheel')) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
            } else {
              // Firefox needs to capture a different mouse scroll event.
              // @see http://www.quirksmode.org/dom/events/tests/scroll.html
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
            }
          } else if (dependency === topLevelTypes.topScroll) {

            if (isEventSupported('scroll', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
            } else {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
            }
          } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {

            if (isEventSupported('focus', true)) {
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
            } else if (isEventSupported('focusin')) {
              // IE has `focusin` and `focusout` events which bubble.
              // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
            }

            // to make sure blur and focus event listeners are only attached once
            isListening[topLevelTypes.topBlur] = true;
            isListening[topLevelTypes.topFocus] = true;
          } else if (topEventMapping.hasOwnProperty(dependency)) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
          }

          isListening[dependency] = true;
        }
      }
    },

    trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
    },

    trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
      return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
    },

    /**
     * Protect against document.createEvent() returning null
     * Some popup blocker extensions appear to do this:
     * https://github.com/facebook/react/issues/6887
     */
    supportsEventPageXY: function supportsEventPageXY() {
      if (!document.createEvent) {
        return false;
      }
      var ev = document.createEvent('MouseEvent');
      return ev != null && 'pageX' in ev;
    },

    /**
     * Listens to window scroll and resize events. We cache scroll values so that
     * application code can access them without triggering reflows.
     *
     * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
     * pageX/pageY isn't supported (legacy browsers).
     *
     * NOTE: Scroll events do not bubble.
     *
     * @see http://www.quirksmode.org/dom/events/scroll.html
     */
    ensureScrollValueMonitoring: function ensureScrollValueMonitoring() {
      if (hasEventPageXY === undefined) {
        hasEventPageXY = ReactBrowserEventEmitter.supportsEventPageXY();
      }
      if (!hasEventPageXY && !isMonitoringScrollValue) {
        var refresh = ViewportMetrics.refreshScrollValues;
        ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
        isMonitoringScrollValue = true;
      }
    }

  });

  module.exports = ReactBrowserEventEmitter;
});

var ReactBrowserEventEmitter$1 = interopDefault(ReactBrowserEventEmitter);

var require$$18$1 = Object.freeze({
  default: ReactBrowserEventEmitter$1
});

var DisabledInputUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule DisabledInputUtils
   */

  'use strict';

  var disableableMouseListenerNames = {
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,

    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  };

  /**
   * Implements a host component that does not receive mouse events
   * when `disabled` is set.
   */
  var DisabledInputUtils = {
    getHostProps: function getHostProps(inst, props) {
      if (!props.disabled) {
        return props;
      }

      // Copy the props, except the mouse listeners
      var hostProps = {};
      for (var key in props) {
        if (!disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
          hostProps[key] = props[key];
        }
      }

      return hostProps;
    }
  };

  module.exports = DisabledInputUtils;
});

var DisabledInputUtils$1 = interopDefault(DisabledInputUtils);

var require$$5$8 = Object.freeze({
  default: DisabledInputUtils$1
});

var ReactDOMButton = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMButton
   */

  'use strict';

  var DisabledInputUtils = interopDefault(require$$5$8);

  /**
   * Implements a <button> host component that does not receive mouse events
   * when `disabled` is set.
   */
  var ReactDOMButton = {
    getHostProps: DisabledInputUtils.getHostProps
  };

  module.exports = ReactDOMButton;
});

var ReactDOMButton$1 = interopDefault(ReactDOMButton);

var require$$17$1 = Object.freeze({
  default: ReactDOMButton$1
});

var LinkedValueUtils = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule LinkedValueUtils
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactPropTypes = interopDefault(require$$4$2);
  var ReactPropTypeLocations = interopDefault(require$$7$1);
  var ReactPropTypesSecret = interopDefault(require$$2$2);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  var hasReadOnlyValue = {
    'button': true,
    'checkbox': true,
    'image': true,
    'hidden': true,
    'radio': true,
    'reset': true,
    'submit': true
  };

  function _assertSingleLink(inputProps) {
    !(inputProps.checkedLink == null || inputProps.valueLink == null) ? _prodInvariant('87') : void 0;
  }
  function _assertValueLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.value == null && inputProps.onChange == null) ? _prodInvariant('88') : void 0;
  }

  function _assertCheckedLink(inputProps) {
    _assertSingleLink(inputProps);
    !(inputProps.checked == null && inputProps.onChange == null) ? _prodInvariant('89') : void 0;
  }

  var propTypes = {
    value: function value(props, propName, componentName) {
      if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function checked(props, propName, componentName) {
      if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    onChange: ReactPropTypes.func
  };

  var loggedTypeFailures = {};
  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  var LinkedValueUtils = {
    checkPropTypes: function checkPropTypes(tagName, props, owner) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop, null, ReactPropTypesSecret);
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var addendum = getDeclarationErrorAddendum(owner);
          void 0;
        }
      }
    },

    /**
     * @param {object} inputProps Props for form component
     * @return {*} current value of the input either from value prop or link.
     */
    getValue: function getValue(inputProps) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.value;
      }
      return inputProps.value;
    },

    /**
     * @param {object} inputProps Props for form component
     * @return {*} current checked status of the input either from checked prop
     *             or link.
     */
    getChecked: function getChecked(inputProps) {
      if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.value;
      }
      return inputProps.checked;
    },

    /**
     * @param {object} inputProps Props for form component
     * @param {SyntheticEvent} event change event to handle
     */
    executeOnChange: function executeOnChange(inputProps, event) {
      if (inputProps.valueLink) {
        _assertValueLink(inputProps);
        return inputProps.valueLink.requestChange(event.target.value);
      } else if (inputProps.checkedLink) {
        _assertCheckedLink(inputProps);
        return inputProps.checkedLink.requestChange(event.target.checked);
      } else if (inputProps.onChange) {
        return inputProps.onChange.call(undefined, event);
      }
    }
  };

  module.exports = LinkedValueUtils;
});

var LinkedValueUtils$1 = interopDefault(LinkedValueUtils);

var require$$4$5 = Object.freeze({
  default: LinkedValueUtils$1
});

var ReactDOMInput = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMInput
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var DisabledInputUtils = interopDefault(require$$5$8);
  var DOMPropertyOperations = interopDefault(require$$5$7);
  var LinkedValueUtils = interopDefault(require$$4$5);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactUpdates = interopDefault(require$$6$3);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  var didWarnValueLink = false;
  var didWarnCheckedLink = false;
  var didWarnValueDefaultValue = false;
  var didWarnCheckedDefaultChecked = false;
  var didWarnControlledToUncontrolled = false;
  var didWarnUncontrolledToControlled = false;

  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      // DOM component is still mounted; update
      ReactDOMInput.updateWrapper(this);
    }
  }

  function isControlled(props) {
    var usesChecked = props.type === 'checkbox' || props.type === 'radio';
    return usesChecked ? props.checked != null : props.value != null;
  }

  /**
   * Implements an <input> host component that allows setting these optional
   * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
   *
   * If `checked` or `value` are not supplied (or null/undefined), user actions
   * that affect the checked state or value will trigger updates to the element.
   *
   * If they are supplied (and not null/undefined), the rendered element will not
   * trigger updates to the element. Instead, the props must change in order for
   * the rendered element to be updated.
   *
   * The rendered element will be initialized as unchecked (or `defaultChecked`)
   * with an empty value (or `defaultValue`).
   *
   * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
   */
  var ReactDOMInput = {
    getHostProps: function getHostProps(inst, props) {
      var value = LinkedValueUtils.getValue(props);
      var checked = LinkedValueUtils.getChecked(props);

      var hostProps = _assign({
        // Make sure we set .type before any other properties (setting .value
        // before .type means .value is lost in IE11 and below)
        type: undefined,
        // Make sure we set .step before .value (setting .value before .step
        // means .value is rounded on mount, based upon step precision)
        step: undefined,
        // Make sure we set .min & .max before .value (to ensure proper order
        // in corner cases such as min or max deriving from value, e.g. Issue #7170)
        min: undefined,
        max: undefined
      }, DisabledInputUtils.getHostProps(inst, props), {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: value != null ? value : inst._wrapperState.initialValue,
        checked: checked != null ? checked : inst._wrapperState.initialChecked,
        onChange: inst._wrapperState.onChange
      });

      return hostProps;
    },

    mountWrapper: function mountWrapper(inst, props) {
      if ("production" !== 'production') {}

      var defaultValue = props.defaultValue;
      inst._wrapperState = {
        initialChecked: props.checked != null ? props.checked : props.defaultChecked,
        initialValue: props.value != null ? props.value : defaultValue,
        listeners: null,
        onChange: _handleChange.bind(inst)
      };

      if ("production" !== 'production') {}
    },

    updateWrapper: function updateWrapper(inst) {
      var props = inst._currentElement.props;

      if ("production" !== 'production') {}

      // TODO: Shouldn't this be getChecked(props)?
      var checked = props.checked;
      if (checked != null) {
        DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
      }

      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {

        // Cast `value` to a string to ensure the value is set correctly. While
        // browsers typically do this as necessary, jsdom doesn't.
        var newValue = '' + value;

        // To avoid side effects (such as losing text selection), only set value if changed
        if (newValue !== node.value) {
          node.value = newValue;
        }
      } else {
        if (props.value == null && props.defaultValue != null) {
          node.defaultValue = '' + props.defaultValue;
        }
        if (props.checked == null && props.defaultChecked != null) {
          node.defaultChecked = !!props.defaultChecked;
        }
      }
    },

    postMountWrapper: function postMountWrapper(inst) {
      var props = inst._currentElement.props;

      // This is in postMount because we need access to the DOM node, which is not
      // available until after the component has mounted.
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);

      // Detach value from defaultValue. We won't do anything if we're working on
      // submit or reset inputs as those values & defaultValues are linked. They
      // are not resetable nodes so this operation doesn't matter and actually
      // removes browser-default values (eg "Submit Query") when no value is
      // provided.

      switch (props.type) {
        case 'submit':
        case 'reset':
          break;
        case 'color':
        case 'date':
        case 'datetime':
        case 'datetime-local':
        case 'month':
        case 'time':
        case 'week':
          // This fixes the no-show issue on iOS Safari and Android Chrome:
          // https://github.com/facebook/react/issues/7233
          node.value = '';
          node.value = node.defaultValue;
          break;
        default:
          node.value = node.value;
          break;
      }

      // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
      // this is needed to work around a chrome bug where setting defaultChecked
      // will sometimes influence the value of checked (even after detachment).
      // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
      // We need to temporarily unset name to avoid disrupting radio button groups.
      var name = node.name;
      if (name !== '') {
        node.name = '';
      }
      node.defaultChecked = !node.defaultChecked;
      node.defaultChecked = !node.defaultChecked;
      if (name !== '') {
        node.name = name;
      }
    }
  };

  function _handleChange(event) {
    var props = this._currentElement.props;

    var returnValue = LinkedValueUtils.executeOnChange(props, event);

    // Here we use asap to wait until all updates have propagated, which
    // is important when using controlled components within layers:
    // https://github.com/facebook/react/issues/1698
    ReactUpdates.asap(forceUpdateIfMounted, this);

    var name = props.name;
    if (props.type === 'radio' && name != null) {
      var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
      var queryRoot = rootNode;

      while (queryRoot.parentNode) {
        queryRoot = queryRoot.parentNode;
      }

      // If `rootNode.form` was non-null, then we could try `form.elements`,
      // but that sometimes behaves strangely in IE8. We could also try using
      // `form.getElementsByName`, but that will only return direct children
      // and won't include inputs that use the HTML5 `form=` attribute. Since
      // the input might not even be in a form, let's just use the global
      // `querySelectorAll` to ensure we don't miss anything.
      var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');

      for (var i = 0; i < group.length; i++) {
        var otherNode = group[i];
        if (otherNode === rootNode || otherNode.form !== rootNode.form) {
          continue;
        }
        // This will throw if radio buttons rendered by different copies of React
        // and the same name are rendered into the same form (same as #1939).
        // That's probably okay; we don't support it just as we don't support
        // mixing React radio buttons with non-React ones.
        var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
        !otherInstance ? _prodInvariant('90') : void 0;
        // If this is a controlled radio button group, forcing the input that
        // was previously checked to update will cause it to be come re-checked
        // as appropriate.
        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
      }
    }

    return returnValue;
  }

  module.exports = ReactDOMInput;
});

var ReactDOMInput$1 = interopDefault(ReactDOMInput);

var require$$14$1 = Object.freeze({
  default: ReactDOMInput$1
});

var ReactDOMSelect = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMSelect
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var DisabledInputUtils = interopDefault(require$$5$8);
  var LinkedValueUtils = interopDefault(require$$4$5);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactUpdates = interopDefault(require$$6$3);

  var warning = interopDefault(require$$0$1);

  var didWarnValueLink = false;
  var didWarnValueDefaultValue = false;

  function updateOptionsIfPendingUpdateAndMounted() {
    if (this._rootNodeID && this._wrapperState.pendingUpdate) {
      this._wrapperState.pendingUpdate = false;

      var props = this._currentElement.props;
      var value = LinkedValueUtils.getValue(props);

      if (value != null) {
        updateOptions(this, Boolean(props.multiple), value);
      }
    }
  }

  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }

  var valuePropNames = ['value', 'defaultValue'];

  /**
   * Validation function for `value` and `defaultValue`.
   * @private
   */
  function checkSelectPropTypes(inst, props) {
    var owner = inst._currentElement._owner;
    LinkedValueUtils.checkPropTypes('select', props, owner);

    if (props.valueLink !== undefined && !didWarnValueLink) {
      void 0;
      didWarnValueLink = true;
    }

    for (var i = 0; i < valuePropNames.length; i++) {
      var propName = valuePropNames[i];
      if (props[propName] == null) {
        continue;
      }
      var isArray = Array.isArray(props[propName]);
      if (props.multiple && !isArray) {
        void 0;
      } else if (!props.multiple && isArray) {
        void 0;
      }
    }
  }

  /**
   * @param {ReactDOMComponent} inst
   * @param {boolean} multiple
   * @param {*} propValue A stringable (with `multiple`, a list of stringables).
   * @private
   */
  function updateOptions(inst, multiple, propValue) {
    var selectedValue, i;
    var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;

    if (multiple) {
      selectedValue = {};
      for (i = 0; i < propValue.length; i++) {
        selectedValue['' + propValue[i]] = true;
      }
      for (i = 0; i < options.length; i++) {
        var selected = selectedValue.hasOwnProperty(options[i].value);
        if (options[i].selected !== selected) {
          options[i].selected = selected;
        }
      }
    } else {
      // Do not set `select.value` as exact behavior isn't consistent across all
      // browsers for all cases.
      selectedValue = '' + propValue;
      for (i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
          options[i].selected = true;
          return;
        }
      }
      if (options.length) {
        options[0].selected = true;
      }
    }
  }

  /**
   * Implements a <select> host component that allows optionally setting the
   * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
   * stringable. If `multiple` is true, the prop must be an array of stringables.
   *
   * If `value` is not supplied (or null/undefined), user actions that change the
   * selected option will trigger updates to the rendered options.
   *
   * If it is supplied (and not null/undefined), the rendered options will not
   * update in response to user actions. Instead, the `value` prop must change in
   * order for the rendered options to update.
   *
   * If `defaultValue` is provided, any options with the supplied values will be
   * selected.
   */
  var ReactDOMSelect = {
    getHostProps: function getHostProps(inst, props) {
      return _assign({}, DisabledInputUtils.getHostProps(inst, props), {
        onChange: inst._wrapperState.onChange,
        value: undefined
      });
    },

    mountWrapper: function mountWrapper(inst, props) {
      if ("production" !== 'production') {}

      var value = LinkedValueUtils.getValue(props);
      inst._wrapperState = {
        pendingUpdate: false,
        initialValue: value != null ? value : props.defaultValue,
        listeners: null,
        onChange: _handleChange.bind(inst),
        wasMultiple: Boolean(props.multiple)
      };

      if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
        void 0;
        didWarnValueDefaultValue = true;
      }
    },

    getSelectValueContext: function getSelectValueContext(inst) {
      // ReactDOMOption looks at this initial value so the initial generated
      // markup has correct `selected` attributes
      return inst._wrapperState.initialValue;
    },

    postUpdateWrapper: function postUpdateWrapper(inst) {
      var props = inst._currentElement.props;

      // After the initial mount, we control selected-ness manually so don't pass
      // this value down
      inst._wrapperState.initialValue = undefined;

      var wasMultiple = inst._wrapperState.wasMultiple;
      inst._wrapperState.wasMultiple = Boolean(props.multiple);

      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        inst._wrapperState.pendingUpdate = false;
        updateOptions(inst, Boolean(props.multiple), value);
      } else if (wasMultiple !== Boolean(props.multiple)) {
        // For simplicity, reapply `defaultValue` if `multiple` is toggled.
        if (props.defaultValue != null) {
          updateOptions(inst, Boolean(props.multiple), props.defaultValue);
        } else {
          // Revert the select back to its default unselected state.
          updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
        }
      }
    }
  };

  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);

    if (this._rootNodeID) {
      this._wrapperState.pendingUpdate = true;
    }
    ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
    return returnValue;
  }

  module.exports = ReactDOMSelect;
});

var ReactDOMSelect$1 = interopDefault(ReactDOMSelect);

var require$$1$15 = Object.freeze({
  default: ReactDOMSelect$1
});

var ReactDOMOption = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMOption
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var ReactChildren = interopDefault(require$$3);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactDOMSelect = interopDefault(require$$1$15);

  var warning = interopDefault(require$$0$1);
  var didWarnInvalidOptionChildren = false;

  function flattenChildren(children) {
    var content = '';

    // Flatten children and warn if they aren't strings or numbers;
    // invalid types are ignored.
    ReactChildren.forEach(children, function (child) {
      if (child == null) {
        return;
      }
      if (typeof child === 'string' || typeof child === 'number') {
        content += child;
      } else if (!didWarnInvalidOptionChildren) {
        didWarnInvalidOptionChildren = true;
        void 0;
      }
    });

    return content;
  }

  /**
   * Implements an <option> host component that warns when `selected` is set.
   */
  var ReactDOMOption = {
    mountWrapper: function mountWrapper(inst, props, hostParent) {
      // TODO (yungsters): Remove support for `selected` in <option>.
      if ("production" !== 'production') {}

      // Look up whether this option is 'selected'
      var selectValue = null;
      if (hostParent != null) {
        var selectParent = hostParent;

        if (selectParent._tag === 'optgroup') {
          selectParent = selectParent._hostParent;
        }

        if (selectParent != null && selectParent._tag === 'select') {
          selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
        }
      }

      // If the value is null (e.g., no specified value or after initial mount)
      // or missing (e.g., for <datalist>), we don't change props.selected
      var selected = null;
      if (selectValue != null) {
        var value;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = flattenChildren(props.children);
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var i = 0; i < selectValue.length; i++) {
            if ('' + selectValue[i] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }
      }

      inst._wrapperState = { selected: selected };
    },

    postMountWrapper: function postMountWrapper(inst) {
      // value="" should make a value attribute (#6219)
      var props = inst._currentElement.props;
      if (props.value != null) {
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        node.setAttribute('value', props.value);
      }
    },

    getHostProps: function getHostProps(inst, props) {
      var hostProps = _assign({ selected: undefined, children: undefined }, props);

      // Read state only from initial mount because <select> updates value
      // manually; we need the initial state only for server rendering
      if (inst._wrapperState.selected != null) {
        hostProps.selected = inst._wrapperState.selected;
      }

      var content = flattenChildren(props.children);

      if (content) {
        hostProps.children = content;
      }

      return hostProps;
    }

  };

  module.exports = ReactDOMOption;
});

var ReactDOMOption$1 = interopDefault(ReactDOMOption);

var require$$13$2 = Object.freeze({
  default: ReactDOMOption$1
});

var ReactDOMTextarea = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMTextarea
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var DisabledInputUtils = interopDefault(require$$5$8);
  var LinkedValueUtils = interopDefault(require$$4$5);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactUpdates = interopDefault(require$$6$3);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  var didWarnValueLink = false;
  var didWarnValDefaultVal = false;

  function forceUpdateIfMounted() {
    if (this._rootNodeID) {
      // DOM component is still mounted; update
      ReactDOMTextarea.updateWrapper(this);
    }
  }

  /**
   * Implements a <textarea> host component that allows setting `value`, and
   * `defaultValue`. This differs from the traditional DOM API because value is
   * usually set as PCDATA children.
   *
   * If `value` is not supplied (or null/undefined), user actions that affect the
   * value will trigger updates to the element.
   *
   * If `value` is supplied (and not null/undefined), the rendered element will
   * not trigger updates to the element. Instead, the `value` prop must change in
   * order for the rendered element to be updated.
   *
   * The rendered element will be initialized with an empty value, the prop
   * `defaultValue` if specified, or the children content (deprecated).
   */
  var ReactDOMTextarea = {
    getHostProps: function getHostProps(inst, props) {
      !(props.dangerouslySetInnerHTML == null) ? _prodInvariant('91') : void 0;

      // Always set children to the same thing. In IE9, the selection range will
      // get reset if `textContent` is mutated.  We could add a check in setTextContent
      // to only set the value if/when the value differs from the node value (which would
      // completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
      // The value can be a boolean or object so that's why it's forced to be a string.
      var hostProps = _assign({}, DisabledInputUtils.getHostProps(inst, props), {
        value: undefined,
        defaultValue: undefined,
        children: '' + inst._wrapperState.initialValue,
        onChange: inst._wrapperState.onChange
      });

      return hostProps;
    },

    mountWrapper: function mountWrapper(inst, props) {
      if ("production" !== 'production') {}

      var value = LinkedValueUtils.getValue(props);
      var initialValue = value;

      // Only bother fetching default value if we're going to use it
      if (value == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var children = props.children;
        if (children != null) {
          if ("production" !== 'production') {}
          !(defaultValue == null) ? _prodInvariant('92') : void 0;
          if (Array.isArray(children)) {
            !(children.length <= 1) ? _prodInvariant('93') : void 0;
            children = children[0];
          }

          defaultValue = '' + children;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      inst._wrapperState = {
        initialValue: '' + initialValue,
        listeners: null,
        onChange: _handleChange.bind(inst)
      };
    },

    updateWrapper: function updateWrapper(inst) {
      var props = inst._currentElement.props;

      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      var value = LinkedValueUtils.getValue(props);
      if (value != null) {
        // Cast `value` to a string to ensure the value is set correctly. While
        // browsers typically do this as necessary, jsdom doesn't.
        var newValue = '' + value;

        // To avoid side effects (such as losing text selection), only set value if changed
        if (newValue !== node.value) {
          node.value = newValue;
        }
        if (props.defaultValue == null) {
          node.defaultValue = newValue;
        }
      }
      if (props.defaultValue != null) {
        node.defaultValue = props.defaultValue;
      }
    },

    postMountWrapper: function postMountWrapper(inst) {
      // This is in postMount because we need access to the DOM node, which is not
      // available until after the component has mounted.
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);

      // Warning: node.value may be the empty string at this point (IE11) if placeholder is set.
      node.value = node.textContent; // Detach value from defaultValue
    }
  };

  function _handleChange(event) {
    var props = this._currentElement.props;
    var returnValue = LinkedValueUtils.executeOnChange(props, event);
    ReactUpdates.asap(forceUpdateIfMounted, this);
    return returnValue;
  }

  module.exports = ReactDOMTextarea;
});

var ReactDOMTextarea$1 = interopDefault(ReactDOMTextarea);

var require$$11$2 = Object.freeze({
  default: ReactDOMTextarea$1
});

var ReactComponentEnvironment = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactComponentEnvironment
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  var injected = false;

  var ReactComponentEnvironment = {

    /**
     * Optionally injectable hook for swapping out mount images in the middle of
     * the tree.
     */
    replaceNodeWithMarkup: null,

    /**
     * Optionally injectable hook for processing a queue of child updates. Will
     * later move into MultiChildComponents.
     */
    processChildrenUpdates: null,

    injection: {
      injectEnvironment: function injectEnvironment(environment) {
        !!injected ? _prodInvariant('104') : void 0;
        ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
        ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
        injected = true;
      }
    }

  };

  module.exports = ReactComponentEnvironment;
});

var ReactComponentEnvironment$1 = interopDefault(ReactComponentEnvironment);

var require$$5$9 = Object.freeze({
  default: ReactComponentEnvironment$1
});

var ReactInstanceMap = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInstanceMap
   */

  'use strict';

  /**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   */

  // TODO: Replace this with ES6: var ReactInstanceMap = new Map();

  var ReactInstanceMap = {

    /**
     * This API should be called `delete` but we'd have to make sure to always
     * transform these to strings for IE support. When this transform is fully
     * supported we can rename it.
     */
    remove: function remove(key) {
      key._reactInternalInstance = undefined;
    },

    get: function get(key) {
      return key._reactInternalInstance;
    },

    has: function has(key) {
      return key._reactInternalInstance !== undefined;
    },

    set: function set(key, value) {
      key._reactInternalInstance = value;
    }

  };

  module.exports = ReactInstanceMap;
});

var ReactInstanceMap$1 = interopDefault(ReactInstanceMap);

var require$$3$8 = Object.freeze({
  default: ReactInstanceMap$1
});

var ReactNodeTypes = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactNodeTypes
   * 
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactElement = interopDefault(require$$13);

  var invariant = interopDefault(require$$1);

  var ReactNodeTypes = {
    HOST: 0,
    COMPOSITE: 1,
    EMPTY: 2,

    getType: function getType(node) {
      if (node === null || node === false) {
        return ReactNodeTypes.EMPTY;
      } else if (ReactElement.isValidElement(node)) {
        if (typeof node.type === 'function') {
          return ReactNodeTypes.COMPOSITE;
        } else {
          return ReactNodeTypes.HOST;
        }
      }
      _prodInvariant('26', node);
    }
  };

  module.exports = ReactNodeTypes;
});

var ReactNodeTypes$1 = interopDefault(ReactNodeTypes);

var require$$0$17 = Object.freeze({
  default: ReactNodeTypes$1
});

var shallowEqual = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   * 
   */

  /*eslint-disable no-self-compare */

  'use strict';

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  module.exports = shallowEqual;
});

var shallowEqual$1 = interopDefault(shallowEqual);



var require$$0$18 = Object.freeze({
  default: shallowEqual$1
});

var shouldUpdateReactComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule shouldUpdateReactComponent
   */

  'use strict';

  /**
   * Given a `prevElement` and `nextElement`, determines if the existing
   * instance should be updated as opposed to being destroyed or replaced by a new
   * instance. Both arguments are elements. This ensures that this logic can
   * operate on stateless trees without any backing instance.
   *
   * @param {?object} prevElement
   * @param {?object} nextElement
   * @return {boolean} True if the existing instance should be updated.
   * @protected
   */

  function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
      return prevEmpty === nextEmpty;
    }

    var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
    var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
  }

  module.exports = shouldUpdateReactComponent;
});

var shouldUpdateReactComponent$1 = interopDefault(shouldUpdateReactComponent);



var require$$1$16 = Object.freeze({
  default: shouldUpdateReactComponent$1
});

var ReactCompositeComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactCompositeComponent
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var ReactComponentEnvironment = interopDefault(require$$5$9);
  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactElement = interopDefault(require$$13);
  var ReactErrorUtils = interopDefault(require$$11);
  var ReactInstanceMap = interopDefault(require$$3$8);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactNodeTypes = interopDefault(require$$0$17);
  var ReactPropTypeLocations = interopDefault(require$$7$1);
  var ReactReconciler = interopDefault(require$$8$2);

  var checkReactTypeSpec = interopDefault(require$$5$4);
  var emptyObject = interopDefault(require$$5$3);
  var invariant = interopDefault(require$$1);
  var shallowEqual = interopDefault(require$$0$18);
  var shouldUpdateReactComponent = interopDefault(require$$1$16);
  var warning = interopDefault(require$$0$1);

  var CompositeTypes = {
    ImpureClass: 0,
    PureClass: 1,
    StatelessFunctional: 2
  };

  function StatelessComponent(Component) {}
  StatelessComponent.prototype.render = function () {
    var Component = ReactInstanceMap.get(this)._currentElement.type;
    var element = Component(this.props, this.context, this.updater);
    warnIfInvalidElement(Component, element);
    return element;
  };

  function warnIfInvalidElement(Component, element) {
    if ("production" !== 'production') {}
  }

  function shouldConstruct(Component) {
    return !!(Component.prototype && Component.prototype.isReactComponent);
  }

  function isPureComponent(Component) {
    return !!(Component.prototype && Component.prototype.isPureReactComponent);
  }

  // Separated into a function to contain deoptimizations caused by try/finally.
  function measureLifeCyclePerf(fn, debugID, timerType) {
    if (debugID === 0) {
      // Top-level wrappers (see ReactMount) and empty components (see
      // ReactDOMEmptyComponent) are invisible to hooks and devtools.
      // Both are implementation details that should go away in the future.
      return fn();
    }

    ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
    try {
      return fn();
    } finally {
      ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
    }
  }

  /**
   * ------------------ The Life-Cycle of a Composite Component ------------------
   *
   * - constructor: Initialization of state. The instance is now retained.
   *   - componentWillMount
   *   - render
   *   - [children's constructors]
   *     - [children's componentWillMount and render]
   *     - [children's componentDidMount]
   *     - componentDidMount
   *
   *       Update Phases:
   *       - componentWillReceiveProps (only called if parent updated)
   *       - shouldComponentUpdate
   *         - componentWillUpdate
   *           - render
   *           - [children's constructors or receive props phases]
   *         - componentDidUpdate
   *
   *     - componentWillUnmount
   *     - [children's componentWillUnmount]
   *   - [children destroyed]
   * - (destroyed): The instance is now blank, released by React and ready for GC.
   *
   * -----------------------------------------------------------------------------
   */

  /**
   * An incrementing ID assigned to each component when it is mounted. This is
   * used to enforce the order in which `ReactUpdates` updates dirty components.
   *
   * @private
   */
  var nextMountID = 1;

  /**
   * @lends {ReactCompositeComponent.prototype}
   */
  var ReactCompositeComponentMixin = {

    /**
     * Base constructor for all composite component.
     *
     * @param {ReactElement} element
     * @final
     * @internal
     */
    construct: function construct(element) {
      this._currentElement = element;
      this._rootNodeID = 0;
      this._compositeType = null;
      this._instance = null;
      this._hostParent = null;
      this._hostContainerInfo = null;

      // See ReactUpdateQueue
      this._updateBatchNumber = null;
      this._pendingElement = null;
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;

      this._renderedNodeType = null;
      this._renderedComponent = null;
      this._context = null;
      this._mountOrder = 0;
      this._topLevelWrapper = null;

      // See ReactUpdates and ReactUpdateQueue.
      this._pendingCallbacks = null;

      // ComponentWillUnmount shall only be called once
      this._calledComponentWillUnmount = false;

      if ("production" !== 'production') {}
    },

    /**
     * Initializes the component, renders markup, and registers event listeners.
     *
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {?object} hostParent
     * @param {?object} hostContainerInfo
     * @param {?object} context
     * @return {?string} Rendered markup to be inserted into the DOM.
     * @final
     * @internal
     */
    mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
      var _this = this;

      this._context = context;
      this._mountOrder = nextMountID++;
      this._hostParent = hostParent;
      this._hostContainerInfo = hostContainerInfo;

      var publicProps = this._currentElement.props;
      var publicContext = this._processContext(context);

      var Component = this._currentElement.type;

      var updateQueue = transaction.getUpdateQueue();

      // Initialize the public class
      var doConstruct = shouldConstruct(Component);
      var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
      var renderedElement;

      // Support functional components
      if (!doConstruct && (inst == null || inst.render == null)) {
        renderedElement = inst;
        warnIfInvalidElement(Component, renderedElement);
        !(inst === null || inst === false || ReactElement.isValidElement(inst)) ? _prodInvariant('105', Component.displayName || Component.name || 'Component') : void 0;
        inst = new StatelessComponent(Component);
        this._compositeType = CompositeTypes.StatelessFunctional;
      } else {
        if (isPureComponent(Component)) {
          this._compositeType = CompositeTypes.PureClass;
        } else {
          this._compositeType = CompositeTypes.ImpureClass;
        }
      }

      if ("production" !== 'production') {}

      // These should be set up in the constructor, but as a convenience for
      // simpler class abstractions, we set them up after the fact.
      inst.props = publicProps;
      inst.context = publicContext;
      inst.refs = emptyObject;
      inst.updater = updateQueue;

      this._instance = inst;

      // Store a reference from the instance back to the internal representation
      ReactInstanceMap.set(inst, this);

      if ("production" !== 'production') {}

      var initialState = inst.state;
      if (initialState === undefined) {
        inst.state = initialState = null;
      }
      !((typeof initialState === 'undefined' ? 'undefined' : _typeof(initialState)) === 'object' && !Array.isArray(initialState)) ? _prodInvariant('106', this.getName() || 'ReactCompositeComponent') : void 0;

      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;

      var markup;
      if (inst.unstable_handleError) {
        markup = this.performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context);
      } else {
        markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
      }

      if (inst.componentDidMount) {
        if ("production" !== 'production') {} else {
          transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
        }
      }

      return markup;
    },

    _constructComponent: function _constructComponent(doConstruct, publicProps, publicContext, updateQueue) {
      if ("production" !== 'production') {} else {
        return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
      }
    },

    _constructComponentWithoutOwner: function _constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue) {
      var Component = this._currentElement.type;

      if (doConstruct) {
        if ("production" !== 'production') {} else {
          return new Component(publicProps, publicContext, updateQueue);
        }
      }

      // This can still be an instance in case of factory components
      // but we'll count this as time spent rendering as the more common case.
      if ("production" !== 'production') {} else {
        return Component(publicProps, publicContext, updateQueue);
      }
    },

    performInitialMountWithErrorHandling: function performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context) {
      var markup;
      var checkpoint = transaction.checkpoint();
      try {
        markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
      } catch (e) {
        // Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
        transaction.rollback(checkpoint);
        this._instance.unstable_handleError(e);
        if (this._pendingStateQueue) {
          this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
        }
        checkpoint = transaction.checkpoint();

        this._renderedComponent.unmountComponent(true);
        transaction.rollback(checkpoint);

        // Try again - we've informed the component about the error, so they can render an error message this time.
        // If this throws again, the error will bubble up (and can be caught by a higher error boundary).
        markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
      }
      return markup;
    },

    performInitialMount: function performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context) {
      var inst = this._instance;

      var debugID = 0;
      if ("production" !== 'production') {}

      if (inst.componentWillMount) {
        if ("production" !== 'production') {} else {
          inst.componentWillMount();
        }
        // When mounting, calls to `setState` by `componentWillMount` will set
        // `this._pendingStateQueue` without triggering a re-render.
        if (this._pendingStateQueue) {
          inst.state = this._processPendingState(inst.props, inst.context);
        }
      }

      // If not a stateless component, we now render
      if (renderedElement === undefined) {
        renderedElement = this._renderValidatedComponent();
      }

      var nodeType = ReactNodeTypes.getType(renderedElement);
      this._renderedNodeType = nodeType;
      var child = this._instantiateReactComponent(renderedElement, nodeType !== ReactNodeTypes.EMPTY /* shouldHaveDebugID */
      );
      this._renderedComponent = child;

      var markup = ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);

      if ("production" !== 'production') {}

      return markup;
    },

    getHostNode: function getHostNode() {
      return ReactReconciler.getHostNode(this._renderedComponent);
    },

    /**
     * Releases any resources allocated by `mountComponent`.
     *
     * @final
     * @internal
     */
    unmountComponent: function unmountComponent(safely) {
      if (!this._renderedComponent) {
        return;
      }

      var inst = this._instance;

      if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
        inst._calledComponentWillUnmount = true;

        if (safely) {
          var name = this.getName() + '.componentWillUnmount()';
          ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
        } else {
          if ("production" !== 'production') {} else {
            inst.componentWillUnmount();
          }
        }
      }

      if (this._renderedComponent) {
        ReactReconciler.unmountComponent(this._renderedComponent, safely);
        this._renderedNodeType = null;
        this._renderedComponent = null;
        this._instance = null;
      }

      // Reset pending fields
      // Even if this component is scheduled for another update in ReactUpdates,
      // it would still be ignored because these fields are reset.
      this._pendingStateQueue = null;
      this._pendingReplaceState = false;
      this._pendingForceUpdate = false;
      this._pendingCallbacks = null;
      this._pendingElement = null;

      // These fields do not really need to be reset since this object is no
      // longer accessible.
      this._context = null;
      this._rootNodeID = 0;
      this._topLevelWrapper = null;

      // Delete the reference from the instance to this internal representation
      // which allow the internals to be properly cleaned up even if the user
      // leaks a reference to the public instance.
      ReactInstanceMap.remove(inst);

      // Some existing components rely on inst.props even after they've been
      // destroyed (in event handlers).
      // TODO: inst.props = null;
      // TODO: inst.state = null;
      // TODO: inst.context = null;
    },

    /**
     * Filters the context object to only contain keys specified in
     * `contextTypes`
     *
     * @param {object} context
     * @return {?object}
     * @private
     */
    _maskContext: function _maskContext(context) {
      var Component = this._currentElement.type;
      var contextTypes = Component.contextTypes;
      if (!contextTypes) {
        return emptyObject;
      }
      var maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      return maskedContext;
    },

    /**
     * Filters the context object to only contain keys specified in
     * `contextTypes`, and asserts that they are valid.
     *
     * @param {object} context
     * @return {?object}
     * @private
     */
    _processContext: function _processContext(context) {
      var maskedContext = this._maskContext(context);
      if ("production" !== 'production') {}
      return maskedContext;
    },

    /**
     * @param {object} currentContext
     * @return {object}
     * @private
     */
    _processChildContext: function _processChildContext(currentContext) {
      var Component = this._currentElement.type;
      var inst = this._instance;
      var childContext;

      if (inst.getChildContext) {
        if ("production" !== 'production') {} else {
          childContext = inst.getChildContext();
        }
      }

      if (childContext) {
        !(_typeof(Component.childContextTypes) === 'object') ? _prodInvariant('107', this.getName() || 'ReactCompositeComponent') : void 0;
        if ("production" !== 'production') {}
        for (var name in childContext) {
          !(name in Component.childContextTypes) ? _prodInvariant('108', this.getName() || 'ReactCompositeComponent', name) : void 0;
        }
        return _assign({}, currentContext, childContext);
      }
      return currentContext;
    },

    /**
     * Assert that the context types are valid
     *
     * @param {object} typeSpecs Map of context field to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @private
     */
    _checkContextTypes: function _checkContextTypes(typeSpecs, values, location) {
      checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
    },

    receiveComponent: function receiveComponent(nextElement, transaction, nextContext) {
      var prevElement = this._currentElement;
      var prevContext = this._context;

      this._pendingElement = null;

      this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
    },

    /**
     * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
     * is set, update the component.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    performUpdateIfNecessary: function performUpdateIfNecessary(transaction) {
      if (this._pendingElement != null) {
        ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
      } else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
        this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
      } else {
        this._updateBatchNumber = null;
      }
    },

    /**
     * Perform an update to a mounted component. The componentWillReceiveProps and
     * shouldComponentUpdate methods are called, then (assuming the update isn't
     * skipped) the remaining update lifecycle methods are called and the DOM
     * representation is updated.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @param {ReactElement} prevParentElement
     * @param {ReactElement} nextParentElement
     * @internal
     * @overridable
     */
    updateComponent: function updateComponent(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
      var inst = this._instance;
      !(inst != null) ? _prodInvariant('136', this.getName() || 'ReactCompositeComponent') : void 0;

      var willReceive = false;
      var nextContext;

      // Determine if the context has changed or not
      if (this._context === nextUnmaskedContext) {
        nextContext = inst.context;
      } else {
        nextContext = this._processContext(nextUnmaskedContext);
        willReceive = true;
      }

      var prevProps = prevParentElement.props;
      var nextProps = nextParentElement.props;

      // Not a simple state update but a props update
      if (prevParentElement !== nextParentElement) {
        willReceive = true;
      }

      // An update here will schedule an update but immediately set
      // _pendingStateQueue which will ensure that any state updates gets
      // immediately reconciled instead of waiting for the next batch.
      if (willReceive && inst.componentWillReceiveProps) {
        if ("production" !== 'production') {} else {
          inst.componentWillReceiveProps(nextProps, nextContext);
        }
      }

      var nextState = this._processPendingState(nextProps, nextContext);
      var shouldUpdate = true;

      if (!this._pendingForceUpdate) {
        if (inst.shouldComponentUpdate) {
          if ("production" !== 'production') {} else {
            shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
          }
        } else {
          if (this._compositeType === CompositeTypes.PureClass) {
            shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
          }
        }
      }

      if ("production" !== 'production') {}

      this._updateBatchNumber = null;
      if (shouldUpdate) {
        this._pendingForceUpdate = false;
        // Will set `this.props`, `this.state` and `this.context`.
        this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
      } else {
        // If it's determined that a component should not update, we still want
        // to set props and state but we shortcut the rest of the update.
        this._currentElement = nextParentElement;
        this._context = nextUnmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
      }
    },

    _processPendingState: function _processPendingState(props, context) {
      var inst = this._instance;
      var queue = this._pendingStateQueue;
      var replace = this._pendingReplaceState;
      this._pendingReplaceState = false;
      this._pendingStateQueue = null;

      if (!queue) {
        return inst.state;
      }

      if (replace && queue.length === 1) {
        return queue[0];
      }

      var nextState = _assign({}, replace ? queue[0] : inst.state);
      for (var i = replace ? 1 : 0; i < queue.length; i++) {
        var partial = queue[i];
        _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
      }

      return nextState;
    },

    /**
     * Merges new props and state, notifies delegate methods of update and
     * performs update.
     *
     * @param {ReactElement} nextElement Next element
     * @param {object} nextProps Next public object to set as properties.
     * @param {?object} nextState Next object to set as state.
     * @param {?object} nextContext Next public object to set as context.
     * @param {ReactReconcileTransaction} transaction
     * @param {?object} unmaskedContext
     * @private
     */
    _performComponentUpdate: function _performComponentUpdate(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
      var _this2 = this;

      var inst = this._instance;

      var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
      var prevProps;
      var prevState;
      var prevContext;
      if (hasComponentDidUpdate) {
        prevProps = inst.props;
        prevState = inst.state;
        prevContext = inst.context;
      }

      if (inst.componentWillUpdate) {
        if ("production" !== 'production') {} else {
          inst.componentWillUpdate(nextProps, nextState, nextContext);
        }
      }

      this._currentElement = nextElement;
      this._context = unmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;

      this._updateRenderedComponent(transaction, unmaskedContext);

      if (hasComponentDidUpdate) {
        if ("production" !== 'production') {} else {
          transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
        }
      }
    },

    /**
     * Call the component's `render` method and update the DOM accordingly.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    _updateRenderedComponent: function _updateRenderedComponent(transaction, context) {
      var prevComponentInstance = this._renderedComponent;
      var prevRenderedElement = prevComponentInstance._currentElement;
      var nextRenderedElement = this._renderValidatedComponent();

      var debugID = 0;
      if ("production" !== 'production') {}

      if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
        ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
      } else {
        var oldHostNode = ReactReconciler.getHostNode(prevComponentInstance);
        ReactReconciler.unmountComponent(prevComponentInstance, false);

        var nodeType = ReactNodeTypes.getType(nextRenderedElement);
        this._renderedNodeType = nodeType;
        var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== ReactNodeTypes.EMPTY /* shouldHaveDebugID */
        );
        this._renderedComponent = child;

        var nextMarkup = ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);

        if ("production" !== 'production') {}

        this._replaceNodeWithMarkup(oldHostNode, nextMarkup, prevComponentInstance);
      }
    },

    /**
     * Overridden in shallow rendering.
     *
     * @protected
     */
    _replaceNodeWithMarkup: function _replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance) {
      ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
    },

    /**
     * @protected
     */
    _renderValidatedComponentWithoutOwnerOrContext: function _renderValidatedComponentWithoutOwnerOrContext() {
      var inst = this._instance;
      var renderedComponent;

      if ("production" !== 'production') {} else {
        renderedComponent = inst.render();
      }

      if ("production" !== 'production') {}

      return renderedComponent;
    },

    /**
     * @private
     */
    _renderValidatedComponent: function _renderValidatedComponent() {
      var renderedComponent;
      if ("production" !== 'production' || this._compositeType !== CompositeTypes.StatelessFunctional) {
        ReactCurrentOwner.current = this;
        try {
          renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
        } finally {
          ReactCurrentOwner.current = null;
        }
      } else {
        renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
      }
      !(
      // TODO: An `isValidNode` function would probably be more appropriate
      renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? _prodInvariant('109', this.getName() || 'ReactCompositeComponent') : void 0;

      return renderedComponent;
    },

    /**
     * Lazily allocates the refs object and stores `component` as `ref`.
     *
     * @param {string} ref Reference name.
     * @param {component} component Component to store as `ref`.
     * @final
     * @private
     */
    attachRef: function attachRef(ref, component) {
      var inst = this.getPublicInstance();
      !(inst != null) ? _prodInvariant('110') : void 0;
      var publicComponentInstance = component.getPublicInstance();
      if ("production" !== 'production') {}
      var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
      refs[ref] = publicComponentInstance;
    },

    /**
     * Detaches a reference name.
     *
     * @param {string} ref Name to dereference.
     * @final
     * @private
     */
    detachRef: function detachRef(ref) {
      var refs = this.getPublicInstance().refs;
      delete refs[ref];
    },

    /**
     * Get a text description of the component that can be used to identify it
     * in error messages.
     * @return {string} The name or null.
     * @internal
     */
    getName: function getName() {
      var type = this._currentElement.type;
      var constructor = this._instance && this._instance.constructor;
      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
    },

    /**
     * Get the publicly accessible representation of this component - i.e. what
     * is exposed by refs and returned by render. Can be null for stateless
     * components.
     *
     * @return {ReactComponent} the public component instance.
     * @internal
     */
    getPublicInstance: function getPublicInstance() {
      var inst = this._instance;
      if (this._compositeType === CompositeTypes.StatelessFunctional) {
        return null;
      }
      return inst;
    },

    // Stub
    _instantiateReactComponent: null

  };

  var ReactCompositeComponent = {

    Mixin: ReactCompositeComponentMixin

  };

  module.exports = ReactCompositeComponent;
});

var ReactCompositeComponent$1 = interopDefault(ReactCompositeComponent);



var require$$4$7 = Object.freeze({
  default: ReactCompositeComponent$1
});

var ReactEmptyComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactEmptyComponent
   */

  'use strict';

  var emptyComponentFactory;

  var ReactEmptyComponentInjection = {
    injectEmptyComponentFactory: function injectEmptyComponentFactory(factory) {
      emptyComponentFactory = factory;
    }
  };

  var ReactEmptyComponent = {
    create: function create(instantiate) {
      return emptyComponentFactory(instantiate);
    }
  };

  ReactEmptyComponent.injection = ReactEmptyComponentInjection;

  module.exports = ReactEmptyComponent;
});

var ReactEmptyComponent$1 = interopDefault(ReactEmptyComponent);

var require$$3$10 = Object.freeze({
  default: ReactEmptyComponent$1
});

var ReactHostComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactHostComponent
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var invariant = interopDefault(require$$1);

  var genericComponentClass = null;
  // This registry keeps track of wrapper classes around host tags.
  var tagToComponentClass = {};
  var textComponentClass = null;

  var ReactHostComponentInjection = {
    // This accepts a class that receives the tag string. This is a catch all
    // that can render any kind of tag.
    injectGenericComponentClass: function injectGenericComponentClass(componentClass) {
      genericComponentClass = componentClass;
    },
    // This accepts a text component class that takes the text string to be
    // rendered as props.
    injectTextComponentClass: function injectTextComponentClass(componentClass) {
      textComponentClass = componentClass;
    },
    // This accepts a keyed object with classes as values. Each key represents a
    // tag. That particular tag will use this class instead of the generic one.
    injectComponentClasses: function injectComponentClasses(componentClasses) {
      _assign(tagToComponentClass, componentClasses);
    }
  };

  /**
   * Get a host internal component class for a specific tag.
   *
   * @param {ReactElement} element The element to create.
   * @return {function} The internal class constructor function.
   */
  function createInternalComponent(element) {
    !genericComponentClass ? _prodInvariant('111', element.type) : void 0;
    return new genericComponentClass(element);
  }

  /**
   * @param {ReactText} text
   * @return {ReactComponent}
   */
  function createInstanceForText(text) {
    return new textComponentClass(text);
  }

  /**
   * @param {ReactComponent} component
   * @return {boolean}
   */
  function isTextComponent(component) {
    return component instanceof textComponentClass;
  }

  var ReactHostComponent = {
    createInternalComponent: createInternalComponent,
    createInstanceForText: createInstanceForText,
    isTextComponent: isTextComponent,
    injection: ReactHostComponentInjection
  };

  module.exports = ReactHostComponent;
});

var ReactHostComponent$1 = interopDefault(ReactHostComponent);

var require$$1$17 = Object.freeze({
  default: ReactHostComponent$1
});

var instantiateReactComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule instantiateReactComponent
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var ReactCompositeComponent = interopDefault(require$$4$7);
  var ReactEmptyComponent = interopDefault(require$$3$10);
  var ReactHostComponent = interopDefault(require$$1$17);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  // To avoid a cyclic dependency, we create the final class in this module
  var ReactCompositeComponentWrapper = function ReactCompositeComponentWrapper(element) {
    this.construct(element);
  };
  _assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
    _instantiateReactComponent: instantiateReactComponent
  });

  function getDeclarationErrorAddendum(owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  }

  /**
   * Check if the type reference is a known internal type. I.e. not a user
   * provided composite type.
   *
   * @param {function} type
   * @return {boolean} Returns true if this is a valid internal type.
   */
  function isInternalComponentType(type) {
    return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
  }

  var nextDebugID = 1;

  /**
   * Given a ReactNode, create an instance that will actually be mounted.
   *
   * @param {ReactNode} node
   * @param {boolean} shouldHaveDebugID
   * @return {object} A new instance of the element's constructor.
   * @protected
   */
  function instantiateReactComponent(node, shouldHaveDebugID) {
    var instance;

    if (node === null || node === false) {
      instance = ReactEmptyComponent.create(instantiateReactComponent);
    } else if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) === 'object') {
      var element = node;
      !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? _prodInvariant('130', element.type == null ? element.type : _typeof(element.type), getDeclarationErrorAddendum(element._owner)) : void 0;

      // Special case string values
      if (typeof element.type === 'string') {
        instance = ReactHostComponent.createInternalComponent(element);
      } else if (isInternalComponentType(element.type)) {
        // This is temporarily available for custom components that are not string
        // representations. I.e. ART. Once those are updated to use the string
        // representation, we can drop this code path.
        instance = new element.type(element);

        // We renamed this. Allow the old name for compat. :(
        if (!instance.getHostNode) {
          instance.getHostNode = instance.getNativeNode;
        }
      } else {
        instance = new ReactCompositeComponentWrapper(element);
      }
    } else if (typeof node === 'string' || typeof node === 'number') {
      instance = ReactHostComponent.createInstanceForText(node);
    } else {
      _prodInvariant('131', typeof node === 'undefined' ? 'undefined' : _typeof(node));
    }

    if ("production" !== 'production') {}

    // These two fields are used by the DOM and ART diffing algorithms
    // respectively. Instead of using expandos on components, we should be
    // storing the state needed by the diffing algorithms elsewhere.
    instance._mountIndex = 0;
    instance._mountImage = null;

    if ("production" !== 'production') {}

    // Internal instances should fully constructed at this point, so they should
    // not get any new fields added to them at this point.
    if ("production" !== 'production') {}

    return instance;
  }

  module.exports = instantiateReactComponent;
});

var instantiateReactComponent$1 = interopDefault(instantiateReactComponent);



var require$$4$6 = Object.freeze({
  default: instantiateReactComponent$1
});

var ReactChildReconciler = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactChildReconciler
   */

  'use strict';

  var ReactReconciler = interopDefault(require$$8$2);

  var instantiateReactComponent = interopDefault(require$$4$6);
  var KeyEscapeUtils = interopDefault(require$$3$2);
  var shouldUpdateReactComponent = interopDefault(require$$1$16);
  var traverseAllChildren = interopDefault(require$$2$1);
  var warning = interopDefault(require$$0$1);

  var ReactComponentTreeHook;

  if (typeof process !== 'undefined' && process.env && "production" === 'test') {
    // Temporary hack.
    // Inline requires don't work well with Jest:
    // https://github.com/facebook/react/issues/7240
    // Remove the inline requires when we don't need them anymore:
    // https://github.com/facebook/react/pull/7178
    ReactComponentTreeHook = interopDefault(require$$1$2);
  }

  function instantiateChild(childInstances, child, name, selfDebugID) {
    // We found a component instance.
    var keyUnique = childInstances[name] === undefined;
    if ("production" !== 'production') {}
    if (child != null && keyUnique) {
      childInstances[name] = instantiateReactComponent(child, true);
    }
  }

  /**
   * ReactChildReconciler provides helpers for initializing or updating a set of
   * children. Its output is suitable for passing it onto ReactMultiChild which
   * does diffed reordering and insertion.
   */
  var ReactChildReconciler = {
    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildNodes Nested child maps.
     * @return {?object} A set of child instances.
     * @internal
     */
    instantiateChildren: function instantiateChildren(nestedChildNodes, transaction, context, selfDebugID // 0 in production and for roots
    ) {
      if (nestedChildNodes == null) {
        return null;
      }
      var childInstances = {};

      if ("production" !== 'production') {} else {
        traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
      }
      return childInstances;
    },

    /**
     * Updates the rendered children and returns a new set of children.
     *
     * @param {?object} prevChildren Previously initialized set of children.
     * @param {?object} nextChildren Flat child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @param {object} context
     * @return {?object} A new set of child instances.
     * @internal
     */
    updateChildren: function updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID // 0 in production and for roots
    ) {
      // We currently don't have a way to track moves here but if we use iterators
      // instead of for..in we can zip the iterators and check if an item has
      // moved.
      // TODO: If nothing has changed, return the prevChildren object so that we
      // can quickly bailout if nothing has changed.
      if (!nextChildren && !prevChildren) {
        return;
      }
      var name;
      var prevChild;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
          ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
          nextChildren[name] = prevChild;
        } else {
          if (prevChild) {
            removedNodes[name] = ReactReconciler.getHostNode(prevChild);
            ReactReconciler.unmountComponent(prevChild, false);
          }
          // The child must be instantiated before it's mounted.
          var nextChildInstance = instantiateReactComponent(nextElement, true);
          nextChildren[name] = nextChildInstance;
          // Creating mount image now ensures refs are resolved in right order
          // (see https://github.com/facebook/react/pull/7101 for explanation).
          var nextChildMountImage = ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
          mountImages.push(nextChildMountImage);
        }
      }
      // Unmount children that are no longer present.
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          prevChild = prevChildren[name];
          removedNodes[name] = ReactReconciler.getHostNode(prevChild);
          ReactReconciler.unmountComponent(prevChild, false);
        }
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @param {?object} renderedChildren Previously initialized set of children.
     * @internal
     */
    unmountChildren: function unmountChildren(renderedChildren, safely) {
      for (var name in renderedChildren) {
        if (renderedChildren.hasOwnProperty(name)) {
          var renderedChild = renderedChildren[name];
          ReactReconciler.unmountComponent(renderedChild, safely);
        }
      }
    }

  };

  module.exports = ReactChildReconciler;
});

var ReactChildReconciler$1 = interopDefault(ReactChildReconciler);

var require$$3$9 = Object.freeze({
  default: ReactChildReconciler$1
});

var flattenChildren = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule flattenChildren
   * 
   */

  'use strict';

  var KeyEscapeUtils = interopDefault(require$$3$2);
  var traverseAllChildren = interopDefault(require$$2$1);
  var warning = interopDefault(require$$0$1);

  var ReactComponentTreeHook;

  if (typeof process !== 'undefined' && process.env && "production" === 'test') {
    // Temporary hack.
    // Inline requires don't work well with Jest:
    // https://github.com/facebook/react/issues/7240
    // Remove the inline requires when we don't need them anymore:
    // https://github.com/facebook/react/pull/7178
    ReactComponentTreeHook = interopDefault(require$$1$2);
  }

  /**
   * @param {function} traverseContext Context passed through traversal.
   * @param {?ReactComponent} child React child component.
   * @param {!string} name String name of key path to child.
   * @param {number=} selfDebugID Optional debugID of the current internal instance.
   */
  function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
    // We found a component instance.
    if (traverseContext && (typeof traverseContext === 'undefined' ? 'undefined' : _typeof(traverseContext)) === 'object') {
      var result = traverseContext;
      var keyUnique = result[name] === undefined;
      if ("production" !== 'production') {}
      if (keyUnique && child != null) {
        result[name] = child;
      }
    }
  }

  /**
   * Flattens children that are typically specified as `props.children`. Any null
   * children will not be included in the resulting object.
   * @return {!object} flattened children keyed by name.
   */
  function flattenChildren(children, selfDebugID) {
    if (children == null) {
      return children;
    }
    var result = {};

    if ("production" !== 'production') {} else {
      traverseAllChildren(children, flattenSingleChildIntoContext, result);
    }
    return result;
  }

  module.exports = flattenChildren;
});

var flattenChildren$1 = interopDefault(flattenChildren);



var require$$1$18 = Object.freeze({
  default: flattenChildren$1
});

var ReactMultiChild = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactMultiChild
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactComponentEnvironment = interopDefault(require$$5$9);
  var ReactInstanceMap = interopDefault(require$$3$8);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactMultiChildUpdateTypes = interopDefault(require$$6$7);

  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactReconciler = interopDefault(require$$8$2);
  var ReactChildReconciler = interopDefault(require$$3$9);

  var emptyFunction = interopDefault(require$$3$1);
  var flattenChildren = interopDefault(require$$1$18);
  var invariant = interopDefault(require$$1);

  /**
   * Make an update for markup to be rendered and inserted at a supplied index.
   *
   * @param {string} markup Markup that renders into an element.
   * @param {number} toIndex Destination index.
   * @private
   */
  function makeInsertMarkup(markup, afterNode, toIndex) {
    // NOTE: Null values reduce hidden classes.
    return {
      type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
      content: markup,
      fromIndex: null,
      fromNode: null,
      toIndex: toIndex,
      afterNode: afterNode
    };
  }

  /**
   * Make an update for moving an existing element to another index.
   *
   * @param {number} fromIndex Source index of the existing element.
   * @param {number} toIndex Destination index of the element.
   * @private
   */
  function makeMove(child, afterNode, toIndex) {
    // NOTE: Null values reduce hidden classes.
    return {
      type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
      content: null,
      fromIndex: child._mountIndex,
      fromNode: ReactReconciler.getHostNode(child),
      toIndex: toIndex,
      afterNode: afterNode
    };
  }

  /**
   * Make an update for removing an element at an index.
   *
   * @param {number} fromIndex Index of the element to remove.
   * @private
   */
  function makeRemove(child, node) {
    // NOTE: Null values reduce hidden classes.
    return {
      type: ReactMultiChildUpdateTypes.REMOVE_NODE,
      content: null,
      fromIndex: child._mountIndex,
      fromNode: node,
      toIndex: null,
      afterNode: null
    };
  }

  /**
   * Make an update for setting the markup of a node.
   *
   * @param {string} markup Markup that renders into an element.
   * @private
   */
  function makeSetMarkup(markup) {
    // NOTE: Null values reduce hidden classes.
    return {
      type: ReactMultiChildUpdateTypes.SET_MARKUP,
      content: markup,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }

  /**
   * Make an update for setting the text content.
   *
   * @param {string} textContent Text content to set.
   * @private
   */
  function makeTextContent(textContent) {
    // NOTE: Null values reduce hidden classes.
    return {
      type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
      content: textContent,
      fromIndex: null,
      fromNode: null,
      toIndex: null,
      afterNode: null
    };
  }

  /**
   * Push an update, if any, onto the queue. Creates a new queue if none is
   * passed and always returns the queue. Mutative.
   */
  function enqueue(queue, update) {
    if (update) {
      queue = queue || [];
      queue.push(update);
    }
    return queue;
  }

  /**
   * Processes any enqueued updates.
   *
   * @private
   */
  function processQueue(inst, updateQueue) {
    ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
  }

  var setChildrenForInstrumentation = emptyFunction;
  if ("production" !== 'production') {}

  /**
   * ReactMultiChild are capable of reconciling multiple children.
   *
   * @class ReactMultiChild
   * @internal
   */
  var ReactMultiChild = {

    /**
     * Provides common functionality for components that must reconcile multiple
     * children. This is used by `ReactDOMComponent` to mount, update, and
     * unmount child components.
     *
     * @lends {ReactMultiChild.prototype}
     */
    Mixin: {

      _reconcilerInstantiateChildren: function _reconcilerInstantiateChildren(nestedChildren, transaction, context) {
        if ("production" !== 'production') {}
        return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
      },

      _reconcilerUpdateChildren: function _reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
        var nextChildren;
        var selfDebugID = 0;
        if ("production" !== 'production') {}
        nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
        ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
        return nextChildren;
      },

      /**
       * Generates a "mount image" for each of the supplied children. In the case
       * of `ReactDOMComponent`, a mount image is a string of markup.
       *
       * @param {?object} nestedChildren Nested child maps.
       * @return {array} An array of mounted representations.
       * @internal
       */
      mountChildren: function mountChildren(nestedChildren, transaction, context) {
        var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
        this._renderedChildren = children;

        var mountImages = [];
        var index = 0;
        for (var name in children) {
          if (children.hasOwnProperty(name)) {
            var child = children[name];
            var selfDebugID = 0;
            if ("production" !== 'production') {}
            var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
            child._mountIndex = index++;
            mountImages.push(mountImage);
          }
        }

        if ("production" !== 'production') {}

        return mountImages;
      },

      /**
       * Replaces any rendered children with a text content string.
       *
       * @param {string} nextContent String of content.
       * @internal
       */
      updateTextContent: function updateTextContent(nextContent) {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        ReactChildReconciler.unmountChildren(prevChildren, false);
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            _prodInvariant('118');
          }
        }
        // Set new text content.
        var updates = [makeTextContent(nextContent)];
        processQueue(this, updates);
      },

      /**
       * Replaces any rendered children with a markup string.
       *
       * @param {string} nextMarkup String of markup.
       * @internal
       */
      updateMarkup: function updateMarkup(nextMarkup) {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        ReactChildReconciler.unmountChildren(prevChildren, false);
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            _prodInvariant('118');
          }
        }
        var updates = [makeSetMarkup(nextMarkup)];
        processQueue(this, updates);
      },

      /**
       * Updates the rendered children with new children.
       *
       * @param {?object} nextNestedChildrenElements Nested child element maps.
       * @param {ReactReconcileTransaction} transaction
       * @internal
       */
      updateChildren: function updateChildren(nextNestedChildrenElements, transaction, context) {
        // Hook used by React ART
        this._updateChildren(nextNestedChildrenElements, transaction, context);
      },

      /**
       * @param {?object} nextNestedChildrenElements Nested child element maps.
       * @param {ReactReconcileTransaction} transaction
       * @final
       * @protected
       */
      _updateChildren: function _updateChildren(nextNestedChildrenElements, transaction, context) {
        var prevChildren = this._renderedChildren;
        var removedNodes = {};
        var mountImages = [];
        var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
        if (!nextChildren && !prevChildren) {
          return;
        }
        var updates = null;
        var name;
        // `nextIndex` will increment for each child in `nextChildren`, but
        // `lastIndex` will be the last index visited in `prevChildren`.
        var nextIndex = 0;
        var lastIndex = 0;
        // `nextMountIndex` will increment for each newly mounted child.
        var nextMountIndex = 0;
        var lastPlacedNode = null;
        for (name in nextChildren) {
          if (!nextChildren.hasOwnProperty(name)) {
            continue;
          }
          var prevChild = prevChildren && prevChildren[name];
          var nextChild = nextChildren[name];
          if (prevChild === nextChild) {
            updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            prevChild._mountIndex = nextIndex;
          } else {
            if (prevChild) {
              // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              // The `removedNodes` loop below will actually remove the child.
            }
            // The child must be instantiated before it's mounted.
            updates = enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
            nextMountIndex++;
          }
          nextIndex++;
          lastPlacedNode = ReactReconciler.getHostNode(nextChild);
        }
        // Remove children that are no longer present.
        for (name in removedNodes) {
          if (removedNodes.hasOwnProperty(name)) {
            updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
          }
        }
        if (updates) {
          processQueue(this, updates);
        }
        this._renderedChildren = nextChildren;

        if ("production" !== 'production') {}
      },

      /**
       * Unmounts all rendered children. This should be used to clean up children
       * when this component is unmounted. It does not actually perform any
       * backend operations.
       *
       * @internal
       */
      unmountChildren: function unmountChildren(safely) {
        var renderedChildren = this._renderedChildren;
        ReactChildReconciler.unmountChildren(renderedChildren, safely);
        this._renderedChildren = null;
      },

      /**
       * Moves a child component to the supplied index.
       *
       * @param {ReactComponent} child Component to move.
       * @param {number} toIndex Destination index of the element.
       * @param {number} lastIndex Last index visited of the siblings of `child`.
       * @protected
       */
      moveChild: function moveChild(child, afterNode, toIndex, lastIndex) {
        // If the index of `child` is less than `lastIndex`, then it needs to
        // be moved. Otherwise, we do not need to move it because a child will be
        // inserted or moved before `child`.
        if (child._mountIndex < lastIndex) {
          return makeMove(child, afterNode, toIndex);
        }
      },

      /**
       * Creates a child component.
       *
       * @param {ReactComponent} child Component to create.
       * @param {string} mountImage Markup to insert.
       * @protected
       */
      createChild: function createChild(child, afterNode, mountImage) {
        return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
      },

      /**
       * Removes a child component.
       *
       * @param {ReactComponent} child Child to remove.
       * @protected
       */
      removeChild: function removeChild(child, node) {
        return makeRemove(child, node);
      },

      /**
       * Mounts a child with the supplied name.
       *
       * NOTE: This is part of `updateChildren` and is here for readability.
       *
       * @param {ReactComponent} child Component to mount.
       * @param {string} name Name of the child.
       * @param {number} index Index at which to insert the child.
       * @param {ReactReconcileTransaction} transaction
       * @private
       */
      _mountChildAtIndex: function _mountChildAtIndex(child, mountImage, afterNode, index, transaction, context) {
        child._mountIndex = index;
        return this.createChild(child, afterNode, mountImage);
      },

      /**
       * Unmounts a rendered child.
       *
       * NOTE: This is part of `updateChildren` and is here for readability.
       *
       * @param {ReactComponent} child Component to unmount.
       * @private
       */
      _unmountChild: function _unmountChild(child, node) {
        var update = this.removeChild(child, node);
        child._mountIndex = null;
        return update;
      }

    }

  };

  module.exports = ReactMultiChild;
});

var ReactMultiChild$1 = interopDefault(ReactMultiChild);

var require$$9$1 = Object.freeze({
  default: ReactMultiChild$1
});

var ReactUpdateQueue = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactUpdateQueue
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactInstanceMap = interopDefault(require$$3$8);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactUpdates = interopDefault(require$$6$3);

  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  function enqueueUpdate(internalInstance) {
    ReactUpdates.enqueueUpdate(internalInstance);
  }

  function formatUnexpectedArgument(arg) {
    var type = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
    if (type !== 'object') {
      return type;
    }
    var displayName = arg.constructor && arg.constructor.name || type;
    var keys = Object.keys(arg);
    if (keys.length > 0 && keys.length < 20) {
      return displayName + ' (keys: ' + keys.join(', ') + ')';
    }
    return displayName;
  }

  function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (!internalInstance) {
      if ("production" !== 'production') {}
      return null;
    }

    if ("production" !== 'production') {}

    return internalInstance;
  }

  /**
   * ReactUpdateQueue allows for state updates to be scheduled into a later
   * reconciliation step.
   */
  var ReactUpdateQueue = {

    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted(publicInstance) {
      if ("production" !== 'production') {}
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (internalInstance) {
        // During componentWillMount and render this will still be null but after
        // that will always render to something. At least for now. So we can use
        // this hack.
        return !!internalInstance._renderedComponent;
      } else {
        return false;
      }
    },

    /**
     * Enqueue a callback that will be executed after all the pending updates
     * have processed.
     *
     * @param {ReactClass} publicInstance The instance to use as `this` context.
     * @param {?function} callback Called after state is updated.
     * @param {string} callerName Name of the calling function in the public API.
     * @internal
     */
    enqueueCallback: function enqueueCallback(publicInstance, callback, callerName) {
      ReactUpdateQueue.validateCallback(callback, callerName);
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

      // Previously we would throw an error if we didn't have an internal
      // instance. Since we want to make it a no-op instead, we mirror the same
      // behavior we have in other enqueue* methods.
      // We also need to ignore callbacks in componentWillMount. See
      // enqueueUpdates.
      if (!internalInstance) {
        return null;
      }

      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      // TODO: The callback here is ignored when setState is called from
      // componentWillMount. Either fix it or disallow doing so completely in
      // favor of getInitialState. Alternatively, we can disallow
      // componentWillMount during server-side rendering.
      enqueueUpdate(internalInstance);
    },

    enqueueCallbackInternal: function enqueueCallbackInternal(internalInstance, callback) {
      if (internalInstance._pendingCallbacks) {
        internalInstance._pendingCallbacks.push(callback);
      } else {
        internalInstance._pendingCallbacks = [callback];
      }
      enqueueUpdate(internalInstance);
    },

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @internal
     */
    enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');

      if (!internalInstance) {
        return;
      }

      internalInstance._pendingForceUpdate = true;

      enqueueUpdate(internalInstance);
    },

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @internal
     */
    enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');

      if (!internalInstance) {
        return;
      }

      internalInstance._pendingStateQueue = [completeState];
      internalInstance._pendingReplaceState = true;

      enqueueUpdate(internalInstance);
    },

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @internal
     */
    enqueueSetState: function enqueueSetState(publicInstance, partialState) {
      if ("production" !== 'production') {}

      var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');

      if (!internalInstance) {
        return;
      }

      var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
      queue.push(partialState);

      enqueueUpdate(internalInstance);
    },

    enqueueElementInternal: function enqueueElementInternal(internalInstance, nextElement, nextContext) {
      internalInstance._pendingElement = nextElement;
      // TODO: introduce _pendingContext instead of setting it directly.
      internalInstance._context = nextContext;
      enqueueUpdate(internalInstance);
    },

    validateCallback: function validateCallback(callback, callerName) {
      !(!callback || typeof callback === 'function') ? _prodInvariant('122', callerName, formatUnexpectedArgument(callback)) : void 0;
    }

  };

  module.exports = ReactUpdateQueue;
});

var ReactUpdateQueue$1 = interopDefault(ReactUpdateQueue);



var require$$7$4 = Object.freeze({
  default: ReactUpdateQueue$1
});

var ReactServerUpdateQueue = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactServerUpdateQueue
   * 
   */

  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ReactUpdateQueue = interopDefault(require$$7$4);
  var Transaction = interopDefault(require$$1$6);
  var warning = interopDefault(require$$0$1);

  function warnNoop(publicInstance, callerName) {
    if ("production" !== 'production') {}
  }

  /**
   * This is the update queue used for server rendering.
   * It delegates to ReactUpdateQueue while server rendering is in progress and
   * switches to ReactNoopUpdateQueue after the transaction has completed.
   * @class ReactServerUpdateQueue
   * @param {Transaction} transaction
   */

  var ReactServerUpdateQueue = function () {
    /* :: transaction: Transaction; */

    function ReactServerUpdateQueue(transaction) {
      _classCallCheck(this, ReactServerUpdateQueue);

      this.transaction = transaction;
    }

    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */

    ReactServerUpdateQueue.prototype.isMounted = function isMounted(publicInstance) {
      return false;
    };

    /**
     * Enqueue a callback that will be executed after all the pending updates
     * have processed.
     *
     * @param {ReactClass} publicInstance The instance to use as `this` context.
     * @param {?function} callback Called after state is updated.
     * @internal
     */

    ReactServerUpdateQueue.prototype.enqueueCallback = function enqueueCallback(publicInstance, callback, callerName) {
      if (this.transaction.isInTransaction()) {
        ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
      }
    };

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @internal
     */

    ReactServerUpdateQueue.prototype.enqueueForceUpdate = function enqueueForceUpdate(publicInstance) {
      if (this.transaction.isInTransaction()) {
        ReactUpdateQueue.enqueueForceUpdate(publicInstance);
      } else {
        warnNoop(publicInstance, 'forceUpdate');
      }
    };

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object|function} completeState Next state.
     * @internal
     */

    ReactServerUpdateQueue.prototype.enqueueReplaceState = function enqueueReplaceState(publicInstance, completeState) {
      if (this.transaction.isInTransaction()) {
        ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
      } else {
        warnNoop(publicInstance, 'replaceState');
      }
    };

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object|function} partialState Next partial state to be merged with state.
     * @internal
     */

    ReactServerUpdateQueue.prototype.enqueueSetState = function enqueueSetState(publicInstance, partialState) {
      if (this.transaction.isInTransaction()) {
        ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
      } else {
        warnNoop(publicInstance, 'setState');
      }
    };

    return ReactServerUpdateQueue;
  }();

  module.exports = ReactServerUpdateQueue;
});

var ReactServerUpdateQueue$1 = interopDefault(ReactServerUpdateQueue);

var require$$0$19 = Object.freeze({
  default: ReactServerUpdateQueue$1
});

var ReactServerRenderingTransaction = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactServerRenderingTransaction
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var PooledClass = interopDefault(require$$5);
  var Transaction = interopDefault(require$$1$6);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactServerUpdateQueue = interopDefault(require$$0$19);

  /**
   * Executed within the scope of the `Transaction` instance. Consider these as
   * being member methods, but with an implied ordering while being isolated from
   * each other.
   */
  var TRANSACTION_WRAPPERS = [];

  if ("production" !== 'production') {}

  var noopCallbackQueue = {
    enqueue: function enqueue() {}
  };

  /**
   * @class ReactServerRenderingTransaction
   * @param {boolean} renderToStaticMarkup
   */
  function ReactServerRenderingTransaction(renderToStaticMarkup) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = renderToStaticMarkup;
    this.useCreateElement = false;
    this.updateQueue = new ReactServerUpdateQueue(this);
  }

  var Mixin = {
    /**
     * @see Transaction
     * @abstract
     * @final
     * @return {array} Empty list of operation wrap procedures.
     */
    getTransactionWrappers: function getTransactionWrappers() {
      return TRANSACTION_WRAPPERS;
    },

    /**
     * @return {object} The queue to collect `onDOMReady` callbacks with.
     */
    getReactMountReady: function getReactMountReady() {
      return noopCallbackQueue;
    },

    /**
     * @return {object} The queue to collect React async events.
     */
    getUpdateQueue: function getUpdateQueue() {
      return this.updateQueue;
    },

    /**
     * `PooledClass` looks for this, and will invoke this before allowing this
     * instance to be reused.
     */
    destructor: function destructor() {},

    checkpoint: function checkpoint() {},

    rollback: function rollback() {}
  };

  _assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);

  PooledClass.addPoolingTo(ReactServerRenderingTransaction);

  module.exports = ReactServerRenderingTransaction;
});

var ReactServerRenderingTransaction$1 = interopDefault(ReactServerRenderingTransaction);

var require$$8$3 = Object.freeze({
  default: ReactServerRenderingTransaction$1
});

var validateDOMNesting = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule validateDOMNesting
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var emptyFunction = interopDefault(require$$3$1);
  var warning = interopDefault(require$$0$1);

  var validateDOMNesting = emptyFunction;

  if ("production" !== 'production') {}

  module.exports = validateDOMNesting;
});

var validateDOMNesting$1 = interopDefault(validateDOMNesting);

var require$$0$20 = Object.freeze({
  default: validateDOMNesting$1
});

var ReactDOMComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMComponent
   */

  /* global hasOwnProperty:true */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var AutoFocusUtils = interopDefault(require$$27);
  var CSSPropertyOperations = interopDefault(require$$26);
  var DOMLazyTree = interopDefault(require$$20);
  var DOMNamespaces = interopDefault(require$$24);
  var DOMProperty = interopDefault(require$$3$3);
  var DOMPropertyOperations = interopDefault(require$$5$7);
  var EventConstants = interopDefault(require$$18);
  var EventPluginHub = interopDefault(require$$7$2);
  var EventPluginRegistry = interopDefault(require$$2$4);
  var ReactBrowserEventEmitter = interopDefault(require$$18$1);
  var ReactDOMButton = interopDefault(require$$17$1);
  var ReactDOMComponentFlags = interopDefault(require$$16);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactDOMInput = interopDefault(require$$14$1);
  var ReactDOMOption = interopDefault(require$$13$2);
  var ReactDOMSelect = interopDefault(require$$1$15);
  var ReactDOMTextarea = interopDefault(require$$11$2);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactMultiChild = interopDefault(require$$9$1);
  var ReactServerRenderingTransaction = interopDefault(require$$8$3);

  var emptyFunction = interopDefault(require$$3$1);
  var escapeTextContentForBrowser = interopDefault(require$$2$11);
  var invariant = interopDefault(require$$1);
  var isEventSupported = interopDefault(require$$0$9);
  var keyOf = interopDefault(require$$0$3);
  var shallowEqual = interopDefault(require$$0$18);
  var validateDOMNesting = interopDefault(require$$0$20);
  var warning = interopDefault(require$$0$1);

  var Flags = ReactDOMComponentFlags;
  var deleteListener = EventPluginHub.deleteListener;
  var getNode = ReactDOMComponentTree.getNodeFromInstance;
  var listenTo = ReactBrowserEventEmitter.listenTo;
  var registrationNameModules = EventPluginRegistry.registrationNameModules;

  // For quickly matching children type, to test if can be treated as content.
  var CONTENT_TYPES = { 'string': true, 'number': true };

  var STYLE = keyOf({ style: null });
  var HTML = keyOf({ __html: null });
  var RESERVED_PROPS = {
    children: null,
    dangerouslySetInnerHTML: null,
    suppressContentEditableWarning: null
  };

  // Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
  var DOC_FRAGMENT_TYPE = 11;

  function getDeclarationErrorAddendum(internalInstance) {
    if (internalInstance) {
      var owner = internalInstance._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' This DOM node was rendered by `' + name + '`.';
        }
      }
    }
    return '';
  }

  function friendlyStringify(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
      if (Array.isArray(obj)) {
        return '[' + obj.map(friendlyStringify).join(', ') + ']';
      } else {
        var pairs = [];
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
            pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
          }
        }
        return '{' + pairs.join(', ') + '}';
      }
    } else if (typeof obj === 'string') {
      return JSON.stringify(obj);
    } else if (typeof obj === 'function') {
      return '[function object]';
    }
    // Differs from JSON.stringify in that undefined because undefined and that
    // inf and nan don't become null
    return String(obj);
  }

  var styleMutationWarning = {};

  function checkAndWarnForMutatedStyle(style1, style2, component) {
    if (style1 == null || style2 == null) {
      return;
    }
    if (shallowEqual(style1, style2)) {
      return;
    }

    var componentName = component._tag;
    var owner = component._currentElement._owner;
    var ownerName;
    if (owner) {
      ownerName = owner.getName();
    }

    var hash = ownerName + '|' + componentName;

    if (styleMutationWarning.hasOwnProperty(hash)) {
      return;
    }

    styleMutationWarning[hash] = true;

    void 0;
  }

  /**
   * @param {object} component
   * @param {?object} props
   */
  function assertValidProps(component, props) {
    if (!props) {
      return;
    }
    // Note the use of `==` which checks for null or undefined.
    if (voidElementTags[component._tag]) {
      !(props.children == null && props.dangerouslySetInnerHTML == null) ? _prodInvariant('137', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : void 0;
    }
    if (props.dangerouslySetInnerHTML != null) {
      !(props.children == null) ? _prodInvariant('60') : void 0;
      !(_typeof(props.dangerouslySetInnerHTML) === 'object' && HTML in props.dangerouslySetInnerHTML) ? _prodInvariant('61') : void 0;
    }
    if ("production" !== 'production') {}
    !(props.style == null || _typeof(props.style) === 'object') ? _prodInvariant('62', getDeclarationErrorAddendum(component)) : void 0;
  }

  function enqueuePutListener(inst, registrationName, listener, transaction) {
    if (transaction instanceof ReactServerRenderingTransaction) {
      return;
    }
    if ("production" !== 'production') {}
    var containerInfo = inst._hostContainerInfo;
    var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
    var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
    listenTo(registrationName, doc);
    transaction.getReactMountReady().enqueue(putListener, {
      inst: inst,
      registrationName: registrationName,
      listener: listener
    });
  }

  function putListener() {
    var listenerToPut = this;
    EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
  }

  function inputPostMount() {
    var inst = this;
    ReactDOMInput.postMountWrapper(inst);
  }

  function textareaPostMount() {
    var inst = this;
    ReactDOMTextarea.postMountWrapper(inst);
  }

  function optionPostMount() {
    var inst = this;
    ReactDOMOption.postMountWrapper(inst);
  }

  var setAndValidateContentChildDev = emptyFunction;
  if ("production" !== 'production') {}

  // There are so many media events, it makes sense to just
  // maintain a list rather than create a `trapBubbledEvent` for each
  var mediaEvents = {
    topAbort: 'abort',
    topCanPlay: 'canplay',
    topCanPlayThrough: 'canplaythrough',
    topDurationChange: 'durationchange',
    topEmptied: 'emptied',
    topEncrypted: 'encrypted',
    topEnded: 'ended',
    topError: 'error',
    topLoadedData: 'loadeddata',
    topLoadedMetadata: 'loadedmetadata',
    topLoadStart: 'loadstart',
    topPause: 'pause',
    topPlay: 'play',
    topPlaying: 'playing',
    topProgress: 'progress',
    topRateChange: 'ratechange',
    topSeeked: 'seeked',
    topSeeking: 'seeking',
    topStalled: 'stalled',
    topSuspend: 'suspend',
    topTimeUpdate: 'timeupdate',
    topVolumeChange: 'volumechange',
    topWaiting: 'waiting'
  };

  function trapBubbledEventsLocal() {
    var inst = this;
    // If a component renders to null or if another component fatals and causes
    // the state of the tree to be corrupted, `node` here can be null.
    !inst._rootNodeID ? _prodInvariant('63') : void 0;
    var node = getNode(inst);
    !node ? _prodInvariant('64') : void 0;

    switch (inst._tag) {
      case 'iframe':
      case 'object':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'video':
      case 'audio':

        inst._wrapperState.listeners = [];
        // Create listener for each media event
        for (var event in mediaEvents) {
          if (mediaEvents.hasOwnProperty(event)) {
            inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
          }
        }
        break;
      case 'source':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node)];
        break;
      case 'img':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
        break;
      case 'form':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
        break;
      case 'input':
      case 'select':
      case 'textarea':
        inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid, 'invalid', node)];
        break;
    }
  }

  function postUpdateSelectWrapper() {
    ReactDOMSelect.postUpdateWrapper(this);
  }

  // For HTML, certain tags should omit their close tag. We keep a whitelist for
  // those special-case tags.

  var omittedCloseTags = {
    'area': true,
    'base': true,
    'br': true,
    'col': true,
    'embed': true,
    'hr': true,
    'img': true,
    'input': true,
    'keygen': true,
    'link': true,
    'meta': true,
    'param': true,
    'source': true,
    'track': true,
    'wbr': true
  };

  // NOTE: menuitem's close tag should be omitted, but that causes problems.
  var newlineEatingTags = {
    'listing': true,
    'pre': true,
    'textarea': true
  };

  // For HTML, certain tags cannot have children. This has the same purpose as
  // `omittedCloseTags` except that `menuitem` should still have its closing tag.

  var voidElementTags = _assign({
    'menuitem': true
  }, omittedCloseTags);

  // We accept any tag to be rendered but since this gets injected into arbitrary
  // HTML, we want to make sure that it's a safe tag.
  // http://www.w3.org/TR/REC-xml/#NT-Name

  var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
  var validatedTagCache = {};
  var hasOwnProperty = {}.hasOwnProperty;

  function validateDangerousTag(tag) {
    if (!hasOwnProperty.call(validatedTagCache, tag)) {
      !VALID_TAG_REGEX.test(tag) ? _prodInvariant('65', tag) : void 0;
      validatedTagCache[tag] = true;
    }
  }

  function isCustomComponent(tagName, props) {
    return tagName.indexOf('-') >= 0 || props.is != null;
  }

  var globalIdCounter = 1;

  /**
   * Creates a new React class that is idempotent and capable of containing other
   * React components. It accepts event listeners and DOM properties that are
   * valid according to `DOMProperty`.
   *
   *  - Event listeners: `onClick`, `onMouseDown`, etc.
   *  - DOM properties: `className`, `name`, `title`, etc.
   *
   * The `style` property functions differently from the DOM API. It accepts an
   * object mapping of style properties to values.
   *
   * @constructor ReactDOMComponent
   * @extends ReactMultiChild
   */
  function ReactDOMComponent(element) {
    var tag = element.type;
    validateDangerousTag(tag);
    this._currentElement = element;
    this._tag = tag.toLowerCase();
    this._namespaceURI = null;
    this._renderedChildren = null;
    this._previousStyle = null;
    this._previousStyleCopy = null;
    this._hostNode = null;
    this._hostParent = null;
    this._rootNodeID = 0;
    this._domID = 0;
    this._hostContainerInfo = null;
    this._wrapperState = null;
    this._topLevelWrapper = null;
    this._flags = 0;
    if ("production" !== 'production') {}
  }

  ReactDOMComponent.displayName = 'ReactDOMComponent';

  ReactDOMComponent.Mixin = {

    /**
     * Generates root tag markup then recurses. This method has side effects and
     * is not idempotent.
     *
     * @internal
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {?ReactDOMComponent} the parent component instance
     * @param {?object} info about the host container
     * @param {object} context
     * @return {string} The computed markup.
     */
    mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
      this._rootNodeID = globalIdCounter++;
      this._domID = hostContainerInfo._idCounter++;
      this._hostParent = hostParent;
      this._hostContainerInfo = hostContainerInfo;

      var props = this._currentElement.props;

      switch (this._tag) {
        case 'audio':
        case 'form':
        case 'iframe':
        case 'img':
        case 'link':
        case 'object':
        case 'source':
        case 'video':
          this._wrapperState = {
            listeners: null
          };
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'button':
          props = ReactDOMButton.getHostProps(this, props, hostParent);
          break;
        case 'input':
          ReactDOMInput.mountWrapper(this, props, hostParent);
          props = ReactDOMInput.getHostProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'option':
          ReactDOMOption.mountWrapper(this, props, hostParent);
          props = ReactDOMOption.getHostProps(this, props);
          break;
        case 'select':
          ReactDOMSelect.mountWrapper(this, props, hostParent);
          props = ReactDOMSelect.getHostProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
        case 'textarea':
          ReactDOMTextarea.mountWrapper(this, props, hostParent);
          props = ReactDOMTextarea.getHostProps(this, props);
          transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
          break;
      }

      assertValidProps(this, props);

      // We create tags in the namespace of their parent container, except HTML
      // tags get no namespace.
      var namespaceURI;
      var parentTag;
      if (hostParent != null) {
        namespaceURI = hostParent._namespaceURI;
        parentTag = hostParent._tag;
      } else if (hostContainerInfo._tag) {
        namespaceURI = hostContainerInfo._namespaceURI;
        parentTag = hostContainerInfo._tag;
      }
      if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
        namespaceURI = DOMNamespaces.html;
      }
      if (namespaceURI === DOMNamespaces.html) {
        if (this._tag === 'svg') {
          namespaceURI = DOMNamespaces.svg;
        } else if (this._tag === 'math') {
          namespaceURI = DOMNamespaces.mathml;
        }
      }
      this._namespaceURI = namespaceURI;

      if ("production" !== 'production') {}

      var mountImage;
      if (transaction.useCreateElement) {
        var ownerDocument = hostContainerInfo._ownerDocument;
        var el;
        if (namespaceURI === DOMNamespaces.html) {
          if (this._tag === 'script') {
            // Create the script via .innerHTML so its "parser-inserted" flag is
            // set to true and it does not execute
            var div = ownerDocument.createElement('div');
            var type = this._currentElement.type;
            div.innerHTML = '<' + type + '></' + type + '>';
            el = div.removeChild(div.firstChild);
          } else if (props.is) {
            el = ownerDocument.createElement(this._currentElement.type, props.is);
          } else {
            // Separate else branch instead of using `props.is || undefined` above becuase of a Firefox bug.
            // See discussion in https://github.com/facebook/react/pull/6896
            // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
            el = ownerDocument.createElement(this._currentElement.type);
          }
        } else {
          el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
        }
        ReactDOMComponentTree.precacheNode(this, el);
        this._flags |= Flags.hasCachedChildNodes;
        if (!this._hostParent) {
          DOMPropertyOperations.setAttributeForRoot(el);
        }
        this._updateDOMProperties(null, props, transaction);
        var lazyTree = DOMLazyTree(el);
        this._createInitialChildren(transaction, props, context, lazyTree);
        mountImage = lazyTree;
      } else {
        var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
        var tagContent = this._createContentMarkup(transaction, props, context);
        if (!tagContent && omittedCloseTags[this._tag]) {
          mountImage = tagOpen + '/>';
        } else {
          mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
        }
      }

      switch (this._tag) {
        case 'input':
          transaction.getReactMountReady().enqueue(inputPostMount, this);
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
        case 'textarea':
          transaction.getReactMountReady().enqueue(textareaPostMount, this);
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
        case 'select':
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
        case 'button':
          if (props.autoFocus) {
            transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
          }
          break;
        case 'option':
          transaction.getReactMountReady().enqueue(optionPostMount, this);
          break;
      }

      return mountImage;
    },

    /**
     * Creates markup for the open tag and all attributes.
     *
     * This method has side effects because events get registered.
     *
     * Iterating over object properties is faster than iterating over arrays.
     * @see http://jsperf.com/obj-vs-arr-iteration
     *
     * @private
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {object} props
     * @return {string} Markup of opening tag.
     */
    _createOpenTagMarkupAndPutListeners: function _createOpenTagMarkupAndPutListeners(transaction, props) {
      var ret = '<' + this._currentElement.type;

      for (var propKey in props) {
        if (!props.hasOwnProperty(propKey)) {
          continue;
        }
        var propValue = props[propKey];
        if (propValue == null) {
          continue;
        }
        if (registrationNameModules.hasOwnProperty(propKey)) {
          if (propValue) {
            enqueuePutListener(this, propKey, propValue, transaction);
          }
        } else {
          if (propKey === STYLE) {
            if (propValue) {
              if ("production" !== 'production') {}
              propValue = this._previousStyleCopy = _assign({}, props.style);
            }
            propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
          }
          var markup = null;
          if (this._tag != null && isCustomComponent(this._tag, props)) {
            if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
              markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
            }
          } else {
            markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
          }
          if (markup) {
            ret += ' ' + markup;
          }
        }
      }

      // For static pages, no need to put React ID and checksum. Saves lots of
      // bytes.
      if (transaction.renderToStaticMarkup) {
        return ret;
      }

      if (!this._hostParent) {
        ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
      }
      ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
      return ret;
    },

    /**
     * Creates markup for the content between the tags.
     *
     * @private
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {object} props
     * @param {object} context
     * @return {string} Content markup.
     */
    _createContentMarkup: function _createContentMarkup(transaction, props, context) {
      var ret = '';

      // Intentional use of != to avoid catching zero/false.
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          ret = innerHTML.__html;
        }
      } else {
        var contentToUse = CONTENT_TYPES[_typeof(props.children)] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          // TODO: Validate that text is allowed as a child of this node
          ret = escapeTextContentForBrowser(contentToUse);
          if ("production" !== 'production') {}
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          ret = mountImages.join('');
        }
      }
      if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        return '\n' + ret;
      } else {
        return ret;
      }
    },

    _createInitialChildren: function _createInitialChildren(transaction, props, context, lazyTree) {
      // Intentional use of != to avoid catching zero/false.
      var innerHTML = props.dangerouslySetInnerHTML;
      if (innerHTML != null) {
        if (innerHTML.__html != null) {
          DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
        }
      } else {
        var contentToUse = CONTENT_TYPES[_typeof(props.children)] ? props.children : null;
        var childrenToUse = contentToUse != null ? null : props.children;
        if (contentToUse != null) {
          // TODO: Validate that text is allowed as a child of this node
          if ("production" !== 'production') {}
          DOMLazyTree.queueText(lazyTree, contentToUse);
        } else if (childrenToUse != null) {
          var mountImages = this.mountChildren(childrenToUse, transaction, context);
          for (var i = 0; i < mountImages.length; i++) {
            DOMLazyTree.queueChild(lazyTree, mountImages[i]);
          }
        }
      }
    },

    /**
     * Receives a next element and updates the component.
     *
     * @internal
     * @param {ReactElement} nextElement
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {object} context
     */
    receiveComponent: function receiveComponent(nextElement, transaction, context) {
      var prevElement = this._currentElement;
      this._currentElement = nextElement;
      this.updateComponent(transaction, prevElement, nextElement, context);
    },

    /**
     * Updates a DOM component after it has already been allocated and
     * attached to the DOM. Reconciles the root DOM node, then recurses.
     *
     * @param {ReactReconcileTransaction} transaction
     * @param {ReactElement} prevElement
     * @param {ReactElement} nextElement
     * @internal
     * @overridable
     */
    updateComponent: function updateComponent(transaction, prevElement, nextElement, context) {
      var lastProps = prevElement.props;
      var nextProps = this._currentElement.props;

      switch (this._tag) {
        case 'button':
          lastProps = ReactDOMButton.getHostProps(this, lastProps);
          nextProps = ReactDOMButton.getHostProps(this, nextProps);
          break;
        case 'input':
          lastProps = ReactDOMInput.getHostProps(this, lastProps);
          nextProps = ReactDOMInput.getHostProps(this, nextProps);
          break;
        case 'option':
          lastProps = ReactDOMOption.getHostProps(this, lastProps);
          nextProps = ReactDOMOption.getHostProps(this, nextProps);
          break;
        case 'select':
          lastProps = ReactDOMSelect.getHostProps(this, lastProps);
          nextProps = ReactDOMSelect.getHostProps(this, nextProps);
          break;
        case 'textarea':
          lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
          nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
          break;
      }

      assertValidProps(this, nextProps);
      this._updateDOMProperties(lastProps, nextProps, transaction);
      this._updateDOMChildren(lastProps, nextProps, transaction, context);

      switch (this._tag) {
        case 'input':
          // Update the wrapper around inputs *after* updating props. This has to
          // happen after `_updateDOMProperties`. Otherwise HTML5 input validations
          // raise warnings and prevent the new value from being assigned.
          ReactDOMInput.updateWrapper(this);
          break;
        case 'textarea':
          ReactDOMTextarea.updateWrapper(this);
          break;
        case 'select':
          // <select> value update needs to occur after <option> children
          // reconciliation
          transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
          break;
      }
    },

    /**
     * Reconciles the properties by detecting differences in property values and
     * updating the DOM as necessary. This function is probably the single most
     * critical path for performance optimization.
     *
     * TODO: Benchmark whether checking for changed values in memory actually
     *       improves performance (especially statically positioned elements).
     * TODO: Benchmark the effects of putting this at the top since 99% of props
     *       do not change for a given reconciliation.
     * TODO: Benchmark areas that can be improved with caching.
     *
     * @private
     * @param {object} lastProps
     * @param {object} nextProps
     * @param {?DOMElement} node
     */
    _updateDOMProperties: function _updateDOMProperties(lastProps, nextProps, transaction) {
      var propKey;
      var styleName;
      var styleUpdates;
      for (propKey in lastProps) {
        if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
          continue;
        }
        if (propKey === STYLE) {
          var lastStyle = this._previousStyleCopy;
          for (styleName in lastStyle) {
            if (lastStyle.hasOwnProperty(styleName)) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          this._previousStyleCopy = null;
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (lastProps[propKey]) {
            // Only call deleteListener if there was a listener previously or
            // else willDeleteListener gets called when there wasn't actually a
            // listener (e.g., onClick={null})
            deleteListener(this, propKey);
          }
        } else if (isCustomComponent(this._tag, lastProps)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            DOMPropertyOperations.deleteValueForAttribute(getNode(this), propKey);
          }
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
        }
      }
      for (propKey in nextProps) {
        var nextProp = nextProps[propKey];
        var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
        if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
          continue;
        }
        if (propKey === STYLE) {
          if (nextProp) {
            if ("production" !== 'production') {}
            nextProp = this._previousStyleCopy = _assign({}, nextProp);
          } else {
            this._previousStyleCopy = null;
          }
          if (lastProp) {
            // Unset styles on `lastProp` but not on `nextProp`.
            for (styleName in lastProp) {
              if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            // Update styles that changed since `lastProp`.
            for (styleName in nextProp) {
              if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = nextProp[styleName];
              }
            }
          } else {
            // Relies on `updateStylesByID` not mutating `styleUpdates`.
            styleUpdates = nextProp;
          }
        } else if (registrationNameModules.hasOwnProperty(propKey)) {
          if (nextProp) {
            enqueuePutListener(this, propKey, nextProp, transaction);
          } else if (lastProp) {
            deleteListener(this, propKey);
          }
        } else if (isCustomComponent(this._tag, nextProps)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
          }
        } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
          var node = getNode(this);
          // If we're updating to null or undefined, we should remove the property
          // from the DOM node instead of inadvertently setting to a string. This
          // brings us in line with the same behavior we have on initial render.
          if (nextProp != null) {
            DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
          } else {
            DOMPropertyOperations.deleteValueForProperty(node, propKey);
          }
        }
      }
      if (styleUpdates) {
        CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
      }
    },

    /**
     * Reconciles the children with the various properties that affect the
     * children content.
     *
     * @param {object} lastProps
     * @param {object} nextProps
     * @param {ReactReconcileTransaction} transaction
     * @param {object} context
     */
    _updateDOMChildren: function _updateDOMChildren(lastProps, nextProps, transaction, context) {
      var lastContent = CONTENT_TYPES[_typeof(lastProps.children)] ? lastProps.children : null;
      var nextContent = CONTENT_TYPES[_typeof(nextProps.children)] ? nextProps.children : null;

      var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
      var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;

      // Note the use of `!=` which checks for null or undefined.
      var lastChildren = lastContent != null ? null : lastProps.children;
      var nextChildren = nextContent != null ? null : nextProps.children;

      // If we're switching from children to content/html or vice versa, remove
      // the old content
      var lastHasContentOrHtml = lastContent != null || lastHtml != null;
      var nextHasContentOrHtml = nextContent != null || nextHtml != null;
      if (lastChildren != null && nextChildren == null) {
        this.updateChildren(null, transaction, context);
      } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
        this.updateTextContent('');
        if ("production" !== 'production') {}
      }

      if (nextContent != null) {
        if (lastContent !== nextContent) {
          this.updateTextContent('' + nextContent);
          if ("production" !== 'production') {}
        }
      } else if (nextHtml != null) {
        if (lastHtml !== nextHtml) {
          this.updateMarkup('' + nextHtml);
        }
        if ("production" !== 'production') {}
      } else if (nextChildren != null) {
        if ("production" !== 'production') {}

        this.updateChildren(nextChildren, transaction, context);
      }
    },

    getHostNode: function getHostNode() {
      return getNode(this);
    },

    /**
     * Destroys all event registrations for this instance. Does not remove from
     * the DOM. That must be done by the parent.
     *
     * @internal
     */
    unmountComponent: function unmountComponent(safely) {
      switch (this._tag) {
        case 'audio':
        case 'form':
        case 'iframe':
        case 'img':
        case 'link':
        case 'object':
        case 'source':
        case 'video':
          var listeners = this._wrapperState.listeners;
          if (listeners) {
            for (var i = 0; i < listeners.length; i++) {
              listeners[i].remove();
            }
          }
          break;
        case 'html':
        case 'head':
        case 'body':
          /**
           * Components like <html> <head> and <body> can't be removed or added
           * easily in a cross-browser way, however it's valuable to be able to
           * take advantage of React's reconciliation for styling and <title>
           * management. So we just document it and throw in dangerous cases.
           */
          _prodInvariant('66', this._tag);
          break;
      }

      this.unmountChildren(safely);
      ReactDOMComponentTree.uncacheNode(this);
      EventPluginHub.deleteAllListeners(this);
      this._rootNodeID = 0;
      this._domID = 0;
      this._wrapperState = null;

      if ("production" !== 'production') {}
    },

    getPublicInstance: function getPublicInstance() {
      return getNode(this);
    }

  };

  _assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);

  module.exports = ReactDOMComponent;
});

var ReactDOMComponent$1 = interopDefault(ReactDOMComponent);



var require$$11$1 = Object.freeze({
  default: ReactDOMComponent$1
});

var ReactDOMEmptyComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMEmptyComponent
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var DOMLazyTree = interopDefault(require$$20);
  var ReactDOMComponentTree = interopDefault(require$$4$3);

  var ReactDOMEmptyComponent = function ReactDOMEmptyComponent(instantiate) {
    // ReactCompositeComponent uses this:
    this._currentElement = null;
    // ReactDOMComponentTree uses these:
    this._hostNode = null;
    this._hostParent = null;
    this._hostContainerInfo = null;
    this._domID = 0;
  };
  _assign(ReactDOMEmptyComponent.prototype, {
    mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
      var domID = hostContainerInfo._idCounter++;
      this._domID = domID;
      this._hostParent = hostParent;
      this._hostContainerInfo = hostContainerInfo;

      var nodeValue = ' react-empty: ' + this._domID + ' ';
      if (transaction.useCreateElement) {
        var ownerDocument = hostContainerInfo._ownerDocument;
        var node = ownerDocument.createComment(nodeValue);
        ReactDOMComponentTree.precacheNode(this, node);
        return DOMLazyTree(node);
      } else {
        if (transaction.renderToStaticMarkup) {
          // Normally we'd insert a comment node, but since this is a situation
          // where React won't take over (static pages), we can simply return
          // nothing.
          return '';
        }
        return '<!--' + nodeValue + '-->';
      }
    },
    receiveComponent: function receiveComponent() {},
    getHostNode: function getHostNode() {
      return ReactDOMComponentTree.getNodeFromInstance(this);
    },
    unmountComponent: function unmountComponent() {
      ReactDOMComponentTree.uncacheNode(this);
    }
  });

  module.exports = ReactDOMEmptyComponent;
});

var ReactDOMEmptyComponent$1 = interopDefault(ReactDOMEmptyComponent);

var require$$9$2 = Object.freeze({
  default: ReactDOMEmptyComponent$1
});

var ReactDOMTreeTraversal = createCommonjsModule(function (module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMTreeTraversal
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var invariant = interopDefault(require$$1);

  /**
   * Return the lowest common ancestor of A and B, or null if they are in
   * different trees.
   */
  function getLowestCommonAncestor(instA, instB) {
    !('_hostNode' in instA) ? _prodInvariant('33') : void 0;
    !('_hostNode' in instB) ? _prodInvariant('33') : void 0;

    var depthA = 0;
    for (var tempA = instA; tempA; tempA = tempA._hostParent) {
      depthA++;
    }
    var depthB = 0;
    for (var tempB = instB; tempB; tempB = tempB._hostParent) {
      depthB++;
    }

    // If A is deeper, crawl up.
    while (depthA - depthB > 0) {
      instA = instA._hostParent;
      depthA--;
    }

    // If B is deeper, crawl up.
    while (depthB - depthA > 0) {
      instB = instB._hostParent;
      depthB--;
    }

    // Walk in lockstep until we find a match.
    var depth = depthA;
    while (depth--) {
      if (instA === instB) {
        return instA;
      }
      instA = instA._hostParent;
      instB = instB._hostParent;
    }
    return null;
  }

  /**
   * Return if A is an ancestor of B.
   */
  function isAncestor(instA, instB) {
    !('_hostNode' in instA) ? _prodInvariant('35') : void 0;
    !('_hostNode' in instB) ? _prodInvariant('35') : void 0;

    while (instB) {
      if (instB === instA) {
        return true;
      }
      instB = instB._hostParent;
    }
    return false;
  }

  /**
   * Return the parent instance of the passed-in instance.
   */
  function getParentInstance(inst) {
    !('_hostNode' in inst) ? _prodInvariant('36') : void 0;

    return inst._hostParent;
  }

  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   */
  function traverseTwoPhase(inst, fn, arg) {
    var path = [];
    while (inst) {
      path.push(inst);
      inst = inst._hostParent;
    }
    var i;
    for (i = path.length; i-- > 0;) {
      fn(path[i], false, arg);
    }
    for (i = 0; i < path.length; i++) {
      fn(path[i], true, arg);
    }
  }

  /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * Does not invoke the callback on the nearest common ancestor because nothing
   * "entered" or "left" that element.
   */
  function traverseEnterLeave(from, to, fn, argFrom, argTo) {
    var common = from && to ? getLowestCommonAncestor(from, to) : null;
    var pathFrom = [];
    while (from && from !== common) {
      pathFrom.push(from);
      from = from._hostParent;
    }
    var pathTo = [];
    while (to && to !== common) {
      pathTo.push(to);
      to = to._hostParent;
    }
    var i;
    for (i = 0; i < pathFrom.length; i++) {
      fn(pathFrom[i], true, argFrom);
    }
    for (i = pathTo.length; i-- > 0;) {
      fn(pathTo[i], false, argTo);
    }
  }

  module.exports = {
    isAncestor: isAncestor,
    getLowestCommonAncestor: getLowestCommonAncestor,
    getParentInstance: getParentInstance,
    traverseTwoPhase: traverseTwoPhase,
    traverseEnterLeave: traverseEnterLeave
  };
});

var ReactDOMTreeTraversal$1 = interopDefault(ReactDOMTreeTraversal);
var isAncestor = ReactDOMTreeTraversal.isAncestor;
var getLowestCommonAncestor = ReactDOMTreeTraversal.getLowestCommonAncestor;
var getParentInstance = ReactDOMTreeTraversal.getParentInstance;
var traverseTwoPhase = ReactDOMTreeTraversal.traverseTwoPhase;
var traverseEnterLeave = ReactDOMTreeTraversal.traverseEnterLeave;

var require$$8$4 = Object.freeze({
  default: ReactDOMTreeTraversal$1,
  isAncestor: isAncestor,
  getLowestCommonAncestor: getLowestCommonAncestor,
  getParentInstance: getParentInstance,
  traverseTwoPhase: traverseTwoPhase,
  traverseEnterLeave: traverseEnterLeave
});

var ReactDOMTextComponent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMTextComponent
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6),
      _assign = interopDefault(require$$7);

  var DOMChildrenOperations = interopDefault(require$$5$6);
  var DOMLazyTree = interopDefault(require$$20);
  var ReactDOMComponentTree = interopDefault(require$$4$3);

  var escapeTextContentForBrowser = interopDefault(require$$2$11);
  var invariant = interopDefault(require$$1);
  var validateDOMNesting = interopDefault(require$$0$20);

  /**
   * Text nodes violate a couple assumptions that React makes about components:
   *
   *  - When mounting text into the DOM, adjacent text nodes are merged.
   *  - Text nodes cannot be assigned a React root ID.
   *
   * This component is used to wrap strings between comment nodes so that they
   * can undergo the same reconciliation that is applied to elements.
   *
   * TODO: Investigate representing React components in the DOM with text nodes.
   *
   * @class ReactDOMTextComponent
   * @extends ReactComponent
   * @internal
   */
  var ReactDOMTextComponent = function ReactDOMTextComponent(text) {
    // TODO: This is really a ReactText (ReactNode), not a ReactElement
    this._currentElement = text;
    this._stringText = '' + text;
    // ReactDOMComponentTree uses these:
    this._hostNode = null;
    this._hostParent = null;

    // Properties
    this._domID = 0;
    this._mountIndex = 0;
    this._closingComment = null;
    this._commentNodes = null;
  };

  _assign(ReactDOMTextComponent.prototype, {

    /**
     * Creates the markup for this text node. This node is not intended to have
     * any features besides containing text content.
     *
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @return {string} Markup for this text node.
     * @internal
     */
    mountComponent: function mountComponent(transaction, hostParent, hostContainerInfo, context) {
      if ("production" !== 'production') {}

      var domID = hostContainerInfo._idCounter++;
      var openingValue = ' react-text: ' + domID + ' ';
      var closingValue = ' /react-text ';
      this._domID = domID;
      this._hostParent = hostParent;
      if (transaction.useCreateElement) {
        var ownerDocument = hostContainerInfo._ownerDocument;
        var openingComment = ownerDocument.createComment(openingValue);
        var closingComment = ownerDocument.createComment(closingValue);
        var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
        if (this._stringText) {
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
        }
        DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
        ReactDOMComponentTree.precacheNode(this, openingComment);
        this._closingComment = closingComment;
        return lazyTree;
      } else {
        var escapedText = escapeTextContentForBrowser(this._stringText);

        if (transaction.renderToStaticMarkup) {
          // Normally we'd wrap this between comment nodes for the reasons stated
          // above, but since this is a situation where React won't take over
          // (static pages), we can simply return the text as it is.
          return escapedText;
        }

        return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
      }
    },

    /**
     * Updates this component by updating the text content.
     *
     * @param {ReactText} nextText The next text content
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    receiveComponent: function receiveComponent(nextText, transaction) {
      if (nextText !== this._currentElement) {
        this._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !== this._stringText) {
          // TODO: Save this as pending props and use performUpdateIfNecessary
          // and/or updateComponent to do the actual update for consistency with
          // other component types?
          this._stringText = nextStringText;
          var commentNodes = this.getHostNode();
          DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
        }
      }
    },

    getHostNode: function getHostNode() {
      var hostNode = this._commentNodes;
      if (hostNode) {
        return hostNode;
      }
      if (!this._closingComment) {
        var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
        var node = openingComment.nextSibling;
        while (true) {
          !(node != null) ? _prodInvariant('67', this._domID) : void 0;
          if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
            this._closingComment = node;
            break;
          }
          node = node.nextSibling;
        }
      }
      hostNode = [this._hostNode, this._closingComment];
      this._commentNodes = hostNode;
      return hostNode;
    },

    unmountComponent: function unmountComponent() {
      this._closingComment = null;
      this._commentNodes = null;
      ReactDOMComponentTree.uncacheNode(this);
    }

  });

  module.exports = ReactDOMTextComponent;
});

var ReactDOMTextComponent$1 = interopDefault(ReactDOMTextComponent);

var require$$7$5 = Object.freeze({
  default: ReactDOMTextComponent$1
});

var ReactDefaultBatchingStrategy = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDefaultBatchingStrategy
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var ReactUpdates = interopDefault(require$$6$3);
  var Transaction = interopDefault(require$$1$6);

  var emptyFunction = interopDefault(require$$3$1);

  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function close() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };

  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };

  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }

  _assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
    getTransactionWrappers: function getTransactionWrappers() {
      return TRANSACTION_WRAPPERS;
    }
  });

  var transaction = new ReactDefaultBatchingStrategyTransaction();

  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,

    /**
     * Call the provided function in a context within which calls to `setState`
     * and friends are batched such that components aren't updated unnecessarily.
     */
    batchedUpdates: function batchedUpdates(callback, a, b, c, d, e) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

      ReactDefaultBatchingStrategy.isBatchingUpdates = true;

      // The code is written this way to avoid extra allocations
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d, e);
      } else {
        transaction.perform(callback, null, a, b, c, d, e);
      }
    }
  };

  module.exports = ReactDefaultBatchingStrategy;
});

var ReactDefaultBatchingStrategy$1 = interopDefault(ReactDefaultBatchingStrategy);

var require$$6$8 = Object.freeze({
  default: ReactDefaultBatchingStrategy$1
});

var EventListener = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * @typechecks
   */

  var emptyFunction = interopDefault(require$$3$1);

  /**
   * Upstream version of event listener. Does not take into account specific
   * nature of platform.
   */
  var EventListener = {
    /**
     * Listen to DOM events during the bubble phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    listen: function listen(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, false);
        return {
          remove: function remove() {
            target.removeEventListener(eventType, callback, false);
          }
        };
      } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, callback);
        return {
          remove: function remove() {
            target.detachEvent('on' + eventType, callback);
          }
        };
      }
    },

    /**
     * Listen to DOM events during the capture phase.
     *
     * @param {DOMEventTarget} target DOM element to register listener on.
     * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
     * @param {function} callback Callback function.
     * @return {object} Object with a `remove` method.
     */
    capture: function capture(target, eventType, callback) {
      if (target.addEventListener) {
        target.addEventListener(eventType, callback, true);
        return {
          remove: function remove() {
            target.removeEventListener(eventType, callback, true);
          }
        };
      } else {
        if ("production" !== 'production') {}
        return {
          remove: emptyFunction
        };
      }
    },

    registerDefault: function registerDefault() {}
  };

  module.exports = EventListener;
});

var EventListener$1 = interopDefault(EventListener);

var require$$17$2 = Object.freeze({
  default: EventListener$1
});

var getUnboundedScrollPosition = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  'use strict';

  /**
   * Gets the scroll position of the supplied element or window.
   *
   * The return values are unbounded, unlike `getScrollPosition`. This means they
   * may be negative or exceed the element boundaries (which is possible using
   * inertial scrolling).
   *
   * @param {DOMWindow|DOMElement} scrollable
   * @return {object} Map with `x` and `y` keys.
   */

  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }

  module.exports = getUnboundedScrollPosition;
});

var getUnboundedScrollPosition$1 = interopDefault(getUnboundedScrollPosition);

var require$$0$21 = Object.freeze({
  default: getUnboundedScrollPosition$1
});

var ReactEventListener = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactEventListener
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var EventListener = interopDefault(require$$17$2);
  var ExecutionEnvironment = interopDefault(require$$7$3);
  var PooledClass = interopDefault(require$$5);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactUpdates = interopDefault(require$$6$3);

  var getEventTarget = interopDefault(require$$1$7);
  var getUnboundedScrollPosition = interopDefault(require$$0$21);

  /**
   * Find the deepest React component completely containing the root of the
   * passed-in instance (for use when entire React trees are nested within each
   * other). If React trees are not nested, returns null.
   */
  function findParent(inst) {
    // TODO: It may be a good idea to cache this to prevent unnecessary DOM
    // traversal, but caching is difficult to do correctly without using a
    // mutation observer to listen for all DOM changes.
    while (inst._hostParent) {
      inst = inst._hostParent;
    }
    var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
    var container = rootNode.parentNode;
    return ReactDOMComponentTree.getClosestInstanceFromNode(container);
  }

  // Used to store ancestor hierarchy in top level callback
  function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
    this.topLevelType = topLevelType;
    this.nativeEvent = nativeEvent;
    this.ancestors = [];
  }
  _assign(TopLevelCallbackBookKeeping.prototype, {
    destructor: function destructor() {
      this.topLevelType = null;
      this.nativeEvent = null;
      this.ancestors.length = 0;
    }
  });
  PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);

  function handleTopLevelImpl(bookKeeping) {
    var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
    var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);

    // Loop through the hierarchy, in case there's any nested components.
    // It's important that we build the array of ancestors before calling any
    // event handlers, because event handlers can modify the DOM, leading to
    // inconsistencies with ReactMount's node cache. See #1105.
    var ancestor = targetInst;
    do {
      bookKeeping.ancestors.push(ancestor);
      ancestor = ancestor && findParent(ancestor);
    } while (ancestor);

    for (var i = 0; i < bookKeeping.ancestors.length; i++) {
      targetInst = bookKeeping.ancestors[i];
      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
    }
  }

  function scrollValueMonitor(cb) {
    var scrollPosition = getUnboundedScrollPosition(window);
    cb(scrollPosition);
  }

  var ReactEventListener = {
    _enabled: true,
    _handleTopLevel: null,

    WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

    setHandleTopLevel: function setHandleTopLevel(handleTopLevel) {
      ReactEventListener._handleTopLevel = handleTopLevel;
    },

    setEnabled: function setEnabled(enabled) {
      ReactEventListener._enabled = !!enabled;
    },

    isEnabled: function isEnabled() {
      return ReactEventListener._enabled;
    },

    /**
     * Traps top-level events by using event bubbling.
     *
     * @param {string} topLevelType Record from `EventConstants`.
     * @param {string} handlerBaseName Event name (e.g. "click").
     * @param {object} handle Element on which to attach listener.
     * @return {?object} An object with a remove function which will forcefully
     *                  remove the listener.
     * @internal
     */
    trapBubbledEvent: function trapBubbledEvent(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },

    /**
     * Traps a top-level event by using event capturing.
     *
     * @param {string} topLevelType Record from `EventConstants`.
     * @param {string} handlerBaseName Event name (e.g. "click").
     * @param {object} handle Element on which to attach listener.
     * @return {?object} An object with a remove function which will forcefully
     *                  remove the listener.
     * @internal
     */
    trapCapturedEvent: function trapCapturedEvent(topLevelType, handlerBaseName, handle) {
      var element = handle;
      if (!element) {
        return null;
      }
      return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
    },

    monitorScrollValue: function monitorScrollValue(refresh) {
      var callback = scrollValueMonitor.bind(null, refresh);
      EventListener.listen(window, 'scroll', callback);
    },

    dispatchEvent: function dispatchEvent(topLevelType, nativeEvent) {
      if (!ReactEventListener._enabled) {
        return;
      }

      var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
      try {
        // Event queue being processed in the same cycle allows
        // `preventDefault`.
        ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
      } finally {
        TopLevelCallbackBookKeeping.release(bookKeeping);
      }
    }
  };

  module.exports = ReactEventListener;
});

var ReactEventListener$1 = interopDefault(ReactEventListener);

var require$$5$10 = Object.freeze({
  default: ReactEventListener$1
});

var ReactInjection = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInjection
   */

  'use strict';

  var DOMProperty = interopDefault(require$$3$3);
  var EventPluginHub = interopDefault(require$$7$2);
  var EventPluginUtils = interopDefault(require$$6$2);
  var ReactComponentEnvironment = interopDefault(require$$5$9);
  var ReactClass = interopDefault(require$$4);
  var ReactEmptyComponent = interopDefault(require$$3$10);
  var ReactBrowserEventEmitter = interopDefault(require$$18$1);
  var ReactHostComponent = interopDefault(require$$1$17);
  var ReactUpdates = interopDefault(require$$6$3);

  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventPluginUtils: EventPluginUtils.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    HostComponent: ReactHostComponent.injection,
    Updates: ReactUpdates.injection
  };

  module.exports = ReactInjection;
});

var ReactInjection$1 = interopDefault(ReactInjection);

var require$$4$8 = Object.freeze({
  default: ReactInjection$1
});

var getNodeForCharacterOffset = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getNodeForCharacterOffset
   */

  'use strict';

  /**
   * Given any node return the first leaf node without children.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {DOMElement|DOMTextNode}
   */

  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }

  /**
   * Get the next sibling within a container. This will walk up the
   * DOM if a node's siblings have been exhausted.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {?DOMElement|DOMTextNode}
   */
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }

  /**
   * Get object describing the nodes which contain characters at offset.
   *
   * @param {DOMElement|DOMTextNode} root
   * @param {number} offset
   * @return {?object}
   */
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;

    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;

        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }

        nodeStart = nodeEnd;
      }

      node = getLeafNode(getSiblingNode(node));
    }
  }

  module.exports = getNodeForCharacterOffset;
});

var getNodeForCharacterOffset$1 = interopDefault(getNodeForCharacterOffset);

var require$$1$19 = Object.freeze({
  default: getNodeForCharacterOffset$1
});

var ReactDOMSelection = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMSelection
   */

  'use strict';

  var ExecutionEnvironment = interopDefault(require$$7$3);

  var getNodeForCharacterOffset = interopDefault(require$$1$19);
  var getTextContentAccessor = interopDefault(require$$0$5);

  /**
   * While `isCollapsed` is available on the Selection object and `collapsed`
   * is available on the Range object, IE11 sometimes gets them wrong.
   * If the anchor/focus nodes and offsets are the same, the range is collapsed.
   */
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }

  /**
   * Get the appropriate anchor and focus node/offset pairs for IE.
   *
   * The catch here is that IE's selection API doesn't provide information
   * about whether the selection is forward or backward, so we have to
   * behave as though it's always forward.
   *
   * IE text differs from modern selection in that it behaves as though
   * block elements end with a new line. This means character offsets will
   * differ between the two APIs.
   *
   * @param {DOMElement} node
   * @return {object}
   */
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;

    // Duplicate selection so we can move range without breaking user selection.
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);

    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;

    return {
      start: startOffset,
      end: endOffset
    };
  }

  /**
   * @param {DOMElement} node
   * @return {?object}
   */
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();

    if (!selection || selection.rangeCount === 0) {
      return null;
    }

    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;

    var currentRange = selection.getRangeAt(0);

    // In Firefox, range.startContainer and range.endContainer can be "anonymous
    // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
    // divs do not seem to expose properties, triggering a "Permission denied
    // error" if any of its properties are accessed. The only seemingly possible
    // way to avoid erroring is to access a property that typically works for
    // non-anonymous divs and catch any error that may otherwise arise. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
    try {
      /* eslint-disable no-unused-expressions */
      currentRange.startContainer.nodeType;
      currentRange.endContainer.nodeType;
      /* eslint-enable no-unused-expressions */
    } catch (e) {
      return null;
    }

    // If the node and offset values are the same, the selection is collapsed.
    // `Selection.isCollapsed` is available natively, but IE sometimes gets
    // this value wrong.
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);

    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);

    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;

    // Detect whether the selection is backward.
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;

    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start, end;

    if (offsets.end === undefined) {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }

    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }

  /**
   * In modern non-IE browsers, we can support both forward and backward
   * selections.
   *
   * Note: IE10+ supports the Selection object, but it does not support
   * the `extend` method, which means that even in modern IE, it's not possible
   * to programmatically create a backward selection. Thus, for all IE
   * versions, we use the old IE API to create our selections.
   *
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }

    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = offsets.end === undefined ? start : Math.min(offsets.end, length);

    // IE 11 uses modern selection, but doesn't support the extend method.
    // Flip backward selections, so we can set with a single range.
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }

    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);

    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();

      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }

  var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);

  var ReactDOMSelection = {
    /**
     * @param {DOMElement} node
     */
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

    /**
     * @param {DOMElement|DOMTextNode} node
     * @param {object} offsets
     */
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };

  module.exports = ReactDOMSelection;
});

var ReactDOMSelection$1 = interopDefault(ReactDOMSelection);

var require$$3$12 = Object.freeze({
  default: ReactDOMSelection$1
});

var isNode = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM node.
   */

  function isNode(object) {
    return !!(object && (typeof Node === 'function' ? object instanceof Node : (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }

  module.exports = isNode;
});

var isNode$1 = interopDefault(isNode);



var require$$0$23 = Object.freeze({
  default: isNode$1
});

var isTextNode = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var isNode = interopDefault(require$$0$23);

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM text node.
   */
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }

  module.exports = isTextNode;
});

var isTextNode$1 = interopDefault(isTextNode);

var require$$0$22 = Object.freeze({
  default: isTextNode$1
});

var containsNode = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  var isTextNode = interopDefault(require$$0$22);

  /*eslint-disable no-bitwise */

  /**
   * Checks if a given DOM node contains or is another DOM node.
   */
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if ('contains' in outerNode) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }

  module.exports = containsNode;
});

var containsNode$1 = interopDefault(containsNode);

var require$$2$15 = Object.freeze({
  default: containsNode$1
});

var getActiveElement = createCommonjsModule(function (module) {
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  /* eslint-disable fb-www/typeof-undefined */

  /**
   * Same as document.activeElement but wraps in a try-catch block. In IE it is
   * not safe to call document.activeElement if there is nothing focused.
   *
   * The activeElement will be null only if the document or document body is not
   * yet defined.
   */

  function getActiveElement() /*?DOMElement*/{
    if (typeof document === 'undefined') {
      return null;
    }
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }

  module.exports = getActiveElement;
});

var getActiveElement$1 = interopDefault(getActiveElement);

var require$$3$13 = Object.freeze({
  default: getActiveElement$1
});

var ReactInputSelection = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactInputSelection
   */

  'use strict';

  var ReactDOMSelection = interopDefault(require$$3$12);

  var containsNode = interopDefault(require$$2$15);
  var focusNode = interopDefault(require$$1$10);
  var getActiveElement = interopDefault(require$$3$13);

  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }

  /**
   * @ReactInputSelection: React input selection module. Based on Selection.js,
   * but modified to be suitable for react and has a couple of bug fixes (doesn't
   * assume buttons have range selections allowed).
   * Input selection module for React.
   */
  var ReactInputSelection = {

    hasSelectionCapabilities: function hasSelectionCapabilities(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
    },

    getSelectionInformation: function getSelectionInformation() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },

    /**
     * @restoreSelection: If any selection information was potentially lost,
     * restore it. This is useful when performing operations that could remove dom
     * nodes and place them back in, resulting in focus being lost.
     */
    restoreSelection: function restoreSelection(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },

    /**
     * @getSelection: Gets the selection bounds of a focused textarea, input or
     * contentEditable node.
     * -@input: Look up selection bounds of this input
     * -@return {start: selectionStart, end: selectionEnd}
     */
    getSelection: function getSelection(input) {
      var selection;

      if ('selectionStart' in input) {
        // Modern browser with input or textarea.
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        // IE8 input.
        var range = document.selection.createRange();
        // There can only be one selection per document in IE, so it must
        // be in our element.
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        // Content editable or old IE textarea.
        selection = ReactDOMSelection.getOffsets(input);
      }

      return selection || { start: 0, end: 0 };
    },

    /**
     * @setSelection: Sets the selection bounds of a textarea or input and focuses
     * the input.
     * -@input     Set selection bounds of this input or textarea
     * -@offsets   Object of same form that is returned from get*
     */
    setSelection: function setSelection(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (end === undefined) {
        end = start;
      }

      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };

  module.exports = ReactInputSelection;
});

var ReactInputSelection$1 = interopDefault(ReactInputSelection);

var require$$5$11 = Object.freeze({
  default: ReactInputSelection$1
});

var ReactReconcileTransaction = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactReconcileTransaction
   */

  'use strict';

  var _assign = interopDefault(require$$7);

  var CallbackQueue = interopDefault(require$$6$4);
  var PooledClass = interopDefault(require$$5);
  var ReactBrowserEventEmitter = interopDefault(require$$18$1);
  var ReactInputSelection = interopDefault(require$$5$11);
  var ReactInstrumentation = interopDefault(require$$10);
  var Transaction = interopDefault(require$$1$6);
  var ReactUpdateQueue = interopDefault(require$$7$4);

  /**
   * Ensures that, when possible, the selection range (currently selected text
   * input) is not disturbed by performing the transaction.
   */
  var SELECTION_RESTORATION = {
    /**
     * @return {Selection} Selection information.
     */
    initialize: ReactInputSelection.getSelectionInformation,
    /**
     * @param {Selection} sel Selection information returned from `initialize`.
     */
    close: ReactInputSelection.restoreSelection
  };

  /**
   * Suppresses events (blur/focus) that could be inadvertently dispatched due to
   * high level DOM manipulations (like temporarily removing a text input from the
   * DOM).
   */
  var EVENT_SUPPRESSION = {
    /**
     * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
     * the reconciliation.
     */
    initialize: function initialize() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },

    /**
     * @param {boolean} previouslyEnabled Enabled status of
     *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
     *   restores the previous value.
     */
    close: function close(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };

  /**
   * Provides a queue for collecting `componentDidMount` and
   * `componentDidUpdate` callbacks during the transaction.
   */
  var ON_DOM_READY_QUEUEING = {
    /**
     * Initializes the internal `onDOMReady` queue.
     */
    initialize: function initialize() {
      this.reactMountReady.reset();
    },

    /**
     * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
     */
    close: function close() {
      this.reactMountReady.notifyAll();
    }
  };

  /**
   * Executed within the scope of the `Transaction` instance. Consider these as
   * being member methods, but with an implied ordering while being isolated from
   * each other.
   */
  var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];

  if ("production" !== 'production') {}

  /**
   * Currently:
   * - The order that these are listed in the transaction is critical:
   * - Suppresses events.
   * - Restores selection range.
   *
   * Future:
   * - Restore document/overflow scroll positions that were unintentionally
   *   modified via DOM insertions above the top viewport boundary.
   * - Implement/integrate with customized constraint based layout system and keep
   *   track of which dimensions must be remeasured.
   *
   * @class ReactReconcileTransaction
   */
  function ReactReconcileTransaction(useCreateElement) {
    this.reinitializeTransaction();
    // Only server-side rendering really needs this option (see
    // `ReactServerRendering`), but server-side uses
    // `ReactServerRenderingTransaction` instead. This option is here so that it's
    // accessible and defaults to false when `ReactDOMComponent` and
    // `ReactDOMTextComponent` checks it in `mountComponent`.`
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.useCreateElement = useCreateElement;
  }

  var Mixin = {
    /**
     * @see Transaction
     * @abstract
     * @final
     * @return {array<object>} List of operation wrap procedures.
     *   TODO: convert to array<TransactionWrapper>
     */
    getTransactionWrappers: function getTransactionWrappers() {
      return TRANSACTION_WRAPPERS;
    },

    /**
     * @return {object} The queue to collect `onDOMReady` callbacks with.
     */
    getReactMountReady: function getReactMountReady() {
      return this.reactMountReady;
    },

    /**
     * @return {object} The queue to collect React async events.
     */
    getUpdateQueue: function getUpdateQueue() {
      return ReactUpdateQueue;
    },

    /**
     * Save current transaction state -- if the return value from this method is
     * passed to `rollback`, the transaction will be reset to that state.
     */
    checkpoint: function checkpoint() {
      // reactMountReady is the our only stateful wrapper
      return this.reactMountReady.checkpoint();
    },

    rollback: function rollback(checkpoint) {
      this.reactMountReady.rollback(checkpoint);
    },

    /**
     * `PooledClass` looks for this, and will invoke this before allowing this
     * instance to be reused.
     */
    destructor: function destructor() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
    }
  };

  _assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

  PooledClass.addPoolingTo(ReactReconcileTransaction);

  module.exports = ReactReconcileTransaction;
});

var ReactReconcileTransaction$1 = interopDefault(ReactReconcileTransaction);

var require$$3$11 = Object.freeze({
  default: ReactReconcileTransaction$1
});

var SVGDOMPropertyConfig = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SVGDOMPropertyConfig
   */

  'use strict';

  var NS = {
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };

  // We use attributes for everything SVG so let's avoid some duplication and run
  // code instead.
  // The following are all specified in the HTML config already so we exclude here.
  // - class (as className)
  // - color
  // - height
  // - id
  // - lang
  // - max
  // - media
  // - method
  // - min
  // - name
  // - style
  // - target
  // - type
  // - width
  var ATTRS = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    clipPathUnits: 'clipPathUnits',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    'in': 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerHeight: 'markerHeight',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    textLength: 'textLength',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    xHeight: 'x-height',
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlns: 0,
    xmlnsXlink: 'xmlns:xlink',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
  };

  var SVGDOMPropertyConfig = {
    Properties: {},
    DOMAttributeNamespaces: {
      xlinkActuate: NS.xlink,
      xlinkArcrole: NS.xlink,
      xlinkHref: NS.xlink,
      xlinkRole: NS.xlink,
      xlinkShow: NS.xlink,
      xlinkTitle: NS.xlink,
      xlinkType: NS.xlink,
      xmlBase: NS.xml,
      xmlLang: NS.xml,
      xmlSpace: NS.xml
    },
    DOMAttributeNames: {}
  };

  Object.keys(ATTRS).forEach(function (key) {
    SVGDOMPropertyConfig.Properties[key] = 0;
    if (ATTRS[key]) {
      SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
    }
  });

  module.exports = SVGDOMPropertyConfig;
});

var SVGDOMPropertyConfig$1 = interopDefault(SVGDOMPropertyConfig);

var require$$2$16 = Object.freeze({
  default: SVGDOMPropertyConfig$1
});

var SelectEventPlugin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SelectEventPlugin
   */

  'use strict';

  var EventConstants = interopDefault(require$$18);
  var EventPropagators = interopDefault(require$$16$1);
  var ExecutionEnvironment = interopDefault(require$$7$3);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactInputSelection = interopDefault(require$$5$11);
  var SyntheticEvent = interopDefault(require$$0$6);

  var getActiveElement = interopDefault(require$$3$13);
  var isTextInputElement = interopDefault(require$$2$8);
  var keyOf = interopDefault(require$$0$3);
  var shallowEqual = interopDefault(require$$0$18);

  var topLevelTypes = EventConstants.topLevelTypes;

  var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;

  var eventTypes = {
    select: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onSelect: null }),
        captured: keyOf({ onSelectCapture: null })
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }
  };

  var activeElement = null;
  var activeElementInst = null;
  var lastSelection = null;
  var mouseDown = false;

  // Track whether a listener exists for this plugin. If none exist, we do
  // not extract events. See #3639.
  var hasListener = false;
  var ON_SELECT_KEY = keyOf({ onSelect: null });

  /**
   * Get an object which is a unique representation of the current selection.
   *
   * The return value will not be consistent across nodes or browsers, but
   * two identical selections on the same node will return identical objects.
   *
   * @param {DOMElement} node
   * @return {object}
   */
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }

  /**
   * Poll selection to see whether it's changed.
   *
   * @param {object} nativeEvent
   * @return {?SyntheticEvent}
   */
  function constructSelectEvent(nativeEvent, nativeEventTarget) {
    // Ensure we have the right element, and that the user is not dragging a
    // selection (this matches native `select` event behavior). In HTML5, select
    // fires only on input and textarea thus if there's no focused element we
    // won't dispatch.
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }

    // Only fire when selection has actually changed.
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;

      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);

      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;

      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

      return syntheticEvent;
    }

    return null;
  }

  /**
   * This plugin creates an `onSelect` event that normalizes select events
   * across form elements.
   *
   * Supported elements are:
   * - input (see `isTextInputElement`)
   * - textarea
   * - contentEditable
   *
   * This differs from native browser implementations in the following ways:
   * - Fires on contentEditable fields as well as inputs.
   * - Fires for collapsed selection.
   * - Fires after user input.
   */
  var SelectEventPlugin = {

    eventTypes: eventTypes,

    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (!hasListener) {
        return null;
      }

      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

      switch (topLevelType) {
        // Track the input node that has focus.
        case topLevelTypes.topFocus:
          if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
            activeElement = targetNode;
            activeElementInst = targetInst;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementInst = null;
          lastSelection = null;
          break;

        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent, nativeEventTarget);

        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case topLevelTypes.topSelectionChange:
          if (skipSelectionChangeEvent) {
            break;
          }
        // falls through
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent, nativeEventTarget);
      }

      return null;
    },

    didPutListener: function didPutListener(inst, registrationName, listener) {
      if (registrationName === ON_SELECT_KEY) {
        hasListener = true;
      }
    }
  };

  module.exports = SelectEventPlugin;
});

var SelectEventPlugin$1 = interopDefault(SelectEventPlugin);

var require$$1$20 = Object.freeze({
  default: SelectEventPlugin$1
});

var SyntheticAnimationEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticAnimationEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  /**
   * @interface Event
   * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
   */
  var AnimationEventInterface = {
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticEvent}
   */
  function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);

  module.exports = SyntheticAnimationEvent;
});

var SyntheticAnimationEvent$1 = interopDefault(SyntheticAnimationEvent);

var require$$14$2 = Object.freeze({
  default: SyntheticAnimationEvent$1
});

var SyntheticClipboardEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticClipboardEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  /**
   * @interface Event
   * @see http://www.w3.org/TR/clipboard-apis/
   */
  var ClipboardEventInterface = {
    clipboardData: function clipboardData(event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    }
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

  module.exports = SyntheticClipboardEvent;
});

var SyntheticClipboardEvent$1 = interopDefault(SyntheticClipboardEvent);

var require$$13$3 = Object.freeze({
  default: SyntheticClipboardEvent$1
});

var SyntheticFocusEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticFocusEvent
   */

  'use strict';

  var SyntheticUIEvent = interopDefault(require$$1$8);

  /**
   * @interface FocusEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var FocusEventInterface = {
    relatedTarget: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

  module.exports = SyntheticFocusEvent;
});

var SyntheticFocusEvent$1 = interopDefault(SyntheticFocusEvent);

var require$$11$3 = Object.freeze({
  default: SyntheticFocusEvent$1
});

var getEventCharCode = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getEventCharCode
   */

  'use strict';

  /**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {number} Normalized `charCode` property.
   */

  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;

    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;

      // FF does not set `charCode` for the Enter-key, check against `keyCode`.
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      // IE8 does not implement `charCode`, but `keyCode` has the correct value.
      charCode = keyCode;
    }

    // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
    // Must not discard the (non-)printable Enter-key.
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }

    return 0;
  }

  module.exports = getEventCharCode;
});

var getEventCharCode$1 = interopDefault(getEventCharCode);

var require$$0$25 = Object.freeze({
  default: getEventCharCode$1
});

var getEventKey = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getEventKey
   */

  'use strict';

  var getEventCharCode = interopDefault(require$$0$25);

  /**
   * Normalization of deprecated HTML5 `key` values
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };

  /**
   * Translation from legacy `keyCode` to HTML5 `key`
   * Only special keys supported, all others depend on keyboard layout or browser
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
    118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };

  /**
   * @param {object} nativeEvent Native browser event.
   * @return {string} Normalized `key` property.
   */
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      // Normalize inconsistent values reported by browsers due to
      // implementations of a working draft specification.

      // FireFox implements `key` but returns `MozPrintableKey` for all
      // printable characters (normalized to `Unidentified`), ignore it.
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }

    // Browser does not implement `key`, polyfill as much of it as we can.
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);

      // The enter-key is technically both printable and non-printable and can
      // thus be captured by `keypress`, no other non-printable key should.
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      // While user keyboard layout determines the actual meaning of each
      // `keyCode` value, almost all function keys have a universal value.
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }

  module.exports = getEventKey;
});

var getEventKey$1 = interopDefault(getEventKey);

var require$$1$21 = Object.freeze({
  default: getEventKey$1
});

var SyntheticKeyboardEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticKeyboardEvent
   */

  'use strict';

  var SyntheticUIEvent = interopDefault(require$$1$8);

  var getEventCharCode = interopDefault(require$$0$25);
  var getEventKey = interopDefault(require$$1$21);
  var getEventModifierState = interopDefault(require$$0$11);

  /**
   * @interface KeyboardEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    // Legacy Interface
    charCode: function charCode(event) {
      // `charCode` is the result of a KeyPress event and represents the value of
      // the actual printable character.

      // KeyPress is deprecated, but its replacement is not yet final and not
      // implemented in any major browser. Only KeyPress has charCode.
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function keyCode(event) {
      // `keyCode` is the result of a KeyDown/Up event and represents the value of
      // physical keyboard key.

      // The actual meaning of the value depends on the users' keyboard layout
      // which cannot be detected. Assuming that it is a US keyboard layout
      // provides a surprisingly accurate mapping for US and European users.
      // Due to this, it is left to the user to implement at this time.
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function which(event) {
      // `which` is an alias for either `keyCode` or `charCode` depending on the
      // type of the event.
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

  module.exports = SyntheticKeyboardEvent;
});

var SyntheticKeyboardEvent$1 = interopDefault(SyntheticKeyboardEvent);

var require$$10$1 = Object.freeze({
  default: SyntheticKeyboardEvent$1
});

var SyntheticDragEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticDragEvent
   */

  'use strict';

  var SyntheticMouseEvent = interopDefault(require$$0$10);

  /**
   * @interface DragEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var DragEventInterface = {
    dataTransfer: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

  module.exports = SyntheticDragEvent;
});

var SyntheticDragEvent$1 = interopDefault(SyntheticDragEvent);

var require$$8$5 = Object.freeze({
  default: SyntheticDragEvent$1
});

var SyntheticTouchEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticTouchEvent
   */

  'use strict';

  var SyntheticUIEvent = interopDefault(require$$1$8);

  var getEventModifierState = interopDefault(require$$0$11);

  /**
   * @interface TouchEvent
   * @see http://www.w3.org/TR/touch-events/
   */
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticUIEvent}
   */
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

  module.exports = SyntheticTouchEvent;
});

var SyntheticTouchEvent$1 = interopDefault(SyntheticTouchEvent);

var require$$7$6 = Object.freeze({
  default: SyntheticTouchEvent$1
});

var SyntheticTransitionEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticTransitionEvent
   */

  'use strict';

  var SyntheticEvent = interopDefault(require$$0$6);

  /**
   * @interface Event
   * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
   * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
   */
  var TransitionEventInterface = {
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticEvent}
   */
  function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);

  module.exports = SyntheticTransitionEvent;
});

var SyntheticTransitionEvent$1 = interopDefault(SyntheticTransitionEvent);

var require$$6$9 = Object.freeze({
  default: SyntheticTransitionEvent$1
});

var SyntheticWheelEvent = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SyntheticWheelEvent
   */

  'use strict';

  var SyntheticMouseEvent = interopDefault(require$$0$10);

  /**
   * @interface WheelEvent
   * @see http://www.w3.org/TR/DOM-Level-3-Events/
   */
  var WheelEventInterface = {
    deltaX: function deltaX(event) {
      return 'deltaX' in event ? event.deltaX :
      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
      'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function deltaY(event) {
      return 'deltaY' in event ? event.deltaY :
      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
      'wheelDeltaY' in event ? -event.wheelDeltaY :
      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
      'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: null,

    // Browsers without "deltaMode" is reporting in raw wheel delta where one
    // notch on the scroll is always +/- 120, roughly equivalent to pixels.
    // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
    // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
    deltaMode: null
  };

  /**
   * @param {object} dispatchConfig Configuration used to dispatch this event.
   * @param {string} dispatchMarker Marker identifying the event target.
   * @param {object} nativeEvent Native browser event.
   * @extends {SyntheticMouseEvent}
   */
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }

  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

  module.exports = SyntheticWheelEvent;
});

var SyntheticWheelEvent$1 = interopDefault(SyntheticWheelEvent);

var require$$4$9 = Object.freeze({
  default: SyntheticWheelEvent$1
});

var SimpleEventPlugin = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule SimpleEventPlugin
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var EventConstants = interopDefault(require$$18);
  var EventListener = interopDefault(require$$17$2);
  var EventPropagators = interopDefault(require$$16$1);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var SyntheticAnimationEvent = interopDefault(require$$14$2);
  var SyntheticClipboardEvent = interopDefault(require$$13$3);
  var SyntheticEvent = interopDefault(require$$0$6);
  var SyntheticFocusEvent = interopDefault(require$$11$3);
  var SyntheticKeyboardEvent = interopDefault(require$$10$1);
  var SyntheticMouseEvent = interopDefault(require$$0$10);
  var SyntheticDragEvent = interopDefault(require$$8$5);
  var SyntheticTouchEvent = interopDefault(require$$7$6);
  var SyntheticTransitionEvent = interopDefault(require$$6$9);
  var SyntheticUIEvent = interopDefault(require$$1$8);
  var SyntheticWheelEvent = interopDefault(require$$4$9);

  var emptyFunction = interopDefault(require$$3$1);
  var getEventCharCode = interopDefault(require$$0$25);
  var invariant = interopDefault(require$$1);
  var keyOf = interopDefault(require$$0$3);

  var topLevelTypes = EventConstants.topLevelTypes;

  var eventTypes = {
    abort: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onAbort: true }),
        captured: keyOf({ onAbortCapture: true })
      }
    },
    animationEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onAnimationEnd: true }),
        captured: keyOf({ onAnimationEndCapture: true })
      }
    },
    animationIteration: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onAnimationIteration: true }),
        captured: keyOf({ onAnimationIterationCapture: true })
      }
    },
    animationStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onAnimationStart: true }),
        captured: keyOf({ onAnimationStartCapture: true })
      }
    },
    blur: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onBlur: true }),
        captured: keyOf({ onBlurCapture: true })
      }
    },
    canPlay: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCanPlay: true }),
        captured: keyOf({ onCanPlayCapture: true })
      }
    },
    canPlayThrough: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCanPlayThrough: true }),
        captured: keyOf({ onCanPlayThroughCapture: true })
      }
    },
    click: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onClick: true }),
        captured: keyOf({ onClickCapture: true })
      }
    },
    contextMenu: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onContextMenu: true }),
        captured: keyOf({ onContextMenuCapture: true })
      }
    },
    copy: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCopy: true }),
        captured: keyOf({ onCopyCapture: true })
      }
    },
    cut: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onCut: true }),
        captured: keyOf({ onCutCapture: true })
      }
    },
    doubleClick: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDoubleClick: true }),
        captured: keyOf({ onDoubleClickCapture: true })
      }
    },
    drag: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDrag: true }),
        captured: keyOf({ onDragCapture: true })
      }
    },
    dragEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragEnd: true }),
        captured: keyOf({ onDragEndCapture: true })
      }
    },
    dragEnter: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragEnter: true }),
        captured: keyOf({ onDragEnterCapture: true })
      }
    },
    dragExit: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragExit: true }),
        captured: keyOf({ onDragExitCapture: true })
      }
    },
    dragLeave: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragLeave: true }),
        captured: keyOf({ onDragLeaveCapture: true })
      }
    },
    dragOver: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragOver: true }),
        captured: keyOf({ onDragOverCapture: true })
      }
    },
    dragStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDragStart: true }),
        captured: keyOf({ onDragStartCapture: true })
      }
    },
    drop: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDrop: true }),
        captured: keyOf({ onDropCapture: true })
      }
    },
    durationChange: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onDurationChange: true }),
        captured: keyOf({ onDurationChangeCapture: true })
      }
    },
    emptied: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onEmptied: true }),
        captured: keyOf({ onEmptiedCapture: true })
      }
    },
    encrypted: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onEncrypted: true }),
        captured: keyOf({ onEncryptedCapture: true })
      }
    },
    ended: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onEnded: true }),
        captured: keyOf({ onEndedCapture: true })
      }
    },
    error: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onError: true }),
        captured: keyOf({ onErrorCapture: true })
      }
    },
    focus: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onFocus: true }),
        captured: keyOf({ onFocusCapture: true })
      }
    },
    input: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onInput: true }),
        captured: keyOf({ onInputCapture: true })
      }
    },
    invalid: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onInvalid: true }),
        captured: keyOf({ onInvalidCapture: true })
      }
    },
    keyDown: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onKeyDown: true }),
        captured: keyOf({ onKeyDownCapture: true })
      }
    },
    keyPress: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onKeyPress: true }),
        captured: keyOf({ onKeyPressCapture: true })
      }
    },
    keyUp: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onKeyUp: true }),
        captured: keyOf({ onKeyUpCapture: true })
      }
    },
    load: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onLoad: true }),
        captured: keyOf({ onLoadCapture: true })
      }
    },
    loadedData: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onLoadedData: true }),
        captured: keyOf({ onLoadedDataCapture: true })
      }
    },
    loadedMetadata: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onLoadedMetadata: true }),
        captured: keyOf({ onLoadedMetadataCapture: true })
      }
    },
    loadStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onLoadStart: true }),
        captured: keyOf({ onLoadStartCapture: true })
      }
    },
    // Note: We do not allow listening to mouseOver events. Instead, use the
    // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
    mouseDown: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onMouseDown: true }),
        captured: keyOf({ onMouseDownCapture: true })
      }
    },
    mouseMove: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onMouseMove: true }),
        captured: keyOf({ onMouseMoveCapture: true })
      }
    },
    mouseOut: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onMouseOut: true }),
        captured: keyOf({ onMouseOutCapture: true })
      }
    },
    mouseOver: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onMouseOver: true }),
        captured: keyOf({ onMouseOverCapture: true })
      }
    },
    mouseUp: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onMouseUp: true }),
        captured: keyOf({ onMouseUpCapture: true })
      }
    },
    paste: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onPaste: true }),
        captured: keyOf({ onPasteCapture: true })
      }
    },
    pause: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onPause: true }),
        captured: keyOf({ onPauseCapture: true })
      }
    },
    play: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onPlay: true }),
        captured: keyOf({ onPlayCapture: true })
      }
    },
    playing: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onPlaying: true }),
        captured: keyOf({ onPlayingCapture: true })
      }
    },
    progress: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onProgress: true }),
        captured: keyOf({ onProgressCapture: true })
      }
    },
    rateChange: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onRateChange: true }),
        captured: keyOf({ onRateChangeCapture: true })
      }
    },
    reset: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onReset: true }),
        captured: keyOf({ onResetCapture: true })
      }
    },
    scroll: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onScroll: true }),
        captured: keyOf({ onScrollCapture: true })
      }
    },
    seeked: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onSeeked: true }),
        captured: keyOf({ onSeekedCapture: true })
      }
    },
    seeking: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onSeeking: true }),
        captured: keyOf({ onSeekingCapture: true })
      }
    },
    stalled: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onStalled: true }),
        captured: keyOf({ onStalledCapture: true })
      }
    },
    submit: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onSubmit: true }),
        captured: keyOf({ onSubmitCapture: true })
      }
    },
    suspend: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onSuspend: true }),
        captured: keyOf({ onSuspendCapture: true })
      }
    },
    timeUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTimeUpdate: true }),
        captured: keyOf({ onTimeUpdateCapture: true })
      }
    },
    touchCancel: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTouchCancel: true }),
        captured: keyOf({ onTouchCancelCapture: true })
      }
    },
    touchEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTouchEnd: true }),
        captured: keyOf({ onTouchEndCapture: true })
      }
    },
    touchMove: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTouchMove: true }),
        captured: keyOf({ onTouchMoveCapture: true })
      }
    },
    touchStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTouchStart: true }),
        captured: keyOf({ onTouchStartCapture: true })
      }
    },
    transitionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onTransitionEnd: true }),
        captured: keyOf({ onTransitionEndCapture: true })
      }
    },
    volumeChange: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onVolumeChange: true }),
        captured: keyOf({ onVolumeChangeCapture: true })
      }
    },
    waiting: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onWaiting: true }),
        captured: keyOf({ onWaitingCapture: true })
      }
    },
    wheel: {
      phasedRegistrationNames: {
        bubbled: keyOf({ onWheel: true }),
        captured: keyOf({ onWheelCapture: true })
      }
    }
  };

  var topLevelEventsToDispatchConfig = {
    topAbort: eventTypes.abort,
    topAnimationEnd: eventTypes.animationEnd,
    topAnimationIteration: eventTypes.animationIteration,
    topAnimationStart: eventTypes.animationStart,
    topBlur: eventTypes.blur,
    topCanPlay: eventTypes.canPlay,
    topCanPlayThrough: eventTypes.canPlayThrough,
    topClick: eventTypes.click,
    topContextMenu: eventTypes.contextMenu,
    topCopy: eventTypes.copy,
    topCut: eventTypes.cut,
    topDoubleClick: eventTypes.doubleClick,
    topDrag: eventTypes.drag,
    topDragEnd: eventTypes.dragEnd,
    topDragEnter: eventTypes.dragEnter,
    topDragExit: eventTypes.dragExit,
    topDragLeave: eventTypes.dragLeave,
    topDragOver: eventTypes.dragOver,
    topDragStart: eventTypes.dragStart,
    topDrop: eventTypes.drop,
    topDurationChange: eventTypes.durationChange,
    topEmptied: eventTypes.emptied,
    topEncrypted: eventTypes.encrypted,
    topEnded: eventTypes.ended,
    topError: eventTypes.error,
    topFocus: eventTypes.focus,
    topInput: eventTypes.input,
    topInvalid: eventTypes.invalid,
    topKeyDown: eventTypes.keyDown,
    topKeyPress: eventTypes.keyPress,
    topKeyUp: eventTypes.keyUp,
    topLoad: eventTypes.load,
    topLoadedData: eventTypes.loadedData,
    topLoadedMetadata: eventTypes.loadedMetadata,
    topLoadStart: eventTypes.loadStart,
    topMouseDown: eventTypes.mouseDown,
    topMouseMove: eventTypes.mouseMove,
    topMouseOut: eventTypes.mouseOut,
    topMouseOver: eventTypes.mouseOver,
    topMouseUp: eventTypes.mouseUp,
    topPaste: eventTypes.paste,
    topPause: eventTypes.pause,
    topPlay: eventTypes.play,
    topPlaying: eventTypes.playing,
    topProgress: eventTypes.progress,
    topRateChange: eventTypes.rateChange,
    topReset: eventTypes.reset,
    topScroll: eventTypes.scroll,
    topSeeked: eventTypes.seeked,
    topSeeking: eventTypes.seeking,
    topStalled: eventTypes.stalled,
    topSubmit: eventTypes.submit,
    topSuspend: eventTypes.suspend,
    topTimeUpdate: eventTypes.timeUpdate,
    topTouchCancel: eventTypes.touchCancel,
    topTouchEnd: eventTypes.touchEnd,
    topTouchMove: eventTypes.touchMove,
    topTouchStart: eventTypes.touchStart,
    topTransitionEnd: eventTypes.transitionEnd,
    topVolumeChange: eventTypes.volumeChange,
    topWaiting: eventTypes.waiting,
    topWheel: eventTypes.wheel
  };

  for (var type in topLevelEventsToDispatchConfig) {
    topLevelEventsToDispatchConfig[type].dependencies = [type];
  }

  var ON_CLICK_KEY = keyOf({ onClick: null });
  var onClickListeners = {};

  function getDictionaryKey(inst) {
    // Prevents V8 performance issue:
    // https://github.com/facebook/react/pull/7232
    return '.' + inst._rootNodeID;
  }

  var SimpleEventPlugin = {

    eventTypes: eventTypes,

    extractEvents: function extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
      if (!dispatchConfig) {
        return null;
      }
      var EventConstructor;
      switch (topLevelType) {
        case topLevelTypes.topAbort:
        case topLevelTypes.topCanPlay:
        case topLevelTypes.topCanPlayThrough:
        case topLevelTypes.topDurationChange:
        case topLevelTypes.topEmptied:
        case topLevelTypes.topEncrypted:
        case topLevelTypes.topEnded:
        case topLevelTypes.topError:
        case topLevelTypes.topInput:
        case topLevelTypes.topInvalid:
        case topLevelTypes.topLoad:
        case topLevelTypes.topLoadedData:
        case topLevelTypes.topLoadedMetadata:
        case topLevelTypes.topLoadStart:
        case topLevelTypes.topPause:
        case topLevelTypes.topPlay:
        case topLevelTypes.topPlaying:
        case topLevelTypes.topProgress:
        case topLevelTypes.topRateChange:
        case topLevelTypes.topReset:
        case topLevelTypes.topSeeked:
        case topLevelTypes.topSeeking:
        case topLevelTypes.topStalled:
        case topLevelTypes.topSubmit:
        case topLevelTypes.topSuspend:
        case topLevelTypes.topTimeUpdate:
        case topLevelTypes.topVolumeChange:
        case topLevelTypes.topWaiting:
          // HTML Events
          // @see http://www.w3.org/TR/html5/index.html#events-0
          EventConstructor = SyntheticEvent;
          break;
        case topLevelTypes.topKeyPress:
          // Firefox creates a keypress event for function keys too. This removes
          // the unwanted keypress events. Enter is however both printable and
          // non-printable. One would expect Tab to be as well (but it isn't).
          if (getEventCharCode(nativeEvent) === 0) {
            return null;
          }
        /* falls through */
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          EventConstructor = SyntheticKeyboardEvent;
          break;
        case topLevelTypes.topBlur:
        case topLevelTypes.topFocus:
          EventConstructor = SyntheticFocusEvent;
          break;
        case topLevelTypes.topClick:
          // Firefox creates a click event on right mouse clicks. This removes the
          // unwanted click events.
          if (nativeEvent.button === 2) {
            return null;
          }
        /* falls through */
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topDoubleClick:
        case topLevelTypes.topMouseDown:
        case topLevelTypes.topMouseMove:
        case topLevelTypes.topMouseOut:
        case topLevelTypes.topMouseOver:
        case topLevelTypes.topMouseUp:
          EventConstructor = SyntheticMouseEvent;
          break;
        case topLevelTypes.topDrag:
        case topLevelTypes.topDragEnd:
        case topLevelTypes.topDragEnter:
        case topLevelTypes.topDragExit:
        case topLevelTypes.topDragLeave:
        case topLevelTypes.topDragOver:
        case topLevelTypes.topDragStart:
        case topLevelTypes.topDrop:
          EventConstructor = SyntheticDragEvent;
          break;
        case topLevelTypes.topTouchCancel:
        case topLevelTypes.topTouchEnd:
        case topLevelTypes.topTouchMove:
        case topLevelTypes.topTouchStart:
          EventConstructor = SyntheticTouchEvent;
          break;
        case topLevelTypes.topAnimationEnd:
        case topLevelTypes.topAnimationIteration:
        case topLevelTypes.topAnimationStart:
          EventConstructor = SyntheticAnimationEvent;
          break;
        case topLevelTypes.topTransitionEnd:
          EventConstructor = SyntheticTransitionEvent;
          break;
        case topLevelTypes.topScroll:
          EventConstructor = SyntheticUIEvent;
          break;
        case topLevelTypes.topWheel:
          EventConstructor = SyntheticWheelEvent;
          break;
        case topLevelTypes.topCopy:
        case topLevelTypes.topCut:
        case topLevelTypes.topPaste:
          EventConstructor = SyntheticClipboardEvent;
          break;
      }
      !EventConstructor ? _prodInvariant('86', topLevelType) : void 0;
      var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    },

    didPutListener: function didPutListener(inst, registrationName, listener) {
      // Mobile Safari does not fire properly bubble click events on
      // non-interactive elements, which means delegated click listeners do not
      // fire. The workaround for this bug involves attaching an empty click
      // listener on the target node.
      if (registrationName === ON_CLICK_KEY) {
        var key = getDictionaryKey(inst);
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        if (!onClickListeners[key]) {
          onClickListeners[key] = EventListener.listen(node, 'click', emptyFunction);
        }
      }
    },

    willDeleteListener: function willDeleteListener(inst, registrationName) {
      if (registrationName === ON_CLICK_KEY) {
        var key = getDictionaryKey(inst);
        onClickListeners[key].remove();
        delete onClickListeners[key];
      }
    }

  };

  module.exports = SimpleEventPlugin;
});

var SimpleEventPlugin$1 = interopDefault(SimpleEventPlugin);

var require$$0$24 = Object.freeze({
  default: SimpleEventPlugin$1
});

var ReactDefaultInjection = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDefaultInjection
   */

  'use strict';

  var BeforeInputEventPlugin = interopDefault(require$$17);
  var ChangeEventPlugin = interopDefault(require$$16$2);
  var DefaultEventPluginOrder = interopDefault(require$$15);
  var EnterLeaveEventPlugin = interopDefault(require$$14);
  var HTMLDOMPropertyConfig = interopDefault(require$$13$1);
  var ReactComponentBrowserEnvironment = interopDefault(require$$12$2);
  var ReactDOMComponent = interopDefault(require$$11$1);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactDOMEmptyComponent = interopDefault(require$$9$2);
  var ReactDOMTreeTraversal = interopDefault(require$$8$4);
  var ReactDOMTextComponent = interopDefault(require$$7$5);
  var ReactDefaultBatchingStrategy = interopDefault(require$$6$8);
  var ReactEventListener = interopDefault(require$$5$10);
  var ReactInjection = interopDefault(require$$4$8);
  var ReactReconcileTransaction = interopDefault(require$$3$11);
  var SVGDOMPropertyConfig = interopDefault(require$$2$16);
  var SelectEventPlugin = interopDefault(require$$1$20);
  var SimpleEventPlugin = interopDefault(require$$0$24);

  var alreadyInjected = false;

  function inject() {
    if (alreadyInjected) {
      // TODO: This is currently true because these injections are shared between
      // the client and the server package. They should be built independently
      // and not share any injection state. Then this problem will be solved.
      return;
    }
    alreadyInjected = true;

    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);

    /**
     * Inject modules for resolving DOM hierarchy and plugin ordering.
     */
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
    ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);

    /**
     * Some important event plugins included by default (without having to require
     * them).
     */
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });

    ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);

    ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);

    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

    ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
      return new ReactDOMEmptyComponent(instantiate);
    });

    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);

    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
  }

  module.exports = {
    inject: inject
  };
});

var ReactDefaultInjection$1 = interopDefault(ReactDefaultInjection);
var inject = ReactDefaultInjection.inject;

var require$$12 = Object.freeze({
  default: ReactDefaultInjection$1,
  inject: inject
});

var ReactDOMContainerInfo = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMContainerInfo
   */

  'use strict';

  var validateDOMNesting = interopDefault(require$$0$20);

  var DOC_NODE_TYPE = 9;

  function ReactDOMContainerInfo(topLevelWrapper, node) {
    var info = {
      _topLevelWrapper: topLevelWrapper,
      _idCounter: 1,
      _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
      _node: node,
      _tag: node ? node.nodeName.toLowerCase() : null,
      _namespaceURI: node ? node.namespaceURI : null
    };
    if ("production" !== 'production') {}
    return info;
  }

  module.exports = ReactDOMContainerInfo;
});

var ReactDOMContainerInfo$1 = interopDefault(ReactDOMContainerInfo);

var require$$15$1 = Object.freeze({
  default: ReactDOMContainerInfo$1
});

var ReactDOMFeatureFlags = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMFeatureFlags
   */

  'use strict';

  var ReactDOMFeatureFlags = {
    useCreateElement: true
  };

  module.exports = ReactDOMFeatureFlags;
});

var ReactDOMFeatureFlags$1 = interopDefault(ReactDOMFeatureFlags);

var require$$14$3 = Object.freeze({
  default: ReactDOMFeatureFlags$1
});

var adler32 = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule adler32
   * 
   */

  'use strict';

  var MOD = 65521;

  // adler32 is not cryptographically strong, and is only used to sanity check that
  // markup generated on the server matches the markup generated on the client.
  // This implementation (a modified version of the SheetJS version) has been optimized
  // for our use case, at the expense of conforming to the adler32 specification
  // for non-ascii inputs.
  function adler32(data) {
    var a = 1;
    var b = 0;
    var i = 0;
    var l = data.length;
    var m = l & ~0x3;
    while (i < m) {
      var n = Math.min(i + 4096, m);
      for (; i < n; i += 4) {
        b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
      }
      a %= MOD;
      b %= MOD;
    }
    for (; i < l; i++) {
      b += a += data.charCodeAt(i);
    }
    a %= MOD;
    b %= MOD;
    return a | b << 16;
  }

  module.exports = adler32;
});

var adler32$1 = interopDefault(adler32);

var require$$0$27 = Object.freeze({
  default: adler32$1
});

var ReactMarkupChecksum = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactMarkupChecksum
   */

  'use strict';

  var adler32 = interopDefault(require$$0$27);

  var TAG_END = /\/?>/;
  var COMMENT_START = /^<\!\-\-/;

  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',

    /**
     * @param {string} markup Markup string
     * @return {string} Markup string with checksum attribute attached
     */
    addChecksumToMarkup: function addChecksumToMarkup(markup) {
      var checksum = adler32(markup);

      // Add checksum (handle both parent tags, comments and self-closing tags)
      if (COMMENT_START.test(markup)) {
        return markup;
      } else {
        return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
      }
    },

    /**
     * @param {string} markup to use
     * @param {DOMElement} element root React element
     * @returns {boolean} whether or not the markup is the same
     */
    canReuseMarkup: function canReuseMarkup(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };

  module.exports = ReactMarkupChecksum;
});

var ReactMarkupChecksum$1 = interopDefault(ReactMarkupChecksum);

var require$$9$3 = Object.freeze({
  default: ReactMarkupChecksum$1
});

var ReactMount = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactMount
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var DOMLazyTree = interopDefault(require$$20);
  var DOMProperty = interopDefault(require$$3$3);
  var ReactBrowserEventEmitter = interopDefault(require$$18$1);
  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactDOMContainerInfo = interopDefault(require$$15$1);
  var ReactDOMFeatureFlags = interopDefault(require$$14$3);
  var ReactElement = interopDefault(require$$13);
  var ReactFeatureFlags = interopDefault(require$$12$1);
  var ReactInstanceMap = interopDefault(require$$3$8);
  var ReactInstrumentation = interopDefault(require$$10);
  var ReactMarkupChecksum = interopDefault(require$$9$3);
  var ReactReconciler = interopDefault(require$$8$2);
  var ReactUpdateQueue = interopDefault(require$$7$4);
  var ReactUpdates = interopDefault(require$$6$3);

  var emptyObject = interopDefault(require$$5$3);
  var instantiateReactComponent = interopDefault(require$$4$6);
  var invariant = interopDefault(require$$1);
  var setInnerHTML = interopDefault(require$$2$10);
  var shouldUpdateReactComponent = interopDefault(require$$1$16);
  var warning = interopDefault(require$$0$1);

  var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
  var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;

  var ELEMENT_NODE_TYPE = 1;
  var DOC_NODE_TYPE = 9;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

  var instancesByReactRootID = {};

  /**
   * Finds the index of the first character
   * that's not common between the two given strings.
   *
   * @return {number} the index of the character where the strings diverge
   */
  function firstDifferenceIndex(string1, string2) {
    var minLen = Math.min(string1.length, string2.length);
    for (var i = 0; i < minLen; i++) {
      if (string1.charAt(i) !== string2.charAt(i)) {
        return i;
      }
    }
    return string1.length === string2.length ? -1 : minLen;
  }

  /**
   * @param {DOMElement|DOMDocument} container DOM element that may contain
   * a React component
   * @return {?*} DOM element that may have the reactRoot ID, or null.
   */
  function getReactRootElementInContainer(container) {
    if (!container) {
      return null;
    }

    if (container.nodeType === DOC_NODE_TYPE) {
      return container.documentElement;
    } else {
      return container.firstChild;
    }
  }

  function internalGetID(node) {
    // If node is something like a window, document, or text node, none of
    // which support attributes or a .getAttribute method, gracefully return
    // the empty string, as if the attribute were missing.
    return node.getAttribute && node.getAttribute(ATTR_NAME) || '';
  }

  /**
   * Mounts this component and inserts it into the DOM.
   *
   * @param {ReactComponent} componentInstance The instance to mount.
   * @param {DOMElement} container DOM element to mount into.
   * @param {ReactReconcileTransaction} transaction
   * @param {boolean} shouldReuseMarkup If true, do not insert markup
   */
  function mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
    var markerName;
    if (ReactFeatureFlags.logTopLevelRenders) {
      var wrappedElement = wrapperInstance._currentElement.props;
      var type = wrappedElement.type;
      markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
      console.time(markerName);
    }

    var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context, 0 /* parentDebugID */
    );

    if (markerName) {
      console.timeEnd(markerName);
    }

    wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
    ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
  }

  /**
   * Batched mount.
   *
   * @param {ReactComponent} componentInstance The instance to mount.
   * @param {DOMElement} container DOM element to mount into.
   * @param {boolean} shouldReuseMarkup If true, do not insert markup
   */
  function batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
    /* useCreateElement */
    !shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);
    transaction.perform(mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  }

  /**
   * Unmounts a component and removes it from the DOM.
   *
   * @param {ReactComponent} instance React component instance.
   * @param {DOMElement} container DOM element to unmount from.
   * @final
   * @internal
   * @see {ReactMount.unmountComponentAtNode}
   */
  function unmountComponentFromNode(instance, container, safely) {
    if ("production" !== 'production') {}
    ReactReconciler.unmountComponent(instance, safely);
    if ("production" !== 'production') {}

    if (container.nodeType === DOC_NODE_TYPE) {
      container = container.documentElement;
    }

    // http://jsperf.com/emptying-a-node
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }

  /**
   * True if the supplied DOM node has a direct React-rendered child that is
   * not a React root element. Useful for warning in `render`,
   * `unmountComponentAtNode`, etc.
   *
   * @param {?DOMElement} node The candidate DOM node.
   * @return {boolean} True if the DOM element contains a direct child that was
   * rendered by React but is not a root element.
   * @internal
   */
  function hasNonRootReactChild(container) {
    var rootEl = getReactRootElementInContainer(container);
    if (rootEl) {
      var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
      return !!(inst && inst._hostParent);
    }
  }

  /**
   * True if the supplied DOM node is a React DOM element and
   * it has been rendered by another copy of React.
   *
   * @param {?DOMElement} node The candidate DOM node.
   * @return {boolean} True if the DOM has been rendered by another copy of React
   * @internal
   */
  function nodeIsRenderedByOtherInstance(container) {
    var rootEl = getReactRootElementInContainer(container);
    return !!(rootEl && isReactNode(rootEl) && !ReactDOMComponentTree.getInstanceFromNode(rootEl));
  }

  /**
   * True if the supplied DOM node is a valid node element.
   *
   * @param {?DOMElement} node The candidate DOM node.
   * @return {boolean} True if the DOM is a valid DOM node.
   * @internal
   */
  function isValidContainer(node) {
    return !!(node && (node.nodeType === ELEMENT_NODE_TYPE || node.nodeType === DOC_NODE_TYPE || node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE));
  }

  /**
   * True if the supplied DOM node is a valid React node element.
   *
   * @param {?DOMElement} node The candidate DOM node.
   * @return {boolean} True if the DOM is a valid React DOM node.
   * @internal
   */
  function isReactNode(node) {
    return isValidContainer(node) && (node.hasAttribute(ROOT_ATTR_NAME) || node.hasAttribute(ATTR_NAME));
  }

  function getHostRootInstanceInContainer(container) {
    var rootEl = getReactRootElementInContainer(container);
    var prevHostInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
    return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
  }

  function getTopLevelWrapperInContainer(container) {
    var root = getHostRootInstanceInContainer(container);
    return root ? root._hostContainerInfo._topLevelWrapper : null;
  }

  /**
   * Temporary (?) hack so that we can store all top-level pending updates on
   * composites instead of having to worry about different types of components
   * here.
   */
  var topLevelRootCounter = 1;
  var TopLevelWrapper = function TopLevelWrapper() {
    this.rootID = topLevelRootCounter++;
  };
  TopLevelWrapper.prototype.isReactComponent = {};
  if ("production" !== 'production') {}
  TopLevelWrapper.prototype.render = function () {
    // this.props is actually a ReactElement
    return this.props;
  };

  /**
   * Mounting is the process of initializing a React component by creating its
   * representative DOM elements and inserting them into a supplied `container`.
   * Any prior content inside `container` is destroyed in the process.
   *
   *   ReactMount.render(
   *     component,
   *     document.getElementById('container')
   *   );
   *
   *   <div id="container">                   <-- Supplied `container`.
   *     <div data-reactid=".3">              <-- Rendered reactRoot of React
   *       // ...                                 component.
   *     </div>
   *   </div>
   *
   * Inside of `container`, the first element rendered is the "reactRoot".
   */
  var ReactMount = {

    TopLevelWrapper: TopLevelWrapper,

    /**
     * Used by devtools. The keys are not important.
     */
    _instancesByReactRootID: instancesByReactRootID,

    /**
     * This is a hook provided to support rendering React components while
     * ensuring that the apparent scroll position of its `container` does not
     * change.
     *
     * @param {DOMElement} container The `container` being rendered into.
     * @param {function} renderCallback This must be called once to do the render.
     */
    scrollMonitor: function scrollMonitor(container, renderCallback) {
      renderCallback();
    },

    /**
     * Take a component that's already mounted into the DOM and replace its props
     * @param {ReactComponent} prevComponent component instance already in the DOM
     * @param {ReactElement} nextElement component instance to render
     * @param {DOMElement} container container to render into
     * @param {?function} callback function triggered on completion
     */
    _updateRootComponent: function _updateRootComponent(prevComponent, nextElement, nextContext, container, callback) {
      ReactMount.scrollMonitor(container, function () {
        ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
        if (callback) {
          ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
        }
      });

      return prevComponent;
    },

    /**
     * Render a new component into the DOM. Hooked by hooks!
     *
     * @param {ReactElement} nextElement element to render
     * @param {DOMElement} container container to render into
     * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
     * @return {ReactComponent} nextComponent
     */
    _renderNewRootComponent: function _renderNewRootComponent(nextElement, container, shouldReuseMarkup, context) {
      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case.
      void 0;

      !isValidContainer(container) ? _prodInvariant('37') : void 0;

      ReactBrowserEventEmitter.ensureScrollValueMonitoring();
      var componentInstance = instantiateReactComponent(nextElement, false);

      // The initial render is synchronous but any updates that happen during
      // rendering, in componentWillMount or componentDidMount, will be batched
      // according to the current batching strategy.

      ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);

      var wrapperID = componentInstance._instance.rootID;
      instancesByReactRootID[wrapperID] = componentInstance;

      return componentInstance;
    },

    /**
     * Renders a React component into the DOM in the supplied `container`.
     *
     * If the React component was previously rendered into `container`, this will
     * perform an update on it and only mutate the DOM as necessary to reflect the
     * latest React component.
     *
     * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
     * @param {ReactElement} nextElement Component element to render.
     * @param {DOMElement} container DOM element to render into.
     * @param {?function} callback function triggered on completion
     * @return {ReactComponent} Component instance rendered in `container`.
     */
    renderSubtreeIntoContainer: function renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
      !(parentComponent != null && ReactInstanceMap.has(parentComponent)) ? _prodInvariant('38') : void 0;
      return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
    },

    _renderSubtreeIntoContainer: function _renderSubtreeIntoContainer(parentComponent, nextElement, container, callback) {
      ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
      !ReactElement.isValidElement(nextElement) ? _prodInvariant('39', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : void 0;

      void 0;

      var nextWrappedElement = ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);

      var nextContext;
      if (parentComponent) {
        var parentInst = ReactInstanceMap.get(parentComponent);
        nextContext = parentInst._processChildContext(parentInst._context);
      } else {
        nextContext = emptyObject;
      }

      var prevComponent = getTopLevelWrapperInContainer(container);

      if (prevComponent) {
        var prevWrappedElement = prevComponent._currentElement;
        var prevElement = prevWrappedElement.props;
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          var publicInst = prevComponent._renderedComponent.getPublicInstance();
          var updatedCallback = callback && function () {
            callback.call(publicInst);
          };
          ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
          return publicInst;
        } else {
          ReactMount.unmountComponentAtNode(container);
        }
      }

      var reactRootElement = getReactRootElementInContainer(container);
      var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
      var containerHasNonRootReactChild = hasNonRootReactChild(container);

      if ("production" !== 'production') {}

      var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
      var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
      if (callback) {
        callback.call(component);
      }
      return component;
    },

    /**
     * Renders a React component into the DOM in the supplied `container`.
     * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
     *
     * If the React component was previously rendered into `container`, this will
     * perform an update on it and only mutate the DOM as necessary to reflect the
     * latest React component.
     *
     * @param {ReactElement} nextElement Component element to render.
     * @param {DOMElement} container DOM element to render into.
     * @param {?function} callback function triggered on completion
     * @return {ReactComponent} Component instance rendered in `container`.
     */
    render: function render(nextElement, container, callback) {
      return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
    },

    /**
     * Unmounts and destroys the React component rendered in the `container`.
     * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
     *
     * @param {DOMElement} container DOM element containing a React component.
     * @return {boolean} True if a component was found in and unmounted from
     *                   `container`
     */
    unmountComponentAtNode: function unmountComponentAtNode(container) {
      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case. (Strictly speaking, unmounting won't cause a
      // render but we still don't expect to be in a render call here.)
      void 0;

      !isValidContainer(container) ? _prodInvariant('40') : void 0;

      if ("production" !== 'production') {}

      var prevComponent = getTopLevelWrapperInContainer(container);
      if (!prevComponent) {
        // Check if the node being unmounted was rendered by React, but isn't a
        // root node.
        var containerHasNonRootReactChild = hasNonRootReactChild(container);

        // Check if the container itself is a React root node.
        var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);

        if ("production" !== 'production') {}

        return false;
      }
      delete instancesByReactRootID[prevComponent._instance.rootID];
      ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
      return true;
    },

    _mountImageIntoNode: function _mountImageIntoNode(markup, container, instance, shouldReuseMarkup, transaction) {
      !isValidContainer(container) ? _prodInvariant('41') : void 0;

      if (shouldReuseMarkup) {
        var rootElement = getReactRootElementInContainer(container);
        if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
          ReactDOMComponentTree.precacheNode(instance, rootElement);
          return;
        } else {
          var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
          rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

          var rootMarkup = rootElement.outerHTML;
          rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);

          var normalizedMarkup = markup;
          if ("production" !== 'production') {}

          var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
          var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

          !(container.nodeType !== DOC_NODE_TYPE) ? _prodInvariant('42', difference) : void 0;

          if ("production" !== 'production') {}
        }
      }

      !(container.nodeType !== DOC_NODE_TYPE) ? _prodInvariant('43') : void 0;

      if (transaction.useCreateElement) {
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
        DOMLazyTree.insertTreeBefore(container, markup, null);
      } else {
        setInnerHTML(container, markup);
        ReactDOMComponentTree.precacheNode(instance, container.firstChild);
      }

      if ("production" !== 'production') {}
    }
  };

  module.exports = ReactMount;
});

var ReactMount$1 = interopDefault(ReactMount);

var require$$0$26 = Object.freeze({
  default: ReactMount$1
});

var getHostComponentFromComposite = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule getHostComponentFromComposite
   */

  'use strict';

  var ReactNodeTypes = interopDefault(require$$0$17);

  function getHostComponentFromComposite(inst) {
    var type;

    while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
      inst = inst._renderedComponent;
    }

    if (type === ReactNodeTypes.HOST) {
      return inst._renderedComponent;
    } else if (type === ReactNodeTypes.EMPTY) {
      return null;
    }
  }

  module.exports = getHostComponentFromComposite;
});

var getHostComponentFromComposite$1 = interopDefault(getHostComponentFromComposite);

var require$$2$17 = Object.freeze({
  default: getHostComponentFromComposite$1
});

var findDOMNode = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule findDOMNode
   */

  'use strict';

  var _prodInvariant = interopDefault(require$$6);

  var ReactCurrentOwner = interopDefault(require$$5$1);
  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactInstanceMap = interopDefault(require$$3$8);

  var getHostComponentFromComposite = interopDefault(require$$2$17);
  var invariant = interopDefault(require$$1);
  var warning = interopDefault(require$$0$1);

  /**
   * Returns the DOM node rendered by this element.
   *
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
   *
   * @param {ReactComponent|DOMElement} componentOrElement
   * @return {?DOMElement} The root node of this element.
   */
  function findDOMNode(componentOrElement) {
    if ("production" !== 'production') {}
    if (componentOrElement == null) {
      return null;
    }
    if (componentOrElement.nodeType === 1) {
      return componentOrElement;
    }

    var inst = ReactInstanceMap.get(componentOrElement);
    if (inst) {
      inst = getHostComponentFromComposite(inst);
      return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
    }

    if (typeof componentOrElement.render === 'function') {
      _prodInvariant('44');
    } else {
      _prodInvariant('45', Object.keys(componentOrElement));
    }
  }

  module.exports = findDOMNode;
});

var findDOMNode$1 = interopDefault(findDOMNode);

var require$$7$7 = Object.freeze({
  default: findDOMNode$1
});

var renderSubtreeIntoContainer = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
  * @providesModule renderSubtreeIntoContainer
  */

  'use strict';

  var ReactMount = interopDefault(require$$0$26);

  module.exports = ReactMount.renderSubtreeIntoContainer;
});

var renderSubtreeIntoContainer$1 = interopDefault(renderSubtreeIntoContainer);

var require$$5$12 = Object.freeze({
  default: renderSubtreeIntoContainer$1
});

var ReactDOMUnknownPropertyHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMUnknownPropertyHook
   */

  'use strict';

  var DOMProperty = interopDefault(require$$3$3);
  var EventPluginRegistry = interopDefault(require$$2$4);
  var ReactComponentTreeHook = interopDefault(require$$1$2);

  var warning = interopDefault(require$$0$1);

  if ("production" !== 'production') {}

  var warnUnknownProperties = function warnUnknownProperties(debugID, element) {
    var unknownProps = [];
    for (var key in element.props) {
      var isValid = validateProperty(element.type, key, debugID);
      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      void 0;
    } else if (unknownProps.length > 1) {
      void 0;
    }
  };

  function handleElement(debugID, element) {
    if (element == null || typeof element.type !== 'string') {
      return;
    }
    if (element.type.indexOf('-') >= 0 || element.props.is) {
      return;
    }
    warnUnknownProperties(debugID, element);
  }

  var ReactDOMUnknownPropertyHook = {
    onBeforeMountComponent: function onBeforeMountComponent(debugID, element) {
      handleElement(debugID, element);
    },
    onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
      handleElement(debugID, element);
    }
  };

  module.exports = ReactDOMUnknownPropertyHook;
});

interopDefault(ReactDOMUnknownPropertyHook);

var ReactDOMNullInputValuePropHook = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOMNullInputValuePropHook
   */

  'use strict';

  var ReactComponentTreeHook = interopDefault(require$$1$2);

  var warning = interopDefault(require$$0$1);

  var didWarnValueNull = false;

  function handleElement(debugID, element) {
    if (element == null) {
      return;
    }
    if (element.type !== 'input' && element.type !== 'textarea' && element.type !== 'select') {
      return;
    }
    if (element.props != null && element.props.value === null && !didWarnValueNull) {
      void 0;

      didWarnValueNull = true;
    }
  }

  var ReactDOMNullInputValuePropHook = {
    onBeforeMountComponent: function onBeforeMountComponent(debugID, element) {
      handleElement(debugID, element);
    },
    onBeforeUpdateComponent: function onBeforeUpdateComponent(debugID, element) {
      handleElement(debugID, element);
    }
  };

  module.exports = ReactDOMNullInputValuePropHook;
});

interopDefault(ReactDOMNullInputValuePropHook);

var ReactDOM$1 = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDOM
   */

  /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

  'use strict';

  var ReactDOMComponentTree = interopDefault(require$$4$3);
  var ReactDefaultInjection = interopDefault(require$$12);
  var ReactMount = interopDefault(require$$0$26);
  var ReactReconciler = interopDefault(require$$8$2);
  var ReactUpdates = interopDefault(require$$6$3);
  var ReactVersion = interopDefault(require$$8$1);

  var findDOMNode = interopDefault(require$$7$7);
  var getHostComponentFromComposite = interopDefault(require$$2$17);
  var renderSubtreeIntoContainer = interopDefault(require$$5$12);
  var warning = interopDefault(require$$0$1);

  ReactDefaultInjection.inject();

  var ReactDOM = {
    findDOMNode: findDOMNode,
    render: ReactMount.render,
    unmountComponentAtNode: ReactMount.unmountComponentAtNode,
    version: ReactVersion,

    /* eslint-disable camelcase */
    unstable_batchedUpdates: ReactUpdates.batchedUpdates,
    unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
  };

  // Inject the runtime into a devtools global hook regardless of browser.
  // Allows for debugging when the hook is injected on the page.
  /* eslint-enable camelcase */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
      ComponentTree: {
        getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
        getNodeFromInstance: function getNodeFromInstance(inst) {
          // inst is an internal instance (but could be a composite)
          if (inst._renderedComponent) {
            inst = getHostComponentFromComposite(inst);
          }
          if (inst) {
            return ReactDOMComponentTree.getNodeFromInstance(inst);
          } else {
            return null;
          }
        }
      },
      Mount: ReactMount,
      Reconciler: ReactReconciler
    });
  }

  if ("production" !== 'production') {}

  if ("production" !== 'production') {}

  module.exports = ReactDOM;
});

var ReactDOM$2 = interopDefault(ReactDOM$1);

var require$$0$4 = Object.freeze({
  default: ReactDOM$2
});

var index$2 = createCommonjsModule(function (module) {
  'use strict';

  module.exports = interopDefault(require$$0$4);
});

var ReactDOM = interopDefault(index$2);

// import './styles/index.styl';

var Wizard = function (_React$Component) {
  inherits(Wizard, _React$Component);

  function Wizard(props) {
    classCallCheck(this, Wizard);

    var _this = possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, props));

    _this._setupState(props, true);

    _this._moveStep = _this._moveStep.bind(_this);
    _this._printNav = _this._printNav.bind(_this);

    // Call onStepChange for first time
    _this.props.onStepChange(_this.state.currentPage);
    return _this;
  }

  createClass(Wizard, [{
    key: "_setupState",
    value: function _setupState(props) {
      var init = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var state = {
        currentPage: props.currentPage
      };

      if (init) {
        this.state = state;
      } else {
        this.setState(state);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this._setupState(nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var currentPage = this.state.currentPage;
      var children = this.props.children;

      return createElement(
        "div",
        { className: "steps-component" },
        createElement(
          "div",
          { className: "steps-content" },
          this._printSteps(children, currentPage),
          createElement(
            "ul",
            { className: "steps-navigator" },
            this._printStepsLabel(children, currentPage)
          )
        )
      );
    }
  }, {
    key: "_printStepsLabel",
    value: function _printStepsLabel(children, currentPage) {
      var _this2 = this;

      return Children.map(children, function (child, index) {
        var isActive = index + 1 === currentPage ? 'active-step' : '';
        var customNavigator = child.props.customNavigator;

        return createElement("li", { key: index, className: isActive, onClick: function onClick() {
            _this2._moveStep(index + 1);
          } });
      });
    }
  }, {
    key: "_printSteps",
    value: function _printSteps(children, currentPage) {
      var _this3 = this;

      return Children.map(children, function (child, index) {
        var stepNumber = index + 1;
        var isSibling = currentPage + 1 === stepNumber || currentPage - 1 === stepNumber;
        var settings = {
          key: index,
          index: index,
          stepNumber: stepNumber,
          isActive: currentPage === stepNumber,
          isSibling: _this3.props.mountOnlySiblings ? isSibling : true
        };
        return (
          // child.type === <Step/>
          createElement(
            child.type,
            settings,
            child.props.children
          )
        );
      });
    }
  }, {
    key: "_printNav",
    value: function _printNav(currentPage, childrenLength) {
      var _this4 = this;

      return createElement(
        "div",
        { className: "steps-nav" },
        createElement(
          "button",
          {
            className: "steps-nav-prev",
            onClick: function onClick() {
              _this4._moveStep(currentPage - 1);
            },
            disabled: currentPage === 1
          },
          this.props.prevButton
        ),
        createElement(
          "button",
          {
            className: "steps-nav-next",
            onClick: function onClick() {
              _this4._moveStep(currentPage + 1);
            },
            disabled: currentPage === childrenLength
          },
          this.props.nextButton
        )
      );
    }
  }, {
    key: "_moveStep",
    value: function _moveStep(step) {
      if (this.props.stepShouldChange()) {
        this.setState({
          currentPage: step
        });
        this.props.onStepChange(step);
      }
    }
  }]);
  return Wizard;
}(Component);

Wizard.propTypes = {
  currentPage: PropTypes.number,
  stepShouldChange: PropTypes.func,
  onStepChange: PropTypes.func,
  mountOnlySiblings: PropTypes.bool
};

Wizard.defaultProps = {
  currentPage: 1,
  stepShouldChange: function stepShouldChange() {
    return true;
  },
  onStepChange: function onStepChange() {},
  prevButton: 'Prev',
  nextButton: 'Next',
  mountOnlySiblings: false
};

var Page = function Page(_ref) {
  var stepNumber = _ref.stepNumber;
  var isActive = _ref.isActive;
  var isSibling = _ref.isSibling;
  var children = _ref.children;
  return React.createElement(
    'div',
    {
      className: 'step-item step-' + stepNumber + ' active-' + isActive,
      style: { display: isActive ? 'block' : 'none' }
    },
    isActive || isSibling ? children : ''
  );
};

// import OAuthIO from 'oauthio-web';

var OAuthdWeb = function () {
  function OAuthdWeb(_ref) {
    var key = _ref.key;
    var url = _ref.url;
    classCallCheck(this, OAuthdWeb);

    OAuth.initialize(key);
    OAuth.setOAuthdURL(url);
  }

  createClass(OAuthdWeb, [{
    key: 'popup',
    value: function popup(provider) {
      console.log('[OAuthdWeb::popup]: ', provider);

      var state = '1938342'; // FIXXME!

      return new Promise(function (resolve, reject) {
        OAuth.popup(provider, { state: state }).done(function (service) {
          // console.log('[OAuthdWeb::popup]: success: ', service);
          var token = {
            access_token: service.access_token,
            oauth_token: service.oauth_token,
            oauth_token_secret: service.oauth_token_secret
          };

          service.me().done(function (me) {
            // console.log('[OAuthdWeb::popup]: me: ', me);
            resolve({
              token: token,
              profile: me
            });
          }).fail(function (e) {
            console.error('[OAuthdWeb::popup]: me failed: ', provider);
            reject(e);
          });
        }).fail(function (e) {
          console.error('[OAuthdWeb::popup]: popup failed: ', provider);
          reject(e);
        });
      });
    }
  }]);
  return OAuthdWeb;
}();

var OAuthdIdentityCard = function (_React$Component) {
  inherits(OAuthdIdentityCard, _React$Component);

  function OAuthdIdentityCard(props) {
    classCallCheck(this, OAuthdIdentityCard);

    var _this = possibleConstructorReturn(this, (OAuthdIdentityCard.__proto__ || Object.getPrototypeOf(OAuthdIdentityCard)).call(this, props));

    _this._oauthdWeb = null;

    if (props.oauthdKey && props.oauthdUrl) {
      _this._oauthdWeb = new OAuthdWeb({ key: props.oauthdKey, url: props.oauthdUrl });
    }

    _this._getIdentity = _this._getIdentity.bind(_this);

    _this._setupState(props, true);
    return _this;
  }

  createClass(OAuthdIdentityCard, [{
    key: '_setupState',
    value: function _setupState(props) {
      var init = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var state = {
        identity: props.identity,
        error: null
      };

      if (init) {
        this.state = state;
      } else {
        this.setState(state);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._setupState(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var icon = _props.icon;
      var label = _props.label;
      var description = _props.description;
      var _state = this.state;
      var identity = _state.identity;
      var error = _state.error;


      if (error) {
        return createElement(
          'p',
          null,
          JSON.stringify(error, null, 4)
        );
      }

      if (!identity) {
        return createElement(
          'div',
          { className: 'identity-card--disconnected' },
          createElement(
            'a',
            { className: 'rs-icon-btn', onClick: this._getIdentity },
            createElement(
              'div',
              { className: 'rs-icon-btn__icon__wrapper' },
              createElement(
                'div',
                { className: 'rs-icon-btn__icon__wrapper__padding' },
                createElement('div', { className: 'rs-icon-btn__icon ' + icon })
              )
            ),
            createElement(
              'div',
              { className: 'rs-icon-btn__label' },
              createElement(
                'div',
                null,
                label
              )
            )
          ),
          createElement(
            'p',
            { className: 'identity-card--disconnected__description' },
            description
          )
        );
      } else {
        var _state$identity$profi = this.state.identity.profile;
        var alias = _state$identity$profi.alias;
        var avatar = _state$identity$profi.avatar;


        return createElement(
          'div',
          { className: 'identity-card' },
          createElement(
            'div',
            { className: 'identity-card__avatar' },
            createElement('img', { src: avatar })
          ),
          createElement(
            'div',
            { className: 'identity-card__alias' },
            alias
          ),
          createElement('div', { className: 'identity-card__icon -rs-icon-slack' })
        );
      }
    }
  }, {
    key: '_getIdentity',
    value: function _getIdentity() {
      var _this2 = this;

      var _props2 = this.props;
      var providerId = _props2.providerId;
      var onConnected = _props2.onConnected;


      var popup = this._oauthdWeb.popup(providerId).then(function (identity) {
        _this2.setState({ identity: identity });
        if (onConnected) {
          onConnected(providerId, identity);
        } else {
          console.log('[OAuthdIdentityCard] No handler for "onConnected". Add the property <OAuthdIdentityCard onConnected={myHandler} ...> if you want to handle the event. We happily continue, just wanted to let you know...');
        }
      }).catch(function (err) {
        _this2.setState({ error: err });
      });
    }
  }]);
  return OAuthdIdentityCard;
}(Component);

OAuthdIdentityCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  onConnected: PropTypes.func,
  providerId: PropTypes.string,
  oauthdKey: PropTypes.string,
  oauthdUrl: PropTypes.string
};

// import './styles/index.styl';

var ConnectedFirstUse = function (_React$Component) {
  inherits(ConnectedFirstUse, _React$Component);

  function ConnectedFirstUse(props) {
    classCallCheck(this, ConnectedFirstUse);

    var _this = possibleConstructorReturn(this, (ConnectedFirstUse.__proto__ || Object.getPrototypeOf(ConnectedFirstUse)).call(this, props));

    _this.state = {
      currentPage: 1,
      twitterIdentity: null,
      angellistIdentity: null,
      slackIdentity: null
    };

    _this._next = _this._next.bind(_this);
    _this._skip = _this._skip.bind(_this);
    _this._run = _this._run.bind(_this);
    _this._onIdentityConnected = _this._onIdentityConnected.bind(_this);
    return _this;
  }

  createClass(ConnectedFirstUse, [{
    key: 'render',
    value: function render() {
      var _state = this.state;
      var currentPage = _state.currentPage;
      var twitterIdentity = _state.twitterIdentity;
      var angellistIdentity = _state.angellistIdentity;
      var slackIdentity = _state.slackIdentity;


      return createElement(
        Wizard,
        { currentPage: currentPage },
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-connected' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Welcome to your ',
                createElement(
                  'strong',
                  null,
                  'Connected'
                ),
                ' Sift!'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(
                'p',
                null,
                'Inbox priorization and personal assistant based on social signals'
              ),
              createElement('div', { className: 'page__header-icon -rs-icon-dashboard' })
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'To get started connect 1 or more social accounts.s'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._next, className: 'rs-btn--green' },
                'Next'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Social Account Connections'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(
                'div',
                { className: 'connected__federated-buttons' },
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-twitter',
                  label: 'Connect Twitter',
                  onConnected: this._onIdentityConnected,
                  providerId: 'twitter',
                  oauthdKey: 'rPmv9yO50VpLRlTqrfMyRoZ7Pbo',
                  oauthdUrl: 'https://oauth.io'
                }),
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-angellist',
                  label: 'Connect AngelList',
                  onConnected: this._onIdentityConnected,
                  providerId: 'twitter',
                  oauthdKey: 'rPmv9yO50VpLRlTqrfMyRoZ7Pbo',
                  oauthdUrl: 'https://oauth.io'
                })
              )
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'To get started connect 1 or more social accounts.'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._next, className: 'rs-btn--green', disabled: true },
                'Next'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Social Account Connections'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(
                'div',
                { className: 'connected__federated-buttons' },
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-twitter',
                  label: 'Connect Twitter',
                  description: 'Improve results by connecting to Twitter.',
                  identity: twitterIdentity,
                  onConnected: this._onIdentityConnected,
                  providerId: 'twitter',
                  oauthdKey: 'rPmv9yO50VpLRlTqrfMyRoZ7Pbo',
                  oauthdUrl: 'https://oauth.io'
                }),
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-angellist',
                  label: 'Connect AngelList',
                  description: 'Improve results by connecting to AngelList.',
                  identity: angellistIdentity,
                  onConnected: this._onIdentityConnected,
                  providerId: 'twitter',
                  oauthdKey: 'rPmv9yO50VpLRlTqrfMyRoZ7Pbo',
                  oauthdUrl: 'https://oauth.io'
                })
              )
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'Optionally connect another social account to prioritize your inbox.'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._skip, className: 'rs-btn--green' },
                'Next'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Social Account Connections'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(
                'div',
                { className: 'connected__federated-buttons' },
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-twitter',
                  label: 'Connect Twitter',
                  description: 'Improve results by connecting to Twitter.',
                  identity: twitterIdentity
                }),
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-angellist',
                  label: 'Connect AngelList',
                  description: 'Improve results by connecting to AngelList.',
                  identity: angellistIdentity
                })
              )
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'Super! Your Twitter and AngelList accounts are now linked!'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._next, className: 'rs-btn--green' },
                'Next'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Here is how it looks'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(
                'div',
                { className: 'connected__federated-buttons' },
                createElement('img', { width: '70%', src: 'https://static.redsift.io/assets/redsift-web/images/-rs-image-crx-taxi-screenshot.png' })
              )
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'Data insights insid of Gmail helping you prioritize!'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._next, className: 'rs-btn--green' },
                'Next'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'Connected Bot on Slack'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              createElement(OAuthdIdentityCard, {
                icon: '-rs-icon-slack',
                label: 'Connect Slack',
                onConnected: this._onIdentityConnected,
                providerId: 'slack',
                oauthdKey: 'rPmv9yO50VpLRlTqrfMyRoZ7Pbo',
                oauthdUrl: 'https://oauth.io'
              })
            ),
            createElement(
              'p',
              { className: 'page__description' },
              'Connect with Slack and use our bot to discover insights by asking questions.'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._next, className: 'rs-btn--green' },
                'Skip'
              )
            )
          )
        ),
        createElement(
          Page,
          null,
          createElement(
            'div',
            { className: 'page' },
            createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' }),
            createElement(
              'div',
              { className: 'page__heading' },
              createElement(
                'h3',
                null,
                'You\'re ready to roll'
              )
            ),
            createElement(
              'div',
              { className: 'page__content' },
              slackIdentity ? createElement(
                'div',
                { className: 'connected__federated-buttons' },
                createElement(OAuthdIdentityCard, {
                  icon: '-rs-icon-slack',
                  identity: slackIdentity
                })
              ) : createElement('div', { className: 'page__header-icon -rs-icon-redsift-red' })
            ),
            slackIdentity ? createElement(
              'p',
              { className: 'page__description' },
              'Great! You can now run the ',
              createElement(
                'strong',
                null,
                'Connected'
              ),
              ' Sift in Gmail and Slack.'
            ) : createElement(
              'p',
              { className: 'page__description' },
              'Great! You can now run the ',
              createElement(
                'strong',
                null,
                'Connected'
              ),
              ' Sift in Gmail.'
            ),
            createElement(
              'div',
              { className: 'page__buttons' },
              createElement(
                'button',
                { onClick: this._run, className: 'rs-btn--green' },
                'Run'
              )
            )
          )
        )
      );
    }
  }, {
    key: '_next',
    value: function _next() {
      var currentPage = this.state.currentPage + 1;
      this.setState({ currentPage: currentPage });
    }
  }, {
    key: '_skip',
    value: function _skip() {
      var currentPage = this.state.currentPage + 2;
      this.setState({ currentPage: currentPage });
    }
  }, {
    key: '_run',
    value: function _run() {
      alert('RUNNING SIFT!');
    }
  }, {
    key: '_onIdentityConnected',
    value: function _onIdentityConnected(providerId, identity) {
      console.log('connected OAuth: ', providerId, identity);
      this.setState(defineProperty({}, providerId + 'Identity', identity));

      this._next();
    }
  }]);
  return ConnectedFirstUse;
}(Component);

ReactDOM.render(createElement(ConnectedFirstUse, null), document.getElementById('content'));

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=first-use.umd-es2015.js.map
