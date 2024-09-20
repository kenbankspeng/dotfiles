"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/xml2js/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/xml2js/lib/defaults.js"(exports2) {
    (function() {
      exports2.defaults = {
        "0.1": {
          explicitCharkey: false,
          trim: true,
          normalize: true,
          normalizeTags: false,
          attrkey: "@",
          charkey: "#",
          explicitArray: false,
          ignoreAttrs: false,
          mergeAttrs: false,
          explicitRoot: false,
          validator: null,
          xmlns: false,
          explicitChildren: false,
          childkey: "@@",
          charsAsChildren: false,
          includeWhiteChars: false,
          async: false,
          strict: true,
          attrNameProcessors: null,
          attrValueProcessors: null,
          tagNameProcessors: null,
          valueProcessors: null,
          emptyTag: ""
        },
        "0.2": {
          explicitCharkey: false,
          trim: false,
          normalize: false,
          normalizeTags: false,
          attrkey: "$",
          charkey: "_",
          explicitArray: true,
          ignoreAttrs: false,
          mergeAttrs: false,
          explicitRoot: true,
          validator: null,
          xmlns: false,
          explicitChildren: false,
          preserveChildrenOrder: false,
          childkey: "$$",
          charsAsChildren: false,
          includeWhiteChars: false,
          async: false,
          strict: true,
          attrNameProcessors: null,
          attrValueProcessors: null,
          tagNameProcessors: null,
          valueProcessors: null,
          rootName: "root",
          xmldec: {
            "version": "1.0",
            "encoding": "UTF-8",
            "standalone": true
          },
          doctype: null,
          renderOpts: {
            "pretty": true,
            "indent": "  ",
            "newline": "\n"
          },
          headless: false,
          chunkSize: 1e4,
          emptyTag: "",
          cdata: false
        }
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/Utility.js
var require_Utility = __commonJS({
  "node_modules/xmlbuilder/lib/Utility.js"(exports2, module2) {
    (function() {
      var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
      assign = function() {
        var i, key, len, source, sources, target;
        target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (isFunction(Object.assign)) {
          Object.assign.apply(null, arguments);
        } else {
          for (i = 0, len = sources.length; i < len; i++) {
            source = sources[i];
            if (source != null) {
              for (key in source) {
                if (!hasProp.call(source, key))
                  continue;
                target[key] = source[key];
              }
            }
          }
        }
        return target;
      };
      isFunction = function(val) {
        return !!val && Object.prototype.toString.call(val) === "[object Function]";
      };
      isObject = function(val) {
        var ref;
        return !!val && ((ref = typeof val) === "function" || ref === "object");
      };
      isArray = function(val) {
        if (isFunction(Array.isArray)) {
          return Array.isArray(val);
        } else {
          return Object.prototype.toString.call(val) === "[object Array]";
        }
      };
      isEmpty = function(val) {
        var key;
        if (isArray(val)) {
          return !val.length;
        } else {
          for (key in val) {
            if (!hasProp.call(val, key))
              continue;
            return false;
          }
          return true;
        }
      };
      isPlainObject = function(val) {
        var ctor, proto;
        return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
      };
      getValue = function(obj) {
        if (isFunction(obj.valueOf)) {
          return obj.valueOf();
        } else {
          return obj;
        }
      };
      module2.exports.assign = assign;
      module2.exports.isFunction = isFunction;
      module2.exports.isObject = isObject;
      module2.exports.isArray = isArray;
      module2.exports.isEmpty = isEmpty;
      module2.exports.isPlainObject = isPlainObject;
      module2.exports.getValue = getValue;
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMImplementation.js"(exports2, module2) {
    (function() {
      var XMLDOMImplementation;
      module2.exports = XMLDOMImplementation = function() {
        function XMLDOMImplementation2() {
        }
        XMLDOMImplementation2.prototype.hasFeature = function(feature, version) {
          return true;
        };
        XMLDOMImplementation2.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.createHTMLDocument = function(title) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLDOMImplementation2.prototype.getFeature = function(feature, version) {
          throw new Error("This DOM method is not implemented.");
        };
        return XMLDOMImplementation2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js"(exports2, module2) {
    (function() {
      var XMLDOMErrorHandler;
      module2.exports = XMLDOMErrorHandler = function() {
        function XMLDOMErrorHandler2() {
        }
        XMLDOMErrorHandler2.prototype.handleError = function(error) {
          throw new Error(error);
        };
        return XMLDOMErrorHandler2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMStringList.js"(exports2, module2) {
    (function() {
      var XMLDOMStringList;
      module2.exports = XMLDOMStringList = function() {
        function XMLDOMStringList2(arr) {
          this.arr = arr || [];
        }
        Object.defineProperty(XMLDOMStringList2.prototype, "length", {
          get: function() {
            return this.arr.length;
          }
        });
        XMLDOMStringList2.prototype.item = function(index) {
          return this.arr[index] || null;
        };
        XMLDOMStringList2.prototype.contains = function(str) {
          return this.arr.indexOf(str) !== -1;
        };
        return XMLDOMStringList2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDOMConfiguration.js"(exports2, module2) {
    (function() {
      var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
      XMLDOMErrorHandler = require_XMLDOMErrorHandler();
      XMLDOMStringList = require_XMLDOMStringList();
      module2.exports = XMLDOMConfiguration = function() {
        function XMLDOMConfiguration2() {
          var clonedSelf;
          this.defaultParams = {
            "canonical-form": false,
            "cdata-sections": false,
            "comments": false,
            "datatype-normalization": false,
            "element-content-whitespace": true,
            "entities": true,
            "error-handler": new XMLDOMErrorHandler(),
            "infoset": true,
            "validate-if-schema": false,
            "namespaces": true,
            "namespace-declarations": true,
            "normalize-characters": false,
            "schema-location": "",
            "schema-type": "",
            "split-cdata-sections": true,
            "validate": false,
            "well-formed": true
          };
          this.params = clonedSelf = Object.create(this.defaultParams);
        }
        Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
          get: function() {
            return new XMLDOMStringList(Object.keys(this.defaultParams));
          }
        });
        XMLDOMConfiguration2.prototype.getParameter = function(name) {
          if (this.params.hasOwnProperty(name)) {
            return this.params[name];
          } else {
            return null;
          }
        };
        XMLDOMConfiguration2.prototype.canSetParameter = function(name, value) {
          return true;
        };
        XMLDOMConfiguration2.prototype.setParameter = function(name, value) {
          if (value != null) {
            return this.params[name] = value;
          } else {
            return delete this.params[name];
          }
        };
        return XMLDOMConfiguration2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = __commonJS({
  "node_modules/xmlbuilder/lib/NodeType.js"(exports2, module2) {
    (function() {
      module2.exports = {
        Element: 1,
        Attribute: 2,
        Text: 3,
        CData: 4,
        EntityReference: 5,
        EntityDeclaration: 6,
        ProcessingInstruction: 7,
        Comment: 8,
        Document: 9,
        DocType: 10,
        DocumentFragment: 11,
        NotationDeclaration: 12,
        Declaration: 201,
        Raw: 202,
        AttributeDeclaration: 203,
        ElementDeclaration: 204,
        Dummy: 205
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = __commonJS({
  "node_modules/xmlbuilder/lib/XMLAttribute.js"(exports2, module2) {
    (function() {
      var NodeType, XMLAttribute, XMLNode;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module2.exports = XMLAttribute = function() {
        function XMLAttribute2(parent, name, value) {
          this.parent = parent;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.value = this.stringify.attValue(value);
          this.type = NodeType.Attribute;
          this.isId = false;
          this.schemaTypeInfo = null;
        }
        Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLAttribute2.prototype, "specified", {
          get: function() {
            return true;
          }
        });
        XMLAttribute2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLAttribute2.prototype.toString = function(options) {
          return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
        };
        XMLAttribute2.prototype.debugInfo = function(name) {
          name = name || this.name;
          if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else {
            return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
          }
        };
        XMLAttribute2.prototype.isEqualNode = function(node) {
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.value !== this.value) {
            return false;
          }
          return true;
        };
        return XMLAttribute2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"(exports2, module2) {
    (function() {
      var XMLNamedNodeMap;
      module2.exports = XMLNamedNodeMap = function() {
        function XMLNamedNodeMap2(nodes) {
          this.nodes = nodes;
        }
        Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
          get: function() {
            return Object.keys(this.nodes).length || 0;
          }
        });
        XMLNamedNodeMap2.prototype.clone = function() {
          return this.nodes = null;
        };
        XMLNamedNodeMap2.prototype.getNamedItem = function(name) {
          return this.nodes[name];
        };
        XMLNamedNodeMap2.prototype.setNamedItem = function(node) {
          var oldNode;
          oldNode = this.nodes[node.nodeName];
          this.nodes[node.nodeName] = node;
          return oldNode || null;
        };
        XMLNamedNodeMap2.prototype.removeNamedItem = function(name) {
          var oldNode;
          oldNode = this.nodes[name];
          delete this.nodes[name];
          return oldNode || null;
        };
        XMLNamedNodeMap2.prototype.item = function(index) {
          return this.nodes[Object.keys(this.nodes)[index]] || null;
        };
        XMLNamedNodeMap2.prototype.getNamedItemNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap2.prototype.setNamedItemNS = function(node) {
          throw new Error("This DOM method is not implemented.");
        };
        XMLNamedNodeMap2.prototype.removeNamedItemNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented.");
        };
        return XMLNamedNodeMap2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = __commonJS({
  "node_modules/xmlbuilder/lib/XMLElement.js"(exports2, module2) {
    (function() {
      var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLAttribute = require_XMLAttribute();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module2.exports = XMLElement = function(superClass) {
        extend(XMLElement2, superClass);
        function XMLElement2(parent, name, attributes) {
          var child, j, len, ref1;
          XMLElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing element name. " + this.debugInfo());
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.Element;
          this.attribs = {};
          this.schemaTypeInfo = null;
          if (attributes != null) {
            this.attribute(attributes);
          }
          if (parent.type === NodeType.Document) {
            this.isRoot = true;
            this.documentObject = parent;
            parent.rootObject = this;
            if (parent.children) {
              ref1 = parent.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (child.type === NodeType.DocType) {
                  child.name = this.name;
                  break;
                }
              }
            }
          }
        }
        Object.defineProperty(XMLElement2.prototype, "tagName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "prefix", {
          get: function() {
            return "";
          }
        });
        Object.defineProperty(XMLElement2.prototype, "localName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLElement2.prototype, "id", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "className", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "classList", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLElement2.prototype, "attributes", {
          get: function() {
            if (!this.attributeMap || !this.attributeMap.nodes) {
              this.attributeMap = new XMLNamedNodeMap(this.attribs);
            }
            return this.attributeMap;
          }
        });
        XMLElement2.prototype.clone = function() {
          var att, attName, clonedSelf, ref1;
          clonedSelf = Object.create(this);
          if (clonedSelf.isRoot) {
            clonedSelf.documentObject = null;
          }
          clonedSelf.attribs = {};
          ref1 = this.attribs;
          for (attName in ref1) {
            if (!hasProp.call(ref1, attName))
              continue;
            att = ref1[attName];
            clonedSelf.attribs[attName] = att.clone();
          }
          clonedSelf.children = [];
          this.children.forEach(function(child) {
            var clonedChild;
            clonedChild = child.clone();
            clonedChild.parent = clonedSelf;
            return clonedSelf.children.push(clonedChild);
          });
          return clonedSelf;
        };
        XMLElement2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName))
                continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLElement2.prototype.removeAttribute = function(name) {
          var attName, j, len;
          if (name == null) {
            throw new Error("Missing attribute name. " + this.debugInfo());
          }
          name = getValue(name);
          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              attName = name[j];
              delete this.attribs[attName];
            }
          } else {
            delete this.attribs[name];
          }
          return this;
        };
        XMLElement2.prototype.toString = function(options) {
          return this.options.writer.element(this, this.options.writer.filterOptions(options));
        };
        XMLElement2.prototype.att = function(name, value) {
          return this.attribute(name, value);
        };
        XMLElement2.prototype.a = function(name, value) {
          return this.attribute(name, value);
        };
        XMLElement2.prototype.getAttribute = function(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].value;
          } else {
            return null;
          }
        };
        XMLElement2.prototype.setAttribute = function(name, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNode = function(name) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name];
          } else {
            return null;
          }
        };
        XMLElement2.prototype.setAttributeNode = function(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.removeAttributeNode = function(oldAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagName = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.removeAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setAttributeNodeNS = function(newAttr) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.hasAttribute = function(name) {
          return this.attribs.hasOwnProperty(name);
        };
        XMLElement2.prototype.hasAttributeNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setIdAttribute = function(name, isId) {
          if (this.attribs.hasOwnProperty(name)) {
            return this.attribs[name].isId;
          } else {
            return isId;
          }
        };
        XMLElement2.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.setIdAttributeNode = function(idAttr, isId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagName = function(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.getElementsByClassName = function(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLElement2.prototype.isEqualNode = function(node) {
          var i, j, ref1;
          if (!XMLElement2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.namespaceURI !== this.namespaceURI) {
            return false;
          }
          if (node.prefix !== this.prefix) {
            return false;
          }
          if (node.localName !== this.localName) {
            return false;
          }
          if (node.attribs.length !== this.attribs.length) {
            return false;
          }
          for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
            if (!this.attribs[i].isEqualNode(node.attribs[i])) {
              return false;
            }
          }
          return true;
        };
        return XMLElement2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = __commonJS({
  "node_modules/xmlbuilder/lib/XMLCharacterData.js"(exports2, module2) {
    (function() {
      var XMLCharacterData, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      module2.exports = XMLCharacterData = function(superClass) {
        extend(XMLCharacterData2, superClass);
        function XMLCharacterData2(parent) {
          XMLCharacterData2.__super__.constructor.call(this, parent);
          this.value = "";
        }
        Object.defineProperty(XMLCharacterData2.prototype, "data", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "length", {
          get: function() {
            return this.value.length;
          }
        });
        Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
          get: function() {
            return this.value;
          },
          set: function(value) {
            return this.value = value || "";
          }
        });
        XMLCharacterData2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLCharacterData2.prototype.substringData = function(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.appendData = function(arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.insertData = function(offset, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.deleteData = function(offset, count) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.replaceData = function(offset, count, arg) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLCharacterData2.prototype.isEqualNode = function(node) {
          if (!XMLCharacterData2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.data !== this.data) {
            return false;
          }
          return true;
        };
        return XMLCharacterData2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = __commonJS({
  "node_modules/xmlbuilder/lib/XMLCData.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCData, XMLCharacterData, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLCData = function(superClass) {
        extend(XMLCData2, superClass);
        function XMLCData2(parent, text) {
          XMLCData2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing CDATA text. " + this.debugInfo());
          }
          this.name = "#cdata-section";
          this.type = NodeType.CData;
          this.value = this.stringify.cdata(text);
        }
        XMLCData2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLCData2.prototype.toString = function(options) {
          return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
        };
        return XMLCData2;
      }(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = __commonJS({
  "node_modules/xmlbuilder/lib/XMLComment.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLComment, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLComment = function(superClass) {
        extend(XMLComment2, superClass);
        function XMLComment2(parent, text) {
          XMLComment2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing comment text. " + this.debugInfo());
          }
          this.name = "#comment";
          this.type = NodeType.Comment;
          this.value = this.stringify.comment(text);
        }
        XMLComment2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLComment2.prototype.toString = function(options) {
          return this.options.writer.comment(this, this.options.writer.filterOptions(options));
        };
        return XMLComment2;
      }(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDeclaration, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDeclaration = function(superClass) {
        extend(XMLDeclaration2, superClass);
        function XMLDeclaration2(parent, version, encoding, standalone) {
          var ref;
          XMLDeclaration2.__super__.constructor.call(this, parent);
          if (isObject(version)) {
            ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
          }
          if (!version) {
            version = "1.0";
          }
          this.type = NodeType.Declaration;
          this.version = this.stringify.xmlVersion(version);
          if (encoding != null) {
            this.encoding = this.stringify.xmlEncoding(encoding);
          }
          if (standalone != null) {
            this.standalone = this.stringify.xmlStandalone(standalone);
          }
        }
        XMLDeclaration2.prototype.toString = function(options) {
          return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
        };
        return XMLDeclaration2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDAttList, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDAttList = function(superClass) {
        extend(XMLDTDAttList2, superClass);
        function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          XMLDTDAttList2.__super__.constructor.call(this, parent);
          if (elementName == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (attributeName == null) {
            throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
          }
          if (!attributeType) {
            throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
          }
          if (!defaultValueType) {
            throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
          }
          if (defaultValueType.indexOf("#") !== 0) {
            defaultValueType = "#" + defaultValueType;
          }
          if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
            throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
            throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
          }
          this.elementName = this.stringify.name(elementName);
          this.type = NodeType.AttributeDeclaration;
          this.attributeName = this.stringify.name(attributeName);
          this.attributeType = this.stringify.dtdAttType(attributeType);
          if (defaultValue) {
            this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
          }
          this.defaultValueType = defaultValueType;
        }
        XMLDTDAttList2.prototype.toString = function(options) {
          return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDAttList2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDEntity, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDEntity = function(superClass) {
        extend(XMLDTDEntity2, superClass);
        function XMLDTDEntity2(parent, pe, name, value) {
          XMLDTDEntity2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD entity name. " + this.debugInfo(name));
          }
          if (value == null) {
            throw new Error("Missing DTD entity value. " + this.debugInfo(name));
          }
          this.pe = !!pe;
          this.name = this.stringify.name(name);
          this.type = NodeType.EntityDeclaration;
          if (!isObject(value)) {
            this.value = this.stringify.dtdEntityValue(value);
            this.internal = true;
          } else {
            if (!value.pubID && !value.sysID) {
              throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
            }
            if (value.pubID && !value.sysID) {
              throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
            }
            this.internal = false;
            if (value.pubID != null) {
              this.pubID = this.stringify.dtdPubID(value.pubID);
            }
            if (value.sysID != null) {
              this.sysID = this.stringify.dtdSysID(value.sysID);
            }
            if (value.nData != null) {
              this.nData = this.stringify.dtdNData(value.nData);
            }
            if (this.pe && this.nData) {
              throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
            }
          }
        }
        Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
          get: function() {
            return this.nData || null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
          get: function() {
            return null;
          }
        });
        XMLDTDEntity2.prototype.toString = function(options) {
          return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDEntity2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDElement, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDElement = function(superClass) {
        extend(XMLDTDElement2, superClass);
        function XMLDTDElement2(parent, name, value) {
          XMLDTDElement2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD element name. " + this.debugInfo());
          }
          if (!value) {
            value = "(#PCDATA)";
          }
          if (Array.isArray(value)) {
            value = "(" + value.join(",") + ")";
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.ElementDeclaration;
          this.value = this.stringify.dtdElementValue(value);
        }
        XMLDTDElement2.prototype.toString = function(options) {
          return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDElement2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDNotation, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDTDNotation = function(superClass) {
        extend(XMLDTDNotation2, superClass);
        function XMLDTDNotation2(parent, name, value) {
          XMLDTDNotation2.__super__.constructor.call(this, parent);
          if (name == null) {
            throw new Error("Missing DTD notation name. " + this.debugInfo(name));
          }
          if (!value.pubID && !value.sysID) {
            throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
          }
          this.name = this.stringify.name(name);
          this.type = NodeType.NotationDeclaration;
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
        }
        Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        XMLDTDNotation2.prototype.toString = function(options) {
          return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
        };
        return XMLDTDNotation2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocType.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isObject = require_Utility().isObject;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLNamedNodeMap = require_XMLNamedNodeMap();
      module2.exports = XMLDocType = function(superClass) {
        extend(XMLDocType2, superClass);
        function XMLDocType2(parent, pubID, sysID) {
          var child, i, len, ref, ref1, ref2;
          XMLDocType2.__super__.constructor.call(this, parent);
          this.type = NodeType.DocType;
          if (parent.children) {
            ref = parent.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.Element) {
                this.name = child.name;
                break;
              }
            }
          }
          this.documentObject = parent;
          if (isObject(pubID)) {
            ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
          }
          if (sysID == null) {
            ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
          }
          if (pubID != null) {
            this.pubID = this.stringify.dtdPubID(pubID);
          }
          if (sysID != null) {
            this.sysID = this.stringify.dtdSysID(sysID);
          }
        }
        Object.defineProperty(XMLDocType2.prototype, "entities", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.EntityDeclaration && !child.pe) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "notations", {
          get: function() {
            var child, i, len, nodes, ref;
            nodes = {};
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.NotationDeclaration) {
                nodes[child.name] = child;
              }
            }
            return new XMLNamedNodeMap(nodes);
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "publicId", {
          get: function() {
            return this.pubID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "systemId", {
          get: function() {
            return this.sysID;
          }
        });
        Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        XMLDocType2.prototype.element = function(name, value) {
          var child;
          child = new XMLDTDElement(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var child;
          child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.entity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, false, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.pEntity = function(name, value) {
          var child;
          child = new XMLDTDEntity(this, true, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.notation = function(name, value) {
          var child;
          child = new XMLDTDNotation(this, name, value);
          this.children.push(child);
          return this;
        };
        XMLDocType2.prototype.toString = function(options) {
          return this.options.writer.docType(this, this.options.writer.filterOptions(options));
        };
        XMLDocType2.prototype.ele = function(name, value) {
          return this.element(name, value);
        };
        XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
        };
        XMLDocType2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocType2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocType2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        XMLDocType2.prototype.up = function() {
          return this.root() || this.documentObject;
        };
        XMLDocType2.prototype.isEqualNode = function(node) {
          if (!XMLDocType2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.name !== this.name) {
            return false;
          }
          if (node.publicId !== this.publicId) {
            return false;
          }
          if (node.systemId !== this.systemId) {
            return false;
          }
          return true;
        };
        return XMLDocType2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = __commonJS({
  "node_modules/xmlbuilder/lib/XMLRaw.js"(exports2, module2) {
    (function() {
      var NodeType, XMLNode, XMLRaw, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLNode = require_XMLNode();
      module2.exports = XMLRaw = function(superClass) {
        extend(XMLRaw2, superClass);
        function XMLRaw2(parent, text) {
          XMLRaw2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing raw text. " + this.debugInfo());
          }
          this.type = NodeType.Raw;
          this.value = this.stringify.raw(text);
        }
        XMLRaw2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLRaw2.prototype.toString = function(options) {
          return this.options.writer.raw(this, this.options.writer.filterOptions(options));
        };
        return XMLRaw2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = __commonJS({
  "node_modules/xmlbuilder/lib/XMLText.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLText, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLText = function(superClass) {
        extend(XMLText2, superClass);
        function XMLText2(parent, text) {
          XMLText2.__super__.constructor.call(this, parent);
          if (text == null) {
            throw new Error("Missing element text. " + this.debugInfo());
          }
          this.name = "#text";
          this.type = NodeType.Text;
          this.value = this.stringify.text(text);
        }
        Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
          get: function() {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        Object.defineProperty(XMLText2.prototype, "wholeText", {
          get: function() {
            var next, prev, str;
            str = "";
            prev = this.previousSibling;
            while (prev) {
              str = prev.data + str;
              prev = prev.previousSibling;
            }
            str += this.data;
            next = this.nextSibling;
            while (next) {
              str = str + next.data;
              next = next.nextSibling;
            }
            return str;
          }
        });
        XMLText2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLText2.prototype.toString = function(options) {
          return this.options.writer.text(this, this.options.writer.filterOptions(options));
        };
        XMLText2.prototype.splitText = function(offset) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLText2.prototype.replaceWholeText = function(content) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLText2;
      }(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = __commonJS({
  "node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports2, module2) {
    (function() {
      var NodeType, XMLCharacterData, XMLProcessingInstruction, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLCharacterData = require_XMLCharacterData();
      module2.exports = XMLProcessingInstruction = function(superClass) {
        extend(XMLProcessingInstruction2, superClass);
        function XMLProcessingInstruction2(parent, target, value) {
          XMLProcessingInstruction2.__super__.constructor.call(this, parent);
          if (target == null) {
            throw new Error("Missing instruction target. " + this.debugInfo());
          }
          this.type = NodeType.ProcessingInstruction;
          this.target = this.stringify.insTarget(target);
          this.name = this.target;
          if (value) {
            this.value = this.stringify.insValue(value);
          }
        }
        XMLProcessingInstruction2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLProcessingInstruction2.prototype.toString = function(options) {
          return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
        };
        XMLProcessingInstruction2.prototype.isEqualNode = function(node) {
          if (!XMLProcessingInstruction2.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) {
            return false;
          }
          if (node.target !== this.target) {
            return false;
          }
          return true;
        };
        return XMLProcessingInstruction2;
      }(XMLCharacterData);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDummy.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDummy, XMLNode, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      module2.exports = XMLDummy = function(superClass) {
        extend(XMLDummy2, superClass);
        function XMLDummy2(parent) {
          XMLDummy2.__super__.constructor.call(this, parent);
          this.type = NodeType.Dummy;
        }
        XMLDummy2.prototype.clone = function() {
          return Object.create(this);
        };
        XMLDummy2.prototype.toString = function(options) {
          return "";
        };
        return XMLDummy2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNodeList.js"(exports2, module2) {
    (function() {
      var XMLNodeList;
      module2.exports = XMLNodeList = function() {
        function XMLNodeList2(nodes) {
          this.nodes = nodes;
        }
        Object.defineProperty(XMLNodeList2.prototype, "length", {
          get: function() {
            return this.nodes.length || 0;
          }
        });
        XMLNodeList2.prototype.clone = function() {
          return this.nodes = null;
        };
        XMLNodeList2.prototype.item = function(index) {
          return this.nodes[index] || null;
        };
        return XMLNodeList2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = __commonJS({
  "node_modules/xmlbuilder/lib/DocumentPosition.js"(exports2, module2) {
    (function() {
      module2.exports = {
        Disconnected: 1,
        Preceding: 2,
        Following: 4,
        Contains: 8,
        ContainedBy: 16,
        ImplementationSpecific: 32
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = __commonJS({
  "node_modules/xmlbuilder/lib/XMLNode.js"(exports2, module2) {
    (function() {
      var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
      ref1 = require_Utility(), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
      XMLElement = null;
      XMLCData = null;
      XMLComment = null;
      XMLDeclaration = null;
      XMLDocType = null;
      XMLRaw = null;
      XMLText = null;
      XMLProcessingInstruction = null;
      XMLDummy = null;
      NodeType = null;
      XMLNodeList = null;
      XMLNamedNodeMap = null;
      DocumentPosition = null;
      module2.exports = XMLNode = function() {
        function XMLNode2(parent1) {
          this.parent = parent1;
          if (this.parent) {
            this.options = this.parent.options;
            this.stringify = this.parent.stringify;
          }
          this.value = null;
          this.children = [];
          this.baseURI = null;
          if (!XMLElement) {
            XMLElement = require_XMLElement();
            XMLCData = require_XMLCData();
            XMLComment = require_XMLComment();
            XMLDeclaration = require_XMLDeclaration();
            XMLDocType = require_XMLDocType();
            XMLRaw = require_XMLRaw();
            XMLText = require_XMLText();
            XMLProcessingInstruction = require_XMLProcessingInstruction();
            XMLDummy = require_XMLDummy();
            NodeType = require_NodeType();
            XMLNodeList = require_XMLNodeList();
            XMLNamedNodeMap = require_XMLNamedNodeMap();
            DocumentPosition = require_DocumentPosition();
          }
        }
        Object.defineProperty(XMLNode2.prototype, "nodeName", {
          get: function() {
            return this.name;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeType", {
          get: function() {
            return this.type;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nodeValue", {
          get: function() {
            return this.value;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "childNodes", {
          get: function() {
            if (!this.childNodeList || !this.childNodeList.nodes) {
              this.childNodeList = new XMLNodeList(this.children);
            }
            return this.childNodeList;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "firstChild", {
          get: function() {
            return this.children[0] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "lastChild", {
          get: function() {
            return this.children[this.children.length - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "previousSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i - 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "nextSibling", {
          get: function() {
            var i;
            i = this.parent.children.indexOf(this);
            return this.parent.children[i + 1] || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
          get: function() {
            return this.document() || null;
          }
        });
        Object.defineProperty(XMLNode2.prototype, "textContent", {
          get: function() {
            var child, j, len, ref2, str;
            if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
              str = "";
              ref2 = this.children;
              for (j = 0, len = ref2.length; j < len; j++) {
                child = ref2[j];
                if (child.textContent) {
                  str += child.textContent;
                }
              }
              return str;
            } else {
              return null;
            }
          },
          set: function(value) {
            throw new Error("This DOM method is not implemented." + this.debugInfo());
          }
        });
        XMLNode2.prototype.setParent = function(parent) {
          var child, j, len, ref2, results;
          this.parent = parent;
          if (parent) {
            this.options = parent.options;
            this.stringify = parent.stringify;
          }
          ref2 = this.children;
          results = [];
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            results.push(child.setParent(this));
          }
          return results;
        };
        XMLNode2.prototype.element = function(name, attributes, text) {
          var childNode, item, j, k, key, lastChild, len, len1, ref2, ref3, val;
          lastChild = null;
          if (attributes === null && text == null) {
            ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
          }
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
          }
          if (name != null) {
            name = getValue(name);
          }
          if (Array.isArray(name)) {
            for (j = 0, len = name.length; j < len; j++) {
              item = name[j];
              lastChild = this.element(item);
            }
          } else if (isFunction(name)) {
            lastChild = this.element(name.apply());
          } else if (isObject(name)) {
            for (key in name) {
              if (!hasProp.call(name, key))
                continue;
              val = name[key];
              if (isFunction(val)) {
                val = val.apply();
              }
              if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
              } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                lastChild = this.dummy();
              } else if (isObject(val) && isEmpty(val)) {
                lastChild = this.element(key);
              } else if (!this.options.keepNullNodes && val == null) {
                lastChild = this.dummy();
              } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                for (k = 0, len1 = val.length; k < len1; k++) {
                  item = val[k];
                  childNode = {};
                  childNode[key] = item;
                  lastChild = this.element(childNode);
                }
              } else if (isObject(val)) {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                  lastChild = this.element(val);
                } else {
                  lastChild = this.element(key);
                  lastChild.element(val);
                }
              } else {
                lastChild = this.element(key, val);
              }
            }
          } else if (!this.options.keepNullNodes && text === null) {
            lastChild = this.dummy();
          } else {
            if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
              lastChild = this.text(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
              lastChild = this.cdata(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
              lastChild = this.comment(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
              lastChild = this.raw(text);
            } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
              lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
            } else {
              lastChild = this.node(name, attributes, text);
            }
          }
          if (lastChild == null) {
            throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
          }
          return lastChild;
        };
        XMLNode2.prototype.insertBefore = function(name, attributes, text) {
          var child, i, newChild, refChild, removed;
          if (name != null ? name.type : void 0) {
            newChild = name;
            refChild = attributes;
            newChild.setParent(this);
            if (refChild) {
              i = children.indexOf(refChild);
              removed = children.splice(i);
              children.push(newChild);
              Array.prototype.push.apply(children, removed);
            } else {
              children.push(newChild);
            }
            return newChild;
          } else {
            if (this.isRoot) {
              throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
            }
            i = this.parent.children.indexOf(this);
            removed = this.parent.children.splice(i);
            child = this.parent.element(name, attributes, text);
            Array.prototype.push.apply(this.parent.children, removed);
            return child;
          }
        };
        XMLNode2.prototype.insertAfter = function(name, attributes, text) {
          var child, i, removed;
          if (this.isRoot) {
            throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
          }
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.element(name, attributes, text);
          Array.prototype.push.apply(this.parent.children, removed);
          return child;
        };
        XMLNode2.prototype.remove = function() {
          var i, ref2;
          if (this.isRoot) {
            throw new Error("Cannot remove the root element. " + this.debugInfo());
          }
          i = this.parent.children.indexOf(this);
          [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref2 = [])), ref2;
          return this.parent;
        };
        XMLNode2.prototype.node = function(name, attributes, text) {
          var child, ref2;
          if (name != null) {
            name = getValue(name);
          }
          attributes || (attributes = {});
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
          }
          child = new XMLElement(this, name, attributes);
          if (text != null) {
            child.text(text);
          }
          this.children.push(child);
          return child;
        };
        XMLNode2.prototype.text = function(value) {
          var child;
          if (isObject(value)) {
            this.element(value);
          }
          child = new XMLText(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.cdata = function(value) {
          var child;
          child = new XMLCData(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.comment = function(value) {
          var child;
          child = new XMLComment(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.commentBefore = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.commentAfter = function(value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.comment(value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.raw = function(value) {
          var child;
          child = new XMLRaw(this, value);
          this.children.push(child);
          return this;
        };
        XMLNode2.prototype.dummy = function() {
          var child;
          child = new XMLDummy(this);
          return child;
        };
        XMLNode2.prototype.instruction = function(target, value) {
          var insTarget, insValue, instruction, j, len;
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (j = 0, len = target.length; j < len; j++) {
              insTarget = target[j];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget))
                continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            instruction = new XMLProcessingInstruction(this, target, value);
            this.children.push(instruction);
          }
          return this;
        };
        XMLNode2.prototype.instructionBefore = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.instructionAfter = function(target, value) {
          var child, i, removed;
          i = this.parent.children.indexOf(this);
          removed = this.parent.children.splice(i + 1);
          child = this.parent.instruction(target, value);
          Array.prototype.push.apply(this.parent.children, removed);
          return this;
        };
        XMLNode2.prototype.declaration = function(version, encoding, standalone) {
          var doc, xmldec;
          doc = this.document();
          xmldec = new XMLDeclaration(doc, version, encoding, standalone);
          if (doc.children.length === 0) {
            doc.children.unshift(xmldec);
          } else if (doc.children[0].type === NodeType.Declaration) {
            doc.children[0] = xmldec;
          } else {
            doc.children.unshift(xmldec);
          }
          return doc.root() || doc;
        };
        XMLNode2.prototype.dtd = function(pubID, sysID) {
          var child, doc, doctype, i, j, k, len, len1, ref2, ref3;
          doc = this.document();
          doctype = new XMLDocType(doc, pubID, sysID);
          ref2 = doc.children;
          for (i = j = 0, len = ref2.length; j < len; i = ++j) {
            child = ref2[i];
            if (child.type === NodeType.DocType) {
              doc.children[i] = doctype;
              return doctype;
            }
          }
          ref3 = doc.children;
          for (i = k = 0, len1 = ref3.length; k < len1; i = ++k) {
            child = ref3[i];
            if (child.isRoot) {
              doc.children.splice(i, 0, doctype);
              return doctype;
            }
          }
          doc.children.push(doctype);
          return doctype;
        };
        XMLNode2.prototype.up = function() {
          if (this.isRoot) {
            throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          }
          return this.parent;
        };
        XMLNode2.prototype.root = function() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node.rootObject;
            } else if (node.isRoot) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.document = function() {
          var node;
          node = this;
          while (node) {
            if (node.type === NodeType.Document) {
              return node;
            } else {
              node = node.parent;
            }
          }
        };
        XMLNode2.prototype.end = function(options) {
          return this.document().end(options);
        };
        XMLNode2.prototype.prev = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i < 1) {
            throw new Error("Already at the first node. " + this.debugInfo());
          }
          return this.parent.children[i - 1];
        };
        XMLNode2.prototype.next = function() {
          var i;
          i = this.parent.children.indexOf(this);
          if (i === -1 || i === this.parent.children.length - 1) {
            throw new Error("Already at the last node. " + this.debugInfo());
          }
          return this.parent.children[i + 1];
        };
        XMLNode2.prototype.importDocument = function(doc) {
          var clonedRoot;
          clonedRoot = doc.root().clone();
          clonedRoot.parent = this;
          clonedRoot.isRoot = false;
          this.children.push(clonedRoot);
          return this;
        };
        XMLNode2.prototype.debugInfo = function(name) {
          var ref2, ref3;
          name = name || this.name;
          if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) {
            return "";
          } else if (name == null) {
            return "parent: <" + this.parent.name + ">";
          } else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) {
            return "node: <" + name + ">";
          } else {
            return "node: <" + name + ">, parent: <" + this.parent.name + ">";
          }
        };
        XMLNode2.prototype.ele = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.doc = function() {
          return this.document();
        };
        XMLNode2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLNode2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLNode2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLNode2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLNode2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLNode2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLNode2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLNode2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLNode2.prototype.u = function() {
          return this.up();
        };
        XMLNode2.prototype.importXMLBuilder = function(doc) {
          return this.importDocument(doc);
        };
        XMLNode2.prototype.replaceChild = function(newChild, oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.removeChild = function(oldChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.appendChild = function(newChild) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.hasChildNodes = function() {
          return this.children.length !== 0;
        };
        XMLNode2.prototype.cloneNode = function(deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.normalize = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isSupported = function(feature, version) {
          return true;
        };
        XMLNode2.prototype.hasAttributes = function() {
          return this.attribs.length !== 0;
        };
        XMLNode2.prototype.compareDocumentPosition = function(other) {
          var ref, res;
          ref = this;
          if (ref === other) {
            return 0;
          } else if (this.document() !== other.document()) {
            res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
            if (Math.random() < 0.5) {
              res |= DocumentPosition.Preceding;
            } else {
              res |= DocumentPosition.Following;
            }
            return res;
          } else if (ref.isAncestor(other)) {
            return DocumentPosition.Contains | DocumentPosition.Preceding;
          } else if (ref.isDescendant(other)) {
            return DocumentPosition.Contains | DocumentPosition.Following;
          } else if (ref.isPreceding(other)) {
            return DocumentPosition.Preceding;
          } else {
            return DocumentPosition.Following;
          }
        };
        XMLNode2.prototype.isSameNode = function(other) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.lookupPrefix = function(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isDefaultNamespace = function(namespaceURI) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.lookupNamespaceURI = function(prefix) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.isEqualNode = function(node) {
          var i, j, ref2;
          if (node.nodeType !== this.nodeType) {
            return false;
          }
          if (node.children.length !== this.children.length) {
            return false;
          }
          for (i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) {
            if (!this.children[i].isEqualNode(node.children[i])) {
              return false;
            }
          }
          return true;
        };
        XMLNode2.prototype.getFeature = function(feature, version) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.setUserData = function(key, data, handler) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.getUserData = function(key) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLNode2.prototype.contains = function(other) {
          if (!other) {
            return false;
          }
          return other === this || this.isDescendant(other);
        };
        XMLNode2.prototype.isDescendant = function(node) {
          var child, isDescendantChild, j, len, ref2;
          ref2 = this.children;
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            if (node === child) {
              return true;
            }
            isDescendantChild = child.isDescendant(node);
            if (isDescendantChild) {
              return true;
            }
          }
          return false;
        };
        XMLNode2.prototype.isAncestor = function(node) {
          return node.isDescendant(this);
        };
        XMLNode2.prototype.isPreceding = function(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos < thisPos;
          }
        };
        XMLNode2.prototype.isFollowing = function(node) {
          var nodePos, thisPos;
          nodePos = this.treePosition(node);
          thisPos = this.treePosition(this);
          if (nodePos === -1 || thisPos === -1) {
            return false;
          } else {
            return nodePos > thisPos;
          }
        };
        XMLNode2.prototype.treePosition = function(node) {
          var found, pos;
          pos = 0;
          found = false;
          this.foreachTreeNode(this.document(), function(childNode) {
            pos++;
            if (!found && childNode === node) {
              return found = true;
            }
          });
          if (found) {
            return pos;
          } else {
            return -1;
          }
        };
        XMLNode2.prototype.foreachTreeNode = function(node, func) {
          var child, j, len, ref2, res;
          node || (node = this.document());
          ref2 = node.children;
          for (j = 0, len = ref2.length; j < len; j++) {
            child = ref2[j];
            if (res = func(child)) {
              return res;
            } else {
              res = this.foreachTreeNode(child, func);
              if (res) {
                return res;
              }
            }
          }
        };
        return XMLNode2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStringifier.js"(exports2, module2) {
    (function() {
      var XMLStringifier, bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      }, hasProp = {}.hasOwnProperty;
      module2.exports = XMLStringifier = function() {
        function XMLStringifier2(options) {
          this.assertLegalName = bind(this.assertLegalName, this);
          this.assertLegalChar = bind(this.assertLegalChar, this);
          var key, ref, value;
          options || (options = {});
          this.options = options;
          if (!this.options.version) {
            this.options.version = "1.0";
          }
          ref = options.stringify || {};
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this[key] = value;
          }
        }
        XMLStringifier2.prototype.name = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalName("" + val || "");
        };
        XMLStringifier2.prototype.text = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.textEscape("" + val || ""));
        };
        XMLStringifier2.prototype.cdata = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          val = val.replace("]]>", "]]]]><![CDATA[>");
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.comment = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/--/)) {
            throw new Error("Comment text cannot contain double-hypen: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.raw = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return "" + val || "";
        };
        XMLStringifier2.prototype.attValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar(this.attEscape(val = "" + val || ""));
        };
        XMLStringifier2.prototype.insTarget = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.insValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (val.match(/\?>/)) {
            throw new Error("Invalid processing instruction value: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.xmlVersion = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/1\.[0-9]+/)) {
            throw new Error("Invalid version number: " + val);
          }
          return val;
        };
        XMLStringifier2.prototype.xmlEncoding = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          val = "" + val || "";
          if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
            throw new Error("Invalid encoding: " + val);
          }
          return this.assertLegalChar(val);
        };
        XMLStringifier2.prototype.xmlStandalone = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          if (val) {
            return "yes";
          } else {
            return "no";
          }
        };
        XMLStringifier2.prototype.dtdPubID = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdSysID = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdElementValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdAttType = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdAttDefault = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdEntityValue = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.dtdNData = function(val) {
          if (this.options.noValidation) {
            return val;
          }
          return this.assertLegalChar("" + val || "");
        };
        XMLStringifier2.prototype.convertAttKey = "@";
        XMLStringifier2.prototype.convertPIKey = "?";
        XMLStringifier2.prototype.convertTextKey = "#text";
        XMLStringifier2.prototype.convertCDataKey = "#cdata";
        XMLStringifier2.prototype.convertCommentKey = "#comment";
        XMLStringifier2.prototype.convertRawKey = "#raw";
        XMLStringifier2.prototype.assertLegalChar = function(str) {
          var regex, res;
          if (this.options.noValidation) {
            return str;
          }
          regex = "";
          if (this.options.version === "1.0") {
            regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
          } else if (this.options.version === "1.1") {
            regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
            if (res = str.match(regex)) {
              throw new Error("Invalid character in string: " + str + " at index " + res.index);
            }
          }
          return str;
        };
        XMLStringifier2.prototype.assertLegalName = function(str) {
          var regex;
          if (this.options.noValidation) {
            return str;
          }
          this.assertLegalChar(str);
          regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
          if (!str.match(regex)) {
            throw new Error("Invalid character in name");
          }
          return str;
        };
        XMLStringifier2.prototype.textEscape = function(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        };
        XMLStringifier2.prototype.attEscape = function(str) {
          var ampregex;
          if (this.options.noValidation) {
            return str;
          }
          ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
          return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        };
        return XMLStringifier2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = __commonJS({
  "node_modules/xmlbuilder/lib/WriterState.js"(exports2, module2) {
    (function() {
      module2.exports = {
        None: 0,
        OpenTag: 1,
        InsideTag: 2,
        CloseTag: 3
      };
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = __commonJS({
  "node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
      assign = require_Utility().assign;
      NodeType = require_NodeType();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLElement = require_XMLElement();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDummy = require_XMLDummy();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDNotation = require_XMLDTDNotation();
      WriterState = require_WriterState();
      module2.exports = XMLWriterBase = function() {
        function XMLWriterBase2(options) {
          var key, ref, value;
          options || (options = {});
          this.options = options;
          ref = options.writer || {};
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this["_" + key] = this[key];
            this[key] = value;
          }
        }
        XMLWriterBase2.prototype.filterOptions = function(options) {
          var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          options || (options = {});
          options = assign({}, this.options, options);
          filteredOptions = {
            writer: this
          };
          filteredOptions.pretty = options.pretty || false;
          filteredOptions.allowEmpty = options.allowEmpty || false;
          filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
          filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
          filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
          filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
          filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
          if (filteredOptions.spaceBeforeSlash === true) {
            filteredOptions.spaceBeforeSlash = " ";
          }
          filteredOptions.suppressPrettyCount = 0;
          filteredOptions.user = {};
          filteredOptions.state = WriterState.None;
          return filteredOptions;
        };
        XMLWriterBase2.prototype.indent = function(node, options, level) {
          var indentLevel;
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else if (options.pretty) {
            indentLevel = (level || 0) + options.offset + 1;
            if (indentLevel > 0) {
              return new Array(indentLevel).join(options.indent);
            }
          }
          return "";
        };
        XMLWriterBase2.prototype.endline = function(node, options, level) {
          if (!options.pretty || options.suppressPrettyCount) {
            return "";
          } else {
            return options.newline;
          }
        };
        XMLWriterBase2.prototype.attribute = function(att, options, level) {
          var r;
          this.openAttribute(att, options, level);
          r = " " + att.name + '="' + att.value + '"';
          this.closeAttribute(att, options, level);
          return r;
        };
        XMLWriterBase2.prototype.cdata = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<![CDATA[";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += "]]>" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.comment = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!-- ";
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += " -->" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.declaration = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?xml";
          options.state = WriterState.InsideTag;
          r += ' version="' + node.version + '"';
          if (node.encoding != null) {
            r += ' encoding="' + node.encoding + '"';
          }
          if (node.standalone != null) {
            r += ' standalone="' + node.standalone + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.docType = function(node, options, level) {
          var child, i, len, r, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          r += "<!DOCTYPE " + node.root().name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.children.length > 0) {
            r += " [";
            r += this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += "]";
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.element = function(node, options, level) {
          var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
          level || (level = 0);
          prettySuppressed = false;
          r = "";
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r += this.indent(node, options, level) + "<" + node.name;
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            r += this.attribute(att, options, level);
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
          })) {
            if (options.allowEmpty) {
              r += ">";
              options.state = WriterState.CloseTag;
              r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
              options.state = WriterState.CloseTag;
              r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
            r += ">";
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            r += this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            r += "</" + node.name + ">" + this.endline(node, options, level);
          } else {
            if (options.dontPrettyTextNodes) {
              ref1 = node.children;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
                if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
                  options.suppressPrettyCount++;
                  prettySuppressed = true;
                  break;
                }
              }
            }
            r += ">" + this.endline(node, options, level);
            options.state = WriterState.InsideTag;
            ref2 = node.children;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              child = ref2[j];
              r += this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            r += this.indent(node, options, level) + "</" + node.name + ">";
            if (prettySuppressed) {
              options.suppressPrettyCount--;
            }
            r += this.endline(node, options, level);
            options.state = WriterState.None;
          }
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.writeChildNode = function(node, options, level) {
          switch (node.type) {
            case NodeType.CData:
              return this.cdata(node, options, level);
            case NodeType.Comment:
              return this.comment(node, options, level);
            case NodeType.Element:
              return this.element(node, options, level);
            case NodeType.Raw:
              return this.raw(node, options, level);
            case NodeType.Text:
              return this.text(node, options, level);
            case NodeType.ProcessingInstruction:
              return this.processingInstruction(node, options, level);
            case NodeType.Dummy:
              return "";
            case NodeType.Declaration:
              return this.declaration(node, options, level);
            case NodeType.DocType:
              return this.docType(node, options, level);
            case NodeType.AttributeDeclaration:
              return this.dtdAttList(node, options, level);
            case NodeType.ElementDeclaration:
              return this.dtdElement(node, options, level);
            case NodeType.EntityDeclaration:
              return this.dtdEntity(node, options, level);
            case NodeType.NotationDeclaration:
              return this.dtdNotation(node, options, level);
            default:
              throw new Error("Unknown XML node type: " + node.constructor.name);
          }
        };
        XMLWriterBase2.prototype.processingInstruction = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<?";
          options.state = WriterState.InsideTag;
          r += node.target;
          if (node.value) {
            r += " " + node.value;
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + "?>";
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.raw = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.text = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level);
          options.state = WriterState.InsideTag;
          r += node.value;
          options.state = WriterState.CloseTag;
          r += this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdAttList = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ATTLIST";
          options.state = WriterState.InsideTag;
          r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
          if (node.defaultValueType !== "#DEFAULT") {
            r += " " + node.defaultValueType;
          }
          if (node.defaultValue) {
            r += ' "' + node.defaultValue + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdElement = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ELEMENT";
          options.state = WriterState.InsideTag;
          r += " " + node.name + " " + node.value;
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdEntity = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!ENTITY";
          options.state = WriterState.InsideTag;
          if (node.pe) {
            r += " %";
          }
          r += " " + node.name;
          if (node.value) {
            r += ' "' + node.value + '"';
          } else {
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.nData) {
              r += " NDATA " + node.nData;
            }
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.dtdNotation = function(node, options, level) {
          var r;
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          r = this.indent(node, options, level) + "<!NOTATION";
          options.state = WriterState.InsideTag;
          r += " " + node.name;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.pubID) {
            r += ' PUBLIC "' + node.pubID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          options.state = WriterState.CloseTag;
          r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
          options.state = WriterState.None;
          this.closeNode(node, options, level);
          return r;
        };
        XMLWriterBase2.prototype.openNode = function(node, options, level) {
        };
        XMLWriterBase2.prototype.closeNode = function(node, options, level) {
        };
        XMLWriterBase2.prototype.openAttribute = function(att, options, level) {
        };
        XMLWriterBase2.prototype.closeAttribute = function(att, options, level) {
        };
        return XMLWriterBase2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports2, module2) {
    (function() {
      var XMLStringWriter, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      XMLWriterBase = require_XMLWriterBase();
      module2.exports = XMLStringWriter = function(superClass) {
        extend(XMLStringWriter2, superClass);
        function XMLStringWriter2(options) {
          XMLStringWriter2.__super__.constructor.call(this, options);
        }
        XMLStringWriter2.prototype.document = function(doc, options) {
          var child, i, len, r, ref;
          options = this.filterOptions(options);
          r = "";
          ref = doc.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += this.writeChildNode(child, options, 0);
          }
          if (options.pretty && r.slice(-options.newline.length) === options.newline) {
            r = r.slice(0, -options.newline.length);
          }
          return r;
        };
        return XMLStringWriter2;
      }(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocument.js"(exports2, module2) {
    (function() {
      var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      isPlainObject = require_Utility().isPlainObject;
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDOMConfiguration = require_XMLDOMConfiguration();
      XMLNode = require_XMLNode();
      NodeType = require_NodeType();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      module2.exports = XMLDocument = function(superClass) {
        extend(XMLDocument2, superClass);
        function XMLDocument2(options) {
          XMLDocument2.__super__.constructor.call(this, null);
          this.name = "#document";
          this.type = NodeType.Document;
          this.documentURI = null;
          this.domConfig = new XMLDOMConfiguration();
          options || (options = {});
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.stringify = new XMLStringifier(options);
        }
        Object.defineProperty(XMLDocument2.prototype, "implementation", {
          value: new XMLDOMImplementation()
        });
        Object.defineProperty(XMLDocument2.prototype, "doctype", {
          get: function() {
            var child, i, len, ref;
            ref = this.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              if (child.type === NodeType.DocType) {
                return child;
              }
            }
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "documentElement", {
          get: function() {
            return this.rootObject || null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
          get: function() {
            return false;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].encoding;
            } else {
              return null;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].standalone === "yes";
            } else {
              return false;
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
          get: function() {
            if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
              return this.children[0].version;
            } else {
              return "1.0";
            }
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "URL", {
          get: function() {
            return this.documentURI;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "origin", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "compatMode", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "characterSet", {
          get: function() {
            return null;
          }
        });
        Object.defineProperty(XMLDocument2.prototype, "contentType", {
          get: function() {
            return null;
          }
        });
        XMLDocument2.prototype.end = function(writer) {
          var writerOptions;
          writerOptions = {};
          if (!writer) {
            writer = this.options.writer;
          } else if (isPlainObject(writer)) {
            writerOptions = writer;
            writer = this.options.writer;
          }
          return writer.document(this, writer.filterOptions(writerOptions));
        };
        XMLDocument2.prototype.toString = function(options) {
          return this.options.writer.document(this, this.options.writer.filterOptions(options));
        };
        XMLDocument2.prototype.createElement = function(tagName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createDocumentFragment = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createTextNode = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createComment = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createCDATASection = function(data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createProcessingInstruction = function(target, data) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createAttribute = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createEntityReference = function(name) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByTagName = function(tagname) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.importNode = function(importedNode, deep) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createElementNS = function(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementById = function(elementId) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.adoptNode = function(source) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.normalizeDocument = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.getElementsByClassName = function(classNames) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createEvent = function(eventInterface) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createRange = function() {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createNodeIterator = function(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        XMLDocument2.prototype.createTreeWalker = function(root, whatToShow, filter) {
          throw new Error("This DOM method is not implemented." + this.debugInfo());
        };
        return XMLDocument2;
      }(XMLNode);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = __commonJS({
  "node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
      ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
      NodeType = require_NodeType();
      XMLDocument = require_XMLDocument();
      XMLElement = require_XMLElement();
      XMLCData = require_XMLCData();
      XMLComment = require_XMLComment();
      XMLRaw = require_XMLRaw();
      XMLText = require_XMLText();
      XMLProcessingInstruction = require_XMLProcessingInstruction();
      XMLDeclaration = require_XMLDeclaration();
      XMLDocType = require_XMLDocType();
      XMLDTDAttList = require_XMLDTDAttList();
      XMLDTDEntity = require_XMLDTDEntity();
      XMLDTDElement = require_XMLDTDElement();
      XMLDTDNotation = require_XMLDTDNotation();
      XMLAttribute = require_XMLAttribute();
      XMLStringifier = require_XMLStringifier();
      XMLStringWriter = require_XMLStringWriter();
      WriterState = require_WriterState();
      module2.exports = XMLDocumentCB = function() {
        function XMLDocumentCB2(options, onData, onEnd) {
          var writerOptions;
          this.name = "?xml";
          this.type = NodeType.Document;
          options || (options = {});
          writerOptions = {};
          if (!options.writer) {
            options.writer = new XMLStringWriter();
          } else if (isPlainObject(options.writer)) {
            writerOptions = options.writer;
            options.writer = new XMLStringWriter();
          }
          this.options = options;
          this.writer = options.writer;
          this.writerOptions = this.writer.filterOptions(writerOptions);
          this.stringify = new XMLStringifier(options);
          this.onDataCallback = onData || function() {
          };
          this.onEndCallback = onEnd || function() {
          };
          this.currentNode = null;
          this.currentLevel = -1;
          this.openTags = {};
          this.documentStarted = false;
          this.documentCompleted = false;
          this.root = null;
        }
        XMLDocumentCB2.prototype.createChildNode = function(node) {
          var att, attName, attributes, child, i, len, ref1, ref2;
          switch (node.type) {
            case NodeType.CData:
              this.cdata(node.value);
              break;
            case NodeType.Comment:
              this.comment(node.value);
              break;
            case NodeType.Element:
              attributes = {};
              ref1 = node.attribs;
              for (attName in ref1) {
                if (!hasProp.call(ref1, attName))
                  continue;
                att = ref1[attName];
                attributes[attName] = att.value;
              }
              this.node(node.name, attributes);
              break;
            case NodeType.Dummy:
              this.dummy();
              break;
            case NodeType.Raw:
              this.raw(node.value);
              break;
            case NodeType.Text:
              this.text(node.value);
              break;
            case NodeType.ProcessingInstruction:
              this.instruction(node.target, node.value);
              break;
            default:
              throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
          }
          ref2 = node.children;
          for (i = 0, len = ref2.length; i < len; i++) {
            child = ref2[i];
            this.createChildNode(child);
            if (child.type === NodeType.Element) {
              this.up();
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.dummy = function() {
          return this;
        };
        XMLDocumentCB2.prototype.node = function(name, attributes, text) {
          var ref1;
          if (name == null) {
            throw new Error("Missing node name.");
          }
          if (this.root && this.currentLevel === -1) {
            throw new Error("Document can only have one root node. " + this.debugInfo(name));
          }
          this.openCurrent();
          name = getValue(name);
          if (attributes == null) {
            attributes = {};
          }
          attributes = getValue(attributes);
          if (!isObject(attributes)) {
            ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
          }
          this.currentNode = new XMLElement(this, name, attributes);
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          if (text != null) {
            this.text(text);
          }
          return this;
        };
        XMLDocumentCB2.prototype.element = function(name, attributes, text) {
          var child, i, len, oldValidationFlag, ref1, root;
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            this.dtdElement.apply(this, arguments);
          } else {
            if (Array.isArray(name) || isObject(name) || isFunction(name)) {
              oldValidationFlag = this.options.noValidation;
              this.options.noValidation = true;
              root = new XMLDocument(this.options).element("TEMP_ROOT");
              root.element(name);
              this.options.noValidation = oldValidationFlag;
              ref1 = root.children;
              for (i = 0, len = ref1.length; i < len; i++) {
                child = ref1[i];
                this.createChildNode(child);
                if (child.type === NodeType.Element) {
                  this.up();
                }
              }
            } else {
              this.node(name, attributes, text);
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.attribute = function(name, value) {
          var attName, attValue;
          if (!this.currentNode || this.currentNode.children) {
            throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
          }
          if (name != null) {
            name = getValue(name);
          }
          if (isObject(name)) {
            for (attName in name) {
              if (!hasProp.call(name, attName))
                continue;
              attValue = name[attName];
              this.attribute(attName, attValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            if (this.options.keepNullAttributes && value == null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
            } else if (value != null) {
              this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
            }
          }
          return this;
        };
        XMLDocumentCB2.prototype.text = function(value) {
          var node;
          this.openCurrent();
          node = new XMLText(this, value);
          this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.cdata = function(value) {
          var node;
          this.openCurrent();
          node = new XMLCData(this, value);
          this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.comment = function(value) {
          var node;
          this.openCurrent();
          node = new XMLComment(this, value);
          this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.raw = function(value) {
          var node;
          this.openCurrent();
          node = new XMLRaw(this, value);
          this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.instruction = function(target, value) {
          var i, insTarget, insValue, len, node;
          this.openCurrent();
          if (target != null) {
            target = getValue(target);
          }
          if (value != null) {
            value = getValue(value);
          }
          if (Array.isArray(target)) {
            for (i = 0, len = target.length; i < len; i++) {
              insTarget = target[i];
              this.instruction(insTarget);
            }
          } else if (isObject(target)) {
            for (insTarget in target) {
              if (!hasProp.call(target, insTarget))
                continue;
              insValue = target[insTarget];
              this.instruction(insTarget, insValue);
            }
          } else {
            if (isFunction(value)) {
              value = value.apply();
            }
            node = new XMLProcessingInstruction(this, target, value);
            this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          }
          return this;
        };
        XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
          var node;
          this.openCurrent();
          if (this.documentStarted) {
            throw new Error("declaration() must be the first node.");
          }
          node = new XMLDeclaration(this, version, encoding, standalone);
          this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
          this.openCurrent();
          if (root == null) {
            throw new Error("Missing root node name.");
          }
          if (this.root) {
            throw new Error("dtd() must come before the root node.");
          }
          this.currentNode = new XMLDocType(this, pubID, sysID);
          this.currentNode.rootNodeName = root;
          this.currentNode.children = false;
          this.currentLevel++;
          this.openTags[this.currentLevel] = this.currentNode;
          return this;
        };
        XMLDocumentCB2.prototype.dtdElement = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDElement(this, name, value);
          this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
          var node;
          this.openCurrent();
          node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
          this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.entity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, false, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.pEntity = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDEntity(this, true, name, value);
          this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.notation = function(name, value) {
          var node;
          this.openCurrent();
          node = new XMLDTDNotation(this, name, value);
          this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        };
        XMLDocumentCB2.prototype.up = function() {
          if (this.currentLevel < 0) {
            throw new Error("The document node has no parent.");
          }
          if (this.currentNode) {
            if (this.currentNode.children) {
              this.closeNode(this.currentNode);
            } else {
              this.openNode(this.currentNode);
            }
            this.currentNode = null;
          } else {
            this.closeNode(this.openTags[this.currentLevel]);
          }
          delete this.openTags[this.currentLevel];
          this.currentLevel--;
          return this;
        };
        XMLDocumentCB2.prototype.end = function() {
          while (this.currentLevel >= 0) {
            this.up();
          }
          return this.onEnd();
        };
        XMLDocumentCB2.prototype.openCurrent = function() {
          if (this.currentNode) {
            this.currentNode.children = true;
            return this.openNode(this.currentNode);
          }
        };
        XMLDocumentCB2.prototype.openNode = function(node) {
          var att, chunk, name, ref1;
          if (!node.isOpen) {
            if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
              this.root = node;
            }
            chunk = "";
            if (node.type === NodeType.Element) {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
              ref1 = node.attribs;
              for (name in ref1) {
                if (!hasProp.call(ref1, name))
                  continue;
                att = ref1[name];
                chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
              }
              chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
              this.writerOptions.state = WriterState.InsideTag;
            } else {
              this.writerOptions.state = WriterState.OpenTag;
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
              if (node.pubID && node.sysID) {
                chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
              } else if (node.sysID) {
                chunk += ' SYSTEM "' + node.sysID + '"';
              }
              if (node.children) {
                chunk += " [";
                this.writerOptions.state = WriterState.InsideTag;
              } else {
                this.writerOptions.state = WriterState.CloseTag;
                chunk += ">";
              }
              chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.onData(chunk, this.currentLevel);
            return node.isOpen = true;
          }
        };
        XMLDocumentCB2.prototype.closeNode = function(node) {
          var chunk;
          if (!node.isClosed) {
            chunk = "";
            this.writerOptions.state = WriterState.CloseTag;
            if (node.type === NodeType.Element) {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            } else {
              chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
            }
            this.writerOptions.state = WriterState.None;
            this.onData(chunk, this.currentLevel);
            return node.isClosed = true;
          }
        };
        XMLDocumentCB2.prototype.onData = function(chunk, level) {
          this.documentStarted = true;
          return this.onDataCallback(chunk, level + 1);
        };
        XMLDocumentCB2.prototype.onEnd = function() {
          this.documentCompleted = true;
          return this.onEndCallback();
        };
        XMLDocumentCB2.prototype.debugInfo = function(name) {
          if (name == null) {
            return "";
          } else {
            return "node: <" + name + ">";
          }
        };
        XMLDocumentCB2.prototype.ele = function() {
          return this.element.apply(this, arguments);
        };
        XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.txt = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.dat = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.com = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.ins = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
          return this.declaration(version, encoding, standalone);
        };
        XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
          return this.doctype(root, pubID, sysID);
        };
        XMLDocumentCB2.prototype.e = function(name, attributes, text) {
          return this.element(name, attributes, text);
        };
        XMLDocumentCB2.prototype.n = function(name, attributes, text) {
          return this.node(name, attributes, text);
        };
        XMLDocumentCB2.prototype.t = function(value) {
          return this.text(value);
        };
        XMLDocumentCB2.prototype.d = function(value) {
          return this.cdata(value);
        };
        XMLDocumentCB2.prototype.c = function(value) {
          return this.comment(value);
        };
        XMLDocumentCB2.prototype.r = function(value) {
          return this.raw(value);
        };
        XMLDocumentCB2.prototype.i = function(target, value) {
          return this.instruction(target, value);
        };
        XMLDocumentCB2.prototype.att = function() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.a = function() {
          if (this.currentNode && this.currentNode.type === NodeType.DocType) {
            return this.attList.apply(this, arguments);
          } else {
            return this.attribute.apply(this, arguments);
          }
        };
        XMLDocumentCB2.prototype.ent = function(name, value) {
          return this.entity(name, value);
        };
        XMLDocumentCB2.prototype.pent = function(name, value) {
          return this.pEntity(name, value);
        };
        XMLDocumentCB2.prototype.not = function(name, value) {
          return this.notation(name, value);
        };
        return XMLDocumentCB2;
      }();
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = __commonJS({
  "node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      NodeType = require_NodeType();
      XMLWriterBase = require_XMLWriterBase();
      WriterState = require_WriterState();
      module2.exports = XMLStreamWriter = function(superClass) {
        extend(XMLStreamWriter2, superClass);
        function XMLStreamWriter2(stream, options) {
          this.stream = stream;
          XMLStreamWriter2.__super__.constructor.call(this, options);
        }
        XMLStreamWriter2.prototype.endline = function(node, options, level) {
          if (node.isLastRootNode && options.state === WriterState.CloseTag) {
            return "";
          } else {
            return XMLStreamWriter2.__super__.endline.call(this, node, options, level);
          }
        };
        XMLStreamWriter2.prototype.document = function(doc, options) {
          var child, i, j, k, len, len1, ref, ref1, results;
          ref = doc.children;
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            child = ref[i];
            child.isLastRootNode = i === doc.children.length - 1;
          }
          options = this.filterOptions(options);
          ref1 = doc.children;
          results = [];
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            child = ref1[k];
            results.push(this.writeChildNode(child, options, 0));
          }
          return results;
        };
        XMLStreamWriter2.prototype.attribute = function(att, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.attribute.call(this, att, options, level));
        };
        XMLStreamWriter2.prototype.cdata = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.cdata.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.comment = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.comment.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.declaration = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.declaration.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.docType = function(node, options, level) {
          var child, j, len, ref;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level));
          this.stream.write("<!DOCTYPE " + node.root().name);
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.children.length > 0) {
            this.stream.write(" [");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref = node.children;
            for (j = 0, len = ref.length; j < len; j++) {
              child = ref[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write("]");
          }
          options.state = WriterState.CloseTag;
          this.stream.write(options.spaceBeforeSlash + ">");
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        };
        XMLStreamWriter2.prototype.element = function(node, options, level) {
          var att, child, childNodeCount, firstChildNode, j, len, name, prettySuppressed, ref, ref1;
          level || (level = 0);
          this.openNode(node, options, level);
          options.state = WriterState.OpenTag;
          this.stream.write(this.indent(node, options, level) + "<" + node.name);
          ref = node.attribs;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            this.attribute(att, options, level);
          }
          childNodeCount = node.children.length;
          firstChildNode = childNodeCount === 0 ? null : node.children[0];
          if (childNodeCount === 0 || node.children.every(function(e) {
            return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
          })) {
            if (options.allowEmpty) {
              this.stream.write(">");
              options.state = WriterState.CloseTag;
              this.stream.write("</" + node.name + ">");
            } else {
              options.state = WriterState.CloseTag;
              this.stream.write(options.spaceBeforeSlash + "/>");
            }
          } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
            this.stream.write(">");
            options.state = WriterState.InsideTag;
            options.suppressPrettyCount++;
            prettySuppressed = true;
            this.writeChildNode(firstChildNode, options, level + 1);
            options.suppressPrettyCount--;
            prettySuppressed = false;
            options.state = WriterState.CloseTag;
            this.stream.write("</" + node.name + ">");
          } else {
            this.stream.write(">" + this.endline(node, options, level));
            options.state = WriterState.InsideTag;
            ref1 = node.children;
            for (j = 0, len = ref1.length; j < len; j++) {
              child = ref1[j];
              this.writeChildNode(child, options, level + 1);
            }
            options.state = WriterState.CloseTag;
            this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
          }
          this.stream.write(this.endline(node, options, level));
          options.state = WriterState.None;
          return this.closeNode(node, options, level);
        };
        XMLStreamWriter2.prototype.processingInstruction = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.processingInstruction.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.raw = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.raw.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.text = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.text.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdAttList = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdAttList.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdElement = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdElement.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdEntity = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdEntity.call(this, node, options, level));
        };
        XMLStreamWriter2.prototype.dtdNotation = function(node, options, level) {
          return this.stream.write(XMLStreamWriter2.__super__.dtdNotation.call(this, node, options, level));
        };
        return XMLStreamWriter2;
      }(XMLWriterBase);
    }).call(exports2);
  }
});

// node_modules/xmlbuilder/lib/index.js
var require_lib = __commonJS({
  "node_modules/xmlbuilder/lib/index.js"(exports2, module2) {
    (function() {
      var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref;
      ref = require_Utility(), assign = ref.assign, isFunction = ref.isFunction;
      XMLDOMImplementation = require_XMLDOMImplementation();
      XMLDocument = require_XMLDocument();
      XMLDocumentCB = require_XMLDocumentCB();
      XMLStringWriter = require_XMLStringWriter();
      XMLStreamWriter = require_XMLStreamWriter();
      NodeType = require_NodeType();
      WriterState = require_WriterState();
      module2.exports.create = function(name, xmldec, doctype, options) {
        var doc, root;
        if (name == null) {
          throw new Error("Root element needs a name.");
        }
        options = assign({}, xmldec, doctype, options);
        doc = new XMLDocument(options);
        root = doc.element(name);
        if (!options.headless) {
          doc.declaration(options);
          if (options.pubID != null || options.sysID != null) {
            doc.dtd(options);
          }
        }
        return root;
      };
      module2.exports.begin = function(options, onData, onEnd) {
        var ref1;
        if (isFunction(options)) {
          ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
          options = {};
        }
        if (onData) {
          return new XMLDocumentCB(options, onData, onEnd);
        } else {
          return new XMLDocument(options);
        }
      };
      module2.exports.stringWriter = function(options) {
        return new XMLStringWriter(options);
      };
      module2.exports.streamWriter = function(stream, options) {
        return new XMLStreamWriter(stream, options);
      };
      module2.exports.implementation = new XMLDOMImplementation();
      module2.exports.nodeType = NodeType;
      module2.exports.writerState = WriterState;
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/builder.js
var require_builder = __commonJS({
  "node_modules/xml2js/lib/builder.js"(exports2) {
    (function() {
      "use strict";
      var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
      builder = require_lib();
      defaults = require_defaults().defaults;
      requiresCDATA = function(entry) {
        return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
      };
      wrapCDATA = function(entry) {
        return "<![CDATA[" + escapeCDATA(entry) + "]]>";
      };
      escapeCDATA = function(entry) {
        return entry.replace("]]>", "]]]]><![CDATA[>");
      };
      exports2.Builder = function() {
        function Builder(opts) {
          var key, ref, value;
          this.options = {};
          ref = defaults["0.2"];
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this.options[key] = value;
          }
          for (key in opts) {
            if (!hasProp.call(opts, key))
              continue;
            value = opts[key];
            this.options[key] = value;
          }
        }
        Builder.prototype.buildObject = function(rootObj) {
          var attrkey, charkey, render, rootElement, rootName;
          attrkey = this.options.attrkey;
          charkey = this.options.charkey;
          if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
            rootName = Object.keys(rootObj)[0];
            rootObj = rootObj[rootName];
          } else {
            rootName = this.options.rootName;
          }
          render = /* @__PURE__ */ function(_this) {
            return function(element, obj) {
              var attr, child, entry, index, key, value;
              if (typeof obj !== "object") {
                if (_this.options.cdata && requiresCDATA(obj)) {
                  element.raw(wrapCDATA(obj));
                } else {
                  element.txt(obj);
                }
              } else if (Array.isArray(obj)) {
                for (index in obj) {
                  if (!hasProp.call(obj, index))
                    continue;
                  child = obj[index];
                  for (key in child) {
                    entry = child[key];
                    element = render(element.ele(key), entry).up();
                  }
                }
              } else {
                for (key in obj) {
                  if (!hasProp.call(obj, key))
                    continue;
                  child = obj[key];
                  if (key === attrkey) {
                    if (typeof child === "object") {
                      for (attr in child) {
                        value = child[attr];
                        element = element.att(attr, value);
                      }
                    }
                  } else if (key === charkey) {
                    if (_this.options.cdata && requiresCDATA(child)) {
                      element = element.raw(wrapCDATA(child));
                    } else {
                      element = element.txt(child);
                    }
                  } else if (Array.isArray(child)) {
                    for (index in child) {
                      if (!hasProp.call(child, index))
                        continue;
                      entry = child[index];
                      if (typeof entry === "string") {
                        if (_this.options.cdata && requiresCDATA(entry)) {
                          element = element.ele(key).raw(wrapCDATA(entry)).up();
                        } else {
                          element = element.ele(key, entry).up();
                        }
                      } else {
                        element = render(element.ele(key), entry).up();
                      }
                    }
                  } else if (typeof child === "object") {
                    element = render(element.ele(key), child).up();
                  } else {
                    if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) {
                      element = element.ele(key).raw(wrapCDATA(child)).up();
                    } else {
                      if (child == null) {
                        child = "";
                      }
                      element = element.ele(key, child.toString()).up();
                    }
                  }
                }
              }
              return element;
            };
          }(this);
          rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
            headless: this.options.headless,
            allowSurrogateChars: this.options.allowSurrogateChars
          });
          return render(rootElement, rootObj).end(this.options.renderOpts);
        };
        return Builder;
      }();
    }).call(exports2);
  }
});

// node_modules/sax/lib/sax.js
var require_sax = __commonJS({
  "node_modules/sax/lib/sax.js"(exports2) {
    (function(sax) {
      sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax.SAXParser = SAXParser;
      sax.SAXStream = SAXStream;
      sax.createStream = createStream;
      sax.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser2 = this;
        clearBuffers(parser2);
        parser2.q = parser2.c = "";
        parser2.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser2.opt = opt || {};
        parser2.opt.lowercase = parser2.opt.lowercase || parser2.opt.lowercasetags;
        parser2.looseCase = parser2.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser2.tags = [];
        parser2.closed = parser2.closedRoot = parser2.sawRoot = false;
        parser2.tag = parser2.error = null;
        parser2.strict = !!strict;
        parser2.noscript = !!(strict || parser2.opt.noscript);
        parser2.state = S.BEGIN;
        parser2.strictEntities = parser2.opt.strictEntities;
        parser2.ENTITIES = parser2.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser2.attribList = [];
        if (parser2.opt.xmlns) {
          parser2.ns = Object.create(rootNS);
        }
        parser2.trackPosition = parser2.opt.position !== false;
        if (parser2.trackPosition) {
          parser2.position = parser2.line = parser2.column = 0;
        }
        emit(parser2, "onready");
      }
      if (!Object.create) {
        Object.create = function(o) {
          function F() {
          }
          F.prototype = o;
          var newf = new F();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o) {
          var a = [];
          for (var i in o)
            if (o.hasOwnProperty(i))
              a.push(i);
          return a;
        };
      }
      function checkBufferLength(parser2) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
          var len = parser2[buffers[i]].length;
          if (len > maxAllowed) {
            switch (buffers[i]) {
              case "textNode":
                closeText(parser2);
                break;
              case "cdata":
                emitNode(parser2, "oncdata", parser2.cdata);
                parser2.cdata = "";
                break;
              case "script":
                emitNode(parser2, "onscript", parser2.script);
                parser2.script = "";
                break;
              default:
                error(parser2, "Max buffer length exceeded: " + buffers[i]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser2.bufferCheckPosition = m + parser2.position;
      }
      function clearBuffers(parser2) {
        for (var i = 0, l = buffers.length; i < l; i++) {
          parser2[buffers[i]] = "";
        }
      }
      function flushBuffers(parser2) {
        closeText(parser2);
        if (parser2.cdata !== "") {
          emitNode(parser2, "oncdata", parser2.cdata);
          parser2.cdata = "";
        }
        if (parser2.script !== "") {
          emitNode(parser2, "onscript", parser2.script);
          parser2.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream;
      try {
        Stream = require("stream").Stream;
      } catch (ex) {
        Stream = function() {
        };
      }
      if (!Stream)
        Stream = function() {
        };
      var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function() {
          me.emit("end");
        };
        this._parser.onerror = function(er) {
          me.emit("error", er);
          me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me, "on" + ev, {
            get: function() {
              return me._parser["on" + ev];
            },
            set: function(h) {
              if (!h) {
                me.removeAllListeners(ev);
                me._parser["on" + ev] = h;
                return h;
              }
              me.on(ev, h);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = require("string_decoder").StringDecoder;
            this._decoder = new SD("utf8");
          }
          data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me.emit.apply(me, args);
          };
        }
        return Stream.prototype.on.call(me, ev, handler);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "	";
      }
      function isQuote(c) {
        return c === '"' || c === "'";
      }
      function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
      }
      function isMatch(regex, c) {
        return regex.test(c);
      }
      function notMatch(regex, c) {
        return !isMatch(regex, c);
      }
      var S = 0;
      sax.STATE = {
        BEGIN: S++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S++,
        // leading whitespace
        TEXT: S++,
        // general stuff
        TEXT_ENTITY: S++,
        // &amp and such.
        OPEN_WAKA: S++,
        // <
        SGML_DECL: S++,
        // <!BLARG
        SGML_DECL_QUOTED: S++,
        // <!BLARG foo "bar
        DOCTYPE: S++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S++,
        // <!-
        COMMENT: S++,
        // <!--
        COMMENT_ENDING: S++,
        // <!-- blah -
        COMMENT_ENDED: S++,
        // <!-- blah --
        CDATA: S++,
        // <![CDATA[ something
        CDATA_ENDING: S++,
        // ]
        CDATA_ENDING_2: S++,
        // ]]
        PROC_INST: S++,
        // <?hi
        PROC_INST_BODY: S++,
        // <?hi there
        PROC_INST_ENDING: S++,
        // <?hi "there" ?
        OPEN_TAG: S++,
        // <strong
        OPEN_TAG_SLASH: S++,
        // <strong /
        ATTRIB: S++,
        // <a
        ATTRIB_NAME: S++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S++,
        // <a foo _
        ATTRIB_VALUE: S++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S++,
        // <foo bar=&quot
        CLOSE_TAG: S++,
        // </a
        CLOSE_TAG_SAW_WHITE: S++,
        // </a   >
        SCRIPT: S++,
        // <script> ...
        SCRIPT_ENDING: S++
        // <script> ... <
      };
      sax.XML_ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'"
      };
      sax.ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'",
        "AElig": 198,
        "Aacute": 193,
        "Acirc": 194,
        "Agrave": 192,
        "Aring": 197,
        "Atilde": 195,
        "Auml": 196,
        "Ccedil": 199,
        "ETH": 208,
        "Eacute": 201,
        "Ecirc": 202,
        "Egrave": 200,
        "Euml": 203,
        "Iacute": 205,
        "Icirc": 206,
        "Igrave": 204,
        "Iuml": 207,
        "Ntilde": 209,
        "Oacute": 211,
        "Ocirc": 212,
        "Ograve": 210,
        "Oslash": 216,
        "Otilde": 213,
        "Ouml": 214,
        "THORN": 222,
        "Uacute": 218,
        "Ucirc": 219,
        "Ugrave": 217,
        "Uuml": 220,
        "Yacute": 221,
        "aacute": 225,
        "acirc": 226,
        "aelig": 230,
        "agrave": 224,
        "aring": 229,
        "atilde": 227,
        "auml": 228,
        "ccedil": 231,
        "eacute": 233,
        "ecirc": 234,
        "egrave": 232,
        "eth": 240,
        "euml": 235,
        "iacute": 237,
        "icirc": 238,
        "igrave": 236,
        "iuml": 239,
        "ntilde": 241,
        "oacute": 243,
        "ocirc": 244,
        "ograve": 242,
        "oslash": 248,
        "otilde": 245,
        "ouml": 246,
        "szlig": 223,
        "thorn": 254,
        "uacute": 250,
        "ucirc": 251,
        "ugrave": 249,
        "uuml": 252,
        "yacute": 253,
        "yuml": 255,
        "copy": 169,
        "reg": 174,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup1": 185,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "times": 215,
        "divide": 247,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
      };
      Object.keys(sax.ENTITIES).forEach(function(key) {
        var e = sax.ENTITIES[key];
        var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s2;
      });
      for (var s in sax.STATE) {
        sax.STATE[sax.STATE[s]] = s;
      }
      S = sax.STATE;
      function emit(parser2, event, data) {
        parser2[event] && parser2[event](data);
      }
      function emitNode(parser2, nodeType, data) {
        if (parser2.textNode)
          closeText(parser2);
        emit(parser2, nodeType, data);
      }
      function closeText(parser2) {
        parser2.textNode = textopts(parser2.opt, parser2.textNode);
        if (parser2.textNode)
          emit(parser2, "ontext", parser2.textNode);
        parser2.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim)
          text = text.trim();
        if (opt.normalize)
          text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser2, er) {
        closeText(parser2);
        if (parser2.trackPosition) {
          er += "\nLine: " + parser2.line + "\nColumn: " + parser2.column + "\nChar: " + parser2.c;
        }
        er = new Error(er);
        parser2.error = er;
        emit(parser2, "onerror", er);
        return parser2;
      }
      function end(parser2) {
        if (parser2.sawRoot && !parser2.closedRoot)
          strictFail(parser2, "Unclosed root tag");
        if (parser2.state !== S.BEGIN && parser2.state !== S.BEGIN_WHITESPACE && parser2.state !== S.TEXT) {
          error(parser2, "Unexpected end");
        }
        closeText(parser2);
        parser2.c = "";
        parser2.closed = true;
        emit(parser2, "onend");
        SAXParser.call(parser2, parser2.strict, parser2.opt);
        return parser2;
      }
      function strictFail(parser2, message) {
        if (typeof parser2 !== "object" || !(parser2 instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser2.strict) {
          error(parser2, message);
        }
      }
      function newTag(parser2) {
        if (!parser2.strict)
          parser2.tagName = parser2.tagName[parser2.looseCase]();
        var parent = parser2.tags[parser2.tags.length - 1] || parser2;
        var tag = parser2.tag = { name: parser2.tagName, attributes: {} };
        if (parser2.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser2.attribList.length = 0;
        emitNode(parser2, "onopentagstart", tag);
      }
      function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser2) {
        if (!parser2.strict) {
          parser2.attribName = parser2.attribName[parser2.looseCase]();
        }
        if (parser2.attribList.indexOf(parser2.attribName) !== -1 || parser2.tag.attributes.hasOwnProperty(parser2.attribName)) {
          parser2.attribName = parser2.attribValue = "";
          return;
        }
        if (parser2.opt.xmlns) {
          var qn = qname(parser2.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser2.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser2,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser2.attribValue
              );
            } else if (local === "xmlns" && parser2.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser2,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser2.attribValue
              );
            } else {
              var tag = parser2.tag;
              var parent = parser2.tags[parser2.tags.length - 1] || parser2;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser2.attribValue;
            }
          }
          parser2.attribList.push([parser2.attribName, parser2.attribValue]);
        } else {
          parser2.tag.attributes[parser2.attribName] = parser2.attribValue;
          emitNode(parser2, "onattribute", {
            name: parser2.attribName,
            value: parser2.attribValue
          });
        }
        parser2.attribName = parser2.attribValue = "";
      }
      function openTag(parser2, selfClosing) {
        if (parser2.opt.xmlns) {
          var tag = parser2.tag;
          var qn = qname(parser2.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(parser2, "Unbound namespace prefix: " + JSON.stringify(parser2.tagName));
            tag.uri = qn.prefix;
          }
          var parent = parser2.tags[parser2.tags.length - 1] || parser2;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              emitNode(parser2, "onopennamespace", {
                prefix: p,
                uri: tag.ns[p]
              });
            });
          }
          for (var i = 0, l = parser2.attribList.length; i < l; i++) {
            var nv = parser2.attribList[i];
            var name = nv[0];
            var value = nv[1];
            var qualName = qname(name, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a = {
              name,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(parser2, "Unbound namespace prefix: " + JSON.stringify(prefix));
              a.uri = prefix;
            }
            parser2.tag.attributes[name] = a;
            emitNode(parser2, "onattribute", a);
          }
          parser2.attribList.length = 0;
        }
        parser2.tag.isSelfClosing = !!selfClosing;
        parser2.sawRoot = true;
        parser2.tags.push(parser2.tag);
        emitNode(parser2, "onopentag", parser2.tag);
        if (!selfClosing) {
          if (!parser2.noscript && parser2.tagName.toLowerCase() === "script") {
            parser2.state = S.SCRIPT;
          } else {
            parser2.state = S.TEXT;
          }
          parser2.tag = null;
          parser2.tagName = "";
        }
        parser2.attribName = parser2.attribValue = "";
        parser2.attribList.length = 0;
      }
      function closeTag(parser2) {
        if (!parser2.tagName) {
          strictFail(parser2, "Weird empty close tag.");
          parser2.textNode += "</>";
          parser2.state = S.TEXT;
          return;
        }
        if (parser2.script) {
          if (parser2.tagName !== "script") {
            parser2.script += "</" + parser2.tagName + ">";
            parser2.tagName = "";
            parser2.state = S.SCRIPT;
            return;
          }
          emitNode(parser2, "onscript", parser2.script);
          parser2.script = "";
        }
        var t = parser2.tags.length;
        var tagName = parser2.tagName;
        if (!parser2.strict) {
          tagName = tagName[parser2.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
          var close = parser2.tags[t];
          if (close.name !== closeTo) {
            strictFail(parser2, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t < 0) {
          strictFail(parser2, "Unmatched closing tag: " + parser2.tagName);
          parser2.textNode += "</" + parser2.tagName + ">";
          parser2.state = S.TEXT;
          return;
        }
        parser2.tagName = tagName;
        var s2 = parser2.tags.length;
        while (s2-- > t) {
          var tag = parser2.tag = parser2.tags.pop();
          parser2.tagName = parser2.tag.name;
          emitNode(parser2, "onclosetag", parser2.tagName);
          var x = {};
          for (var i in tag.ns) {
            x[i] = tag.ns[i];
          }
          var parent = parser2.tags[parser2.tags.length - 1] || parser2;
          if (parser2.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p) {
              var n = tag.ns[p];
              emitNode(parser2, "onclosenamespace", { prefix: p, uri: n });
            });
          }
        }
        if (t === 0)
          parser2.closedRoot = true;
        parser2.tagName = parser2.attribValue = parser2.attribName = "";
        parser2.attribList.length = 0;
        parser2.state = S.TEXT;
      }
      function parseEntity(parser2) {
        var entity = parser2.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser2.ENTITIES[entity]) {
          return parser2.ENTITIES[entity];
        }
        if (parser2.ENTITIES[entityLC]) {
          return parser2.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
          strictFail(parser2, "Invalid character entity");
          return "&" + parser2.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser2, c) {
        if (c === "<") {
          parser2.state = S.OPEN_WAKA;
          parser2.startTagPosition = parser2.position;
        } else if (!isWhitespace(c)) {
          strictFail(parser2, "Non-whitespace before first tag.");
          parser2.textNode = c;
          parser2.state = S.TEXT;
        }
      }
      function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) {
          result = chunk.charAt(i);
        }
        return result;
      }
      function write(chunk) {
        var parser2 = this;
        if (this.error) {
          throw this.error;
        }
        if (parser2.closed) {
          return error(
            parser2,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser2);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i = 0;
        var c = "";
        while (true) {
          c = charAt(chunk, i++);
          parser2.c = c;
          if (!c) {
            break;
          }
          if (parser2.trackPosition) {
            parser2.position++;
            if (c === "\n") {
              parser2.line++;
              parser2.column = 0;
            } else {
              parser2.column++;
            }
          }
          switch (parser2.state) {
            case S.BEGIN:
              parser2.state = S.BEGIN_WHITESPACE;
              if (c === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser2, c);
              continue;
            case S.BEGIN_WHITESPACE:
              beginWhiteSpace(parser2, c);
              continue;
            case S.TEXT:
              if (parser2.sawRoot && !parser2.closedRoot) {
                var starti = i - 1;
                while (c && c !== "<" && c !== "&") {
                  c = charAt(chunk, i++);
                  if (c && parser2.trackPosition) {
                    parser2.position++;
                    if (c === "\n") {
                      parser2.line++;
                      parser2.column = 0;
                    } else {
                      parser2.column++;
                    }
                  }
                }
                parser2.textNode += chunk.substring(starti, i - 1);
              }
              if (c === "<" && !(parser2.sawRoot && parser2.closedRoot && !parser2.strict)) {
                parser2.state = S.OPEN_WAKA;
                parser2.startTagPosition = parser2.position;
              } else {
                if (!isWhitespace(c) && (!parser2.sawRoot || parser2.closedRoot)) {
                  strictFail(parser2, "Text data outside of root node.");
                }
                if (c === "&") {
                  parser2.state = S.TEXT_ENTITY;
                } else {
                  parser2.textNode += c;
                }
              }
              continue;
            case S.SCRIPT:
              if (c === "<") {
                parser2.state = S.SCRIPT_ENDING;
              } else {
                parser2.script += c;
              }
              continue;
            case S.SCRIPT_ENDING:
              if (c === "/") {
                parser2.state = S.CLOSE_TAG;
              } else {
                parser2.script += "<" + c;
                parser2.state = S.SCRIPT;
              }
              continue;
            case S.OPEN_WAKA:
              if (c === "!") {
                parser2.state = S.SGML_DECL;
                parser2.sgmlDecl = "";
              } else if (isWhitespace(c)) {
              } else if (isMatch(nameStart, c)) {
                parser2.state = S.OPEN_TAG;
                parser2.tagName = c;
              } else if (c === "/") {
                parser2.state = S.CLOSE_TAG;
                parser2.tagName = "";
              } else if (c === "?") {
                parser2.state = S.PROC_INST;
                parser2.procInstName = parser2.procInstBody = "";
              } else {
                strictFail(parser2, "Unencoded <");
                if (parser2.startTagPosition + 1 < parser2.position) {
                  var pad = parser2.position - parser2.startTagPosition;
                  c = new Array(pad).join(" ") + c;
                }
                parser2.textNode += "<" + c;
                parser2.state = S.TEXT;
              }
              continue;
            case S.SGML_DECL:
              if ((parser2.sgmlDecl + c).toUpperCase() === CDATA) {
                emitNode(parser2, "onopencdata");
                parser2.state = S.CDATA;
                parser2.sgmlDecl = "";
                parser2.cdata = "";
              } else if (parser2.sgmlDecl + c === "--") {
                parser2.state = S.COMMENT;
                parser2.comment = "";
                parser2.sgmlDecl = "";
              } else if ((parser2.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                parser2.state = S.DOCTYPE;
                if (parser2.doctype || parser2.sawRoot) {
                  strictFail(
                    parser2,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser2.doctype = "";
                parser2.sgmlDecl = "";
              } else if (c === ">") {
                emitNode(parser2, "onsgmldeclaration", parser2.sgmlDecl);
                parser2.sgmlDecl = "";
                parser2.state = S.TEXT;
              } else if (isQuote(c)) {
                parser2.state = S.SGML_DECL_QUOTED;
                parser2.sgmlDecl += c;
              } else {
                parser2.sgmlDecl += c;
              }
              continue;
            case S.SGML_DECL_QUOTED:
              if (c === parser2.q) {
                parser2.state = S.SGML_DECL;
                parser2.q = "";
              }
              parser2.sgmlDecl += c;
              continue;
            case S.DOCTYPE:
              if (c === ">") {
                parser2.state = S.TEXT;
                emitNode(parser2, "ondoctype", parser2.doctype);
                parser2.doctype = true;
              } else {
                parser2.doctype += c;
                if (c === "[") {
                  parser2.state = S.DOCTYPE_DTD;
                } else if (isQuote(c)) {
                  parser2.state = S.DOCTYPE_QUOTED;
                  parser2.q = c;
                }
              }
              continue;
            case S.DOCTYPE_QUOTED:
              parser2.doctype += c;
              if (c === parser2.q) {
                parser2.q = "";
                parser2.state = S.DOCTYPE;
              }
              continue;
            case S.DOCTYPE_DTD:
              parser2.doctype += c;
              if (c === "]") {
                parser2.state = S.DOCTYPE;
              } else if (isQuote(c)) {
                parser2.state = S.DOCTYPE_DTD_QUOTED;
                parser2.q = c;
              }
              continue;
            case S.DOCTYPE_DTD_QUOTED:
              parser2.doctype += c;
              if (c === parser2.q) {
                parser2.state = S.DOCTYPE_DTD;
                parser2.q = "";
              }
              continue;
            case S.COMMENT:
              if (c === "-") {
                parser2.state = S.COMMENT_ENDING;
              } else {
                parser2.comment += c;
              }
              continue;
            case S.COMMENT_ENDING:
              if (c === "-") {
                parser2.state = S.COMMENT_ENDED;
                parser2.comment = textopts(parser2.opt, parser2.comment);
                if (parser2.comment) {
                  emitNode(parser2, "oncomment", parser2.comment);
                }
                parser2.comment = "";
              } else {
                parser2.comment += "-" + c;
                parser2.state = S.COMMENT;
              }
              continue;
            case S.COMMENT_ENDED:
              if (c !== ">") {
                strictFail(parser2, "Malformed comment");
                parser2.comment += "--" + c;
                parser2.state = S.COMMENT;
              } else {
                parser2.state = S.TEXT;
              }
              continue;
            case S.CDATA:
              if (c === "]") {
                parser2.state = S.CDATA_ENDING;
              } else {
                parser2.cdata += c;
              }
              continue;
            case S.CDATA_ENDING:
              if (c === "]") {
                parser2.state = S.CDATA_ENDING_2;
              } else {
                parser2.cdata += "]" + c;
                parser2.state = S.CDATA;
              }
              continue;
            case S.CDATA_ENDING_2:
              if (c === ">") {
                if (parser2.cdata) {
                  emitNode(parser2, "oncdata", parser2.cdata);
                }
                emitNode(parser2, "onclosecdata");
                parser2.cdata = "";
                parser2.state = S.TEXT;
              } else if (c === "]") {
                parser2.cdata += "]";
              } else {
                parser2.cdata += "]]" + c;
                parser2.state = S.CDATA;
              }
              continue;
            case S.PROC_INST:
              if (c === "?") {
                parser2.state = S.PROC_INST_ENDING;
              } else if (isWhitespace(c)) {
                parser2.state = S.PROC_INST_BODY;
              } else {
                parser2.procInstName += c;
              }
              continue;
            case S.PROC_INST_BODY:
              if (!parser2.procInstBody && isWhitespace(c)) {
                continue;
              } else if (c === "?") {
                parser2.state = S.PROC_INST_ENDING;
              } else {
                parser2.procInstBody += c;
              }
              continue;
            case S.PROC_INST_ENDING:
              if (c === ">") {
                emitNode(parser2, "onprocessinginstruction", {
                  name: parser2.procInstName,
                  body: parser2.procInstBody
                });
                parser2.procInstName = parser2.procInstBody = "";
                parser2.state = S.TEXT;
              } else {
                parser2.procInstBody += "?" + c;
                parser2.state = S.PROC_INST_BODY;
              }
              continue;
            case S.OPEN_TAG:
              if (isMatch(nameBody, c)) {
                parser2.tagName += c;
              } else {
                newTag(parser2);
                if (c === ">") {
                  openTag(parser2);
                } else if (c === "/") {
                  parser2.state = S.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c)) {
                    strictFail(parser2, "Invalid character in tag name");
                  }
                  parser2.state = S.ATTRIB;
                }
              }
              continue;
            case S.OPEN_TAG_SLASH:
              if (c === ">") {
                openTag(parser2, true);
                closeTag(parser2);
              } else {
                strictFail(parser2, "Forward-slash in opening tag not followed by >");
                parser2.state = S.ATTRIB;
              }
              continue;
            case S.ATTRIB:
              if (isWhitespace(c)) {
                continue;
              } else if (c === ">") {
                openTag(parser2);
              } else if (c === "/") {
                parser2.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                parser2.attribName = c;
                parser2.attribValue = "";
                parser2.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser2, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME:
              if (c === "=") {
                parser2.state = S.ATTRIB_VALUE;
              } else if (c === ">") {
                strictFail(parser2, "Attribute without value");
                parser2.attribValue = parser2.attribName;
                attrib(parser2);
                openTag(parser2);
              } else if (isWhitespace(c)) {
                parser2.state = S.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c)) {
                parser2.attribName += c;
              } else {
                strictFail(parser2, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_NAME_SAW_WHITE:
              if (c === "=") {
                parser2.state = S.ATTRIB_VALUE;
              } else if (isWhitespace(c)) {
                continue;
              } else {
                strictFail(parser2, "Attribute without value");
                parser2.tag.attributes[parser2.attribName] = "";
                parser2.attribValue = "";
                emitNode(parser2, "onattribute", {
                  name: parser2.attribName,
                  value: ""
                });
                parser2.attribName = "";
                if (c === ">") {
                  openTag(parser2);
                } else if (isMatch(nameStart, c)) {
                  parser2.attribName = c;
                  parser2.state = S.ATTRIB_NAME;
                } else {
                  strictFail(parser2, "Invalid attribute name");
                  parser2.state = S.ATTRIB;
                }
              }
              continue;
            case S.ATTRIB_VALUE:
              if (isWhitespace(c)) {
                continue;
              } else if (isQuote(c)) {
                parser2.q = c;
                parser2.state = S.ATTRIB_VALUE_QUOTED;
              } else {
                strictFail(parser2, "Unquoted attribute value");
                parser2.state = S.ATTRIB_VALUE_UNQUOTED;
                parser2.attribValue = c;
              }
              continue;
            case S.ATTRIB_VALUE_QUOTED:
              if (c !== parser2.q) {
                if (c === "&") {
                  parser2.state = S.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser2.attribValue += c;
                }
                continue;
              }
              attrib(parser2);
              parser2.q = "";
              parser2.state = S.ATTRIB_VALUE_CLOSED;
              continue;
            case S.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c)) {
                parser2.state = S.ATTRIB;
              } else if (c === ">") {
                openTag(parser2);
              } else if (c === "/") {
                parser2.state = S.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c)) {
                strictFail(parser2, "No whitespace between attributes");
                parser2.attribName = c;
                parser2.attribValue = "";
                parser2.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser2, "Invalid attribute name");
              }
              continue;
            case S.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c)) {
                if (c === "&") {
                  parser2.state = S.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser2.attribValue += c;
                }
                continue;
              }
              attrib(parser2);
              if (c === ">") {
                openTag(parser2);
              } else {
                parser2.state = S.ATTRIB;
              }
              continue;
            case S.CLOSE_TAG:
              if (!parser2.tagName) {
                if (isWhitespace(c)) {
                  continue;
                } else if (notMatch(nameStart, c)) {
                  if (parser2.script) {
                    parser2.script += "</" + c;
                    parser2.state = S.SCRIPT;
                  } else {
                    strictFail(parser2, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser2.tagName = c;
                }
              } else if (c === ">") {
                closeTag(parser2);
              } else if (isMatch(nameBody, c)) {
                parser2.tagName += c;
              } else if (parser2.script) {
                parser2.script += "</" + parser2.tagName;
                parser2.tagName = "";
                parser2.state = S.SCRIPT;
              } else {
                if (!isWhitespace(c)) {
                  strictFail(parser2, "Invalid tagname in closing tag");
                }
                parser2.state = S.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c)) {
                continue;
              }
              if (c === ">") {
                closeTag(parser2);
              } else {
                strictFail(parser2, "Invalid characters in closing tag");
              }
              continue;
            case S.TEXT_ENTITY:
            case S.ATTRIB_VALUE_ENTITY_Q:
            case S.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer;
              switch (parser2.state) {
                case S.TEXT_ENTITY:
                  returnState = S.TEXT;
                  buffer = "textNode";
                  break;
                case S.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S.ATTRIB_VALUE_QUOTED;
                  buffer = "attribValue";
                  break;
                case S.ATTRIB_VALUE_ENTITY_U:
                  returnState = S.ATTRIB_VALUE_UNQUOTED;
                  buffer = "attribValue";
                  break;
              }
              if (c === ";") {
                if (parser2.opt.unparsedEntities) {
                  var parsedEntity = parseEntity(parser2);
                  parser2.entity = "";
                  parser2.state = returnState;
                  parser2.write(parsedEntity);
                } else {
                  parser2[buffer] += parseEntity(parser2);
                  parser2.entity = "";
                  parser2.state = returnState;
                }
              } else if (isMatch(parser2.entity.length ? entityBody : entityStart, c)) {
                parser2.entity += c;
              } else {
                strictFail(parser2, "Invalid character in entity name");
                parser2[buffer] += "&" + parser2.entity + c;
                parser2.entity = "";
                parser2.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser2, "Unknown state: " + parser2.state);
            }
          }
        }
        if (parser2.position >= parser2.bufferCheckPosition) {
          checkBufferLength(parser2);
        }
        return parser2;
      }
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(typeof exports2 === "undefined" ? exports2.sax = {} : exports2);
  }
});

// node_modules/xml2js/lib/bom.js
var require_bom = __commonJS({
  "node_modules/xml2js/lib/bom.js"(exports2) {
    (function() {
      "use strict";
      exports2.stripBOM = function(str) {
        if (str[0] === "\uFEFF") {
          return str.substring(1);
        } else {
          return str;
        }
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/processors.js
var require_processors = __commonJS({
  "node_modules/xml2js/lib/processors.js"(exports2) {
    (function() {
      "use strict";
      var prefixMatch;
      prefixMatch = new RegExp(/(?!xmlns)^.*:/);
      exports2.normalize = function(str) {
        return str.toLowerCase();
      };
      exports2.firstCharLowerCase = function(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
      };
      exports2.stripPrefix = function(str) {
        return str.replace(prefixMatch, "");
      };
      exports2.parseNumbers = function(str) {
        if (!isNaN(str)) {
          str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
        }
        return str;
      };
      exports2.parseBooleans = function(str) {
        if (/^(?:true|false)$/i.test(str)) {
          str = str.toLowerCase() === "true";
        }
        return str;
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/parser.js
var require_parser = __commonJS({
  "node_modules/xml2js/lib/parser.js"(exports2) {
    (function() {
      "use strict";
      var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate, bind = function(fn, me) {
        return function() {
          return fn.apply(me, arguments);
        };
      }, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      sax = require_sax();
      events = require("events");
      bom = require_bom();
      processors = require_processors();
      setImmediate = require("timers").setImmediate;
      defaults = require_defaults().defaults;
      isEmpty = function(thing) {
        return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
      };
      processItem = function(processors2, item, key) {
        var i, len, process;
        for (i = 0, len = processors2.length; i < len; i++) {
          process = processors2[i];
          item = process(item, key);
        }
        return item;
      };
      exports2.Parser = function(superClass) {
        extend(Parser2, superClass);
        function Parser2(opts) {
          this.parseStringPromise = bind(this.parseStringPromise, this);
          this.parseString = bind(this.parseString, this);
          this.reset = bind(this.reset, this);
          this.assignOrPush = bind(this.assignOrPush, this);
          this.processAsync = bind(this.processAsync, this);
          var key, ref, value;
          if (!(this instanceof exports2.Parser)) {
            return new exports2.Parser(opts);
          }
          this.options = {};
          ref = defaults["0.2"];
          for (key in ref) {
            if (!hasProp.call(ref, key))
              continue;
            value = ref[key];
            this.options[key] = value;
          }
          for (key in opts) {
            if (!hasProp.call(opts, key))
              continue;
            value = opts[key];
            this.options[key] = value;
          }
          if (this.options.xmlns) {
            this.options.xmlnskey = this.options.attrkey + "ns";
          }
          if (this.options.normalizeTags) {
            if (!this.options.tagNameProcessors) {
              this.options.tagNameProcessors = [];
            }
            this.options.tagNameProcessors.unshift(processors.normalize);
          }
          this.reset();
        }
        Parser2.prototype.processAsync = function() {
          var chunk, err;
          try {
            if (this.remaining.length <= this.options.chunkSize) {
              chunk = this.remaining;
              this.remaining = "";
              this.saxParser = this.saxParser.write(chunk);
              return this.saxParser.close();
            } else {
              chunk = this.remaining.substr(0, this.options.chunkSize);
              this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
              this.saxParser = this.saxParser.write(chunk);
              return setImmediate(this.processAsync);
            }
          } catch (error1) {
            err = error1;
            if (!this.saxParser.errThrown) {
              this.saxParser.errThrown = true;
              return this.emit(err);
            }
          }
        };
        Parser2.prototype.assignOrPush = function(obj, key, newValue) {
          if (!(key in obj)) {
            if (!this.options.explicitArray) {
              return obj[key] = newValue;
            } else {
              return obj[key] = [newValue];
            }
          } else {
            if (!(obj[key] instanceof Array)) {
              obj[key] = [obj[key]];
            }
            return obj[key].push(newValue);
          }
        };
        Parser2.prototype.reset = function() {
          var attrkey, charkey, ontext, stack;
          this.removeAllListeners();
          this.saxParser = sax.parser(this.options.strict, {
            trim: false,
            normalize: false,
            xmlns: this.options.xmlns
          });
          this.saxParser.errThrown = false;
          this.saxParser.onerror = /* @__PURE__ */ function(_this) {
            return function(error) {
              _this.saxParser.resume();
              if (!_this.saxParser.errThrown) {
                _this.saxParser.errThrown = true;
                return _this.emit("error", error);
              }
            };
          }(this);
          this.saxParser.onend = /* @__PURE__ */ function(_this) {
            return function() {
              if (!_this.saxParser.ended) {
                _this.saxParser.ended = true;
                return _this.emit("end", _this.resultObject);
              }
            };
          }(this);
          this.saxParser.ended = false;
          this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
          this.resultObject = null;
          stack = [];
          attrkey = this.options.attrkey;
          charkey = this.options.charkey;
          this.saxParser.onopentag = /* @__PURE__ */ function(_this) {
            return function(node) {
              var key, newValue, obj, processedKey, ref;
              obj = /* @__PURE__ */ Object.create(null);
              obj[charkey] = "";
              if (!_this.options.ignoreAttrs) {
                ref = node.attributes;
                for (key in ref) {
                  if (!hasProp.call(ref, key))
                    continue;
                  if (!(attrkey in obj) && !_this.options.mergeAttrs) {
                    obj[attrkey] = /* @__PURE__ */ Object.create(null);
                  }
                  newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
                  processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
                  if (_this.options.mergeAttrs) {
                    _this.assignOrPush(obj, processedKey, newValue);
                  } else {
                    obj[attrkey][processedKey] = newValue;
                  }
                }
              }
              obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
              if (_this.options.xmlns) {
                obj[_this.options.xmlnskey] = {
                  uri: node.uri,
                  local: node.local
                };
              }
              return stack.push(obj);
            };
          }(this);
          this.saxParser.onclosetag = /* @__PURE__ */ function(_this) {
            return function() {
              var cdata, emptyStr, key, node, nodeName, obj, objClone, old, s, xpath;
              obj = stack.pop();
              nodeName = obj["#name"];
              if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
                delete obj["#name"];
              }
              if (obj.cdata === true) {
                cdata = obj.cdata;
                delete obj.cdata;
              }
              s = stack[stack.length - 1];
              if (obj[charkey].match(/^\s*$/) && !cdata) {
                emptyStr = obj[charkey];
                delete obj[charkey];
              } else {
                if (_this.options.trim) {
                  obj[charkey] = obj[charkey].trim();
                }
                if (_this.options.normalize) {
                  obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
                }
                obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
                if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                  obj = obj[charkey];
                }
              }
              if (isEmpty(obj)) {
                if (typeof _this.options.emptyTag === "function") {
                  obj = _this.options.emptyTag();
                } else {
                  obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
                }
              }
              if (_this.options.validator != null) {
                xpath = "/" + function() {
                  var i, len, results;
                  results = [];
                  for (i = 0, len = stack.length; i < len; i++) {
                    node = stack[i];
                    results.push(node["#name"]);
                  }
                  return results;
                }().concat(nodeName).join("/");
                (function() {
                  var err;
                  try {
                    return obj = _this.options.validator(xpath, s && s[nodeName], obj);
                  } catch (error1) {
                    err = error1;
                    return _this.emit("error", err);
                  }
                })();
              }
              if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === "object") {
                if (!_this.options.preserveChildrenOrder) {
                  node = /* @__PURE__ */ Object.create(null);
                  if (_this.options.attrkey in obj) {
                    node[_this.options.attrkey] = obj[_this.options.attrkey];
                    delete obj[_this.options.attrkey];
                  }
                  if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
                    node[_this.options.charkey] = obj[_this.options.charkey];
                    delete obj[_this.options.charkey];
                  }
                  if (Object.getOwnPropertyNames(obj).length > 0) {
                    node[_this.options.childkey] = obj;
                  }
                  obj = node;
                } else if (s) {
                  s[_this.options.childkey] = s[_this.options.childkey] || [];
                  objClone = /* @__PURE__ */ Object.create(null);
                  for (key in obj) {
                    if (!hasProp.call(obj, key))
                      continue;
                    objClone[key] = obj[key];
                  }
                  s[_this.options.childkey].push(objClone);
                  delete obj["#name"];
                  if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
                    obj = obj[charkey];
                  }
                }
              }
              if (stack.length > 0) {
                return _this.assignOrPush(s, nodeName, obj);
              } else {
                if (_this.options.explicitRoot) {
                  old = obj;
                  obj = /* @__PURE__ */ Object.create(null);
                  obj[nodeName] = old;
                }
                _this.resultObject = obj;
                _this.saxParser.ended = true;
                return _this.emit("end", _this.resultObject);
              }
            };
          }(this);
          ontext = /* @__PURE__ */ function(_this) {
            return function(text) {
              var charChild, s;
              s = stack[stack.length - 1];
              if (s) {
                s[charkey] += text;
                if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
                  s[_this.options.childkey] = s[_this.options.childkey] || [];
                  charChild = {
                    "#name": "__text__"
                  };
                  charChild[charkey] = text;
                  if (_this.options.normalize) {
                    charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
                  }
                  s[_this.options.childkey].push(charChild);
                }
                return s;
              }
            };
          }(this);
          this.saxParser.ontext = ontext;
          return this.saxParser.oncdata = /* @__PURE__ */ function(_this) {
            return function(text) {
              var s;
              s = ontext(text);
              if (s) {
                return s.cdata = true;
              }
            };
          }(this);
        };
        Parser2.prototype.parseString = function(str, cb) {
          var err;
          if (cb != null && typeof cb === "function") {
            this.on("end", function(result) {
              this.reset();
              return cb(null, result);
            });
            this.on("error", function(err2) {
              this.reset();
              return cb(err2);
            });
          }
          try {
            str = str.toString();
            if (str.trim() === "") {
              this.emit("end", null);
              return true;
            }
            str = bom.stripBOM(str);
            if (this.options.async) {
              this.remaining = str;
              setImmediate(this.processAsync);
              return this.saxParser;
            }
            return this.saxParser.write(str).close();
          } catch (error1) {
            err = error1;
            if (!(this.saxParser.errThrown || this.saxParser.ended)) {
              this.emit("error", err);
              return this.saxParser.errThrown = true;
            } else if (this.saxParser.ended) {
              throw err;
            }
          }
        };
        Parser2.prototype.parseStringPromise = function(str) {
          return new Promise(/* @__PURE__ */ function(_this) {
            return function(resolve, reject) {
              return _this.parseString(str, function(err, value) {
                if (err) {
                  return reject(err);
                } else {
                  return resolve(value);
                }
              });
            };
          }(this));
        };
        return Parser2;
      }(events);
      exports2.parseString = function(str, a, b) {
        var cb, options, parser2;
        if (b != null) {
          if (typeof b === "function") {
            cb = b;
          }
          if (typeof a === "object") {
            options = a;
          }
        } else {
          if (typeof a === "function") {
            cb = a;
          }
          options = {};
        }
        parser2 = new exports2.Parser(options);
        return parser2.parseString(str, cb);
      };
      exports2.parseStringPromise = function(str, a) {
        var options, parser2;
        if (typeof a === "object") {
          options = a;
        }
        parser2 = new exports2.Parser(options);
        return parser2.parseStringPromise(str);
      };
    }).call(exports2);
  }
});

// node_modules/xml2js/lib/xml2js.js
var require_xml2js = __commonJS({
  "node_modules/xml2js/lib/xml2js.js"(exports2) {
    (function() {
      "use strict";
      var builder, defaults, parser2, processors, extend = function(child, parent) {
        for (var key in parent) {
          if (hasProp.call(parent, key))
            child[key] = parent[key];
        }
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
      }, hasProp = {}.hasOwnProperty;
      defaults = require_defaults();
      builder = require_builder();
      parser2 = require_parser();
      processors = require_processors();
      exports2.defaults = defaults.defaults;
      exports2.processors = processors;
      exports2.ValidationError = function(superClass) {
        extend(ValidationError, superClass);
        function ValidationError(message) {
          this.message = message;
        }
        return ValidationError;
      }(Error);
      exports2.Builder = builder.Builder;
      exports2.Parser = parser2.Parser;
      exports2.parseString = parser2.parseString;
      exports2.parseStringPromise = parser2.parseStringPromise;
    }).call(exports2);
  }
});

// node_modules/rss-parser/lib/fields.js
var require_fields = __commonJS({
  "node_modules/rss-parser/lib/fields.js"(exports2, module2) {
    var fields = module2.exports = {};
    fields.feed = [
      ["author", "creator"],
      ["dc:publisher", "publisher"],
      ["dc:creator", "creator"],
      ["dc:source", "source"],
      ["dc:title", "title"],
      ["dc:type", "type"],
      "title",
      "description",
      "author",
      "pubDate",
      "webMaster",
      "managingEditor",
      "generator",
      "link",
      "language",
      "copyright",
      "lastBuildDate",
      "docs",
      "generator",
      "ttl",
      "rating",
      "skipHours",
      "skipDays"
    ];
    fields.item = [
      ["author", "creator"],
      ["dc:creator", "creator"],
      ["dc:date", "date"],
      ["dc:language", "language"],
      ["dc:rights", "rights"],
      ["dc:source", "source"],
      ["dc:title", "title"],
      "title",
      "link",
      "pubDate",
      "author",
      "summary",
      ["content:encoded", "content:encoded", { includeSnippet: true }],
      "enclosure",
      "dc:creator",
      "dc:date",
      "comments"
    ];
    var mapItunesField = function(f) {
      return ["itunes:" + f, f];
    };
    fields.podcastFeed = [
      "author",
      "subtitle",
      "summary",
      "explicit"
    ].map(mapItunesField);
    fields.podcastItem = [
      "author",
      "subtitle",
      "summary",
      "explicit",
      "duration",
      "image",
      "episode",
      "image",
      "season",
      "keywords",
      "episodeType"
    ].map(mapItunesField);
  }
});

// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports2, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
  }
});

// node_modules/entities/lib/maps/legacy.json
var require_legacy = __commonJS({
  "node_modules/entities/lib/maps/legacy.json"(exports2, module2) {
    module2.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
  }
});

// node_modules/entities/lib/maps/xml.json
var require_xml = __commonJS({
  "node_modules/entities/lib/maps/xml.json"(exports2, module2) {
    module2.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  }
});

// node_modules/entities/lib/maps/decode.json
var require_decode = __commonJS({
  "node_modules/entities/lib/maps/decode.json"(exports2, module2) {
    module2.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
  }
});

// node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/lib/decode_codepoint.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var decode_json_1 = __importDefault(require_decode());
    var fromCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      }
    );
    function decodeCodePoint(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return "\uFFFD";
      }
      if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
      }
      return fromCodePoint(codePoint);
    }
    exports2.default = decodeCodePoint;
  }
});

// node_modules/entities/lib/decode.js
var require_decode2 = __commonJS({
  "node_modules/entities/lib/decode.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeHTML = exports2.decodeHTMLStrict = exports2.decodeXML = void 0;
    var entities_json_1 = __importDefault(require_entities());
    var legacy_json_1 = __importDefault(require_legacy());
    var xml_json_1 = __importDefault(require_xml());
    var decode_codepoint_1 = __importDefault(require_decode_codepoint());
    var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
    exports2.decodeXML = getStrictDecoder(xml_json_1.default);
    exports2.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
    function getStrictDecoder(map) {
      var replace = getReplacer(map);
      return function(str) {
        return String(str).replace(strictEntityRe, replace);
      };
    }
    var sorter = function(a, b) {
      return a < b ? 1 : -1;
    };
    exports2.decodeHTML = function() {
      var legacy = Object.keys(legacy_json_1.default).sort(sorter);
      var keys = Object.keys(entities_json_1.default).sort(sorter);
      for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
          keys[i] += ";?";
          j++;
        } else {
          keys[i] += ";";
        }
      }
      var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
      var replace = getReplacer(entities_json_1.default);
      function replacer(str) {
        if (str.substr(-1) !== ";")
          str += ";";
        return replace(str);
      }
      return function(str) {
        return String(str).replace(re, replacer);
      };
    }();
    function getReplacer(map) {
      return function replace(str) {
        if (str.charAt(1) === "#") {
          var secondChar = str.charAt(2);
          if (secondChar === "X" || secondChar === "x") {
            return decode_codepoint_1.default(parseInt(str.substr(3), 16));
          }
          return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        return map[str.slice(1, -1)] || str;
      };
    }
  }
});

// node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "node_modules/entities/lib/encode.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escapeUTF8 = exports2.escape = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.encodeXML = void 0;
    var xml_json_1 = __importDefault(require_xml());
    var inverseXML = getInverseObj(xml_json_1.default);
    var xmlReplacer = getInverseReplacer(inverseXML);
    exports2.encodeXML = getASCIIEncoder(inverseXML);
    var entities_json_1 = __importDefault(require_entities());
    var inverseHTML = getInverseObj(entities_json_1.default);
    var htmlReplacer = getInverseReplacer(inverseHTML);
    exports2.encodeHTML = getInverse(inverseHTML, htmlReplacer);
    exports2.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
    function getInverseObj(obj) {
      return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
      }, {});
    }
    function getInverseReplacer(inverse) {
      var single = [];
      var multiple = [];
      for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
          single.push("\\" + k);
        } else {
          multiple.push(k);
        }
      }
      single.sort();
      for (var start = 0; start < single.length - 1; start++) {
        var end = start;
        while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
          end += 1;
        }
        var count = 1 + end - start;
        if (count < 3)
          continue;
        single.splice(start, count, single[start] + "-" + single[end]);
      }
      multiple.unshift("[" + single.join("") + "]");
      return new RegExp(multiple.join("|"), "g");
    }
    var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
    var getCodePoint = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      String.prototype.codePointAt != null ? (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function(str) {
          return str.codePointAt(0);
        }
      ) : (
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function(c) {
          return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
        }
      )
    );
    function singleCharReplacer(c) {
      return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
    }
    function getInverse(inverse, re) {
      return function(data) {
        return data.replace(re, function(name) {
          return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
      };
    }
    var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
    function escape(data) {
      return data.replace(reEscapeChars, singleCharReplacer);
    }
    exports2.escape = escape;
    function escapeUTF8(data) {
      return data.replace(xmlReplacer, singleCharReplacer);
    }
    exports2.escapeUTF8 = escapeUTF8;
    function getASCIIEncoder(obj) {
      return function(data) {
        return data.replace(reEscapeChars, function(c) {
          return obj[c] || singleCharReplacer(c);
        });
      };
    }
  }
});

// node_modules/entities/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/entities/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXMLStrict = exports2.decodeHTML5Strict = exports2.decodeHTML4Strict = exports2.decodeHTML5 = exports2.decodeHTML4 = exports2.decodeHTMLStrict = exports2.decodeHTML = exports2.decodeXML = exports2.encodeHTML5 = exports2.encodeHTML4 = exports2.escapeUTF8 = exports2.escape = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.encodeXML = exports2.encode = exports2.decodeStrict = exports2.decode = void 0;
    var decode_1 = require_decode2();
    var encode_1 = require_encode();
    function decode(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports2.decode = decode;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports2.decodeStrict = decodeStrict;
    function encode(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports2.encode = encode;
    var encode_2 = require_encode();
    Object.defineProperty(exports2, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports2, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports2, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports2, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = require_decode2();
    Object.defineProperty(exports2, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports2, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  }
});

// node_modules/rss-parser/lib/utils.js
var require_utils = __commonJS({
  "node_modules/rss-parser/lib/utils.js"(exports2, module2) {
    var utils = module2.exports = {};
    var entities = require_lib2();
    var xml2js = require_xml2js();
    utils.stripHtml = function(str) {
      str = str.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, "$1\n$3");
      str = str.replace(/<(?:.|\n)*?>/gm, "");
      return str;
    };
    utils.getSnippet = function(str) {
      return entities.decodeHTML(utils.stripHtml(str)).trim();
    };
    utils.getLink = function(links, rel, fallbackIdx) {
      if (!links)
        return;
      for (let i = 0; i < links.length; ++i) {
        if (links[i].$.rel === rel)
          return links[i].$.href;
      }
      if (links[fallbackIdx])
        return links[fallbackIdx].$.href;
    };
    utils.getContent = function(content) {
      if (typeof content._ === "string") {
        return content._;
      } else if (typeof content === "object") {
        let builder = new xml2js.Builder({ headless: true, explicitRoot: true, rootName: "div", renderOpts: { pretty: false } });
        return builder.buildObject(content);
      } else {
        return content;
      }
    };
    utils.copyFromXML = function(xml, dest, fields) {
      fields.forEach(function(f) {
        let from = f;
        let to = f;
        let options = {};
        if (Array.isArray(f)) {
          from = f[0];
          to = f[1];
          if (f.length > 2) {
            options = f[2];
          }
        }
        const { keepArray, includeSnippet } = options;
        if (xml[from] !== void 0) {
          dest[to] = keepArray ? xml[from] : xml[from][0];
        }
        if (dest[to] && typeof dest[to]._ === "string") {
          dest[to] = dest[to]._;
        }
        if (includeSnippet && dest[to] && typeof dest[to] === "string") {
          dest[to + "Snippet"] = utils.getSnippet(dest[to]);
        }
      });
    };
    utils.maybePromisify = function(callback, promise) {
      if (!callback)
        return promise;
      return promise.then(
        (data) => setTimeout(() => callback(null, data)),
        (err) => setTimeout(() => callback(err))
      );
    };
    var DEFAULT_ENCODING = "utf8";
    var ENCODING_REGEX = /(encoding|charset)\s*=\s*(\S+)/;
    var SUPPORTED_ENCODINGS = ["ascii", "utf8", "utf16le", "ucs2", "base64", "latin1", "binary", "hex"];
    var ENCODING_ALIASES = {
      "utf-8": "utf8",
      "iso-8859-1": "latin1"
    };
    utils.getEncodingFromContentType = function(contentType) {
      contentType = contentType || "";
      let match = contentType.match(ENCODING_REGEX);
      let encoding = (match || [])[2] || "";
      encoding = encoding.toLowerCase();
      encoding = ENCODING_ALIASES[encoding] || encoding;
      if (!encoding || SUPPORTED_ENCODINGS.indexOf(encoding) === -1) {
        encoding = DEFAULT_ENCODING;
      }
      return encoding;
    };
  }
});

// node_modules/rss-parser/lib/parser.js
var require_parser2 = __commonJS({
  "node_modules/rss-parser/lib/parser.js"(exports2, module2) {
    "use strict";
    var http = require("http");
    var https = require("https");
    var xml2js = require_xml2js();
    var url = require("url");
    var fields = require_fields();
    var utils = require_utils();
    var DEFAULT_HEADERS = {
      "User-Agent": "rss-parser",
      "Accept": "application/rss+xml"
    };
    var DEFAULT_MAX_REDIRECTS = 5;
    var DEFAULT_TIMEOUT = 6e4;
    var Parser2 = class {
      constructor(options = {}) {
        options.headers = options.headers || {};
        options.xml2js = options.xml2js || {};
        options.customFields = options.customFields || {};
        options.customFields.item = options.customFields.item || [];
        options.customFields.feed = options.customFields.feed || [];
        options.requestOptions = options.requestOptions || {};
        if (!options.maxRedirects)
          options.maxRedirects = DEFAULT_MAX_REDIRECTS;
        if (!options.timeout)
          options.timeout = DEFAULT_TIMEOUT;
        this.options = options;
        this.xmlParser = new xml2js.Parser(this.options.xml2js);
      }
      parseString(xml, callback) {
        let prom = new Promise((resolve, reject) => {
          this.xmlParser.parseString(xml, (err, result) => {
            if (err)
              return reject(err);
            if (!result) {
              return reject(new Error("Unable to parse XML."));
            }
            let feed = null;
            if (result.feed) {
              feed = this.buildAtomFeed(result);
            } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/^2/)) {
              feed = this.buildRSS2(result);
            } else if (result["rdf:RDF"]) {
              feed = this.buildRSS1(result);
            } else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/0\.9/)) {
              feed = this.buildRSS0_9(result);
            } else if (result.rss && this.options.defaultRSS) {
              switch (this.options.defaultRSS) {
                case 0.9:
                  feed = this.buildRSS0_9(result);
                  break;
                case 1:
                  feed = this.buildRSS1(result);
                  break;
                case 2:
                  feed = this.buildRSS2(result);
                  break;
                default:
                  return reject(new Error("default RSS version not recognized."));
              }
            } else {
              return reject(new Error("Feed not recognized as RSS 1 or 2."));
            }
            resolve(feed);
          });
        });
        prom = utils.maybePromisify(callback, prom);
        return prom;
      }
      parseURL(feedUrl, callback, redirectCount = 0) {
        let xml = "";
        let get = feedUrl.indexOf("https") === 0 ? https.get : http.get;
        let urlParts = url.parse(feedUrl);
        let headers = Object.assign({}, DEFAULT_HEADERS, this.options.headers);
        let timeout = null;
        let prom = new Promise((resolve, reject) => {
          const requestOpts = Object.assign({ headers }, urlParts, this.options.requestOptions);
          let req = get(requestOpts, (res) => {
            if (this.options.maxRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers["location"]) {
              if (redirectCount === this.options.maxRedirects) {
                return reject(new Error("Too many redirects"));
              } else {
                const newLocation = url.resolve(feedUrl, res.headers["location"]);
                return this.parseURL(newLocation, null, redirectCount + 1).then(resolve, reject);
              }
            } else if (res.statusCode >= 300) {
              return reject(new Error("Status code " + res.statusCode));
            }
            let encoding = utils.getEncodingFromContentType(res.headers["content-type"]);
            res.setEncoding(encoding);
            res.on("data", (chunk) => {
              xml += chunk;
            });
            res.on("end", () => {
              return this.parseString(xml).then(resolve, reject);
            });
          });
          req.on("error", reject);
          timeout = setTimeout(() => {
            return reject(new Error("Request timed out after " + this.options.timeout + "ms"));
          }, this.options.timeout);
        }).then((data) => {
          clearTimeout(timeout);
          return Promise.resolve(data);
        }, (e) => {
          clearTimeout(timeout);
          return Promise.reject(e);
        });
        prom = utils.maybePromisify(callback, prom);
        return prom;
      }
      buildAtomFeed(xmlObj) {
        let feed = { items: [] };
        utils.copyFromXML(xmlObj.feed, feed, this.options.customFields.feed);
        if (xmlObj.feed.link) {
          feed.link = utils.getLink(xmlObj.feed.link, "alternate", 0);
          feed.feedUrl = utils.getLink(xmlObj.feed.link, "self", 1);
        }
        if (xmlObj.feed.title) {
          let title = xmlObj.feed.title[0] || "";
          if (title._)
            title = title._;
          if (title)
            feed.title = title;
        }
        if (xmlObj.feed.updated) {
          feed.lastBuildDate = xmlObj.feed.updated[0];
        }
        feed.items = (xmlObj.feed.entry || []).map((entry) => this.parseItemAtom(entry));
        return feed;
      }
      parseItemAtom(entry) {
        let item = {};
        utils.copyFromXML(entry, item, this.options.customFields.item);
        if (entry.title) {
          let title = entry.title[0] || "";
          if (title._)
            title = title._;
          if (title)
            item.title = title;
        }
        if (entry.link && entry.link.length) {
          item.link = utils.getLink(entry.link, "alternate", 0);
        }
        if (entry.published && entry.published.length && entry.published[0].length)
          item.pubDate = new Date(entry.published[0]).toISOString();
        if (!item.pubDate && entry.updated && entry.updated.length && entry.updated[0].length)
          item.pubDate = new Date(entry.updated[0]).toISOString();
        if (entry.author && entry.author.length && entry.author[0].name && entry.author[0].name.length)
          item.author = entry.author[0].name[0];
        if (entry.content && entry.content.length) {
          item.content = utils.getContent(entry.content[0]);
          item.contentSnippet = utils.getSnippet(item.content);
        }
        if (entry.summary && entry.summary.length) {
          item.summary = utils.getContent(entry.summary[0]);
        }
        if (entry.id) {
          item.id = entry.id[0];
        }
        this.setISODate(item);
        return item;
      }
      buildRSS0_9(xmlObj) {
        var channel = xmlObj.rss.channel[0];
        var items = channel.item;
        return this.buildRSS(channel, items);
      }
      buildRSS1(xmlObj) {
        xmlObj = xmlObj["rdf:RDF"];
        let channel = xmlObj.channel[0];
        let items = xmlObj.item;
        return this.buildRSS(channel, items);
      }
      buildRSS2(xmlObj) {
        let channel = xmlObj.rss.channel[0];
        let items = channel.item;
        let feed = this.buildRSS(channel, items);
        if (xmlObj.rss.$ && xmlObj.rss.$["xmlns:itunes"]) {
          this.decorateItunes(feed, channel);
        }
        return feed;
      }
      buildRSS(channel, items) {
        items = items || [];
        let feed = { items: [] };
        let feedFields = fields.feed.concat(this.options.customFields.feed);
        let itemFields = fields.item.concat(this.options.customFields.item);
        if (channel["atom:link"] && channel["atom:link"][0] && channel["atom:link"][0].$) {
          feed.feedUrl = channel["atom:link"][0].$.href;
        }
        if (channel.image && channel.image[0] && channel.image[0].url) {
          feed.image = {};
          let image = channel.image[0];
          if (image.link)
            feed.image.link = image.link[0];
          if (image.url)
            feed.image.url = image.url[0];
          if (image.title)
            feed.image.title = image.title[0];
          if (image.width)
            feed.image.width = image.width[0];
          if (image.height)
            feed.image.height = image.height[0];
        }
        const paginationLinks = this.generatePaginationLinks(channel);
        if (Object.keys(paginationLinks).length) {
          feed.paginationLinks = paginationLinks;
        }
        utils.copyFromXML(channel, feed, feedFields);
        feed.items = items.map((xmlItem) => this.parseItemRss(xmlItem, itemFields));
        return feed;
      }
      parseItemRss(xmlItem, itemFields) {
        let item = {};
        utils.copyFromXML(xmlItem, item, itemFields);
        if (xmlItem.enclosure) {
          item.enclosure = xmlItem.enclosure[0].$;
        }
        if (xmlItem.description) {
          item.content = utils.getContent(xmlItem.description[0]);
          item.contentSnippet = utils.getSnippet(item.content);
        }
        if (xmlItem.guid) {
          item.guid = xmlItem.guid[0];
          if (item.guid._)
            item.guid = item.guid._;
        }
        if (xmlItem.$ && xmlItem.$["rdf:about"]) {
          item["rdf:about"] = xmlItem.$["rdf:about"];
        }
        if (xmlItem.category)
          item.categories = xmlItem.category;
        this.setISODate(item);
        return item;
      }
      /**
       * Add iTunes specific fields from XML to extracted JSON
       *
       * @access public
       * @param {object} feed extracted
       * @param {object} channel parsed XML
       */
      decorateItunes(feed, channel) {
        let items = channel.item || [];
        let categories = [];
        feed.itunes = {};
        if (channel["itunes:owner"]) {
          let owner = {};
          if (channel["itunes:owner"][0]["itunes:name"]) {
            owner.name = channel["itunes:owner"][0]["itunes:name"][0];
          }
          if (channel["itunes:owner"][0]["itunes:email"]) {
            owner.email = channel["itunes:owner"][0]["itunes:email"][0];
          }
          feed.itunes.owner = owner;
        }
        if (channel["itunes:image"]) {
          let image;
          let hasImageHref = channel["itunes:image"][0] && channel["itunes:image"][0].$ && channel["itunes:image"][0].$.href;
          image = hasImageHref ? channel["itunes:image"][0].$.href : null;
          if (image) {
            feed.itunes.image = image;
          }
        }
        if (channel["itunes:category"]) {
          const categoriesWithSubs = channel["itunes:category"].map((category) => {
            return {
              name: category && category.$ && category.$.text,
              subs: category["itunes:category"] ? category["itunes:category"].map((subcategory) => ({
                name: subcategory && subcategory.$ && subcategory.$.text
              })) : null
            };
          });
          feed.itunes.categories = categoriesWithSubs.map((category) => category.name);
          feed.itunes.categoriesWithSubs = categoriesWithSubs;
        }
        if (channel["itunes:keywords"]) {
          if (channel["itunes:keywords"].length > 1) {
            feed.itunes.keywords = channel["itunes:keywords"].map(
              (keyword) => keyword && keyword.$ && keyword.$.text
            );
          } else {
            let keywords = channel["itunes:keywords"][0];
            if (keywords && typeof keywords._ === "string") {
              keywords = keywords._;
            }
            if (keywords && keywords.$ && keywords.$.text) {
              feed.itunes.keywords = keywords.$.text.split(",");
            } else if (typeof keywords === "string") {
              feed.itunes.keywords = keywords.split(",");
            }
          }
        }
        utils.copyFromXML(channel, feed.itunes, fields.podcastFeed);
        items.forEach((item, index) => {
          let entry = feed.items[index];
          entry.itunes = {};
          utils.copyFromXML(item, entry.itunes, fields.podcastItem);
          let image = item["itunes:image"];
          if (image && image[0] && image[0].$ && image[0].$.href) {
            entry.itunes.image = image[0].$.href;
          }
        });
      }
      setISODate(item) {
        let date = item.pubDate || item.date;
        if (date) {
          try {
            item.isoDate = new Date(date.trim()).toISOString();
          } catch (e) {
          }
        }
      }
      /**
       * Generates a pagination object where the rel attribute is the key and href attribute is the value
       *  { self: 'self-url', first: 'first-url', ...  }
       *
       * @access private
       * @param {Object} channel parsed XML
       * @returns {Object}
       */
      generatePaginationLinks(channel) {
        if (!channel["atom:link"]) {
          return {};
        }
        const paginationRelAttributes = ["self", "first", "next", "prev", "last"];
        return channel["atom:link"].reduce((paginationLinks, link) => {
          if (!link.$ || !paginationRelAttributes.includes(link.$.rel)) {
            return paginationLinks;
          }
          paginationLinks[link.$.rel] = link.$.href;
          return paginationLinks;
        }, {});
      }
    };
    module2.exports = Parser2;
  }
});

// node_modules/rss-parser/index.js
var require_rss_parser = __commonJS({
  "node_modules/rss-parser/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_parser2();
  }
});

// src/rssfeed.tsx
var rssfeed_exports = {};
__export(rssfeed_exports, {
  default: () => Command
});
module.exports = __toCommonJS(rssfeed_exports);
var import_api = require("@raycast/api");
var import_react = require("react");
var import_rss_parser = __toESM(require_rss_parser());
var import_jsx_runtime = require("react/jsx-runtime");
var parser = new import_rss_parser.default();
function Command() {
  const [state, setState] = (0, import_react.useState)({});
  (0, import_react.useEffect)(() => {
    async function fetchStories() {
      try {
        const feed = await parser.parseURL("https://hnrss.org/frontpage?description=0&count=25");
        setState({ items: feed.items });
      } catch (error) {
        setState({
          error: error instanceof Error ? error : new Error("Something went wrong")
        });
      }
    }
    fetchStories();
  }, []);
  console.log(state.items);
  if (state.error) {
    (0, import_api.showToast)({
      style: import_api.Toast.Style.Failure,
      title: "Failed loading stories",
      message: state.error.message
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List, { isLoading: !state.items && !state.error, children: state.items?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryListItem, { item, index }, item.guid)) });
}
var iconToEmojiMap = /* @__PURE__ */ new Map([
  [1, "1\uFE0F\u20E3"],
  [2, "2\uFE0F\u20E3"],
  [3, "3\uFE0F\u20E3"],
  [4, "4\uFE0F\u20E3"],
  [5, "5\uFE0F\u20E3"],
  [6, "6\uFE0F\u20E3"],
  [7, "7\uFE0F\u20E3"],
  [8, "8\uFE0F\u20E3"],
  [9, "9\uFE0F\u20E3"],
  [10, "\u{1F51F}"]
]);
function getIcon(index) {
  return iconToEmojiMap.get(index) ?? "\u23FA";
}
function getPoints(item) {
  const matches = item.contentSnippet?.match(/(?<=Points:\s*)(\d+)/g);
  return matches?.[0];
}
function getComments(item) {
  const matches = item.contentSnippet?.match(/(?<=Comments:\s*)(\d+)/g);
  return matches?.[0];
}
function Actions(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { title: props.item.title, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel.Section, { children: [
      props.item.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.OpenInBrowser, { url: props.item.link }),
      props.item.guid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.OpenInBrowser, { url: props.item.guid, title: "Open Comments in Browser" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.ActionPanel.Section, { children: props.item.link && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_api.Action.CopyToClipboard,
      {
        content: props.item.link,
        title: "Copy Link",
        shortcut: { modifiers: ["cmd"], key: "." }
      }
    ) })
  ] });
}
function StoryListItem(props) {
  const icon = getIcon(props.index + 1);
  const points = getPoints(props.item);
  const comments = getComments(props.item);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List.Item,
    {
      icon,
      title: props.item.title ?? "No title",
      subtitle: props.item.creator,
      accessories: [{ text: `\u{1F44D} ${points}` }, { text: `\u{1F4AC}  ${comments}` }],
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Actions, { item: props.item })
    }
  );
}
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sMmpzL2xpYi9kZWZhdWx0cy5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9VdGlsaXR5LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERPTUltcGxlbWVudGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERPTUVycm9ySGFuZGxlci5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxET01TdHJpbmdMaXN0LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERPTUNvbmZpZ3VyYXRpb24uanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvTm9kZVR5cGUuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MQXR0cmlidXRlLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTE5hbWVkTm9kZU1hcC5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxFbGVtZW50LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTENoYXJhY3RlckRhdGEuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MQ0RhdGEuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MQ29tbWVudC5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEZWNsYXJhdGlvbi5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEVERBdHRMaXN0LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERUREVudGl0eS5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEVERFbGVtZW50LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERURE5vdGF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTERvY1R5cGUuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MUmF3LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFRleHQuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTER1bW15LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTE5vZGVMaXN0LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL0RvY3VtZW50UG9zaXRpb24uanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sYnVpbGRlci9saWIvWE1MTm9kZS5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxTdHJpbmdpZmllci5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9Xcml0ZXJTdGF0ZS5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxXcml0ZXJCYXNlLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFN0cmluZ1dyaXRlci5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEb2N1bWVudC5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9YTUxEb2N1bWVudENCLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbGJ1aWxkZXIvbGliL1hNTFN0cmVhbVdyaXRlci5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWxidWlsZGVyL2xpYi9pbmRleC5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy94bWwyanMvbGliL2J1aWxkZXIuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMvc2F4L2xpYi9zYXguanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sMmpzL2xpYi9ib20uanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMveG1sMmpzL2xpYi9wcm9jZXNzb3JzLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbDJqcy9saWIvcGFyc2VyLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3htbDJqcy9saWIveG1sMmpzLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3Jzcy1wYXJzZXIvbGliL2ZpZWxkcy5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvbWFwcy9lbnRpdGllcy5qc29uIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9tYXBzL2xlZ2FjeS5qc29uIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9tYXBzL3htbC5qc29uIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9tYXBzL2RlY29kZS5qc29uIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGUuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VuY29kZS5qcyIsICIuLi8uLi8uLi8uLi9Eb2N1bWVudHMvU29mdHdhcmUvcmF5Y2FzdC9leHRlbnNpb25zL3Jzcy1mZWVkL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMvcnNzLXBhcnNlci9saWIvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9ub2RlX21vZHVsZXMvcnNzLXBhcnNlci9saWIvcGFyc2VyLmpzIiwgIi4uLy4uLy4uLy4uL0RvY3VtZW50cy9Tb2Z0d2FyZS9yYXljYXN0L2V4dGVuc2lvbnMvcnNzLWZlZWQvbm9kZV9tb2R1bGVzL3Jzcy1wYXJzZXIvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vRG9jdW1lbnRzL1NvZnR3YXJlL3JheWNhc3QvZXh0ZW5zaW9ucy9yc3MtZmVlZC9zcmMvcnNzZmVlZC50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIGV4cG9ydHMuZGVmYXVsdHMgPSB7XG4gICAgXCIwLjFcIjoge1xuICAgICAgZXhwbGljaXRDaGFya2V5OiBmYWxzZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICBub3JtYWxpemU6IHRydWUsXG4gICAgICBub3JtYWxpemVUYWdzOiBmYWxzZSxcbiAgICAgIGF0dHJrZXk6IFwiQFwiLFxuICAgICAgY2hhcmtleTogXCIjXCIsXG4gICAgICBleHBsaWNpdEFycmF5OiBmYWxzZSxcbiAgICAgIGlnbm9yZUF0dHJzOiBmYWxzZSxcbiAgICAgIG1lcmdlQXR0cnM6IGZhbHNlLFxuICAgICAgZXhwbGljaXRSb290OiBmYWxzZSxcbiAgICAgIHZhbGlkYXRvcjogbnVsbCxcbiAgICAgIHhtbG5zOiBmYWxzZSxcbiAgICAgIGV4cGxpY2l0Q2hpbGRyZW46IGZhbHNlLFxuICAgICAgY2hpbGRrZXk6ICdAQCcsXG4gICAgICBjaGFyc0FzQ2hpbGRyZW46IGZhbHNlLFxuICAgICAgaW5jbHVkZVdoaXRlQ2hhcnM6IGZhbHNlLFxuICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgYXR0ck5hbWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgYXR0clZhbHVlUHJvY2Vzc29yczogbnVsbCxcbiAgICAgIHRhZ05hbWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgdmFsdWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgZW1wdHlUYWc6ICcnXG4gICAgfSxcbiAgICBcIjAuMlwiOiB7XG4gICAgICBleHBsaWNpdENoYXJrZXk6IGZhbHNlLFxuICAgICAgdHJpbTogZmFsc2UsXG4gICAgICBub3JtYWxpemU6IGZhbHNlLFxuICAgICAgbm9ybWFsaXplVGFnczogZmFsc2UsXG4gICAgICBhdHRya2V5OiBcIiRcIixcbiAgICAgIGNoYXJrZXk6IFwiX1wiLFxuICAgICAgZXhwbGljaXRBcnJheTogdHJ1ZSxcbiAgICAgIGlnbm9yZUF0dHJzOiBmYWxzZSxcbiAgICAgIG1lcmdlQXR0cnM6IGZhbHNlLFxuICAgICAgZXhwbGljaXRSb290OiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiBudWxsLFxuICAgICAgeG1sbnM6IGZhbHNlLFxuICAgICAgZXhwbGljaXRDaGlsZHJlbjogZmFsc2UsXG4gICAgICBwcmVzZXJ2ZUNoaWxkcmVuT3JkZXI6IGZhbHNlLFxuICAgICAgY2hpbGRrZXk6ICckJCcsXG4gICAgICBjaGFyc0FzQ2hpbGRyZW46IGZhbHNlLFxuICAgICAgaW5jbHVkZVdoaXRlQ2hhcnM6IGZhbHNlLFxuICAgICAgYXN5bmM6IGZhbHNlLFxuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgYXR0ck5hbWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgYXR0clZhbHVlUHJvY2Vzc29yczogbnVsbCxcbiAgICAgIHRhZ05hbWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgdmFsdWVQcm9jZXNzb3JzOiBudWxsLFxuICAgICAgcm9vdE5hbWU6ICdyb290JyxcbiAgICAgIHhtbGRlYzoge1xuICAgICAgICAndmVyc2lvbic6ICcxLjAnLFxuICAgICAgICAnZW5jb2RpbmcnOiAnVVRGLTgnLFxuICAgICAgICAnc3RhbmRhbG9uZSc6IHRydWVcbiAgICAgIH0sXG4gICAgICBkb2N0eXBlOiBudWxsLFxuICAgICAgcmVuZGVyT3B0czoge1xuICAgICAgICAncHJldHR5JzogdHJ1ZSxcbiAgICAgICAgJ2luZGVudCc6ICcgICcsXG4gICAgICAgICduZXdsaW5lJzogJ1xcbidcbiAgICAgIH0sXG4gICAgICBoZWFkbGVzczogZmFsc2UsXG4gICAgICBjaHVua1NpemU6IDEwMDAwLFxuICAgICAgZW1wdHlUYWc6ICcnLFxuICAgICAgY2RhdGE6IGZhbHNlXG4gICAgfVxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBhc3NpZ24sIGdldFZhbHVlLCBpc0FycmF5LCBpc0VtcHR5LCBpc0Z1bmN0aW9uLCBpc09iamVjdCwgaXNQbGFpbk9iamVjdCxcbiAgICBzbGljZSA9IFtdLnNsaWNlLFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBhc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwga2V5LCBsZW4sIHNvdXJjZSwgc291cmNlcywgdGFyZ2V0O1xuICAgIHRhcmdldCA9IGFyZ3VtZW50c1swXSwgc291cmNlcyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlmIChpc0Z1bmN0aW9uKE9iamVjdC5hc3NpZ24pKSB7XG4gICAgICBPYmplY3QuYXNzaWduLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuICEhdmFsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xuXG4gIGlzT2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFyIHJlZjtcbiAgICByZXR1cm4gISF2YWwgJiYgKChyZWYgPSB0eXBlb2YgdmFsKSA9PT0gJ2Z1bmN0aW9uJyB8fCByZWYgPT09ICdvYmplY3QnKTtcbiAgfTtcblxuICBpc0FycmF5ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oQXJyYXkuaXNBcnJheSkpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG4gIH07XG5cbiAgaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBrZXk7XG4gICAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmV0dXJuICF2YWwubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiB2YWwpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwodmFsLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgY3RvciwgcHJvdG87XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCkpICYmIChjdG9yID0gcHJvdG8uY29uc3RydWN0b3IpICYmICh0eXBlb2YgY3RvciA9PT0gJ2Z1bmN0aW9uJykgJiYgKGN0b3IgaW5zdGFuY2VvZiBjdG9yKSAmJiAoRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY3RvcikgPT09IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKE9iamVjdCkpO1xuICB9O1xuXG4gIGdldFZhbHVlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqLnZhbHVlT2YpKSB7XG4gICAgICByZXR1cm4gb2JqLnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xuXG4gIG1vZHVsZS5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG4gIG1vZHVsZS5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbiAgbW9kdWxlLmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbiAgbW9kdWxlLmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5cbiAgbW9kdWxlLmV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3Q7XG5cbiAgbW9kdWxlLmV4cG9ydHMuZ2V0VmFsdWUgPSBnZXRWYWx1ZTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MRE9NSW1wbGVtZW50YXRpb247XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxET01JbXBsZW1lbnRhdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYTUxET01JbXBsZW1lbnRhdGlvbigpIHt9XG5cbiAgICBYTUxET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUuaGFzRmVhdHVyZSA9IGZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBYTUxET01JbXBsZW1lbnRhdGlvbi5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRUeXBlID0gZnVuY3Rpb24ocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgWE1MRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50ID0gZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgWE1MRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmNyZWF0ZUhUTUxEb2N1bWVudCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgWE1MRE9NSW1wbGVtZW50YXRpb24ucHJvdG90eXBlLmdldEZlYXR1cmUgPSBmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERPTUltcGxlbWVudGF0aW9uO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjdcbihmdW5jdGlvbigpIHtcbiAgdmFyIFhNTERPTUVycm9ySGFuZGxlcjtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERPTUVycm9ySGFuZGxlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYTUxET01FcnJvckhhbmRsZXIoKSB7fVxuXG4gICAgWE1MRE9NRXJyb3JIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRE9NRXJyb3JIYW5kbGVyO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjdcbihmdW5jdGlvbigpIHtcbiAgdmFyIFhNTERPTVN0cmluZ0xpc3Q7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxET01TdHJpbmdMaXN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhNTERPTVN0cmluZ0xpc3QoYXJyKSB7XG4gICAgICB0aGlzLmFyciA9IGFyciB8fCBbXTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRE9NU3RyaW5nTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MRE9NU3RyaW5nTGlzdC5wcm90b3R5cGUuaXRlbSA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnJbaW5kZXhdIHx8IG51bGw7XG4gICAgfTtcblxuICAgIFhNTERPTVN0cmluZ0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcnIuaW5kZXhPZihzdHIpICE9PSAtMTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERPTVN0cmluZ0xpc3Q7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MRE9NQ29uZmlndXJhdGlvbiwgWE1MRE9NRXJyb3JIYW5kbGVyLCBYTUxET01TdHJpbmdMaXN0O1xuXG4gIFhNTERPTUVycm9ySGFuZGxlciA9IHJlcXVpcmUoJy4vWE1MRE9NRXJyb3JIYW5kbGVyJyk7XG5cbiAgWE1MRE9NU3RyaW5nTGlzdCA9IHJlcXVpcmUoJy4vWE1MRE9NU3RyaW5nTGlzdCcpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRE9NQ29uZmlndXJhdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYTUxET01Db25maWd1cmF0aW9uKCkge1xuICAgICAgdmFyIGNsb25lZFNlbGY7XG4gICAgICB0aGlzLmRlZmF1bHRQYXJhbXMgPSB7XG4gICAgICAgIFwiY2Fub25pY2FsLWZvcm1cIjogZmFsc2UsXG4gICAgICAgIFwiY2RhdGEtc2VjdGlvbnNcIjogZmFsc2UsXG4gICAgICAgIFwiY29tbWVudHNcIjogZmFsc2UsXG4gICAgICAgIFwiZGF0YXR5cGUtbm9ybWFsaXphdGlvblwiOiBmYWxzZSxcbiAgICAgICAgXCJlbGVtZW50LWNvbnRlbnQtd2hpdGVzcGFjZVwiOiB0cnVlLFxuICAgICAgICBcImVudGl0aWVzXCI6IHRydWUsXG4gICAgICAgIFwiZXJyb3ItaGFuZGxlclwiOiBuZXcgWE1MRE9NRXJyb3JIYW5kbGVyKCksXG4gICAgICAgIFwiaW5mb3NldFwiOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRlLWlmLXNjaGVtYVwiOiBmYWxzZSxcbiAgICAgICAgXCJuYW1lc3BhY2VzXCI6IHRydWUsXG4gICAgICAgIFwibmFtZXNwYWNlLWRlY2xhcmF0aW9uc1wiOiB0cnVlLFxuICAgICAgICBcIm5vcm1hbGl6ZS1jaGFyYWN0ZXJzXCI6IGZhbHNlLFxuICAgICAgICBcInNjaGVtYS1sb2NhdGlvblwiOiAnJyxcbiAgICAgICAgXCJzY2hlbWEtdHlwZVwiOiAnJyxcbiAgICAgICAgXCJzcGxpdC1jZGF0YS1zZWN0aW9uc1wiOiB0cnVlLFxuICAgICAgICBcInZhbGlkYXRlXCI6IGZhbHNlLFxuICAgICAgICBcIndlbGwtZm9ybWVkXCI6IHRydWVcbiAgICAgIH07XG4gICAgICB0aGlzLnBhcmFtcyA9IGNsb25lZFNlbGYgPSBPYmplY3QuY3JlYXRlKHRoaXMuZGVmYXVsdFBhcmFtcyk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERPTUNvbmZpZ3VyYXRpb24ucHJvdG90eXBlLCAncGFyYW1ldGVyTmFtZXMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV3IFhNTERPTVN0cmluZ0xpc3QoT2JqZWN0LmtleXModGhpcy5kZWZhdWx0UGFyYW1zKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBYTUxET01Db25maWd1cmF0aW9uLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBpZiAodGhpcy5wYXJhbXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zW25hbWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTERPTUNvbmZpZ3VyYXRpb24ucHJvdG90eXBlLmNhblNldFBhcmFtZXRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgWE1MRE9NQ29uZmlndXJhdGlvbi5wcm90b3R5cGUuc2V0UGFyYW1ldGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSB0aGlzLnBhcmFtc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERPTUNvbmZpZ3VyYXRpb247XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBFbGVtZW50OiAxLFxuICAgIEF0dHJpYnV0ZTogMixcbiAgICBUZXh0OiAzLFxuICAgIENEYXRhOiA0LFxuICAgIEVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBFbnRpdHlEZWNsYXJhdGlvbjogNixcbiAgICBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgQ29tbWVudDogOCxcbiAgICBEb2N1bWVudDogOSxcbiAgICBEb2NUeXBlOiAxMCxcbiAgICBEb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBOb3RhdGlvbkRlY2xhcmF0aW9uOiAxMixcbiAgICBEZWNsYXJhdGlvbjogMjAxLFxuICAgIFJhdzogMjAyLFxuICAgIEF0dHJpYnV0ZURlY2xhcmF0aW9uOiAyMDMsXG4gICAgRWxlbWVudERlY2xhcmF0aW9uOiAyMDQsXG4gICAgRHVtbXk6IDIwNVxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQXR0cmlidXRlLCBYTUxOb2RlO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTEF0dHJpYnV0ZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYTUxBdHRyaWJ1dGUocGFyZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJlbnQub3B0aW9ucztcbiAgICAgICAgdGhpcy5zdHJpbmdpZnkgPSB0aGlzLnBhcmVudC5zdHJpbmdpZnk7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYXR0cmlidXRlIG5hbWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zdHJpbmdpZnkubmFtZShuYW1lKTtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5hdHRWYWx1ZSh2YWx1ZSk7XG4gICAgICB0aGlzLnR5cGUgPSBOb2RlVHlwZS5BdHRyaWJ1dGU7XG4gICAgICB0aGlzLmlzSWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2NoZW1hVHlwZUluZm8gPSBudWxsO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAnbm9kZVR5cGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEF0dHJpYnV0ZS5wcm90b3R5cGUsICdvd25lckVsZW1lbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MQXR0cmlidXRlLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEF0dHJpYnV0ZS5wcm90b3R5cGUsICduYW1lc3BhY2VVUkknLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MQXR0cmlidXRlLnByb3RvdHlwZSwgJ3ByZWZpeCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAnbG9jYWxOYW1lJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxBdHRyaWJ1dGUucHJvdG90eXBlLCAnc3BlY2lmaWVkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBYTUxBdHRyaWJ1dGUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgWE1MQXR0cmlidXRlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud3JpdGVyLmF0dHJpYnV0ZSh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH07XG5cbiAgICBYTUxBdHRyaWJ1dGUucHJvdG90eXBlLmRlYnVnSW5mbyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIG5hbWUgPSBuYW1lIHx8IHRoaXMubmFtZTtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwicGFyZW50OiA8XCIgKyB0aGlzLnBhcmVudC5uYW1lICsgXCI+XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJhdHRyaWJ1dGU6IHtcIiArIG5hbWUgKyBcIn0sIHBhcmVudDogPFwiICsgdGhpcy5wYXJlbnQubmFtZSArIFwiPlwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxBdHRyaWJ1dGUucHJvdG90eXBlLmlzRXF1YWxOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgaWYgKG5vZGUubmFtZXNwYWNlVVJJICE9PSB0aGlzLm5hbWVzcGFjZVVSSSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5wcmVmaXggIT09IHRoaXMucHJlZml4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSAhPT0gdGhpcy5sb2NhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxBdHRyaWJ1dGU7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MTmFtZWROb2RlTWFwO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MTmFtZWROb2RlTWFwID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhNTE5hbWVkTm9kZU1hcChub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxOYW1lZE5vZGVNYXAucHJvdG90eXBlLCAnbGVuZ3RoJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubm9kZXMpLmxlbmd0aCB8fCAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MTmFtZWROb2RlTWFwLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZXMgPSBudWxsO1xuICAgIH07XG5cbiAgICBYTUxOYW1lZE5vZGVNYXAucHJvdG90eXBlLmdldE5hbWVkSXRlbSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzW25hbWVdO1xuICAgIH07XG5cbiAgICBYTUxOYW1lZE5vZGVNYXAucHJvdG90eXBlLnNldE5hbWVkSXRlbSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBvbGROb2RlO1xuICAgICAgb2xkTm9kZSA9IHRoaXMubm9kZXNbbm9kZS5ub2RlTmFtZV07XG4gICAgICB0aGlzLm5vZGVzW25vZGUubm9kZU5hbWVdID0gbm9kZTtcbiAgICAgIHJldHVybiBvbGROb2RlIHx8IG51bGw7XG4gICAgfTtcblxuICAgIFhNTE5hbWVkTm9kZU1hcC5wcm90b3R5cGUucmVtb3ZlTmFtZWRJdGVtID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIG9sZE5vZGU7XG4gICAgICBvbGROb2RlID0gdGhpcy5ub2Rlc1tuYW1lXTtcbiAgICAgIGRlbGV0ZSB0aGlzLm5vZGVzW25hbWVdO1xuICAgICAgcmV0dXJuIG9sZE5vZGUgfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgWE1MTmFtZWROb2RlTWFwLnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzW09iamVjdC5rZXlzKHRoaXMubm9kZXMpW2luZGV4XV0gfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgWE1MTmFtZWROb2RlTWFwLnByb3RvdHlwZS5nZXROYW1lZEl0ZW1OUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9O1xuXG4gICAgWE1MTmFtZWROb2RlTWFwLnByb3RvdHlwZS5zZXROYW1lZEl0ZW1OUyA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH07XG5cbiAgICBYTUxOYW1lZE5vZGVNYXAucHJvdG90eXBlLnJlbW92ZU5hbWVkSXRlbU5TID0gZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MTmFtZWROb2RlTWFwO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjdcbihmdW5jdGlvbigpIHtcbiAgdmFyIE5vZGVUeXBlLCBYTUxBdHRyaWJ1dGUsIFhNTEVsZW1lbnQsIFhNTE5hbWVkTm9kZU1hcCwgWE1MTm9kZSwgZ2V0VmFsdWUsIGlzRnVuY3Rpb24sIGlzT2JqZWN0LCByZWYsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICByZWYgPSByZXF1aXJlKCcuL1V0aWxpdHknKSwgaXNPYmplY3QgPSByZWYuaXNPYmplY3QsIGlzRnVuY3Rpb24gPSByZWYuaXNGdW5jdGlvbiwgZ2V0VmFsdWUgPSByZWYuZ2V0VmFsdWU7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTEF0dHJpYnV0ZSA9IHJlcXVpcmUoJy4vWE1MQXR0cmlidXRlJyk7XG5cbiAgWE1MTmFtZWROb2RlTWFwID0gcmVxdWlyZSgnLi9YTUxOYW1lZE5vZGVNYXAnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTEVsZW1lbnQgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChYTUxFbGVtZW50LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTEVsZW1lbnQocGFyZW50LCBuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICB2YXIgY2hpbGQsIGosIGxlbiwgcmVmMTtcbiAgICAgIFhNTEVsZW1lbnQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBlbGVtZW50IG5hbWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnN0cmluZ2lmeS5uYW1lKG5hbWUpO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuRWxlbWVudDtcbiAgICAgIHRoaXMuYXR0cmlicyA9IHt9O1xuICAgICAgdGhpcy5zY2hlbWFUeXBlSW5mbyA9IG51bGw7XG4gICAgICBpZiAoYXR0cmlidXRlcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlKGF0dHJpYnV0ZXMpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCkge1xuICAgICAgICB0aGlzLmlzUm9vdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRPYmplY3QgPSBwYXJlbnQ7XG4gICAgICAgIHBhcmVudC5yb290T2JqZWN0ID0gdGhpcztcbiAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbikge1xuICAgICAgICAgIHJlZjEgPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmMS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgY2hpbGQgPSByZWYxW2pdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkRvY1R5cGUpIHtcbiAgICAgICAgICAgICAgY2hpbGQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAndGFnTmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICduYW1lc3BhY2VVUkknLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICdwcmVmaXgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICdsb2NhbE5hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEVsZW1lbnQucHJvdG90eXBlLCAnaWQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICdjbGFzc05hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICdjbGFzc0xpc3QnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRWxlbWVudC5wcm90b3R5cGUsICdhdHRyaWJ1dGVzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZU1hcCB8fCAhdGhpcy5hdHRyaWJ1dGVNYXAubm9kZXMpIHtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZU1hcCA9IG5ldyBYTUxOYW1lZE5vZGVNYXAodGhpcy5hdHRyaWJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVNYXA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGF0dCwgYXR0TmFtZSwgY2xvbmVkU2VsZiwgcmVmMTtcbiAgICAgIGNsb25lZFNlbGYgPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgICAgaWYgKGNsb25lZFNlbGYuaXNSb290KSB7XG4gICAgICAgIGNsb25lZFNlbGYuZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuICAgICAgfVxuICAgICAgY2xvbmVkU2VsZi5hdHRyaWJzID0ge307XG4gICAgICByZWYxID0gdGhpcy5hdHRyaWJzO1xuICAgICAgZm9yIChhdHROYW1lIGluIHJlZjEpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmMSwgYXR0TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICBhdHQgPSByZWYxW2F0dE5hbWVdO1xuICAgICAgICBjbG9uZWRTZWxmLmF0dHJpYnNbYXR0TmFtZV0gPSBhdHQuY2xvbmUoKTtcbiAgICAgIH1cbiAgICAgIGNsb25lZFNlbGYuY2hpbGRyZW4gPSBbXTtcbiAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICB2YXIgY2xvbmVkQ2hpbGQ7XG4gICAgICAgIGNsb25lZENoaWxkID0gY2hpbGQuY2xvbmUoKTtcbiAgICAgICAgY2xvbmVkQ2hpbGQucGFyZW50ID0gY2xvbmVkU2VsZjtcbiAgICAgICAgcmV0dXJuIGNsb25lZFNlbGYuY2hpbGRyZW4ucHVzaChjbG9uZWRDaGlsZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjbG9uZWRTZWxmO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5hdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIGF0dE5hbWUsIGF0dFZhbHVlO1xuICAgICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgZm9yIChhdHROYW1lIGluIG5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChuYW1lLCBhdHROYW1lKSkgY29udGludWU7XG4gICAgICAgICAgYXR0VmFsdWUgPSBuYW1lW2F0dE5hbWVdO1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlKGF0dE5hbWUsIGF0dFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMua2VlcE51bGxBdHRyaWJ1dGVzICYmICh2YWx1ZSA9PSBudWxsKSkge1xuICAgICAgICAgIHRoaXMuYXR0cmlic1tuYW1lXSA9IG5ldyBYTUxBdHRyaWJ1dGUodGhpcywgbmFtZSwgXCJcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuYXR0cmlic1tuYW1lXSA9IG5ldyBYTUxBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIGF0dE5hbWUsIGosIGxlbjtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhdHRyaWJ1dGUgbmFtZS4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIG5hbWUgPSBnZXRWYWx1ZShuYW1lKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IG5hbWUubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBhdHROYW1lID0gbmFtZVtqXTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5hdHRyaWJzW2F0dE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5hdHRyaWJzW25hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZWxlbWVudCh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5hdHQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuYSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBpZiAodGhpcy5hdHRyaWJzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnNbbmFtZV0udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTm9kZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGlmICh0aGlzLmF0dHJpYnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlic1tuYW1lXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOb2RlID0gZnVuY3Rpb24obmV3QXR0cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVOb2RlID0gZnVuY3Rpb24ob2xkQXR0cikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0QXR0cmlidXRlTlMgPSBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlTlMgPSBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOb2RlTlMgPSBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVOb2RlTlMgPSBmdW5jdGlvbihuZXdBdHRyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlMgPSBmdW5jdGlvbihuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5oYXNBdHRyaWJ1dGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyaWJzLmhhc093blByb3BlcnR5KG5hbWUpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5oYXNBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLnNldElkQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgaXNJZCkge1xuICAgICAgaWYgKHRoaXMuYXR0cmlicy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJzW25hbWVdLmlzSWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNJZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuc2V0SWRBdHRyaWJ1dGVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBpc0lkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLnNldElkQXR0cmlidXRlTm9kZSA9IGZ1bmN0aW9uKGlkQXR0ciwgaXNJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxFbGVtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGZ1bmN0aW9uKHRhZ25hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyA9IGZ1bmN0aW9uKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBmdW5jdGlvbihjbGFzc05hbWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTEVsZW1lbnQucHJvdG90eXBlLmlzRXF1YWxOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGksIGosIHJlZjE7XG4gICAgICBpZiAoIVhNTEVsZW1lbnQuX19zdXBlcl9fLmlzRXF1YWxOb2RlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykuaXNFcXVhbE5vZGUobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUubmFtZXNwYWNlVVJJICE9PSB0aGlzLm5hbWVzcGFjZVVSSSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5wcmVmaXggIT09IHRoaXMucHJlZml4KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSAhPT0gdGhpcy5sb2NhbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuYXR0cmlicy5sZW5ndGggIT09IHRoaXMuYXR0cmlicy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gaiA9IDAsIHJlZjEgPSB0aGlzLmF0dHJpYnMubGVuZ3RoIC0gMTsgMCA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gMCA8PSByZWYxID8gKytqIDogLS1qKSB7XG4gICAgICAgIGlmICghdGhpcy5hdHRyaWJzW2ldLmlzRXF1YWxOb2RlKG5vZGUuYXR0cmlic1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRWxlbWVudDtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MQ2hhcmFjdGVyRGF0YSwgWE1MTm9kZSxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTENoYXJhY3RlckRhdGEgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChYTUxDaGFyYWN0ZXJEYXRhLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTENoYXJhY3RlckRhdGEocGFyZW50KSB7XG4gICAgICBYTUxDaGFyYWN0ZXJEYXRhLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTENoYXJhY3RlckRhdGEucHJvdG90eXBlLCAnZGF0YScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgJ2xlbmd0aCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MQ2hhcmFjdGVyRGF0YS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgIH07XG5cbiAgICBYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5zdWJzdHJpbmdEYXRhID0gZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5hcHBlbmREYXRhID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTENoYXJhY3RlckRhdGEucHJvdG90eXBlLmluc2VydERhdGEgPSBmdW5jdGlvbihvZmZzZXQsIGFyZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5kZWxldGVEYXRhID0gZnVuY3Rpb24ob2Zmc2V0LCBjb3VudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5yZXBsYWNlRGF0YSA9IGZ1bmN0aW9uKG9mZnNldCwgY291bnQsIGFyZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZS5pc0VxdWFsTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGlmICghWE1MQ2hhcmFjdGVyRGF0YS5fX3N1cGVyX18uaXNFcXVhbE5vZGUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5pc0VxdWFsTm9kZShub2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5kYXRhICE9PSB0aGlzLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxDaGFyYWN0ZXJEYXRhO1xuXG4gIH0pKFhNTE5vZGUpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQ0RhdGEsIFhNTENoYXJhY3RlckRhdGEsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBYTUxDaGFyYWN0ZXJEYXRhID0gcmVxdWlyZSgnLi9YTUxDaGFyYWN0ZXJEYXRhJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxDRGF0YSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTENEYXRhLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTENEYXRhKHBhcmVudCwgdGV4dCkge1xuICAgICAgWE1MQ0RhdGEuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBDREFUQSB0ZXh0LiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gXCIjY2RhdGEtc2VjdGlvblwiO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuQ0RhdGE7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuY2RhdGEodGV4dCk7XG4gICAgfVxuXG4gICAgWE1MQ0RhdGEucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgWE1MQ0RhdGEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuY2RhdGEodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTENEYXRhO1xuXG4gIH0pKFhNTENoYXJhY3RlckRhdGEpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MQ2hhcmFjdGVyRGF0YSwgWE1MQ29tbWVudCxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTENoYXJhY3RlckRhdGEgPSByZXF1aXJlKCcuL1hNTENoYXJhY3RlckRhdGEnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTENvbW1lbnQgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChYTUxDb21tZW50LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTENvbW1lbnQocGFyZW50LCB0ZXh0KSB7XG4gICAgICBYTUxDb21tZW50Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmVudCk7XG4gICAgICBpZiAodGV4dCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgY29tbWVudCB0ZXh0LiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gXCIjY29tbWVudFwiO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuQ29tbWVudDtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5jb21tZW50KHRleHQpO1xuICAgIH1cblxuICAgIFhNTENvbW1lbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgWE1MQ29tbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5jb21tZW50KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxDb21tZW50O1xuXG4gIH0pKFhNTENoYXJhY3RlckRhdGEpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MRGVjbGFyYXRpb24sIFhNTE5vZGUsIGlzT2JqZWN0LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgaXNPYmplY3QgPSByZXF1aXJlKCcuL1V0aWxpdHknKS5pc09iamVjdDtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEZWNsYXJhdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTERlY2xhcmF0aW9uLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTERlY2xhcmF0aW9uKHBhcmVudCwgdmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpIHtcbiAgICAgIHZhciByZWY7XG4gICAgICBYTUxEZWNsYXJhdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnQpO1xuICAgICAgaWYgKGlzT2JqZWN0KHZlcnNpb24pKSB7XG4gICAgICAgIHJlZiA9IHZlcnNpb24sIHZlcnNpb24gPSByZWYudmVyc2lvbiwgZW5jb2RpbmcgPSByZWYuZW5jb2RpbmcsIHN0YW5kYWxvbmUgPSByZWYuc3RhbmRhbG9uZTtcbiAgICAgIH1cbiAgICAgIGlmICghdmVyc2lvbikge1xuICAgICAgICB2ZXJzaW9uID0gJzEuMCc7XG4gICAgICB9XG4gICAgICB0aGlzLnR5cGUgPSBOb2RlVHlwZS5EZWNsYXJhdGlvbjtcbiAgICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuc3RyaW5naWZ5LnhtbFZlcnNpb24odmVyc2lvbik7XG4gICAgICBpZiAoZW5jb2RpbmcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gdGhpcy5zdHJpbmdpZnkueG1sRW5jb2RpbmcoZW5jb2RpbmcpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YW5kYWxvbmUgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN0YW5kYWxvbmUgPSB0aGlzLnN0cmluZ2lmeS54bWxTdGFuZGFsb25lKHN0YW5kYWxvbmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFhNTERlY2xhcmF0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMud3JpdGVyLmRlY2xhcmF0aW9uKHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxEZWNsYXJhdGlvbjtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERUREF0dExpc3QsIFhNTE5vZGUsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEVERBdHRMaXN0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoWE1MRFREQXR0TGlzdCwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxEVERBdHRMaXN0KHBhcmVudCwgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgWE1MRFREQXR0TGlzdC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnQpO1xuICAgICAgaWYgKGVsZW1lbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgZWxlbWVudCBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJpYnV0ZU5hbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIERURCBhdHRyaWJ1dGUgbmFtZS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCFhdHRyaWJ1dGVUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgRFREIGF0dHJpYnV0ZSB0eXBlLiBcIiArIHRoaXMuZGVidWdJbmZvKGVsZW1lbnROYW1lKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWRlZmF1bHRWYWx1ZVR5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgYXR0cmlidXRlIGRlZmF1bHQuIFwiICsgdGhpcy5kZWJ1Z0luZm8oZWxlbWVudE5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWZhdWx0VmFsdWVUeXBlLmluZGV4T2YoJyMnKSAhPT0gMCkge1xuICAgICAgICBkZWZhdWx0VmFsdWVUeXBlID0gJyMnICsgZGVmYXVsdFZhbHVlVHlwZTtcbiAgICAgIH1cbiAgICAgIGlmICghZGVmYXVsdFZhbHVlVHlwZS5tYXRjaCgvXigjUkVRVUlSRUR8I0lNUExJRUR8I0ZJWEVEfCNERUZBVUxUKSQvKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRlZmF1bHQgdmFsdWUgdHlwZTsgZXhwZWN0ZWQ6ICNSRVFVSVJFRCwgI0lNUExJRUQsICNGSVhFRCBvciAjREVGQVVMVC4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgaWYgKGRlZmF1bHRWYWx1ZSAmJiAhZGVmYXVsdFZhbHVlVHlwZS5tYXRjaCgvXigjRklYRUR8I0RFRkFVTFQpJC8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlZmF1bHQgdmFsdWUgb25seSBhcHBsaWVzIHRvICNGSVhFRCBvciAjREVGQVVMVC4gXCIgKyB0aGlzLmRlYnVnSW5mbyhlbGVtZW50TmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50TmFtZSA9IHRoaXMuc3RyaW5naWZ5Lm5hbWUoZWxlbWVudE5hbWUpO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuQXR0cmlidXRlRGVjbGFyYXRpb247XG4gICAgICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSB0aGlzLnN0cmluZ2lmeS5uYW1lKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUeXBlID0gdGhpcy5zdHJpbmdpZnkuZHRkQXR0VHlwZShhdHRyaWJ1dGVUeXBlKTtcbiAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5kdGRBdHREZWZhdWx0KGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZVR5cGUgPSBkZWZhdWx0VmFsdWVUeXBlO1xuICAgIH1cblxuICAgIFhNTERUREF0dExpc3QucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZHRkQXR0TGlzdCh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRFREQXR0TGlzdDtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERUREVudGl0eSwgWE1MTm9kZSwgaXNPYmplY3QsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBpc09iamVjdCA9IHJlcXVpcmUoJy4vVXRpbGl0eScpLmlzT2JqZWN0O1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERUREVudGl0eSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTERUREVudGl0eSwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxEVERFbnRpdHkocGFyZW50LCBwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIFhNTERUREVudGl0eS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnQpO1xuICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIERURCBlbnRpdHkgbmFtZS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhuYW1lKSk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIERURCBlbnRpdHkgdmFsdWUuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5wZSA9ICEhcGU7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnN0cmluZ2lmeS5uYW1lKG5hbWUpO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuRW50aXR5RGVjbGFyYXRpb247XG4gICAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuZHRkRW50aXR5VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLmludGVybmFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdmFsdWUucHViSUQgJiYgIXZhbHVlLnN5c0lEKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHVibGljIGFuZC9vciBzeXN0ZW0gaWRlbnRpZmllcnMgYXJlIHJlcXVpcmVkIGZvciBhbiBleHRlcm5hbCBlbnRpdHkuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS5wdWJJRCAmJiAhdmFsdWUuc3lzSUQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeXN0ZW0gaWRlbnRpZmllciBpcyByZXF1aXJlZCBmb3IgYSBwdWJsaWMgZXh0ZXJuYWwgZW50aXR5LiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludGVybmFsID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWx1ZS5wdWJJRCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wdWJJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFB1YklEKHZhbHVlLnB1YklEKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUuc3lzSUQgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3lzSUQgPSB0aGlzLnN0cmluZ2lmeS5kdGRTeXNJRCh2YWx1ZS5zeXNJRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLm5EYXRhICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm5EYXRhID0gdGhpcy5zdHJpbmdpZnkuZHRkTkRhdGEodmFsdWUubkRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlICYmIHRoaXMubkRhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RhdGlvbiBkZWNsYXJhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiBhIHBhcmFtZXRlciBlbnRpdHkuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICdwdWJsaWNJZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1YklEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICdzeXN0ZW1JZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c0lEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICdub3RhdGlvbk5hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uRGF0YSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERUREVudGl0eS5wcm90b3R5cGUsICdpbnB1dEVuY29kaW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRERW50aXR5LnByb3RvdHlwZSwgJ3htbEVuY29kaW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRERW50aXR5LnByb3RvdHlwZSwgJ3htbFZlcnNpb24nLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFhNTERUREVudGl0eS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kdGRFbnRpdHkodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERUREVudGl0eTtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERUREVsZW1lbnQsIFhNTE5vZGUsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEVERFbGVtZW50ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoWE1MRFRERWxlbWVudCwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxEVERFbGVtZW50KHBhcmVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgIFhNTERUREVsZW1lbnQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBEVEQgZWxlbWVudCBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICcoI1BDREFUQSknO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gJygnICsgdmFsdWUuam9pbignLCcpICsgJyknO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zdHJpbmdpZnkubmFtZShuYW1lKTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkVsZW1lbnREZWNsYXJhdGlvbjtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5kdGRFbGVtZW50VmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIFhNTERUREVsZW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZHRkRWxlbWVudCh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRFRERWxlbWVudDtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERURE5vdGF0aW9uLCBYTUxOb2RlLFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRFRETm90YXRpb24gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChYTUxEVEROb3RhdGlvbiwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxEVEROb3RhdGlvbihwYXJlbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICBYTUxEVEROb3RhdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnQpO1xuICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIERURCBub3RhdGlvbiBuYW1lLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsdWUucHViSUQgJiYgIXZhbHVlLnN5c0lEKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlB1YmxpYyBvciBzeXN0ZW0gaWRlbnRpZmllcnMgYXJlIHJlcXVpcmVkIGZvciBhbiBleHRlcm5hbCBlbnRpdHkuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zdHJpbmdpZnkubmFtZShuYW1lKTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLk5vdGF0aW9uRGVjbGFyYXRpb247XG4gICAgICBpZiAodmFsdWUucHViSUQgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnB1YklEID0gdGhpcy5zdHJpbmdpZnkuZHRkUHViSUQodmFsdWUucHViSUQpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLnN5c0lEICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zeXNJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFN5c0lEKHZhbHVlLnN5c0lEKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRFRETm90YXRpb24ucHJvdG90eXBlLCAncHVibGljSWQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJJRDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEVEROb3RhdGlvbi5wcm90b3R5cGUsICdzeXN0ZW1JZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c0lEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MRFRETm90YXRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIuZHRkTm90YXRpb24odGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERURE5vdGF0aW9uO1xuXG4gIH0pKFhNTE5vZGUpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MRFREQXR0TGlzdCwgWE1MRFRERWxlbWVudCwgWE1MRFRERW50aXR5LCBYTUxEVEROb3RhdGlvbiwgWE1MRG9jVHlwZSwgWE1MTmFtZWROb2RlTWFwLCBYTUxOb2RlLCBpc09iamVjdCxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9VdGlsaXR5JykuaXNPYmplY3Q7XG5cbiAgWE1MTm9kZSA9IHJlcXVpcmUoJy4vWE1MTm9kZScpO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTERUREF0dExpc3QgPSByZXF1aXJlKCcuL1hNTERUREF0dExpc3QnKTtcblxuICBYTUxEVERFbnRpdHkgPSByZXF1aXJlKCcuL1hNTERUREVudGl0eScpO1xuXG4gIFhNTERUREVsZW1lbnQgPSByZXF1aXJlKCcuL1hNTERUREVsZW1lbnQnKTtcblxuICBYTUxEVEROb3RhdGlvbiA9IHJlcXVpcmUoJy4vWE1MRFRETm90YXRpb24nKTtcblxuICBYTUxOYW1lZE5vZGVNYXAgPSByZXF1aXJlKCcuL1hNTE5hbWVkTm9kZU1hcCcpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MRG9jVHlwZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTERvY1R5cGUsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gWE1MRG9jVHlwZShwYXJlbnQsIHB1YklELCBzeXNJRCkge1xuICAgICAgdmFyIGNoaWxkLCBpLCBsZW4sIHJlZiwgcmVmMSwgcmVmMjtcbiAgICAgIFhNTERvY1R5cGUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkRvY1R5cGU7XG4gICAgICBpZiAocGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgIHJlZiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGNoaWxkLm5hbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jdW1lbnRPYmplY3QgPSBwYXJlbnQ7XG4gICAgICBpZiAoaXNPYmplY3QocHViSUQpKSB7XG4gICAgICAgIHJlZjEgPSBwdWJJRCwgcHViSUQgPSByZWYxLnB1YklELCBzeXNJRCA9IHJlZjEuc3lzSUQ7XG4gICAgICB9XG4gICAgICBpZiAoc3lzSUQgPT0gbnVsbCkge1xuICAgICAgICByZWYyID0gW3B1YklELCBzeXNJRF0sIHN5c0lEID0gcmVmMlswXSwgcHViSUQgPSByZWYyWzFdO1xuICAgICAgfVxuICAgICAgaWYgKHB1YklEICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wdWJJRCA9IHRoaXMuc3RyaW5naWZ5LmR0ZFB1YklEKHB1YklEKTtcbiAgICAgIH1cbiAgICAgIGlmIChzeXNJRCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3lzSUQgPSB0aGlzLnN0cmluZ2lmeS5kdGRTeXNJRChzeXNJRCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY1R5cGUucHJvdG90eXBlLCAnZW50aXRpZXMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hpbGQsIGksIGxlbiwgbm9kZXMsIHJlZjtcbiAgICAgICAgbm9kZXMgPSB7fTtcbiAgICAgICAgcmVmID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgICAgaWYgKChjaGlsZC50eXBlID09PSBOb2RlVHlwZS5FbnRpdHlEZWNsYXJhdGlvbikgJiYgIWNoaWxkLnBlKSB7XG4gICAgICAgICAgICBub2Rlc1tjaGlsZC5uYW1lXSA9IGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFhNTE5hbWVkTm9kZU1hcChub2Rlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jVHlwZS5wcm90b3R5cGUsICdub3RhdGlvbnMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hpbGQsIGksIGxlbiwgbm9kZXMsIHJlZjtcbiAgICAgICAgbm9kZXMgPSB7fTtcbiAgICAgICAgcmVmID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IE5vZGVUeXBlLk5vdGF0aW9uRGVjbGFyYXRpb24pIHtcbiAgICAgICAgICAgIG5vZGVzW2NoaWxkLm5hbWVdID0gY2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgWE1MTmFtZWROb2RlTWFwKG5vZGVzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2NUeXBlLnByb3RvdHlwZSwgJ3B1YmxpY0lkJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHViSUQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jVHlwZS5wcm90b3R5cGUsICdzeXN0ZW1JZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c0lEO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY1R5cGUucHJvdG90eXBlLCAnaW50ZXJuYWxTdWJzZXQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBYTUxEb2NUeXBlLnByb3RvdHlwZS5lbGVtZW50ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIGNoaWxkID0gbmV3IFhNTERUREVsZW1lbnQodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2NUeXBlLnByb3RvdHlwZS5hdHRMaXN0ID0gZnVuY3Rpb24oZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdmFyIGNoaWxkO1xuICAgICAgY2hpbGQgPSBuZXcgWE1MRFREQXR0TGlzdCh0aGlzLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jVHlwZS5wcm90b3R5cGUuZW50aXR5ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIGNoaWxkID0gbmV3IFhNTERUREVudGl0eSh0aGlzLCBmYWxzZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2NUeXBlLnByb3RvdHlwZS5wRW50aXR5ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIGNoaWxkID0gbmV3IFhNTERUREVudGl0eSh0aGlzLCB0cnVlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY1R5cGUucHJvdG90eXBlLm5vdGF0aW9uID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIGNoaWxkID0gbmV3IFhNTERURE5vdGF0aW9uKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jVHlwZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kb2NUeXBlKHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIFhNTERvY1R5cGUucHJvdG90eXBlLmVsZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50KG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jVHlwZS5wcm90b3R5cGUuYXR0ID0gZnVuY3Rpb24oZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0TGlzdChlbGVtZW50TmFtZSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVHlwZSwgZGVmYXVsdFZhbHVlVHlwZSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jVHlwZS5wcm90b3R5cGUuZW50ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVudGl0eShuYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTERvY1R5cGUucHJvdG90eXBlLnBlbnQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucEVudGl0eShuYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTERvY1R5cGUucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3RhdGlvbihuYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTERvY1R5cGUucHJvdG90eXBlLnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290KCkgfHwgdGhpcy5kb2N1bWVudE9iamVjdDtcbiAgICB9O1xuXG4gICAgWE1MRG9jVHlwZS5wcm90b3R5cGUuaXNFcXVhbE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAoIVhNTERvY1R5cGUuX19zdXBlcl9fLmlzRXF1YWxOb2RlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykuaXNFcXVhbE5vZGUobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUubmFtZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnB1YmxpY0lkICE9PSB0aGlzLnB1YmxpY0lkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnN5c3RlbUlkICE9PSB0aGlzLnN5c3RlbUlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRG9jVHlwZTtcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTE5vZGUsIFhNTFJhdyxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTE5vZGUgPSByZXF1aXJlKCcuL1hNTE5vZGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTFJhdyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTFJhdywgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxSYXcocGFyZW50LCB0ZXh0KSB7XG4gICAgICBYTUxSYXcuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByYXcgdGV4dC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLlJhdztcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0cmluZ2lmeS5yYXcodGV4dCk7XG4gICAgfVxuXG4gICAgWE1MUmF3LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgfTtcblxuICAgIFhNTFJhdy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5yYXcodGhpcywgdGhpcy5vcHRpb25zLndyaXRlci5maWx0ZXJPcHRpb25zKG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTFJhdztcblxuICB9KShYTUxOb2RlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTENoYXJhY3RlckRhdGEsIFhNTFRleHQsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBYTUxDaGFyYWN0ZXJEYXRhID0gcmVxdWlyZSgnLi9YTUxDaGFyYWN0ZXJEYXRhJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxUZXh0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoWE1MVGV4dCwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxUZXh0KHBhcmVudCwgdGV4dCkge1xuICAgICAgWE1MVGV4dC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJlbnQpO1xuICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGVsZW1lbnQgdGV4dC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmFtZSA9IFwiI3RleHRcIjtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLlRleHQ7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkudGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MVGV4dC5wcm90b3R5cGUsICdpc0VsZW1lbnRDb250ZW50V2hpdGVzcGFjZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxUZXh0LnByb3RvdHlwZSwgJ3dob2xlVGV4dCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBuZXh0LCBwcmV2LCBzdHI7XG4gICAgICAgIHN0ciA9ICcnO1xuICAgICAgICBwcmV2ID0gdGhpcy5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIHdoaWxlIChwcmV2KSB7XG4gICAgICAgICAgc3RyID0gcHJldi5kYXRhICsgc3RyO1xuICAgICAgICAgIHByZXYgPSBwcmV2LnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuICAgICAgICBzdHIgKz0gdGhpcy5kYXRhO1xuICAgICAgICBuZXh0ID0gdGhpcy5uZXh0U2libGluZztcbiAgICAgICAgd2hpbGUgKG5leHQpIHtcbiAgICAgICAgICBzdHIgPSBzdHIgKyBuZXh0LmRhdGE7XG4gICAgICAgICAgbmV4dCA9IG5leHQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFhNTFRleHQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgWE1MVGV4dC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci50ZXh0KHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIFhNTFRleHQucHJvdG90eXBlLnNwbGl0VGV4dCA9IGZ1bmN0aW9uKG9mZnNldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxUZXh0LnByb3RvdHlwZS5yZXBsYWNlV2hvbGVUZXh0ID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MVGV4dDtcblxuICB9KShYTUxDaGFyYWN0ZXJEYXRhKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTENoYXJhY3RlckRhdGEsIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbixcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTENoYXJhY3RlckRhdGEgPSByZXF1aXJlKCcuL1hNTENoYXJhY3RlckRhdGEnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgc3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ocGFyZW50LCB0YXJnZXQsIHZhbHVlKSB7XG4gICAgICBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGluc3RydWN0aW9uIHRhcmdldC4gXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLlByb2Nlc3NpbmdJbnN0cnVjdGlvbjtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5zdHJpbmdpZnkuaW5zVGFyZ2V0KHRhcmdldCk7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnRhcmdldDtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zdHJpbmdpZnkuaW5zVmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHRoaXMpO1xuICAgIH07XG5cbiAgICBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53cml0ZXIucHJvY2Vzc2luZ0luc3RydWN0aW9uKHRoaXMsIHRoaXMub3B0aW9ucy53cml0ZXIuZmlsdGVyT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbi5wcm90b3R5cGUuaXNFcXVhbE5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICBpZiAoIVhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbi5fX3N1cGVyX18uaXNFcXVhbE5vZGUuYXBwbHkodGhpcywgYXJndW1lbnRzKS5pc0VxdWFsTm9kZShub2RlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS50YXJnZXQgIT09IHRoaXMudGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uO1xuXG4gIH0pKFhNTENoYXJhY3RlckRhdGEpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgWE1MRHVtbXksIFhNTE5vZGUsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxEdW1teSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gICAgZXh0ZW5kKFhNTER1bW15LCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTER1bW15KHBhcmVudCkge1xuICAgICAgWE1MRHVtbXkuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50KTtcbiAgICAgIHRoaXMudHlwZSA9IE5vZGVUeXBlLkR1bW15O1xuICAgIH1cblxuICAgIFhNTER1bW15LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgfTtcblxuICAgIFhNTER1bW15LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTER1bW15O1xuXG4gIH0pKFhNTE5vZGUpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBYTUxOb2RlTGlzdDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTE5vZGVMaXN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhNTE5vZGVMaXN0KG5vZGVzKSB7XG4gICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGVMaXN0LnByb3RvdHlwZSwgJ2xlbmd0aCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVzLmxlbmd0aCB8fCAwO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MTm9kZUxpc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlcyA9IG51bGw7XG4gICAgfTtcblxuICAgIFhNTE5vZGVMaXN0LnByb3RvdHlwZS5pdGVtID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzW2luZGV4XSB8fCBudWxsO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MTm9kZUxpc3Q7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBEaXNjb25uZWN0ZWQ6IDEsXG4gICAgUHJlY2VkaW5nOiAyLFxuICAgIEZvbGxvd2luZzogNCxcbiAgICBDb250YWluczogOCxcbiAgICBDb250YWluZWRCeTogMTYsXG4gICAgSW1wbGVtZW50YXRpb25TcGVjaWZpYzogMzJcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgRG9jdW1lbnRQb3NpdGlvbiwgTm9kZVR5cGUsIFhNTENEYXRhLCBYTUxDb21tZW50LCBYTUxEZWNsYXJhdGlvbiwgWE1MRG9jVHlwZSwgWE1MRHVtbXksIFhNTEVsZW1lbnQsIFhNTE5hbWVkTm9kZU1hcCwgWE1MTm9kZSwgWE1MTm9kZUxpc3QsIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiwgWE1MUmF3LCBYTUxUZXh0LCBnZXRWYWx1ZSwgaXNFbXB0eSwgaXNGdW5jdGlvbiwgaXNPYmplY3QsIHJlZjEsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIHJlZjEgPSByZXF1aXJlKCcuL1V0aWxpdHknKSwgaXNPYmplY3QgPSByZWYxLmlzT2JqZWN0LCBpc0Z1bmN0aW9uID0gcmVmMS5pc0Z1bmN0aW9uLCBpc0VtcHR5ID0gcmVmMS5pc0VtcHR5LCBnZXRWYWx1ZSA9IHJlZjEuZ2V0VmFsdWU7XG5cbiAgWE1MRWxlbWVudCA9IG51bGw7XG5cbiAgWE1MQ0RhdGEgPSBudWxsO1xuXG4gIFhNTENvbW1lbnQgPSBudWxsO1xuXG4gIFhNTERlY2xhcmF0aW9uID0gbnVsbDtcblxuICBYTUxEb2NUeXBlID0gbnVsbDtcblxuICBYTUxSYXcgPSBudWxsO1xuXG4gIFhNTFRleHQgPSBudWxsO1xuXG4gIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IG51bGw7XG5cbiAgWE1MRHVtbXkgPSBudWxsO1xuXG4gIE5vZGVUeXBlID0gbnVsbDtcblxuICBYTUxOb2RlTGlzdCA9IG51bGw7XG5cbiAgWE1MTmFtZWROb2RlTWFwID0gbnVsbDtcblxuICBEb2N1bWVudFBvc2l0aW9uID0gbnVsbDtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTE5vZGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gWE1MTm9kZShwYXJlbnQxKSB7XG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDE7XG4gICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJlbnQub3B0aW9ucztcbiAgICAgICAgdGhpcy5zdHJpbmdpZnkgPSB0aGlzLnBhcmVudC5zdHJpbmdpZnk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgIHRoaXMuYmFzZVVSSSA9IG51bGw7XG4gICAgICBpZiAoIVhNTEVsZW1lbnQpIHtcbiAgICAgICAgWE1MRWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRWxlbWVudCcpO1xuICAgICAgICBYTUxDRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ0RhdGEnKTtcbiAgICAgICAgWE1MQ29tbWVudCA9IHJlcXVpcmUoJy4vWE1MQ29tbWVudCcpO1xuICAgICAgICBYTUxEZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vWE1MRGVjbGFyYXRpb24nKTtcbiAgICAgICAgWE1MRG9jVHlwZSA9IHJlcXVpcmUoJy4vWE1MRG9jVHlwZScpO1xuICAgICAgICBYTUxSYXcgPSByZXF1aXJlKCcuL1hNTFJhdycpO1xuICAgICAgICBYTUxUZXh0ID0gcmVxdWlyZSgnLi9YTUxUZXh0Jyk7XG4gICAgICAgIFhNTFByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IHJlcXVpcmUoJy4vWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uJyk7XG4gICAgICAgIFhNTER1bW15ID0gcmVxdWlyZSgnLi9YTUxEdW1teScpO1xuICAgICAgICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcbiAgICAgICAgWE1MTm9kZUxpc3QgPSByZXF1aXJlKCcuL1hNTE5vZGVMaXN0Jyk7XG4gICAgICAgIFhNTE5hbWVkTm9kZU1hcCA9IHJlcXVpcmUoJy4vWE1MTmFtZWROb2RlTWFwJyk7XG4gICAgICAgIERvY3VtZW50UG9zaXRpb24gPSByZXF1aXJlKCcuL0RvY3VtZW50UG9zaXRpb24nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdub2RlTmFtZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdub2RlVHlwZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdub2RlVmFsdWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxOb2RlLnByb3RvdHlwZSwgJ3BhcmVudE5vZGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdjaGlsZE5vZGVzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkTm9kZUxpc3QgfHwgIXRoaXMuY2hpbGROb2RlTGlzdC5ub2Rlcykge1xuICAgICAgICAgIHRoaXMuY2hpbGROb2RlTGlzdCA9IG5ldyBYTUxOb2RlTGlzdCh0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVMaXN0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAnZmlyc3RDaGlsZCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuWzBdIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdsYXN0Q2hpbGQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlblt0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdwcmV2aW91c1NpYmxpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbltpIC0gMV0gfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxOb2RlLnByb3RvdHlwZSwgJ25leHRTaWJsaW5nJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW5baSArIDFdIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MTm9kZS5wcm90b3R5cGUsICdvd25lckRvY3VtZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQoKSB8fCBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hpbGQsIGosIGxlbiwgcmVmMiwgc3RyO1xuICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCB8fCB0aGlzLm5vZGVUeXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgcmVmMiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmMi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgY2hpbGQgPSByZWYyW2pdO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgIHN0ciArPSBjaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuc2V0UGFyZW50ID0gZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgICB2YXIgY2hpbGQsIGosIGxlbiwgcmVmMiwgcmVzdWx0cztcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBwYXJlbnQub3B0aW9ucztcbiAgICAgICAgdGhpcy5zdHJpbmdpZnkgPSBwYXJlbnQuc3RyaW5naWZ5O1xuICAgICAgfVxuICAgICAgcmVmMiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGNoaWxkID0gcmVmMltqXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGNoaWxkLnNldFBhcmVudCh0aGlzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIHZhciBjaGlsZE5vZGUsIGl0ZW0sIGosIGssIGtleSwgbGFzdENoaWxkLCBsZW4sIGxlbjEsIHJlZjIsIHJlZjMsIHZhbDtcbiAgICAgIGxhc3RDaGlsZCA9IG51bGw7XG4gICAgICBpZiAoYXR0cmlidXRlcyA9PT0gbnVsbCAmJiAodGV4dCA9PSBudWxsKSkge1xuICAgICAgICByZWYyID0gW3t9LCBudWxsXSwgYXR0cmlidXRlcyA9IHJlZjJbMF0sIHRleHQgPSByZWYyWzFdO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkge1xuICAgICAgICBhdHRyaWJ1dGVzID0ge307XG4gICAgICB9XG4gICAgICBhdHRyaWJ1dGVzID0gZ2V0VmFsdWUoYXR0cmlidXRlcyk7XG4gICAgICBpZiAoIWlzT2JqZWN0KGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIHJlZjMgPSBbYXR0cmlidXRlcywgdGV4dF0sIHRleHQgPSByZWYzWzBdLCBhdHRyaWJ1dGVzID0gcmVmM1sxXTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgbmFtZSA9IGdldFZhbHVlKG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gbmFtZS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGl0ZW0gPSBuYW1lW2pdO1xuICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKG5hbWUpKSB7XG4gICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChuYW1lLmFwcGx5KCkpO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChuYW1lKSkge1xuICAgICAgICBmb3IgKGtleSBpbiBuYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwobmFtZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgdmFsID0gbmFtZVtrZXldO1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbCkpIHtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5hcHBseSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRBdHRLZXkgJiYga2V5LmluZGV4T2YodGhpcy5zdHJpbmdpZnkuY29udmVydEF0dEtleSkgPT09IDApIHtcbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuYXR0cmlidXRlKGtleS5zdWJzdHIodGhpcy5zdHJpbmdpZnkuY29udmVydEF0dEtleS5sZW5ndGgpLCB2YWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zZXBhcmF0ZUFycmF5SXRlbXMgJiYgQXJyYXkuaXNBcnJheSh2YWwpICYmIGlzRW1wdHkodmFsKSkge1xuICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5kdW1teSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSAmJiBpc0VtcHR5KHZhbCkpIHtcbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChrZXkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5rZWVwTnVsbE5vZGVzICYmICh2YWwgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZHVtbXkoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2VwYXJhdGVBcnJheUl0ZW1zICYmIEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuMSA9IHZhbC5sZW5ndGg7IGsgPCBsZW4xOyBrKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IHZhbFtrXTtcbiAgICAgICAgICAgICAgY2hpbGROb2RlID0ge307XG4gICAgICAgICAgICAgIGNoaWxkTm9kZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5lbGVtZW50KGNoaWxkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5ICYmIGtleS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmVsZW1lbnQodmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuZWxlbWVudChrZXkpO1xuICAgICAgICAgICAgICBsYXN0Q2hpbGQuZWxlbWVudCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmVsZW1lbnQoa2V5LCB2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHRpb25zLmtlZXBOdWxsTm9kZXMgJiYgdGV4dCA9PT0gbnVsbCkge1xuICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmR1bW15KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRUZXh0S2V5ICYmIG5hbWUuaW5kZXhPZih0aGlzLnN0cmluZ2lmeS5jb252ZXJ0VGV4dEtleSkgPT09IDApIHtcbiAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLnRleHQodGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRDRGF0YUtleSAmJiBuYW1lLmluZGV4T2YodGhpcy5zdHJpbmdpZnkuY29udmVydENEYXRhS2V5KSA9PT0gMCkge1xuICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuY2RhdGEodGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRDb21tZW50S2V5ICYmIG5hbWUuaW5kZXhPZih0aGlzLnN0cmluZ2lmeS5jb252ZXJ0Q29tbWVudEtleSkgPT09IDApIHtcbiAgICAgICAgICBsYXN0Q2hpbGQgPSB0aGlzLmNvbW1lbnQodGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRSYXdLZXkgJiYgbmFtZS5pbmRleE9mKHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRSYXdLZXkpID09PSAwKSB7XG4gICAgICAgICAgbGFzdENoaWxkID0gdGhpcy5yYXcodGV4dCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pZ25vcmVEZWNvcmF0b3JzICYmIHRoaXMuc3RyaW5naWZ5LmNvbnZlcnRQSUtleSAmJiBuYW1lLmluZGV4T2YodGhpcy5zdHJpbmdpZnkuY29udmVydFBJS2V5KSA9PT0gMCkge1xuICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMuaW5zdHJ1Y3Rpb24obmFtZS5zdWJzdHIodGhpcy5zdHJpbmdpZnkuY29udmVydFBJS2V5Lmxlbmd0aCksIHRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3RDaGlsZCA9IHRoaXMubm9kZShuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGxhc3RDaGlsZCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgYW55IGVsZW1lbnRzIHdpdGg6IFwiICsgbmFtZSArIFwiLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhc3RDaGlsZDtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24obmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgdmFyIGNoaWxkLCBpLCBuZXdDaGlsZCwgcmVmQ2hpbGQsIHJlbW92ZWQ7XG4gICAgICBpZiAobmFtZSAhPSBudWxsID8gbmFtZS50eXBlIDogdm9pZCAwKSB7XG4gICAgICAgIG5ld0NoaWxkID0gbmFtZTtcbiAgICAgICAgcmVmQ2hpbGQgPSBhdHRyaWJ1dGVzO1xuICAgICAgICBuZXdDaGlsZC5zZXRQYXJlbnQodGhpcyk7XG4gICAgICAgIGlmIChyZWZDaGlsZCkge1xuICAgICAgICAgIGkgPSBjaGlsZHJlbi5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgICByZW1vdmVkID0gY2hpbGRyZW4uc3BsaWNlKGkpO1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc1Jvb3QpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5zZXJ0IGVsZW1lbnRzIGF0IHJvb3QgbGV2ZWwuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICByZW1vdmVkID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGkpO1xuICAgICAgICBjaGlsZCA9IHRoaXMucGFyZW50LmVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5pbnNlcnRBZnRlciA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgIGlmICh0aGlzLmlzUm9vdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5zZXJ0IGVsZW1lbnRzIGF0IHJvb3QgbGV2ZWwuIFwiICsgdGhpcy5kZWJ1Z0luZm8obmFtZSkpO1xuICAgICAgfVxuICAgICAgaSA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICByZW1vdmVkID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGkgKyAxKTtcbiAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuZWxlbWVudChuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgcmVmMjtcbiAgICAgIGlmICh0aGlzLmlzUm9vdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVtb3ZlIHRoZSByb290IGVsZW1lbnQuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgIFtdLnNwbGljZS5hcHBseSh0aGlzLnBhcmVudC5jaGlsZHJlbiwgW2ksIGkgLSBpICsgMV0uY29uY2F0KHJlZjIgPSBbXSkpLCByZWYyO1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5ub2RlID0gZnVuY3Rpb24obmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgdmFyIGNoaWxkLCByZWYyO1xuICAgICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICB9XG4gICAgICBhdHRyaWJ1dGVzIHx8IChhdHRyaWJ1dGVzID0ge30pO1xuICAgICAgYXR0cmlidXRlcyA9IGdldFZhbHVlKGF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKCFpc09iamVjdChhdHRyaWJ1dGVzKSkge1xuICAgICAgICByZWYyID0gW2F0dHJpYnV0ZXMsIHRleHRdLCB0ZXh0ID0gcmVmMlswXSwgYXR0cmlidXRlcyA9IHJlZjJbMV07XG4gICAgICB9XG4gICAgICBjaGlsZCA9IG5ldyBYTUxFbGVtZW50KHRoaXMsIG5hbWUsIGF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgICBjaGlsZC50ZXh0KHRleHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGQ7XG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBjaGlsZCA9IG5ldyBYTUxUZXh0KHRoaXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuY2RhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIGNoaWxkO1xuICAgICAgY2hpbGQgPSBuZXcgWE1MQ0RhdGEodGhpcywgdmFsdWUpO1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5jb21tZW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZDtcbiAgICAgIGNoaWxkID0gbmV3IFhNTENvbW1lbnQodGhpcywgdmFsdWUpO1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5jb21tZW50QmVmb3JlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpKTtcbiAgICAgIGNoaWxkID0gdGhpcy5wYXJlbnQuY29tbWVudCh2YWx1ZSk7XG4gICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLnBhcmVudC5jaGlsZHJlbiwgcmVtb3ZlZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuY29tbWVudEFmdGVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBjaGlsZCwgaSwgcmVtb3ZlZDtcbiAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgcmVtb3ZlZCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpICsgMSk7XG4gICAgICBjaGlsZCA9IHRoaXMucGFyZW50LmNvbW1lbnQodmFsdWUpO1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5wYXJlbnQuY2hpbGRyZW4sIHJlbW92ZWQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGQ7XG4gICAgICBjaGlsZCA9IG5ldyBYTUxSYXcodGhpcywgdmFsdWUpO1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5kdW1teSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNoaWxkO1xuICAgICAgY2hpbGQgPSBuZXcgWE1MRHVtbXkodGhpcyk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmluc3RydWN0aW9uID0gZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgdmFyIGluc1RhcmdldCwgaW5zVmFsdWUsIGluc3RydWN0aW9uLCBqLCBsZW47XG4gICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0VmFsdWUodGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhbHVlID0gZ2V0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSB0YXJnZXQubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBpbnNUYXJnZXQgPSB0YXJnZXRbal07XG4gICAgICAgICAgdGhpcy5pbnN0cnVjdGlvbihpbnNUYXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yIChpbnNUYXJnZXQgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwodGFyZ2V0LCBpbnNUYXJnZXQpKSBjb250aW51ZTtcbiAgICAgICAgICBpbnNWYWx1ZSA9IHRhcmdldFtpbnNUYXJnZXRdO1xuICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24oaW5zVGFyZ2V0LCBpbnNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0cnVjdGlvbiA9IG5ldyBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGhpcywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChpbnN0cnVjdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaW5zdHJ1Y3Rpb25CZWZvcmUgPSBmdW5jdGlvbih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGQsIGksIHJlbW92ZWQ7XG4gICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgIHJlbW92ZWQgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSk7XG4gICAgICBjaGlsZCA9IHRoaXMucGFyZW50Lmluc3RydWN0aW9uKHRhcmdldCwgdmFsdWUpO1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5wYXJlbnQuY2hpbGRyZW4sIHJlbW92ZWQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmluc3RydWN0aW9uQWZ0ZXIgPSBmdW5jdGlvbih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICB2YXIgY2hpbGQsIGksIHJlbW92ZWQ7XG4gICAgICBpID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgIHJlbW92ZWQgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaSArIDEpO1xuICAgICAgY2hpbGQgPSB0aGlzLnBhcmVudC5pbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMucGFyZW50LmNoaWxkcmVuLCByZW1vdmVkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5kZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKSB7XG4gICAgICB2YXIgZG9jLCB4bWxkZWM7XG4gICAgICBkb2MgPSB0aGlzLmRvY3VtZW50KCk7XG4gICAgICB4bWxkZWMgPSBuZXcgWE1MRGVjbGFyYXRpb24oZG9jLCB2ZXJzaW9uLCBlbmNvZGluZywgc3RhbmRhbG9uZSk7XG4gICAgICBpZiAoZG9jLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkb2MuY2hpbGRyZW4udW5zaGlmdCh4bWxkZWMpO1xuICAgICAgfSBlbHNlIGlmIChkb2MuY2hpbGRyZW5bMF0udHlwZSA9PT0gTm9kZVR5cGUuRGVjbGFyYXRpb24pIHtcbiAgICAgICAgZG9jLmNoaWxkcmVuWzBdID0geG1sZGVjO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jLmNoaWxkcmVuLnVuc2hpZnQoeG1sZGVjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkb2Mucm9vdCgpIHx8IGRvYztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuZHRkID0gZnVuY3Rpb24ocHViSUQsIHN5c0lEKSB7XG4gICAgICB2YXIgY2hpbGQsIGRvYywgZG9jdHlwZSwgaSwgaiwgaywgbGVuLCBsZW4xLCByZWYyLCByZWYzO1xuICAgICAgZG9jID0gdGhpcy5kb2N1bWVudCgpO1xuICAgICAgZG9jdHlwZSA9IG5ldyBYTUxEb2NUeXBlKGRvYywgcHViSUQsIHN5c0lEKTtcbiAgICAgIHJlZjIgPSBkb2MuY2hpbGRyZW47XG4gICAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmMi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgICAgY2hpbGQgPSByZWYyW2ldO1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICAgIGRvYy5jaGlsZHJlbltpXSA9IGRvY3R5cGU7XG4gICAgICAgICAgcmV0dXJuIGRvY3R5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlZjMgPSBkb2MuY2hpbGRyZW47XG4gICAgICBmb3IgKGkgPSBrID0gMCwgbGVuMSA9IHJlZjMubGVuZ3RoOyBrIDwgbGVuMTsgaSA9ICsraykge1xuICAgICAgICBjaGlsZCA9IHJlZjNbaV07XG4gICAgICAgIGlmIChjaGlsZC5pc1Jvb3QpIHtcbiAgICAgICAgICBkb2MuY2hpbGRyZW4uc3BsaWNlKGksIDAsIGRvY3R5cGUpO1xuICAgICAgICAgIHJldHVybiBkb2N0eXBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkb2MuY2hpbGRyZW4ucHVzaChkb2N0eXBlKTtcbiAgICAgIHJldHVybiBkb2N0eXBlO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS51cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaXNSb290KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSByb290IG5vZGUgaGFzIG5vIHBhcmVudC4gVXNlIGRvYygpIGlmIHlvdSBuZWVkIHRvIGdldCB0aGUgZG9jdW1lbnQgb2JqZWN0LlwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUucm9vdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICBub2RlID0gdGhpcztcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGUucm9vdE9iamVjdDtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmlzUm9vdCkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5kb2N1bWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICBub2RlID0gdGhpcztcbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50KCkuZW5kKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKGkgPCAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFscmVhZHkgYXQgdGhlIGZpcnN0IG5vZGUuIFwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW5baSAtIDFdO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGkgPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKGkgPT09IC0xIHx8IGkgPT09IHRoaXMucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWxyZWFkeSBhdCB0aGUgbGFzdCBub2RlLiBcIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuW2kgKyAxXTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaW1wb3J0RG9jdW1lbnQgPSBmdW5jdGlvbihkb2MpIHtcbiAgICAgIHZhciBjbG9uZWRSb290O1xuICAgICAgY2xvbmVkUm9vdCA9IGRvYy5yb290KCkuY2xvbmUoKTtcbiAgICAgIGNsb25lZFJvb3QucGFyZW50ID0gdGhpcztcbiAgICAgIGNsb25lZFJvb3QuaXNSb290ID0gZmFsc2U7XG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2xvbmVkUm9vdCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuZGVidWdJbmZvID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdmFyIHJlZjIsIHJlZjM7XG4gICAgICBuYW1lID0gbmFtZSB8fCB0aGlzLm5hbWU7XG4gICAgICBpZiAoKG5hbWUgPT0gbnVsbCkgJiYgISgocmVmMiA9IHRoaXMucGFyZW50KSAhPSBudWxsID8gcmVmMi5uYW1lIDogdm9pZCAwKSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBcInBhcmVudDogPFwiICsgdGhpcy5wYXJlbnQubmFtZSArIFwiPlwiO1xuICAgICAgfSBlbHNlIGlmICghKChyZWYzID0gdGhpcy5wYXJlbnQpICE9IG51bGwgPyByZWYzLm5hbWUgOiB2b2lkIDApKSB7XG4gICAgICAgIHJldHVybiBcIm5vZGU6IDxcIiArIG5hbWUgKyBcIj5cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5vZGU6IDxcIiArIG5hbWUgKyBcIj4sIHBhcmVudDogPFwiICsgdGhpcy5wYXJlbnQubmFtZSArIFwiPlwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5lbGUgPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50KG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5ub2QgPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS50eHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmRhdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jZGF0YSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmNvbSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21tZW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaW5zID0gZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb24odGFyZ2V0LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmRvYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQoKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuZGVjID0gZnVuY3Rpb24odmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uKHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuZSA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLm4gPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQodmFsdWUpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5kID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNkYXRhKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuYyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21tZW50KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYXcodmFsdWUpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5pID0gZnVuY3Rpb24odGFyZ2V0LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdHJ1Y3Rpb24odGFyZ2V0LCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLnUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwKCk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmltcG9ydFhNTEJ1aWxkZXIgPSBmdW5jdGlvbihkb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmltcG9ydERvY3VtZW50KGRvYyk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLnJlcGxhY2VDaGlsZCA9IGZ1bmN0aW9uKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uKG9sZENoaWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24obmV3Q2hpbGQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaGFzQ2hpbGROb2RlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoICE9PSAwO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbihkZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5oYXNBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRyaWJzLmxlbmd0aCAhPT0gMDtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24gPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgdmFyIHJlZiwgcmVzO1xuICAgICAgcmVmID0gdGhpcztcbiAgICAgIGlmIChyZWYgPT09IG90aGVyKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmRvY3VtZW50KCkgIT09IG90aGVyLmRvY3VtZW50KCkpIHtcbiAgICAgICAgcmVzID0gRG9jdW1lbnRQb3NpdGlvbi5EaXNjb25uZWN0ZWQgfCBEb2N1bWVudFBvc2l0aW9uLkltcGxlbWVudGF0aW9uU3BlY2lmaWM7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgcmVzIHw9IERvY3VtZW50UG9zaXRpb24uUHJlY2VkaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyB8PSBEb2N1bWVudFBvc2l0aW9uLkZvbGxvd2luZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSBlbHNlIGlmIChyZWYuaXNBbmNlc3RvcihvdGhlcikpIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50UG9zaXRpb24uQ29udGFpbnMgfCBEb2N1bWVudFBvc2l0aW9uLlByZWNlZGluZztcbiAgICAgIH0gZWxzZSBpZiAocmVmLmlzRGVzY2VuZGFudChvdGhlcikpIHtcbiAgICAgICAgcmV0dXJuIERvY3VtZW50UG9zaXRpb24uQ29udGFpbnMgfCBEb2N1bWVudFBvc2l0aW9uLkZvbGxvd2luZztcbiAgICAgIH0gZWxzZSBpZiAocmVmLmlzUHJlY2VkaW5nKG90aGVyKSkge1xuICAgICAgICByZXR1cm4gRG9jdW1lbnRQb3NpdGlvbi5QcmVjZWRpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRG9jdW1lbnRQb3NpdGlvbi5Gb2xsb3dpbmc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmlzU2FtZU5vZGUgPSBmdW5jdGlvbihvdGhlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5sb29rdXBQcmVmaXggPSBmdW5jdGlvbihuYW1lc3BhY2VVUkkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaXNEZWZhdWx0TmFtZXNwYWNlID0gZnVuY3Rpb24obmFtZXNwYWNlVVJJKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmxvb2t1cE5hbWVzcGFjZVVSSSA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5pc0VxdWFsTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBpLCBqLCByZWYyO1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IHRoaXMubm9kZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSBqID0gMCwgcmVmMiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgMCA8PSByZWYyID8gaiA8PSByZWYyIDogaiA+PSByZWYyOyBpID0gMCA8PSByZWYyID8gKytqIDogLS1qKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5pc0VxdWFsTm9kZShub2RlLmNoaWxkcmVuW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmdldEZlYXR1cmUgPSBmdW5jdGlvbihmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLnNldFVzZXJEYXRhID0gZnVuY3Rpb24oa2V5LCBkYXRhLCBoYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmdldFVzZXJEYXRhID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgICAgIGlmICghb3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG90aGVyID09PSB0aGlzIHx8IHRoaXMuaXNEZXNjZW5kYW50KG90aGVyKTtcbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUuaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGNoaWxkLCBpc0Rlc2NlbmRhbnRDaGlsZCwgaiwgbGVuLCByZWYyO1xuICAgICAgcmVmMiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGNoaWxkID0gcmVmMltqXTtcbiAgICAgICAgaWYgKG5vZGUgPT09IGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaXNEZXNjZW5kYW50Q2hpbGQgPSBjaGlsZC5pc0Rlc2NlbmRhbnQobm9kZSk7XG4gICAgICAgIGlmIChpc0Rlc2NlbmRhbnRDaGlsZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmlzQW5jZXN0b3IgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5pc0Rlc2NlbmRhbnQodGhpcyk7XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmlzUHJlY2VkaW5nID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIG5vZGVQb3MsIHRoaXNQb3M7XG4gICAgICBub2RlUG9zID0gdGhpcy50cmVlUG9zaXRpb24obm9kZSk7XG4gICAgICB0aGlzUG9zID0gdGhpcy50cmVlUG9zaXRpb24odGhpcyk7XG4gICAgICBpZiAobm9kZVBvcyA9PT0gLTEgfHwgdGhpc1BvcyA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5vZGVQb3MgPCB0aGlzUG9zO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxOb2RlLnByb3RvdHlwZS5pc0ZvbGxvd2luZyA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBub2RlUG9zLCB0aGlzUG9zO1xuICAgICAgbm9kZVBvcyA9IHRoaXMudHJlZVBvc2l0aW9uKG5vZGUpO1xuICAgICAgdGhpc1BvcyA9IHRoaXMudHJlZVBvc2l0aW9uKHRoaXMpO1xuICAgICAgaWYgKG5vZGVQb3MgPT09IC0xIHx8IHRoaXNQb3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBub2RlUG9zID4gdGhpc1BvcztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWE1MTm9kZS5wcm90b3R5cGUudHJlZVBvc2l0aW9uID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGZvdW5kLCBwb3M7XG4gICAgICBwb3MgPSAwO1xuICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZm9yZWFjaFRyZWVOb2RlKHRoaXMuZG9jdW1lbnQoKSwgZnVuY3Rpb24oY2hpbGROb2RlKSB7XG4gICAgICAgIHBvcysrO1xuICAgICAgICBpZiAoIWZvdW5kICYmIGNoaWxkTm9kZSA9PT0gbm9kZSkge1xuICAgICAgICAgIHJldHVybiBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTE5vZGUucHJvdG90eXBlLmZvcmVhY2hUcmVlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIGZ1bmMpIHtcbiAgICAgIHZhciBjaGlsZCwgaiwgbGVuLCByZWYyLCByZXM7XG4gICAgICBub2RlIHx8IChub2RlID0gdGhpcy5kb2N1bWVudCgpKTtcbiAgICAgIHJlZjIgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmMi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBjaGlsZCA9IHJlZjJbal07XG4gICAgICAgIGlmIChyZXMgPSBmdW5jKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gdGhpcy5mb3JlYWNoVHJlZU5vZGUoY2hpbGQsIGZ1bmMpO1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxOb2RlO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjdcbihmdW5jdGlvbigpIHtcbiAgdmFyIFhNTFN0cmluZ2lmaWVyLFxuICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTFN0cmluZ2lmaWVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhNTFN0cmluZ2lmaWVyKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYXNzZXJ0TGVnYWxOYW1lID0gYmluZCh0aGlzLmFzc2VydExlZ2FsTmFtZSwgdGhpcyk7XG4gICAgICB0aGlzLmFzc2VydExlZ2FsQ2hhciA9IGJpbmQodGhpcy5hc3NlcnRMZWdhbENoYXIsIHRoaXMpO1xuICAgICAgdmFyIGtleSwgcmVmLCB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMudmVyc2lvbikge1xuICAgICAgICB0aGlzLm9wdGlvbnMudmVyc2lvbiA9ICcxLjAnO1xuICAgICAgfVxuICAgICAgcmVmID0gb3B0aW9ucy5zdHJpbmdpZnkgfHwge307XG4gICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSByZWZba2V5XTtcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbE5hbWUoJycgKyB2YWwgfHwgJycpO1xuICAgIH07XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcih0aGlzLnRleHRFc2NhcGUoJycgKyB2YWwgfHwgJycpKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmNkYXRhID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gJycgKyB2YWwgfHwgJyc7XG4gICAgICB2YWwgPSB2YWwucmVwbGFjZSgnXV0+JywgJ11dXV0+PCFbQ0RBVEFbPicpO1xuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHZhbCk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5jb21tZW50ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gJycgKyB2YWwgfHwgJyc7XG4gICAgICBpZiAodmFsLm1hdGNoKC8tLS8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbW1lbnQgdGV4dCBjYW5ub3QgY29udGFpbiBkb3VibGUtaHlwZW46IFwiICsgdmFsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcih2YWwpO1xuICAgIH07XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUucmF3ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnICsgdmFsIHx8ICcnO1xuICAgIH07XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuYXR0VmFsdWUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbENoYXIodGhpcy5hdHRFc2NhcGUodmFsID0gJycgKyB2YWwgfHwgJycpKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmluc1RhcmdldCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5pbnNWYWx1ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICcnICsgdmFsIHx8ICcnO1xuICAgICAgaWYgKHZhbC5tYXRjaCgvXFw/Pi8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiB2YWx1ZTogXCIgKyB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHZhbCk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS54bWxWZXJzaW9uID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgdmFsID0gJycgKyB2YWwgfHwgJyc7XG4gICAgICBpZiAoIXZhbC5tYXRjaCgvMVxcLlswLTldKy8pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbiBudW1iZXI6IFwiICsgdmFsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS54bWxFbmNvZGluZyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHZhbCA9ICcnICsgdmFsIHx8ICcnO1xuICAgICAgaWYgKCF2YWwubWF0Y2goL15bQS1aYS16XSg/OltBLVphLXowLTkuXy1dKSokLykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBlbmNvZGluZzogXCIgKyB2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKHZhbCk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS54bWxTdGFuZGFsb25lID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCkge1xuICAgICAgICByZXR1cm4gXCJ5ZXNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5vXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5kdGRQdWJJRCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5kdGRTeXNJRCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5kdGRFbGVtZW50VmFsdWUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5hc3NlcnRMZWdhbENoYXIoJycgKyB2YWwgfHwgJycpO1xuICAgIH07XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuZHRkQXR0VHlwZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmFzc2VydExlZ2FsQ2hhcignJyArIHZhbCB8fCAnJyk7XG4gICAgfTtcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5kdGRBdHREZWZhdWx0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmR0ZEVudGl0eVZhbHVlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmR0ZE5EYXRhID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYXNzZXJ0TGVnYWxDaGFyKCcnICsgdmFsIHx8ICcnKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmNvbnZlcnRBdHRLZXkgPSAnQCc7XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuY29udmVydFBJS2V5ID0gJz8nO1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmNvbnZlcnRUZXh0S2V5ID0gJyN0ZXh0JztcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5jb252ZXJ0Q0RhdGFLZXkgPSAnI2NkYXRhJztcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5jb252ZXJ0Q29tbWVudEtleSA9ICcjY29tbWVudCc7XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuY29udmVydFJhd0tleSA9ICcjcmF3JztcblxuICAgIFhNTFN0cmluZ2lmaWVyLnByb3RvdHlwZS5hc3NlcnRMZWdhbENoYXIgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHZhciByZWdleCwgcmVzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICAgIHJlZ2V4ID0gJyc7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnZlcnNpb24gPT09ICcxLjAnKSB7XG4gICAgICAgIHJlZ2V4ID0gL1tcXDAtXFx4MDhcXHgwQlxcZlxceDBFLVxceDFGXFx1RkZGRVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcbiAgICAgICAgaWYgKHJlcyA9IHN0ci5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBzdHJpbmc6IFwiICsgc3RyICsgXCIgYXQgaW5kZXggXCIgKyByZXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy52ZXJzaW9uID09PSAnMS4xJykge1xuICAgICAgICByZWdleCA9IC9bXFwwXFx1RkZGRVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdLztcbiAgICAgICAgaWYgKHJlcyA9IHN0ci5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBzdHJpbmc6IFwiICsgc3RyICsgXCIgYXQgaW5kZXggXCIgKyByZXMuaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH07XG5cbiAgICBYTUxTdHJpbmdpZmllci5wcm90b3R5cGUuYXNzZXJ0TGVnYWxOYW1lID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICB2YXIgcmVnZXg7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbikge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgfVxuICAgICAgdGhpcy5hc3NlcnRMZWdhbENoYXIoc3RyKTtcbiAgICAgIHJlZ2V4ID0gL14oWzpBLVpfYS16XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF18W1xcdUQ4MDAtXFx1REI3Rl1bXFx1REMwMC1cXHVERkZGXSkoW1xceDJEXFwuMC06QS1aX2EtelxceEI3XFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDXFx1MjAwRFxcdTIwM0ZcXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXXxbXFx1RDgwMC1cXHVEQjdGXVtcXHVEQzAwLVxcdURGRkZdKSokLztcbiAgICAgIGlmICghc3RyLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBuYW1lXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLnRleHRFc2NhcGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHZhciBhbXByZWdleDtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9XG4gICAgICBhbXByZWdleCA9IHRoaXMub3B0aW9ucy5ub0RvdWJsZUVuY29kaW5nID8gLyg/ISZcXFMrOykmL2cgOiAvJi9nO1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKGFtcHJlZ2V4LCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoL1xcci9nLCAnJiN4RDsnKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyaW5naWZpZXIucHJvdG90eXBlLmF0dEVzY2FwZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgdmFyIGFtcHJlZ2V4O1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgICAgIGFtcHJlZ2V4ID0gdGhpcy5vcHRpb25zLm5vRG91YmxlRW5jb2RpbmcgPyAvKD8hJlxcUys7KSYvZyA6IC8mL2c7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoYW1wcmVnZXgsICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvXFx0L2csICcmI3g5OycpLnJlcGxhY2UoL1xcbi9nLCAnJiN4QTsnKS5yZXBsYWNlKC9cXHIvZywgJyYjeEQ7Jyk7XG4gICAgfTtcblxuICAgIHJldHVybiBYTUxTdHJpbmdpZmllcjtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIE5vbmU6IDAsXG4gICAgT3BlblRhZzogMSxcbiAgICBJbnNpZGVUYWc6IDIsXG4gICAgQ2xvc2VUYWc6IDNcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFdyaXRlclN0YXRlLCBYTUxDRGF0YSwgWE1MQ29tbWVudCwgWE1MRFREQXR0TGlzdCwgWE1MRFRERWxlbWVudCwgWE1MRFRERW50aXR5LCBYTUxEVEROb3RhdGlvbiwgWE1MRGVjbGFyYXRpb24sIFhNTERvY1R5cGUsIFhNTER1bW15LCBYTUxFbGVtZW50LCBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIFhNTFJhdywgWE1MVGV4dCwgWE1MV3JpdGVyQmFzZSwgYXNzaWduLFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBhc3NpZ24gPSByZXF1aXJlKCcuL1V0aWxpdHknKS5hc3NpZ247XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MRGVjbGFyYXRpb24gPSByZXF1aXJlKCcuL1hNTERlY2xhcmF0aW9uJyk7XG5cbiAgWE1MRG9jVHlwZSA9IHJlcXVpcmUoJy4vWE1MRG9jVHlwZScpO1xuXG4gIFhNTENEYXRhID0gcmVxdWlyZSgnLi9YTUxDRGF0YScpO1xuXG4gIFhNTENvbW1lbnQgPSByZXF1aXJlKCcuL1hNTENvbW1lbnQnKTtcblxuICBYTUxFbGVtZW50ID0gcmVxdWlyZSgnLi9YTUxFbGVtZW50Jyk7XG5cbiAgWE1MUmF3ID0gcmVxdWlyZSgnLi9YTUxSYXcnKTtcblxuICBYTUxUZXh0ID0gcmVxdWlyZSgnLi9YTUxUZXh0Jyk7XG5cbiAgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gcmVxdWlyZSgnLi9YTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nKTtcblxuICBYTUxEdW1teSA9IHJlcXVpcmUoJy4vWE1MRHVtbXknKTtcblxuICBYTUxEVERBdHRMaXN0ID0gcmVxdWlyZSgnLi9YTUxEVERBdHRMaXN0Jyk7XG5cbiAgWE1MRFRERWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRFRERWxlbWVudCcpO1xuXG4gIFhNTERUREVudGl0eSA9IHJlcXVpcmUoJy4vWE1MRFRERW50aXR5Jyk7XG5cbiAgWE1MRFRETm90YXRpb24gPSByZXF1aXJlKCcuL1hNTERURE5vdGF0aW9uJyk7XG5cbiAgV3JpdGVyU3RhdGUgPSByZXF1aXJlKCcuL1dyaXRlclN0YXRlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxXcml0ZXJCYXNlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFhNTFdyaXRlckJhc2Uob3B0aW9ucykge1xuICAgICAgdmFyIGtleSwgcmVmLCB2YWx1ZTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgcmVmID0gb3B0aW9ucy53cml0ZXIgfHwge307XG4gICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSByZWZba2V5XTtcbiAgICAgICAgdGhpc1tcIl9cIiArIGtleV0gPSB0aGlzW2tleV07XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIFhNTFdyaXRlckJhc2UucHJvdG90eXBlLmZpbHRlck9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZmlsdGVyZWRPcHRpb25zLCByZWYsIHJlZjEsIHJlZjIsIHJlZjMsIHJlZjQsIHJlZjUsIHJlZjY7XG4gICAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgICAgb3B0aW9ucyA9IGFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucyA9IHtcbiAgICAgICAgd3JpdGVyOiB0aGlzXG4gICAgICB9O1xuICAgICAgZmlsdGVyZWRPcHRpb25zLnByZXR0eSA9IG9wdGlvbnMucHJldHR5IHx8IGZhbHNlO1xuICAgICAgZmlsdGVyZWRPcHRpb25zLmFsbG93RW1wdHkgPSBvcHRpb25zLmFsbG93RW1wdHkgfHwgZmFsc2U7XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMuaW5kZW50ID0gKHJlZiA9IG9wdGlvbnMuaW5kZW50KSAhPSBudWxsID8gcmVmIDogJyAgJztcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5uZXdsaW5lID0gKHJlZjEgPSBvcHRpb25zLm5ld2xpbmUpICE9IG51bGwgPyByZWYxIDogJ1xcbic7XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMub2Zmc2V0ID0gKHJlZjIgPSBvcHRpb25zLm9mZnNldCkgIT0gbnVsbCA/IHJlZjIgOiAwO1xuICAgICAgZmlsdGVyZWRPcHRpb25zLmRvbnRQcmV0dHlUZXh0Tm9kZXMgPSAocmVmMyA9IChyZWY0ID0gb3B0aW9ucy5kb250UHJldHR5VGV4dE5vZGVzKSAhPSBudWxsID8gcmVmNCA6IG9wdGlvbnMuZG9udHByZXR0eXRleHRub2RlcykgIT0gbnVsbCA/IHJlZjMgOiAwO1xuICAgICAgZmlsdGVyZWRPcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggPSAocmVmNSA9IChyZWY2ID0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoKSAhPSBudWxsID8gcmVmNiA6IG9wdGlvbnMuc3BhY2ViZWZvcmVzbGFzaCkgIT0gbnVsbCA/IHJlZjUgOiAnJztcbiAgICAgIGlmIChmaWx0ZXJlZE9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCA9PT0gdHJ1ZSkge1xuICAgICAgICBmaWx0ZXJlZE9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCA9ICcgJztcbiAgICAgIH1cbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50ID0gMDtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy51c2VyID0ge307XG4gICAgICBmaWx0ZXJlZE9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcbiAgICB9O1xuXG4gICAgWE1MV3JpdGVyQmFzZS5wcm90b3R5cGUuaW5kZW50ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciBpbmRlbnRMZXZlbDtcbiAgICAgIGlmICghb3B0aW9ucy5wcmV0dHkgfHwgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wcmV0dHkpIHtcbiAgICAgICAgaW5kZW50TGV2ZWwgPSAobGV2ZWwgfHwgMCkgKyBvcHRpb25zLm9mZnNldCArIDE7XG4gICAgICAgIGlmIChpbmRlbnRMZXZlbCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KGluZGVudExldmVsKS5qb2luKG9wdGlvbnMuaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5lbmRsaW5lID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIGlmICghb3B0aW9ucy5wcmV0dHkgfHwgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm5ld2xpbmU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTFdyaXRlckJhc2UucHJvdG90eXBlLmF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dCwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuQXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgciA9ICcgJyArIGF0dC5uYW1lICsgJz1cIicgKyBhdHQudmFsdWUgKyAnXCInO1xuICAgICAgdGhpcy5jbG9zZUF0dHJpYnV0ZShhdHQsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5jZGF0YSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwhW0NEQVRBWyc7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSBub2RlLnZhbHVlO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSAnXV0+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5jb21tZW50ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPCEtLSAnO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gbm9kZS52YWx1ZTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gJyAtLT4nICsgdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcblxuICAgIFhNTFdyaXRlckJhc2UucHJvdG90eXBlLmRlY2xhcmF0aW9uID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPD94bWwnO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gJyB2ZXJzaW9uPVwiJyArIG5vZGUudmVyc2lvbiArICdcIic7XG4gICAgICBpZiAobm9kZS5lbmNvZGluZyAhPSBudWxsKSB7XG4gICAgICAgIHIgKz0gJyBlbmNvZGluZz1cIicgKyBub2RlLmVuY29kaW5nICsgJ1wiJztcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnN0YW5kYWxvbmUgIT0gbnVsbCkge1xuICAgICAgICByICs9ICcgc3RhbmRhbG9uZT1cIicgKyBub2RlLnN0YW5kYWxvbmUgKyAnXCInO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSBvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggKyAnPz4nO1xuICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG4gICAgWE1MV3JpdGVyQmFzZS5wcm90b3R5cGUuZG9jVHlwZSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgY2hpbGQsIGksIGxlbiwgciwgcmVmO1xuICAgICAgbGV2ZWwgfHwgKGxldmVsID0gMCk7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHIgKz0gJzwhRE9DVFlQRSAnICsgbm9kZS5yb290KCkubmFtZTtcbiAgICAgIGlmIChub2RlLnB1YklEICYmIG5vZGUuc3lzSUQpIHtcbiAgICAgICAgciArPSAnIFBVQkxJQyBcIicgKyBub2RlLnB1YklEICsgJ1wiIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgfSBlbHNlIGlmIChub2RlLnN5c0lEKSB7XG4gICAgICAgIHIgKz0gJyBTWVNURU0gXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHIgKz0gJyBbJztcbiAgICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgICByZWYgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgICAgICByICs9IHRoaXMud3JpdGVDaGlsZE5vZGUoY2hpbGQsIG9wdGlvbnMsIGxldmVsICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICByICs9ICddJztcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz4nO1xuICAgICAgciArPSB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG4gICAgWE1MV3JpdGVyQmFzZS5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgYXR0LCBjaGlsZCwgY2hpbGROb2RlQ291bnQsIGZpcnN0Q2hpbGROb2RlLCBpLCBqLCBsZW4sIGxlbjEsIG5hbWUsIHByZXR0eVN1cHByZXNzZWQsIHIsIHJlZiwgcmVmMSwgcmVmMjtcbiAgICAgIGxldmVsIHx8IChsZXZlbCA9IDApO1xuICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgciA9ICcnO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgKz0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwnICsgbm9kZS5uYW1lO1xuICAgICAgcmVmID0gbm9kZS5hdHRyaWJzO1xuICAgICAgZm9yIChuYW1lIGluIHJlZikge1xuICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYsIG5hbWUpKSBjb250aW51ZTtcbiAgICAgICAgYXR0ID0gcmVmW25hbWVdO1xuICAgICAgICByICs9IHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgfVxuICAgICAgY2hpbGROb2RlQ291bnQgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlQ291bnQgPT09IDAgPyBudWxsIDogbm9kZS5jaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZE5vZGVDb3VudCA9PT0gMCB8fCBub2RlLmNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIChlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgfHwgZS50eXBlID09PSBOb2RlVHlwZS5SYXcpICYmIGUudmFsdWUgPT09ICcnO1xuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dFbXB0eSkge1xuICAgICAgICAgIHIgKz0gJz4nO1xuICAgICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgICByICs9ICc8LycgKyBub2RlLm5hbWUgKyAnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICcvPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucHJldHR5ICYmIGNoaWxkTm9kZUNvdW50ID09PSAxICYmIChmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5UZXh0IHx8IGZpcnN0Q2hpbGROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlJhdykgJiYgKGZpcnN0Q2hpbGROb2RlLnZhbHVlICE9IG51bGwpKSB7XG4gICAgICAgIHIgKz0gJz4nO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgICBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQrKztcbiAgICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHIgKz0gdGhpcy53cml0ZUNoaWxkTm9kZShmaXJzdENoaWxkTm9kZSwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwcmVzc1ByZXR0eUNvdW50LS07XG4gICAgICAgIHByZXR0eVN1cHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICByICs9ICc8LycgKyBub2RlLm5hbWUgKyAnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZG9udFByZXR0eVRleHROb2Rlcykge1xuICAgICAgICAgIHJlZjEgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gcmVmMVtpXTtcbiAgICAgICAgICAgIGlmICgoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fCBjaGlsZC50eXBlID09PSBOb2RlVHlwZS5SYXcpICYmIChjaGlsZC52YWx1ZSAhPSBudWxsKSkge1xuICAgICAgICAgICAgICBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQrKztcbiAgICAgICAgICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByICs9ICc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgIHJlZjIgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZjJbal07XG4gICAgICAgICAgciArPSB0aGlzLndyaXRlQ2hpbGROb2RlKGNoaWxkLCBvcHRpb25zLCBsZXZlbCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgciArPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPC8nICsgbm9kZS5uYW1lICsgJz4nO1xuICAgICAgICBpZiAocHJldHR5U3VwcHJlc3NlZCkge1xuICAgICAgICAgIG9wdGlvbnMuc3VwcHJlc3NQcmV0dHlDb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIHIgKz0gdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG4gICAgWE1MV3JpdGVyQmFzZS5wcm90b3R5cGUud3JpdGVDaGlsZE5vZGUgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5DRGF0YTpcbiAgICAgICAgICByZXR1cm4gdGhpcy5jZGF0YShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb21tZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OlxuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLlJhdzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5yYXcobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLlRleHQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGV4dChub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuUHJvY2Vzc2luZ0luc3RydWN0aW9uOlxuICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRHVtbXk6XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkRlY2xhcmF0aW9uOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5Eb2NUeXBlOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRvY1R5cGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkF0dHJpYnV0ZURlY2xhcmF0aW9uOlxuICAgICAgICAgIHJldHVybiB0aGlzLmR0ZEF0dExpc3Qobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkVsZW1lbnREZWNsYXJhdGlvbjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5kdGRFbGVtZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5FbnRpdHlEZWNsYXJhdGlvbjpcbiAgICAgICAgICByZXR1cm4gdGhpcy5kdGRFbnRpdHkobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLk5vdGF0aW9uRGVjbGFyYXRpb246XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZHRkTm90YXRpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gWE1MIG5vZGUgdHlwZTogXCIgKyBub2RlLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5wcm9jZXNzaW5nSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8Pyc7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgciArPSBub2RlLnRhcmdldDtcbiAgICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICAgIHIgKz0gJyAnICsgbm9kZS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gb3B0aW9ucy5zcGFjZUJlZm9yZVNsYXNoICsgJz8+JztcbiAgICAgIHIgKz0gdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcblxuICAgIFhNTFdyaXRlckJhc2UucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gbm9kZS52YWx1ZTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgIHIgKz0gdGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgdGhpcy5jbG9zZU5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfTtcblxuICAgIFhNTFdyaXRlckJhc2UucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICByICs9IG5vZGUudmFsdWU7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5kdGRBdHRMaXN0ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPCFBVFRMSVNUJztcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICByICs9ICcgJyArIG5vZGUuZWxlbWVudE5hbWUgKyAnICcgKyBub2RlLmF0dHJpYnV0ZU5hbWUgKyAnICcgKyBub2RlLmF0dHJpYnV0ZVR5cGU7XG4gICAgICBpZiAobm9kZS5kZWZhdWx0VmFsdWVUeXBlICE9PSAnI0RFRkFVTFQnKSB7XG4gICAgICAgIHIgKz0gJyAnICsgbm9kZS5kZWZhdWx0VmFsdWVUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIHIgKz0gJyBcIicgKyBub2RlLmRlZmF1bHRWYWx1ZSArICdcIic7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5kdGRFbGVtZW50ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHZhciByO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHIgPSB0aGlzLmluZGVudChub2RlLCBvcHRpb25zLCBsZXZlbCkgKyAnPCFFTEVNRU5UJztcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICByICs9ICcgJyArIG5vZGUubmFtZSArICcgJyArIG5vZGUudmFsdWU7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5kdGRFbnRpdHkgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgdmFyIHI7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgciA9IHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8IUVOVElUWSc7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgaWYgKG5vZGUucGUpIHtcbiAgICAgICAgciArPSAnICUnO1xuICAgICAgfVxuICAgICAgciArPSAnICcgKyBub2RlLm5hbWU7XG4gICAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgICByICs9ICcgXCInICsgbm9kZS52YWx1ZSArICdcIic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobm9kZS5wdWJJRCAmJiBub2RlLnN5c0lEKSB7XG4gICAgICAgICAgciArPSAnIFBVQkxJQyBcIicgKyBub2RlLnB1YklEICsgJ1wiIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUuc3lzSUQpIHtcbiAgICAgICAgICByICs9ICcgU1lTVEVNIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLm5EYXRhKSB7XG4gICAgICAgICAgciArPSAnIE5EQVRBICcgKyBub2RlLm5EYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICByICs9IG9wdGlvbnMuc3BhY2VCZWZvcmVTbGFzaCArICc+JyArIHRoaXMuZW5kbGluZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHRoaXMuY2xvc2VOb2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIHJldHVybiByO1xuICAgIH07XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5kdGROb3RhdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHRoaXMub3Blbk5vZGUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICByID0gdGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpICsgJzwhTk9UQVRJT04nO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgIHIgKz0gJyAnICsgbm9kZS5uYW1lO1xuICAgICAgaWYgKG5vZGUucHViSUQgJiYgbm9kZS5zeXNJRCkge1xuICAgICAgICByICs9ICcgUFVCTElDIFwiJyArIG5vZGUucHViSUQgKyAnXCIgXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUucHViSUQpIHtcbiAgICAgICAgciArPSAnIFBVQkxJQyBcIicgKyBub2RlLnB1YklEICsgJ1wiJztcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5zeXNJRCkge1xuICAgICAgICByICs9ICcgU1lTVEVNIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgciArPSBvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggKyAnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk5vbmU7XG4gICAgICB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG4gICAgWE1MV3JpdGVyQmFzZS5wcm90b3R5cGUub3Blbk5vZGUgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge307XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5jbG9zZU5vZGUgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge307XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5vcGVuQXR0cmlidXRlID0gZnVuY3Rpb24oYXR0LCBvcHRpb25zLCBsZXZlbCkge307XG5cbiAgICBYTUxXcml0ZXJCYXNlLnByb3RvdHlwZS5jbG9zZUF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dCwgb3B0aW9ucywgbGV2ZWwpIHt9O1xuXG4gICAgcmV0dXJuIFhNTFdyaXRlckJhc2U7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgWE1MU3RyaW5nV3JpdGVyLCBYTUxXcml0ZXJCYXNlLFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgWE1MV3JpdGVyQmFzZSA9IHJlcXVpcmUoJy4vWE1MV3JpdGVyQmFzZScpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gWE1MU3RyaW5nV3JpdGVyID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoWE1MU3RyaW5nV3JpdGVyLCBzdXBlckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIFhNTFN0cmluZ1dyaXRlcihvcHRpb25zKSB7XG4gICAgICBYTUxTdHJpbmdXcml0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgWE1MU3RyaW5nV3JpdGVyLnByb3RvdHlwZS5kb2N1bWVudCA9IGZ1bmN0aW9uKGRvYywgb3B0aW9ucykge1xuICAgICAgdmFyIGNoaWxkLCBpLCBsZW4sIHIsIHJlZjtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgICByID0gJyc7XG4gICAgICByZWYgPSBkb2MuY2hpbGRyZW47XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGQgPSByZWZbaV07XG4gICAgICAgIHIgKz0gdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgMCk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5wcmV0dHkgJiYgci5zbGljZSgtb3B0aW9ucy5uZXdsaW5lLmxlbmd0aCkgPT09IG9wdGlvbnMubmV3bGluZSkge1xuICAgICAgICByID0gci5zbGljZSgwLCAtb3B0aW9ucy5uZXdsaW5lLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTFN0cmluZ1dyaXRlcjtcblxuICB9KShYTUxXcml0ZXJCYXNlKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFhNTERPTUNvbmZpZ3VyYXRpb24sIFhNTERPTUltcGxlbWVudGF0aW9uLCBYTUxEb2N1bWVudCwgWE1MTm9kZSwgWE1MU3RyaW5nV3JpdGVyLCBYTUxTdHJpbmdpZmllciwgaXNQbGFpbk9iamVjdCxcbiAgICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL1V0aWxpdHknKS5pc1BsYWluT2JqZWN0O1xuXG4gIFhNTERPTUltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9YTUxET01JbXBsZW1lbnRhdGlvbicpO1xuXG4gIFhNTERPTUNvbmZpZ3VyYXRpb24gPSByZXF1aXJlKCcuL1hNTERPTUNvbmZpZ3VyYXRpb24nKTtcblxuICBYTUxOb2RlID0gcmVxdWlyZSgnLi9YTUxOb2RlJyk7XG5cbiAgTm9kZVR5cGUgPSByZXF1aXJlKCcuL05vZGVUeXBlJyk7XG5cbiAgWE1MU3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL1hNTFN0cmluZ2lmaWVyJyk7XG5cbiAgWE1MU3RyaW5nV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJpbmdXcml0ZXInKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERvY3VtZW50ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgICBleHRlbmQoWE1MRG9jdW1lbnQsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gWE1MRG9jdW1lbnQob3B0aW9ucykge1xuICAgICAgWE1MRG9jdW1lbnQuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbnVsbCk7XG4gICAgICB0aGlzLm5hbWUgPSBcIiNkb2N1bWVudFwiO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuRG9jdW1lbnQ7XG4gICAgICB0aGlzLmRvY3VtZW50VVJJID0gbnVsbDtcbiAgICAgIHRoaXMuZG9tQ29uZmlnID0gbmV3IFhNTERPTUNvbmZpZ3VyYXRpb24oKTtcbiAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgICBpZiAoIW9wdGlvbnMud3JpdGVyKSB7XG4gICAgICAgIG9wdGlvbnMud3JpdGVyID0gbmV3IFhNTFN0cmluZ1dyaXRlcigpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuc3RyaW5naWZ5ID0gbmV3IFhNTFN0cmluZ2lmaWVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2N1bWVudC5wcm90b3R5cGUsICdpbXBsZW1lbnRhdGlvbicsIHtcbiAgICAgIHZhbHVlOiBuZXcgWE1MRE9NSW1wbGVtZW50YXRpb24oKVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ2RvY3R5cGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hpbGQsIGksIGxlbiwgcmVmO1xuICAgICAgICByZWYgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2N1bWVudC5wcm90b3R5cGUsICdkb2N1bWVudEVsZW1lbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb290T2JqZWN0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAnaW5wdXRFbmNvZGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ3N0cmljdEVycm9yQ2hlY2tpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sRW5jb2RpbmcnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggIT09IDAgJiYgdGhpcy5jaGlsZHJlblswXS50eXBlID09PSBOb2RlVHlwZS5EZWNsYXJhdGlvbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuWzBdLmVuY29kaW5nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sU3RhbmRhbG9uZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmNoaWxkcmVuWzBdLnR5cGUgPT09IE5vZGVUeXBlLkRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF0uc3RhbmRhbG9uZSA9PT0gJ3llcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWE1MRG9jdW1lbnQucHJvdG90eXBlLCAneG1sVmVyc2lvbicsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCAmJiB0aGlzLmNoaWxkcmVuWzBdLnR5cGUgPT09IE5vZGVUeXBlLkRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5bMF0udmVyc2lvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gXCIxLjBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ1VSTCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50VVJJO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ29yaWdpbicsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTERvY3VtZW50LnByb3RvdHlwZSwgJ2NvbXBhdE1vZGUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2N1bWVudC5wcm90b3R5cGUsICdjaGFyYWN0ZXJTZXQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxEb2N1bWVudC5wcm90b3R5cGUsICdjb250ZW50VHlwZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKHdyaXRlcikge1xuICAgICAgdmFyIHdyaXRlck9wdGlvbnM7XG4gICAgICB3cml0ZXJPcHRpb25zID0ge307XG4gICAgICBpZiAoIXdyaXRlcikge1xuICAgICAgICB3cml0ZXIgPSB0aGlzLm9wdGlvbnMud3JpdGVyO1xuICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHdyaXRlcikpIHtcbiAgICAgICAgd3JpdGVyT3B0aW9ucyA9IHdyaXRlcjtcbiAgICAgICAgd3JpdGVyID0gdGhpcy5vcHRpb25zLndyaXRlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3cml0ZXIuZG9jdW1lbnQodGhpcywgd3JpdGVyLmZpbHRlck9wdGlvbnMod3JpdGVyT3B0aW9ucykpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLndyaXRlci5kb2N1bWVudCh0aGlzLCB0aGlzLm9wdGlvbnMud3JpdGVyLmZpbHRlck9wdGlvbnMob3B0aW9ucykpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHRhZ05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZVRleHROb2RlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUNEQVRBU2VjdGlvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKHRhcmdldCwgZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRW50aXR5UmVmZXJlbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBmdW5jdGlvbih0YWduYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5pbXBvcnROb2RlID0gZnVuY3Rpb24oaW1wb3J0ZWROb2RlLCBkZWVwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50TlMgPSBmdW5jdGlvbihuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUF0dHJpYnV0ZU5TID0gZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5VGFnTmFtZU5TID0gZnVuY3Rpb24obmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkID0gZnVuY3Rpb24oZWxlbWVudElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5hZG9wdE5vZGUgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLm5vcm1hbGl6ZURvY3VtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5yZW5hbWVOb2RlID0gZnVuY3Rpb24obm9kZSwgbmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIERPTSBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkLlwiICsgdGhpcy5kZWJ1Z0luZm8oKSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50LnByb3RvdHlwZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRXZlbnQgPSBmdW5jdGlvbihldmVudEludGVyZmFjZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlUmFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgRE9NIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQuXCIgKyB0aGlzLmRlYnVnSW5mbygpKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZU5vZGVJdGVyYXRvciA9IGZ1bmN0aW9uKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlVHJlZVdhbGtlciA9IGZ1bmN0aW9uKHJvb3QsIHdoYXRUb1Nob3csIGZpbHRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBET00gbWV0aG9kIGlzIG5vdCBpbXBsZW1lbnRlZC5cIiArIHRoaXMuZGVidWdJbmZvKCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MRG9jdW1lbnQ7XG5cbiAgfSkoWE1MTm9kZSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCAiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjEyLjdcbihmdW5jdGlvbigpIHtcbiAgdmFyIE5vZGVUeXBlLCBXcml0ZXJTdGF0ZSwgWE1MQXR0cmlidXRlLCBYTUxDRGF0YSwgWE1MQ29tbWVudCwgWE1MRFREQXR0TGlzdCwgWE1MRFRERWxlbWVudCwgWE1MRFRERW50aXR5LCBYTUxEVEROb3RhdGlvbiwgWE1MRGVjbGFyYXRpb24sIFhNTERvY1R5cGUsIFhNTERvY3VtZW50LCBYTUxEb2N1bWVudENCLCBYTUxFbGVtZW50LCBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIFhNTFJhdywgWE1MU3RyaW5nV3JpdGVyLCBYTUxTdHJpbmdpZmllciwgWE1MVGV4dCwgZ2V0VmFsdWUsIGlzRnVuY3Rpb24sIGlzT2JqZWN0LCBpc1BsYWluT2JqZWN0LCByZWYsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIHJlZiA9IHJlcXVpcmUoJy4vVXRpbGl0eScpLCBpc09iamVjdCA9IHJlZi5pc09iamVjdCwgaXNGdW5jdGlvbiA9IHJlZi5pc0Z1bmN0aW9uLCBpc1BsYWluT2JqZWN0ID0gcmVmLmlzUGxhaW5PYmplY3QsIGdldFZhbHVlID0gcmVmLmdldFZhbHVlO1xuXG4gIE5vZGVUeXBlID0gcmVxdWlyZSgnLi9Ob2RlVHlwZScpO1xuXG4gIFhNTERvY3VtZW50ID0gcmVxdWlyZSgnLi9YTUxEb2N1bWVudCcpO1xuXG4gIFhNTEVsZW1lbnQgPSByZXF1aXJlKCcuL1hNTEVsZW1lbnQnKTtcblxuICBYTUxDRGF0YSA9IHJlcXVpcmUoJy4vWE1MQ0RhdGEnKTtcblxuICBYTUxDb21tZW50ID0gcmVxdWlyZSgnLi9YTUxDb21tZW50Jyk7XG5cbiAgWE1MUmF3ID0gcmVxdWlyZSgnLi9YTUxSYXcnKTtcblxuICBYTUxUZXh0ID0gcmVxdWlyZSgnLi9YTUxUZXh0Jyk7XG5cbiAgWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gcmVxdWlyZSgnLi9YTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nKTtcblxuICBYTUxEZWNsYXJhdGlvbiA9IHJlcXVpcmUoJy4vWE1MRGVjbGFyYXRpb24nKTtcblxuICBYTUxEb2NUeXBlID0gcmVxdWlyZSgnLi9YTUxEb2NUeXBlJyk7XG5cbiAgWE1MRFREQXR0TGlzdCA9IHJlcXVpcmUoJy4vWE1MRFREQXR0TGlzdCcpO1xuXG4gIFhNTERUREVudGl0eSA9IHJlcXVpcmUoJy4vWE1MRFRERW50aXR5Jyk7XG5cbiAgWE1MRFRERWxlbWVudCA9IHJlcXVpcmUoJy4vWE1MRFRERWxlbWVudCcpO1xuXG4gIFhNTERURE5vdGF0aW9uID0gcmVxdWlyZSgnLi9YTUxEVEROb3RhdGlvbicpO1xuXG4gIFhNTEF0dHJpYnV0ZSA9IHJlcXVpcmUoJy4vWE1MQXR0cmlidXRlJyk7XG5cbiAgWE1MU3RyaW5naWZpZXIgPSByZXF1aXJlKCcuL1hNTFN0cmluZ2lmaWVyJyk7XG5cbiAgWE1MU3RyaW5nV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJpbmdXcml0ZXInKTtcblxuICBXcml0ZXJTdGF0ZSA9IHJlcXVpcmUoJy4vV3JpdGVyU3RhdGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFhNTERvY3VtZW50Q0IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gWE1MRG9jdW1lbnRDQihvcHRpb25zLCBvbkRhdGEsIG9uRW5kKSB7XG4gICAgICB2YXIgd3JpdGVyT3B0aW9ucztcbiAgICAgIHRoaXMubmFtZSA9IFwiP3htbFwiO1xuICAgICAgdGhpcy50eXBlID0gTm9kZVR5cGUuRG9jdW1lbnQ7XG4gICAgICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICAgICAgd3JpdGVyT3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKCFvcHRpb25zLndyaXRlcikge1xuICAgICAgICBvcHRpb25zLndyaXRlciA9IG5ldyBYTUxTdHJpbmdXcml0ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChvcHRpb25zLndyaXRlcikpIHtcbiAgICAgICAgd3JpdGVyT3B0aW9ucyA9IG9wdGlvbnMud3JpdGVyO1xuICAgICAgICBvcHRpb25zLndyaXRlciA9IG5ldyBYTUxTdHJpbmdXcml0ZXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLndyaXRlciA9IG9wdGlvbnMud3JpdGVyO1xuICAgICAgdGhpcy53cml0ZXJPcHRpb25zID0gdGhpcy53cml0ZXIuZmlsdGVyT3B0aW9ucyh3cml0ZXJPcHRpb25zKTtcbiAgICAgIHRoaXMuc3RyaW5naWZ5ID0gbmV3IFhNTFN0cmluZ2lmaWVyKG9wdGlvbnMpO1xuICAgICAgdGhpcy5vbkRhdGFDYWxsYmFjayA9IG9uRGF0YSB8fCBmdW5jdGlvbigpIHt9O1xuICAgICAgdGhpcy5vbkVuZENhbGxiYWNrID0gb25FbmQgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBudWxsO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAtMTtcbiAgICAgIHRoaXMub3BlblRhZ3MgPSB7fTtcbiAgICAgIHRoaXMuZG9jdW1lbnRTdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmRvY3VtZW50Q29tcGxldGVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIH1cblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmNyZWF0ZUNoaWxkTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBhdHQsIGF0dE5hbWUsIGF0dHJpYnV0ZXMsIGNoaWxkLCBpLCBsZW4sIHJlZjEsIHJlZjI7XG4gICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkNEYXRhOlxuICAgICAgICAgIHRoaXMuY2RhdGEobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgICAgICB0aGlzLmNvbW1lbnQobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRWxlbWVudDpcbiAgICAgICAgICBhdHRyaWJ1dGVzID0ge307XG4gICAgICAgICAgcmVmMSA9IG5vZGUuYXR0cmlicztcbiAgICAgICAgICBmb3IgKGF0dE5hbWUgaW4gcmVmMSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmMSwgYXR0TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXR0ID0gcmVmMVthdHROYW1lXTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbYXR0TmFtZV0gPSBhdHQudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubm9kZShub2RlLm5hbWUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkR1bW15OlxuICAgICAgICAgIHRoaXMuZHVtbXkoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5SYXc6XG4gICAgICAgICAgdGhpcy5yYXcobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuVGV4dDpcbiAgICAgICAgICB0aGlzLnRleHQobm9kZS52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuUHJvY2Vzc2luZ0luc3RydWN0aW9uOlxuICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24obm9kZS50YXJnZXQsIG5vZGUudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgWE1MIG5vZGUgdHlwZSBpcyBub3Qgc3VwcG9ydGVkIGluIGEgSlMgb2JqZWN0OiBcIiArIG5vZGUuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICB9XG4gICAgICByZWYyID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZjIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGQgPSByZWYyW2ldO1xuICAgICAgICB0aGlzLmNyZWF0ZUNoaWxkTm9kZShjaGlsZCk7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy51cCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZHVtbXkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5ub2RlID0gZnVuY3Rpb24obmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgdmFyIHJlZjE7XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3Npbmcgbm9kZSBuYW1lLlwiKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5jdXJyZW50TGV2ZWwgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRvY3VtZW50IGNhbiBvbmx5IGhhdmUgb25lIHJvb3Qgbm9kZS4gXCIgKyB0aGlzLmRlYnVnSW5mbyhuYW1lKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBuYW1lID0gZ2V0VmFsdWUobmFtZSk7XG4gICAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSB7XG4gICAgICAgIGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGF0dHJpYnV0ZXMgPSBnZXRWYWx1ZShhdHRyaWJ1dGVzKTtcbiAgICAgIGlmICghaXNPYmplY3QoYXR0cmlidXRlcykpIHtcbiAgICAgICAgcmVmMSA9IFthdHRyaWJ1dGVzLCB0ZXh0XSwgdGV4dCA9IHJlZjFbMF0sIGF0dHJpYnV0ZXMgPSByZWYxWzFdO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IG5ldyBYTUxFbGVtZW50KHRoaXMsIG5hbWUsIGF0dHJpYnV0ZXMpO1xuICAgICAgdGhpcy5jdXJyZW50Tm9kZS5jaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwrKztcbiAgICAgIHRoaXMub3BlblRhZ3NbdGhpcy5jdXJyZW50TGV2ZWxdID0gdGhpcy5jdXJyZW50Tm9kZTtcbiAgICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50ZXh0KHRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmVsZW1lbnQgPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICB2YXIgY2hpbGQsIGksIGxlbiwgb2xkVmFsaWRhdGlvbkZsYWcsIHJlZjEsIHJvb3Q7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSAmJiB0aGlzLmN1cnJlbnROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkRvY1R5cGUpIHtcbiAgICAgICAgdGhpcy5kdGRFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSB8fCBpc09iamVjdChuYW1lKSB8fCBpc0Z1bmN0aW9uKG5hbWUpKSB7XG4gICAgICAgICAgb2xkVmFsaWRhdGlvbkZsYWcgPSB0aGlzLm9wdGlvbnMubm9WYWxpZGF0aW9uO1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5ub1ZhbGlkYXRpb24gPSB0cnVlO1xuICAgICAgICAgIHJvb3QgPSBuZXcgWE1MRG9jdW1lbnQodGhpcy5vcHRpb25zKS5lbGVtZW50KCdURU1QX1JPT1QnKTtcbiAgICAgICAgICByb290LmVsZW1lbnQobmFtZSk7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm5vVmFsaWRhdGlvbiA9IG9sZFZhbGlkYXRpb25GbGFnO1xuICAgICAgICAgIHJlZjEgPSByb290LmNoaWxkcmVuO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gcmVmMVtpXTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hpbGROb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMudXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ub2RlKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuYXR0cmlidXRlID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBhdHROYW1lLCBhdHRWYWx1ZTtcbiAgICAgIGlmICghdGhpcy5jdXJyZW50Tm9kZSB8fCB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dCgpIGNhbiBvbmx5IGJlIHVzZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYW4gZWxlKCkgY2FsbCBpbiBjYWxsYmFjayBtb2RlLiBcIiArIHRoaXMuZGVidWdJbmZvKG5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgbmFtZSA9IGdldFZhbHVlKG5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgIGZvciAoYXR0TmFtZSBpbiBuYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwobmFtZSwgYXR0TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgIGF0dFZhbHVlID0gbmFtZVthdHROYW1lXTtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZShhdHROYW1lLCBhdHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmtlZXBOdWxsQXR0cmlidXRlcyAmJiAodmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmF0dHJpYnNbbmFtZV0gPSBuZXcgWE1MQXR0cmlidXRlKHRoaXMsIG5hbWUsIFwiXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmF0dHJpYnNbbmFtZV0gPSBuZXcgWE1MQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTFRleHQodGhpcywgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIudGV4dChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuY2RhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTENEYXRhKHRoaXMsIHZhbHVlKTtcbiAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLmNkYXRhKG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKSwgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5jb21tZW50ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxDb21tZW50KHRoaXMsIHZhbHVlKTtcbiAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLmNvbW1lbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLnJhdyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YXIgbm9kZTtcbiAgICAgIHRoaXMub3BlbkN1cnJlbnQoKTtcbiAgICAgIG5vZGUgPSBuZXcgWE1MUmF3KHRoaXMsIHZhbHVlKTtcbiAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLnJhdyhub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuaW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICB2YXIgaSwgaW5zVGFyZ2V0LCBpbnNWYWx1ZSwgbGVuLCBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgIHRhcmdldCA9IGdldFZhbHVlKHRhcmdldCk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICB2YWx1ZSA9IGdldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gdGFyZ2V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaW5zVGFyZ2V0ID0gdGFyZ2V0W2ldO1xuICAgICAgICAgIHRoaXMuaW5zdHJ1Y3Rpb24oaW5zVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAoaW5zVGFyZ2V0IGluIHRhcmdldCkge1xuICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHRhcmdldCwgaW5zVGFyZ2V0KSkgY29udGludWU7XG4gICAgICAgICAgaW5zVmFsdWUgPSB0YXJnZXRbaW5zVGFyZ2V0XTtcbiAgICAgICAgICB0aGlzLmluc3RydWN0aW9uKGluc1RhcmdldCwgaW5zVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmFwcGx5KCk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5ldyBYTUxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGhpcywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMub25EYXRhKHRoaXMud3JpdGVyLnByb2Nlc3NpbmdJbnN0cnVjdGlvbihub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsICsgMSksIHRoaXMuY3VycmVudExldmVsICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZGVjbGFyYXRpb24gPSBmdW5jdGlvbih2ZXJzaW9uLCBlbmNvZGluZywgc3RhbmRhbG9uZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudFN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGVjbGFyYXRpb24oKSBtdXN0IGJlIHRoZSBmaXJzdCBub2RlLlwiKTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBuZXcgWE1MRGVjbGFyYXRpb24odGhpcywgdmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZGVjbGFyYXRpb24obm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmRvY3R5cGUgPSBmdW5jdGlvbihyb290LCBwdWJJRCwgc3lzSUQpIHtcbiAgICAgIHRoaXMub3BlbkN1cnJlbnQoKTtcbiAgICAgIGlmIChyb290ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByb290IG5vZGUgbmFtZS5cIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImR0ZCgpIG11c3QgY29tZSBiZWZvcmUgdGhlIHJvb3Qgbm9kZS5cIik7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnROb2RlID0gbmV3IFhNTERvY1R5cGUodGhpcywgcHViSUQsIHN5c0lEKTtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUucm9vdE5vZGVOYW1lID0gcm9vdDtcbiAgICAgIHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudExldmVsKys7XG4gICAgICB0aGlzLm9wZW5UYWdzW3RoaXMuY3VycmVudExldmVsXSA9IHRoaXMuY3VycmVudE5vZGU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZHRkRWxlbWVudCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICB2YXIgbm9kZTtcbiAgICAgIHRoaXMub3BlbkN1cnJlbnQoKTtcbiAgICAgIG5vZGUgPSBuZXcgWE1MRFRERWxlbWVudCh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5kdGRFbGVtZW50KG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKSwgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5hdHRMaXN0ID0gZnVuY3Rpb24oZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTERUREF0dExpc3QodGhpcywgZWxlbWVudE5hbWUsIGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVR5cGUsIGRlZmF1bHRWYWx1ZVR5cGUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB0aGlzLm9uRGF0YSh0aGlzLndyaXRlci5kdGRBdHRMaXN0KG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKSwgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5lbnRpdHkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIG5vZGU7XG4gICAgICB0aGlzLm9wZW5DdXJyZW50KCk7XG4gICAgICBub2RlID0gbmV3IFhNTERUREVudGl0eSh0aGlzLCBmYWxzZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZHRkRW50aXR5KG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKSwgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5wRW50aXR5ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHZhciBub2RlO1xuICAgICAgdGhpcy5vcGVuQ3VycmVudCgpO1xuICAgICAgbm9kZSA9IG5ldyBYTUxEVERFbnRpdHkodGhpcywgdHJ1ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZHRkRW50aXR5KG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKSwgdGhpcy5jdXJyZW50TGV2ZWwgKyAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5ub3RhdGlvbiA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICB2YXIgbm9kZTtcbiAgICAgIHRoaXMub3BlbkN1cnJlbnQoKTtcbiAgICAgIG5vZGUgPSBuZXcgWE1MRFRETm90YXRpb24odGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgdGhpcy5vbkRhdGEodGhpcy53cml0ZXIuZHRkTm90YXRpb24obm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpLCB0aGlzLmN1cnJlbnRMZXZlbCArIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TGV2ZWwgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBkb2N1bWVudCBub2RlIGhhcyBubyBwYXJlbnQuXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTm9kZSh0aGlzLmN1cnJlbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW5Ob2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZU5vZGUodGhpcy5vcGVuVGFnc1t0aGlzLmN1cnJlbnRMZXZlbF0pO1xuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMub3BlblRhZ3NbdGhpcy5jdXJyZW50TGV2ZWxdO1xuICAgICAgdGhpcy5jdXJyZW50TGV2ZWwtLTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdoaWxlICh0aGlzLmN1cnJlbnRMZXZlbCA+PSAwKSB7XG4gICAgICAgIHRoaXMudXAoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKCk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLm9wZW5DdXJyZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMub3Blbk5vZGUodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLm9wZW5Ob2RlID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIGF0dCwgY2h1bmssIG5hbWUsIHJlZjE7XG4gICAgICBpZiAoIW5vZGUuaXNPcGVuKSB7XG4gICAgICAgIGlmICghdGhpcy5yb290ICYmIHRoaXMuY3VycmVudExldmVsID09PSAwICYmIG5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgY2h1bmsgPSAnJztcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLk9wZW5UYWc7XG4gICAgICAgICAgY2h1bmsgPSB0aGlzLndyaXRlci5pbmRlbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCkgKyAnPCcgKyBub2RlLm5hbWU7XG4gICAgICAgICAgcmVmMSA9IG5vZGUuYXR0cmlicztcbiAgICAgICAgICBmb3IgKG5hbWUgaW4gcmVmMSkge1xuICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmMSwgbmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXR0ID0gcmVmMVtuYW1lXTtcbiAgICAgICAgICAgIGNodW5rICs9IHRoaXMud3JpdGVyLmF0dHJpYnV0ZShhdHQsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaHVuayArPSAobm9kZS5jaGlsZHJlbiA/ICc+JyA6ICcvPicpICsgdGhpcy53cml0ZXIuZW5kbGluZShub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgICB0aGlzLndyaXRlck9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53cml0ZXJPcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgICAgICBjaHVuayA9IHRoaXMud3JpdGVyLmluZGVudChub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKSArICc8IURPQ1RZUEUgJyArIG5vZGUucm9vdE5vZGVOYW1lO1xuICAgICAgICAgIGlmIChub2RlLnB1YklEICYmIG5vZGUuc3lzSUQpIHtcbiAgICAgICAgICAgIGNodW5rICs9ICcgUFVCTElDIFwiJyArIG5vZGUucHViSUQgKyAnXCIgXCInICsgbm9kZS5zeXNJRCArICdcIic7XG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLnN5c0lEKSB7XG4gICAgICAgICAgICBjaHVuayArPSAnIFNZU1RFTSBcIicgKyBub2RlLnN5c0lEICsgJ1wiJztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNodW5rICs9ICcgWyc7XG4gICAgICAgICAgICB0aGlzLndyaXRlck9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5JbnNpZGVUYWc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMud3JpdGVyT3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICAgICAgY2h1bmsgKz0gJz4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaHVuayArPSB0aGlzLndyaXRlci5lbmRsaW5lKG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EYXRhKGNodW5rLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIHJldHVybiBub2RlLmlzT3BlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmNsb3NlTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBjaHVuaztcbiAgICAgIGlmICghbm9kZS5pc0Nsb3NlZCkge1xuICAgICAgICBjaHVuayA9ICcnO1xuICAgICAgICB0aGlzLndyaXRlck9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkge1xuICAgICAgICAgIGNodW5rID0gdGhpcy53cml0ZXIuaW5kZW50KG5vZGUsIHRoaXMud3JpdGVyT3B0aW9ucywgdGhpcy5jdXJyZW50TGV2ZWwpICsgJzwvJyArIG5vZGUubmFtZSArICc+JyArIHRoaXMud3JpdGVyLmVuZGxpbmUobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2h1bmsgPSB0aGlzLndyaXRlci5pbmRlbnQobm9kZSwgdGhpcy53cml0ZXJPcHRpb25zLCB0aGlzLmN1cnJlbnRMZXZlbCkgKyAnXT4nICsgdGhpcy53cml0ZXIuZW5kbGluZShub2RlLCB0aGlzLndyaXRlck9wdGlvbnMsIHRoaXMuY3VycmVudExldmVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlck9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5Ob25lO1xuICAgICAgICB0aGlzLm9uRGF0YShjaHVuaywgdGhpcy5jdXJyZW50TGV2ZWwpO1xuICAgICAgICByZXR1cm4gbm9kZS5pc0Nsb3NlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uKGNodW5rLCBsZXZlbCkge1xuICAgICAgdGhpcy5kb2N1bWVudFN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMub25EYXRhQ2FsbGJhY2soY2h1bmssIGxldmVsICsgMSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvY3VtZW50Q29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kQ2FsbGJhY2soKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZGVidWdJbmZvID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgaWYgKG5hbWUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIm5vZGU6IDxcIiArIG5hbWUgKyBcIj5cIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLm5vZCA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGUobmFtZSwgYXR0cmlidXRlcywgdGV4dCk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLnR4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZGF0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNkYXRhKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuY29tID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbW1lbnQodmFsdWUpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5pbnMgPSBmdW5jdGlvbih0YXJnZXQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0cnVjdGlvbih0YXJnZXQsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZGVjID0gZnVuY3Rpb24odmVyc2lvbiwgZW5jb2RpbmcsIHN0YW5kYWxvbmUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9uKHZlcnNpb24sIGVuY29kaW5nLCBzdGFuZGFsb25lKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZHRkID0gZnVuY3Rpb24ocm9vdCwgcHViSUQsIHN5c0lEKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb2N0eXBlKHJvb3QsIHB1YklELCBzeXNJRCk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmUgPSBmdW5jdGlvbihuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50KG5hbWUsIGF0dHJpYnV0ZXMsIHRleHQpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5uID0gZnVuY3Rpb24obmFtZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZShuYW1lLCBhdHRyaWJ1dGVzLCB0ZXh0KTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUudCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jZGF0YSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLmMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tbWVudCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIFhNTERvY3VtZW50Q0IucHJvdG90eXBlLnIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmF3KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuaSA9IGZ1bmN0aW9uKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9uKHRhcmdldCwgdmFsdWUpO1xuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5hdHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnROb2RlICYmIHRoaXMuY3VycmVudE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRG9jVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRMaXN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUuYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE5vZGUgJiYgdGhpcy5jdXJyZW50Tm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2NUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dExpc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBYTUxEb2N1bWVudENCLnByb3RvdHlwZS5lbnQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZW50aXR5KG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUucGVudCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wRW50aXR5KG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgWE1MRG9jdW1lbnRDQi5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdGF0aW9uKG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFhNTERvY3VtZW50Q0I7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgTm9kZVR5cGUsIFdyaXRlclN0YXRlLCBYTUxTdHJlYW1Xcml0ZXIsIFhNTFdyaXRlckJhc2UsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBYTUxXcml0ZXJCYXNlID0gcmVxdWlyZSgnLi9YTUxXcml0ZXJCYXNlJyk7XG5cbiAgV3JpdGVyU3RhdGUgPSByZXF1aXJlKCcuL1dyaXRlclN0YXRlJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBYTUxTdHJlYW1Xcml0ZXIgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChYTUxTdHJlYW1Xcml0ZXIsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gWE1MU3RyZWFtV3JpdGVyKHN0cmVhbSwgb3B0aW9ucykge1xuICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICBYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgWE1MU3RyZWFtV3JpdGVyLnByb3RvdHlwZS5lbmRsaW5lID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIGlmIChub2RlLmlzTGFzdFJvb3ROb2RlICYmIG9wdGlvbnMuc3RhdGUgPT09IFdyaXRlclN0YXRlLkNsb3NlVGFnKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLmVuZGxpbmUuY2FsbCh0aGlzLCBub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuZG9jdW1lbnQgPSBmdW5jdGlvbihkb2MsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBjaGlsZCwgaSwgaiwgaywgbGVuLCBsZW4xLCByZWYsIHJlZjEsIHJlc3VsdHM7XG4gICAgICByZWYgPSBkb2MuY2hpbGRyZW47XG4gICAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgICBjaGlsZCA9IHJlZltpXTtcbiAgICAgICAgY2hpbGQuaXNMYXN0Um9vdE5vZGUgPSBpID09PSBkb2MuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbnMob3B0aW9ucyk7XG4gICAgICByZWYxID0gZG9jLmNoaWxkcmVuO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBrIDwgbGVuMTsgaysrKSB7XG4gICAgICAgIGNoaWxkID0gcmVmMVtrXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMud3JpdGVDaGlsZE5vZGUoY2hpbGQsIG9wdGlvbnMsIDApKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG5cbiAgICBYTUxTdHJlYW1Xcml0ZXIucHJvdG90eXBlLmF0dHJpYnV0ZSA9IGZ1bmN0aW9uKGF0dCwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLmF0dHJpYnV0ZS5jYWxsKHRoaXMsIGF0dCwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyZWFtV3JpdGVyLnByb3RvdHlwZS5jZGF0YSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoWE1MU3RyZWFtV3JpdGVyLl9fc3VwZXJfXy5jZGF0YS5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuY29tbWVudCA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoWE1MU3RyZWFtV3JpdGVyLl9fc3VwZXJfXy5jb21tZW50LmNhbGwodGhpcywgbm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyZWFtV3JpdGVyLnByb3RvdHlwZS5kZWNsYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoWE1MU3RyZWFtV3JpdGVyLl9fc3VwZXJfXy5kZWNsYXJhdGlvbi5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuZG9jVHlwZSA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgY2hpbGQsIGosIGxlbiwgcmVmO1xuICAgICAgbGV2ZWwgfHwgKGxldmVsID0gMCk7XG4gICAgICB0aGlzLm9wZW5Ob2RlKG5vZGUsIG9wdGlvbnMsIGxldmVsKTtcbiAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5PcGVuVGFnO1xuICAgICAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy5pbmRlbnQobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCc8IURPQ1RZUEUgJyArIG5vZGUucm9vdCgpLm5hbWUpO1xuICAgICAgaWYgKG5vZGUucHViSUQgJiYgbm9kZS5zeXNJRCkge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnIFBVQkxJQyBcIicgKyBub2RlLnB1YklEICsgJ1wiIFwiJyArIG5vZGUuc3lzSUQgKyAnXCInKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5zeXNJRCkge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnIFNZU1RFTSBcIicgKyBub2RlLnN5c0lEICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCcgWycpO1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSh0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgICAgcmVmID0gbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgY2hpbGQgPSByZWZbal07XG4gICAgICAgICAgdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCddJyk7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICB0aGlzLnN0cmVhbS53cml0ZShvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggKyAnPicpO1xuICAgICAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHJldHVybiB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuZWxlbWVudCA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICB2YXIgYXR0LCBjaGlsZCwgY2hpbGROb2RlQ291bnQsIGZpcnN0Q2hpbGROb2RlLCBqLCBsZW4sIG5hbWUsIHByZXR0eVN1cHByZXNzZWQsIHJlZiwgcmVmMTtcbiAgICAgIGxldmVsIHx8IChsZXZlbCA9IDApO1xuICAgICAgdGhpcy5vcGVuTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuT3BlblRhZztcbiAgICAgIHRoaXMuc3RyZWFtLndyaXRlKHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8JyArIG5vZGUubmFtZSk7XG4gICAgICByZWYgPSBub2RlLmF0dHJpYnM7XG4gICAgICBmb3IgKG5hbWUgaW4gcmVmKSB7XG4gICAgICAgIGlmICghaGFzUHJvcC5jYWxsKHJlZiwgbmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICBhdHQgPSByZWZbbmFtZV07XG4gICAgICAgIHRoaXMuYXR0cmlidXRlKGF0dCwgb3B0aW9ucywgbGV2ZWwpO1xuICAgICAgfVxuICAgICAgY2hpbGROb2RlQ291bnQgPSBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGZpcnN0Q2hpbGROb2RlID0gY2hpbGROb2RlQ291bnQgPT09IDAgPyBudWxsIDogbm9kZS5jaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZE5vZGVDb3VudCA9PT0gMCB8fCBub2RlLmNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIChlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgfHwgZS50eXBlID09PSBOb2RlVHlwZS5SYXcpICYmIGUudmFsdWUgPT09ICcnO1xuICAgICAgfSkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dFbXB0eSkge1xuICAgICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCc+Jyk7XG4gICAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkNsb3NlVGFnO1xuICAgICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCc8LycgKyBub2RlLm5hbWUgKyAnPicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgICB0aGlzLnN0cmVhbS53cml0ZShvcHRpb25zLnNwYWNlQmVmb3JlU2xhc2ggKyAnLz4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnByZXR0eSAmJiBjaGlsZE5vZGVDb3VudCA9PT0gMSAmJiAoZmlyc3RDaGlsZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuVGV4dCB8fCBmaXJzdENoaWxkTm9kZS50eXBlID09PSBOb2RlVHlwZS5SYXcpICYmIChmaXJzdENoaWxkTm9kZS52YWx1ZSAhPSBudWxsKSkge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnPicpO1xuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuSW5zaWRlVGFnO1xuICAgICAgICBvcHRpb25zLnN1cHByZXNzUHJldHR5Q291bnQrKztcbiAgICAgICAgcHJldHR5U3VwcHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMud3JpdGVDaGlsZE5vZGUoZmlyc3RDaGlsZE5vZGUsIG9wdGlvbnMsIGxldmVsICsgMSk7XG4gICAgICAgIG9wdGlvbnMuc3VwcHJlc3NQcmV0dHlDb3VudC0tO1xuICAgICAgICBwcmV0dHlTdXBwcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbnMuc3RhdGUgPSBXcml0ZXJTdGF0ZS5DbG9zZVRhZztcbiAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoJzwvJyArIG5vZGUubmFtZSArICc+Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnPicgKyB0aGlzLmVuZGxpbmUobm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICAgICAgb3B0aW9ucy5zdGF0ZSA9IFdyaXRlclN0YXRlLkluc2lkZVRhZztcbiAgICAgICAgcmVmMSA9IG5vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBjaGlsZCA9IHJlZjFbal07XG4gICAgICAgICAgdGhpcy53cml0ZUNoaWxkTm9kZShjaGlsZCwgb3B0aW9ucywgbGV2ZWwgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuQ2xvc2VUYWc7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKHRoaXMuaW5kZW50KG5vZGUsIG9wdGlvbnMsIGxldmVsKSArICc8LycgKyBub2RlLm5hbWUgKyAnPicpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy5lbmRsaW5lKG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgICBvcHRpb25zLnN0YXRlID0gV3JpdGVyU3RhdGUuTm9uZTtcbiAgICAgIHJldHVybiB0aGlzLmNsb3NlTm9kZShub2RlLCBvcHRpb25zLCBsZXZlbCk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUucHJvY2Vzc2luZ0luc3RydWN0aW9uID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLnByb2Nlc3NpbmdJbnN0cnVjdGlvbi5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUucmF3ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLnJhdy5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMsIGxldmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUoWE1MU3RyZWFtV3JpdGVyLl9fc3VwZXJfXy50ZXh0LmNhbGwodGhpcywgbm9kZSwgb3B0aW9ucywgbGV2ZWwpKTtcbiAgICB9O1xuXG4gICAgWE1MU3RyZWFtV3JpdGVyLnByb3RvdHlwZS5kdGRBdHRMaXN0ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLmR0ZEF0dExpc3QuY2FsbCh0aGlzLCBub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH07XG5cbiAgICBYTUxTdHJlYW1Xcml0ZXIucHJvdG90eXBlLmR0ZEVsZW1lbnQgPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKFhNTFN0cmVhbVdyaXRlci5fX3N1cGVyX18uZHRkRWxlbWVudC5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuZHRkRW50aXR5ID0gZnVuY3Rpb24obm9kZSwgb3B0aW9ucywgbGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmVhbS53cml0ZShYTUxTdHJlYW1Xcml0ZXIuX19zdXBlcl9fLmR0ZEVudGl0eS5jYWxsKHRoaXMsIG5vZGUsIG9wdGlvbnMsIGxldmVsKSk7XG4gICAgfTtcblxuICAgIFhNTFN0cmVhbVdyaXRlci5wcm90b3R5cGUuZHRkTm90YXRpb24gPSBmdW5jdGlvbihub2RlLCBvcHRpb25zLCBsZXZlbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKFhNTFN0cmVhbVdyaXRlci5fX3N1cGVyX18uZHRkTm90YXRpb24uY2FsbCh0aGlzLCBub2RlLCBvcHRpb25zLCBsZXZlbCkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gWE1MU3RyZWFtV3JpdGVyO1xuXG4gIH0pKFhNTFdyaXRlckJhc2UpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBOb2RlVHlwZSwgV3JpdGVyU3RhdGUsIFhNTERPTUltcGxlbWVudGF0aW9uLCBYTUxEb2N1bWVudCwgWE1MRG9jdW1lbnRDQiwgWE1MU3RyZWFtV3JpdGVyLCBYTUxTdHJpbmdXcml0ZXIsIGFzc2lnbiwgaXNGdW5jdGlvbiwgcmVmO1xuXG4gIHJlZiA9IHJlcXVpcmUoJy4vVXRpbGl0eScpLCBhc3NpZ24gPSByZWYuYXNzaWduLCBpc0Z1bmN0aW9uID0gcmVmLmlzRnVuY3Rpb247XG5cbiAgWE1MRE9NSW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL1hNTERPTUltcGxlbWVudGF0aW9uJyk7XG5cbiAgWE1MRG9jdW1lbnQgPSByZXF1aXJlKCcuL1hNTERvY3VtZW50Jyk7XG5cbiAgWE1MRG9jdW1lbnRDQiA9IHJlcXVpcmUoJy4vWE1MRG9jdW1lbnRDQicpO1xuXG4gIFhNTFN0cmluZ1dyaXRlciA9IHJlcXVpcmUoJy4vWE1MU3RyaW5nV3JpdGVyJyk7XG5cbiAgWE1MU3RyZWFtV3JpdGVyID0gcmVxdWlyZSgnLi9YTUxTdHJlYW1Xcml0ZXInKTtcblxuICBOb2RlVHlwZSA9IHJlcXVpcmUoJy4vTm9kZVR5cGUnKTtcblxuICBXcml0ZXJTdGF0ZSA9IHJlcXVpcmUoJy4vV3JpdGVyU3RhdGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cy5jcmVhdGUgPSBmdW5jdGlvbihuYW1lLCB4bWxkZWMsIGRvY3R5cGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZG9jLCByb290O1xuICAgIGlmIChuYW1lID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJvb3QgZWxlbWVudCBuZWVkcyBhIG5hbWUuXCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gYXNzaWduKHt9LCB4bWxkZWMsIGRvY3R5cGUsIG9wdGlvbnMpO1xuICAgIGRvYyA9IG5ldyBYTUxEb2N1bWVudChvcHRpb25zKTtcbiAgICByb290ID0gZG9jLmVsZW1lbnQobmFtZSk7XG4gICAgaWYgKCFvcHRpb25zLmhlYWRsZXNzKSB7XG4gICAgICBkb2MuZGVjbGFyYXRpb24ob3B0aW9ucyk7XG4gICAgICBpZiAoKG9wdGlvbnMucHViSUQgIT0gbnVsbCkgfHwgKG9wdGlvbnMuc3lzSUQgIT0gbnVsbCkpIHtcbiAgICAgICAgZG9jLmR0ZChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMuYmVnaW4gPSBmdW5jdGlvbihvcHRpb25zLCBvbkRhdGEsIG9uRW5kKSB7XG4gICAgdmFyIHJlZjE7XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgIHJlZjEgPSBbb3B0aW9ucywgb25EYXRhXSwgb25EYXRhID0gcmVmMVswXSwgb25FbmQgPSByZWYxWzFdO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBpZiAob25EYXRhKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTERvY3VtZW50Q0Iob3B0aW9ucywgb25EYXRhLCBvbkVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgWE1MRG9jdW1lbnQob3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzLnN0cmluZ1dyaXRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFhNTFN0cmluZ1dyaXRlcihvcHRpb25zKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cy5zdHJlYW1Xcml0ZXIgPSBmdW5jdGlvbihzdHJlYW0sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFhNTFN0cmVhbVdyaXRlcihzdHJlYW0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzLmltcGxlbWVudGF0aW9uID0gbmV3IFhNTERPTUltcGxlbWVudGF0aW9uKCk7XG5cbiAgbW9kdWxlLmV4cG9ydHMubm9kZVR5cGUgPSBOb2RlVHlwZTtcblxuICBtb2R1bGUuZXhwb3J0cy53cml0ZXJTdGF0ZSA9IFdyaXRlclN0YXRlO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgYnVpbGRlciwgZGVmYXVsdHMsIGVzY2FwZUNEQVRBLCByZXF1aXJlc0NEQVRBLCB3cmFwQ0RBVEEsXG4gICAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gIGJ1aWxkZXIgPSByZXF1aXJlKCd4bWxidWlsZGVyJyk7XG5cbiAgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJykuZGVmYXVsdHM7XG5cbiAgcmVxdWlyZXNDREFUQSA9IGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIiAmJiAoZW50cnkuaW5kZXhPZignJicpID49IDAgfHwgZW50cnkuaW5kZXhPZignPicpID49IDAgfHwgZW50cnkuaW5kZXhPZignPCcpID49IDApO1xuICB9O1xuXG4gIHdyYXBDREFUQSA9IGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgcmV0dXJuIFwiPCFbQ0RBVEFbXCIgKyAoZXNjYXBlQ0RBVEEoZW50cnkpKSArIFwiXV0+XCI7XG4gIH07XG5cbiAgZXNjYXBlQ0RBVEEgPSBmdW5jdGlvbihlbnRyeSkge1xuICAgIHJldHVybiBlbnRyeS5yZXBsYWNlKCddXT4nLCAnXV1dXT48IVtDREFUQVs+Jyk7XG4gIH07XG5cbiAgZXhwb3J0cy5CdWlsZGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJ1aWxkZXIob3B0cykge1xuICAgICAgdmFyIGtleSwgcmVmLCB2YWx1ZTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgcmVmID0gZGVmYXVsdHNbXCIwLjJcIl07XG4gICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSByZWZba2V5XTtcbiAgICAgICAgdGhpcy5vcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGZvciAoa2V5IGluIG9wdHMpIHtcbiAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwob3B0cywga2V5KSkgY29udGludWU7XG4gICAgICAgIHZhbHVlID0gb3B0c1trZXldO1xuICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkT2JqZWN0ID0gZnVuY3Rpb24ocm9vdE9iaikge1xuICAgICAgdmFyIGF0dHJrZXksIGNoYXJrZXksIHJlbmRlciwgcm9vdEVsZW1lbnQsIHJvb3ROYW1lO1xuICAgICAgYXR0cmtleSA9IHRoaXMub3B0aW9ucy5hdHRya2V5O1xuICAgICAgY2hhcmtleSA9IHRoaXMub3B0aW9ucy5jaGFya2V5O1xuICAgICAgaWYgKChPYmplY3Qua2V5cyhyb290T2JqKS5sZW5ndGggPT09IDEpICYmICh0aGlzLm9wdGlvbnMucm9vdE5hbWUgPT09IGRlZmF1bHRzWycwLjInXS5yb290TmFtZSkpIHtcbiAgICAgICAgcm9vdE5hbWUgPSBPYmplY3Qua2V5cyhyb290T2JqKVswXTtcbiAgICAgICAgcm9vdE9iaiA9IHJvb3RPYmpbcm9vdE5hbWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdE5hbWUgPSB0aGlzLm9wdGlvbnMucm9vdE5hbWU7XG4gICAgICB9XG4gICAgICByZW5kZXIgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVsZW1lbnQsIG9iaikge1xuICAgICAgICAgIHZhciBhdHRyLCBjaGlsZCwgZW50cnksIGluZGV4LCBrZXksIHZhbHVlO1xuICAgICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuY2RhdGEgJiYgcmVxdWlyZXNDREFUQShvYmopKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmF3KHdyYXBDREFUQShvYmopKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQudHh0KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIGZvciAoaW5kZXggaW4gb2JqKSB7XG4gICAgICAgICAgICAgIGlmICghaGFzUHJvcC5jYWxsKG9iaiwgaW5kZXgpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2hpbGQgPSBvYmpbaW5kZXhdO1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgICAgICAgICAgICAgIGVudHJ5ID0gY2hpbGRba2V5XTtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gcmVuZGVyKGVsZW1lbnQuZWxlKGtleSksIGVudHJ5KS51cCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChvYmosIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjaGlsZCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICBpZiAoa2V5ID09PSBhdHRya2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgZm9yIChhdHRyIGluIGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2hpbGRbYXR0cl07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LmF0dChhdHRyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gY2hhcmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmNkYXRhICYmIHJlcXVpcmVzQ0RBVEEoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5yYXcod3JhcENEQVRBKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnR4dChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpbmRleCBpbiBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoY2hpbGQsIGluZGV4KSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICBlbnRyeSA9IGNoaWxkW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmNkYXRhICYmIHJlcXVpcmVzQ0RBVEEoZW50cnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlKGtleSkucmF3KHdyYXBDREFUQShlbnRyeSkpLnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlKGtleSwgZW50cnkpLnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSByZW5kZXIoZWxlbWVudC5lbGUoa2V5KSwgZW50cnkpLnVwKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSByZW5kZXIoZWxlbWVudC5lbGUoa2V5KSwgY2hpbGQpLnVwKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgJiYgX3RoaXMub3B0aW9ucy5jZGF0YSAmJiByZXF1aXJlc0NEQVRBKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlKGtleSkucmF3KHdyYXBDREFUQShjaGlsZCkpLnVwKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gJyc7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5lbGUoa2V5LCBjaGlsZC50b1N0cmluZygpKS51cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgICAgcm9vdEVsZW1lbnQgPSBidWlsZGVyLmNyZWF0ZShyb290TmFtZSwgdGhpcy5vcHRpb25zLnhtbGRlYywgdGhpcy5vcHRpb25zLmRvY3R5cGUsIHtcbiAgICAgICAgaGVhZGxlc3M6IHRoaXMub3B0aW9ucy5oZWFkbGVzcyxcbiAgICAgICAgYWxsb3dTdXJyb2dhdGVDaGFyczogdGhpcy5vcHRpb25zLmFsbG93U3Vycm9nYXRlQ2hhcnNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlbmRlcihyb290RWxlbWVudCwgcm9vdE9iaikuZW5kKHRoaXMub3B0aW9ucy5yZW5kZXJPcHRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJ1aWxkZXI7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICI7KGZ1bmN0aW9uIChzYXgpIHsgLy8gd3JhcHBlciBmb3Igbm9uLW5vZGUgZW52c1xuICBzYXgucGFyc2VyID0gZnVuY3Rpb24gKHN0cmljdCwgb3B0KSB7IHJldHVybiBuZXcgU0FYUGFyc2VyKHN0cmljdCwgb3B0KSB9XG4gIHNheC5TQVhQYXJzZXIgPSBTQVhQYXJzZXJcbiAgc2F4LlNBWFN0cmVhbSA9IFNBWFN0cmVhbVxuICBzYXguY3JlYXRlU3RyZWFtID0gY3JlYXRlU3RyZWFtXG5cbiAgLy8gV2hlbiB3ZSBwYXNzIHRoZSBNQVhfQlVGRkVSX0xFTkdUSCBwb3NpdGlvbiwgc3RhcnQgY2hlY2tpbmcgZm9yIGJ1ZmZlciBvdmVycnVucy5cbiAgLy8gV2hlbiB3ZSBjaGVjaywgc2NoZWR1bGUgdGhlIG5leHQgY2hlY2sgZm9yIE1BWF9CVUZGRVJfTEVOR1RIIC0gKG1heChidWZmZXIgbGVuZ3RocykpLFxuICAvLyBzaW5jZSB0aGF0J3MgdGhlIGVhcmxpZXN0IHRoYXQgYSBidWZmZXIgb3ZlcnJ1biBjb3VsZCBvY2N1ci4gIFRoaXMgd2F5LCBjaGVja3MgYXJlXG4gIC8vIGFzIHJhcmUgYXMgcmVxdWlyZWQsIGJ1dCBhcyBvZnRlbiBhcyBuZWNlc3NhcnkgdG8gZW5zdXJlIG5ldmVyIGNyb3NzaW5nIHRoaXMgYm91bmQuXG4gIC8vIEZ1cnRoZXJtb3JlLCBidWZmZXJzIGFyZSBvbmx5IHRlc3RlZCBhdCBtb3N0IG9uY2UgcGVyIHdyaXRlKCksIHNvIHBhc3NpbmcgYSB2ZXJ5XG4gIC8vIGxhcmdlIHN0cmluZyBpbnRvIHdyaXRlKCkgbWlnaHQgaGF2ZSB1bmRlc2lyYWJsZSBlZmZlY3RzLCBidXQgdGhpcyBpcyBtYW5hZ2VhYmxlIGJ5XG4gIC8vIHRoZSBjYWxsZXIsIHNvIGl0IGlzIGFzc3VtZWQgdG8gYmUgc2FmZS4gIFRodXMsIGEgY2FsbCB0byB3cml0ZSgpIG1heSwgaW4gdGhlIGV4dHJlbWVcbiAgLy8gZWRnZSBjYXNlLCByZXN1bHQgaW4gY3JlYXRpbmcgYXQgbW9zdCBvbmUgY29tcGxldGUgY29weSBvZiB0aGUgc3RyaW5nIHBhc3NlZCBpbi5cbiAgLy8gU2V0IHRvIEluZmluaXR5IHRvIGhhdmUgdW5saW1pdGVkIGJ1ZmZlcnMuXG4gIHNheC5NQVhfQlVGRkVSX0xFTkdUSCA9IDY0ICogMTAyNFxuXG4gIHZhciBidWZmZXJzID0gW1xuICAgICdjb21tZW50JywgJ3NnbWxEZWNsJywgJ3RleHROb2RlJywgJ3RhZ05hbWUnLCAnZG9jdHlwZScsXG4gICAgJ3Byb2NJbnN0TmFtZScsICdwcm9jSW5zdEJvZHknLCAnZW50aXR5JywgJ2F0dHJpYk5hbWUnLFxuICAgICdhdHRyaWJWYWx1ZScsICdjZGF0YScsICdzY3JpcHQnXG4gIF1cblxuICBzYXguRVZFTlRTID0gW1xuICAgICd0ZXh0JyxcbiAgICAncHJvY2Vzc2luZ2luc3RydWN0aW9uJyxcbiAgICAnc2dtbGRlY2xhcmF0aW9uJyxcbiAgICAnZG9jdHlwZScsXG4gICAgJ2NvbW1lbnQnLFxuICAgICdvcGVudGFnc3RhcnQnLFxuICAgICdhdHRyaWJ1dGUnLFxuICAgICdvcGVudGFnJyxcbiAgICAnY2xvc2V0YWcnLFxuICAgICdvcGVuY2RhdGEnLFxuICAgICdjZGF0YScsXG4gICAgJ2Nsb3NlY2RhdGEnLFxuICAgICdlcnJvcicsXG4gICAgJ2VuZCcsXG4gICAgJ3JlYWR5JyxcbiAgICAnc2NyaXB0JyxcbiAgICAnb3Blbm5hbWVzcGFjZScsXG4gICAgJ2Nsb3NlbmFtZXNwYWNlJ1xuICBdXG5cbiAgZnVuY3Rpb24gU0FYUGFyc2VyIChzdHJpY3QsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTQVhQYXJzZXIpKSB7XG4gICAgICByZXR1cm4gbmV3IFNBWFBhcnNlcihzdHJpY3QsIG9wdClcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VyID0gdGhpc1xuICAgIGNsZWFyQnVmZmVycyhwYXJzZXIpXG4gICAgcGFyc2VyLnEgPSBwYXJzZXIuYyA9ICcnXG4gICAgcGFyc2VyLmJ1ZmZlckNoZWNrUG9zaXRpb24gPSBzYXguTUFYX0JVRkZFUl9MRU5HVEhcbiAgICBwYXJzZXIub3B0ID0gb3B0IHx8IHt9XG4gICAgcGFyc2VyLm9wdC5sb3dlcmNhc2UgPSBwYXJzZXIub3B0Lmxvd2VyY2FzZSB8fCBwYXJzZXIub3B0Lmxvd2VyY2FzZXRhZ3NcbiAgICBwYXJzZXIubG9vc2VDYXNlID0gcGFyc2VyLm9wdC5sb3dlcmNhc2UgPyAndG9Mb3dlckNhc2UnIDogJ3RvVXBwZXJDYXNlJ1xuICAgIHBhcnNlci50YWdzID0gW11cbiAgICBwYXJzZXIuY2xvc2VkID0gcGFyc2VyLmNsb3NlZFJvb3QgPSBwYXJzZXIuc2F3Um9vdCA9IGZhbHNlXG4gICAgcGFyc2VyLnRhZyA9IHBhcnNlci5lcnJvciA9IG51bGxcbiAgICBwYXJzZXIuc3RyaWN0ID0gISFzdHJpY3RcbiAgICBwYXJzZXIubm9zY3JpcHQgPSAhIShzdHJpY3QgfHwgcGFyc2VyLm9wdC5ub3NjcmlwdClcbiAgICBwYXJzZXIuc3RhdGUgPSBTLkJFR0lOXG4gICAgcGFyc2VyLnN0cmljdEVudGl0aWVzID0gcGFyc2VyLm9wdC5zdHJpY3RFbnRpdGllc1xuICAgIHBhcnNlci5FTlRJVElFUyA9IHBhcnNlci5zdHJpY3RFbnRpdGllcyA/IE9iamVjdC5jcmVhdGUoc2F4LlhNTF9FTlRJVElFUykgOiBPYmplY3QuY3JlYXRlKHNheC5FTlRJVElFUylcbiAgICBwYXJzZXIuYXR0cmliTGlzdCA9IFtdXG5cbiAgICAvLyBuYW1lc3BhY2VzIGZvcm0gYSBwcm90b3R5cGUgY2hhaW4uXG4gICAgLy8gaXQgYWx3YXlzIHBvaW50cyBhdCB0aGUgY3VycmVudCB0YWcsXG4gICAgLy8gd2hpY2ggcHJvdG9zIHRvIGl0cyBwYXJlbnQgdGFnLlxuICAgIGlmIChwYXJzZXIub3B0LnhtbG5zKSB7XG4gICAgICBwYXJzZXIubnMgPSBPYmplY3QuY3JlYXRlKHJvb3ROUylcbiAgICB9XG5cbiAgICAvLyBtb3N0bHkganVzdCBmb3IgZXJyb3IgcmVwb3J0aW5nXG4gICAgcGFyc2VyLnRyYWNrUG9zaXRpb24gPSBwYXJzZXIub3B0LnBvc2l0aW9uICE9PSBmYWxzZVxuICAgIGlmIChwYXJzZXIudHJhY2tQb3NpdGlvbikge1xuICAgICAgcGFyc2VyLnBvc2l0aW9uID0gcGFyc2VyLmxpbmUgPSBwYXJzZXIuY29sdW1uID0gMFxuICAgIH1cbiAgICBlbWl0KHBhcnNlciwgJ29ucmVhZHknKVxuICB9XG5cbiAgaWYgKCFPYmplY3QuY3JlYXRlKSB7XG4gICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICBmdW5jdGlvbiBGICgpIHt9XG4gICAgICBGLnByb3RvdHlwZSA9IG9cbiAgICAgIHZhciBuZXdmID0gbmV3IEYoKVxuICAgICAgcmV0dXJuIG5ld2ZcbiAgICB9XG4gIH1cblxuICBpZiAoIU9iamVjdC5rZXlzKSB7XG4gICAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbiAobykge1xuICAgICAgdmFyIGEgPSBbXVxuICAgICAgZm9yICh2YXIgaSBpbiBvKSBpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkgYS5wdXNoKGkpXG4gICAgICByZXR1cm4gYVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQnVmZmVyTGVuZ3RoIChwYXJzZXIpIHtcbiAgICB2YXIgbWF4QWxsb3dlZCA9IE1hdGgubWF4KHNheC5NQVhfQlVGRkVSX0xFTkdUSCwgMTApXG4gICAgdmFyIG1heEFjdHVhbCA9IDBcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGJ1ZmZlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgbGVuID0gcGFyc2VyW2J1ZmZlcnNbaV1dLmxlbmd0aFxuICAgICAgaWYgKGxlbiA+IG1heEFsbG93ZWQpIHtcbiAgICAgICAgLy8gVGV4dC9jZGF0YSBub2RlcyBjYW4gZ2V0IGJpZywgYW5kIHNpbmNlIHRoZXkncmUgYnVmZmVyZWQsXG4gICAgICAgIC8vIHdlIGNhbiBnZXQgaGVyZSB1bmRlciBub3JtYWwgY29uZGl0aW9ucy5cbiAgICAgICAgLy8gQXZvaWQgaXNzdWVzIGJ5IGVtaXR0aW5nIHRoZSB0ZXh0IG5vZGUgbm93LFxuICAgICAgICAvLyBzbyBhdCBsZWFzdCBpdCB3b24ndCBnZXQgYW55IGJpZ2dlci5cbiAgICAgICAgc3dpdGNoIChidWZmZXJzW2ldKSB7XG4gICAgICAgICAgY2FzZSAndGV4dE5vZGUnOlxuICAgICAgICAgICAgY2xvc2VUZXh0KHBhcnNlcilcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjZGF0YSc6XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNkYXRhJywgcGFyc2VyLmNkYXRhKVxuICAgICAgICAgICAgcGFyc2VyLmNkYXRhID0gJydcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdzY3JpcHQnOlxuICAgICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25zY3JpcHQnLCBwYXJzZXIuc2NyaXB0KVxuICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCA9ICcnXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGVycm9yKHBhcnNlciwgJ01heCBidWZmZXIgbGVuZ3RoIGV4Y2VlZGVkOiAnICsgYnVmZmVyc1tpXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF4QWN0dWFsID0gTWF0aC5tYXgobWF4QWN0dWFsLCBsZW4pXG4gICAgfVxuICAgIC8vIHNjaGVkdWxlIHRoZSBuZXh0IGNoZWNrIGZvciB0aGUgZWFybGllc3QgcG9zc2libGUgYnVmZmVyIG92ZXJydW4uXG4gICAgdmFyIG0gPSBzYXguTUFYX0JVRkZFUl9MRU5HVEggLSBtYXhBY3R1YWxcbiAgICBwYXJzZXIuYnVmZmVyQ2hlY2tQb3NpdGlvbiA9IG0gKyBwYXJzZXIucG9zaXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQnVmZmVycyAocGFyc2VyKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBidWZmZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcGFyc2VyW2J1ZmZlcnNbaV1dID0gJydcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaEJ1ZmZlcnMgKHBhcnNlcikge1xuICAgIGNsb3NlVGV4dChwYXJzZXIpXG4gICAgaWYgKHBhcnNlci5jZGF0YSAhPT0gJycpIHtcbiAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uY2RhdGEnLCBwYXJzZXIuY2RhdGEpXG4gICAgICBwYXJzZXIuY2RhdGEgPSAnJ1xuICAgIH1cbiAgICBpZiAocGFyc2VyLnNjcmlwdCAhPT0gJycpIHtcbiAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uc2NyaXB0JywgcGFyc2VyLnNjcmlwdClcbiAgICAgIHBhcnNlci5zY3JpcHQgPSAnJ1xuICAgIH1cbiAgfVxuXG4gIFNBWFBhcnNlci5wcm90b3R5cGUgPSB7XG4gICAgZW5kOiBmdW5jdGlvbiAoKSB7IGVuZCh0aGlzKSB9LFxuICAgIHdyaXRlOiB3cml0ZSxcbiAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHsgdGhpcy5lcnJvciA9IG51bGw7IHJldHVybiB0aGlzIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMud3JpdGUobnVsbCkgfSxcbiAgICBmbHVzaDogZnVuY3Rpb24gKCkgeyBmbHVzaEJ1ZmZlcnModGhpcykgfVxuICB9XG5cbiAgdmFyIFN0cmVhbVxuICB0cnkge1xuICAgIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpLlN0cmVhbVxuICB9IGNhdGNoIChleCkge1xuICAgIFN0cmVhbSA9IGZ1bmN0aW9uICgpIHt9XG4gIH1cbiAgaWYgKCFTdHJlYW0pIFN0cmVhbSA9IGZ1bmN0aW9uICgpIHt9XG5cbiAgdmFyIHN0cmVhbVdyYXBzID0gc2F4LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2KSB7XG4gICAgcmV0dXJuIGV2ICE9PSAnZXJyb3InICYmIGV2ICE9PSAnZW5kJ1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmVhbSAoc3RyaWN0LCBvcHQpIHtcbiAgICByZXR1cm4gbmV3IFNBWFN0cmVhbShzdHJpY3QsIG9wdClcbiAgfVxuXG4gIGZ1bmN0aW9uIFNBWFN0cmVhbSAoc3RyaWN0LCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU0FYU3RyZWFtKSkge1xuICAgICAgcmV0dXJuIG5ldyBTQVhTdHJlYW0oc3RyaWN0LCBvcHQpXG4gICAgfVxuXG4gICAgU3RyZWFtLmFwcGx5KHRoaXMpXG5cbiAgICB0aGlzLl9wYXJzZXIgPSBuZXcgU0FYUGFyc2VyKHN0cmljdCwgb3B0KVxuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlXG4gICAgdGhpcy5yZWFkYWJsZSA9IHRydWVcblxuICAgIHZhciBtZSA9IHRoaXNcblxuICAgIHRoaXMuX3BhcnNlci5vbmVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lLmVtaXQoJ2VuZCcpXG4gICAgfVxuXG4gICAgdGhpcy5fcGFyc2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXIpIHtcbiAgICAgIG1lLmVtaXQoJ2Vycm9yJywgZXIpXG5cbiAgICAgIC8vIGlmIGRpZG4ndCB0aHJvdywgdGhlbiBtZWFucyBlcnJvciB3YXMgaGFuZGxlZC5cbiAgICAgIC8vIGdvIGFoZWFkIGFuZCBjbGVhciBlcnJvciwgc28gd2UgY2FuIHdyaXRlIGFnYWluLlxuICAgICAgbWUuX3BhcnNlci5lcnJvciA9IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLl9kZWNvZGVyID0gbnVsbFxuXG4gICAgc3RyZWFtV3JhcHMuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZSwgJ29uJyArIGV2LCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBtZS5fcGFyc2VyWydvbicgKyBldl1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgIGlmICghaCkge1xuICAgICAgICAgICAgbWUucmVtb3ZlQWxsTGlzdGVuZXJzKGV2KVxuICAgICAgICAgICAgbWUuX3BhcnNlclsnb24nICsgZXZdID0gaFxuICAgICAgICAgICAgcmV0dXJuIGhcbiAgICAgICAgICB9XG4gICAgICAgICAgbWUub24oZXYsIGgpXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIFNBWFN0cmVhbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN0cmVhbS5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IFNBWFN0cmVhbVxuICAgIH1cbiAgfSlcblxuICBTQVhTdHJlYW0ucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mIEJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICBpZiAoIXRoaXMuX2RlY29kZXIpIHtcbiAgICAgICAgdmFyIFNEID0gcmVxdWlyZSgnc3RyaW5nX2RlY29kZXInKS5TdHJpbmdEZWNvZGVyXG4gICAgICAgIHRoaXMuX2RlY29kZXIgPSBuZXcgU0QoJ3V0ZjgnKVxuICAgICAgfVxuICAgICAgZGF0YSA9IHRoaXMuX2RlY29kZXIud3JpdGUoZGF0YSlcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJzZXIud3JpdGUoZGF0YS50b1N0cmluZygpKVxuICAgIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIFNBWFN0cmVhbS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgdGhpcy53cml0ZShjaHVuaylcbiAgICB9XG4gICAgdGhpcy5fcGFyc2VyLmVuZCgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIFNBWFN0cmVhbS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXYsIGhhbmRsZXIpIHtcbiAgICB2YXIgbWUgPSB0aGlzXG4gICAgaWYgKCFtZS5fcGFyc2VyWydvbicgKyBldl0gJiYgc3RyZWFtV3JhcHMuaW5kZXhPZihldikgIT09IC0xKSB7XG4gICAgICBtZS5fcGFyc2VyWydvbicgKyBldl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IFthcmd1bWVudHNbMF1dIDogQXJyYXkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICBhcmdzLnNwbGljZSgwLCAwLCBldilcbiAgICAgICAgbWUuZW1pdC5hcHBseShtZSwgYXJncylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU3RyZWFtLnByb3RvdHlwZS5vbi5jYWxsKG1lLCBldiwgaGFuZGxlcilcbiAgfVxuXG4gIC8vIHRoaXMgcmVhbGx5IG5lZWRzIHRvIGJlIHJlcGxhY2VkIHdpdGggY2hhcmFjdGVyIGNsYXNzZXMuXG4gIC8vIFhNTCBhbGxvd3MgYWxsIG1hbm5lciBvZiByaWRpY3Vsb3VzIG51bWJlcnMgYW5kIGRpZ2l0cy5cbiAgdmFyIENEQVRBID0gJ1tDREFUQVsnXG4gIHZhciBET0NUWVBFID0gJ0RPQ1RZUEUnXG4gIHZhciBYTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSdcbiAgdmFyIFhNTE5TX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLydcbiAgdmFyIHJvb3ROUyA9IHsgeG1sOiBYTUxfTkFNRVNQQUNFLCB4bWxuczogWE1MTlNfTkFNRVNQQUNFIH1cblxuICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLyNOVC1OYW1lU3RhcnRDaGFyXG4gIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gd29ya3Mgb24gc3RyaW5ncywgYSBzaW5nbGUgY2hhcmFjdGVyIGF0IGEgdGltZVxuICAvLyBhcyBzdWNoLCBpdCBjYW5ub3QgZXZlciBzdXBwb3J0IGFzdHJhbC1wbGFuZSBjaGFyYWN0ZXJzICgxMDAwMC1FRkZGRilcbiAgLy8gd2l0aG91dCBhIHNpZ25pZmljYW50IGJyZWFraW5nIGNoYW5nZSB0byBlaXRoZXIgdGhpcyAgcGFyc2VyLCBvciB0aGVcbiAgLy8gSmF2YVNjcmlwdCBsYW5ndWFnZS4gIEltcGxlbWVudGF0aW9uIG9mIGFuIGVtb2ppLWNhcGFibGUgeG1sIHBhcnNlclxuICAvLyBpcyBsZWZ0IGFzIGFuIGV4ZXJjaXNlIGZvciB0aGUgcmVhZGVyLlxuICB2YXIgbmFtZVN0YXJ0ID0gL1s6X0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF0vXG5cbiAgdmFyIG5hbWVCb2R5ID0gL1s6X0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDAuXFxkLV0vXG5cbiAgdmFyIGVudGl0eVN0YXJ0ID0gL1sjOl9BLVphLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdL1xuICB2YXIgZW50aXR5Qm9keSA9IC9bIzpfQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MC5cXGQtXS9cblxuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gJyAnIHx8IGMgPT09ICdcXG4nIHx8IGMgPT09ICdcXHInIHx8IGMgPT09ICdcXHQnXG4gIH1cblxuICBmdW5jdGlvbiBpc1F1b3RlIChjKSB7XG4gICAgcmV0dXJuIGMgPT09ICdcIicgfHwgYyA9PT0gJ1xcJydcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQXR0cmliRW5kIChjKSB7XG4gICAgcmV0dXJuIGMgPT09ICc+JyB8fCBpc1doaXRlc3BhY2UoYylcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTWF0Y2ggKHJlZ2V4LCBjKSB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdE1hdGNoIChyZWdleCwgYykge1xuICAgIHJldHVybiAhaXNNYXRjaChyZWdleCwgYylcbiAgfVxuXG4gIHZhciBTID0gMFxuICBzYXguU1RBVEUgPSB7XG4gICAgQkVHSU46IFMrKywgLy8gbGVhZGluZyBieXRlIG9yZGVyIG1hcmsgb3Igd2hpdGVzcGFjZVxuICAgIEJFR0lOX1dISVRFU1BBQ0U6IFMrKywgLy8gbGVhZGluZyB3aGl0ZXNwYWNlXG4gICAgVEVYVDogUysrLCAvLyBnZW5lcmFsIHN0dWZmXG4gICAgVEVYVF9FTlRJVFk6IFMrKywgLy8gJmFtcCBhbmQgc3VjaC5cbiAgICBPUEVOX1dBS0E6IFMrKywgLy8gPFxuICAgIFNHTUxfREVDTDogUysrLCAvLyA8IUJMQVJHXG4gICAgU0dNTF9ERUNMX1FVT1RFRDogUysrLCAvLyA8IUJMQVJHIGZvbyBcImJhclxuICAgIERPQ1RZUEU6IFMrKywgLy8gPCFET0NUWVBFXG4gICAgRE9DVFlQRV9RVU9URUQ6IFMrKywgLy8gPCFET0NUWVBFIFwiLy9ibGFoXG4gICAgRE9DVFlQRV9EVEQ6IFMrKywgLy8gPCFET0NUWVBFIFwiLy9ibGFoXCIgWyAuLi5cbiAgICBET0NUWVBFX0RURF9RVU9URUQ6IFMrKywgLy8gPCFET0NUWVBFIFwiLy9ibGFoXCIgWyBcImZvb1xuICAgIENPTU1FTlRfU1RBUlRJTkc6IFMrKywgLy8gPCEtXG4gICAgQ09NTUVOVDogUysrLCAvLyA8IS0tXG4gICAgQ09NTUVOVF9FTkRJTkc6IFMrKywgLy8gPCEtLSBibGFoIC1cbiAgICBDT01NRU5UX0VOREVEOiBTKyssIC8vIDwhLS0gYmxhaCAtLVxuICAgIENEQVRBOiBTKyssIC8vIDwhW0NEQVRBWyBzb21ldGhpbmdcbiAgICBDREFUQV9FTkRJTkc6IFMrKywgLy8gXVxuICAgIENEQVRBX0VORElOR18yOiBTKyssIC8vIF1dXG4gICAgUFJPQ19JTlNUOiBTKyssIC8vIDw/aGlcbiAgICBQUk9DX0lOU1RfQk9EWTogUysrLCAvLyA8P2hpIHRoZXJlXG4gICAgUFJPQ19JTlNUX0VORElORzogUysrLCAvLyA8P2hpIFwidGhlcmVcIiA/XG4gICAgT1BFTl9UQUc6IFMrKywgLy8gPHN0cm9uZ1xuICAgIE9QRU5fVEFHX1NMQVNIOiBTKyssIC8vIDxzdHJvbmcgL1xuICAgIEFUVFJJQjogUysrLCAvLyA8YVxuICAgIEFUVFJJQl9OQU1FOiBTKyssIC8vIDxhIGZvb1xuICAgIEFUVFJJQl9OQU1FX1NBV19XSElURTogUysrLCAvLyA8YSBmb28gX1xuICAgIEFUVFJJQl9WQUxVRTogUysrLCAvLyA8YSBmb289XG4gICAgQVRUUklCX1ZBTFVFX1FVT1RFRDogUysrLCAvLyA8YSBmb289XCJiYXJcbiAgICBBVFRSSUJfVkFMVUVfQ0xPU0VEOiBTKyssIC8vIDxhIGZvbz1cImJhclwiXG4gICAgQVRUUklCX1ZBTFVFX1VOUVVPVEVEOiBTKyssIC8vIDxhIGZvbz1iYXJcbiAgICBBVFRSSUJfVkFMVUVfRU5USVRZX1E6IFMrKywgLy8gPGZvbyBiYXI9XCImcXVvdDtcIlxuICAgIEFUVFJJQl9WQUxVRV9FTlRJVFlfVTogUysrLCAvLyA8Zm9vIGJhcj0mcXVvdFxuICAgIENMT1NFX1RBRzogUysrLCAvLyA8L2FcbiAgICBDTE9TRV9UQUdfU0FXX1dISVRFOiBTKyssIC8vIDwvYSAgID5cbiAgICBTQ1JJUFQ6IFMrKywgLy8gPHNjcmlwdD4gLi4uXG4gICAgU0NSSVBUX0VORElORzogUysrIC8vIDxzY3JpcHQ+IC4uLiA8XG4gIH1cblxuICBzYXguWE1MX0VOVElUSUVTID0ge1xuICAgICdhbXAnOiAnJicsXG4gICAgJ2d0JzogJz4nLFxuICAgICdsdCc6ICc8JyxcbiAgICAncXVvdCc6ICdcIicsXG4gICAgJ2Fwb3MnOiBcIidcIlxuICB9XG5cbiAgc2F4LkVOVElUSUVTID0ge1xuICAgICdhbXAnOiAnJicsXG4gICAgJ2d0JzogJz4nLFxuICAgICdsdCc6ICc8JyxcbiAgICAncXVvdCc6ICdcIicsXG4gICAgJ2Fwb3MnOiBcIidcIixcbiAgICAnQUVsaWcnOiAxOTgsXG4gICAgJ0FhY3V0ZSc6IDE5MyxcbiAgICAnQWNpcmMnOiAxOTQsXG4gICAgJ0FncmF2ZSc6IDE5MixcbiAgICAnQXJpbmcnOiAxOTcsXG4gICAgJ0F0aWxkZSc6IDE5NSxcbiAgICAnQXVtbCc6IDE5NixcbiAgICAnQ2NlZGlsJzogMTk5LFxuICAgICdFVEgnOiAyMDgsXG4gICAgJ0VhY3V0ZSc6IDIwMSxcbiAgICAnRWNpcmMnOiAyMDIsXG4gICAgJ0VncmF2ZSc6IDIwMCxcbiAgICAnRXVtbCc6IDIwMyxcbiAgICAnSWFjdXRlJzogMjA1LFxuICAgICdJY2lyYyc6IDIwNixcbiAgICAnSWdyYXZlJzogMjA0LFxuICAgICdJdW1sJzogMjA3LFxuICAgICdOdGlsZGUnOiAyMDksXG4gICAgJ09hY3V0ZSc6IDIxMSxcbiAgICAnT2NpcmMnOiAyMTIsXG4gICAgJ09ncmF2ZSc6IDIxMCxcbiAgICAnT3NsYXNoJzogMjE2LFxuICAgICdPdGlsZGUnOiAyMTMsXG4gICAgJ091bWwnOiAyMTQsXG4gICAgJ1RIT1JOJzogMjIyLFxuICAgICdVYWN1dGUnOiAyMTgsXG4gICAgJ1VjaXJjJzogMjE5LFxuICAgICdVZ3JhdmUnOiAyMTcsXG4gICAgJ1V1bWwnOiAyMjAsXG4gICAgJ1lhY3V0ZSc6IDIyMSxcbiAgICAnYWFjdXRlJzogMjI1LFxuICAgICdhY2lyYyc6IDIyNixcbiAgICAnYWVsaWcnOiAyMzAsXG4gICAgJ2FncmF2ZSc6IDIyNCxcbiAgICAnYXJpbmcnOiAyMjksXG4gICAgJ2F0aWxkZSc6IDIyNyxcbiAgICAnYXVtbCc6IDIyOCxcbiAgICAnY2NlZGlsJzogMjMxLFxuICAgICdlYWN1dGUnOiAyMzMsXG4gICAgJ2VjaXJjJzogMjM0LFxuICAgICdlZ3JhdmUnOiAyMzIsXG4gICAgJ2V0aCc6IDI0MCxcbiAgICAnZXVtbCc6IDIzNSxcbiAgICAnaWFjdXRlJzogMjM3LFxuICAgICdpY2lyYyc6IDIzOCxcbiAgICAnaWdyYXZlJzogMjM2LFxuICAgICdpdW1sJzogMjM5LFxuICAgICdudGlsZGUnOiAyNDEsXG4gICAgJ29hY3V0ZSc6IDI0MyxcbiAgICAnb2NpcmMnOiAyNDQsXG4gICAgJ29ncmF2ZSc6IDI0MixcbiAgICAnb3NsYXNoJzogMjQ4LFxuICAgICdvdGlsZGUnOiAyNDUsXG4gICAgJ291bWwnOiAyNDYsXG4gICAgJ3N6bGlnJzogMjIzLFxuICAgICd0aG9ybic6IDI1NCxcbiAgICAndWFjdXRlJzogMjUwLFxuICAgICd1Y2lyYyc6IDI1MSxcbiAgICAndWdyYXZlJzogMjQ5LFxuICAgICd1dW1sJzogMjUyLFxuICAgICd5YWN1dGUnOiAyNTMsXG4gICAgJ3l1bWwnOiAyNTUsXG4gICAgJ2NvcHknOiAxNjksXG4gICAgJ3JlZyc6IDE3NCxcbiAgICAnbmJzcCc6IDE2MCxcbiAgICAnaWV4Y2wnOiAxNjEsXG4gICAgJ2NlbnQnOiAxNjIsXG4gICAgJ3BvdW5kJzogMTYzLFxuICAgICdjdXJyZW4nOiAxNjQsXG4gICAgJ3llbic6IDE2NSxcbiAgICAnYnJ2YmFyJzogMTY2LFxuICAgICdzZWN0JzogMTY3LFxuICAgICd1bWwnOiAxNjgsXG4gICAgJ29yZGYnOiAxNzAsXG4gICAgJ2xhcXVvJzogMTcxLFxuICAgICdub3QnOiAxNzIsXG4gICAgJ3NoeSc6IDE3MyxcbiAgICAnbWFjcic6IDE3NSxcbiAgICAnZGVnJzogMTc2LFxuICAgICdwbHVzbW4nOiAxNzcsXG4gICAgJ3N1cDEnOiAxODUsXG4gICAgJ3N1cDInOiAxNzgsXG4gICAgJ3N1cDMnOiAxNzksXG4gICAgJ2FjdXRlJzogMTgwLFxuICAgICdtaWNybyc6IDE4MSxcbiAgICAncGFyYSc6IDE4MixcbiAgICAnbWlkZG90JzogMTgzLFxuICAgICdjZWRpbCc6IDE4NCxcbiAgICAnb3JkbSc6IDE4NixcbiAgICAncmFxdW8nOiAxODcsXG4gICAgJ2ZyYWMxNCc6IDE4OCxcbiAgICAnZnJhYzEyJzogMTg5LFxuICAgICdmcmFjMzQnOiAxOTAsXG4gICAgJ2lxdWVzdCc6IDE5MSxcbiAgICAndGltZXMnOiAyMTUsXG4gICAgJ2RpdmlkZSc6IDI0NyxcbiAgICAnT0VsaWcnOiAzMzgsXG4gICAgJ29lbGlnJzogMzM5LFxuICAgICdTY2Fyb24nOiAzNTIsXG4gICAgJ3NjYXJvbic6IDM1MyxcbiAgICAnWXVtbCc6IDM3NixcbiAgICAnZm5vZic6IDQwMixcbiAgICAnY2lyYyc6IDcxMCxcbiAgICAndGlsZGUnOiA3MzIsXG4gICAgJ0FscGhhJzogOTEzLFxuICAgICdCZXRhJzogOTE0LFxuICAgICdHYW1tYSc6IDkxNSxcbiAgICAnRGVsdGEnOiA5MTYsXG4gICAgJ0Vwc2lsb24nOiA5MTcsXG4gICAgJ1pldGEnOiA5MTgsXG4gICAgJ0V0YSc6IDkxOSxcbiAgICAnVGhldGEnOiA5MjAsXG4gICAgJ0lvdGEnOiA5MjEsXG4gICAgJ0thcHBhJzogOTIyLFxuICAgICdMYW1iZGEnOiA5MjMsXG4gICAgJ011JzogOTI0LFxuICAgICdOdSc6IDkyNSxcbiAgICAnWGknOiA5MjYsXG4gICAgJ09taWNyb24nOiA5MjcsXG4gICAgJ1BpJzogOTI4LFxuICAgICdSaG8nOiA5MjksXG4gICAgJ1NpZ21hJzogOTMxLFxuICAgICdUYXUnOiA5MzIsXG4gICAgJ1Vwc2lsb24nOiA5MzMsXG4gICAgJ1BoaSc6IDkzNCxcbiAgICAnQ2hpJzogOTM1LFxuICAgICdQc2knOiA5MzYsXG4gICAgJ09tZWdhJzogOTM3LFxuICAgICdhbHBoYSc6IDk0NSxcbiAgICAnYmV0YSc6IDk0NixcbiAgICAnZ2FtbWEnOiA5NDcsXG4gICAgJ2RlbHRhJzogOTQ4LFxuICAgICdlcHNpbG9uJzogOTQ5LFxuICAgICd6ZXRhJzogOTUwLFxuICAgICdldGEnOiA5NTEsXG4gICAgJ3RoZXRhJzogOTUyLFxuICAgICdpb3RhJzogOTUzLFxuICAgICdrYXBwYSc6IDk1NCxcbiAgICAnbGFtYmRhJzogOTU1LFxuICAgICdtdSc6IDk1NixcbiAgICAnbnUnOiA5NTcsXG4gICAgJ3hpJzogOTU4LFxuICAgICdvbWljcm9uJzogOTU5LFxuICAgICdwaSc6IDk2MCxcbiAgICAncmhvJzogOTYxLFxuICAgICdzaWdtYWYnOiA5NjIsXG4gICAgJ3NpZ21hJzogOTYzLFxuICAgICd0YXUnOiA5NjQsXG4gICAgJ3Vwc2lsb24nOiA5NjUsXG4gICAgJ3BoaSc6IDk2NixcbiAgICAnY2hpJzogOTY3LFxuICAgICdwc2knOiA5NjgsXG4gICAgJ29tZWdhJzogOTY5LFxuICAgICd0aGV0YXN5bSc6IDk3NyxcbiAgICAndXBzaWgnOiA5NzgsXG4gICAgJ3Bpdic6IDk4MixcbiAgICAnZW5zcCc6IDgxOTQsXG4gICAgJ2Vtc3AnOiA4MTk1LFxuICAgICd0aGluc3AnOiA4MjAxLFxuICAgICd6d25qJzogODIwNCxcbiAgICAnendqJzogODIwNSxcbiAgICAnbHJtJzogODIwNixcbiAgICAncmxtJzogODIwNyxcbiAgICAnbmRhc2gnOiA4MjExLFxuICAgICdtZGFzaCc6IDgyMTIsXG4gICAgJ2xzcXVvJzogODIxNixcbiAgICAncnNxdW8nOiA4MjE3LFxuICAgICdzYnF1byc6IDgyMTgsXG4gICAgJ2xkcXVvJzogODIyMCxcbiAgICAncmRxdW8nOiA4MjIxLFxuICAgICdiZHF1byc6IDgyMjIsXG4gICAgJ2RhZ2dlcic6IDgyMjQsXG4gICAgJ0RhZ2dlcic6IDgyMjUsXG4gICAgJ2J1bGwnOiA4MjI2LFxuICAgICdoZWxsaXAnOiA4MjMwLFxuICAgICdwZXJtaWwnOiA4MjQwLFxuICAgICdwcmltZSc6IDgyNDIsXG4gICAgJ1ByaW1lJzogODI0MyxcbiAgICAnbHNhcXVvJzogODI0OSxcbiAgICAncnNhcXVvJzogODI1MCxcbiAgICAnb2xpbmUnOiA4MjU0LFxuICAgICdmcmFzbCc6IDgyNjAsXG4gICAgJ2V1cm8nOiA4MzY0LFxuICAgICdpbWFnZSc6IDg0NjUsXG4gICAgJ3dlaWVycCc6IDg0NzIsXG4gICAgJ3JlYWwnOiA4NDc2LFxuICAgICd0cmFkZSc6IDg0ODIsXG4gICAgJ2FsZWZzeW0nOiA4NTAxLFxuICAgICdsYXJyJzogODU5MixcbiAgICAndWFycic6IDg1OTMsXG4gICAgJ3JhcnInOiA4NTk0LFxuICAgICdkYXJyJzogODU5NSxcbiAgICAnaGFycic6IDg1OTYsXG4gICAgJ2NyYXJyJzogODYyOSxcbiAgICAnbEFycic6IDg2NTYsXG4gICAgJ3VBcnInOiA4NjU3LFxuICAgICdyQXJyJzogODY1OCxcbiAgICAnZEFycic6IDg2NTksXG4gICAgJ2hBcnInOiA4NjYwLFxuICAgICdmb3JhbGwnOiA4NzA0LFxuICAgICdwYXJ0JzogODcwNixcbiAgICAnZXhpc3QnOiA4NzA3LFxuICAgICdlbXB0eSc6IDg3MDksXG4gICAgJ25hYmxhJzogODcxMSxcbiAgICAnaXNpbic6IDg3MTIsXG4gICAgJ25vdGluJzogODcxMyxcbiAgICAnbmknOiA4NzE1LFxuICAgICdwcm9kJzogODcxOSxcbiAgICAnc3VtJzogODcyMSxcbiAgICAnbWludXMnOiA4NzIyLFxuICAgICdsb3dhc3QnOiA4NzI3LFxuICAgICdyYWRpYyc6IDg3MzAsXG4gICAgJ3Byb3AnOiA4NzMzLFxuICAgICdpbmZpbic6IDg3MzQsXG4gICAgJ2FuZyc6IDg3MzYsXG4gICAgJ2FuZCc6IDg3NDMsXG4gICAgJ29yJzogODc0NCxcbiAgICAnY2FwJzogODc0NSxcbiAgICAnY3VwJzogODc0NixcbiAgICAnaW50JzogODc0NyxcbiAgICAndGhlcmU0JzogODc1NixcbiAgICAnc2ltJzogODc2NCxcbiAgICAnY29uZyc6IDg3NzMsXG4gICAgJ2FzeW1wJzogODc3NixcbiAgICAnbmUnOiA4ODAwLFxuICAgICdlcXVpdic6IDg4MDEsXG4gICAgJ2xlJzogODgwNCxcbiAgICAnZ2UnOiA4ODA1LFxuICAgICdzdWInOiA4ODM0LFxuICAgICdzdXAnOiA4ODM1LFxuICAgICduc3ViJzogODgzNixcbiAgICAnc3ViZSc6IDg4MzgsXG4gICAgJ3N1cGUnOiA4ODM5LFxuICAgICdvcGx1cyc6IDg4NTMsXG4gICAgJ290aW1lcyc6IDg4NTUsXG4gICAgJ3BlcnAnOiA4ODY5LFxuICAgICdzZG90JzogODkwMSxcbiAgICAnbGNlaWwnOiA4OTY4LFxuICAgICdyY2VpbCc6IDg5NjksXG4gICAgJ2xmbG9vcic6IDg5NzAsXG4gICAgJ3JmbG9vcic6IDg5NzEsXG4gICAgJ2xhbmcnOiA5MDAxLFxuICAgICdyYW5nJzogOTAwMixcbiAgICAnbG96JzogOTY3NCxcbiAgICAnc3BhZGVzJzogOTgyNCxcbiAgICAnY2x1YnMnOiA5ODI3LFxuICAgICdoZWFydHMnOiA5ODI5LFxuICAgICdkaWFtcyc6IDk4MzBcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHNheC5FTlRJVElFUykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGUgPSBzYXguRU5USVRJRVNba2V5XVxuICAgIHZhciBzID0gdHlwZW9mIGUgPT09ICdudW1iZXInID8gU3RyaW5nLmZyb21DaGFyQ29kZShlKSA6IGVcbiAgICBzYXguRU5USVRJRVNba2V5XSA9IHNcbiAgfSlcblxuICBmb3IgKHZhciBzIGluIHNheC5TVEFURSkge1xuICAgIHNheC5TVEFURVtzYXguU1RBVEVbc11dID0gc1xuICB9XG5cbiAgLy8gc2hvcnRoYW5kXG4gIFMgPSBzYXguU1RBVEVcblxuICBmdW5jdGlvbiBlbWl0IChwYXJzZXIsIGV2ZW50LCBkYXRhKSB7XG4gICAgcGFyc2VyW2V2ZW50XSAmJiBwYXJzZXJbZXZlbnRdKGRhdGEpXG4gIH1cblxuICBmdW5jdGlvbiBlbWl0Tm9kZSAocGFyc2VyLCBub2RlVHlwZSwgZGF0YSkge1xuICAgIGlmIChwYXJzZXIudGV4dE5vZGUpIGNsb3NlVGV4dChwYXJzZXIpXG4gICAgZW1pdChwYXJzZXIsIG5vZGVUeXBlLCBkYXRhKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VUZXh0IChwYXJzZXIpIHtcbiAgICBwYXJzZXIudGV4dE5vZGUgPSB0ZXh0b3B0cyhwYXJzZXIub3B0LCBwYXJzZXIudGV4dE5vZGUpXG4gICAgaWYgKHBhcnNlci50ZXh0Tm9kZSkgZW1pdChwYXJzZXIsICdvbnRleHQnLCBwYXJzZXIudGV4dE5vZGUpXG4gICAgcGFyc2VyLnRleHROb2RlID0gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHRvcHRzIChvcHQsIHRleHQpIHtcbiAgICBpZiAob3B0LnRyaW0pIHRleHQgPSB0ZXh0LnRyaW0oKVxuICAgIGlmIChvcHQubm9ybWFsaXplKSB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICByZXR1cm4gdGV4dFxuICB9XG5cbiAgZnVuY3Rpb24gZXJyb3IgKHBhcnNlciwgZXIpIHtcbiAgICBjbG9zZVRleHQocGFyc2VyKVxuICAgIGlmIChwYXJzZXIudHJhY2tQb3NpdGlvbikge1xuICAgICAgZXIgKz0gJ1xcbkxpbmU6ICcgKyBwYXJzZXIubGluZSArXG4gICAgICAgICdcXG5Db2x1bW46ICcgKyBwYXJzZXIuY29sdW1uICtcbiAgICAgICAgJ1xcbkNoYXI6ICcgKyBwYXJzZXIuY1xuICAgIH1cbiAgICBlciA9IG5ldyBFcnJvcihlcilcbiAgICBwYXJzZXIuZXJyb3IgPSBlclxuICAgIGVtaXQocGFyc2VyLCAnb25lcnJvcicsIGVyKVxuICAgIHJldHVybiBwYXJzZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuZCAocGFyc2VyKSB7XG4gICAgaWYgKHBhcnNlci5zYXdSb290ICYmICFwYXJzZXIuY2xvc2VkUm9vdCkgc3RyaWN0RmFpbChwYXJzZXIsICdVbmNsb3NlZCByb290IHRhZycpXG4gICAgaWYgKChwYXJzZXIuc3RhdGUgIT09IFMuQkVHSU4pICYmXG4gICAgICAocGFyc2VyLnN0YXRlICE9PSBTLkJFR0lOX1dISVRFU1BBQ0UpICYmXG4gICAgICAocGFyc2VyLnN0YXRlICE9PSBTLlRFWFQpKSB7XG4gICAgICBlcnJvcihwYXJzZXIsICdVbmV4cGVjdGVkIGVuZCcpXG4gICAgfVxuICAgIGNsb3NlVGV4dChwYXJzZXIpXG4gICAgcGFyc2VyLmMgPSAnJ1xuICAgIHBhcnNlci5jbG9zZWQgPSB0cnVlXG4gICAgZW1pdChwYXJzZXIsICdvbmVuZCcpXG4gICAgU0FYUGFyc2VyLmNhbGwocGFyc2VyLCBwYXJzZXIuc3RyaWN0LCBwYXJzZXIub3B0KVxuICAgIHJldHVybiBwYXJzZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmljdEZhaWwgKHBhcnNlciwgbWVzc2FnZSkge1xuICAgIGlmICh0eXBlb2YgcGFyc2VyICE9PSAnb2JqZWN0JyB8fCAhKHBhcnNlciBpbnN0YW5jZW9mIFNBWFBhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYmFkIGNhbGwgdG8gc3RyaWN0RmFpbCcpXG4gICAgfVxuICAgIGlmIChwYXJzZXIuc3RyaWN0KSB7XG4gICAgICBlcnJvcihwYXJzZXIsIG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV3VGFnIChwYXJzZXIpIHtcbiAgICBpZiAoIXBhcnNlci5zdHJpY3QpIHBhcnNlci50YWdOYW1lID0gcGFyc2VyLnRhZ05hbWVbcGFyc2VyLmxvb3NlQ2FzZV0oKVxuICAgIHZhciBwYXJlbnQgPSBwYXJzZXIudGFnc1twYXJzZXIudGFncy5sZW5ndGggLSAxXSB8fCBwYXJzZXJcbiAgICB2YXIgdGFnID0gcGFyc2VyLnRhZyA9IHsgbmFtZTogcGFyc2VyLnRhZ05hbWUsIGF0dHJpYnV0ZXM6IHt9IH1cblxuICAgIC8vIHdpbGwgYmUgb3ZlcnJpZGRlbiBpZiB0YWcgY29udGFpbHMgYW4geG1sbnM9XCJmb29cIiBvciB4bWxuczpmb289XCJiYXJcIlxuICAgIGlmIChwYXJzZXIub3B0LnhtbG5zKSB7XG4gICAgICB0YWcubnMgPSBwYXJlbnQubnNcbiAgICB9XG4gICAgcGFyc2VyLmF0dHJpYkxpc3QubGVuZ3RoID0gMFxuICAgIGVtaXROb2RlKHBhcnNlciwgJ29ub3BlbnRhZ3N0YXJ0JywgdGFnKVxuICB9XG5cbiAgZnVuY3Rpb24gcW5hbWUgKG5hbWUsIGF0dHJpYnV0ZSkge1xuICAgIHZhciBpID0gbmFtZS5pbmRleE9mKCc6JylcbiAgICB2YXIgcXVhbE5hbWUgPSBpIDwgMCA/IFsgJycsIG5hbWUgXSA6IG5hbWUuc3BsaXQoJzonKVxuICAgIHZhciBwcmVmaXggPSBxdWFsTmFtZVswXVxuICAgIHZhciBsb2NhbCA9IHF1YWxOYW1lWzFdXG5cbiAgICAvLyA8eCBcInhtbG5zXCI9XCJodHRwOi8vZm9vXCI+XG4gICAgaWYgKGF0dHJpYnV0ZSAmJiBuYW1lID09PSAneG1sbnMnKSB7XG4gICAgICBwcmVmaXggPSAneG1sbnMnXG4gICAgICBsb2NhbCA9ICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJlZml4OiBwcmVmaXgsIGxvY2FsOiBsb2NhbCB9XG4gIH1cblxuICBmdW5jdGlvbiBhdHRyaWIgKHBhcnNlcikge1xuICAgIGlmICghcGFyc2VyLnN0cmljdCkge1xuICAgICAgcGFyc2VyLmF0dHJpYk5hbWUgPSBwYXJzZXIuYXR0cmliTmFtZVtwYXJzZXIubG9vc2VDYXNlXSgpXG4gICAgfVxuXG4gICAgaWYgKHBhcnNlci5hdHRyaWJMaXN0LmluZGV4T2YocGFyc2VyLmF0dHJpYk5hbWUpICE9PSAtMSB8fFxuICAgICAgcGFyc2VyLnRhZy5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KHBhcnNlci5hdHRyaWJOYW1lKSkge1xuICAgICAgcGFyc2VyLmF0dHJpYk5hbWUgPSBwYXJzZXIuYXR0cmliVmFsdWUgPSAnJ1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHBhcnNlci5vcHQueG1sbnMpIHtcbiAgICAgIHZhciBxbiA9IHFuYW1lKHBhcnNlci5hdHRyaWJOYW1lLCB0cnVlKVxuICAgICAgdmFyIHByZWZpeCA9IHFuLnByZWZpeFxuICAgICAgdmFyIGxvY2FsID0gcW4ubG9jYWxcblxuICAgICAgaWYgKHByZWZpeCA9PT0gJ3htbG5zJykge1xuICAgICAgICAvLyBuYW1lc3BhY2UgYmluZGluZyBhdHRyaWJ1dGUuIHB1c2ggdGhlIGJpbmRpbmcgaW50byBzY29wZVxuICAgICAgICBpZiAobG9jYWwgPT09ICd4bWwnICYmIHBhcnNlci5hdHRyaWJWYWx1ZSAhPT0gWE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLFxuICAgICAgICAgICAgJ3htbDogcHJlZml4IG11c3QgYmUgYm91bmQgdG8gJyArIFhNTF9OQU1FU1BBQ0UgKyAnXFxuJyArXG4gICAgICAgICAgICAnQWN0dWFsOiAnICsgcGFyc2VyLmF0dHJpYlZhbHVlKVxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsID09PSAneG1sbnMnICYmIHBhcnNlci5hdHRyaWJWYWx1ZSAhPT0gWE1MTlNfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsXG4gICAgICAgICAgICAneG1sbnM6IHByZWZpeCBtdXN0IGJlIGJvdW5kIHRvICcgKyBYTUxOU19OQU1FU1BBQ0UgKyAnXFxuJyArXG4gICAgICAgICAgICAnQWN0dWFsOiAnICsgcGFyc2VyLmF0dHJpYlZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0YWcgPSBwYXJzZXIudGFnXG4gICAgICAgICAgdmFyIHBhcmVudCA9IHBhcnNlci50YWdzW3BhcnNlci50YWdzLmxlbmd0aCAtIDFdIHx8IHBhcnNlclxuICAgICAgICAgIGlmICh0YWcubnMgPT09IHBhcmVudC5ucykge1xuICAgICAgICAgICAgdGFnLm5zID0gT2JqZWN0LmNyZWF0ZShwYXJlbnQubnMpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRhZy5uc1tsb2NhbF0gPSBwYXJzZXIuYXR0cmliVmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBkZWZlciBvbmF0dHJpYnV0ZSBldmVudHMgdW50aWwgYWxsIGF0dHJpYnV0ZXMgaGF2ZSBiZWVuIHNlZW5cbiAgICAgIC8vIHNvIGFueSBuZXcgYmluZGluZ3MgY2FuIHRha2UgZWZmZWN0LiBwcmVzZXJ2ZSBhdHRyaWJ1dGUgb3JkZXJcbiAgICAgIC8vIHNvIGRlZmVycmVkIGV2ZW50cyBjYW4gYmUgZW1pdHRlZCBpbiBkb2N1bWVudCBvcmRlclxuICAgICAgcGFyc2VyLmF0dHJpYkxpc3QucHVzaChbcGFyc2VyLmF0dHJpYk5hbWUsIHBhcnNlci5hdHRyaWJWYWx1ZV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIG5vbi14bWxucyBtb2RlLCB3ZSBjYW4gZW1pdCB0aGUgZXZlbnQgcmlnaHQgYXdheVxuICAgICAgcGFyc2VyLnRhZy5hdHRyaWJ1dGVzW3BhcnNlci5hdHRyaWJOYW1lXSA9IHBhcnNlci5hdHRyaWJWYWx1ZVxuICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25hdHRyaWJ1dGUnLCB7XG4gICAgICAgIG5hbWU6IHBhcnNlci5hdHRyaWJOYW1lLFxuICAgICAgICB2YWx1ZTogcGFyc2VyLmF0dHJpYlZhbHVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHBhcnNlci5hdHRyaWJOYW1lID0gcGFyc2VyLmF0dHJpYlZhbHVlID0gJydcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5UYWcgKHBhcnNlciwgc2VsZkNsb3NpbmcpIHtcbiAgICBpZiAocGFyc2VyLm9wdC54bWxucykge1xuICAgICAgLy8gZW1pdCBuYW1lc3BhY2UgYmluZGluZyBldmVudHNcbiAgICAgIHZhciB0YWcgPSBwYXJzZXIudGFnXG5cbiAgICAgIC8vIGFkZCBuYW1lc3BhY2UgaW5mbyB0byB0YWdcbiAgICAgIHZhciBxbiA9IHFuYW1lKHBhcnNlci50YWdOYW1lKVxuICAgICAgdGFnLnByZWZpeCA9IHFuLnByZWZpeFxuICAgICAgdGFnLmxvY2FsID0gcW4ubG9jYWxcbiAgICAgIHRhZy51cmkgPSB0YWcubnNbcW4ucHJlZml4XSB8fCAnJ1xuXG4gICAgICBpZiAodGFnLnByZWZpeCAmJiAhdGFnLnVyaSkge1xuICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ1VuYm91bmQgbmFtZXNwYWNlIHByZWZpeDogJyArXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocGFyc2VyLnRhZ05hbWUpKVxuICAgICAgICB0YWcudXJpID0gcW4ucHJlZml4XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSBwYXJzZXIudGFnc1twYXJzZXIudGFncy5sZW5ndGggLSAxXSB8fCBwYXJzZXJcbiAgICAgIGlmICh0YWcubnMgJiYgcGFyZW50Lm5zICE9PSB0YWcubnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGFnLm5zKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25vcGVubmFtZXNwYWNlJywge1xuICAgICAgICAgICAgcHJlZml4OiBwLFxuICAgICAgICAgICAgdXJpOiB0YWcubnNbcF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBoYW5kbGUgZGVmZXJyZWQgb25hdHRyaWJ1dGUgZXZlbnRzXG4gICAgICAvLyBOb3RlOiBkbyBub3QgYXBwbHkgZGVmYXVsdCBucyB0byBhdHRyaWJ1dGVzOlxuICAgICAgLy8gICBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMteG1sLW5hbWVzLyNkZWZhdWx0aW5nXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhcnNlci5hdHRyaWJMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgbnYgPSBwYXJzZXIuYXR0cmliTGlzdFtpXVxuICAgICAgICB2YXIgbmFtZSA9IG52WzBdXG4gICAgICAgIHZhciB2YWx1ZSA9IG52WzFdXG4gICAgICAgIHZhciBxdWFsTmFtZSA9IHFuYW1lKG5hbWUsIHRydWUpXG4gICAgICAgIHZhciBwcmVmaXggPSBxdWFsTmFtZS5wcmVmaXhcbiAgICAgICAgdmFyIGxvY2FsID0gcXVhbE5hbWUubG9jYWxcbiAgICAgICAgdmFyIHVyaSA9IHByZWZpeCA9PT0gJycgPyAnJyA6ICh0YWcubnNbcHJlZml4XSB8fCAnJylcbiAgICAgICAgdmFyIGEgPSB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgbG9jYWw6IGxvY2FsLFxuICAgICAgICAgIHVyaTogdXJpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSdzIGFueSBhdHRyaWJ1dGVzIHdpdGggYW4gdW5kZWZpbmVkIG5hbWVzcGFjZSxcbiAgICAgICAgLy8gdGhlbiBmYWlsIG9uIHRoZW0gbm93LlxuICAgICAgICBpZiAocHJlZml4ICYmIHByZWZpeCAhPT0gJ3htbG5zJyAmJiAhdXJpKSB7XG4gICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdVbmJvdW5kIG5hbWVzcGFjZSBwcmVmaXg6ICcgK1xuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJlZml4KSlcbiAgICAgICAgICBhLnVyaSA9IHByZWZpeFxuICAgICAgICB9XG4gICAgICAgIHBhcnNlci50YWcuYXR0cmlidXRlc1tuYW1lXSA9IGFcbiAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25hdHRyaWJ1dGUnLCBhKVxuICAgICAgfVxuICAgICAgcGFyc2VyLmF0dHJpYkxpc3QubGVuZ3RoID0gMFxuICAgIH1cblxuICAgIHBhcnNlci50YWcuaXNTZWxmQ2xvc2luZyA9ICEhc2VsZkNsb3NpbmdcblxuICAgIC8vIHByb2Nlc3MgdGhlIHRhZ1xuICAgIHBhcnNlci5zYXdSb290ID0gdHJ1ZVxuICAgIHBhcnNlci50YWdzLnB1c2gocGFyc2VyLnRhZylcbiAgICBlbWl0Tm9kZShwYXJzZXIsICdvbm9wZW50YWcnLCBwYXJzZXIudGFnKVxuICAgIGlmICghc2VsZkNsb3NpbmcpIHtcbiAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3IgPHNjcmlwdD4gaW4gbm9uLXN0cmljdCBtb2RlLlxuICAgICAgaWYgKCFwYXJzZXIubm9zY3JpcHQgJiYgcGFyc2VyLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5TQ1JJUFRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICAgICAgfVxuICAgICAgcGFyc2VyLnRhZyA9IG51bGxcbiAgICAgIHBhcnNlci50YWdOYW1lID0gJydcbiAgICB9XG4gICAgcGFyc2VyLmF0dHJpYk5hbWUgPSBwYXJzZXIuYXR0cmliVmFsdWUgPSAnJ1xuICAgIHBhcnNlci5hdHRyaWJMaXN0Lmxlbmd0aCA9IDBcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlVGFnIChwYXJzZXIpIHtcbiAgICBpZiAoIXBhcnNlci50YWdOYW1lKSB7XG4gICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ1dlaXJkIGVtcHR5IGNsb3NlIHRhZy4nKVxuICAgICAgcGFyc2VyLnRleHROb2RlICs9ICc8Lz4nXG4gICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwYXJzZXIuc2NyaXB0KSB7XG4gICAgICBpZiAocGFyc2VyLnRhZ05hbWUgIT09ICdzY3JpcHQnKSB7XG4gICAgICAgIHBhcnNlci5zY3JpcHQgKz0gJzwvJyArIHBhcnNlci50YWdOYW1lICsgJz4nXG4gICAgICAgIHBhcnNlci50YWdOYW1lID0gJydcbiAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5TQ1JJUFRcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbnNjcmlwdCcsIHBhcnNlci5zY3JpcHQpXG4gICAgICBwYXJzZXIuc2NyaXB0ID0gJydcbiAgICB9XG5cbiAgICAvLyBmaXJzdCBtYWtlIHN1cmUgdGhhdCB0aGUgY2xvc2luZyB0YWcgYWN0dWFsbHkgZXhpc3RzLlxuICAgIC8vIDxhPjxiPjwvYz48L2I+PC9hPiB3aWxsIGNsb3NlIGV2ZXJ5dGhpbmcsIG90aGVyd2lzZS5cbiAgICB2YXIgdCA9IHBhcnNlci50YWdzLmxlbmd0aFxuICAgIHZhciB0YWdOYW1lID0gcGFyc2VyLnRhZ05hbWVcbiAgICBpZiAoIXBhcnNlci5zdHJpY3QpIHtcbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lW3BhcnNlci5sb29zZUNhc2VdKClcbiAgICB9XG4gICAgdmFyIGNsb3NlVG8gPSB0YWdOYW1lXG4gICAgd2hpbGUgKHQtLSkge1xuICAgICAgdmFyIGNsb3NlID0gcGFyc2VyLnRhZ3NbdF1cbiAgICAgIGlmIChjbG9zZS5uYW1lICE9PSBjbG9zZVRvKSB7XG4gICAgICAgIC8vIGZhaWwgdGhlIGZpcnN0IHRpbWUgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdVbmV4cGVjdGVkIGNsb3NlIHRhZycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRpZG4ndCBmaW5kIGl0LiAgd2UgYWxyZWFkeSBmYWlsZWQgZm9yIHN0cmljdCwgc28ganVzdCBhYm9ydC5cbiAgICBpZiAodCA8IDApIHtcbiAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnVW5tYXRjaGVkIGNsb3NpbmcgdGFnOiAnICsgcGFyc2VyLnRhZ05hbWUpXG4gICAgICBwYXJzZXIudGV4dE5vZGUgKz0gJzwvJyArIHBhcnNlci50YWdOYW1lICsgJz4nXG4gICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBwYXJzZXIudGFnTmFtZSA9IHRhZ05hbWVcbiAgICB2YXIgcyA9IHBhcnNlci50YWdzLmxlbmd0aFxuICAgIHdoaWxlIChzLS0gPiB0KSB7XG4gICAgICB2YXIgdGFnID0gcGFyc2VyLnRhZyA9IHBhcnNlci50YWdzLnBvcCgpXG4gICAgICBwYXJzZXIudGFnTmFtZSA9IHBhcnNlci50YWcubmFtZVxuICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25jbG9zZXRhZycsIHBhcnNlci50YWdOYW1lKVxuXG4gICAgICB2YXIgeCA9IHt9XG4gICAgICBmb3IgKHZhciBpIGluIHRhZy5ucykge1xuICAgICAgICB4W2ldID0gdGFnLm5zW2ldXG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSBwYXJzZXIudGFnc1twYXJzZXIudGFncy5sZW5ndGggLSAxXSB8fCBwYXJzZXJcbiAgICAgIGlmIChwYXJzZXIub3B0LnhtbG5zICYmIHRhZy5ucyAhPT0gcGFyZW50Lm5zKSB7XG4gICAgICAgIC8vIHJlbW92ZSBuYW1lc3BhY2UgYmluZGluZ3MgaW50cm9kdWNlZCBieSB0YWdcbiAgICAgICAgT2JqZWN0LmtleXModGFnLm5zKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgdmFyIG4gPSB0YWcubnNbcF1cbiAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNsb3NlbmFtZXNwYWNlJywgeyBwcmVmaXg6IHAsIHVyaTogbiB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodCA9PT0gMCkgcGFyc2VyLmNsb3NlZFJvb3QgPSB0cnVlXG4gICAgcGFyc2VyLnRhZ05hbWUgPSBwYXJzZXIuYXR0cmliVmFsdWUgPSBwYXJzZXIuYXR0cmliTmFtZSA9ICcnXG4gICAgcGFyc2VyLmF0dHJpYkxpc3QubGVuZ3RoID0gMFxuICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVFxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFbnRpdHkgKHBhcnNlcikge1xuICAgIHZhciBlbnRpdHkgPSBwYXJzZXIuZW50aXR5XG4gICAgdmFyIGVudGl0eUxDID0gZW50aXR5LnRvTG93ZXJDYXNlKClcbiAgICB2YXIgbnVtXG4gICAgdmFyIG51bVN0ciA9ICcnXG5cbiAgICBpZiAocGFyc2VyLkVOVElUSUVTW2VudGl0eV0pIHtcbiAgICAgIHJldHVybiBwYXJzZXIuRU5USVRJRVNbZW50aXR5XVxuICAgIH1cbiAgICBpZiAocGFyc2VyLkVOVElUSUVTW2VudGl0eUxDXSkge1xuICAgICAgcmV0dXJuIHBhcnNlci5FTlRJVElFU1tlbnRpdHlMQ11cbiAgICB9XG4gICAgZW50aXR5ID0gZW50aXR5TENcbiAgICBpZiAoZW50aXR5LmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICBpZiAoZW50aXR5LmNoYXJBdCgxKSA9PT0gJ3gnKSB7XG4gICAgICAgIGVudGl0eSA9IGVudGl0eS5zbGljZSgyKVxuICAgICAgICBudW0gPSBwYXJzZUludChlbnRpdHksIDE2KVxuICAgICAgICBudW1TdHIgPSBudW0udG9TdHJpbmcoMTYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRpdHkgPSBlbnRpdHkuc2xpY2UoMSlcbiAgICAgICAgbnVtID0gcGFyc2VJbnQoZW50aXR5LCAxMClcbiAgICAgICAgbnVtU3RyID0gbnVtLnRvU3RyaW5nKDEwKVxuICAgICAgfVxuICAgIH1cbiAgICBlbnRpdHkgPSBlbnRpdHkucmVwbGFjZSgvXjArLywgJycpXG4gICAgaWYgKGlzTmFOKG51bSkgfHwgbnVtU3RyLnRvTG93ZXJDYXNlKCkgIT09IGVudGl0eSkge1xuICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIGNoYXJhY3RlciBlbnRpdHknKVxuICAgICAgcmV0dXJuICcmJyArIHBhcnNlci5lbnRpdHkgKyAnOydcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQobnVtKVxuICB9XG5cbiAgZnVuY3Rpb24gYmVnaW5XaGl0ZVNwYWNlIChwYXJzZXIsIGMpIHtcbiAgICBpZiAoYyA9PT0gJzwnKSB7XG4gICAgICBwYXJzZXIuc3RhdGUgPSBTLk9QRU5fV0FLQVxuICAgICAgcGFyc2VyLnN0YXJ0VGFnUG9zaXRpb24gPSBwYXJzZXIucG9zaXRpb25cbiAgICB9IGVsc2UgaWYgKCFpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgIC8vIGhhdmUgdG8gcHJvY2VzcyB0aGlzIGFzIGEgdGV4dCBub2RlLlxuICAgICAgLy8gd2VpcmQsIGJ1dCBoYXBwZW5zLlxuICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdOb24td2hpdGVzcGFjZSBiZWZvcmUgZmlyc3QgdGFnLicpXG4gICAgICBwYXJzZXIudGV4dE5vZGUgPSBjXG4gICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGFyQXQgKGNodW5rLCBpKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgaWYgKGkgPCBjaHVuay5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IGNodW5rLmNoYXJBdChpKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmdW5jdGlvbiB3cml0ZSAoY2h1bmspIHtcbiAgICB2YXIgcGFyc2VyID0gdGhpc1xuICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICB0aHJvdyB0aGlzLmVycm9yXG4gICAgfVxuICAgIGlmIChwYXJzZXIuY2xvc2VkKSB7XG4gICAgICByZXR1cm4gZXJyb3IocGFyc2VyLFxuICAgICAgICAnQ2Fubm90IHdyaXRlIGFmdGVyIGNsb3NlLiBBc3NpZ24gYW4gb25yZWFkeSBoYW5kbGVyLicpXG4gICAgfVxuICAgIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuZChwYXJzZXIpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2h1bmsgPT09ICdvYmplY3QnKSB7XG4gICAgICBjaHVuayA9IGNodW5rLnRvU3RyaW5nKClcbiAgICB9XG4gICAgdmFyIGkgPSAwXG4gICAgdmFyIGMgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjID0gY2hhckF0KGNodW5rLCBpKyspXG4gICAgICBwYXJzZXIuYyA9IGNcblxuICAgICAgaWYgKCFjKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJzZXIudHJhY2tQb3NpdGlvbikge1xuICAgICAgICBwYXJzZXIucG9zaXRpb24rK1xuICAgICAgICBpZiAoYyA9PT0gJ1xcbicpIHtcbiAgICAgICAgICBwYXJzZXIubGluZSsrXG4gICAgICAgICAgcGFyc2VyLmNvbHVtbiA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJzZXIuY29sdW1uKytcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHBhcnNlci5zdGF0ZSkge1xuICAgICAgICBjYXNlIFMuQkVHSU46XG4gICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5CRUdJTl9XSElURVNQQUNFXG4gICAgICAgICAgaWYgKGMgPT09ICdcXHVGRUZGJykge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYmVnaW5XaGl0ZVNwYWNlKHBhcnNlciwgYylcbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5CRUdJTl9XSElURVNQQUNFOlxuICAgICAgICAgIGJlZ2luV2hpdGVTcGFjZShwYXJzZXIsIGMpXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuVEVYVDpcbiAgICAgICAgICBpZiAocGFyc2VyLnNhd1Jvb3QgJiYgIXBhcnNlci5jbG9zZWRSb290KSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRpID0gaSAtIDFcbiAgICAgICAgICAgIHdoaWxlIChjICYmIGMgIT09ICc8JyAmJiBjICE9PSAnJicpIHtcbiAgICAgICAgICAgICAgYyA9IGNoYXJBdChjaHVuaywgaSsrKVxuICAgICAgICAgICAgICBpZiAoYyAmJiBwYXJzZXIudHJhY2tQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHBhcnNlci5wb3NpdGlvbisrXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICBwYXJzZXIubGluZSsrXG4gICAgICAgICAgICAgICAgICBwYXJzZXIuY29sdW1uID0gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwYXJzZXIuY29sdW1uKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci50ZXh0Tm9kZSArPSBjaHVuay5zdWJzdHJpbmcoc3RhcnRpLCBpIC0gMSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICc8JyAmJiAhKHBhcnNlci5zYXdSb290ICYmIHBhcnNlci5jbG9zZWRSb290ICYmICFwYXJzZXIuc3RyaWN0KSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5PUEVOX1dBS0FcbiAgICAgICAgICAgIHBhcnNlci5zdGFydFRhZ1Bvc2l0aW9uID0gcGFyc2VyLnBvc2l0aW9uXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNXaGl0ZXNwYWNlKGMpICYmICghcGFyc2VyLnNhd1Jvb3QgfHwgcGFyc2VyLmNsb3NlZFJvb3QpKSB7XG4gICAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnVGV4dCBkYXRhIG91dHNpZGUgb2Ygcm9vdCBub2RlLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYyA9PT0gJyYnKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuVEVYVF9FTlRJVFlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnNlci50ZXh0Tm9kZSArPSBjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlNDUklQVDpcbiAgICAgICAgICAvLyBvbmx5IG5vbi1zdHJpY3RcbiAgICAgICAgICBpZiAoYyA9PT0gJzwnKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNDUklQVF9FTkRJTkdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCArPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlNDUklQVF9FTkRJTkc6XG4gICAgICAgICAgaWYgKGMgPT09ICcvJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DTE9TRV9UQUdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCArPSAnPCcgKyBjXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNDUklQVFxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5PUEVOX1dBS0E6XG4gICAgICAgICAgLy8gZWl0aGVyIGEgLywgPywgISwgb3IgdGV4dCBpcyBjb21pbmcgbmV4dC5cbiAgICAgICAgICBpZiAoYyA9PT0gJyEnKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNHTUxfREVDTFxuICAgICAgICAgICAgcGFyc2VyLnNnbWxEZWNsID0gJydcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgLy8gd2FpdCBmb3IgaXQuLi5cbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZVN0YXJ0LCBjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5PUEVOX1RBR1xuICAgICAgICAgICAgcGFyc2VyLnRhZ05hbWUgPSBjXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnLycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0xPU0VfVEFHXG4gICAgICAgICAgICBwYXJzZXIudGFnTmFtZSA9ICcnXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnPycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuUFJPQ19JTlNUXG4gICAgICAgICAgICBwYXJzZXIucHJvY0luc3ROYW1lID0gcGFyc2VyLnByb2NJbnN0Qm9keSA9ICcnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnVW5lbmNvZGVkIDwnKVxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgd2FzIHNvbWUgd2hpdGVzcGFjZSwgdGhlbiBhZGQgdGhhdCBpbi5cbiAgICAgICAgICAgIGlmIChwYXJzZXIuc3RhcnRUYWdQb3NpdGlvbiArIDEgPCBwYXJzZXIucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgdmFyIHBhZCA9IHBhcnNlci5wb3NpdGlvbiAtIHBhcnNlci5zdGFydFRhZ1Bvc2l0aW9uXG4gICAgICAgICAgICAgIGMgPSBuZXcgQXJyYXkocGFkKS5qb2luKCcgJykgKyBjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZXIudGV4dE5vZGUgKz0gJzwnICsgY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5URVhUXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlNHTUxfREVDTDpcbiAgICAgICAgICBpZiAoKHBhcnNlci5zZ21sRGVjbCArIGMpLnRvVXBwZXJDYXNlKCkgPT09IENEQVRBKSB7XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbm9wZW5jZGF0YScpXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkNEQVRBXG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLmNkYXRhID0gJydcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlci5zZ21sRGVjbCArIGMgPT09ICctLScpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ09NTUVOVFxuICAgICAgICAgICAgcGFyc2VyLmNvbW1lbnQgPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLnNnbWxEZWNsID0gJydcbiAgICAgICAgICB9IGVsc2UgaWYgKChwYXJzZXIuc2dtbERlY2wgKyBjKS50b1VwcGVyQ2FzZSgpID09PSBET0NUWVBFKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkRPQ1RZUEVcbiAgICAgICAgICAgIGlmIChwYXJzZXIuZG9jdHlwZSB8fCBwYXJzZXIuc2F3Um9vdCkge1xuICAgICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlcixcbiAgICAgICAgICAgICAgICAnSW5hcHByb3ByaWF0ZWx5IGxvY2F0ZWQgZG9jdHlwZSBkZWNsYXJhdGlvbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZXIuZG9jdHlwZSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc2dtbERlY2wgPSAnJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbnNnbWxkZWNsYXJhdGlvbicsIHBhcnNlci5zZ21sRGVjbClcbiAgICAgICAgICAgIHBhcnNlci5zZ21sRGVjbCA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzUXVvdGUoYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0dNTF9ERUNMX1FVT1RFRFxuICAgICAgICAgICAgcGFyc2VyLnNnbWxEZWNsICs9IGNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnNnbWxEZWNsICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuU0dNTF9ERUNMX1FVT1RFRDpcbiAgICAgICAgICBpZiAoYyA9PT0gcGFyc2VyLnEpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0dNTF9ERUNMXG4gICAgICAgICAgICBwYXJzZXIucSA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnNlci5zZ21sRGVjbCArPSBjXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuRE9DVFlQRTpcbiAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICAgIGVtaXROb2RlKHBhcnNlciwgJ29uZG9jdHlwZScsIHBhcnNlci5kb2N0eXBlKVxuICAgICAgICAgICAgcGFyc2VyLmRvY3R5cGUgPSB0cnVlIC8vIGp1c3QgcmVtZW1iZXIgdGhhdCB3ZSBzYXcgaXQuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlci5kb2N0eXBlICs9IGNcbiAgICAgICAgICAgIGlmIChjID09PSAnWycpIHtcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5ET0NUWVBFX0RURFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1F1b3RlKGMpKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuRE9DVFlQRV9RVU9URURcbiAgICAgICAgICAgICAgcGFyc2VyLnEgPSBjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkRPQ1RZUEVfUVVPVEVEOlxuICAgICAgICAgIHBhcnNlci5kb2N0eXBlICs9IGNcbiAgICAgICAgICBpZiAoYyA9PT0gcGFyc2VyLnEpIHtcbiAgICAgICAgICAgIHBhcnNlci5xID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuRE9DVFlQRVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5ET0NUWVBFX0RURDpcbiAgICAgICAgICBwYXJzZXIuZG9jdHlwZSArPSBjXG4gICAgICAgICAgaWYgKGMgPT09ICddJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5ET0NUWVBFXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1F1b3RlKGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkRPQ1RZUEVfRFREX1FVT1RFRFxuICAgICAgICAgICAgcGFyc2VyLnEgPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkRPQ1RZUEVfRFREX1FVT1RFRDpcbiAgICAgICAgICBwYXJzZXIuZG9jdHlwZSArPSBjXG4gICAgICAgICAgaWYgKGMgPT09IHBhcnNlci5xKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkRPQ1RZUEVfRFREXG4gICAgICAgICAgICBwYXJzZXIucSA9ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkNPTU1FTlQ6XG4gICAgICAgICAgaWYgKGMgPT09ICctJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DT01NRU5UX0VORElOR1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuY29tbWVudCArPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkNPTU1FTlRfRU5ESU5HOlxuICAgICAgICAgIGlmIChjID09PSAnLScpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ09NTUVOVF9FTkRFRFxuICAgICAgICAgICAgcGFyc2VyLmNvbW1lbnQgPSB0ZXh0b3B0cyhwYXJzZXIub3B0LCBwYXJzZXIuY29tbWVudClcbiAgICAgICAgICAgIGlmIChwYXJzZXIuY29tbWVudCkge1xuICAgICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNvbW1lbnQnLCBwYXJzZXIuY29tbWVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5jb21tZW50ID0gJydcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLmNvbW1lbnQgKz0gJy0nICsgY1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DT01NRU5UXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkNPTU1FTlRfRU5ERUQ6XG4gICAgICAgICAgaWYgKGMgIT09ICc+Jykge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdNYWxmb3JtZWQgY29tbWVudCcpXG4gICAgICAgICAgICAvLyBhbGxvdyA8IS0tIGJsYWggLS0gYmxvbyAtLT4gaW4gbm9uLXN0cmljdCBtb2RlLFxuICAgICAgICAgICAgLy8gd2hpY2ggaXMgYSBjb21tZW50IG9mIFwiIGJsYWggLS0gYmxvbyBcIlxuICAgICAgICAgICAgcGFyc2VyLmNvbW1lbnQgKz0gJy0tJyArIGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ09NTUVOVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ0RBVEE6XG4gICAgICAgICAgaWYgKGMgPT09ICddJykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5DREFUQV9FTkRJTkdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLmNkYXRhICs9IGNcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ0RBVEFfRU5ESU5HOlxuICAgICAgICAgIGlmIChjID09PSAnXScpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0RBVEFfRU5ESU5HXzJcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLmNkYXRhICs9ICddJyArIGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0RBVEFcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ0RBVEFfRU5ESU5HXzI6XG4gICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgaWYgKHBhcnNlci5jZGF0YSkge1xuICAgICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmNkYXRhJywgcGFyc2VyLmNkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25jbG9zZWNkYXRhJylcbiAgICAgICAgICAgIHBhcnNlci5jZGF0YSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICddJykge1xuICAgICAgICAgICAgcGFyc2VyLmNkYXRhICs9ICddJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZXIuY2RhdGEgKz0gJ11dJyArIGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0RBVEFcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuUFJPQ19JTlNUOlxuICAgICAgICAgIGlmIChjID09PSAnPycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuUFJPQ19JTlNUX0VORElOR1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlBST0NfSU5TVF9CT0RZXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlci5wcm9jSW5zdE5hbWUgKz0gY1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5QUk9DX0lOU1RfQk9EWTpcbiAgICAgICAgICBpZiAoIXBhcnNlci5wcm9jSW5zdEJvZHkgJiYgaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz8nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlBST0NfSU5TVF9FTkRJTkdcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnByb2NJbnN0Qm9keSArPSBjXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLlBST0NfSU5TVF9FTkRJTkc6XG4gICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgZW1pdE5vZGUocGFyc2VyLCAnb25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24nLCB7XG4gICAgICAgICAgICAgIG5hbWU6IHBhcnNlci5wcm9jSW5zdE5hbWUsXG4gICAgICAgICAgICAgIGJvZHk6IHBhcnNlci5wcm9jSW5zdEJvZHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYXJzZXIucHJvY0luc3ROYW1lID0gcGFyc2VyLnByb2NJbnN0Qm9keSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnByb2NJbnN0Qm9keSArPSAnPycgKyBjXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlBST0NfSU5TVF9CT0RZXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLk9QRU5fVEFHOlxuICAgICAgICAgIGlmIChpc01hdGNoKG5hbWVCb2R5LCBjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnRhZ05hbWUgKz0gY1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUYWcocGFyc2VyKVxuICAgICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuT1BFTl9UQUdfU0xBU0hcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIGNoYXJhY3RlciBpbiB0YWcgbmFtZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuT1BFTl9UQUdfU0xBU0g6XG4gICAgICAgICAgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgb3BlblRhZyhwYXJzZXIsIHRydWUpXG4gICAgICAgICAgICBjbG9zZVRhZyhwYXJzZXIpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnRm9yd2FyZC1zbGFzaCBpbiBvcGVuaW5nIHRhZyBub3QgZm9sbG93ZWQgYnkgPicpXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5BVFRSSUI6XG4gICAgICAgICAgLy8gaGF2ZW4ndCByZWFkIHRoZSBhdHRyaWJ1dGUgbmFtZSB5ZXQuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgb3BlblRhZyhwYXJzZXIpXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnLycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuT1BFTl9UQUdfU0xBU0hcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZVN0YXJ0LCBjKSkge1xuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYk5hbWUgPSBjXG4gICAgICAgICAgICBwYXJzZXIuYXR0cmliVmFsdWUgPSAnJ1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfTkFNRVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgYXR0cmlidXRlIG5hbWUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5BVFRSSUJfTkFNRTpcbiAgICAgICAgICBpZiAoYyA9PT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9WQUxVRVxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0F0dHJpYnV0ZSB3aXRob3V0IHZhbHVlJylcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJWYWx1ZSA9IHBhcnNlci5hdHRyaWJOYW1lXG4gICAgICAgICAgICBhdHRyaWIocGFyc2VyKVxuICAgICAgICAgICAgb3BlblRhZyhwYXJzZXIpXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX05BTUVfU0FXX1dISVRFXG4gICAgICAgICAgfSBlbHNlIGlmIChpc01hdGNoKG5hbWVCb2R5LCBjKSkge1xuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYk5hbWUgKz0gY1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgYXR0cmlidXRlIG5hbWUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5BVFRSSUJfTkFNRV9TQVdfV0hJVEU6XG4gICAgICAgICAgaWYgKGMgPT09ICc9Jykge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfVkFMVUVcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdBdHRyaWJ1dGUgd2l0aG91dCB2YWx1ZScpXG4gICAgICAgICAgICBwYXJzZXIudGFnLmF0dHJpYnV0ZXNbcGFyc2VyLmF0dHJpYk5hbWVdID0gJydcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJWYWx1ZSA9ICcnXG4gICAgICAgICAgICBlbWl0Tm9kZShwYXJzZXIsICdvbmF0dHJpYnV0ZScsIHtcbiAgICAgICAgICAgICAgbmFtZTogcGFyc2VyLmF0dHJpYk5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJOYW1lID0gJydcbiAgICAgICAgICAgIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgICAgb3BlblRhZyhwYXJzZXIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZVN0YXJ0LCBjKSkge1xuICAgICAgICAgICAgICBwYXJzZXIuYXR0cmliTmFtZSA9IGNcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJfTkFNRVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIGF0dHJpYnV0ZSBuYW1lJylcbiAgICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFOlxuICAgICAgICAgIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIGlmIChpc1F1b3RlKGMpKSB7XG4gICAgICAgICAgICBwYXJzZXIucSA9IGNcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX1FVT1RFRFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ1VucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZScpXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9WQUxVRV9VTlFVT1RFRFxuICAgICAgICAgICAgcGFyc2VyLmF0dHJpYlZhbHVlID0gY1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5BVFRSSUJfVkFMVUVfUVVPVEVEOlxuICAgICAgICAgIGlmIChjICE9PSBwYXJzZXIucSkge1xuICAgICAgICAgICAgaWYgKGMgPT09ICcmJykge1xuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9WQUxVRV9FTlRJVFlfUVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyc2VyLmF0dHJpYlZhbHVlICs9IGNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGF0dHJpYihwYXJzZXIpXG4gICAgICAgICAgcGFyc2VyLnEgPSAnJ1xuICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX0NMT1NFRFxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9DTE9TRUQ6XG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09ICc+Jykge1xuICAgICAgICAgICAgb3BlblRhZyhwYXJzZXIpXG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSAnLycpIHtcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuT1BFTl9UQUdfU0xBU0hcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzTWF0Y2gobmFtZVN0YXJ0LCBjKSkge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdObyB3aGl0ZXNwYWNlIGJldHdlZW4gYXR0cmlidXRlcycpXG4gICAgICAgICAgICBwYXJzZXIuYXR0cmliTmFtZSA9IGNcbiAgICAgICAgICAgIHBhcnNlci5hdHRyaWJWYWx1ZSA9ICcnXG4gICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLkFUVFJJQl9OQU1FXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnSW52YWxpZCBhdHRyaWJ1dGUgbmFtZScpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9VTlFVT1RFRDpcbiAgICAgICAgICBpZiAoIWlzQXR0cmliRW5kKGMpKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gJyYnKSB7XG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX0VOVElUWV9VXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJzZXIuYXR0cmliVmFsdWUgKz0gY1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYXR0cmliKHBhcnNlcilcbiAgICAgICAgICBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBvcGVuVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VyLnN0YXRlID0gUy5BVFRSSUJcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBjYXNlIFMuQ0xPU0VfVEFHOlxuICAgICAgICAgIGlmICghcGFyc2VyLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm90TWF0Y2gobmFtZVN0YXJ0LCBjKSkge1xuICAgICAgICAgICAgICBpZiAocGFyc2VyLnNjcmlwdCkge1xuICAgICAgICAgICAgICAgIHBhcnNlci5zY3JpcHQgKz0gJzwvJyArIGNcbiAgICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSBTLlNDUklQVFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnSW52YWxpZCB0YWduYW1lIGluIGNsb3NpbmcgdGFnLicpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcnNlci50YWdOYW1lID0gY1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBjbG9zZVRhZyhwYXJzZXIpXG4gICAgICAgICAgfSBlbHNlIGlmIChpc01hdGNoKG5hbWVCb2R5LCBjKSkge1xuICAgICAgICAgICAgcGFyc2VyLnRhZ05hbWUgKz0gY1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VyLnNjcmlwdCkge1xuICAgICAgICAgICAgcGFyc2VyLnNjcmlwdCArPSAnPC8nICsgcGFyc2VyLnRhZ05hbWVcbiAgICAgICAgICAgIHBhcnNlci50YWdOYW1lID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuU0NSSVBUXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNXaGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgICAgICAgIHN0cmljdEZhaWwocGFyc2VyLCAnSW52YWxpZCB0YWduYW1lIGluIGNsb3NpbmcgdGFnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IFMuQ0xPU0VfVEFHX1NBV19XSElURVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5DTE9TRV9UQUdfU0FXX1dISVRFOlxuICAgICAgICAgIGlmIChpc1doaXRlc3BhY2UoYykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjID09PSAnPicpIHtcbiAgICAgICAgICAgIGNsb3NlVGFnKHBhcnNlcilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RyaWN0RmFpbChwYXJzZXIsICdJbnZhbGlkIGNoYXJhY3RlcnMgaW4gY2xvc2luZyB0YWcnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuXG4gICAgICAgIGNhc2UgUy5URVhUX0VOVElUWTpcbiAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9FTlRJVFlfUTpcbiAgICAgICAgY2FzZSBTLkFUVFJJQl9WQUxVRV9FTlRJVFlfVTpcbiAgICAgICAgICB2YXIgcmV0dXJuU3RhdGVcbiAgICAgICAgICB2YXIgYnVmZmVyXG4gICAgICAgICAgc3dpdGNoIChwYXJzZXIuc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgUy5URVhUX0VOVElUWTpcbiAgICAgICAgICAgICAgcmV0dXJuU3RhdGUgPSBTLlRFWFRcbiAgICAgICAgICAgICAgYnVmZmVyID0gJ3RleHROb2RlJ1xuICAgICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgICBjYXNlIFMuQVRUUklCX1ZBTFVFX0VOVElUWV9ROlxuICAgICAgICAgICAgICByZXR1cm5TdGF0ZSA9IFMuQVRUUklCX1ZBTFVFX1FVT1RFRFxuICAgICAgICAgICAgICBidWZmZXIgPSAnYXR0cmliVmFsdWUnXG4gICAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICAgIGNhc2UgUy5BVFRSSUJfVkFMVUVfRU5USVRZX1U6XG4gICAgICAgICAgICAgIHJldHVyblN0YXRlID0gUy5BVFRSSUJfVkFMVUVfVU5RVU9URURcbiAgICAgICAgICAgICAgYnVmZmVyID0gJ2F0dHJpYlZhbHVlJ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjID09PSAnOycpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZXIub3B0LnVucGFyc2VkRW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcnNlZEVudGl0eSA9IHBhcnNlRW50aXR5KHBhcnNlcilcbiAgICAgICAgICAgICAgcGFyc2VyLmVudGl0eSA9ICcnXG4gICAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IHJldHVyblN0YXRlXG4gICAgICAgICAgICAgIHBhcnNlci53cml0ZShwYXJzZWRFbnRpdHkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJzZXJbYnVmZmVyXSArPSBwYXJzZUVudGl0eShwYXJzZXIpXG4gICAgICAgICAgICAgIHBhcnNlci5lbnRpdHkgPSAnJ1xuICAgICAgICAgICAgICBwYXJzZXIuc3RhdGUgPSByZXR1cm5TdGF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoaXNNYXRjaChwYXJzZXIuZW50aXR5Lmxlbmd0aCA/IGVudGl0eUJvZHkgOiBlbnRpdHlTdGFydCwgYykpIHtcbiAgICAgICAgICAgIHBhcnNlci5lbnRpdHkgKz0gY1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJpY3RGYWlsKHBhcnNlciwgJ0ludmFsaWQgY2hhcmFjdGVyIGluIGVudGl0eSBuYW1lJylcbiAgICAgICAgICAgIHBhcnNlcltidWZmZXJdICs9ICcmJyArIHBhcnNlci5lbnRpdHkgKyBjXG4gICAgICAgICAgICBwYXJzZXIuZW50aXR5ID0gJydcbiAgICAgICAgICAgIHBhcnNlci5zdGF0ZSA9IHJldHVyblN0YXRlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcblxuICAgICAgICBkZWZhdWx0OiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHBhcnNlciwgJ1Vua25vd24gc3RhdGU6ICcgKyBwYXJzZXIuc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIHdoaWxlXG5cbiAgICBpZiAocGFyc2VyLnBvc2l0aW9uID49IHBhcnNlci5idWZmZXJDaGVja1Bvc2l0aW9uKSB7XG4gICAgICBjaGVja0J1ZmZlckxlbmd0aChwYXJzZXIpXG4gICAgfVxuICAgIHJldHVybiBwYXJzZXJcbiAgfVxuXG4gIC8qISBodHRwOi8vbXRocy5iZS9mcm9tY29kZXBvaW50IHYwLjEuMCBieSBAbWF0aGlhcyAqL1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIVN0cmluZy5mcm9tQ29kZVBvaW50KSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4gICAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yXG4gICAgICB2YXIgZnJvbUNvZGVQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIE1BWF9TSVpFID0gMHg0MDAwXG4gICAgICAgIHZhciBjb2RlVW5pdHMgPSBbXVxuICAgICAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxuICAgICAgICB2YXIgbG93U3Vycm9nYXRlXG4gICAgICAgIHZhciBpbmRleCA9IC0xXG4gICAgICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFpc0Zpbml0ZShjb2RlUG9pbnQpIHx8IC8vIGBOYU5gLCBgK0luZmluaXR5YCwgb3IgYC1JbmZpbml0eWBcbiAgICAgICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XG4gICAgICAgICAgICBjb2RlUG9pbnQgPiAweDEwRkZGRiB8fCAvLyBub3QgYSB2YWxpZCBVbmljb2RlIGNvZGUgcG9pbnRcbiAgICAgICAgICAgIGZsb29yKGNvZGVQb2ludCkgIT09IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCBjb2RlIHBvaW50OiAnICsgY29kZVBvaW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4RkZGRikgeyAvLyBCTVAgY29kZSBwb2ludFxuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KVxuICAgICAgICAgIH0gZWxzZSB7IC8vIEFzdHJhbCBjb2RlIHBvaW50OyBzcGxpdCBpbiBzdXJyb2dhdGUgaGFsdmVzXG4gICAgICAgICAgICAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgICAgICAgIGhpZ2hTdXJyb2dhdGUgPSAoY29kZVBvaW50ID4+IDEwKSArIDB4RDgwMFxuICAgICAgICAgICAgbG93U3Vycm9nYXRlID0gKGNvZGVQb2ludCAlIDB4NDAwKSArIDB4REMwMFxuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IE1BWF9TSVpFKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGNvZGVVbml0cylcbiAgICAgICAgICAgIGNvZGVVbml0cy5sZW5ndGggPSAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcsICdmcm9tQ29kZVBvaW50Jywge1xuICAgICAgICAgIHZhbHVlOiBmcm9tQ29kZVBvaW50LFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgU3RyaW5nLmZyb21Db2RlUG9pbnQgPSBmcm9tQ29kZVBvaW50XG4gICAgICB9XG4gICAgfSgpKVxuICB9XG59KSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNheCA9IHt9IDogZXhwb3J0cylcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgZXhwb3J0cy5zdHJpcEJPTSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmIChzdHJbMF0gPT09ICdcXHVGRUZGJykge1xuICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwgIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMi43XG4oZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICB2YXIgcHJlZml4TWF0Y2g7XG5cbiAgcHJlZml4TWF0Y2ggPSBuZXcgUmVnRXhwKC8oPyF4bWxucyleLio6Lyk7XG5cbiAgZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgZXhwb3J0cy5maXJzdENoYXJMb3dlckNhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuXG4gIGV4cG9ydHMuc3RyaXBQcmVmaXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UocHJlZml4TWF0Y2gsICcnKTtcbiAgfTtcblxuICBleHBvcnRzLnBhcnNlTnVtYmVycyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICghaXNOYU4oc3RyKSkge1xuICAgICAgc3RyID0gc3RyICUgMSA9PT0gMCA/IHBhcnNlSW50KHN0ciwgMTApIDogcGFyc2VGbG9hdChzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9O1xuXG4gIGV4cG9ydHMucGFyc2VCb29sZWFucyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc3RyKSkge1xuICAgICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGJvbSwgZGVmYXVsdHMsIGV2ZW50cywgaXNFbXB0eSwgcHJvY2Vzc0l0ZW0sIHByb2Nlc3NvcnMsIHNheCwgc2V0SW1tZWRpYXRlLFxuICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgc2F4ID0gcmVxdWlyZSgnc2F4Jyk7XG5cbiAgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbiAgYm9tID0gcmVxdWlyZSgnLi9ib20nKTtcblxuICBwcm9jZXNzb3JzID0gcmVxdWlyZSgnLi9wcm9jZXNzb3JzJyk7XG5cbiAgc2V0SW1tZWRpYXRlID0gcmVxdWlyZSgndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuXG4gIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpLmRlZmF1bHRzO1xuXG4gIGlzRW1wdHkgPSBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgKHRoaW5nICE9IG51bGwpICYmIE9iamVjdC5rZXlzKHRoaW5nKS5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgcHJvY2Vzc0l0ZW0gPSBmdW5jdGlvbihwcm9jZXNzb3JzLCBpdGVtLCBrZXkpIHtcbiAgICB2YXIgaSwgbGVuLCBwcm9jZXNzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHByb2Nlc3NvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHByb2Nlc3MgPSBwcm9jZXNzb3JzW2ldO1xuICAgICAgaXRlbSA9IHByb2Nlc3MoaXRlbSwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgZXhwb3J0cy5QYXJzZXIgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChQYXJzZXIsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gUGFyc2VyKG9wdHMpIHtcbiAgICAgIHRoaXMucGFyc2VTdHJpbmdQcm9taXNlID0gYmluZCh0aGlzLnBhcnNlU3RyaW5nUHJvbWlzZSwgdGhpcyk7XG4gICAgICB0aGlzLnBhcnNlU3RyaW5nID0gYmluZCh0aGlzLnBhcnNlU3RyaW5nLCB0aGlzKTtcbiAgICAgIHRoaXMucmVzZXQgPSBiaW5kKHRoaXMucmVzZXQsIHRoaXMpO1xuICAgICAgdGhpcy5hc3NpZ25PclB1c2ggPSBiaW5kKHRoaXMuYXNzaWduT3JQdXNoLCB0aGlzKTtcbiAgICAgIHRoaXMucHJvY2Vzc0FzeW5jID0gYmluZCh0aGlzLnByb2Nlc3NBc3luYywgdGhpcyk7XG4gICAgICB2YXIga2V5LCByZWYsIHZhbHVlO1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGV4cG9ydHMuUGFyc2VyKSkge1xuICAgICAgICByZXR1cm4gbmV3IGV4cG9ydHMuUGFyc2VyKG9wdHMpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgICByZWYgPSBkZWZhdWx0c1tcIjAuMlwiXTtcbiAgICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChyZWYsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICB2YWx1ZSA9IHJlZltrZXldO1xuICAgICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZm9yIChrZXkgaW4gb3B0cykge1xuICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChvcHRzLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgdmFsdWUgPSBvcHRzW2tleV07XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnhtbG5zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy54bWxuc2tleSA9IHRoaXMub3B0aW9ucy5hdHRya2V5ICsgXCJuc1wiO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub3JtYWxpemVUYWdzKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnRhZ05hbWVQcm9jZXNzb3JzKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnRhZ05hbWVQcm9jZXNzb3JzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLnRhZ05hbWVQcm9jZXNzb3JzLnVuc2hpZnQocHJvY2Vzc29ycy5ub3JtYWxpemUpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIFBhcnNlci5wcm90b3R5cGUucHJvY2Vzc0FzeW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2h1bmssIGVycjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLnJlbWFpbmluZy5sZW5ndGggPD0gdGhpcy5vcHRpb25zLmNodW5rU2l6ZSkge1xuICAgICAgICAgIGNodW5rID0gdGhpcy5yZW1haW5pbmc7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmcgPSAnJztcbiAgICAgICAgICB0aGlzLnNheFBhcnNlciA9IHRoaXMuc2F4UGFyc2VyLndyaXRlKGNodW5rKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zYXhQYXJzZXIuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHVuayA9IHRoaXMucmVtYWluaW5nLnN1YnN0cigwLCB0aGlzLm9wdGlvbnMuY2h1bmtTaXplKTtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHRoaXMucmVtYWluaW5nLnN1YnN0cih0aGlzLm9wdGlvbnMuY2h1bmtTaXplLCB0aGlzLnJlbWFpbmluZy5sZW5ndGgpO1xuICAgICAgICAgIHRoaXMuc2F4UGFyc2VyID0gdGhpcy5zYXhQYXJzZXIud3JpdGUoY2h1bmspO1xuICAgICAgICAgIHJldHVybiBzZXRJbW1lZGlhdGUodGhpcy5wcm9jZXNzQXN5bmMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgICAgZXJyID0gZXJyb3IxO1xuICAgICAgICBpZiAoIXRoaXMuc2F4UGFyc2VyLmVyclRocm93bikge1xuICAgICAgICAgIHRoaXMuc2F4UGFyc2VyLmVyclRocm93biA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFBhcnNlci5wcm90b3R5cGUuYXNzaWduT3JQdXNoID0gZnVuY3Rpb24ob2JqLCBrZXksIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAoIShrZXkgaW4gb2JqKSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5leHBsaWNpdEFycmF5KSB7XG4gICAgICAgICAgcmV0dXJuIG9ialtrZXldID0gbmV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9ialtrZXldID0gW25ld1ZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEob2JqW2tleV0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICBvYmpba2V5XSA9IFtvYmpba2V5XV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialtrZXldLnB1c2gobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBQYXJzZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXR0cmtleSwgY2hhcmtleSwgb250ZXh0LCBzdGFjaztcbiAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnNheFBhcnNlciA9IHNheC5wYXJzZXIodGhpcy5vcHRpb25zLnN0cmljdCwge1xuICAgICAgICB0cmltOiBmYWxzZSxcbiAgICAgICAgbm9ybWFsaXplOiBmYWxzZSxcbiAgICAgICAgeG1sbnM6IHRoaXMub3B0aW9ucy54bWxuc1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNheFBhcnNlci5lcnJUaHJvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2F4UGFyc2VyLm9uZXJyb3IgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgX3RoaXMuc2F4UGFyc2VyLnJlc3VtZSgpO1xuICAgICAgICAgIGlmICghX3RoaXMuc2F4UGFyc2VyLmVyclRocm93bikge1xuICAgICAgICAgICAgX3RoaXMuc2F4UGFyc2VyLmVyclRocm93biA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKTtcbiAgICAgIHRoaXMuc2F4UGFyc2VyLm9uZW5kID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLnNheFBhcnNlci5lbmRlZCkge1xuICAgICAgICAgICAgX3RoaXMuc2F4UGFyc2VyLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5lbWl0KFwiZW5kXCIsIF90aGlzLnJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICB0aGlzLnNheFBhcnNlci5lbmRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5FWFBMSUNJVF9DSEFSS0VZID0gdGhpcy5vcHRpb25zLmV4cGxpY2l0Q2hhcmtleTtcbiAgICAgIHRoaXMucmVzdWx0T2JqZWN0ID0gbnVsbDtcbiAgICAgIHN0YWNrID0gW107XG4gICAgICBhdHRya2V5ID0gdGhpcy5vcHRpb25zLmF0dHJrZXk7XG4gICAgICBjaGFya2V5ID0gdGhpcy5vcHRpb25zLmNoYXJrZXk7XG4gICAgICB0aGlzLnNheFBhcnNlci5vbm9wZW50YWcgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB2YXIga2V5LCBuZXdWYWx1ZSwgb2JqLCBwcm9jZXNzZWRLZXksIHJlZjtcbiAgICAgICAgICBvYmogPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIG9ialtjaGFya2V5XSA9IFwiXCI7XG4gICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmlnbm9yZUF0dHJzKSB7XG4gICAgICAgICAgICByZWYgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgICAgICAgaWYgKCFoYXNQcm9wLmNhbGwocmVmLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgaWYgKCEoYXR0cmtleSBpbiBvYmopICYmICFfdGhpcy5vcHRpb25zLm1lcmdlQXR0cnMpIHtcbiAgICAgICAgICAgICAgICBvYmpbYXR0cmtleV0gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5ld1ZhbHVlID0gX3RoaXMub3B0aW9ucy5hdHRyVmFsdWVQcm9jZXNzb3JzID8gcHJvY2Vzc0l0ZW0oX3RoaXMub3B0aW9ucy5hdHRyVmFsdWVQcm9jZXNzb3JzLCBub2RlLmF0dHJpYnV0ZXNba2V5XSwga2V5KSA6IG5vZGUuYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgICBwcm9jZXNzZWRLZXkgPSBfdGhpcy5vcHRpb25zLmF0dHJOYW1lUHJvY2Vzc29ycyA/IHByb2Nlc3NJdGVtKF90aGlzLm9wdGlvbnMuYXR0ck5hbWVQcm9jZXNzb3JzLCBrZXkpIDoga2V5O1xuICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5tZXJnZUF0dHJzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYXNzaWduT3JQdXNoKG9iaiwgcHJvY2Vzc2VkS2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqW2F0dHJrZXldW3Byb2Nlc3NlZEtleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBvYmpbXCIjbmFtZVwiXSA9IF90aGlzLm9wdGlvbnMudGFnTmFtZVByb2Nlc3NvcnMgPyBwcm9jZXNzSXRlbShfdGhpcy5vcHRpb25zLnRhZ05hbWVQcm9jZXNzb3JzLCBub2RlLm5hbWUpIDogbm9kZS5uYW1lO1xuICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnhtbG5zKSB7XG4gICAgICAgICAgICBvYmpbX3RoaXMub3B0aW9ucy54bWxuc2tleV0gPSB7XG4gICAgICAgICAgICAgIHVyaTogbm9kZS51cmksXG4gICAgICAgICAgICAgIGxvY2FsOiBub2RlLmxvY2FsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3RhY2sucHVzaChvYmopO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICB0aGlzLnNheFBhcnNlci5vbmNsb3NldGFnID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY2RhdGEsIGVtcHR5U3RyLCBrZXksIG5vZGUsIG5vZGVOYW1lLCBvYmosIG9iakNsb25lLCBvbGQsIHMsIHhwYXRoO1xuICAgICAgICAgIG9iaiA9IHN0YWNrLnBvcCgpO1xuICAgICAgICAgIG5vZGVOYW1lID0gb2JqW1wiI25hbWVcIl07XG4gICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmV4cGxpY2l0Q2hpbGRyZW4gfHwgIV90aGlzLm9wdGlvbnMucHJlc2VydmVDaGlsZHJlbk9yZGVyKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW1wiI25hbWVcIl07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvYmouY2RhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNkYXRhID0gb2JqLmNkYXRhO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5jZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcyA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChvYmpbY2hhcmtleV0ubWF0Y2goL15cXHMqJC8pICYmICFjZGF0YSkge1xuICAgICAgICAgICAgZW1wdHlTdHIgPSBvYmpbY2hhcmtleV07XG4gICAgICAgICAgICBkZWxldGUgb2JqW2NoYXJrZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy50cmltKSB7XG4gICAgICAgICAgICAgIG9ialtjaGFya2V5XSA9IG9ialtjaGFya2V5XS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgb2JqW2NoYXJrZXldID0gb2JqW2NoYXJrZXldLnJlcGxhY2UoL1xcc3syLH0vZywgXCIgXCIpLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialtjaGFya2V5XSA9IF90aGlzLm9wdGlvbnMudmFsdWVQcm9jZXNzb3JzID8gcHJvY2Vzc0l0ZW0oX3RoaXMub3B0aW9ucy52YWx1ZVByb2Nlc3NvcnMsIG9ialtjaGFya2V5XSwgbm9kZU5hbWUpIDogb2JqW2NoYXJrZXldO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAxICYmIGNoYXJrZXkgaW4gb2JqICYmICFfdGhpcy5FWFBMSUNJVF9DSEFSS0VZKSB7XG4gICAgICAgICAgICAgIG9iaiA9IG9ialtjaGFya2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRW1wdHkob2JqKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5vcHRpb25zLmVtcHR5VGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIG9iaiA9IF90aGlzLm9wdGlvbnMuZW1wdHlUYWcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iaiA9IF90aGlzLm9wdGlvbnMuZW1wdHlUYWcgIT09ICcnID8gX3RoaXMub3B0aW9ucy5lbXB0eVRhZyA6IGVtcHR5U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy52YWxpZGF0b3IgIT0gbnVsbCkge1xuICAgICAgICAgICAgeHBhdGggPSBcIi9cIiArICgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBpLCBsZW4sIHJlc3VsdHM7XG4gICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gc3RhY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlID0gc3RhY2tbaV07XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG5vZGVbXCIjbmFtZVwiXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9KSgpKS5jb25jYXQobm9kZU5hbWUpLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgZXJyO1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmogPSBfdGhpcy5vcHRpb25zLnZhbGlkYXRvcih4cGF0aCwgcyAmJiBzW25vZGVOYW1lXSwgb2JqKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgICAgICAgICAgZXJyID0gZXJyb3IxO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuZXhwbGljaXRDaGlsZHJlbiAmJiAhX3RoaXMub3B0aW9ucy5tZXJnZUF0dHJzICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMucHJlc2VydmVDaGlsZHJlbk9yZGVyKSB7XG4gICAgICAgICAgICAgIG5vZGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5hdHRya2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIG5vZGVbX3RoaXMub3B0aW9ucy5hdHRya2V5XSA9IG9ialtfdGhpcy5vcHRpb25zLmF0dHJrZXldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbX3RoaXMub3B0aW9ucy5hdHRya2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuY2hhcnNBc0NoaWxkcmVuICYmIF90aGlzLm9wdGlvbnMuY2hhcmtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBub2RlW190aGlzLm9wdGlvbnMuY2hhcmtleV0gPSBvYmpbX3RoaXMub3B0aW9ucy5jaGFya2V5XTtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqW190aGlzLm9wdGlvbnMuY2hhcmtleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5vZGVbX3RoaXMub3B0aW9ucy5jaGlsZGtleV0gPSBvYmo7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2JqID0gbm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocykge1xuICAgICAgICAgICAgICBzW190aGlzLm9wdGlvbnMuY2hpbGRrZXldID0gc1tfdGhpcy5vcHRpb25zLmNoaWxka2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgb2JqQ2xvbmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1Byb3AuY2FsbChvYmosIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIG9iakNsb25lW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzW190aGlzLm9wdGlvbnMuY2hpbGRrZXldLnB1c2gob2JqQ2xvbmUpO1xuICAgICAgICAgICAgICBkZWxldGUgb2JqW1wiI25hbWVcIl07XG4gICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMSAmJiBjaGFya2V5IGluIG9iaiAmJiAhX3RoaXMuRVhQTElDSVRfQ0hBUktFWSkge1xuICAgICAgICAgICAgICAgIG9iaiA9IG9ialtjaGFya2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFzc2lnbk9yUHVzaChzLCBub2RlTmFtZSwgb2JqKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuZXhwbGljaXRSb290KSB7XG4gICAgICAgICAgICAgIG9sZCA9IG9iajtcbiAgICAgICAgICAgICAgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgICAgb2JqW25vZGVOYW1lXSA9IG9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnJlc3VsdE9iamVjdCA9IG9iajtcbiAgICAgICAgICAgIF90aGlzLnNheFBhcnNlci5lbmRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZW1pdChcImVuZFwiLCBfdGhpcy5yZXN1bHRPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgICAgb250ZXh0ID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgdmFyIGNoYXJDaGlsZCwgcztcbiAgICAgICAgICBzID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIHNbY2hhcmtleV0gKz0gdGV4dDtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmV4cGxpY2l0Q2hpbGRyZW4gJiYgX3RoaXMub3B0aW9ucy5wcmVzZXJ2ZUNoaWxkcmVuT3JkZXIgJiYgX3RoaXMub3B0aW9ucy5jaGFyc0FzQ2hpbGRyZW4gJiYgKF90aGlzLm9wdGlvbnMuaW5jbHVkZVdoaXRlQ2hhcnMgfHwgdGV4dC5yZXBsYWNlKC9cXFxcbi9nLCAnJykudHJpbSgpICE9PSAnJykpIHtcbiAgICAgICAgICAgICAgc1tfdGhpcy5vcHRpb25zLmNoaWxka2V5XSA9IHNbX3RoaXMub3B0aW9ucy5jaGlsZGtleV0gfHwgW107XG4gICAgICAgICAgICAgIGNoYXJDaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAnI25hbWUnOiAnX190ZXh0X18nXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGNoYXJDaGlsZFtjaGFya2V5XSA9IHRleHQ7XG4gICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgIGNoYXJDaGlsZFtjaGFya2V5XSA9IGNoYXJDaGlsZFtjaGFya2V5XS5yZXBsYWNlKC9cXHN7Mix9L2csIFwiIFwiKS50cmltKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc1tfdGhpcy5vcHRpb25zLmNoaWxka2V5XS5wdXNoKGNoYXJDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKTtcbiAgICAgIHRoaXMuc2F4UGFyc2VyLm9udGV4dCA9IG9udGV4dDtcbiAgICAgIHJldHVybiB0aGlzLnNheFBhcnNlci5vbmNkYXRhID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgdmFyIHM7XG4gICAgICAgICAgcyA9IG9udGV4dCh0ZXh0KTtcbiAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgcmV0dXJuIHMuY2RhdGEgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH07XG5cbiAgICBQYXJzZXIucHJvdG90eXBlLnBhcnNlU3RyaW5nID0gZnVuY3Rpb24oc3RyLCBjYikge1xuICAgICAgdmFyIGVycjtcbiAgICAgIGlmICgoY2IgIT0gbnVsbCkgJiYgdHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5vbihcImVuZFwiLCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuIGNiKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpO1xuICAgICAgICBpZiAoc3RyLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIiwgbnVsbCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gYm9tLnN0cmlwQk9NKHN0cik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXN5bmMpIHtcbiAgICAgICAgICB0aGlzLnJlbWFpbmluZyA9IHN0cjtcbiAgICAgICAgICBzZXRJbW1lZGlhdGUodGhpcy5wcm9jZXNzQXN5bmMpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnNheFBhcnNlcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYXhQYXJzZXIud3JpdGUoc3RyKS5jbG9zZSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgIGVyciA9IGVycm9yMTtcbiAgICAgICAgaWYgKCEodGhpcy5zYXhQYXJzZXIuZXJyVGhyb3duIHx8IHRoaXMuc2F4UGFyc2VyLmVuZGVkKSkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnNheFBhcnNlci5lcnJUaHJvd24gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2F4UGFyc2VyLmVuZGVkKSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIFBhcnNlci5wcm90b3R5cGUucGFyc2VTdHJpbmdQcm9taXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGFyc2VTdHJpbmcoc3RyLCBmdW5jdGlvbihlcnIsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhcnNlcjtcblxuICB9KShldmVudHMpO1xuXG4gIGV4cG9ydHMucGFyc2VTdHJpbmcgPSBmdW5jdGlvbihzdHIsIGEsIGIpIHtcbiAgICB2YXIgY2IsIG9wdGlvbnMsIHBhcnNlcjtcbiAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IgPSBiO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gYTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgcGFyc2VyID0gbmV3IGV4cG9ydHMuUGFyc2VyKG9wdGlvbnMpO1xuICAgIHJldHVybiBwYXJzZXIucGFyc2VTdHJpbmcoc3RyLCBjYik7XG4gIH07XG5cbiAgZXhwb3J0cy5wYXJzZVN0cmluZ1Byb21pc2UgPSBmdW5jdGlvbihzdHIsIGEpIHtcbiAgICB2YXIgb3B0aW9ucywgcGFyc2VyO1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSBhO1xuICAgIH1cbiAgICBwYXJzZXIgPSBuZXcgZXhwb3J0cy5QYXJzZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZVN0cmluZ1Byb21pc2Uoc3RyKTtcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuN1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIGJ1aWxkZXIsIGRlZmF1bHRzLCBwYXJzZXIsIHByb2Nlc3NvcnMsXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuICBidWlsZGVyID0gcmVxdWlyZSgnLi9idWlsZGVyJyk7XG5cbiAgcGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXInKTtcblxuICBwcm9jZXNzb3JzID0gcmVxdWlyZSgnLi9wcm9jZXNzb3JzJyk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0cyA9IGRlZmF1bHRzLmRlZmF1bHRzO1xuXG4gIGV4cG9ydHMucHJvY2Vzc29ycyA9IHByb2Nlc3NvcnM7XG5cbiAgZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChWYWxpZGF0aW9uRXJyb3IsIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIFZhbGlkYXRpb25FcnJvcjtcblxuICB9KShFcnJvcik7XG5cbiAgZXhwb3J0cy5CdWlsZGVyID0gYnVpbGRlci5CdWlsZGVyO1xuXG4gIGV4cG9ydHMuUGFyc2VyID0gcGFyc2VyLlBhcnNlcjtcblxuICBleHBvcnRzLnBhcnNlU3RyaW5nID0gcGFyc2VyLnBhcnNlU3RyaW5nO1xuXG4gIGV4cG9ydHMucGFyc2VTdHJpbmdQcm9taXNlID0gcGFyc2VyLnBhcnNlU3RyaW5nUHJvbWlzZTtcblxufSkuY2FsbCh0aGlzKTtcbiIsICJjb25zdCBmaWVsZHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5maWVsZHMuZmVlZCA9IFtcbiAgWydhdXRob3InLCAnY3JlYXRvciddLFxuICBbJ2RjOnB1Ymxpc2hlcicsICdwdWJsaXNoZXInXSxcbiAgWydkYzpjcmVhdG9yJywgJ2NyZWF0b3InXSxcbiAgWydkYzpzb3VyY2UnLCAnc291cmNlJ10sXG4gIFsnZGM6dGl0bGUnLCAndGl0bGUnXSxcbiAgWydkYzp0eXBlJywgJ3R5cGUnXSxcbiAgJ3RpdGxlJyxcbiAgJ2Rlc2NyaXB0aW9uJyxcbiAgJ2F1dGhvcicsXG4gICdwdWJEYXRlJyxcbiAgJ3dlYk1hc3RlcicsXG4gICdtYW5hZ2luZ0VkaXRvcicsXG4gICdnZW5lcmF0b3InLFxuICAnbGluaycsXG4gICdsYW5ndWFnZScsXG4gICdjb3B5cmlnaHQnLFxuICAnbGFzdEJ1aWxkRGF0ZScsXG4gICdkb2NzJyxcbiAgJ2dlbmVyYXRvcicsXG4gICd0dGwnLFxuICAncmF0aW5nJyxcbiAgJ3NraXBIb3VycycsXG4gICdza2lwRGF5cycsXG5dO1xuXG5maWVsZHMuaXRlbSA9IFtcbiAgWydhdXRob3InLCAnY3JlYXRvciddLFxuICBbJ2RjOmNyZWF0b3InLCAnY3JlYXRvciddLFxuICBbJ2RjOmRhdGUnLCAnZGF0ZSddLFxuICBbJ2RjOmxhbmd1YWdlJywgJ2xhbmd1YWdlJ10sXG4gIFsnZGM6cmlnaHRzJywgJ3JpZ2h0cyddLFxuICBbJ2RjOnNvdXJjZScsICdzb3VyY2UnXSxcbiAgWydkYzp0aXRsZScsICd0aXRsZSddLFxuICAndGl0bGUnLFxuICAnbGluaycsXG4gICdwdWJEYXRlJyxcbiAgJ2F1dGhvcicsXG4gICdzdW1tYXJ5JyxcbiAgWydjb250ZW50OmVuY29kZWQnLCAnY29udGVudDplbmNvZGVkJywge2luY2x1ZGVTbmlwcGV0OiB0cnVlfV0sXG4gICdlbmNsb3N1cmUnLFxuICAnZGM6Y3JlYXRvcicsXG4gICdkYzpkYXRlJyxcbiAgJ2NvbW1lbnRzJyxcbl07XG5cbnZhciBtYXBJdHVuZXNGaWVsZCA9IGZ1bmN0aW9uKGYpIHtcbiAgcmV0dXJuIFsnaXR1bmVzOicgKyBmLCBmXTtcbn1cblxuZmllbGRzLnBvZGNhc3RGZWVkID0gKFtcbiAgJ2F1dGhvcicsXG4gICdzdWJ0aXRsZScsXG4gICdzdW1tYXJ5JyxcbiAgJ2V4cGxpY2l0J1xuXSkubWFwKG1hcEl0dW5lc0ZpZWxkKTtcblxuZmllbGRzLnBvZGNhc3RJdGVtID0gKFtcbiAgJ2F1dGhvcicsXG4gICdzdWJ0aXRsZScsXG4gICdzdW1tYXJ5JyxcbiAgJ2V4cGxpY2l0JyxcbiAgJ2R1cmF0aW9uJyxcbiAgJ2ltYWdlJyxcbiAgJ2VwaXNvZGUnLFxuICAnaW1hZ2UnLFxuICAnc2Vhc29uJyxcbiAgJ2tleXdvcmRzJyxcbiAgJ2VwaXNvZGVUeXBlJ1xuXSkubWFwKG1hcEl0dW5lc0ZpZWxkKTtcblxuIiwgIntcIkFhY3V0ZVwiOlwiXHUwMEMxXCIsXCJhYWN1dGVcIjpcIlx1MDBFMVwiLFwiQWJyZXZlXCI6XCJcdTAxMDJcIixcImFicmV2ZVwiOlwiXHUwMTAzXCIsXCJhY1wiOlwiXHUyMjNFXCIsXCJhY2RcIjpcIlx1MjIzRlwiLFwiYWNFXCI6XCJcdTIyM0VcdTAzMzNcIixcIkFjaXJjXCI6XCJcdTAwQzJcIixcImFjaXJjXCI6XCJcdTAwRTJcIixcImFjdXRlXCI6XCJcdTAwQjRcIixcIkFjeVwiOlwiXHUwNDEwXCIsXCJhY3lcIjpcIlx1MDQzMFwiLFwiQUVsaWdcIjpcIlx1MDBDNlwiLFwiYWVsaWdcIjpcIlx1MDBFNlwiLFwiYWZcIjpcIlx1MjA2MVwiLFwiQWZyXCI6XCJcdUQ4MzVcdUREMDRcIixcImFmclwiOlwiXHVEODM1XHVERDFFXCIsXCJBZ3JhdmVcIjpcIlx1MDBDMFwiLFwiYWdyYXZlXCI6XCJcdTAwRTBcIixcImFsZWZzeW1cIjpcIlx1MjEzNVwiLFwiYWxlcGhcIjpcIlx1MjEzNVwiLFwiQWxwaGFcIjpcIlx1MDM5MVwiLFwiYWxwaGFcIjpcIlx1MDNCMVwiLFwiQW1hY3JcIjpcIlx1MDEwMFwiLFwiYW1hY3JcIjpcIlx1MDEwMVwiLFwiYW1hbGdcIjpcIlx1MkEzRlwiLFwiYW1wXCI6XCImXCIsXCJBTVBcIjpcIiZcIixcImFuZGFuZFwiOlwiXHUyQTU1XCIsXCJBbmRcIjpcIlx1MkE1M1wiLFwiYW5kXCI6XCJcdTIyMjdcIixcImFuZGRcIjpcIlx1MkE1Q1wiLFwiYW5kc2xvcGVcIjpcIlx1MkE1OFwiLFwiYW5kdlwiOlwiXHUyQTVBXCIsXCJhbmdcIjpcIlx1MjIyMFwiLFwiYW5nZVwiOlwiXHUyOUE0XCIsXCJhbmdsZVwiOlwiXHUyMjIwXCIsXCJhbmdtc2RhYVwiOlwiXHUyOUE4XCIsXCJhbmdtc2RhYlwiOlwiXHUyOUE5XCIsXCJhbmdtc2RhY1wiOlwiXHUyOUFBXCIsXCJhbmdtc2RhZFwiOlwiXHUyOUFCXCIsXCJhbmdtc2RhZVwiOlwiXHUyOUFDXCIsXCJhbmdtc2RhZlwiOlwiXHUyOUFEXCIsXCJhbmdtc2RhZ1wiOlwiXHUyOUFFXCIsXCJhbmdtc2RhaFwiOlwiXHUyOUFGXCIsXCJhbmdtc2RcIjpcIlx1MjIyMVwiLFwiYW5ncnRcIjpcIlx1MjIxRlwiLFwiYW5ncnR2YlwiOlwiXHUyMkJFXCIsXCJhbmdydHZiZFwiOlwiXHUyOTlEXCIsXCJhbmdzcGhcIjpcIlx1MjIyMlwiLFwiYW5nc3RcIjpcIlx1MDBDNVwiLFwiYW5nemFyclwiOlwiXHUyMzdDXCIsXCJBb2dvblwiOlwiXHUwMTA0XCIsXCJhb2dvblwiOlwiXHUwMTA1XCIsXCJBb3BmXCI6XCJcdUQ4MzVcdUREMzhcIixcImFvcGZcIjpcIlx1RDgzNVx1REQ1MlwiLFwiYXBhY2lyXCI6XCJcdTJBNkZcIixcImFwXCI6XCJcdTIyNDhcIixcImFwRVwiOlwiXHUyQTcwXCIsXCJhcGVcIjpcIlx1MjI0QVwiLFwiYXBpZFwiOlwiXHUyMjRCXCIsXCJhcG9zXCI6XCInXCIsXCJBcHBseUZ1bmN0aW9uXCI6XCJcdTIwNjFcIixcImFwcHJveFwiOlwiXHUyMjQ4XCIsXCJhcHByb3hlcVwiOlwiXHUyMjRBXCIsXCJBcmluZ1wiOlwiXHUwMEM1XCIsXCJhcmluZ1wiOlwiXHUwMEU1XCIsXCJBc2NyXCI6XCJcdUQ4MzVcdURDOUNcIixcImFzY3JcIjpcIlx1RDgzNVx1RENCNlwiLFwiQXNzaWduXCI6XCJcdTIyNTRcIixcImFzdFwiOlwiKlwiLFwiYXN5bXBcIjpcIlx1MjI0OFwiLFwiYXN5bXBlcVwiOlwiXHUyMjREXCIsXCJBdGlsZGVcIjpcIlx1MDBDM1wiLFwiYXRpbGRlXCI6XCJcdTAwRTNcIixcIkF1bWxcIjpcIlx1MDBDNFwiLFwiYXVtbFwiOlwiXHUwMEU0XCIsXCJhd2NvbmludFwiOlwiXHUyMjMzXCIsXCJhd2ludFwiOlwiXHUyQTExXCIsXCJiYWNrY29uZ1wiOlwiXHUyMjRDXCIsXCJiYWNrZXBzaWxvblwiOlwiXHUwM0Y2XCIsXCJiYWNrcHJpbWVcIjpcIlx1MjAzNVwiLFwiYmFja3NpbVwiOlwiXHUyMjNEXCIsXCJiYWNrc2ltZXFcIjpcIlx1MjJDRFwiLFwiQmFja3NsYXNoXCI6XCJcdTIyMTZcIixcIkJhcnZcIjpcIlx1MkFFN1wiLFwiYmFydmVlXCI6XCJcdTIyQkRcIixcImJhcndlZFwiOlwiXHUyMzA1XCIsXCJCYXJ3ZWRcIjpcIlx1MjMwNlwiLFwiYmFyd2VkZ2VcIjpcIlx1MjMwNVwiLFwiYmJya1wiOlwiXHUyM0I1XCIsXCJiYnJrdGJya1wiOlwiXHUyM0I2XCIsXCJiY29uZ1wiOlwiXHUyMjRDXCIsXCJCY3lcIjpcIlx1MDQxMVwiLFwiYmN5XCI6XCJcdTA0MzFcIixcImJkcXVvXCI6XCJcdTIwMUVcIixcImJlY2F1c1wiOlwiXHUyMjM1XCIsXCJiZWNhdXNlXCI6XCJcdTIyMzVcIixcIkJlY2F1c2VcIjpcIlx1MjIzNVwiLFwiYmVtcHR5dlwiOlwiXHUyOUIwXCIsXCJiZXBzaVwiOlwiXHUwM0Y2XCIsXCJiZXJub3VcIjpcIlx1MjEyQ1wiLFwiQmVybm91bGxpc1wiOlwiXHUyMTJDXCIsXCJCZXRhXCI6XCJcdTAzOTJcIixcImJldGFcIjpcIlx1MDNCMlwiLFwiYmV0aFwiOlwiXHUyMTM2XCIsXCJiZXR3ZWVuXCI6XCJcdTIyNkNcIixcIkJmclwiOlwiXHVEODM1XHVERDA1XCIsXCJiZnJcIjpcIlx1RDgzNVx1REQxRlwiLFwiYmlnY2FwXCI6XCJcdTIyQzJcIixcImJpZ2NpcmNcIjpcIlx1MjVFRlwiLFwiYmlnY3VwXCI6XCJcdTIyQzNcIixcImJpZ29kb3RcIjpcIlx1MkEwMFwiLFwiYmlnb3BsdXNcIjpcIlx1MkEwMVwiLFwiYmlnb3RpbWVzXCI6XCJcdTJBMDJcIixcImJpZ3NxY3VwXCI6XCJcdTJBMDZcIixcImJpZ3N0YXJcIjpcIlx1MjYwNVwiLFwiYmlndHJpYW5nbGVkb3duXCI6XCJcdTI1QkRcIixcImJpZ3RyaWFuZ2xldXBcIjpcIlx1MjVCM1wiLFwiYmlndXBsdXNcIjpcIlx1MkEwNFwiLFwiYmlndmVlXCI6XCJcdTIyQzFcIixcImJpZ3dlZGdlXCI6XCJcdTIyQzBcIixcImJrYXJvd1wiOlwiXHUyOTBEXCIsXCJibGFja2xvemVuZ2VcIjpcIlx1MjlFQlwiLFwiYmxhY2tzcXVhcmVcIjpcIlx1MjVBQVwiLFwiYmxhY2t0cmlhbmdsZVwiOlwiXHUyNUI0XCIsXCJibGFja3RyaWFuZ2xlZG93blwiOlwiXHUyNUJFXCIsXCJibGFja3RyaWFuZ2xlbGVmdFwiOlwiXHUyNUMyXCIsXCJibGFja3RyaWFuZ2xlcmlnaHRcIjpcIlx1MjVCOFwiLFwiYmxhbmtcIjpcIlx1MjQyM1wiLFwiYmxrMTJcIjpcIlx1MjU5MlwiLFwiYmxrMTRcIjpcIlx1MjU5MVwiLFwiYmxrMzRcIjpcIlx1MjU5M1wiLFwiYmxvY2tcIjpcIlx1MjU4OFwiLFwiYm5lXCI6XCI9XHUyMEU1XCIsXCJibmVxdWl2XCI6XCJcdTIyNjFcdTIwRTVcIixcImJOb3RcIjpcIlx1MkFFRFwiLFwiYm5vdFwiOlwiXHUyMzEwXCIsXCJCb3BmXCI6XCJcdUQ4MzVcdUREMzlcIixcImJvcGZcIjpcIlx1RDgzNVx1REQ1M1wiLFwiYm90XCI6XCJcdTIyQTVcIixcImJvdHRvbVwiOlwiXHUyMkE1XCIsXCJib3d0aWVcIjpcIlx1MjJDOFwiLFwiYm94Ym94XCI6XCJcdTI5QzlcIixcImJveGRsXCI6XCJcdTI1MTBcIixcImJveGRMXCI6XCJcdTI1NTVcIixcImJveERsXCI6XCJcdTI1NTZcIixcImJveERMXCI6XCJcdTI1NTdcIixcImJveGRyXCI6XCJcdTI1MENcIixcImJveGRSXCI6XCJcdTI1NTJcIixcImJveERyXCI6XCJcdTI1NTNcIixcImJveERSXCI6XCJcdTI1NTRcIixcImJveGhcIjpcIlx1MjUwMFwiLFwiYm94SFwiOlwiXHUyNTUwXCIsXCJib3hoZFwiOlwiXHUyNTJDXCIsXCJib3hIZFwiOlwiXHUyNTY0XCIsXCJib3hoRFwiOlwiXHUyNTY1XCIsXCJib3hIRFwiOlwiXHUyNTY2XCIsXCJib3hodVwiOlwiXHUyNTM0XCIsXCJib3hIdVwiOlwiXHUyNTY3XCIsXCJib3hoVVwiOlwiXHUyNTY4XCIsXCJib3hIVVwiOlwiXHUyNTY5XCIsXCJib3htaW51c1wiOlwiXHUyMjlGXCIsXCJib3hwbHVzXCI6XCJcdTIyOUVcIixcImJveHRpbWVzXCI6XCJcdTIyQTBcIixcImJveHVsXCI6XCJcdTI1MThcIixcImJveHVMXCI6XCJcdTI1NUJcIixcImJveFVsXCI6XCJcdTI1NUNcIixcImJveFVMXCI6XCJcdTI1NURcIixcImJveHVyXCI6XCJcdTI1MTRcIixcImJveHVSXCI6XCJcdTI1NThcIixcImJveFVyXCI6XCJcdTI1NTlcIixcImJveFVSXCI6XCJcdTI1NUFcIixcImJveHZcIjpcIlx1MjUwMlwiLFwiYm94VlwiOlwiXHUyNTUxXCIsXCJib3h2aFwiOlwiXHUyNTNDXCIsXCJib3h2SFwiOlwiXHUyNTZBXCIsXCJib3hWaFwiOlwiXHUyNTZCXCIsXCJib3hWSFwiOlwiXHUyNTZDXCIsXCJib3h2bFwiOlwiXHUyNTI0XCIsXCJib3h2TFwiOlwiXHUyNTYxXCIsXCJib3hWbFwiOlwiXHUyNTYyXCIsXCJib3hWTFwiOlwiXHUyNTYzXCIsXCJib3h2clwiOlwiXHUyNTFDXCIsXCJib3h2UlwiOlwiXHUyNTVFXCIsXCJib3hWclwiOlwiXHUyNTVGXCIsXCJib3hWUlwiOlwiXHUyNTYwXCIsXCJicHJpbWVcIjpcIlx1MjAzNVwiLFwiYnJldmVcIjpcIlx1MDJEOFwiLFwiQnJldmVcIjpcIlx1MDJEOFwiLFwiYnJ2YmFyXCI6XCJcdTAwQTZcIixcImJzY3JcIjpcIlx1RDgzNVx1RENCN1wiLFwiQnNjclwiOlwiXHUyMTJDXCIsXCJic2VtaVwiOlwiXHUyMDRGXCIsXCJic2ltXCI6XCJcdTIyM0RcIixcImJzaW1lXCI6XCJcdTIyQ0RcIixcImJzb2xiXCI6XCJcdTI5QzVcIixcImJzb2xcIjpcIlxcXFxcIixcImJzb2xoc3ViXCI6XCJcdTI3QzhcIixcImJ1bGxcIjpcIlx1MjAyMlwiLFwiYnVsbGV0XCI6XCJcdTIwMjJcIixcImJ1bXBcIjpcIlx1MjI0RVwiLFwiYnVtcEVcIjpcIlx1MkFBRVwiLFwiYnVtcGVcIjpcIlx1MjI0RlwiLFwiQnVtcGVxXCI6XCJcdTIyNEVcIixcImJ1bXBlcVwiOlwiXHUyMjRGXCIsXCJDYWN1dGVcIjpcIlx1MDEwNlwiLFwiY2FjdXRlXCI6XCJcdTAxMDdcIixcImNhcGFuZFwiOlwiXHUyQTQ0XCIsXCJjYXBicmN1cFwiOlwiXHUyQTQ5XCIsXCJjYXBjYXBcIjpcIlx1MkE0QlwiLFwiY2FwXCI6XCJcdTIyMjlcIixcIkNhcFwiOlwiXHUyMkQyXCIsXCJjYXBjdXBcIjpcIlx1MkE0N1wiLFwiY2FwZG90XCI6XCJcdTJBNDBcIixcIkNhcGl0YWxEaWZmZXJlbnRpYWxEXCI6XCJcdTIxNDVcIixcImNhcHNcIjpcIlx1MjIyOVx1RkUwMFwiLFwiY2FyZXRcIjpcIlx1MjA0MVwiLFwiY2Fyb25cIjpcIlx1MDJDN1wiLFwiQ2F5bGV5c1wiOlwiXHUyMTJEXCIsXCJjY2Fwc1wiOlwiXHUyQTREXCIsXCJDY2Fyb25cIjpcIlx1MDEwQ1wiLFwiY2Nhcm9uXCI6XCJcdTAxMERcIixcIkNjZWRpbFwiOlwiXHUwMEM3XCIsXCJjY2VkaWxcIjpcIlx1MDBFN1wiLFwiQ2NpcmNcIjpcIlx1MDEwOFwiLFwiY2NpcmNcIjpcIlx1MDEwOVwiLFwiQ2NvbmludFwiOlwiXHUyMjMwXCIsXCJjY3Vwc1wiOlwiXHUyQTRDXCIsXCJjY3Vwc3NtXCI6XCJcdTJBNTBcIixcIkNkb3RcIjpcIlx1MDEwQVwiLFwiY2RvdFwiOlwiXHUwMTBCXCIsXCJjZWRpbFwiOlwiXHUwMEI4XCIsXCJDZWRpbGxhXCI6XCJcdTAwQjhcIixcImNlbXB0eXZcIjpcIlx1MjlCMlwiLFwiY2VudFwiOlwiXHUwMEEyXCIsXCJjZW50ZXJkb3RcIjpcIlx1MDBCN1wiLFwiQ2VudGVyRG90XCI6XCJcdTAwQjdcIixcImNmclwiOlwiXHVEODM1XHVERDIwXCIsXCJDZnJcIjpcIlx1MjEyRFwiLFwiQ0hjeVwiOlwiXHUwNDI3XCIsXCJjaGN5XCI6XCJcdTA0NDdcIixcImNoZWNrXCI6XCJcdTI3MTNcIixcImNoZWNrbWFya1wiOlwiXHUyNzEzXCIsXCJDaGlcIjpcIlx1MDNBN1wiLFwiY2hpXCI6XCJcdTAzQzdcIixcImNpcmNcIjpcIlx1MDJDNlwiLFwiY2lyY2VxXCI6XCJcdTIyNTdcIixcImNpcmNsZWFycm93bGVmdFwiOlwiXHUyMUJBXCIsXCJjaXJjbGVhcnJvd3JpZ2h0XCI6XCJcdTIxQkJcIixcImNpcmNsZWRhc3RcIjpcIlx1MjI5QlwiLFwiY2lyY2xlZGNpcmNcIjpcIlx1MjI5QVwiLFwiY2lyY2xlZGRhc2hcIjpcIlx1MjI5RFwiLFwiQ2lyY2xlRG90XCI6XCJcdTIyOTlcIixcImNpcmNsZWRSXCI6XCJcdTAwQUVcIixcImNpcmNsZWRTXCI6XCJcdTI0QzhcIixcIkNpcmNsZU1pbnVzXCI6XCJcdTIyOTZcIixcIkNpcmNsZVBsdXNcIjpcIlx1MjI5NVwiLFwiQ2lyY2xlVGltZXNcIjpcIlx1MjI5N1wiLFwiY2lyXCI6XCJcdTI1Q0JcIixcImNpckVcIjpcIlx1MjlDM1wiLFwiY2lyZVwiOlwiXHUyMjU3XCIsXCJjaXJmbmludFwiOlwiXHUyQTEwXCIsXCJjaXJtaWRcIjpcIlx1MkFFRlwiLFwiY2lyc2NpclwiOlwiXHUyOUMyXCIsXCJDbG9ja3dpc2VDb250b3VySW50ZWdyYWxcIjpcIlx1MjIzMlwiLFwiQ2xvc2VDdXJseURvdWJsZVF1b3RlXCI6XCJcdTIwMURcIixcIkNsb3NlQ3VybHlRdW90ZVwiOlwiXHUyMDE5XCIsXCJjbHVic1wiOlwiXHUyNjYzXCIsXCJjbHVic3VpdFwiOlwiXHUyNjYzXCIsXCJjb2xvblwiOlwiOlwiLFwiQ29sb25cIjpcIlx1MjIzN1wiLFwiQ29sb25lXCI6XCJcdTJBNzRcIixcImNvbG9uZVwiOlwiXHUyMjU0XCIsXCJjb2xvbmVxXCI6XCJcdTIyNTRcIixcImNvbW1hXCI6XCIsXCIsXCJjb21tYXRcIjpcIkBcIixcImNvbXBcIjpcIlx1MjIwMVwiLFwiY29tcGZuXCI6XCJcdTIyMThcIixcImNvbXBsZW1lbnRcIjpcIlx1MjIwMVwiLFwiY29tcGxleGVzXCI6XCJcdTIxMDJcIixcImNvbmdcIjpcIlx1MjI0NVwiLFwiY29uZ2RvdFwiOlwiXHUyQTZEXCIsXCJDb25ncnVlbnRcIjpcIlx1MjI2MVwiLFwiY29uaW50XCI6XCJcdTIyMkVcIixcIkNvbmludFwiOlwiXHUyMjJGXCIsXCJDb250b3VySW50ZWdyYWxcIjpcIlx1MjIyRVwiLFwiY29wZlwiOlwiXHVEODM1XHVERDU0XCIsXCJDb3BmXCI6XCJcdTIxMDJcIixcImNvcHJvZFwiOlwiXHUyMjEwXCIsXCJDb3Byb2R1Y3RcIjpcIlx1MjIxMFwiLFwiY29weVwiOlwiXHUwMEE5XCIsXCJDT1BZXCI6XCJcdTAwQTlcIixcImNvcHlzclwiOlwiXHUyMTE3XCIsXCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6XCJcdTIyMzNcIixcImNyYXJyXCI6XCJcdTIxQjVcIixcImNyb3NzXCI6XCJcdTI3MTdcIixcIkNyb3NzXCI6XCJcdTJBMkZcIixcIkNzY3JcIjpcIlx1RDgzNVx1REM5RVwiLFwiY3NjclwiOlwiXHVEODM1XHVEQ0I4XCIsXCJjc3ViXCI6XCJcdTJBQ0ZcIixcImNzdWJlXCI6XCJcdTJBRDFcIixcImNzdXBcIjpcIlx1MkFEMFwiLFwiY3N1cGVcIjpcIlx1MkFEMlwiLFwiY3Rkb3RcIjpcIlx1MjJFRlwiLFwiY3VkYXJybFwiOlwiXHUyOTM4XCIsXCJjdWRhcnJyXCI6XCJcdTI5MzVcIixcImN1ZXByXCI6XCJcdTIyREVcIixcImN1ZXNjXCI6XCJcdTIyREZcIixcImN1bGFyclwiOlwiXHUyMUI2XCIsXCJjdWxhcnJwXCI6XCJcdTI5M0RcIixcImN1cGJyY2FwXCI6XCJcdTJBNDhcIixcImN1cGNhcFwiOlwiXHUyQTQ2XCIsXCJDdXBDYXBcIjpcIlx1MjI0RFwiLFwiY3VwXCI6XCJcdTIyMkFcIixcIkN1cFwiOlwiXHUyMkQzXCIsXCJjdXBjdXBcIjpcIlx1MkE0QVwiLFwiY3VwZG90XCI6XCJcdTIyOERcIixcImN1cG9yXCI6XCJcdTJBNDVcIixcImN1cHNcIjpcIlx1MjIyQVx1RkUwMFwiLFwiY3VyYXJyXCI6XCJcdTIxQjdcIixcImN1cmFycm1cIjpcIlx1MjkzQ1wiLFwiY3VybHllcXByZWNcIjpcIlx1MjJERVwiLFwiY3VybHllcXN1Y2NcIjpcIlx1MjJERlwiLFwiY3VybHl2ZWVcIjpcIlx1MjJDRVwiLFwiY3VybHl3ZWRnZVwiOlwiXHUyMkNGXCIsXCJjdXJyZW5cIjpcIlx1MDBBNFwiLFwiY3VydmVhcnJvd2xlZnRcIjpcIlx1MjFCNlwiLFwiY3VydmVhcnJvd3JpZ2h0XCI6XCJcdTIxQjdcIixcImN1dmVlXCI6XCJcdTIyQ0VcIixcImN1d2VkXCI6XCJcdTIyQ0ZcIixcImN3Y29uaW50XCI6XCJcdTIyMzJcIixcImN3aW50XCI6XCJcdTIyMzFcIixcImN5bGN0eVwiOlwiXHUyMzJEXCIsXCJkYWdnZXJcIjpcIlx1MjAyMFwiLFwiRGFnZ2VyXCI6XCJcdTIwMjFcIixcImRhbGV0aFwiOlwiXHUyMTM4XCIsXCJkYXJyXCI6XCJcdTIxOTNcIixcIkRhcnJcIjpcIlx1MjFBMVwiLFwiZEFyclwiOlwiXHUyMUQzXCIsXCJkYXNoXCI6XCJcdTIwMTBcIixcIkRhc2h2XCI6XCJcdTJBRTRcIixcImRhc2h2XCI6XCJcdTIyQTNcIixcImRia2Fyb3dcIjpcIlx1MjkwRlwiLFwiZGJsYWNcIjpcIlx1MDJERFwiLFwiRGNhcm9uXCI6XCJcdTAxMEVcIixcImRjYXJvblwiOlwiXHUwMTBGXCIsXCJEY3lcIjpcIlx1MDQxNFwiLFwiZGN5XCI6XCJcdTA0MzRcIixcImRkYWdnZXJcIjpcIlx1MjAyMVwiLFwiZGRhcnJcIjpcIlx1MjFDQVwiLFwiRERcIjpcIlx1MjE0NVwiLFwiZGRcIjpcIlx1MjE0NlwiLFwiRERvdHJhaGRcIjpcIlx1MjkxMVwiLFwiZGRvdHNlcVwiOlwiXHUyQTc3XCIsXCJkZWdcIjpcIlx1MDBCMFwiLFwiRGVsXCI6XCJcdTIyMDdcIixcIkRlbHRhXCI6XCJcdTAzOTRcIixcImRlbHRhXCI6XCJcdTAzQjRcIixcImRlbXB0eXZcIjpcIlx1MjlCMVwiLFwiZGZpc2h0XCI6XCJcdTI5N0ZcIixcIkRmclwiOlwiXHVEODM1XHVERDA3XCIsXCJkZnJcIjpcIlx1RDgzNVx1REQyMVwiLFwiZEhhclwiOlwiXHUyOTY1XCIsXCJkaGFybFwiOlwiXHUyMUMzXCIsXCJkaGFyclwiOlwiXHUyMUMyXCIsXCJEaWFjcml0aWNhbEFjdXRlXCI6XCJcdTAwQjRcIixcIkRpYWNyaXRpY2FsRG90XCI6XCJcdTAyRDlcIixcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGVcIjpcIlx1MDJERFwiLFwiRGlhY3JpdGljYWxHcmF2ZVwiOlwiYFwiLFwiRGlhY3JpdGljYWxUaWxkZVwiOlwiXHUwMkRDXCIsXCJkaWFtXCI6XCJcdTIyQzRcIixcImRpYW1vbmRcIjpcIlx1MjJDNFwiLFwiRGlhbW9uZFwiOlwiXHUyMkM0XCIsXCJkaWFtb25kc3VpdFwiOlwiXHUyNjY2XCIsXCJkaWFtc1wiOlwiXHUyNjY2XCIsXCJkaWVcIjpcIlx1MDBBOFwiLFwiRGlmZmVyZW50aWFsRFwiOlwiXHUyMTQ2XCIsXCJkaWdhbW1hXCI6XCJcdTAzRERcIixcImRpc2luXCI6XCJcdTIyRjJcIixcImRpdlwiOlwiXHUwMEY3XCIsXCJkaXZpZGVcIjpcIlx1MDBGN1wiLFwiZGl2aWRlb250aW1lc1wiOlwiXHUyMkM3XCIsXCJkaXZvbnhcIjpcIlx1MjJDN1wiLFwiREpjeVwiOlwiXHUwNDAyXCIsXCJkamN5XCI6XCJcdTA0NTJcIixcImRsY29yblwiOlwiXHUyMzFFXCIsXCJkbGNyb3BcIjpcIlx1MjMwRFwiLFwiZG9sbGFyXCI6XCIkXCIsXCJEb3BmXCI6XCJcdUQ4MzVcdUREM0JcIixcImRvcGZcIjpcIlx1RDgzNVx1REQ1NVwiLFwiRG90XCI6XCJcdTAwQThcIixcImRvdFwiOlwiXHUwMkQ5XCIsXCJEb3REb3RcIjpcIlx1MjBEQ1wiLFwiZG90ZXFcIjpcIlx1MjI1MFwiLFwiZG90ZXFkb3RcIjpcIlx1MjI1MVwiLFwiRG90RXF1YWxcIjpcIlx1MjI1MFwiLFwiZG90bWludXNcIjpcIlx1MjIzOFwiLFwiZG90cGx1c1wiOlwiXHUyMjE0XCIsXCJkb3RzcXVhcmVcIjpcIlx1MjJBMVwiLFwiZG91YmxlYmFyd2VkZ2VcIjpcIlx1MjMwNlwiLFwiRG91YmxlQ29udG91ckludGVncmFsXCI6XCJcdTIyMkZcIixcIkRvdWJsZURvdFwiOlwiXHUwMEE4XCIsXCJEb3VibGVEb3duQXJyb3dcIjpcIlx1MjFEM1wiLFwiRG91YmxlTGVmdEFycm93XCI6XCJcdTIxRDBcIixcIkRvdWJsZUxlZnRSaWdodEFycm93XCI6XCJcdTIxRDRcIixcIkRvdWJsZUxlZnRUZWVcIjpcIlx1MkFFNFwiLFwiRG91YmxlTG9uZ0xlZnRBcnJvd1wiOlwiXHUyN0Y4XCIsXCJEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3dcIjpcIlx1MjdGQVwiLFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3dcIjpcIlx1MjdGOVwiLFwiRG91YmxlUmlnaHRBcnJvd1wiOlwiXHUyMUQyXCIsXCJEb3VibGVSaWdodFRlZVwiOlwiXHUyMkE4XCIsXCJEb3VibGVVcEFycm93XCI6XCJcdTIxRDFcIixcIkRvdWJsZVVwRG93bkFycm93XCI6XCJcdTIxRDVcIixcIkRvdWJsZVZlcnRpY2FsQmFyXCI6XCJcdTIyMjVcIixcIkRvd25BcnJvd0JhclwiOlwiXHUyOTEzXCIsXCJkb3duYXJyb3dcIjpcIlx1MjE5M1wiLFwiRG93bkFycm93XCI6XCJcdTIxOTNcIixcIkRvd25hcnJvd1wiOlwiXHUyMUQzXCIsXCJEb3duQXJyb3dVcEFycm93XCI6XCJcdTIxRjVcIixcIkRvd25CcmV2ZVwiOlwiXHUwMzExXCIsXCJkb3duZG93bmFycm93c1wiOlwiXHUyMUNBXCIsXCJkb3duaGFycG9vbmxlZnRcIjpcIlx1MjFDM1wiLFwiZG93bmhhcnBvb25yaWdodFwiOlwiXHUyMUMyXCIsXCJEb3duTGVmdFJpZ2h0VmVjdG9yXCI6XCJcdTI5NTBcIixcIkRvd25MZWZ0VGVlVmVjdG9yXCI6XCJcdTI5NUVcIixcIkRvd25MZWZ0VmVjdG9yQmFyXCI6XCJcdTI5NTZcIixcIkRvd25MZWZ0VmVjdG9yXCI6XCJcdTIxQkRcIixcIkRvd25SaWdodFRlZVZlY3RvclwiOlwiXHUyOTVGXCIsXCJEb3duUmlnaHRWZWN0b3JCYXJcIjpcIlx1Mjk1N1wiLFwiRG93blJpZ2h0VmVjdG9yXCI6XCJcdTIxQzFcIixcIkRvd25UZWVBcnJvd1wiOlwiXHUyMUE3XCIsXCJEb3duVGVlXCI6XCJcdTIyQTRcIixcImRyYmthcm93XCI6XCJcdTI5MTBcIixcImRyY29yblwiOlwiXHUyMzFGXCIsXCJkcmNyb3BcIjpcIlx1MjMwQ1wiLFwiRHNjclwiOlwiXHVEODM1XHVEQzlGXCIsXCJkc2NyXCI6XCJcdUQ4MzVcdURDQjlcIixcIkRTY3lcIjpcIlx1MDQwNVwiLFwiZHNjeVwiOlwiXHUwNDU1XCIsXCJkc29sXCI6XCJcdTI5RjZcIixcIkRzdHJva1wiOlwiXHUwMTEwXCIsXCJkc3Ryb2tcIjpcIlx1MDExMVwiLFwiZHRkb3RcIjpcIlx1MjJGMVwiLFwiZHRyaVwiOlwiXHUyNUJGXCIsXCJkdHJpZlwiOlwiXHUyNUJFXCIsXCJkdWFyclwiOlwiXHUyMUY1XCIsXCJkdWhhclwiOlwiXHUyOTZGXCIsXCJkd2FuZ2xlXCI6XCJcdTI5QTZcIixcIkRaY3lcIjpcIlx1MDQwRlwiLFwiZHpjeVwiOlwiXHUwNDVGXCIsXCJkemlncmFyclwiOlwiXHUyN0ZGXCIsXCJFYWN1dGVcIjpcIlx1MDBDOVwiLFwiZWFjdXRlXCI6XCJcdTAwRTlcIixcImVhc3RlclwiOlwiXHUyQTZFXCIsXCJFY2Fyb25cIjpcIlx1MDExQVwiLFwiZWNhcm9uXCI6XCJcdTAxMUJcIixcIkVjaXJjXCI6XCJcdTAwQ0FcIixcImVjaXJjXCI6XCJcdTAwRUFcIixcImVjaXJcIjpcIlx1MjI1NlwiLFwiZWNvbG9uXCI6XCJcdTIyNTVcIixcIkVjeVwiOlwiXHUwNDJEXCIsXCJlY3lcIjpcIlx1MDQ0RFwiLFwiZUREb3RcIjpcIlx1MkE3N1wiLFwiRWRvdFwiOlwiXHUwMTE2XCIsXCJlZG90XCI6XCJcdTAxMTdcIixcImVEb3RcIjpcIlx1MjI1MVwiLFwiZWVcIjpcIlx1MjE0N1wiLFwiZWZEb3RcIjpcIlx1MjI1MlwiLFwiRWZyXCI6XCJcdUQ4MzVcdUREMDhcIixcImVmclwiOlwiXHVEODM1XHVERDIyXCIsXCJlZ1wiOlwiXHUyQTlBXCIsXCJFZ3JhdmVcIjpcIlx1MDBDOFwiLFwiZWdyYXZlXCI6XCJcdTAwRThcIixcImVnc1wiOlwiXHUyQTk2XCIsXCJlZ3Nkb3RcIjpcIlx1MkE5OFwiLFwiZWxcIjpcIlx1MkE5OVwiLFwiRWxlbWVudFwiOlwiXHUyMjA4XCIsXCJlbGludGVyc1wiOlwiXHUyM0U3XCIsXCJlbGxcIjpcIlx1MjExM1wiLFwiZWxzXCI6XCJcdTJBOTVcIixcImVsc2RvdFwiOlwiXHUyQTk3XCIsXCJFbWFjclwiOlwiXHUwMTEyXCIsXCJlbWFjclwiOlwiXHUwMTEzXCIsXCJlbXB0eVwiOlwiXHUyMjA1XCIsXCJlbXB0eXNldFwiOlwiXHUyMjA1XCIsXCJFbXB0eVNtYWxsU3F1YXJlXCI6XCJcdTI1RkJcIixcImVtcHR5dlwiOlwiXHUyMjA1XCIsXCJFbXB0eVZlcnlTbWFsbFNxdWFyZVwiOlwiXHUyNUFCXCIsXCJlbXNwMTNcIjpcIlx1MjAwNFwiLFwiZW1zcDE0XCI6XCJcdTIwMDVcIixcImVtc3BcIjpcIlx1MjAwM1wiLFwiRU5HXCI6XCJcdTAxNEFcIixcImVuZ1wiOlwiXHUwMTRCXCIsXCJlbnNwXCI6XCJcdTIwMDJcIixcIkVvZ29uXCI6XCJcdTAxMThcIixcImVvZ29uXCI6XCJcdTAxMTlcIixcIkVvcGZcIjpcIlx1RDgzNVx1REQzQ1wiLFwiZW9wZlwiOlwiXHVEODM1XHVERDU2XCIsXCJlcGFyXCI6XCJcdTIyRDVcIixcImVwYXJzbFwiOlwiXHUyOUUzXCIsXCJlcGx1c1wiOlwiXHUyQTcxXCIsXCJlcHNpXCI6XCJcdTAzQjVcIixcIkVwc2lsb25cIjpcIlx1MDM5NVwiLFwiZXBzaWxvblwiOlwiXHUwM0I1XCIsXCJlcHNpdlwiOlwiXHUwM0Y1XCIsXCJlcWNpcmNcIjpcIlx1MjI1NlwiLFwiZXFjb2xvblwiOlwiXHUyMjU1XCIsXCJlcXNpbVwiOlwiXHUyMjQyXCIsXCJlcXNsYW50Z3RyXCI6XCJcdTJBOTZcIixcImVxc2xhbnRsZXNzXCI6XCJcdTJBOTVcIixcIkVxdWFsXCI6XCJcdTJBNzVcIixcImVxdWFsc1wiOlwiPVwiLFwiRXF1YWxUaWxkZVwiOlwiXHUyMjQyXCIsXCJlcXVlc3RcIjpcIlx1MjI1RlwiLFwiRXF1aWxpYnJpdW1cIjpcIlx1MjFDQ1wiLFwiZXF1aXZcIjpcIlx1MjI2MVwiLFwiZXF1aXZERFwiOlwiXHUyQTc4XCIsXCJlcXZwYXJzbFwiOlwiXHUyOUU1XCIsXCJlcmFyclwiOlwiXHUyOTcxXCIsXCJlckRvdFwiOlwiXHUyMjUzXCIsXCJlc2NyXCI6XCJcdTIxMkZcIixcIkVzY3JcIjpcIlx1MjEzMFwiLFwiZXNkb3RcIjpcIlx1MjI1MFwiLFwiRXNpbVwiOlwiXHUyQTczXCIsXCJlc2ltXCI6XCJcdTIyNDJcIixcIkV0YVwiOlwiXHUwMzk3XCIsXCJldGFcIjpcIlx1MDNCN1wiLFwiRVRIXCI6XCJcdTAwRDBcIixcImV0aFwiOlwiXHUwMEYwXCIsXCJFdW1sXCI6XCJcdTAwQ0JcIixcImV1bWxcIjpcIlx1MDBFQlwiLFwiZXVyb1wiOlwiXHUyMEFDXCIsXCJleGNsXCI6XCIhXCIsXCJleGlzdFwiOlwiXHUyMjAzXCIsXCJFeGlzdHNcIjpcIlx1MjIwM1wiLFwiZXhwZWN0YXRpb25cIjpcIlx1MjEzMFwiLFwiZXhwb25lbnRpYWxlXCI6XCJcdTIxNDdcIixcIkV4cG9uZW50aWFsRVwiOlwiXHUyMTQ3XCIsXCJmYWxsaW5nZG90c2VxXCI6XCJcdTIyNTJcIixcIkZjeVwiOlwiXHUwNDI0XCIsXCJmY3lcIjpcIlx1MDQ0NFwiLFwiZmVtYWxlXCI6XCJcdTI2NDBcIixcImZmaWxpZ1wiOlwiXHVGQjAzXCIsXCJmZmxpZ1wiOlwiXHVGQjAwXCIsXCJmZmxsaWdcIjpcIlx1RkIwNFwiLFwiRmZyXCI6XCJcdUQ4MzVcdUREMDlcIixcImZmclwiOlwiXHVEODM1XHVERDIzXCIsXCJmaWxpZ1wiOlwiXHVGQjAxXCIsXCJGaWxsZWRTbWFsbFNxdWFyZVwiOlwiXHUyNUZDXCIsXCJGaWxsZWRWZXJ5U21hbGxTcXVhcmVcIjpcIlx1MjVBQVwiLFwiZmpsaWdcIjpcImZqXCIsXCJmbGF0XCI6XCJcdTI2NkRcIixcImZsbGlnXCI6XCJcdUZCMDJcIixcImZsdG5zXCI6XCJcdTI1QjFcIixcImZub2ZcIjpcIlx1MDE5MlwiLFwiRm9wZlwiOlwiXHVEODM1XHVERDNEXCIsXCJmb3BmXCI6XCJcdUQ4MzVcdURENTdcIixcImZvcmFsbFwiOlwiXHUyMjAwXCIsXCJGb3JBbGxcIjpcIlx1MjIwMFwiLFwiZm9ya1wiOlwiXHUyMkQ0XCIsXCJmb3JrdlwiOlwiXHUyQUQ5XCIsXCJGb3VyaWVydHJmXCI6XCJcdTIxMzFcIixcImZwYXJ0aW50XCI6XCJcdTJBMERcIixcImZyYWMxMlwiOlwiXHUwMEJEXCIsXCJmcmFjMTNcIjpcIlx1MjE1M1wiLFwiZnJhYzE0XCI6XCJcdTAwQkNcIixcImZyYWMxNVwiOlwiXHUyMTU1XCIsXCJmcmFjMTZcIjpcIlx1MjE1OVwiLFwiZnJhYzE4XCI6XCJcdTIxNUJcIixcImZyYWMyM1wiOlwiXHUyMTU0XCIsXCJmcmFjMjVcIjpcIlx1MjE1NlwiLFwiZnJhYzM0XCI6XCJcdTAwQkVcIixcImZyYWMzNVwiOlwiXHUyMTU3XCIsXCJmcmFjMzhcIjpcIlx1MjE1Q1wiLFwiZnJhYzQ1XCI6XCJcdTIxNThcIixcImZyYWM1NlwiOlwiXHUyMTVBXCIsXCJmcmFjNThcIjpcIlx1MjE1RFwiLFwiZnJhYzc4XCI6XCJcdTIxNUVcIixcImZyYXNsXCI6XCJcdTIwNDRcIixcImZyb3duXCI6XCJcdTIzMjJcIixcImZzY3JcIjpcIlx1RDgzNVx1RENCQlwiLFwiRnNjclwiOlwiXHUyMTMxXCIsXCJnYWN1dGVcIjpcIlx1MDFGNVwiLFwiR2FtbWFcIjpcIlx1MDM5M1wiLFwiZ2FtbWFcIjpcIlx1MDNCM1wiLFwiR2FtbWFkXCI6XCJcdTAzRENcIixcImdhbW1hZFwiOlwiXHUwM0REXCIsXCJnYXBcIjpcIlx1MkE4NlwiLFwiR2JyZXZlXCI6XCJcdTAxMUVcIixcImdicmV2ZVwiOlwiXHUwMTFGXCIsXCJHY2VkaWxcIjpcIlx1MDEyMlwiLFwiR2NpcmNcIjpcIlx1MDExQ1wiLFwiZ2NpcmNcIjpcIlx1MDExRFwiLFwiR2N5XCI6XCJcdTA0MTNcIixcImdjeVwiOlwiXHUwNDMzXCIsXCJHZG90XCI6XCJcdTAxMjBcIixcImdkb3RcIjpcIlx1MDEyMVwiLFwiZ2VcIjpcIlx1MjI2NVwiLFwiZ0VcIjpcIlx1MjI2N1wiLFwiZ0VsXCI6XCJcdTJBOENcIixcImdlbFwiOlwiXHUyMkRCXCIsXCJnZXFcIjpcIlx1MjI2NVwiLFwiZ2VxcVwiOlwiXHUyMjY3XCIsXCJnZXFzbGFudFwiOlwiXHUyQTdFXCIsXCJnZXNjY1wiOlwiXHUyQUE5XCIsXCJnZXNcIjpcIlx1MkE3RVwiLFwiZ2VzZG90XCI6XCJcdTJBODBcIixcImdlc2RvdG9cIjpcIlx1MkE4MlwiLFwiZ2VzZG90b2xcIjpcIlx1MkE4NFwiLFwiZ2VzbFwiOlwiXHUyMkRCXHVGRTAwXCIsXCJnZXNsZXNcIjpcIlx1MkE5NFwiLFwiR2ZyXCI6XCJcdUQ4MzVcdUREMEFcIixcImdmclwiOlwiXHVEODM1XHVERDI0XCIsXCJnZ1wiOlwiXHUyMjZCXCIsXCJHZ1wiOlwiXHUyMkQ5XCIsXCJnZ2dcIjpcIlx1MjJEOVwiLFwiZ2ltZWxcIjpcIlx1MjEzN1wiLFwiR0pjeVwiOlwiXHUwNDAzXCIsXCJnamN5XCI6XCJcdTA0NTNcIixcImdsYVwiOlwiXHUyQUE1XCIsXCJnbFwiOlwiXHUyMjc3XCIsXCJnbEVcIjpcIlx1MkE5MlwiLFwiZ2xqXCI6XCJcdTJBQTRcIixcImduYXBcIjpcIlx1MkE4QVwiLFwiZ25hcHByb3hcIjpcIlx1MkE4QVwiLFwiZ25lXCI6XCJcdTJBODhcIixcImduRVwiOlwiXHUyMjY5XCIsXCJnbmVxXCI6XCJcdTJBODhcIixcImduZXFxXCI6XCJcdTIyNjlcIixcImduc2ltXCI6XCJcdTIyRTdcIixcIkdvcGZcIjpcIlx1RDgzNVx1REQzRVwiLFwiZ29wZlwiOlwiXHVEODM1XHVERDU4XCIsXCJncmF2ZVwiOlwiYFwiLFwiR3JlYXRlckVxdWFsXCI6XCJcdTIyNjVcIixcIkdyZWF0ZXJFcXVhbExlc3NcIjpcIlx1MjJEQlwiLFwiR3JlYXRlckZ1bGxFcXVhbFwiOlwiXHUyMjY3XCIsXCJHcmVhdGVyR3JlYXRlclwiOlwiXHUyQUEyXCIsXCJHcmVhdGVyTGVzc1wiOlwiXHUyMjc3XCIsXCJHcmVhdGVyU2xhbnRFcXVhbFwiOlwiXHUyQTdFXCIsXCJHcmVhdGVyVGlsZGVcIjpcIlx1MjI3M1wiLFwiR3NjclwiOlwiXHVEODM1XHVEQ0EyXCIsXCJnc2NyXCI6XCJcdTIxMEFcIixcImdzaW1cIjpcIlx1MjI3M1wiLFwiZ3NpbWVcIjpcIlx1MkE4RVwiLFwiZ3NpbWxcIjpcIlx1MkE5MFwiLFwiZ3RjY1wiOlwiXHUyQUE3XCIsXCJndGNpclwiOlwiXHUyQTdBXCIsXCJndFwiOlwiPlwiLFwiR1RcIjpcIj5cIixcIkd0XCI6XCJcdTIyNkJcIixcImd0ZG90XCI6XCJcdTIyRDdcIixcImd0bFBhclwiOlwiXHUyOTk1XCIsXCJndHF1ZXN0XCI6XCJcdTJBN0NcIixcImd0cmFwcHJveFwiOlwiXHUyQTg2XCIsXCJndHJhcnJcIjpcIlx1Mjk3OFwiLFwiZ3RyZG90XCI6XCJcdTIyRDdcIixcImd0cmVxbGVzc1wiOlwiXHUyMkRCXCIsXCJndHJlcXFsZXNzXCI6XCJcdTJBOENcIixcImd0cmxlc3NcIjpcIlx1MjI3N1wiLFwiZ3Ryc2ltXCI6XCJcdTIyNzNcIixcImd2ZXJ0bmVxcVwiOlwiXHUyMjY5XHVGRTAwXCIsXCJndm5FXCI6XCJcdTIyNjlcdUZFMDBcIixcIkhhY2VrXCI6XCJcdTAyQzdcIixcImhhaXJzcFwiOlwiXHUyMDBBXCIsXCJoYWxmXCI6XCJcdTAwQkRcIixcImhhbWlsdFwiOlwiXHUyMTBCXCIsXCJIQVJEY3lcIjpcIlx1MDQyQVwiLFwiaGFyZGN5XCI6XCJcdTA0NEFcIixcImhhcnJjaXJcIjpcIlx1Mjk0OFwiLFwiaGFyclwiOlwiXHUyMTk0XCIsXCJoQXJyXCI6XCJcdTIxRDRcIixcImhhcnJ3XCI6XCJcdTIxQURcIixcIkhhdFwiOlwiXlwiLFwiaGJhclwiOlwiXHUyMTBGXCIsXCJIY2lyY1wiOlwiXHUwMTI0XCIsXCJoY2lyY1wiOlwiXHUwMTI1XCIsXCJoZWFydHNcIjpcIlx1MjY2NVwiLFwiaGVhcnRzdWl0XCI6XCJcdTI2NjVcIixcImhlbGxpcFwiOlwiXHUyMDI2XCIsXCJoZXJjb25cIjpcIlx1MjJCOVwiLFwiaGZyXCI6XCJcdUQ4MzVcdUREMjVcIixcIkhmclwiOlwiXHUyMTBDXCIsXCJIaWxiZXJ0U3BhY2VcIjpcIlx1MjEwQlwiLFwiaGtzZWFyb3dcIjpcIlx1MjkyNVwiLFwiaGtzd2Fyb3dcIjpcIlx1MjkyNlwiLFwiaG9hcnJcIjpcIlx1MjFGRlwiLFwiaG9tdGh0XCI6XCJcdTIyM0JcIixcImhvb2tsZWZ0YXJyb3dcIjpcIlx1MjFBOVwiLFwiaG9va3JpZ2h0YXJyb3dcIjpcIlx1MjFBQVwiLFwiaG9wZlwiOlwiXHVEODM1XHVERDU5XCIsXCJIb3BmXCI6XCJcdTIxMERcIixcImhvcmJhclwiOlwiXHUyMDE1XCIsXCJIb3Jpem9udGFsTGluZVwiOlwiXHUyNTAwXCIsXCJoc2NyXCI6XCJcdUQ4MzVcdURDQkRcIixcIkhzY3JcIjpcIlx1MjEwQlwiLFwiaHNsYXNoXCI6XCJcdTIxMEZcIixcIkhzdHJva1wiOlwiXHUwMTI2XCIsXCJoc3Ryb2tcIjpcIlx1MDEyN1wiLFwiSHVtcERvd25IdW1wXCI6XCJcdTIyNEVcIixcIkh1bXBFcXVhbFwiOlwiXHUyMjRGXCIsXCJoeWJ1bGxcIjpcIlx1MjA0M1wiLFwiaHlwaGVuXCI6XCJcdTIwMTBcIixcIklhY3V0ZVwiOlwiXHUwMENEXCIsXCJpYWN1dGVcIjpcIlx1MDBFRFwiLFwiaWNcIjpcIlx1MjA2M1wiLFwiSWNpcmNcIjpcIlx1MDBDRVwiLFwiaWNpcmNcIjpcIlx1MDBFRVwiLFwiSWN5XCI6XCJcdTA0MThcIixcImljeVwiOlwiXHUwNDM4XCIsXCJJZG90XCI6XCJcdTAxMzBcIixcIklFY3lcIjpcIlx1MDQxNVwiLFwiaWVjeVwiOlwiXHUwNDM1XCIsXCJpZXhjbFwiOlwiXHUwMEExXCIsXCJpZmZcIjpcIlx1MjFENFwiLFwiaWZyXCI6XCJcdUQ4MzVcdUREMjZcIixcIklmclwiOlwiXHUyMTExXCIsXCJJZ3JhdmVcIjpcIlx1MDBDQ1wiLFwiaWdyYXZlXCI6XCJcdTAwRUNcIixcImlpXCI6XCJcdTIxNDhcIixcImlpaWludFwiOlwiXHUyQTBDXCIsXCJpaWludFwiOlwiXHUyMjJEXCIsXCJpaW5maW5cIjpcIlx1MjlEQ1wiLFwiaWlvdGFcIjpcIlx1MjEyOVwiLFwiSUpsaWdcIjpcIlx1MDEzMlwiLFwiaWpsaWdcIjpcIlx1MDEzM1wiLFwiSW1hY3JcIjpcIlx1MDEyQVwiLFwiaW1hY3JcIjpcIlx1MDEyQlwiLFwiaW1hZ2VcIjpcIlx1MjExMVwiLFwiSW1hZ2luYXJ5SVwiOlwiXHUyMTQ4XCIsXCJpbWFnbGluZVwiOlwiXHUyMTEwXCIsXCJpbWFncGFydFwiOlwiXHUyMTExXCIsXCJpbWF0aFwiOlwiXHUwMTMxXCIsXCJJbVwiOlwiXHUyMTExXCIsXCJpbW9mXCI6XCJcdTIyQjdcIixcImltcGVkXCI6XCJcdTAxQjVcIixcIkltcGxpZXNcIjpcIlx1MjFEMlwiLFwiaW5jYXJlXCI6XCJcdTIxMDVcIixcImluXCI6XCJcdTIyMDhcIixcImluZmluXCI6XCJcdTIyMUVcIixcImluZmludGllXCI6XCJcdTI5RERcIixcImlub2RvdFwiOlwiXHUwMTMxXCIsXCJpbnRjYWxcIjpcIlx1MjJCQVwiLFwiaW50XCI6XCJcdTIyMkJcIixcIkludFwiOlwiXHUyMjJDXCIsXCJpbnRlZ2Vyc1wiOlwiXHUyMTI0XCIsXCJJbnRlZ3JhbFwiOlwiXHUyMjJCXCIsXCJpbnRlcmNhbFwiOlwiXHUyMkJBXCIsXCJJbnRlcnNlY3Rpb25cIjpcIlx1MjJDMlwiLFwiaW50bGFyaGtcIjpcIlx1MkExN1wiLFwiaW50cHJvZFwiOlwiXHUyQTNDXCIsXCJJbnZpc2libGVDb21tYVwiOlwiXHUyMDYzXCIsXCJJbnZpc2libGVUaW1lc1wiOlwiXHUyMDYyXCIsXCJJT2N5XCI6XCJcdTA0MDFcIixcImlvY3lcIjpcIlx1MDQ1MVwiLFwiSW9nb25cIjpcIlx1MDEyRVwiLFwiaW9nb25cIjpcIlx1MDEyRlwiLFwiSW9wZlwiOlwiXHVEODM1XHVERDQwXCIsXCJpb3BmXCI6XCJcdUQ4MzVcdURENUFcIixcIklvdGFcIjpcIlx1MDM5OVwiLFwiaW90YVwiOlwiXHUwM0I5XCIsXCJpcHJvZFwiOlwiXHUyQTNDXCIsXCJpcXVlc3RcIjpcIlx1MDBCRlwiLFwiaXNjclwiOlwiXHVEODM1XHVEQ0JFXCIsXCJJc2NyXCI6XCJcdTIxMTBcIixcImlzaW5cIjpcIlx1MjIwOFwiLFwiaXNpbmRvdFwiOlwiXHUyMkY1XCIsXCJpc2luRVwiOlwiXHUyMkY5XCIsXCJpc2luc1wiOlwiXHUyMkY0XCIsXCJpc2luc3ZcIjpcIlx1MjJGM1wiLFwiaXNpbnZcIjpcIlx1MjIwOFwiLFwiaXRcIjpcIlx1MjA2MlwiLFwiSXRpbGRlXCI6XCJcdTAxMjhcIixcIml0aWxkZVwiOlwiXHUwMTI5XCIsXCJJdWtjeVwiOlwiXHUwNDA2XCIsXCJpdWtjeVwiOlwiXHUwNDU2XCIsXCJJdW1sXCI6XCJcdTAwQ0ZcIixcIml1bWxcIjpcIlx1MDBFRlwiLFwiSmNpcmNcIjpcIlx1MDEzNFwiLFwiamNpcmNcIjpcIlx1MDEzNVwiLFwiSmN5XCI6XCJcdTA0MTlcIixcImpjeVwiOlwiXHUwNDM5XCIsXCJKZnJcIjpcIlx1RDgzNVx1REQwRFwiLFwiamZyXCI6XCJcdUQ4MzVcdUREMjdcIixcImptYXRoXCI6XCJcdTAyMzdcIixcIkpvcGZcIjpcIlx1RDgzNVx1REQ0MVwiLFwiam9wZlwiOlwiXHVEODM1XHVERDVCXCIsXCJKc2NyXCI6XCJcdUQ4MzVcdURDQTVcIixcImpzY3JcIjpcIlx1RDgzNVx1RENCRlwiLFwiSnNlcmN5XCI6XCJcdTA0MDhcIixcImpzZXJjeVwiOlwiXHUwNDU4XCIsXCJKdWtjeVwiOlwiXHUwNDA0XCIsXCJqdWtjeVwiOlwiXHUwNDU0XCIsXCJLYXBwYVwiOlwiXHUwMzlBXCIsXCJrYXBwYVwiOlwiXHUwM0JBXCIsXCJrYXBwYXZcIjpcIlx1MDNGMFwiLFwiS2NlZGlsXCI6XCJcdTAxMzZcIixcImtjZWRpbFwiOlwiXHUwMTM3XCIsXCJLY3lcIjpcIlx1MDQxQVwiLFwia2N5XCI6XCJcdTA0M0FcIixcIktmclwiOlwiXHVEODM1XHVERDBFXCIsXCJrZnJcIjpcIlx1RDgzNVx1REQyOFwiLFwia2dyZWVuXCI6XCJcdTAxMzhcIixcIktIY3lcIjpcIlx1MDQyNVwiLFwia2hjeVwiOlwiXHUwNDQ1XCIsXCJLSmN5XCI6XCJcdTA0MENcIixcImtqY3lcIjpcIlx1MDQ1Q1wiLFwiS29wZlwiOlwiXHVEODM1XHVERDQyXCIsXCJrb3BmXCI6XCJcdUQ4MzVcdURENUNcIixcIktzY3JcIjpcIlx1RDgzNVx1RENBNlwiLFwia3NjclwiOlwiXHVEODM1XHVEQ0MwXCIsXCJsQWFyclwiOlwiXHUyMURBXCIsXCJMYWN1dGVcIjpcIlx1MDEzOVwiLFwibGFjdXRlXCI6XCJcdTAxM0FcIixcImxhZW1wdHl2XCI6XCJcdTI5QjRcIixcImxhZ3JhblwiOlwiXHUyMTEyXCIsXCJMYW1iZGFcIjpcIlx1MDM5QlwiLFwibGFtYmRhXCI6XCJcdTAzQkJcIixcImxhbmdcIjpcIlx1MjdFOFwiLFwiTGFuZ1wiOlwiXHUyN0VBXCIsXCJsYW5nZFwiOlwiXHUyOTkxXCIsXCJsYW5nbGVcIjpcIlx1MjdFOFwiLFwibGFwXCI6XCJcdTJBODVcIixcIkxhcGxhY2V0cmZcIjpcIlx1MjExMlwiLFwibGFxdW9cIjpcIlx1MDBBQlwiLFwibGFycmJcIjpcIlx1MjFFNFwiLFwibGFycmJmc1wiOlwiXHUyOTFGXCIsXCJsYXJyXCI6XCJcdTIxOTBcIixcIkxhcnJcIjpcIlx1MjE5RVwiLFwibEFyclwiOlwiXHUyMUQwXCIsXCJsYXJyZnNcIjpcIlx1MjkxRFwiLFwibGFycmhrXCI6XCJcdTIxQTlcIixcImxhcnJscFwiOlwiXHUyMUFCXCIsXCJsYXJycGxcIjpcIlx1MjkzOVwiLFwibGFycnNpbVwiOlwiXHUyOTczXCIsXCJsYXJydGxcIjpcIlx1MjFBMlwiLFwibGF0YWlsXCI6XCJcdTI5MTlcIixcImxBdGFpbFwiOlwiXHUyOTFCXCIsXCJsYXRcIjpcIlx1MkFBQlwiLFwibGF0ZVwiOlwiXHUyQUFEXCIsXCJsYXRlc1wiOlwiXHUyQUFEXHVGRTAwXCIsXCJsYmFyclwiOlwiXHUyOTBDXCIsXCJsQmFyclwiOlwiXHUyOTBFXCIsXCJsYmJya1wiOlwiXHUyNzcyXCIsXCJsYnJhY2VcIjpcIntcIixcImxicmFja1wiOlwiW1wiLFwibGJya2VcIjpcIlx1Mjk4QlwiLFwibGJya3NsZFwiOlwiXHUyOThGXCIsXCJsYnJrc2x1XCI6XCJcdTI5OERcIixcIkxjYXJvblwiOlwiXHUwMTNEXCIsXCJsY2Fyb25cIjpcIlx1MDEzRVwiLFwiTGNlZGlsXCI6XCJcdTAxM0JcIixcImxjZWRpbFwiOlwiXHUwMTNDXCIsXCJsY2VpbFwiOlwiXHUyMzA4XCIsXCJsY3ViXCI6XCJ7XCIsXCJMY3lcIjpcIlx1MDQxQlwiLFwibGN5XCI6XCJcdTA0M0JcIixcImxkY2FcIjpcIlx1MjkzNlwiLFwibGRxdW9cIjpcIlx1MjAxQ1wiLFwibGRxdW9yXCI6XCJcdTIwMUVcIixcImxkcmRoYXJcIjpcIlx1Mjk2N1wiLFwibGRydXNoYXJcIjpcIlx1Mjk0QlwiLFwibGRzaFwiOlwiXHUyMUIyXCIsXCJsZVwiOlwiXHUyMjY0XCIsXCJsRVwiOlwiXHUyMjY2XCIsXCJMZWZ0QW5nbGVCcmFja2V0XCI6XCJcdTI3RThcIixcIkxlZnRBcnJvd0JhclwiOlwiXHUyMUU0XCIsXCJsZWZ0YXJyb3dcIjpcIlx1MjE5MFwiLFwiTGVmdEFycm93XCI6XCJcdTIxOTBcIixcIkxlZnRhcnJvd1wiOlwiXHUyMUQwXCIsXCJMZWZ0QXJyb3dSaWdodEFycm93XCI6XCJcdTIxQzZcIixcImxlZnRhcnJvd3RhaWxcIjpcIlx1MjFBMlwiLFwiTGVmdENlaWxpbmdcIjpcIlx1MjMwOFwiLFwiTGVmdERvdWJsZUJyYWNrZXRcIjpcIlx1MjdFNlwiLFwiTGVmdERvd25UZWVWZWN0b3JcIjpcIlx1Mjk2MVwiLFwiTGVmdERvd25WZWN0b3JCYXJcIjpcIlx1Mjk1OVwiLFwiTGVmdERvd25WZWN0b3JcIjpcIlx1MjFDM1wiLFwiTGVmdEZsb29yXCI6XCJcdTIzMEFcIixcImxlZnRoYXJwb29uZG93blwiOlwiXHUyMUJEXCIsXCJsZWZ0aGFycG9vbnVwXCI6XCJcdTIxQkNcIixcImxlZnRsZWZ0YXJyb3dzXCI6XCJcdTIxQzdcIixcImxlZnRyaWdodGFycm93XCI6XCJcdTIxOTRcIixcIkxlZnRSaWdodEFycm93XCI6XCJcdTIxOTRcIixcIkxlZnRyaWdodGFycm93XCI6XCJcdTIxRDRcIixcImxlZnRyaWdodGFycm93c1wiOlwiXHUyMUM2XCIsXCJsZWZ0cmlnaHRoYXJwb29uc1wiOlwiXHUyMUNCXCIsXCJsZWZ0cmlnaHRzcXVpZ2Fycm93XCI6XCJcdTIxQURcIixcIkxlZnRSaWdodFZlY3RvclwiOlwiXHUyOTRFXCIsXCJMZWZ0VGVlQXJyb3dcIjpcIlx1MjFBNFwiLFwiTGVmdFRlZVwiOlwiXHUyMkEzXCIsXCJMZWZ0VGVlVmVjdG9yXCI6XCJcdTI5NUFcIixcImxlZnR0aHJlZXRpbWVzXCI6XCJcdTIyQ0JcIixcIkxlZnRUcmlhbmdsZUJhclwiOlwiXHUyOUNGXCIsXCJMZWZ0VHJpYW5nbGVcIjpcIlx1MjJCMlwiLFwiTGVmdFRyaWFuZ2xlRXF1YWxcIjpcIlx1MjJCNFwiLFwiTGVmdFVwRG93blZlY3RvclwiOlwiXHUyOTUxXCIsXCJMZWZ0VXBUZWVWZWN0b3JcIjpcIlx1Mjk2MFwiLFwiTGVmdFVwVmVjdG9yQmFyXCI6XCJcdTI5NThcIixcIkxlZnRVcFZlY3RvclwiOlwiXHUyMUJGXCIsXCJMZWZ0VmVjdG9yQmFyXCI6XCJcdTI5NTJcIixcIkxlZnRWZWN0b3JcIjpcIlx1MjFCQ1wiLFwibEVnXCI6XCJcdTJBOEJcIixcImxlZ1wiOlwiXHUyMkRBXCIsXCJsZXFcIjpcIlx1MjI2NFwiLFwibGVxcVwiOlwiXHUyMjY2XCIsXCJsZXFzbGFudFwiOlwiXHUyQTdEXCIsXCJsZXNjY1wiOlwiXHUyQUE4XCIsXCJsZXNcIjpcIlx1MkE3RFwiLFwibGVzZG90XCI6XCJcdTJBN0ZcIixcImxlc2RvdG9cIjpcIlx1MkE4MVwiLFwibGVzZG90b3JcIjpcIlx1MkE4M1wiLFwibGVzZ1wiOlwiXHUyMkRBXHVGRTAwXCIsXCJsZXNnZXNcIjpcIlx1MkE5M1wiLFwibGVzc2FwcHJveFwiOlwiXHUyQTg1XCIsXCJsZXNzZG90XCI6XCJcdTIyRDZcIixcImxlc3NlcWd0clwiOlwiXHUyMkRBXCIsXCJsZXNzZXFxZ3RyXCI6XCJcdTJBOEJcIixcIkxlc3NFcXVhbEdyZWF0ZXJcIjpcIlx1MjJEQVwiLFwiTGVzc0Z1bGxFcXVhbFwiOlwiXHUyMjY2XCIsXCJMZXNzR3JlYXRlclwiOlwiXHUyMjc2XCIsXCJsZXNzZ3RyXCI6XCJcdTIyNzZcIixcIkxlc3NMZXNzXCI6XCJcdTJBQTFcIixcImxlc3NzaW1cIjpcIlx1MjI3MlwiLFwiTGVzc1NsYW50RXF1YWxcIjpcIlx1MkE3RFwiLFwiTGVzc1RpbGRlXCI6XCJcdTIyNzJcIixcImxmaXNodFwiOlwiXHUyOTdDXCIsXCJsZmxvb3JcIjpcIlx1MjMwQVwiLFwiTGZyXCI6XCJcdUQ4MzVcdUREMEZcIixcImxmclwiOlwiXHVEODM1XHVERDI5XCIsXCJsZ1wiOlwiXHUyMjc2XCIsXCJsZ0VcIjpcIlx1MkE5MVwiLFwibEhhclwiOlwiXHUyOTYyXCIsXCJsaGFyZFwiOlwiXHUyMUJEXCIsXCJsaGFydVwiOlwiXHUyMUJDXCIsXCJsaGFydWxcIjpcIlx1Mjk2QVwiLFwibGhibGtcIjpcIlx1MjU4NFwiLFwiTEpjeVwiOlwiXHUwNDA5XCIsXCJsamN5XCI6XCJcdTA0NTlcIixcImxsYXJyXCI6XCJcdTIxQzdcIixcImxsXCI6XCJcdTIyNkFcIixcIkxsXCI6XCJcdTIyRDhcIixcImxsY29ybmVyXCI6XCJcdTIzMUVcIixcIkxsZWZ0YXJyb3dcIjpcIlx1MjFEQVwiLFwibGxoYXJkXCI6XCJcdTI5NkJcIixcImxsdHJpXCI6XCJcdTI1RkFcIixcIkxtaWRvdFwiOlwiXHUwMTNGXCIsXCJsbWlkb3RcIjpcIlx1MDE0MFwiLFwibG1vdXN0YWNoZVwiOlwiXHUyM0IwXCIsXCJsbW91c3RcIjpcIlx1MjNCMFwiLFwibG5hcFwiOlwiXHUyQTg5XCIsXCJsbmFwcHJveFwiOlwiXHUyQTg5XCIsXCJsbmVcIjpcIlx1MkE4N1wiLFwibG5FXCI6XCJcdTIyNjhcIixcImxuZXFcIjpcIlx1MkE4N1wiLFwibG5lcXFcIjpcIlx1MjI2OFwiLFwibG5zaW1cIjpcIlx1MjJFNlwiLFwibG9hbmdcIjpcIlx1MjdFQ1wiLFwibG9hcnJcIjpcIlx1MjFGRFwiLFwibG9icmtcIjpcIlx1MjdFNlwiLFwibG9uZ2xlZnRhcnJvd1wiOlwiXHUyN0Y1XCIsXCJMb25nTGVmdEFycm93XCI6XCJcdTI3RjVcIixcIkxvbmdsZWZ0YXJyb3dcIjpcIlx1MjdGOFwiLFwibG9uZ2xlZnRyaWdodGFycm93XCI6XCJcdTI3RjdcIixcIkxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwiXHUyN0Y3XCIsXCJMb25nbGVmdHJpZ2h0YXJyb3dcIjpcIlx1MjdGQVwiLFwibG9uZ21hcHN0b1wiOlwiXHUyN0ZDXCIsXCJsb25ncmlnaHRhcnJvd1wiOlwiXHUyN0Y2XCIsXCJMb25nUmlnaHRBcnJvd1wiOlwiXHUyN0Y2XCIsXCJMb25ncmlnaHRhcnJvd1wiOlwiXHUyN0Y5XCIsXCJsb29wYXJyb3dsZWZ0XCI6XCJcdTIxQUJcIixcImxvb3BhcnJvd3JpZ2h0XCI6XCJcdTIxQUNcIixcImxvcGFyXCI6XCJcdTI5ODVcIixcIkxvcGZcIjpcIlx1RDgzNVx1REQ0M1wiLFwibG9wZlwiOlwiXHVEODM1XHVERDVEXCIsXCJsb3BsdXNcIjpcIlx1MkEyRFwiLFwibG90aW1lc1wiOlwiXHUyQTM0XCIsXCJsb3dhc3RcIjpcIlx1MjIxN1wiLFwibG93YmFyXCI6XCJfXCIsXCJMb3dlckxlZnRBcnJvd1wiOlwiXHUyMTk5XCIsXCJMb3dlclJpZ2h0QXJyb3dcIjpcIlx1MjE5OFwiLFwibG96XCI6XCJcdTI1Q0FcIixcImxvemVuZ2VcIjpcIlx1MjVDQVwiLFwibG96ZlwiOlwiXHUyOUVCXCIsXCJscGFyXCI6XCIoXCIsXCJscGFybHRcIjpcIlx1Mjk5M1wiLFwibHJhcnJcIjpcIlx1MjFDNlwiLFwibHJjb3JuZXJcIjpcIlx1MjMxRlwiLFwibHJoYXJcIjpcIlx1MjFDQlwiLFwibHJoYXJkXCI6XCJcdTI5NkRcIixcImxybVwiOlwiXHUyMDBFXCIsXCJscnRyaVwiOlwiXHUyMkJGXCIsXCJsc2FxdW9cIjpcIlx1MjAzOVwiLFwibHNjclwiOlwiXHVEODM1XHVEQ0MxXCIsXCJMc2NyXCI6XCJcdTIxMTJcIixcImxzaFwiOlwiXHUyMUIwXCIsXCJMc2hcIjpcIlx1MjFCMFwiLFwibHNpbVwiOlwiXHUyMjcyXCIsXCJsc2ltZVwiOlwiXHUyQThEXCIsXCJsc2ltZ1wiOlwiXHUyQThGXCIsXCJsc3FiXCI6XCJbXCIsXCJsc3F1b1wiOlwiXHUyMDE4XCIsXCJsc3F1b3JcIjpcIlx1MjAxQVwiLFwiTHN0cm9rXCI6XCJcdTAxNDFcIixcImxzdHJva1wiOlwiXHUwMTQyXCIsXCJsdGNjXCI6XCJcdTJBQTZcIixcImx0Y2lyXCI6XCJcdTJBNzlcIixcImx0XCI6XCI8XCIsXCJMVFwiOlwiPFwiLFwiTHRcIjpcIlx1MjI2QVwiLFwibHRkb3RcIjpcIlx1MjJENlwiLFwibHRocmVlXCI6XCJcdTIyQ0JcIixcImx0aW1lc1wiOlwiXHUyMkM5XCIsXCJsdGxhcnJcIjpcIlx1Mjk3NlwiLFwibHRxdWVzdFwiOlwiXHUyQTdCXCIsXCJsdHJpXCI6XCJcdTI1QzNcIixcImx0cmllXCI6XCJcdTIyQjRcIixcImx0cmlmXCI6XCJcdTI1QzJcIixcImx0clBhclwiOlwiXHUyOTk2XCIsXCJsdXJkc2hhclwiOlwiXHUyOTRBXCIsXCJsdXJ1aGFyXCI6XCJcdTI5NjZcIixcImx2ZXJ0bmVxcVwiOlwiXHUyMjY4XHVGRTAwXCIsXCJsdm5FXCI6XCJcdTIyNjhcdUZFMDBcIixcIm1hY3JcIjpcIlx1MDBBRlwiLFwibWFsZVwiOlwiXHUyNjQyXCIsXCJtYWx0XCI6XCJcdTI3MjBcIixcIm1hbHRlc2VcIjpcIlx1MjcyMFwiLFwiTWFwXCI6XCJcdTI5MDVcIixcIm1hcFwiOlwiXHUyMUE2XCIsXCJtYXBzdG9cIjpcIlx1MjFBNlwiLFwibWFwc3RvZG93blwiOlwiXHUyMUE3XCIsXCJtYXBzdG9sZWZ0XCI6XCJcdTIxQTRcIixcIm1hcHN0b3VwXCI6XCJcdTIxQTVcIixcIm1hcmtlclwiOlwiXHUyNUFFXCIsXCJtY29tbWFcIjpcIlx1MkEyOVwiLFwiTWN5XCI6XCJcdTA0MUNcIixcIm1jeVwiOlwiXHUwNDNDXCIsXCJtZGFzaFwiOlwiXHUyMDE0XCIsXCJtRERvdFwiOlwiXHUyMjNBXCIsXCJtZWFzdXJlZGFuZ2xlXCI6XCJcdTIyMjFcIixcIk1lZGl1bVNwYWNlXCI6XCJcdTIwNUZcIixcIk1lbGxpbnRyZlwiOlwiXHUyMTMzXCIsXCJNZnJcIjpcIlx1RDgzNVx1REQxMFwiLFwibWZyXCI6XCJcdUQ4MzVcdUREMkFcIixcIm1ob1wiOlwiXHUyMTI3XCIsXCJtaWNyb1wiOlwiXHUwMEI1XCIsXCJtaWRhc3RcIjpcIipcIixcIm1pZGNpclwiOlwiXHUyQUYwXCIsXCJtaWRcIjpcIlx1MjIyM1wiLFwibWlkZG90XCI6XCJcdTAwQjdcIixcIm1pbnVzYlwiOlwiXHUyMjlGXCIsXCJtaW51c1wiOlwiXHUyMjEyXCIsXCJtaW51c2RcIjpcIlx1MjIzOFwiLFwibWludXNkdVwiOlwiXHUyQTJBXCIsXCJNaW51c1BsdXNcIjpcIlx1MjIxM1wiLFwibWxjcFwiOlwiXHUyQURCXCIsXCJtbGRyXCI6XCJcdTIwMjZcIixcIm1ucGx1c1wiOlwiXHUyMjEzXCIsXCJtb2RlbHNcIjpcIlx1MjJBN1wiLFwiTW9wZlwiOlwiXHVEODM1XHVERDQ0XCIsXCJtb3BmXCI6XCJcdUQ4MzVcdURENUVcIixcIm1wXCI6XCJcdTIyMTNcIixcIm1zY3JcIjpcIlx1RDgzNVx1RENDMlwiLFwiTXNjclwiOlwiXHUyMTMzXCIsXCJtc3Rwb3NcIjpcIlx1MjIzRVwiLFwiTXVcIjpcIlx1MDM5Q1wiLFwibXVcIjpcIlx1MDNCQ1wiLFwibXVsdGltYXBcIjpcIlx1MjJCOFwiLFwibXVtYXBcIjpcIlx1MjJCOFwiLFwibmFibGFcIjpcIlx1MjIwN1wiLFwiTmFjdXRlXCI6XCJcdTAxNDNcIixcIm5hY3V0ZVwiOlwiXHUwMTQ0XCIsXCJuYW5nXCI6XCJcdTIyMjBcdTIwRDJcIixcIm5hcFwiOlwiXHUyMjQ5XCIsXCJuYXBFXCI6XCJcdTJBNzBcdTAzMzhcIixcIm5hcGlkXCI6XCJcdTIyNEJcdTAzMzhcIixcIm5hcG9zXCI6XCJcdTAxNDlcIixcIm5hcHByb3hcIjpcIlx1MjI0OVwiLFwibmF0dXJhbFwiOlwiXHUyNjZFXCIsXCJuYXR1cmFsc1wiOlwiXHUyMTE1XCIsXCJuYXR1clwiOlwiXHUyNjZFXCIsXCJuYnNwXCI6XCJcdTAwQTBcIixcIm5idW1wXCI6XCJcdTIyNEVcdTAzMzhcIixcIm5idW1wZVwiOlwiXHUyMjRGXHUwMzM4XCIsXCJuY2FwXCI6XCJcdTJBNDNcIixcIk5jYXJvblwiOlwiXHUwMTQ3XCIsXCJuY2Fyb25cIjpcIlx1MDE0OFwiLFwiTmNlZGlsXCI6XCJcdTAxNDVcIixcIm5jZWRpbFwiOlwiXHUwMTQ2XCIsXCJuY29uZ1wiOlwiXHUyMjQ3XCIsXCJuY29uZ2RvdFwiOlwiXHUyQTZEXHUwMzM4XCIsXCJuY3VwXCI6XCJcdTJBNDJcIixcIk5jeVwiOlwiXHUwNDFEXCIsXCJuY3lcIjpcIlx1MDQzRFwiLFwibmRhc2hcIjpcIlx1MjAxM1wiLFwibmVhcmhrXCI6XCJcdTI5MjRcIixcIm5lYXJyXCI6XCJcdTIxOTdcIixcIm5lQXJyXCI6XCJcdTIxRDdcIixcIm5lYXJyb3dcIjpcIlx1MjE5N1wiLFwibmVcIjpcIlx1MjI2MFwiLFwibmVkb3RcIjpcIlx1MjI1MFx1MDMzOFwiLFwiTmVnYXRpdmVNZWRpdW1TcGFjZVwiOlwiXHUyMDBCXCIsXCJOZWdhdGl2ZVRoaWNrU3BhY2VcIjpcIlx1MjAwQlwiLFwiTmVnYXRpdmVUaGluU3BhY2VcIjpcIlx1MjAwQlwiLFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlXCI6XCJcdTIwMEJcIixcIm5lcXVpdlwiOlwiXHUyMjYyXCIsXCJuZXNlYXJcIjpcIlx1MjkyOFwiLFwibmVzaW1cIjpcIlx1MjI0Mlx1MDMzOFwiLFwiTmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIlx1MjI2QlwiLFwiTmVzdGVkTGVzc0xlc3NcIjpcIlx1MjI2QVwiLFwiTmV3TGluZVwiOlwiXFxuXCIsXCJuZXhpc3RcIjpcIlx1MjIwNFwiLFwibmV4aXN0c1wiOlwiXHUyMjA0XCIsXCJOZnJcIjpcIlx1RDgzNVx1REQxMVwiLFwibmZyXCI6XCJcdUQ4MzVcdUREMkJcIixcIm5nRVwiOlwiXHUyMjY3XHUwMzM4XCIsXCJuZ2VcIjpcIlx1MjI3MVwiLFwibmdlcVwiOlwiXHUyMjcxXCIsXCJuZ2VxcVwiOlwiXHUyMjY3XHUwMzM4XCIsXCJuZ2Vxc2xhbnRcIjpcIlx1MkE3RVx1MDMzOFwiLFwibmdlc1wiOlwiXHUyQTdFXHUwMzM4XCIsXCJuR2dcIjpcIlx1MjJEOVx1MDMzOFwiLFwibmdzaW1cIjpcIlx1MjI3NVwiLFwibkd0XCI6XCJcdTIyNkJcdTIwRDJcIixcIm5ndFwiOlwiXHUyMjZGXCIsXCJuZ3RyXCI6XCJcdTIyNkZcIixcIm5HdHZcIjpcIlx1MjI2Qlx1MDMzOFwiLFwibmhhcnJcIjpcIlx1MjFBRVwiLFwibmhBcnJcIjpcIlx1MjFDRVwiLFwibmhwYXJcIjpcIlx1MkFGMlwiLFwibmlcIjpcIlx1MjIwQlwiLFwibmlzXCI6XCJcdTIyRkNcIixcIm5pc2RcIjpcIlx1MjJGQVwiLFwibml2XCI6XCJcdTIyMEJcIixcIk5KY3lcIjpcIlx1MDQwQVwiLFwibmpjeVwiOlwiXHUwNDVBXCIsXCJubGFyclwiOlwiXHUyMTlBXCIsXCJubEFyclwiOlwiXHUyMUNEXCIsXCJubGRyXCI6XCJcdTIwMjVcIixcIm5sRVwiOlwiXHUyMjY2XHUwMzM4XCIsXCJubGVcIjpcIlx1MjI3MFwiLFwibmxlZnRhcnJvd1wiOlwiXHUyMTlBXCIsXCJuTGVmdGFycm93XCI6XCJcdTIxQ0RcIixcIm5sZWZ0cmlnaHRhcnJvd1wiOlwiXHUyMUFFXCIsXCJuTGVmdHJpZ2h0YXJyb3dcIjpcIlx1MjFDRVwiLFwibmxlcVwiOlwiXHUyMjcwXCIsXCJubGVxcVwiOlwiXHUyMjY2XHUwMzM4XCIsXCJubGVxc2xhbnRcIjpcIlx1MkE3RFx1MDMzOFwiLFwibmxlc1wiOlwiXHUyQTdEXHUwMzM4XCIsXCJubGVzc1wiOlwiXHUyMjZFXCIsXCJuTGxcIjpcIlx1MjJEOFx1MDMzOFwiLFwibmxzaW1cIjpcIlx1MjI3NFwiLFwibkx0XCI6XCJcdTIyNkFcdTIwRDJcIixcIm5sdFwiOlwiXHUyMjZFXCIsXCJubHRyaVwiOlwiXHUyMkVBXCIsXCJubHRyaWVcIjpcIlx1MjJFQ1wiLFwibkx0dlwiOlwiXHUyMjZBXHUwMzM4XCIsXCJubWlkXCI6XCJcdTIyMjRcIixcIk5vQnJlYWtcIjpcIlx1MjA2MFwiLFwiTm9uQnJlYWtpbmdTcGFjZVwiOlwiXHUwMEEwXCIsXCJub3BmXCI6XCJcdUQ4MzVcdURENUZcIixcIk5vcGZcIjpcIlx1MjExNVwiLFwiTm90XCI6XCJcdTJBRUNcIixcIm5vdFwiOlwiXHUwMEFDXCIsXCJOb3RDb25ncnVlbnRcIjpcIlx1MjI2MlwiLFwiTm90Q3VwQ2FwXCI6XCJcdTIyNkRcIixcIk5vdERvdWJsZVZlcnRpY2FsQmFyXCI6XCJcdTIyMjZcIixcIk5vdEVsZW1lbnRcIjpcIlx1MjIwOVwiLFwiTm90RXF1YWxcIjpcIlx1MjI2MFwiLFwiTm90RXF1YWxUaWxkZVwiOlwiXHUyMjQyXHUwMzM4XCIsXCJOb3RFeGlzdHNcIjpcIlx1MjIwNFwiLFwiTm90R3JlYXRlclwiOlwiXHUyMjZGXCIsXCJOb3RHcmVhdGVyRXF1YWxcIjpcIlx1MjI3MVwiLFwiTm90R3JlYXRlckZ1bGxFcXVhbFwiOlwiXHUyMjY3XHUwMzM4XCIsXCJOb3RHcmVhdGVyR3JlYXRlclwiOlwiXHUyMjZCXHUwMzM4XCIsXCJOb3RHcmVhdGVyTGVzc1wiOlwiXHUyMjc5XCIsXCJOb3RHcmVhdGVyU2xhbnRFcXVhbFwiOlwiXHUyQTdFXHUwMzM4XCIsXCJOb3RHcmVhdGVyVGlsZGVcIjpcIlx1MjI3NVwiLFwiTm90SHVtcERvd25IdW1wXCI6XCJcdTIyNEVcdTAzMzhcIixcIk5vdEh1bXBFcXVhbFwiOlwiXHUyMjRGXHUwMzM4XCIsXCJub3RpblwiOlwiXHUyMjA5XCIsXCJub3RpbmRvdFwiOlwiXHUyMkY1XHUwMzM4XCIsXCJub3RpbkVcIjpcIlx1MjJGOVx1MDMzOFwiLFwibm90aW52YVwiOlwiXHUyMjA5XCIsXCJub3RpbnZiXCI6XCJcdTIyRjdcIixcIm5vdGludmNcIjpcIlx1MjJGNlwiLFwiTm90TGVmdFRyaWFuZ2xlQmFyXCI6XCJcdTI5Q0ZcdTAzMzhcIixcIk5vdExlZnRUcmlhbmdsZVwiOlwiXHUyMkVBXCIsXCJOb3RMZWZ0VHJpYW5nbGVFcXVhbFwiOlwiXHUyMkVDXCIsXCJOb3RMZXNzXCI6XCJcdTIyNkVcIixcIk5vdExlc3NFcXVhbFwiOlwiXHUyMjcwXCIsXCJOb3RMZXNzR3JlYXRlclwiOlwiXHUyMjc4XCIsXCJOb3RMZXNzTGVzc1wiOlwiXHUyMjZBXHUwMzM4XCIsXCJOb3RMZXNzU2xhbnRFcXVhbFwiOlwiXHUyQTdEXHUwMzM4XCIsXCJOb3RMZXNzVGlsZGVcIjpcIlx1MjI3NFwiLFwiTm90TmVzdGVkR3JlYXRlckdyZWF0ZXJcIjpcIlx1MkFBMlx1MDMzOFwiLFwiTm90TmVzdGVkTGVzc0xlc3NcIjpcIlx1MkFBMVx1MDMzOFwiLFwibm90bmlcIjpcIlx1MjIwQ1wiLFwibm90bml2YVwiOlwiXHUyMjBDXCIsXCJub3RuaXZiXCI6XCJcdTIyRkVcIixcIm5vdG5pdmNcIjpcIlx1MjJGRFwiLFwiTm90UHJlY2VkZXNcIjpcIlx1MjI4MFwiLFwiTm90UHJlY2VkZXNFcXVhbFwiOlwiXHUyQUFGXHUwMzM4XCIsXCJOb3RQcmVjZWRlc1NsYW50RXF1YWxcIjpcIlx1MjJFMFwiLFwiTm90UmV2ZXJzZUVsZW1lbnRcIjpcIlx1MjIwQ1wiLFwiTm90UmlnaHRUcmlhbmdsZUJhclwiOlwiXHUyOUQwXHUwMzM4XCIsXCJOb3RSaWdodFRyaWFuZ2xlXCI6XCJcdTIyRUJcIixcIk5vdFJpZ2h0VHJpYW5nbGVFcXVhbFwiOlwiXHUyMkVEXCIsXCJOb3RTcXVhcmVTdWJzZXRcIjpcIlx1MjI4Rlx1MDMzOFwiLFwiTm90U3F1YXJlU3Vic2V0RXF1YWxcIjpcIlx1MjJFMlwiLFwiTm90U3F1YXJlU3VwZXJzZXRcIjpcIlx1MjI5MFx1MDMzOFwiLFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwiXHUyMkUzXCIsXCJOb3RTdWJzZXRcIjpcIlx1MjI4Mlx1MjBEMlwiLFwiTm90U3Vic2V0RXF1YWxcIjpcIlx1MjI4OFwiLFwiTm90U3VjY2VlZHNcIjpcIlx1MjI4MVwiLFwiTm90U3VjY2VlZHNFcXVhbFwiOlwiXHUyQUIwXHUwMzM4XCIsXCJOb3RTdWNjZWVkc1NsYW50RXF1YWxcIjpcIlx1MjJFMVwiLFwiTm90U3VjY2VlZHNUaWxkZVwiOlwiXHUyMjdGXHUwMzM4XCIsXCJOb3RTdXBlcnNldFwiOlwiXHUyMjgzXHUyMEQyXCIsXCJOb3RTdXBlcnNldEVxdWFsXCI6XCJcdTIyODlcIixcIk5vdFRpbGRlXCI6XCJcdTIyNDFcIixcIk5vdFRpbGRlRXF1YWxcIjpcIlx1MjI0NFwiLFwiTm90VGlsZGVGdWxsRXF1YWxcIjpcIlx1MjI0N1wiLFwiTm90VGlsZGVUaWxkZVwiOlwiXHUyMjQ5XCIsXCJOb3RWZXJ0aWNhbEJhclwiOlwiXHUyMjI0XCIsXCJucGFyYWxsZWxcIjpcIlx1MjIyNlwiLFwibnBhclwiOlwiXHUyMjI2XCIsXCJucGFyc2xcIjpcIlx1MkFGRFx1MjBFNVwiLFwibnBhcnRcIjpcIlx1MjIwMlx1MDMzOFwiLFwibnBvbGludFwiOlwiXHUyQTE0XCIsXCJucHJcIjpcIlx1MjI4MFwiLFwibnByY3VlXCI6XCJcdTIyRTBcIixcIm5wcmVjXCI6XCJcdTIyODBcIixcIm5wcmVjZXFcIjpcIlx1MkFBRlx1MDMzOFwiLFwibnByZVwiOlwiXHUyQUFGXHUwMzM4XCIsXCJucmFycmNcIjpcIlx1MjkzM1x1MDMzOFwiLFwibnJhcnJcIjpcIlx1MjE5QlwiLFwibnJBcnJcIjpcIlx1MjFDRlwiLFwibnJhcnJ3XCI6XCJcdTIxOURcdTAzMzhcIixcIm5yaWdodGFycm93XCI6XCJcdTIxOUJcIixcIm5SaWdodGFycm93XCI6XCJcdTIxQ0ZcIixcIm5ydHJpXCI6XCJcdTIyRUJcIixcIm5ydHJpZVwiOlwiXHUyMkVEXCIsXCJuc2NcIjpcIlx1MjI4MVwiLFwibnNjY3VlXCI6XCJcdTIyRTFcIixcIm5zY2VcIjpcIlx1MkFCMFx1MDMzOFwiLFwiTnNjclwiOlwiXHVEODM1XHVEQ0E5XCIsXCJuc2NyXCI6XCJcdUQ4MzVcdURDQzNcIixcIm5zaG9ydG1pZFwiOlwiXHUyMjI0XCIsXCJuc2hvcnRwYXJhbGxlbFwiOlwiXHUyMjI2XCIsXCJuc2ltXCI6XCJcdTIyNDFcIixcIm5zaW1lXCI6XCJcdTIyNDRcIixcIm5zaW1lcVwiOlwiXHUyMjQ0XCIsXCJuc21pZFwiOlwiXHUyMjI0XCIsXCJuc3BhclwiOlwiXHUyMjI2XCIsXCJuc3FzdWJlXCI6XCJcdTIyRTJcIixcIm5zcXN1cGVcIjpcIlx1MjJFM1wiLFwibnN1YlwiOlwiXHUyMjg0XCIsXCJuc3ViRVwiOlwiXHUyQUM1XHUwMzM4XCIsXCJuc3ViZVwiOlwiXHUyMjg4XCIsXCJuc3Vic2V0XCI6XCJcdTIyODJcdTIwRDJcIixcIm5zdWJzZXRlcVwiOlwiXHUyMjg4XCIsXCJuc3Vic2V0ZXFxXCI6XCJcdTJBQzVcdTAzMzhcIixcIm5zdWNjXCI6XCJcdTIyODFcIixcIm5zdWNjZXFcIjpcIlx1MkFCMFx1MDMzOFwiLFwibnN1cFwiOlwiXHUyMjg1XCIsXCJuc3VwRVwiOlwiXHUyQUM2XHUwMzM4XCIsXCJuc3VwZVwiOlwiXHUyMjg5XCIsXCJuc3Vwc2V0XCI6XCJcdTIyODNcdTIwRDJcIixcIm5zdXBzZXRlcVwiOlwiXHUyMjg5XCIsXCJuc3Vwc2V0ZXFxXCI6XCJcdTJBQzZcdTAzMzhcIixcIm50Z2xcIjpcIlx1MjI3OVwiLFwiTnRpbGRlXCI6XCJcdTAwRDFcIixcIm50aWxkZVwiOlwiXHUwMEYxXCIsXCJudGxnXCI6XCJcdTIyNzhcIixcIm50cmlhbmdsZWxlZnRcIjpcIlx1MjJFQVwiLFwibnRyaWFuZ2xlbGVmdGVxXCI6XCJcdTIyRUNcIixcIm50cmlhbmdsZXJpZ2h0XCI6XCJcdTIyRUJcIixcIm50cmlhbmdsZXJpZ2h0ZXFcIjpcIlx1MjJFRFwiLFwiTnVcIjpcIlx1MDM5RFwiLFwibnVcIjpcIlx1MDNCRFwiLFwibnVtXCI6XCIjXCIsXCJudW1lcm9cIjpcIlx1MjExNlwiLFwibnVtc3BcIjpcIlx1MjAwN1wiLFwibnZhcFwiOlwiXHUyMjREXHUyMEQyXCIsXCJudmRhc2hcIjpcIlx1MjJBQ1wiLFwibnZEYXNoXCI6XCJcdTIyQURcIixcIm5WZGFzaFwiOlwiXHUyMkFFXCIsXCJuVkRhc2hcIjpcIlx1MjJBRlwiLFwibnZnZVwiOlwiXHUyMjY1XHUyMEQyXCIsXCJudmd0XCI6XCI+XHUyMEQyXCIsXCJudkhhcnJcIjpcIlx1MjkwNFwiLFwibnZpbmZpblwiOlwiXHUyOURFXCIsXCJudmxBcnJcIjpcIlx1MjkwMlwiLFwibnZsZVwiOlwiXHUyMjY0XHUyMEQyXCIsXCJudmx0XCI6XCI8XHUyMEQyXCIsXCJudmx0cmllXCI6XCJcdTIyQjRcdTIwRDJcIixcIm52ckFyclwiOlwiXHUyOTAzXCIsXCJudnJ0cmllXCI6XCJcdTIyQjVcdTIwRDJcIixcIm52c2ltXCI6XCJcdTIyM0NcdTIwRDJcIixcIm53YXJoa1wiOlwiXHUyOTIzXCIsXCJud2FyclwiOlwiXHUyMTk2XCIsXCJud0FyclwiOlwiXHUyMUQ2XCIsXCJud2Fycm93XCI6XCJcdTIxOTZcIixcIm53bmVhclwiOlwiXHUyOTI3XCIsXCJPYWN1dGVcIjpcIlx1MDBEM1wiLFwib2FjdXRlXCI6XCJcdTAwRjNcIixcIm9hc3RcIjpcIlx1MjI5QlwiLFwiT2NpcmNcIjpcIlx1MDBENFwiLFwib2NpcmNcIjpcIlx1MDBGNFwiLFwib2NpclwiOlwiXHUyMjlBXCIsXCJPY3lcIjpcIlx1MDQxRVwiLFwib2N5XCI6XCJcdTA0M0VcIixcIm9kYXNoXCI6XCJcdTIyOURcIixcIk9kYmxhY1wiOlwiXHUwMTUwXCIsXCJvZGJsYWNcIjpcIlx1MDE1MVwiLFwib2RpdlwiOlwiXHUyQTM4XCIsXCJvZG90XCI6XCJcdTIyOTlcIixcIm9kc29sZFwiOlwiXHUyOUJDXCIsXCJPRWxpZ1wiOlwiXHUwMTUyXCIsXCJvZWxpZ1wiOlwiXHUwMTUzXCIsXCJvZmNpclwiOlwiXHUyOUJGXCIsXCJPZnJcIjpcIlx1RDgzNVx1REQxMlwiLFwib2ZyXCI6XCJcdUQ4MzVcdUREMkNcIixcIm9nb25cIjpcIlx1MDJEQlwiLFwiT2dyYXZlXCI6XCJcdTAwRDJcIixcIm9ncmF2ZVwiOlwiXHUwMEYyXCIsXCJvZ3RcIjpcIlx1MjlDMVwiLFwib2hiYXJcIjpcIlx1MjlCNVwiLFwib2htXCI6XCJcdTAzQTlcIixcIm9pbnRcIjpcIlx1MjIyRVwiLFwib2xhcnJcIjpcIlx1MjFCQVwiLFwib2xjaXJcIjpcIlx1MjlCRVwiLFwib2xjcm9zc1wiOlwiXHUyOUJCXCIsXCJvbGluZVwiOlwiXHUyMDNFXCIsXCJvbHRcIjpcIlx1MjlDMFwiLFwiT21hY3JcIjpcIlx1MDE0Q1wiLFwib21hY3JcIjpcIlx1MDE0RFwiLFwiT21lZ2FcIjpcIlx1MDNBOVwiLFwib21lZ2FcIjpcIlx1MDNDOVwiLFwiT21pY3JvblwiOlwiXHUwMzlGXCIsXCJvbWljcm9uXCI6XCJcdTAzQkZcIixcIm9taWRcIjpcIlx1MjlCNlwiLFwib21pbnVzXCI6XCJcdTIyOTZcIixcIk9vcGZcIjpcIlx1RDgzNVx1REQ0NlwiLFwib29wZlwiOlwiXHVEODM1XHVERDYwXCIsXCJvcGFyXCI6XCJcdTI5QjdcIixcIk9wZW5DdXJseURvdWJsZVF1b3RlXCI6XCJcdTIwMUNcIixcIk9wZW5DdXJseVF1b3RlXCI6XCJcdTIwMThcIixcIm9wZXJwXCI6XCJcdTI5QjlcIixcIm9wbHVzXCI6XCJcdTIyOTVcIixcIm9yYXJyXCI6XCJcdTIxQkJcIixcIk9yXCI6XCJcdTJBNTRcIixcIm9yXCI6XCJcdTIyMjhcIixcIm9yZFwiOlwiXHUyQTVEXCIsXCJvcmRlclwiOlwiXHUyMTM0XCIsXCJvcmRlcm9mXCI6XCJcdTIxMzRcIixcIm9yZGZcIjpcIlx1MDBBQVwiLFwib3JkbVwiOlwiXHUwMEJBXCIsXCJvcmlnb2ZcIjpcIlx1MjJCNlwiLFwib3JvclwiOlwiXHUyQTU2XCIsXCJvcnNsb3BlXCI6XCJcdTJBNTdcIixcIm9ydlwiOlwiXHUyQTVCXCIsXCJvU1wiOlwiXHUyNEM4XCIsXCJPc2NyXCI6XCJcdUQ4MzVcdURDQUFcIixcIm9zY3JcIjpcIlx1MjEzNFwiLFwiT3NsYXNoXCI6XCJcdTAwRDhcIixcIm9zbGFzaFwiOlwiXHUwMEY4XCIsXCJvc29sXCI6XCJcdTIyOThcIixcIk90aWxkZVwiOlwiXHUwMEQ1XCIsXCJvdGlsZGVcIjpcIlx1MDBGNVwiLFwib3RpbWVzYXNcIjpcIlx1MkEzNlwiLFwiT3RpbWVzXCI6XCJcdTJBMzdcIixcIm90aW1lc1wiOlwiXHUyMjk3XCIsXCJPdW1sXCI6XCJcdTAwRDZcIixcIm91bWxcIjpcIlx1MDBGNlwiLFwib3ZiYXJcIjpcIlx1MjMzRFwiLFwiT3ZlckJhclwiOlwiXHUyMDNFXCIsXCJPdmVyQnJhY2VcIjpcIlx1MjNERVwiLFwiT3ZlckJyYWNrZXRcIjpcIlx1MjNCNFwiLFwiT3ZlclBhcmVudGhlc2lzXCI6XCJcdTIzRENcIixcInBhcmFcIjpcIlx1MDBCNlwiLFwicGFyYWxsZWxcIjpcIlx1MjIyNVwiLFwicGFyXCI6XCJcdTIyMjVcIixcInBhcnNpbVwiOlwiXHUyQUYzXCIsXCJwYXJzbFwiOlwiXHUyQUZEXCIsXCJwYXJ0XCI6XCJcdTIyMDJcIixcIlBhcnRpYWxEXCI6XCJcdTIyMDJcIixcIlBjeVwiOlwiXHUwNDFGXCIsXCJwY3lcIjpcIlx1MDQzRlwiLFwicGVyY250XCI6XCIlXCIsXCJwZXJpb2RcIjpcIi5cIixcInBlcm1pbFwiOlwiXHUyMDMwXCIsXCJwZXJwXCI6XCJcdTIyQTVcIixcInBlcnRlbmtcIjpcIlx1MjAzMVwiLFwiUGZyXCI6XCJcdUQ4MzVcdUREMTNcIixcInBmclwiOlwiXHVEODM1XHVERDJEXCIsXCJQaGlcIjpcIlx1MDNBNlwiLFwicGhpXCI6XCJcdTAzQzZcIixcInBoaXZcIjpcIlx1MDNENVwiLFwicGhtbWF0XCI6XCJcdTIxMzNcIixcInBob25lXCI6XCJcdTI2MEVcIixcIlBpXCI6XCJcdTAzQTBcIixcInBpXCI6XCJcdTAzQzBcIixcInBpdGNoZm9ya1wiOlwiXHUyMkQ0XCIsXCJwaXZcIjpcIlx1MDNENlwiLFwicGxhbmNrXCI6XCJcdTIxMEZcIixcInBsYW5ja2hcIjpcIlx1MjEwRVwiLFwicGxhbmt2XCI6XCJcdTIxMEZcIixcInBsdXNhY2lyXCI6XCJcdTJBMjNcIixcInBsdXNiXCI6XCJcdTIyOUVcIixcInBsdXNjaXJcIjpcIlx1MkEyMlwiLFwicGx1c1wiOlwiK1wiLFwicGx1c2RvXCI6XCJcdTIyMTRcIixcInBsdXNkdVwiOlwiXHUyQTI1XCIsXCJwbHVzZVwiOlwiXHUyQTcyXCIsXCJQbHVzTWludXNcIjpcIlx1MDBCMVwiLFwicGx1c21uXCI6XCJcdTAwQjFcIixcInBsdXNzaW1cIjpcIlx1MkEyNlwiLFwicGx1c3R3b1wiOlwiXHUyQTI3XCIsXCJwbVwiOlwiXHUwMEIxXCIsXCJQb2luY2FyZXBsYW5lXCI6XCJcdTIxMENcIixcInBvaW50aW50XCI6XCJcdTJBMTVcIixcInBvcGZcIjpcIlx1RDgzNVx1REQ2MVwiLFwiUG9wZlwiOlwiXHUyMTE5XCIsXCJwb3VuZFwiOlwiXHUwMEEzXCIsXCJwcmFwXCI6XCJcdTJBQjdcIixcIlByXCI6XCJcdTJBQkJcIixcInByXCI6XCJcdTIyN0FcIixcInByY3VlXCI6XCJcdTIyN0NcIixcInByZWNhcHByb3hcIjpcIlx1MkFCN1wiLFwicHJlY1wiOlwiXHUyMjdBXCIsXCJwcmVjY3VybHllcVwiOlwiXHUyMjdDXCIsXCJQcmVjZWRlc1wiOlwiXHUyMjdBXCIsXCJQcmVjZWRlc0VxdWFsXCI6XCJcdTJBQUZcIixcIlByZWNlZGVzU2xhbnRFcXVhbFwiOlwiXHUyMjdDXCIsXCJQcmVjZWRlc1RpbGRlXCI6XCJcdTIyN0VcIixcInByZWNlcVwiOlwiXHUyQUFGXCIsXCJwcmVjbmFwcHJveFwiOlwiXHUyQUI5XCIsXCJwcmVjbmVxcVwiOlwiXHUyQUI1XCIsXCJwcmVjbnNpbVwiOlwiXHUyMkU4XCIsXCJwcmVcIjpcIlx1MkFBRlwiLFwicHJFXCI6XCJcdTJBQjNcIixcInByZWNzaW1cIjpcIlx1MjI3RVwiLFwicHJpbWVcIjpcIlx1MjAzMlwiLFwiUHJpbWVcIjpcIlx1MjAzM1wiLFwicHJpbWVzXCI6XCJcdTIxMTlcIixcInBybmFwXCI6XCJcdTJBQjlcIixcInBybkVcIjpcIlx1MkFCNVwiLFwicHJuc2ltXCI6XCJcdTIyRThcIixcInByb2RcIjpcIlx1MjIwRlwiLFwiUHJvZHVjdFwiOlwiXHUyMjBGXCIsXCJwcm9mYWxhclwiOlwiXHUyMzJFXCIsXCJwcm9mbGluZVwiOlwiXHUyMzEyXCIsXCJwcm9mc3VyZlwiOlwiXHUyMzEzXCIsXCJwcm9wXCI6XCJcdTIyMURcIixcIlByb3BvcnRpb25hbFwiOlwiXHUyMjFEXCIsXCJQcm9wb3J0aW9uXCI6XCJcdTIyMzdcIixcInByb3B0b1wiOlwiXHUyMjFEXCIsXCJwcnNpbVwiOlwiXHUyMjdFXCIsXCJwcnVyZWxcIjpcIlx1MjJCMFwiLFwiUHNjclwiOlwiXHVEODM1XHVEQ0FCXCIsXCJwc2NyXCI6XCJcdUQ4MzVcdURDQzVcIixcIlBzaVwiOlwiXHUwM0E4XCIsXCJwc2lcIjpcIlx1MDNDOFwiLFwicHVuY3NwXCI6XCJcdTIwMDhcIixcIlFmclwiOlwiXHVEODM1XHVERDE0XCIsXCJxZnJcIjpcIlx1RDgzNVx1REQyRVwiLFwicWludFwiOlwiXHUyQTBDXCIsXCJxb3BmXCI6XCJcdUQ4MzVcdURENjJcIixcIlFvcGZcIjpcIlx1MjExQVwiLFwicXByaW1lXCI6XCJcdTIwNTdcIixcIlFzY3JcIjpcIlx1RDgzNVx1RENBQ1wiLFwicXNjclwiOlwiXHVEODM1XHVEQ0M2XCIsXCJxdWF0ZXJuaW9uc1wiOlwiXHUyMTBEXCIsXCJxdWF0aW50XCI6XCJcdTJBMTZcIixcInF1ZXN0XCI6XCI/XCIsXCJxdWVzdGVxXCI6XCJcdTIyNUZcIixcInF1b3RcIjpcIlxcXCJcIixcIlFVT1RcIjpcIlxcXCJcIixcInJBYXJyXCI6XCJcdTIxREJcIixcInJhY2VcIjpcIlx1MjIzRFx1MDMzMVwiLFwiUmFjdXRlXCI6XCJcdTAxNTRcIixcInJhY3V0ZVwiOlwiXHUwMTU1XCIsXCJyYWRpY1wiOlwiXHUyMjFBXCIsXCJyYWVtcHR5dlwiOlwiXHUyOUIzXCIsXCJyYW5nXCI6XCJcdTI3RTlcIixcIlJhbmdcIjpcIlx1MjdFQlwiLFwicmFuZ2RcIjpcIlx1Mjk5MlwiLFwicmFuZ2VcIjpcIlx1MjlBNVwiLFwicmFuZ2xlXCI6XCJcdTI3RTlcIixcInJhcXVvXCI6XCJcdTAwQkJcIixcInJhcnJhcFwiOlwiXHUyOTc1XCIsXCJyYXJyYlwiOlwiXHUyMUU1XCIsXCJyYXJyYmZzXCI6XCJcdTI5MjBcIixcInJhcnJjXCI6XCJcdTI5MzNcIixcInJhcnJcIjpcIlx1MjE5MlwiLFwiUmFyclwiOlwiXHUyMUEwXCIsXCJyQXJyXCI6XCJcdTIxRDJcIixcInJhcnJmc1wiOlwiXHUyOTFFXCIsXCJyYXJyaGtcIjpcIlx1MjFBQVwiLFwicmFycmxwXCI6XCJcdTIxQUNcIixcInJhcnJwbFwiOlwiXHUyOTQ1XCIsXCJyYXJyc2ltXCI6XCJcdTI5NzRcIixcIlJhcnJ0bFwiOlwiXHUyOTE2XCIsXCJyYXJydGxcIjpcIlx1MjFBM1wiLFwicmFycndcIjpcIlx1MjE5RFwiLFwicmF0YWlsXCI6XCJcdTI5MUFcIixcInJBdGFpbFwiOlwiXHUyOTFDXCIsXCJyYXRpb1wiOlwiXHUyMjM2XCIsXCJyYXRpb25hbHNcIjpcIlx1MjExQVwiLFwicmJhcnJcIjpcIlx1MjkwRFwiLFwickJhcnJcIjpcIlx1MjkwRlwiLFwiUkJhcnJcIjpcIlx1MjkxMFwiLFwicmJicmtcIjpcIlx1Mjc3M1wiLFwicmJyYWNlXCI6XCJ9XCIsXCJyYnJhY2tcIjpcIl1cIixcInJicmtlXCI6XCJcdTI5OENcIixcInJicmtzbGRcIjpcIlx1Mjk4RVwiLFwicmJya3NsdVwiOlwiXHUyOTkwXCIsXCJSY2Fyb25cIjpcIlx1MDE1OFwiLFwicmNhcm9uXCI6XCJcdTAxNTlcIixcIlJjZWRpbFwiOlwiXHUwMTU2XCIsXCJyY2VkaWxcIjpcIlx1MDE1N1wiLFwicmNlaWxcIjpcIlx1MjMwOVwiLFwicmN1YlwiOlwifVwiLFwiUmN5XCI6XCJcdTA0MjBcIixcInJjeVwiOlwiXHUwNDQwXCIsXCJyZGNhXCI6XCJcdTI5MzdcIixcInJkbGRoYXJcIjpcIlx1Mjk2OVwiLFwicmRxdW9cIjpcIlx1MjAxRFwiLFwicmRxdW9yXCI6XCJcdTIwMURcIixcInJkc2hcIjpcIlx1MjFCM1wiLFwicmVhbFwiOlwiXHUyMTFDXCIsXCJyZWFsaW5lXCI6XCJcdTIxMUJcIixcInJlYWxwYXJ0XCI6XCJcdTIxMUNcIixcInJlYWxzXCI6XCJcdTIxMURcIixcIlJlXCI6XCJcdTIxMUNcIixcInJlY3RcIjpcIlx1MjVBRFwiLFwicmVnXCI6XCJcdTAwQUVcIixcIlJFR1wiOlwiXHUwMEFFXCIsXCJSZXZlcnNlRWxlbWVudFwiOlwiXHUyMjBCXCIsXCJSZXZlcnNlRXF1aWxpYnJpdW1cIjpcIlx1MjFDQlwiLFwiUmV2ZXJzZVVwRXF1aWxpYnJpdW1cIjpcIlx1Mjk2RlwiLFwicmZpc2h0XCI6XCJcdTI5N0RcIixcInJmbG9vclwiOlwiXHUyMzBCXCIsXCJyZnJcIjpcIlx1RDgzNVx1REQyRlwiLFwiUmZyXCI6XCJcdTIxMUNcIixcInJIYXJcIjpcIlx1Mjk2NFwiLFwicmhhcmRcIjpcIlx1MjFDMVwiLFwicmhhcnVcIjpcIlx1MjFDMFwiLFwicmhhcnVsXCI6XCJcdTI5NkNcIixcIlJob1wiOlwiXHUwM0ExXCIsXCJyaG9cIjpcIlx1MDNDMVwiLFwicmhvdlwiOlwiXHUwM0YxXCIsXCJSaWdodEFuZ2xlQnJhY2tldFwiOlwiXHUyN0U5XCIsXCJSaWdodEFycm93QmFyXCI6XCJcdTIxRTVcIixcInJpZ2h0YXJyb3dcIjpcIlx1MjE5MlwiLFwiUmlnaHRBcnJvd1wiOlwiXHUyMTkyXCIsXCJSaWdodGFycm93XCI6XCJcdTIxRDJcIixcIlJpZ2h0QXJyb3dMZWZ0QXJyb3dcIjpcIlx1MjFDNFwiLFwicmlnaHRhcnJvd3RhaWxcIjpcIlx1MjFBM1wiLFwiUmlnaHRDZWlsaW5nXCI6XCJcdTIzMDlcIixcIlJpZ2h0RG91YmxlQnJhY2tldFwiOlwiXHUyN0U3XCIsXCJSaWdodERvd25UZWVWZWN0b3JcIjpcIlx1Mjk1RFwiLFwiUmlnaHREb3duVmVjdG9yQmFyXCI6XCJcdTI5NTVcIixcIlJpZ2h0RG93blZlY3RvclwiOlwiXHUyMUMyXCIsXCJSaWdodEZsb29yXCI6XCJcdTIzMEJcIixcInJpZ2h0aGFycG9vbmRvd25cIjpcIlx1MjFDMVwiLFwicmlnaHRoYXJwb29udXBcIjpcIlx1MjFDMFwiLFwicmlnaHRsZWZ0YXJyb3dzXCI6XCJcdTIxQzRcIixcInJpZ2h0bGVmdGhhcnBvb25zXCI6XCJcdTIxQ0NcIixcInJpZ2h0cmlnaHRhcnJvd3NcIjpcIlx1MjFDOVwiLFwicmlnaHRzcXVpZ2Fycm93XCI6XCJcdTIxOURcIixcIlJpZ2h0VGVlQXJyb3dcIjpcIlx1MjFBNlwiLFwiUmlnaHRUZWVcIjpcIlx1MjJBMlwiLFwiUmlnaHRUZWVWZWN0b3JcIjpcIlx1Mjk1QlwiLFwicmlnaHR0aHJlZXRpbWVzXCI6XCJcdTIyQ0NcIixcIlJpZ2h0VHJpYW5nbGVCYXJcIjpcIlx1MjlEMFwiLFwiUmlnaHRUcmlhbmdsZVwiOlwiXHUyMkIzXCIsXCJSaWdodFRyaWFuZ2xlRXF1YWxcIjpcIlx1MjJCNVwiLFwiUmlnaHRVcERvd25WZWN0b3JcIjpcIlx1Mjk0RlwiLFwiUmlnaHRVcFRlZVZlY3RvclwiOlwiXHUyOTVDXCIsXCJSaWdodFVwVmVjdG9yQmFyXCI6XCJcdTI5NTRcIixcIlJpZ2h0VXBWZWN0b3JcIjpcIlx1MjFCRVwiLFwiUmlnaHRWZWN0b3JCYXJcIjpcIlx1Mjk1M1wiLFwiUmlnaHRWZWN0b3JcIjpcIlx1MjFDMFwiLFwicmluZ1wiOlwiXHUwMkRBXCIsXCJyaXNpbmdkb3RzZXFcIjpcIlx1MjI1M1wiLFwicmxhcnJcIjpcIlx1MjFDNFwiLFwicmxoYXJcIjpcIlx1MjFDQ1wiLFwicmxtXCI6XCJcdTIwMEZcIixcInJtb3VzdGFjaGVcIjpcIlx1MjNCMVwiLFwicm1vdXN0XCI6XCJcdTIzQjFcIixcInJubWlkXCI6XCJcdTJBRUVcIixcInJvYW5nXCI6XCJcdTI3RURcIixcInJvYXJyXCI6XCJcdTIxRkVcIixcInJvYnJrXCI6XCJcdTI3RTdcIixcInJvcGFyXCI6XCJcdTI5ODZcIixcInJvcGZcIjpcIlx1RDgzNVx1REQ2M1wiLFwiUm9wZlwiOlwiXHUyMTFEXCIsXCJyb3BsdXNcIjpcIlx1MkEyRVwiLFwicm90aW1lc1wiOlwiXHUyQTM1XCIsXCJSb3VuZEltcGxpZXNcIjpcIlx1Mjk3MFwiLFwicnBhclwiOlwiKVwiLFwicnBhcmd0XCI6XCJcdTI5OTRcIixcInJwcG9saW50XCI6XCJcdTJBMTJcIixcInJyYXJyXCI6XCJcdTIxQzlcIixcIlJyaWdodGFycm93XCI6XCJcdTIxREJcIixcInJzYXF1b1wiOlwiXHUyMDNBXCIsXCJyc2NyXCI6XCJcdUQ4MzVcdURDQzdcIixcIlJzY3JcIjpcIlx1MjExQlwiLFwicnNoXCI6XCJcdTIxQjFcIixcIlJzaFwiOlwiXHUyMUIxXCIsXCJyc3FiXCI6XCJdXCIsXCJyc3F1b1wiOlwiXHUyMDE5XCIsXCJyc3F1b3JcIjpcIlx1MjAxOVwiLFwicnRocmVlXCI6XCJcdTIyQ0NcIixcInJ0aW1lc1wiOlwiXHUyMkNBXCIsXCJydHJpXCI6XCJcdTI1QjlcIixcInJ0cmllXCI6XCJcdTIyQjVcIixcInJ0cmlmXCI6XCJcdTI1QjhcIixcInJ0cmlsdHJpXCI6XCJcdTI5Q0VcIixcIlJ1bGVEZWxheWVkXCI6XCJcdTI5RjRcIixcInJ1bHVoYXJcIjpcIlx1Mjk2OFwiLFwicnhcIjpcIlx1MjExRVwiLFwiU2FjdXRlXCI6XCJcdTAxNUFcIixcInNhY3V0ZVwiOlwiXHUwMTVCXCIsXCJzYnF1b1wiOlwiXHUyMDFBXCIsXCJzY2FwXCI6XCJcdTJBQjhcIixcIlNjYXJvblwiOlwiXHUwMTYwXCIsXCJzY2Fyb25cIjpcIlx1MDE2MVwiLFwiU2NcIjpcIlx1MkFCQ1wiLFwic2NcIjpcIlx1MjI3QlwiLFwic2NjdWVcIjpcIlx1MjI3RFwiLFwic2NlXCI6XCJcdTJBQjBcIixcInNjRVwiOlwiXHUyQUI0XCIsXCJTY2VkaWxcIjpcIlx1MDE1RVwiLFwic2NlZGlsXCI6XCJcdTAxNUZcIixcIlNjaXJjXCI6XCJcdTAxNUNcIixcInNjaXJjXCI6XCJcdTAxNURcIixcInNjbmFwXCI6XCJcdTJBQkFcIixcInNjbkVcIjpcIlx1MkFCNlwiLFwic2Nuc2ltXCI6XCJcdTIyRTlcIixcInNjcG9saW50XCI6XCJcdTJBMTNcIixcInNjc2ltXCI6XCJcdTIyN0ZcIixcIlNjeVwiOlwiXHUwNDIxXCIsXCJzY3lcIjpcIlx1MDQ0MVwiLFwic2RvdGJcIjpcIlx1MjJBMVwiLFwic2RvdFwiOlwiXHUyMkM1XCIsXCJzZG90ZVwiOlwiXHUyQTY2XCIsXCJzZWFyaGtcIjpcIlx1MjkyNVwiLFwic2VhcnJcIjpcIlx1MjE5OFwiLFwic2VBcnJcIjpcIlx1MjFEOFwiLFwic2VhcnJvd1wiOlwiXHUyMTk4XCIsXCJzZWN0XCI6XCJcdTAwQTdcIixcInNlbWlcIjpcIjtcIixcInNlc3dhclwiOlwiXHUyOTI5XCIsXCJzZXRtaW51c1wiOlwiXHUyMjE2XCIsXCJzZXRtblwiOlwiXHUyMjE2XCIsXCJzZXh0XCI6XCJcdTI3MzZcIixcIlNmclwiOlwiXHVEODM1XHVERDE2XCIsXCJzZnJcIjpcIlx1RDgzNVx1REQzMFwiLFwic2Zyb3duXCI6XCJcdTIzMjJcIixcInNoYXJwXCI6XCJcdTI2NkZcIixcIlNIQ0hjeVwiOlwiXHUwNDI5XCIsXCJzaGNoY3lcIjpcIlx1MDQ0OVwiLFwiU0hjeVwiOlwiXHUwNDI4XCIsXCJzaGN5XCI6XCJcdTA0NDhcIixcIlNob3J0RG93bkFycm93XCI6XCJcdTIxOTNcIixcIlNob3J0TGVmdEFycm93XCI6XCJcdTIxOTBcIixcInNob3J0bWlkXCI6XCJcdTIyMjNcIixcInNob3J0cGFyYWxsZWxcIjpcIlx1MjIyNVwiLFwiU2hvcnRSaWdodEFycm93XCI6XCJcdTIxOTJcIixcIlNob3J0VXBBcnJvd1wiOlwiXHUyMTkxXCIsXCJzaHlcIjpcIlx1MDBBRFwiLFwiU2lnbWFcIjpcIlx1MDNBM1wiLFwic2lnbWFcIjpcIlx1MDNDM1wiLFwic2lnbWFmXCI6XCJcdTAzQzJcIixcInNpZ21hdlwiOlwiXHUwM0MyXCIsXCJzaW1cIjpcIlx1MjIzQ1wiLFwic2ltZG90XCI6XCJcdTJBNkFcIixcInNpbWVcIjpcIlx1MjI0M1wiLFwic2ltZXFcIjpcIlx1MjI0M1wiLFwic2ltZ1wiOlwiXHUyQTlFXCIsXCJzaW1nRVwiOlwiXHUyQUEwXCIsXCJzaW1sXCI6XCJcdTJBOURcIixcInNpbWxFXCI6XCJcdTJBOUZcIixcInNpbW5lXCI6XCJcdTIyNDZcIixcInNpbXBsdXNcIjpcIlx1MkEyNFwiLFwic2ltcmFyclwiOlwiXHUyOTcyXCIsXCJzbGFyclwiOlwiXHUyMTkwXCIsXCJTbWFsbENpcmNsZVwiOlwiXHUyMjE4XCIsXCJzbWFsbHNldG1pbnVzXCI6XCJcdTIyMTZcIixcInNtYXNocFwiOlwiXHUyQTMzXCIsXCJzbWVwYXJzbFwiOlwiXHUyOUU0XCIsXCJzbWlkXCI6XCJcdTIyMjNcIixcInNtaWxlXCI6XCJcdTIzMjNcIixcInNtdFwiOlwiXHUyQUFBXCIsXCJzbXRlXCI6XCJcdTJBQUNcIixcInNtdGVzXCI6XCJcdTJBQUNcdUZFMDBcIixcIlNPRlRjeVwiOlwiXHUwNDJDXCIsXCJzb2Z0Y3lcIjpcIlx1MDQ0Q1wiLFwic29sYmFyXCI6XCJcdTIzM0ZcIixcInNvbGJcIjpcIlx1MjlDNFwiLFwic29sXCI6XCIvXCIsXCJTb3BmXCI6XCJcdUQ4MzVcdURENEFcIixcInNvcGZcIjpcIlx1RDgzNVx1REQ2NFwiLFwic3BhZGVzXCI6XCJcdTI2NjBcIixcInNwYWRlc3VpdFwiOlwiXHUyNjYwXCIsXCJzcGFyXCI6XCJcdTIyMjVcIixcInNxY2FwXCI6XCJcdTIyOTNcIixcInNxY2Fwc1wiOlwiXHUyMjkzXHVGRTAwXCIsXCJzcWN1cFwiOlwiXHUyMjk0XCIsXCJzcWN1cHNcIjpcIlx1MjI5NFx1RkUwMFwiLFwiU3FydFwiOlwiXHUyMjFBXCIsXCJzcXN1YlwiOlwiXHUyMjhGXCIsXCJzcXN1YmVcIjpcIlx1MjI5MVwiLFwic3FzdWJzZXRcIjpcIlx1MjI4RlwiLFwic3FzdWJzZXRlcVwiOlwiXHUyMjkxXCIsXCJzcXN1cFwiOlwiXHUyMjkwXCIsXCJzcXN1cGVcIjpcIlx1MjI5MlwiLFwic3FzdXBzZXRcIjpcIlx1MjI5MFwiLFwic3FzdXBzZXRlcVwiOlwiXHUyMjkyXCIsXCJzcXVhcmVcIjpcIlx1MjVBMVwiLFwiU3F1YXJlXCI6XCJcdTI1QTFcIixcIlNxdWFyZUludGVyc2VjdGlvblwiOlwiXHUyMjkzXCIsXCJTcXVhcmVTdWJzZXRcIjpcIlx1MjI4RlwiLFwiU3F1YXJlU3Vic2V0RXF1YWxcIjpcIlx1MjI5MVwiLFwiU3F1YXJlU3VwZXJzZXRcIjpcIlx1MjI5MFwiLFwiU3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwiXHUyMjkyXCIsXCJTcXVhcmVVbmlvblwiOlwiXHUyMjk0XCIsXCJzcXVhcmZcIjpcIlx1MjVBQVwiLFwic3F1XCI6XCJcdTI1QTFcIixcInNxdWZcIjpcIlx1MjVBQVwiLFwic3JhcnJcIjpcIlx1MjE5MlwiLFwiU3NjclwiOlwiXHVEODM1XHVEQ0FFXCIsXCJzc2NyXCI6XCJcdUQ4MzVcdURDQzhcIixcInNzZXRtblwiOlwiXHUyMjE2XCIsXCJzc21pbGVcIjpcIlx1MjMyM1wiLFwic3N0YXJmXCI6XCJcdTIyQzZcIixcIlN0YXJcIjpcIlx1MjJDNlwiLFwic3RhclwiOlwiXHUyNjA2XCIsXCJzdGFyZlwiOlwiXHUyNjA1XCIsXCJzdHJhaWdodGVwc2lsb25cIjpcIlx1MDNGNVwiLFwic3RyYWlnaHRwaGlcIjpcIlx1MDNENVwiLFwic3RybnNcIjpcIlx1MDBBRlwiLFwic3ViXCI6XCJcdTIyODJcIixcIlN1YlwiOlwiXHUyMkQwXCIsXCJzdWJkb3RcIjpcIlx1MkFCRFwiLFwic3ViRVwiOlwiXHUyQUM1XCIsXCJzdWJlXCI6XCJcdTIyODZcIixcInN1YmVkb3RcIjpcIlx1MkFDM1wiLFwic3VibXVsdFwiOlwiXHUyQUMxXCIsXCJzdWJuRVwiOlwiXHUyQUNCXCIsXCJzdWJuZVwiOlwiXHUyMjhBXCIsXCJzdWJwbHVzXCI6XCJcdTJBQkZcIixcInN1YnJhcnJcIjpcIlx1Mjk3OVwiLFwic3Vic2V0XCI6XCJcdTIyODJcIixcIlN1YnNldFwiOlwiXHUyMkQwXCIsXCJzdWJzZXRlcVwiOlwiXHUyMjg2XCIsXCJzdWJzZXRlcXFcIjpcIlx1MkFDNVwiLFwiU3Vic2V0RXF1YWxcIjpcIlx1MjI4NlwiLFwic3Vic2V0bmVxXCI6XCJcdTIyOEFcIixcInN1YnNldG5lcXFcIjpcIlx1MkFDQlwiLFwic3Vic2ltXCI6XCJcdTJBQzdcIixcInN1YnN1YlwiOlwiXHUyQUQ1XCIsXCJzdWJzdXBcIjpcIlx1MkFEM1wiLFwic3VjY2FwcHJveFwiOlwiXHUyQUI4XCIsXCJzdWNjXCI6XCJcdTIyN0JcIixcInN1Y2NjdXJseWVxXCI6XCJcdTIyN0RcIixcIlN1Y2NlZWRzXCI6XCJcdTIyN0JcIixcIlN1Y2NlZWRzRXF1YWxcIjpcIlx1MkFCMFwiLFwiU3VjY2VlZHNTbGFudEVxdWFsXCI6XCJcdTIyN0RcIixcIlN1Y2NlZWRzVGlsZGVcIjpcIlx1MjI3RlwiLFwic3VjY2VxXCI6XCJcdTJBQjBcIixcInN1Y2NuYXBwcm94XCI6XCJcdTJBQkFcIixcInN1Y2NuZXFxXCI6XCJcdTJBQjZcIixcInN1Y2Nuc2ltXCI6XCJcdTIyRTlcIixcInN1Y2NzaW1cIjpcIlx1MjI3RlwiLFwiU3VjaFRoYXRcIjpcIlx1MjIwQlwiLFwic3VtXCI6XCJcdTIyMTFcIixcIlN1bVwiOlwiXHUyMjExXCIsXCJzdW5nXCI6XCJcdTI2NkFcIixcInN1cDFcIjpcIlx1MDBCOVwiLFwic3VwMlwiOlwiXHUwMEIyXCIsXCJzdXAzXCI6XCJcdTAwQjNcIixcInN1cFwiOlwiXHUyMjgzXCIsXCJTdXBcIjpcIlx1MjJEMVwiLFwic3VwZG90XCI6XCJcdTJBQkVcIixcInN1cGRzdWJcIjpcIlx1MkFEOFwiLFwic3VwRVwiOlwiXHUyQUM2XCIsXCJzdXBlXCI6XCJcdTIyODdcIixcInN1cGVkb3RcIjpcIlx1MkFDNFwiLFwiU3VwZXJzZXRcIjpcIlx1MjI4M1wiLFwiU3VwZXJzZXRFcXVhbFwiOlwiXHUyMjg3XCIsXCJzdXBoc29sXCI6XCJcdTI3QzlcIixcInN1cGhzdWJcIjpcIlx1MkFEN1wiLFwic3VwbGFyclwiOlwiXHUyOTdCXCIsXCJzdXBtdWx0XCI6XCJcdTJBQzJcIixcInN1cG5FXCI6XCJcdTJBQ0NcIixcInN1cG5lXCI6XCJcdTIyOEJcIixcInN1cHBsdXNcIjpcIlx1MkFDMFwiLFwic3Vwc2V0XCI6XCJcdTIyODNcIixcIlN1cHNldFwiOlwiXHUyMkQxXCIsXCJzdXBzZXRlcVwiOlwiXHUyMjg3XCIsXCJzdXBzZXRlcXFcIjpcIlx1MkFDNlwiLFwic3Vwc2V0bmVxXCI6XCJcdTIyOEJcIixcInN1cHNldG5lcXFcIjpcIlx1MkFDQ1wiLFwic3Vwc2ltXCI6XCJcdTJBQzhcIixcInN1cHN1YlwiOlwiXHUyQUQ0XCIsXCJzdXBzdXBcIjpcIlx1MkFENlwiLFwic3dhcmhrXCI6XCJcdTI5MjZcIixcInN3YXJyXCI6XCJcdTIxOTlcIixcInN3QXJyXCI6XCJcdTIxRDlcIixcInN3YXJyb3dcIjpcIlx1MjE5OVwiLFwic3dud2FyXCI6XCJcdTI5MkFcIixcInN6bGlnXCI6XCJcdTAwREZcIixcIlRhYlwiOlwiXFx0XCIsXCJ0YXJnZXRcIjpcIlx1MjMxNlwiLFwiVGF1XCI6XCJcdTAzQTRcIixcInRhdVwiOlwiXHUwM0M0XCIsXCJ0YnJrXCI6XCJcdTIzQjRcIixcIlRjYXJvblwiOlwiXHUwMTY0XCIsXCJ0Y2Fyb25cIjpcIlx1MDE2NVwiLFwiVGNlZGlsXCI6XCJcdTAxNjJcIixcInRjZWRpbFwiOlwiXHUwMTYzXCIsXCJUY3lcIjpcIlx1MDQyMlwiLFwidGN5XCI6XCJcdTA0NDJcIixcInRkb3RcIjpcIlx1MjBEQlwiLFwidGVscmVjXCI6XCJcdTIzMTVcIixcIlRmclwiOlwiXHVEODM1XHVERDE3XCIsXCJ0ZnJcIjpcIlx1RDgzNVx1REQzMVwiLFwidGhlcmU0XCI6XCJcdTIyMzRcIixcInRoZXJlZm9yZVwiOlwiXHUyMjM0XCIsXCJUaGVyZWZvcmVcIjpcIlx1MjIzNFwiLFwiVGhldGFcIjpcIlx1MDM5OFwiLFwidGhldGFcIjpcIlx1MDNCOFwiLFwidGhldGFzeW1cIjpcIlx1MDNEMVwiLFwidGhldGF2XCI6XCJcdTAzRDFcIixcInRoaWNrYXBwcm94XCI6XCJcdTIyNDhcIixcInRoaWNrc2ltXCI6XCJcdTIyM0NcIixcIlRoaWNrU3BhY2VcIjpcIlx1MjA1Rlx1MjAwQVwiLFwiVGhpblNwYWNlXCI6XCJcdTIwMDlcIixcInRoaW5zcFwiOlwiXHUyMDA5XCIsXCJ0aGthcFwiOlwiXHUyMjQ4XCIsXCJ0aGtzaW1cIjpcIlx1MjIzQ1wiLFwiVEhPUk5cIjpcIlx1MDBERVwiLFwidGhvcm5cIjpcIlx1MDBGRVwiLFwidGlsZGVcIjpcIlx1MDJEQ1wiLFwiVGlsZGVcIjpcIlx1MjIzQ1wiLFwiVGlsZGVFcXVhbFwiOlwiXHUyMjQzXCIsXCJUaWxkZUZ1bGxFcXVhbFwiOlwiXHUyMjQ1XCIsXCJUaWxkZVRpbGRlXCI6XCJcdTIyNDhcIixcInRpbWVzYmFyXCI6XCJcdTJBMzFcIixcInRpbWVzYlwiOlwiXHUyMkEwXCIsXCJ0aW1lc1wiOlwiXHUwMEQ3XCIsXCJ0aW1lc2RcIjpcIlx1MkEzMFwiLFwidGludFwiOlwiXHUyMjJEXCIsXCJ0b2VhXCI6XCJcdTI5MjhcIixcInRvcGJvdFwiOlwiXHUyMzM2XCIsXCJ0b3BjaXJcIjpcIlx1MkFGMVwiLFwidG9wXCI6XCJcdTIyQTRcIixcIlRvcGZcIjpcIlx1RDgzNVx1REQ0QlwiLFwidG9wZlwiOlwiXHVEODM1XHVERDY1XCIsXCJ0b3Bmb3JrXCI6XCJcdTJBREFcIixcInRvc2FcIjpcIlx1MjkyOVwiLFwidHByaW1lXCI6XCJcdTIwMzRcIixcInRyYWRlXCI6XCJcdTIxMjJcIixcIlRSQURFXCI6XCJcdTIxMjJcIixcInRyaWFuZ2xlXCI6XCJcdTI1QjVcIixcInRyaWFuZ2xlZG93blwiOlwiXHUyNUJGXCIsXCJ0cmlhbmdsZWxlZnRcIjpcIlx1MjVDM1wiLFwidHJpYW5nbGVsZWZ0ZXFcIjpcIlx1MjJCNFwiLFwidHJpYW5nbGVxXCI6XCJcdTIyNUNcIixcInRyaWFuZ2xlcmlnaHRcIjpcIlx1MjVCOVwiLFwidHJpYW5nbGVyaWdodGVxXCI6XCJcdTIyQjVcIixcInRyaWRvdFwiOlwiXHUyNUVDXCIsXCJ0cmllXCI6XCJcdTIyNUNcIixcInRyaW1pbnVzXCI6XCJcdTJBM0FcIixcIlRyaXBsZURvdFwiOlwiXHUyMERCXCIsXCJ0cmlwbHVzXCI6XCJcdTJBMzlcIixcInRyaXNiXCI6XCJcdTI5Q0RcIixcInRyaXRpbWVcIjpcIlx1MkEzQlwiLFwidHJwZXppdW1cIjpcIlx1MjNFMlwiLFwiVHNjclwiOlwiXHVEODM1XHVEQ0FGXCIsXCJ0c2NyXCI6XCJcdUQ4MzVcdURDQzlcIixcIlRTY3lcIjpcIlx1MDQyNlwiLFwidHNjeVwiOlwiXHUwNDQ2XCIsXCJUU0hjeVwiOlwiXHUwNDBCXCIsXCJ0c2hjeVwiOlwiXHUwNDVCXCIsXCJUc3Ryb2tcIjpcIlx1MDE2NlwiLFwidHN0cm9rXCI6XCJcdTAxNjdcIixcInR3aXh0XCI6XCJcdTIyNkNcIixcInR3b2hlYWRsZWZ0YXJyb3dcIjpcIlx1MjE5RVwiLFwidHdvaGVhZHJpZ2h0YXJyb3dcIjpcIlx1MjFBMFwiLFwiVWFjdXRlXCI6XCJcdTAwREFcIixcInVhY3V0ZVwiOlwiXHUwMEZBXCIsXCJ1YXJyXCI6XCJcdTIxOTFcIixcIlVhcnJcIjpcIlx1MjE5RlwiLFwidUFyclwiOlwiXHUyMUQxXCIsXCJVYXJyb2NpclwiOlwiXHUyOTQ5XCIsXCJVYnJjeVwiOlwiXHUwNDBFXCIsXCJ1YnJjeVwiOlwiXHUwNDVFXCIsXCJVYnJldmVcIjpcIlx1MDE2Q1wiLFwidWJyZXZlXCI6XCJcdTAxNkRcIixcIlVjaXJjXCI6XCJcdTAwREJcIixcInVjaXJjXCI6XCJcdTAwRkJcIixcIlVjeVwiOlwiXHUwNDIzXCIsXCJ1Y3lcIjpcIlx1MDQ0M1wiLFwidWRhcnJcIjpcIlx1MjFDNVwiLFwiVWRibGFjXCI6XCJcdTAxNzBcIixcInVkYmxhY1wiOlwiXHUwMTcxXCIsXCJ1ZGhhclwiOlwiXHUyOTZFXCIsXCJ1ZmlzaHRcIjpcIlx1Mjk3RVwiLFwiVWZyXCI6XCJcdUQ4MzVcdUREMThcIixcInVmclwiOlwiXHVEODM1XHVERDMyXCIsXCJVZ3JhdmVcIjpcIlx1MDBEOVwiLFwidWdyYXZlXCI6XCJcdTAwRjlcIixcInVIYXJcIjpcIlx1Mjk2M1wiLFwidWhhcmxcIjpcIlx1MjFCRlwiLFwidWhhcnJcIjpcIlx1MjFCRVwiLFwidWhibGtcIjpcIlx1MjU4MFwiLFwidWxjb3JuXCI6XCJcdTIzMUNcIixcInVsY29ybmVyXCI6XCJcdTIzMUNcIixcInVsY3JvcFwiOlwiXHUyMzBGXCIsXCJ1bHRyaVwiOlwiXHUyNUY4XCIsXCJVbWFjclwiOlwiXHUwMTZBXCIsXCJ1bWFjclwiOlwiXHUwMTZCXCIsXCJ1bWxcIjpcIlx1MDBBOFwiLFwiVW5kZXJCYXJcIjpcIl9cIixcIlVuZGVyQnJhY2VcIjpcIlx1MjNERlwiLFwiVW5kZXJCcmFja2V0XCI6XCJcdTIzQjVcIixcIlVuZGVyUGFyZW50aGVzaXNcIjpcIlx1MjNERFwiLFwiVW5pb25cIjpcIlx1MjJDM1wiLFwiVW5pb25QbHVzXCI6XCJcdTIyOEVcIixcIlVvZ29uXCI6XCJcdTAxNzJcIixcInVvZ29uXCI6XCJcdTAxNzNcIixcIlVvcGZcIjpcIlx1RDgzNVx1REQ0Q1wiLFwidW9wZlwiOlwiXHVEODM1XHVERDY2XCIsXCJVcEFycm93QmFyXCI6XCJcdTI5MTJcIixcInVwYXJyb3dcIjpcIlx1MjE5MVwiLFwiVXBBcnJvd1wiOlwiXHUyMTkxXCIsXCJVcGFycm93XCI6XCJcdTIxRDFcIixcIlVwQXJyb3dEb3duQXJyb3dcIjpcIlx1MjFDNVwiLFwidXBkb3duYXJyb3dcIjpcIlx1MjE5NVwiLFwiVXBEb3duQXJyb3dcIjpcIlx1MjE5NVwiLFwiVXBkb3duYXJyb3dcIjpcIlx1MjFENVwiLFwiVXBFcXVpbGlicml1bVwiOlwiXHUyOTZFXCIsXCJ1cGhhcnBvb25sZWZ0XCI6XCJcdTIxQkZcIixcInVwaGFycG9vbnJpZ2h0XCI6XCJcdTIxQkVcIixcInVwbHVzXCI6XCJcdTIyOEVcIixcIlVwcGVyTGVmdEFycm93XCI6XCJcdTIxOTZcIixcIlVwcGVyUmlnaHRBcnJvd1wiOlwiXHUyMTk3XCIsXCJ1cHNpXCI6XCJcdTAzQzVcIixcIlVwc2lcIjpcIlx1MDNEMlwiLFwidXBzaWhcIjpcIlx1MDNEMlwiLFwiVXBzaWxvblwiOlwiXHUwM0E1XCIsXCJ1cHNpbG9uXCI6XCJcdTAzQzVcIixcIlVwVGVlQXJyb3dcIjpcIlx1MjFBNVwiLFwiVXBUZWVcIjpcIlx1MjJBNVwiLFwidXB1cGFycm93c1wiOlwiXHUyMUM4XCIsXCJ1cmNvcm5cIjpcIlx1MjMxRFwiLFwidXJjb3JuZXJcIjpcIlx1MjMxRFwiLFwidXJjcm9wXCI6XCJcdTIzMEVcIixcIlVyaW5nXCI6XCJcdTAxNkVcIixcInVyaW5nXCI6XCJcdTAxNkZcIixcInVydHJpXCI6XCJcdTI1RjlcIixcIlVzY3JcIjpcIlx1RDgzNVx1RENCMFwiLFwidXNjclwiOlwiXHVEODM1XHVEQ0NBXCIsXCJ1dGRvdFwiOlwiXHUyMkYwXCIsXCJVdGlsZGVcIjpcIlx1MDE2OFwiLFwidXRpbGRlXCI6XCJcdTAxNjlcIixcInV0cmlcIjpcIlx1MjVCNVwiLFwidXRyaWZcIjpcIlx1MjVCNFwiLFwidXVhcnJcIjpcIlx1MjFDOFwiLFwiVXVtbFwiOlwiXHUwMERDXCIsXCJ1dW1sXCI6XCJcdTAwRkNcIixcInV3YW5nbGVcIjpcIlx1MjlBN1wiLFwidmFuZ3J0XCI6XCJcdTI5OUNcIixcInZhcmVwc2lsb25cIjpcIlx1MDNGNVwiLFwidmFya2FwcGFcIjpcIlx1MDNGMFwiLFwidmFybm90aGluZ1wiOlwiXHUyMjA1XCIsXCJ2YXJwaGlcIjpcIlx1MDNENVwiLFwidmFycGlcIjpcIlx1MDNENlwiLFwidmFycHJvcHRvXCI6XCJcdTIyMURcIixcInZhcnJcIjpcIlx1MjE5NVwiLFwidkFyclwiOlwiXHUyMUQ1XCIsXCJ2YXJyaG9cIjpcIlx1MDNGMVwiLFwidmFyc2lnbWFcIjpcIlx1MDNDMlwiLFwidmFyc3Vic2V0bmVxXCI6XCJcdTIyOEFcdUZFMDBcIixcInZhcnN1YnNldG5lcXFcIjpcIlx1MkFDQlx1RkUwMFwiLFwidmFyc3Vwc2V0bmVxXCI6XCJcdTIyOEJcdUZFMDBcIixcInZhcnN1cHNldG5lcXFcIjpcIlx1MkFDQ1x1RkUwMFwiLFwidmFydGhldGFcIjpcIlx1MDNEMVwiLFwidmFydHJpYW5nbGVsZWZ0XCI6XCJcdTIyQjJcIixcInZhcnRyaWFuZ2xlcmlnaHRcIjpcIlx1MjJCM1wiLFwidkJhclwiOlwiXHUyQUU4XCIsXCJWYmFyXCI6XCJcdTJBRUJcIixcInZCYXJ2XCI6XCJcdTJBRTlcIixcIlZjeVwiOlwiXHUwNDEyXCIsXCJ2Y3lcIjpcIlx1MDQzMlwiLFwidmRhc2hcIjpcIlx1MjJBMlwiLFwidkRhc2hcIjpcIlx1MjJBOFwiLFwiVmRhc2hcIjpcIlx1MjJBOVwiLFwiVkRhc2hcIjpcIlx1MjJBQlwiLFwiVmRhc2hsXCI6XCJcdTJBRTZcIixcInZlZWJhclwiOlwiXHUyMkJCXCIsXCJ2ZWVcIjpcIlx1MjIyOFwiLFwiVmVlXCI6XCJcdTIyQzFcIixcInZlZWVxXCI6XCJcdTIyNUFcIixcInZlbGxpcFwiOlwiXHUyMkVFXCIsXCJ2ZXJiYXJcIjpcInxcIixcIlZlcmJhclwiOlwiXHUyMDE2XCIsXCJ2ZXJ0XCI6XCJ8XCIsXCJWZXJ0XCI6XCJcdTIwMTZcIixcIlZlcnRpY2FsQmFyXCI6XCJcdTIyMjNcIixcIlZlcnRpY2FsTGluZVwiOlwifFwiLFwiVmVydGljYWxTZXBhcmF0b3JcIjpcIlx1Mjc1OFwiLFwiVmVydGljYWxUaWxkZVwiOlwiXHUyMjQwXCIsXCJWZXJ5VGhpblNwYWNlXCI6XCJcdTIwMEFcIixcIlZmclwiOlwiXHVEODM1XHVERDE5XCIsXCJ2ZnJcIjpcIlx1RDgzNVx1REQzM1wiLFwidmx0cmlcIjpcIlx1MjJCMlwiLFwidm5zdWJcIjpcIlx1MjI4Mlx1MjBEMlwiLFwidm5zdXBcIjpcIlx1MjI4M1x1MjBEMlwiLFwiVm9wZlwiOlwiXHVEODM1XHVERDREXCIsXCJ2b3BmXCI6XCJcdUQ4MzVcdURENjdcIixcInZwcm9wXCI6XCJcdTIyMURcIixcInZydHJpXCI6XCJcdTIyQjNcIixcIlZzY3JcIjpcIlx1RDgzNVx1RENCMVwiLFwidnNjclwiOlwiXHVEODM1XHVEQ0NCXCIsXCJ2c3VibkVcIjpcIlx1MkFDQlx1RkUwMFwiLFwidnN1Ym5lXCI6XCJcdTIyOEFcdUZFMDBcIixcInZzdXBuRVwiOlwiXHUyQUNDXHVGRTAwXCIsXCJ2c3VwbmVcIjpcIlx1MjI4Qlx1RkUwMFwiLFwiVnZkYXNoXCI6XCJcdTIyQUFcIixcInZ6aWd6YWdcIjpcIlx1Mjk5QVwiLFwiV2NpcmNcIjpcIlx1MDE3NFwiLFwid2NpcmNcIjpcIlx1MDE3NVwiLFwid2VkYmFyXCI6XCJcdTJBNUZcIixcIndlZGdlXCI6XCJcdTIyMjdcIixcIldlZGdlXCI6XCJcdTIyQzBcIixcIndlZGdlcVwiOlwiXHUyMjU5XCIsXCJ3ZWllcnBcIjpcIlx1MjExOFwiLFwiV2ZyXCI6XCJcdUQ4MzVcdUREMUFcIixcIndmclwiOlwiXHVEODM1XHVERDM0XCIsXCJXb3BmXCI6XCJcdUQ4MzVcdURENEVcIixcIndvcGZcIjpcIlx1RDgzNVx1REQ2OFwiLFwid3BcIjpcIlx1MjExOFwiLFwid3JcIjpcIlx1MjI0MFwiLFwid3JlYXRoXCI6XCJcdTIyNDBcIixcIldzY3JcIjpcIlx1RDgzNVx1RENCMlwiLFwid3NjclwiOlwiXHVEODM1XHVEQ0NDXCIsXCJ4Y2FwXCI6XCJcdTIyQzJcIixcInhjaXJjXCI6XCJcdTI1RUZcIixcInhjdXBcIjpcIlx1MjJDM1wiLFwieGR0cmlcIjpcIlx1MjVCRFwiLFwiWGZyXCI6XCJcdUQ4MzVcdUREMUJcIixcInhmclwiOlwiXHVEODM1XHVERDM1XCIsXCJ4aGFyclwiOlwiXHUyN0Y3XCIsXCJ4aEFyclwiOlwiXHUyN0ZBXCIsXCJYaVwiOlwiXHUwMzlFXCIsXCJ4aVwiOlwiXHUwM0JFXCIsXCJ4bGFyclwiOlwiXHUyN0Y1XCIsXCJ4bEFyclwiOlwiXHUyN0Y4XCIsXCJ4bWFwXCI6XCJcdTI3RkNcIixcInhuaXNcIjpcIlx1MjJGQlwiLFwieG9kb3RcIjpcIlx1MkEwMFwiLFwiWG9wZlwiOlwiXHVEODM1XHVERDRGXCIsXCJ4b3BmXCI6XCJcdUQ4MzVcdURENjlcIixcInhvcGx1c1wiOlwiXHUyQTAxXCIsXCJ4b3RpbWVcIjpcIlx1MkEwMlwiLFwieHJhcnJcIjpcIlx1MjdGNlwiLFwieHJBcnJcIjpcIlx1MjdGOVwiLFwiWHNjclwiOlwiXHVEODM1XHVEQ0IzXCIsXCJ4c2NyXCI6XCJcdUQ4MzVcdURDQ0RcIixcInhzcWN1cFwiOlwiXHUyQTA2XCIsXCJ4dXBsdXNcIjpcIlx1MkEwNFwiLFwieHV0cmlcIjpcIlx1MjVCM1wiLFwieHZlZVwiOlwiXHUyMkMxXCIsXCJ4d2VkZ2VcIjpcIlx1MjJDMFwiLFwiWWFjdXRlXCI6XCJcdTAwRERcIixcInlhY3V0ZVwiOlwiXHUwMEZEXCIsXCJZQWN5XCI6XCJcdTA0MkZcIixcInlhY3lcIjpcIlx1MDQ0RlwiLFwiWWNpcmNcIjpcIlx1MDE3NlwiLFwieWNpcmNcIjpcIlx1MDE3N1wiLFwiWWN5XCI6XCJcdTA0MkJcIixcInljeVwiOlwiXHUwNDRCXCIsXCJ5ZW5cIjpcIlx1MDBBNVwiLFwiWWZyXCI6XCJcdUQ4MzVcdUREMUNcIixcInlmclwiOlwiXHVEODM1XHVERDM2XCIsXCJZSWN5XCI6XCJcdTA0MDdcIixcInlpY3lcIjpcIlx1MDQ1N1wiLFwiWW9wZlwiOlwiXHVEODM1XHVERDUwXCIsXCJ5b3BmXCI6XCJcdUQ4MzVcdURENkFcIixcIllzY3JcIjpcIlx1RDgzNVx1RENCNFwiLFwieXNjclwiOlwiXHVEODM1XHVEQ0NFXCIsXCJZVWN5XCI6XCJcdTA0MkVcIixcInl1Y3lcIjpcIlx1MDQ0RVwiLFwieXVtbFwiOlwiXHUwMEZGXCIsXCJZdW1sXCI6XCJcdTAxNzhcIixcIlphY3V0ZVwiOlwiXHUwMTc5XCIsXCJ6YWN1dGVcIjpcIlx1MDE3QVwiLFwiWmNhcm9uXCI6XCJcdTAxN0RcIixcInpjYXJvblwiOlwiXHUwMTdFXCIsXCJaY3lcIjpcIlx1MDQxN1wiLFwiemN5XCI6XCJcdTA0MzdcIixcIlpkb3RcIjpcIlx1MDE3QlwiLFwiemRvdFwiOlwiXHUwMTdDXCIsXCJ6ZWV0cmZcIjpcIlx1MjEyOFwiLFwiWmVyb1dpZHRoU3BhY2VcIjpcIlx1MjAwQlwiLFwiWmV0YVwiOlwiXHUwMzk2XCIsXCJ6ZXRhXCI6XCJcdTAzQjZcIixcInpmclwiOlwiXHVEODM1XHVERDM3XCIsXCJaZnJcIjpcIlx1MjEyOFwiLFwiWkhjeVwiOlwiXHUwNDE2XCIsXCJ6aGN5XCI6XCJcdTA0MzZcIixcInppZ3JhcnJcIjpcIlx1MjFERFwiLFwiem9wZlwiOlwiXHVEODM1XHVERDZCXCIsXCJab3BmXCI6XCJcdTIxMjRcIixcIlpzY3JcIjpcIlx1RDgzNVx1RENCNVwiLFwienNjclwiOlwiXHVEODM1XHVEQ0NGXCIsXCJ6d2pcIjpcIlx1MjAwRFwiLFwiendualwiOlwiXHUyMDBDXCJ9XG4iLCAie1wiQWFjdXRlXCI6XCJcdTAwQzFcIixcImFhY3V0ZVwiOlwiXHUwMEUxXCIsXCJBY2lyY1wiOlwiXHUwMEMyXCIsXCJhY2lyY1wiOlwiXHUwMEUyXCIsXCJhY3V0ZVwiOlwiXHUwMEI0XCIsXCJBRWxpZ1wiOlwiXHUwMEM2XCIsXCJhZWxpZ1wiOlwiXHUwMEU2XCIsXCJBZ3JhdmVcIjpcIlx1MDBDMFwiLFwiYWdyYXZlXCI6XCJcdTAwRTBcIixcImFtcFwiOlwiJlwiLFwiQU1QXCI6XCImXCIsXCJBcmluZ1wiOlwiXHUwMEM1XCIsXCJhcmluZ1wiOlwiXHUwMEU1XCIsXCJBdGlsZGVcIjpcIlx1MDBDM1wiLFwiYXRpbGRlXCI6XCJcdTAwRTNcIixcIkF1bWxcIjpcIlx1MDBDNFwiLFwiYXVtbFwiOlwiXHUwMEU0XCIsXCJicnZiYXJcIjpcIlx1MDBBNlwiLFwiQ2NlZGlsXCI6XCJcdTAwQzdcIixcImNjZWRpbFwiOlwiXHUwMEU3XCIsXCJjZWRpbFwiOlwiXHUwMEI4XCIsXCJjZW50XCI6XCJcdTAwQTJcIixcImNvcHlcIjpcIlx1MDBBOVwiLFwiQ09QWVwiOlwiXHUwMEE5XCIsXCJjdXJyZW5cIjpcIlx1MDBBNFwiLFwiZGVnXCI6XCJcdTAwQjBcIixcImRpdmlkZVwiOlwiXHUwMEY3XCIsXCJFYWN1dGVcIjpcIlx1MDBDOVwiLFwiZWFjdXRlXCI6XCJcdTAwRTlcIixcIkVjaXJjXCI6XCJcdTAwQ0FcIixcImVjaXJjXCI6XCJcdTAwRUFcIixcIkVncmF2ZVwiOlwiXHUwMEM4XCIsXCJlZ3JhdmVcIjpcIlx1MDBFOFwiLFwiRVRIXCI6XCJcdTAwRDBcIixcImV0aFwiOlwiXHUwMEYwXCIsXCJFdW1sXCI6XCJcdTAwQ0JcIixcImV1bWxcIjpcIlx1MDBFQlwiLFwiZnJhYzEyXCI6XCJcdTAwQkRcIixcImZyYWMxNFwiOlwiXHUwMEJDXCIsXCJmcmFjMzRcIjpcIlx1MDBCRVwiLFwiZ3RcIjpcIj5cIixcIkdUXCI6XCI+XCIsXCJJYWN1dGVcIjpcIlx1MDBDRFwiLFwiaWFjdXRlXCI6XCJcdTAwRURcIixcIkljaXJjXCI6XCJcdTAwQ0VcIixcImljaXJjXCI6XCJcdTAwRUVcIixcImlleGNsXCI6XCJcdTAwQTFcIixcIklncmF2ZVwiOlwiXHUwMENDXCIsXCJpZ3JhdmVcIjpcIlx1MDBFQ1wiLFwiaXF1ZXN0XCI6XCJcdTAwQkZcIixcIkl1bWxcIjpcIlx1MDBDRlwiLFwiaXVtbFwiOlwiXHUwMEVGXCIsXCJsYXF1b1wiOlwiXHUwMEFCXCIsXCJsdFwiOlwiPFwiLFwiTFRcIjpcIjxcIixcIm1hY3JcIjpcIlx1MDBBRlwiLFwibWljcm9cIjpcIlx1MDBCNVwiLFwibWlkZG90XCI6XCJcdTAwQjdcIixcIm5ic3BcIjpcIlx1MDBBMFwiLFwibm90XCI6XCJcdTAwQUNcIixcIk50aWxkZVwiOlwiXHUwMEQxXCIsXCJudGlsZGVcIjpcIlx1MDBGMVwiLFwiT2FjdXRlXCI6XCJcdTAwRDNcIixcIm9hY3V0ZVwiOlwiXHUwMEYzXCIsXCJPY2lyY1wiOlwiXHUwMEQ0XCIsXCJvY2lyY1wiOlwiXHUwMEY0XCIsXCJPZ3JhdmVcIjpcIlx1MDBEMlwiLFwib2dyYXZlXCI6XCJcdTAwRjJcIixcIm9yZGZcIjpcIlx1MDBBQVwiLFwib3JkbVwiOlwiXHUwMEJBXCIsXCJPc2xhc2hcIjpcIlx1MDBEOFwiLFwib3NsYXNoXCI6XCJcdTAwRjhcIixcIk90aWxkZVwiOlwiXHUwMEQ1XCIsXCJvdGlsZGVcIjpcIlx1MDBGNVwiLFwiT3VtbFwiOlwiXHUwMEQ2XCIsXCJvdW1sXCI6XCJcdTAwRjZcIixcInBhcmFcIjpcIlx1MDBCNlwiLFwicGx1c21uXCI6XCJcdTAwQjFcIixcInBvdW5kXCI6XCJcdTAwQTNcIixcInF1b3RcIjpcIlxcXCJcIixcIlFVT1RcIjpcIlxcXCJcIixcInJhcXVvXCI6XCJcdTAwQkJcIixcInJlZ1wiOlwiXHUwMEFFXCIsXCJSRUdcIjpcIlx1MDBBRVwiLFwic2VjdFwiOlwiXHUwMEE3XCIsXCJzaHlcIjpcIlx1MDBBRFwiLFwic3VwMVwiOlwiXHUwMEI5XCIsXCJzdXAyXCI6XCJcdTAwQjJcIixcInN1cDNcIjpcIlx1MDBCM1wiLFwic3psaWdcIjpcIlx1MDBERlwiLFwiVEhPUk5cIjpcIlx1MDBERVwiLFwidGhvcm5cIjpcIlx1MDBGRVwiLFwidGltZXNcIjpcIlx1MDBEN1wiLFwiVWFjdXRlXCI6XCJcdTAwREFcIixcInVhY3V0ZVwiOlwiXHUwMEZBXCIsXCJVY2lyY1wiOlwiXHUwMERCXCIsXCJ1Y2lyY1wiOlwiXHUwMEZCXCIsXCJVZ3JhdmVcIjpcIlx1MDBEOVwiLFwidWdyYXZlXCI6XCJcdTAwRjlcIixcInVtbFwiOlwiXHUwMEE4XCIsXCJVdW1sXCI6XCJcdTAwRENcIixcInV1bWxcIjpcIlx1MDBGQ1wiLFwiWWFjdXRlXCI6XCJcdTAwRERcIixcInlhY3V0ZVwiOlwiXHUwMEZEXCIsXCJ5ZW5cIjpcIlx1MDBBNVwiLFwieXVtbFwiOlwiXHUwMEZGXCJ9XG4iLCAie1wiYW1wXCI6XCImXCIsXCJhcG9zXCI6XCInXCIsXCJndFwiOlwiPlwiLFwibHRcIjpcIjxcIixcInF1b3RcIjpcIlxcXCJcIn1cbiIsICJ7XCIwXCI6NjU1MzMsXCIxMjhcIjo4MzY0LFwiMTMwXCI6ODIxOCxcIjEzMVwiOjQwMixcIjEzMlwiOjgyMjIsXCIxMzNcIjo4MjMwLFwiMTM0XCI6ODIyNCxcIjEzNVwiOjgyMjUsXCIxMzZcIjo3MTAsXCIxMzdcIjo4MjQwLFwiMTM4XCI6MzUyLFwiMTM5XCI6ODI0OSxcIjE0MFwiOjMzOCxcIjE0MlwiOjM4MSxcIjE0NVwiOjgyMTYsXCIxNDZcIjo4MjE3LFwiMTQ3XCI6ODIyMCxcIjE0OFwiOjgyMjEsXCIxNDlcIjo4MjI2LFwiMTUwXCI6ODIxMSxcIjE1MVwiOjgyMTIsXCIxNTJcIjo3MzIsXCIxNTNcIjo4NDgyLFwiMTU0XCI6MzUzLFwiMTU1XCI6ODI1MCxcIjE1NlwiOjMzOSxcIjE1OFwiOjM4MixcIjE1OVwiOjM3Nn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZGVjb2RlLmpzb25cIikpO1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxudmFyIGZyb21Db2RlUG9pbnQgPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uXG5TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICAgIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4+IDEwKSAmIDB4M2ZmKSB8IDB4ZDgwMCk7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICBpZiAoKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgfHwgY29kZVBvaW50ID4gMHgxMGZmZmYpIHtcbiAgICAgICAgcmV0dXJuIFwiXFx1RkZGRFwiO1xuICAgIH1cbiAgICBpZiAoY29kZVBvaW50IGluIGRlY29kZV9qc29uXzEuZGVmYXVsdCkge1xuICAgICAgICBjb2RlUG9pbnQgPSBkZWNvZGVfanNvbl8xLmRlZmF1bHRbY29kZVBvaW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29kZUNvZGVQb2ludDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVjb2RlSFRNTCA9IGV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlWE1MID0gdm9pZCAwO1xudmFyIGVudGl0aWVzX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2VudGl0aWVzLmpzb25cIikpO1xudmFyIGxlZ2FjeV9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9sZWdhY3kuanNvblwiKSk7XG52YXIgeG1sX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL3htbC5qc29uXCIpKTtcbnZhciBkZWNvZGVfY29kZXBvaW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZGVjb2RlX2NvZGVwb2ludFwiKSk7XG52YXIgc3RyaWN0RW50aXR5UmUgPSAvJig/OlthLXpBLVowLTldK3wjW3hYXVtcXGRhLWZBLUZdK3wjXFxkKyk7L2c7XG5leHBvcnRzLmRlY29kZVhNTCA9IGdldFN0cmljdERlY29kZXIoeG1sX2pzb25fMS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGdldFN0cmljdERlY29kZXIoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xuZnVuY3Rpb24gZ2V0U3RyaWN0RGVjb2RlcihtYXApIHtcbiAgICB2YXIgcmVwbGFjZSA9IGdldFJlcGxhY2VyKG1hcCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2Uoc3RyaWN0RW50aXR5UmUsIHJlcGxhY2UpOyB9O1xufVxudmFyIHNvcnRlciA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiAoYSA8IGIgPyAxIDogLTEpOyB9O1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVnYWN5ID0gT2JqZWN0LmtleXMobGVnYWN5X2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbnRpdGllc19qc29uXzEuZGVmYXVsdCkuc29ydChzb3J0ZXIpO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxlZ2FjeVtqXSA9PT0ga2V5c1tpXSkge1xuICAgICAgICAgICAga2V5c1tpXSArPSBcIjs/XCI7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiO1wiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCImKD86XCIgKyBrZXlzLmpvaW4oXCJ8XCIpICsgXCJ8I1t4WF1bXFxcXGRhLWZBLUZdKzs/fCNcXFxcZCs7PylcIiwgXCJnXCIpO1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKHN0cikge1xuICAgICAgICBpZiAoc3RyLnN1YnN0cigtMSkgIT09IFwiO1wiKVxuICAgICAgICAgICAgc3RyICs9IFwiO1wiO1xuICAgICAgICByZXR1cm4gcmVwbGFjZShzdHIpO1xuICAgIH1cbiAgICAvLyBUT0RPIGNvbnNpZGVyIGNyZWF0aW5nIGEgbWVyZ2VkIG1hcFxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHJlLCByZXBsYWNlcik7IH07XG59KSgpO1xuZnVuY3Rpb24gZ2V0UmVwbGFjZXIobWFwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuY2hhckF0KDEpID09PSBcIiNcIikge1xuICAgICAgICAgICAgdmFyIHNlY29uZENoYXIgPSBzdHIuY2hhckF0KDIpO1xuICAgICAgICAgICAgaWYgKHNlY29uZENoYXIgPT09IFwiWFwiIHx8IHNlY29uZENoYXIgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlSW50KHN0ci5zdWJzdHIoMyksIDE2KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigyKSwgMTApKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1udWxsaXNoLWNvYWxlc2NpbmdcbiAgICAgICAgcmV0dXJuIG1hcFtzdHIuc2xpY2UoMSwgLTEpXSB8fCBzdHI7XG4gICAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBleHBvcnRzLmVuY29kZUhUTUwgPSBleHBvcnRzLmVuY29kZVhNTCA9IHZvaWQgMDtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHhtbF9qc29uXzEuZGVmYXVsdCk7XG52YXIgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIFhNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZVhNTCk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbnZhciBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBlbnRpdGllcyBhbmQgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICpcbiAqIFRoaXMgaW5jbHVkZXMgY2hhcmFjdGVycyB0aGF0IGFyZSB2YWxpZCBBU0NJSSBjaGFyYWN0ZXJzIGluIEhUTUwgZG9jdW1lbnRzLlxuICogRm9yIGV4YW1wbGUgYCNgIHdpbGwgYmUgZW5jb2RlZCBhcyBgJm51bTtgLiBUbyBnZXQgYSBtb3JlIGNvbXBhY3Qgb3V0cHV0LFxuICogY29uc2lkZXIgdXNpbmcgdGhlIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGZ1bmN0aW9uLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZUhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgSFRNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZUhUTUwpO1xuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGludmVyc2UsIG5hbWUpIHtcbiAgICAgICAgaW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKSB7XG4gICAgdmFyIHNpbmdsZSA9IFtdO1xuICAgIHZhciBtdWx0aXBsZSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhpbnZlcnNlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIGlmIChrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIHNpbmdsZSBhcnJheVxuICAgICAgICAgICAgc2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB2YWx1ZSB0byBtdWx0aXBsZSBhcnJheVxuICAgICAgICAgICAgbXVsdGlwbGUucHVzaChrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgcmFuZ2VzIHRvIHNpbmdsZSBjaGFyYWN0ZXJzLlxuICAgIHNpbmdsZS5zb3J0KCk7XG4gICAgZm9yICh2YXIgc3RhcnQgPSAwOyBzdGFydCA8IHNpbmdsZS5sZW5ndGggLSAxOyBzdGFydCsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGVuZCBvZiBhIHJ1biBvZiBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciBlbmQgPSBzdGFydDtcbiAgICAgICAgd2hpbGUgKGVuZCA8IHNpbmdsZS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICBzaW5nbGVbZW5kXS5jaGFyQ29kZUF0KDEpICsgMSA9PT0gc2luZ2xlW2VuZCArIDFdLmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgICAgIGVuZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3VudCA9IDEgKyBlbmQgLSBzdGFydDtcbiAgICAgICAgLy8gV2Ugd2FudCB0byByZXBsYWNlIGF0IGxlYXN0IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKGNvdW50IDwgMylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzaW5nbGUuc3BsaWNlKHN0YXJ0LCBjb3VudCwgc2luZ2xlW3N0YXJ0XSArIFwiLVwiICsgc2luZ2xlW2VuZF0pO1xuICAgIH1cbiAgICBtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cbi8vIC9bXlxcMC1cXHg3Rl0vZ3VcbnZhciByZU5vbkFTQ0lJID0gLyg/OltcXHg4MC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nO1xudmFyIGdldENvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cblN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQgIT0gbnVsbFxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLmNvZGVQb2ludEF0KDApOyB9XG4gICAgOiAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIChjLmNoYXJDb2RlQXQoMCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICAgICAgICAgIGMuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgICAgICAgICAgMHhkYzAwICtcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xuICAgICAgICB9O1xuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpIHtcbiAgICByZXR1cm4gXCImI3hcIiArIChjLmxlbmd0aCA+IDEgPyBnZXRDb2RlUG9pbnQoYykgOiBjLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gaW52ZXJzZVtuYW1lXTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG4gICAgfTtcbn1cbnZhciByZUVzY2FwZUNoYXJzID0gbmV3IFJlZ0V4cCh4bWxSZXBsYWNlci5zb3VyY2UgKyBcInxcIiArIHJlTm9uQVNDSUkuc291cmNlLCBcImdcIik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIEhhdmUgYSBsb29rIGF0IGBlc2NhcGVVVEY4YCBpZiB5b3Ugd2FudCBhIG1vcmUgY29uY2lzZSBvdXRwdXQgYXQgdGhlIGV4cGVuc2VcbiAqIG9mIHJlZHVjZWQgdHJhbnNwb3J0YWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZXNjYXBlLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBYTUwgZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWxcbiAqIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG91dHB1dCB3aWxsIGJlIGNoYXJhY3Rlci1zZXQgZGVwZW5kZW50LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVVURjgoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoeG1sUmVwbGFjZXIsIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5leHBvcnRzLmVzY2FwZVVURjggPSBlc2NhcGVVVEY4O1xuZnVuY3Rpb24gZ2V0QVNDSUlFbmNvZGVyKG9iaikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5yZXBsYWNlKHJlRXNjYXBlQ2hhcnMsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBvYmpbY10gfHwgc2luZ2xlQ2hhclJlcGxhY2VyKGMpOyB9KTtcbiAgICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWNvZGVYTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw1U3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDUgPSBleHBvcnRzLmRlY29kZUhUTUw0ID0gZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MID0gZXhwb3J0cy5kZWNvZGVYTUwgPSBleHBvcnRzLmVuY29kZUhUTUw1ID0gZXhwb3J0cy5lbmNvZGVIVE1MNCA9IGV4cG9ydHMuZXNjYXBlVVRGOCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBleHBvcnRzLmVuY29kZUhUTUwgPSBleHBvcnRzLmVuY29kZVhNTCA9IGV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBleHBvcnRzLmRlY29kZSA9IHZvaWQgMDtcbnZhciBkZWNvZGVfMSA9IHJlcXVpcmUoXCIuL2RlY29kZVwiKTtcbnZhciBlbmNvZGVfMSA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBkZWNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZGVjb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkZWNvZGVYTUxgIG9yIGBkZWNvZGVIVE1MYCBkaXJlY3RseS5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUwpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vKipcbiAqIERlY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy4gRG9lcyBub3QgYWxsb3cgbWlzc2luZyB0cmFpbGluZyBzZW1pY29sb25zIGZvciBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZGVjb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGRlY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZGVjb2RlSFRNTFN0cmljdGAgb3IgYGRlY29kZVhNTGAgZGlyZWN0bHkuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZVN0cmljdChkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGVfMS5kZWNvZGVYTUwgOiBkZWNvZGVfMS5kZWNvZGVIVE1MU3RyaWN0KShkYXRhKTtcbn1cbmV4cG9ydHMuZGVjb2RlU3RyaWN0ID0gZGVjb2RlU3RyaWN0O1xuLyoqXG4gKiBFbmNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVuY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBlbmNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGVuY29kZUhUTUxgLCBgZW5jb2RlWE1MYCBvciBgZW5jb2RlTm9uQXNjaWlIVE1MYCBkaXJlY3RseS5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGVuY29kZV8xLmVuY29kZVhNTCA6IGVuY29kZV8xLmVuY29kZUhUTUwpKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG52YXIgZW5jb2RlXzIgPSByZXF1aXJlKFwiLi9lbmNvZGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVYTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZVhNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVOb25Bc2NpaUhUTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZU5vbkFzY2lpSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVzY2FwZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZXNjYXBlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXNjYXBlVVRGOFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZXNjYXBlVVRGODsgfSB9KTtcbi8vIExlZ2FjeSBhbGlhc2VzIChkZXByZWNhdGVkKVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTDRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MNVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbnZhciBkZWNvZGVfMiA9IHJlcXVpcmUoXCIuL2RlY29kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZVhNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlWE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUxTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG4vLyBMZWdhY3kgYWxpYXNlcyAoZGVwcmVjYXRlZClcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw1U3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlWE1MU3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVYTUw7IH0gfSk7XG4iLCAiY29uc3QgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuY29uc3QgZW50aXRpZXMgPSByZXF1aXJlKCdlbnRpdGllcycpO1xuY29uc3QgeG1sMmpzID0gcmVxdWlyZSgneG1sMmpzJyk7XG5cbnV0aWxzLnN0cmlwSHRtbCA9IGZ1bmN0aW9uKHN0cikge1xuICBzdHIgPSBzdHIucmVwbGFjZSgvKFteXFxuXSk8XFwvPyhofGJyfHB8dWx8b2x8bGl8YmxvY2txdW90ZXxzZWN0aW9ufHRhYmxlfHRyfGRpdikoPzoufFxcbikqPz4oW15cXG5dKS9nbSwgJyQxXFxuJDMnKVxuICBzdHIgPSBzdHIucmVwbGFjZSgvPCg/Oi58XFxuKSo/Pi9nbSwgJycpO1xuICByZXR1cm4gc3RyO1xufVxuXG51dGlscy5nZXRTbmlwcGV0ID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBlbnRpdGllcy5kZWNvZGVIVE1MKHV0aWxzLnN0cmlwSHRtbChzdHIpKS50cmltKCk7XG59XG5cbnV0aWxzLmdldExpbmsgPSBmdW5jdGlvbihsaW5rcywgcmVsLCBmYWxsYmFja0lkeCkge1xuICBpZiAoIWxpbmtzKSByZXR1cm47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobGlua3NbaV0uJC5yZWwgPT09IHJlbCkgcmV0dXJuIGxpbmtzW2ldLiQuaHJlZjtcbiAgfVxuICBpZiAobGlua3NbZmFsbGJhY2tJZHhdKSByZXR1cm4gbGlua3NbZmFsbGJhY2tJZHhdLiQuaHJlZjtcbn1cblxudXRpbHMuZ2V0Q29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgaWYgKHR5cGVvZiBjb250ZW50Ll8gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQuXztcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgYnVpbGRlciA9IG5ldyB4bWwyanMuQnVpbGRlcih7aGVhZGxlc3M6IHRydWUsIGV4cGxpY2l0Um9vdDogdHJ1ZSwgcm9vdE5hbWU6ICdkaXYnLCByZW5kZXJPcHRzOiB7cHJldHR5OiBmYWxzZX19KTtcbiAgICByZXR1cm4gYnVpbGRlci5idWlsZE9iamVjdChjb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxufVxuXG51dGlscy5jb3B5RnJvbVhNTCA9IGZ1bmN0aW9uKHhtbCwgZGVzdCwgZmllbGRzKSB7XG4gIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGYpIHtcbiAgICBsZXQgZnJvbSA9IGY7XG4gICAgbGV0IHRvID0gZjtcbiAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGYpKSB7XG4gICAgICBmcm9tID0gZlswXTtcbiAgICAgIHRvID0gZlsxXTtcbiAgICAgIGlmIChmLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgb3B0aW9ucyA9IGZbMl07XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsga2VlcEFycmF5LCBpbmNsdWRlU25pcHBldCB9ID0gb3B0aW9ucztcbiAgICBpZiAoeG1sW2Zyb21dICE9PSB1bmRlZmluZWQpe1xuICAgICAgZGVzdFt0b10gPSBrZWVwQXJyYXkgPyB4bWxbZnJvbV0gOiB4bWxbZnJvbV1bMF07XG4gICAgfVxuICAgIGlmIChkZXN0W3RvXSAmJiB0eXBlb2YgZGVzdFt0b10uXyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGRlc3RbdG9dPWRlc3RbdG9dLl87XG4gICAgfVxuICAgIGlmIChpbmNsdWRlU25pcHBldCAmJiBkZXN0W3RvXSAmJiB0eXBlb2YgZGVzdFt0b10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBkZXN0W3RvICsgJ1NuaXBwZXQnXSA9IHV0aWxzLmdldFNuaXBwZXQoZGVzdFt0b10pO1xuICAgIH1cbiAgfSlcbn1cblxudXRpbHMubWF5YmVQcm9taXNpZnkgPSBmdW5jdGlvbihjYWxsYmFjaywgcHJvbWlzZSkge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gcHJvbWlzZTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihcbiAgICBkYXRhID0+IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobnVsbCwgZGF0YSkpLFxuICAgIGVyciA9PiBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGVycikpXG4gICk7XG59XG5cbmNvbnN0IERFRkFVTFRfRU5DT0RJTkcgPSAndXRmOCc7XG5jb25zdCBFTkNPRElOR19SRUdFWCA9IC8oZW5jb2Rpbmd8Y2hhcnNldClcXHMqPVxccyooXFxTKykvO1xuY29uc3QgU1VQUE9SVEVEX0VOQ09ESU5HUyA9IFsnYXNjaWknLCAndXRmOCcsICd1dGYxNmxlJywgJ3VjczInLCAnYmFzZTY0JywgJ2xhdGluMScsICdiaW5hcnknLCAnaGV4J107XG5jb25zdCBFTkNPRElOR19BTElBU0VTID0ge1xuICAndXRmLTgnOiAndXRmOCcsXG4gICdpc28tODg1OS0xJzogJ2xhdGluMScsXG59XG5cbnV0aWxzLmdldEVuY29kaW5nRnJvbUNvbnRlbnRUeXBlID0gZnVuY3Rpb24oY29udGVudFR5cGUpIHtcbiAgY29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcbiAgbGV0IG1hdGNoID0gY29udGVudFR5cGUubWF0Y2goRU5DT0RJTkdfUkVHRVgpO1xuICBsZXQgZW5jb2RpbmcgPSAobWF0Y2ggfHwgW10pWzJdIHx8ICcnO1xuICBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGVuY29kaW5nID0gRU5DT0RJTkdfQUxJQVNFU1tlbmNvZGluZ10gfHwgZW5jb2Rpbmc7XG4gIGlmICghZW5jb2RpbmcgfHwgU1VQUE9SVEVEX0VOQ09ESU5HUy5pbmRleE9mKGVuY29kaW5nKSA9PT0gLTEpIHtcbiAgICBlbmNvZGluZyA9IERFRkFVTFRfRU5DT0RJTkc7XG4gIH1cbiAgcmV0dXJuIGVuY29kaW5nO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbmNvbnN0IGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IHhtbDJqcyA9IHJlcXVpcmUoJ3htbDJqcycpO1xuY29uc3QgdXJsID0gcmVxdWlyZSgndXJsJyk7XG5cbmNvbnN0IGZpZWxkcyA9IHJlcXVpcmUoJy4vZmllbGRzJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuY29uc3QgREVGQVVMVF9IRUFERVJTID0ge1xuICAnVXNlci1BZ2VudCc6ICdyc3MtcGFyc2VyJyxcbiAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9yc3MreG1sJyxcbn1cbmNvbnN0IERFRkFVTFRfTUFYX1JFRElSRUNUUyA9IDU7XG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSA2MDAwMDtcblxuY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSkge1xuICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICBvcHRpb25zLnhtbDJqcyA9IG9wdGlvbnMueG1sMmpzIHx8IHt9O1xuICAgIG9wdGlvbnMuY3VzdG9tRmllbGRzID0gb3B0aW9ucy5jdXN0b21GaWVsZHMgfHwge307XG4gICAgb3B0aW9ucy5jdXN0b21GaWVsZHMuaXRlbSA9IG9wdGlvbnMuY3VzdG9tRmllbGRzLml0ZW0gfHwgW107XG4gICAgb3B0aW9ucy5jdXN0b21GaWVsZHMuZmVlZCA9IG9wdGlvbnMuY3VzdG9tRmllbGRzLmZlZWQgfHwgW107XG4gICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm1heFJlZGlyZWN0cykgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBERUZBVUxUX01BWF9SRURJUkVDVFM7XG4gICAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIG9wdGlvbnMudGltZW91dCA9IERFRkFVTFRfVElNRU9VVDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMueG1sUGFyc2VyID0gbmV3IHhtbDJqcy5QYXJzZXIodGhpcy5vcHRpb25zLnhtbDJqcyk7XG4gIH1cblxuICBwYXJzZVN0cmluZyh4bWwsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnhtbFBhcnNlci5wYXJzZVN0cmluZyh4bWwsIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBYTUwuJykpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZWVkID0gbnVsbDtcbiAgICAgICAgaWYgKHJlc3VsdC5mZWVkKSB7XG4gICAgICAgICAgZmVlZCA9IHRoaXMuYnVpbGRBdG9tRmVlZChyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5yc3MgJiYgcmVzdWx0LnJzcy4kICYmIHJlc3VsdC5yc3MuJC52ZXJzaW9uICYmIHJlc3VsdC5yc3MuJC52ZXJzaW9uLm1hdGNoKC9eMi8pKSB7XG4gICAgICAgICAgZmVlZCA9IHRoaXMuYnVpbGRSU1MyKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0WydyZGY6UkRGJ10pIHtcbiAgICAgICAgICBmZWVkID0gdGhpcy5idWlsZFJTUzEocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQucnNzICYmIHJlc3VsdC5yc3MuJCAmJiByZXN1bHQucnNzLiQudmVyc2lvbiAmJiByZXN1bHQucnNzLiQudmVyc2lvbi5tYXRjaCgvMFxcLjkvKSkge1xuICAgICAgICAgIGZlZWQgPSB0aGlzLmJ1aWxkUlNTMF85KHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LnJzcyAmJiB0aGlzLm9wdGlvbnMuZGVmYXVsdFJTUykge1xuICAgICAgICAgIHN3aXRjaCh0aGlzLm9wdGlvbnMuZGVmYXVsdFJTUykge1xuICAgICAgICAgICAgY2FzZSAwLjk6XG4gICAgICAgICAgICAgIGZlZWQgPSB0aGlzLmJ1aWxkUlNTMF85KHJlc3VsdCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBmZWVkID0gdGhpcy5idWlsZFJTUzEocmVzdWx0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIGZlZWQgPSB0aGlzLmJ1aWxkUlNTMihyZXN1bHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiZGVmYXVsdCBSU1MgdmVyc2lvbiBub3QgcmVjb2duaXplZC5cIikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKFwiRmVlZCBub3QgcmVjb2duaXplZCBhcyBSU1MgMSBvciAyLlwiKSlcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGZlZWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcHJvbSA9IHV0aWxzLm1heWJlUHJvbWlzaWZ5KGNhbGxiYWNrLCBwcm9tKTtcbiAgICByZXR1cm4gcHJvbTtcbiAgfVxuXG4gIHBhcnNlVVJMKGZlZWRVcmwsIGNhbGxiYWNrLCByZWRpcmVjdENvdW50PTApIHtcbiAgICBsZXQgeG1sID0gJyc7XG4gICAgbGV0IGdldCA9IGZlZWRVcmwuaW5kZXhPZignaHR0cHMnKSA9PT0gMCA/IGh0dHBzLmdldCA6IGh0dHAuZ2V0O1xuICAgIGxldCB1cmxQYXJ0cyA9IHVybC5wYXJzZShmZWVkVXJsKTtcbiAgICBsZXQgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSEVBREVSUywgdGhpcy5vcHRpb25zLmhlYWRlcnMpO1xuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgICBsZXQgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRzID0gT2JqZWN0LmFzc2lnbih7aGVhZGVyc30sIHVybFBhcnRzLCB0aGlzLm9wdGlvbnMucmVxdWVzdE9wdGlvbnMpO1xuICAgICAgbGV0IHJlcSA9IGdldChyZXF1ZXN0T3B0cywgKHJlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heFJlZGlyZWN0cyAmJiByZXMuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzLnN0YXR1c0NvZGUgPCA0MDAgJiYgcmVzLmhlYWRlcnNbJ2xvY2F0aW9uJ10pIHtcbiAgICAgICAgICBpZiAocmVkaXJlY3RDb3VudCA9PT0gdGhpcy5vcHRpb25zLm1heFJlZGlyZWN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJUb28gbWFueSByZWRpcmVjdHNcIikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IHVybC5yZXNvbHZlKGZlZWRVcmwsIHJlcy5oZWFkZXJzWydsb2NhdGlvbiddKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVVJMKG5ld0xvY2F0aW9uLCBudWxsLCByZWRpcmVjdENvdW50ICsgMSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzQ29kZSA+PSAzMDApIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIlN0YXR1cyBjb2RlIFwiICsgcmVzLnN0YXR1c0NvZGUpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBlbmNvZGluZyA9IHV0aWxzLmdldEVuY29kaW5nRnJvbUNvbnRlbnRUeXBlKHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSk7XG4gICAgICAgIHJlcy5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG4gICAgICAgIHJlcy5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgICAgIHhtbCArPSBjaHVuaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlU3RyaW5nKHhtbCkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICByZXEub24oJ2Vycm9yJywgcmVqZWN0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJSZXF1ZXN0IHRpbWVkIG91dCBhZnRlciBcIiArIHRoaXMub3B0aW9ucy50aW1lb3V0ICsgXCJtc1wiKSk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMudGltZW91dCk7XG4gICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gICAgfSwgZSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfSk7XG4gICAgcHJvbSA9IHV0aWxzLm1heWJlUHJvbWlzaWZ5KGNhbGxiYWNrLCBwcm9tKTtcbiAgICByZXR1cm4gcHJvbTtcbiAgfVxuXG4gIGJ1aWxkQXRvbUZlZWQoeG1sT2JqKSB7XG4gICAgbGV0IGZlZWQgPSB7aXRlbXM6IFtdfTtcbiAgICB1dGlscy5jb3B5RnJvbVhNTCh4bWxPYmouZmVlZCwgZmVlZCwgdGhpcy5vcHRpb25zLmN1c3RvbUZpZWxkcy5mZWVkKTtcbiAgICBpZiAoeG1sT2JqLmZlZWQubGluaykge1xuICAgICAgZmVlZC5saW5rID0gdXRpbHMuZ2V0TGluayh4bWxPYmouZmVlZC5saW5rLCAnYWx0ZXJuYXRlJywgMCk7XG4gICAgICBmZWVkLmZlZWRVcmwgPSB1dGlscy5nZXRMaW5rKHhtbE9iai5mZWVkLmxpbmssICdzZWxmJywgMSk7XG4gICAgfVxuICAgIGlmICh4bWxPYmouZmVlZC50aXRsZSkge1xuICAgICAgbGV0IHRpdGxlID0geG1sT2JqLmZlZWQudGl0bGVbMF0gfHwgJyc7XG4gICAgICBpZiAodGl0bGUuXykgdGl0bGUgPSB0aXRsZS5fXG4gICAgICBpZiAodGl0bGUpIGZlZWQudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgaWYgKHhtbE9iai5mZWVkLnVwZGF0ZWQpIHtcbiAgICAgIGZlZWQubGFzdEJ1aWxkRGF0ZSA9IHhtbE9iai5mZWVkLnVwZGF0ZWRbMF07XG4gICAgfVxuICAgIGZlZWQuaXRlbXMgPSAoeG1sT2JqLmZlZWQuZW50cnkgfHwgW10pLm1hcChlbnRyeSA9PiB0aGlzLnBhcnNlSXRlbUF0b20oZW50cnkpKTtcbiAgICByZXR1cm4gZmVlZDtcbiAgfVxuXG4gIHBhcnNlSXRlbUF0b20oZW50cnkpIHtcbiAgICBsZXQgaXRlbSA9IHt9O1xuICAgIHV0aWxzLmNvcHlGcm9tWE1MKGVudHJ5LCBpdGVtLCB0aGlzLm9wdGlvbnMuY3VzdG9tRmllbGRzLml0ZW0pO1xuICAgIGlmIChlbnRyeS50aXRsZSkge1xuICAgICAgbGV0IHRpdGxlID0gZW50cnkudGl0bGVbMF0gfHwgJyc7XG4gICAgICBpZiAodGl0bGUuXykgdGl0bGUgPSB0aXRsZS5fO1xuICAgICAgaWYgKHRpdGxlKSBpdGVtLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIGlmIChlbnRyeS5saW5rICYmIGVudHJ5LmxpbmsubGVuZ3RoKSB7XG4gICAgICBpdGVtLmxpbmsgPSB1dGlscy5nZXRMaW5rKGVudHJ5LmxpbmssICdhbHRlcm5hdGUnLCAwKTtcbiAgICB9XG4gICAgaWYgKGVudHJ5LnB1Ymxpc2hlZCAmJiBlbnRyeS5wdWJsaXNoZWQubGVuZ3RoICYmIGVudHJ5LnB1Ymxpc2hlZFswXS5sZW5ndGgpIGl0ZW0ucHViRGF0ZSA9IG5ldyBEYXRlKGVudHJ5LnB1Ymxpc2hlZFswXSkudG9JU09TdHJpbmcoKTtcbiAgICBpZiAoIWl0ZW0ucHViRGF0ZSAmJiBlbnRyeS51cGRhdGVkICYmIGVudHJ5LnVwZGF0ZWQubGVuZ3RoICYmIGVudHJ5LnVwZGF0ZWRbMF0ubGVuZ3RoKSBpdGVtLnB1YkRhdGUgPSBuZXcgRGF0ZShlbnRyeS51cGRhdGVkWzBdKS50b0lTT1N0cmluZygpO1xuICAgIGlmIChlbnRyeS5hdXRob3IgJiYgZW50cnkuYXV0aG9yLmxlbmd0aCAmJiBlbnRyeS5hdXRob3JbMF0ubmFtZSAmJiBlbnRyeS5hdXRob3JbMF0ubmFtZS5sZW5ndGgpIGl0ZW0uYXV0aG9yID0gZW50cnkuYXV0aG9yWzBdLm5hbWVbMF07XG4gICAgaWYgKGVudHJ5LmNvbnRlbnQgJiYgZW50cnkuY29udGVudC5sZW5ndGgpIHtcbiAgICAgIGl0ZW0uY29udGVudCA9IHV0aWxzLmdldENvbnRlbnQoZW50cnkuY29udGVudFswXSk7XG4gICAgICBpdGVtLmNvbnRlbnRTbmlwcGV0ID0gdXRpbHMuZ2V0U25pcHBldChpdGVtLmNvbnRlbnQpXG4gICAgfVxuICAgIGlmIChlbnRyeS5zdW1tYXJ5ICYmIGVudHJ5LnN1bW1hcnkubGVuZ3RoKSB7XG4gICAgICBpdGVtLnN1bW1hcnkgPSB1dGlscy5nZXRDb250ZW50KGVudHJ5LnN1bW1hcnlbMF0pO1xuICAgIH1cbiAgICBpZiAoZW50cnkuaWQpIHtcbiAgICAgIGl0ZW0uaWQgPSBlbnRyeS5pZFswXTtcbiAgICB9XG4gICAgdGhpcy5zZXRJU09EYXRlKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgYnVpbGRSU1MwXzkoeG1sT2JqKSB7XG4gICAgdmFyIGNoYW5uZWwgPSB4bWxPYmoucnNzLmNoYW5uZWxbMF07XG4gICAgdmFyIGl0ZW1zID0gY2hhbm5lbC5pdGVtO1xuICAgIHJldHVybiB0aGlzLmJ1aWxkUlNTKGNoYW5uZWwsIGl0ZW1zKTtcbiAgfVxuXG4gIGJ1aWxkUlNTMSh4bWxPYmopIHtcbiAgICB4bWxPYmogPSB4bWxPYmpbJ3JkZjpSREYnXTtcbiAgICBsZXQgY2hhbm5lbCA9IHhtbE9iai5jaGFubmVsWzBdO1xuICAgIGxldCBpdGVtcyA9IHhtbE9iai5pdGVtO1xuICAgIHJldHVybiB0aGlzLmJ1aWxkUlNTKGNoYW5uZWwsIGl0ZW1zKTtcbiAgfVxuXG4gIGJ1aWxkUlNTMih4bWxPYmopIHtcbiAgICBsZXQgY2hhbm5lbCA9IHhtbE9iai5yc3MuY2hhbm5lbFswXTtcbiAgICBsZXQgaXRlbXMgPSBjaGFubmVsLml0ZW07XG4gICAgbGV0IGZlZWQgPSB0aGlzLmJ1aWxkUlNTKGNoYW5uZWwsIGl0ZW1zKTtcbiAgICBpZiAoeG1sT2JqLnJzcy4kICYmIHhtbE9iai5yc3MuJFsneG1sbnM6aXR1bmVzJ10pIHtcbiAgICAgIHRoaXMuZGVjb3JhdGVJdHVuZXMoZmVlZCwgY2hhbm5lbCk7XG4gICAgfVxuICAgIHJldHVybiBmZWVkO1xuICB9XG5cbiAgYnVpbGRSU1MoY2hhbm5lbCwgaXRlbXMpIHtcbiAgICBpdGVtcyA9IGl0ZW1zIHx8IFtdO1xuICAgIGxldCBmZWVkID0ge2l0ZW1zOiBbXX07XG4gICAgbGV0IGZlZWRGaWVsZHMgPSBmaWVsZHMuZmVlZC5jb25jYXQodGhpcy5vcHRpb25zLmN1c3RvbUZpZWxkcy5mZWVkKTtcbiAgICBsZXQgaXRlbUZpZWxkcyA9IGZpZWxkcy5pdGVtLmNvbmNhdCh0aGlzLm9wdGlvbnMuY3VzdG9tRmllbGRzLml0ZW0pO1xuICAgIGlmIChjaGFubmVsWydhdG9tOmxpbmsnXSAmJiBjaGFubmVsWydhdG9tOmxpbmsnXVswXSAmJiBjaGFubmVsWydhdG9tOmxpbmsnXVswXS4kKSB7XG4gICAgICBmZWVkLmZlZWRVcmwgPSBjaGFubmVsWydhdG9tOmxpbmsnXVswXS4kLmhyZWY7XG4gICAgfVxuICAgIGlmIChjaGFubmVsLmltYWdlICYmIGNoYW5uZWwuaW1hZ2VbMF0gJiYgY2hhbm5lbC5pbWFnZVswXS51cmwpIHtcbiAgICAgIGZlZWQuaW1hZ2UgPSB7fTtcbiAgICAgIGxldCBpbWFnZSA9IGNoYW5uZWwuaW1hZ2VbMF07XG4gICAgICBpZiAoaW1hZ2UubGluaykgZmVlZC5pbWFnZS5saW5rID0gaW1hZ2UubGlua1swXTtcbiAgICAgIGlmIChpbWFnZS51cmwpIGZlZWQuaW1hZ2UudXJsID0gaW1hZ2UudXJsWzBdO1xuICAgICAgaWYgKGltYWdlLnRpdGxlKSBmZWVkLmltYWdlLnRpdGxlID0gaW1hZ2UudGl0bGVbMF07XG4gICAgICBpZiAoaW1hZ2Uud2lkdGgpIGZlZWQuaW1hZ2Uud2lkdGggPSBpbWFnZS53aWR0aFswXTtcbiAgICAgIGlmIChpbWFnZS5oZWlnaHQpIGZlZWQuaW1hZ2UuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0WzBdO1xuICAgIH1cbiAgICBjb25zdCBwYWdpbmF0aW9uTGlua3MgPSB0aGlzLmdlbmVyYXRlUGFnaW5hdGlvbkxpbmtzKGNoYW5uZWwpO1xuICAgIGlmIChPYmplY3Qua2V5cyhwYWdpbmF0aW9uTGlua3MpLmxlbmd0aCkge1xuICAgICAgZmVlZC5wYWdpbmF0aW9uTGlua3MgPSBwYWdpbmF0aW9uTGlua3M7XG4gICAgfVxuICAgIHV0aWxzLmNvcHlGcm9tWE1MKGNoYW5uZWwsIGZlZWQsIGZlZWRGaWVsZHMpO1xuICAgIGZlZWQuaXRlbXMgPSBpdGVtcy5tYXAoeG1sSXRlbSA9PiB0aGlzLnBhcnNlSXRlbVJzcyh4bWxJdGVtLCBpdGVtRmllbGRzKSk7XG4gICAgcmV0dXJuIGZlZWQ7XG4gIH1cblxuICBwYXJzZUl0ZW1Sc3MoeG1sSXRlbSwgaXRlbUZpZWxkcykge1xuICAgIGxldCBpdGVtID0ge307XG4gICAgdXRpbHMuY29weUZyb21YTUwoeG1sSXRlbSwgaXRlbSwgaXRlbUZpZWxkcyk7XG4gICAgaWYgKHhtbEl0ZW0uZW5jbG9zdXJlKSB7XG4gICAgICBpdGVtLmVuY2xvc3VyZSA9IHhtbEl0ZW0uZW5jbG9zdXJlWzBdLiQ7XG4gICAgfVxuICAgIGlmICh4bWxJdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICBpdGVtLmNvbnRlbnQgPSB1dGlscy5nZXRDb250ZW50KHhtbEl0ZW0uZGVzY3JpcHRpb25bMF0pO1xuICAgICAgaXRlbS5jb250ZW50U25pcHBldCA9IHV0aWxzLmdldFNuaXBwZXQoaXRlbS5jb250ZW50KTtcbiAgICB9XG4gICAgaWYgKHhtbEl0ZW0uZ3VpZCkge1xuICAgICAgaXRlbS5ndWlkID0geG1sSXRlbS5ndWlkWzBdO1xuICAgICAgaWYgKGl0ZW0uZ3VpZC5fKSBpdGVtLmd1aWQgPSBpdGVtLmd1aWQuXztcbiAgICB9XG4gICAgaWYgKHhtbEl0ZW0uJCAmJiB4bWxJdGVtLiRbJ3JkZjphYm91dCddKSB7XG4gICAgICBpdGVtWydyZGY6YWJvdXQnXSA9IHhtbEl0ZW0uJFsncmRmOmFib3V0J11cbiAgICB9XG4gICAgaWYgKHhtbEl0ZW0uY2F0ZWdvcnkpIGl0ZW0uY2F0ZWdvcmllcyA9IHhtbEl0ZW0uY2F0ZWdvcnk7XG4gICAgdGhpcy5zZXRJU09EYXRlKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBpVHVuZXMgc3BlY2lmaWMgZmllbGRzIGZyb20gWE1MIHRvIGV4dHJhY3RlZCBKU09OXG4gICAqXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmZWVkIGV4dHJhY3RlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gY2hhbm5lbCBwYXJzZWQgWE1MXG4gICAqL1xuICBkZWNvcmF0ZUl0dW5lcyhmZWVkLCBjaGFubmVsKSB7XG4gICAgbGV0IGl0ZW1zID0gY2hhbm5lbC5pdGVtIHx8IFtdO1xuICAgIGxldCBjYXRlZ29yaWVzID0gW107XG4gICAgZmVlZC5pdHVuZXMgPSB7fVxuXG4gICAgaWYgKGNoYW5uZWxbJ2l0dW5lczpvd25lciddKSB7XG4gICAgICBsZXQgb3duZXIgPSB7fTtcblxuICAgICAgaWYoY2hhbm5lbFsnaXR1bmVzOm93bmVyJ11bMF1bJ2l0dW5lczpuYW1lJ10pIHtcbiAgICAgICAgb3duZXIubmFtZSA9IGNoYW5uZWxbJ2l0dW5lczpvd25lciddWzBdWydpdHVuZXM6bmFtZSddWzBdO1xuICAgICAgfVxuICAgICAgaWYoY2hhbm5lbFsnaXR1bmVzOm93bmVyJ11bMF1bJ2l0dW5lczplbWFpbCddKSB7XG4gICAgICAgIG93bmVyLmVtYWlsID0gY2hhbm5lbFsnaXR1bmVzOm93bmVyJ11bMF1bJ2l0dW5lczplbWFpbCddWzBdO1xuICAgICAgfVxuICAgICAgZmVlZC5pdHVuZXMub3duZXIgPSBvd25lcjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbm5lbFsnaXR1bmVzOmltYWdlJ10pIHtcbiAgICAgIGxldCBpbWFnZTtcbiAgICAgIGxldCBoYXNJbWFnZUhyZWYgPSAoY2hhbm5lbFsnaXR1bmVzOmltYWdlJ11bMF0gJiZcbiAgICAgICAgY2hhbm5lbFsnaXR1bmVzOmltYWdlJ11bMF0uJCAmJlxuICAgICAgICBjaGFubmVsWydpdHVuZXM6aW1hZ2UnXVswXS4kLmhyZWYpO1xuICAgICAgaW1hZ2UgPSBoYXNJbWFnZUhyZWYgPyBjaGFubmVsWydpdHVuZXM6aW1hZ2UnXVswXS4kLmhyZWYgOiBudWxsO1xuICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgIGZlZWQuaXR1bmVzLmltYWdlID0gaW1hZ2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5uZWxbJ2l0dW5lczpjYXRlZ29yeSddKSB7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzV2l0aFN1YnMgPSBjaGFubmVsWydpdHVuZXM6Y2F0ZWdvcnknXS5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogY2F0ZWdvcnkgJiYgY2F0ZWdvcnkuJCAmJiBjYXRlZ29yeS4kLnRleHQsXG4gICAgICAgICAgc3ViczogY2F0ZWdvcnlbJ2l0dW5lczpjYXRlZ29yeSddID9cbiAgICAgICAgICAgIGNhdGVnb3J5WydpdHVuZXM6Y2F0ZWdvcnknXVxuICAgICAgICAgICAgICAubWFwKChzdWJjYXRlZ29yeSkgPT4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBzdWJjYXRlZ29yeSAmJiBzdWJjYXRlZ29yeS4kICYmIHN1YmNhdGVnb3J5LiQudGV4dFxuICAgICAgICAgICAgICB9KSkgOiBudWxsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGZlZWQuaXR1bmVzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzV2l0aFN1YnMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubmFtZSk7XG4gICAgICBmZWVkLml0dW5lcy5jYXRlZ29yaWVzV2l0aFN1YnMgPSBjYXRlZ29yaWVzV2l0aFN1YnM7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5uZWxbJ2l0dW5lczprZXl3b3JkcyddKSB7XG4gICAgICBpZiAoY2hhbm5lbFsnaXR1bmVzOmtleXdvcmRzJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICBmZWVkLml0dW5lcy5rZXl3b3JkcyA9IGNoYW5uZWxbJ2l0dW5lczprZXl3b3JkcyddLm1hcChcbiAgICAgICAgICBrZXl3b3JkID0+IGtleXdvcmQgJiYga2V5d29yZC4kICYmIGtleXdvcmQuJC50ZXh0XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQga2V5d29yZHMgPSBjaGFubmVsWydpdHVuZXM6a2V5d29yZHMnXVswXTtcbiAgICAgICAgaWYgKGtleXdvcmRzICYmIHR5cGVvZiBrZXl3b3Jkcy5fID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGtleXdvcmRzID0ga2V5d29yZHMuXztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXl3b3JkcyAmJiBrZXl3b3Jkcy4kICYmIGtleXdvcmRzLiQudGV4dCkge1xuICAgICAgICAgIGZlZWQuaXR1bmVzLmtleXdvcmRzID0ga2V5d29yZHMuJC50ZXh0LnNwbGl0KCcsJylcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Yga2V5d29yZHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBmZWVkLml0dW5lcy5rZXl3b3JkcyA9IGtleXdvcmRzLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1dGlscy5jb3B5RnJvbVhNTChjaGFubmVsLCBmZWVkLml0dW5lcywgZmllbGRzLnBvZGNhc3RGZWVkKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVudHJ5ID0gZmVlZC5pdGVtc1tpbmRleF07XG4gICAgICBlbnRyeS5pdHVuZXMgPSB7fTtcbiAgICAgIHV0aWxzLmNvcHlGcm9tWE1MKGl0ZW0sIGVudHJ5Lml0dW5lcywgZmllbGRzLnBvZGNhc3RJdGVtKTtcbiAgICAgIGxldCBpbWFnZSA9IGl0ZW1bJ2l0dW5lczppbWFnZSddO1xuICAgICAgaWYgKGltYWdlICYmIGltYWdlWzBdICYmIGltYWdlWzBdLiQgJiYgaW1hZ2VbMF0uJC5ocmVmKSB7XG4gICAgICAgIGVudHJ5Lml0dW5lcy5pbWFnZSA9IGltYWdlWzBdLiQuaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldElTT0RhdGUoaXRlbSkge1xuICAgIGxldCBkYXRlID0gaXRlbS5wdWJEYXRlIHx8IGl0ZW0uZGF0ZTtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaXRlbS5pc29EYXRlID0gbmV3IERhdGUoZGF0ZS50cmltKCkpLnRvSVNPU3RyaW5nKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIElnbm9yZSBiYWQgZGF0ZSBmb3JtYXRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgcGFnaW5hdGlvbiBvYmplY3Qgd2hlcmUgdGhlIHJlbCBhdHRyaWJ1dGUgaXMgdGhlIGtleSBhbmQgaHJlZiBhdHRyaWJ1dGUgaXMgdGhlIHZhbHVlXG4gICAqICB7IHNlbGY6ICdzZWxmLXVybCcsIGZpcnN0OiAnZmlyc3QtdXJsJywgLi4uICB9XG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hhbm5lbCBwYXJzZWQgWE1MXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZW5lcmF0ZVBhZ2luYXRpb25MaW5rcyhjaGFubmVsKSB7XG4gICAgaWYgKCFjaGFubmVsWydhdG9tOmxpbmsnXSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwYWdpbmF0aW9uUmVsQXR0cmlidXRlcyA9IFsnc2VsZicsICdmaXJzdCcsICduZXh0JywgJ3ByZXYnLCAnbGFzdCddO1xuXG4gICAgcmV0dXJuIGNoYW5uZWxbJ2F0b206bGluayddLnJlZHVjZSgocGFnaW5hdGlvbkxpbmtzLCBsaW5rKSA9PiB7XG4gICAgICBpZiAoIWxpbmsuJCB8fCAhcGFnaW5hdGlvblJlbEF0dHJpYnV0ZXMuaW5jbHVkZXMobGluay4kLnJlbCkpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2luYXRpb25MaW5rcztcbiAgICAgIH1cbiAgICAgIHBhZ2luYXRpb25MaW5rc1tsaW5rLiQucmVsXSA9IGxpbmsuJC5ocmVmO1xuICAgICAgcmV0dXJuIHBhZ2luYXRpb25MaW5rcztcbiAgICB9LCB7fSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3BhcnNlcicpO1xuXG4iLCAiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25QYW5lbCwgTGlzdCwgc2hvd1RvYXN0LCBUb2FzdCB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXJzZXIgZnJvbSBcInJzcy1wYXJzZXJcIjtcblxuY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBpdGVtcz86IFBhcnNlci5JdGVtW107XG4gIGVycm9yPzogRXJyb3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoU3RvcmllcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZlZWQgPSBhd2FpdCBwYXJzZXIucGFyc2VVUkwoXCJodHRwczovL2hucnNzLm9yZy9mcm9udHBhZ2U/ZGVzY3JpcHRpb249MCZjb3VudD0yNVwiKTtcbiAgICAgICAgc2V0U3RhdGUoeyBpdGVtczogZmVlZC5pdGVtcyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoU3RvcmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coc3RhdGUuaXRlbXMpOyAvLyBQcmludHMgc3Rvcmllc1xuXG4gIGlmIChzdGF0ZS5lcnJvcikge1xuICAgIHNob3dUb2FzdCh7XG4gICAgICBzdHlsZTogVG9hc3QuU3R5bGUuRmFpbHVyZSxcbiAgICAgIHRpdGxlOiBcIkZhaWxlZCBsb2FkaW5nIHN0b3JpZXNcIixcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaXN0IGlzTG9hZGluZz17IXN0YXRlLml0ZW1zICYmICFzdGF0ZS5lcnJvcn0+XG4gICAgICB7c3RhdGUuaXRlbXM/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxTdG9yeUxpc3RJdGVtIGtleT17aXRlbS5ndWlkfSBpdGVtPXtpdGVtfSBpbmRleD17aW5kZXh9IC8+KX1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG5cbmNvbnN0IGljb25Ub0Vtb2ppTWFwID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oW1xuICBbMSwgXCIxXHVGRTBGXHUyMEUzXCJdLFxuICBbMiwgXCIyXHVGRTBGXHUyMEUzXCJdLFxuICBbMywgXCIzXHVGRTBGXHUyMEUzXCJdLFxuICBbNCwgXCI0XHVGRTBGXHUyMEUzXCJdLFxuICBbNSwgXCI1XHVGRTBGXHUyMEUzXCJdLFxuICBbNiwgXCI2XHVGRTBGXHUyMEUzXCJdLFxuICBbNywgXCI3XHVGRTBGXHUyMEUzXCJdLFxuICBbOCwgXCI4XHVGRTBGXHUyMEUzXCJdLFxuICBbOSwgXCI5XHVGRTBGXHUyMEUzXCJdLFxuICBbMTAsIFwiXHVEODNEXHVERDFGXCJdLFxuXSk7XG5cbmZ1bmN0aW9uIGdldEljb24oaW5kZXg6IG51bWJlcikge1xuICByZXR1cm4gaWNvblRvRW1vamlNYXAuZ2V0KGluZGV4KSA/PyBcIlx1MjNGQVwiO1xufVxuXG5mdW5jdGlvbiBnZXRQb2ludHMoaXRlbTogUGFyc2VyLkl0ZW0pIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGl0ZW0uY29udGVudFNuaXBwZXQ/Lm1hdGNoKC8oPzw9UG9pbnRzOlxccyopKFxcZCspL2cpO1xuICByZXR1cm4gbWF0Y2hlcz8uWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRDb21tZW50cyhpdGVtOiBQYXJzZXIuSXRlbSkge1xuICBjb25zdCBtYXRjaGVzID0gaXRlbS5jb250ZW50U25pcHBldD8ubWF0Y2goLyg/PD1Db21tZW50czpcXHMqKShcXGQrKS9nKTtcbiAgcmV0dXJuIG1hdGNoZXM/LlswXTtcbn1cblxuZnVuY3Rpb24gQWN0aW9ucyhwcm9wczogeyBpdGVtOiBQYXJzZXIuSXRlbSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFjdGlvblBhbmVsIHRpdGxlPXtwcm9wcy5pdGVtLnRpdGxlfT5cbiAgICAgIDxBY3Rpb25QYW5lbC5TZWN0aW9uPlxuICAgICAgICB7cHJvcHMuaXRlbS5saW5rICYmIDxBY3Rpb24uT3BlbkluQnJvd3NlciB1cmw9e3Byb3BzLml0ZW0ubGlua30gLz59XG4gICAgICAgIHtwcm9wcy5pdGVtLmd1aWQgJiYgPEFjdGlvbi5PcGVuSW5Ccm93c2VyIHVybD17cHJvcHMuaXRlbS5ndWlkfSB0aXRsZT1cIk9wZW4gQ29tbWVudHMgaW4gQnJvd3NlclwiIC8+fVxuICAgICAgPC9BY3Rpb25QYW5lbC5TZWN0aW9uPlxuICAgICAgPEFjdGlvblBhbmVsLlNlY3Rpb24+XG4gICAgICAgIHtwcm9wcy5pdGVtLmxpbmsgJiYgKFxuICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICBjb250ZW50PXtwcm9wcy5pdGVtLmxpbmt9XG4gICAgICAgICAgICB0aXRsZT1cIkNvcHkgTGlua1wiXG4gICAgICAgICAgICBzaG9ydGN1dD17eyBtb2RpZmllcnM6IFtcImNtZFwiXSwga2V5OiBcIi5cIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0FjdGlvblBhbmVsLlNlY3Rpb24+XG4gICAgPC9BY3Rpb25QYW5lbD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3RvcnlMaXN0SXRlbShwcm9wczogeyBpdGVtOiBQYXJzZXIuSXRlbTsgaW5kZXg6IG51bWJlciB9KSB7XG4gIGNvbnN0IGljb24gPSBnZXRJY29uKHByb3BzLmluZGV4ICsgMSk7XG4gIGNvbnN0IHBvaW50cyA9IGdldFBvaW50cyhwcm9wcy5pdGVtKTtcbiAgY29uc3QgY29tbWVudHMgPSBnZXRDb21tZW50cyhwcm9wcy5pdGVtKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0Lkl0ZW1cbiAgICAgIGljb249e2ljb259XG4gICAgICB0aXRsZT17cHJvcHMuaXRlbS50aXRsZSA/PyBcIk5vIHRpdGxlXCJ9XG4gICAgICBzdWJ0aXRsZT17cHJvcHMuaXRlbS5jcmVhdG9yfVxuICAgICAgYWNjZXNzb3JpZXM9e1t7IHRleHQ6IGBcdUQ4M0RcdURDNEQgJHtwb2ludHN9YCB9LCB7IHRleHQ6IGBcdUQ4M0RcdURDQUMgICR7Y29tbWVudHN9YCB9XX1cbiAgICAgIC8vIFdpcmUgdXAgYWN0aW9uc1xuICAgICAgYWN0aW9ucz17PEFjdGlvbnMgaXRlbT17cHJvcHMuaXRlbX0gLz59XG4gICAgLz5cbiAgKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsd0NBQUFBLFVBQUE7QUFDQSxLQUFDLFdBQVc7QUFDVixNQUFBQSxTQUFRLFdBQVc7QUFBQSxRQUNqQixPQUFPO0FBQUEsVUFDTCxpQkFBaUI7QUFBQSxVQUNqQixNQUFNO0FBQUEsVUFDTixXQUFXO0FBQUEsVUFDWCxlQUFlO0FBQUEsVUFDZixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsVUFDZixhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFDZCxXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxrQkFBa0I7QUFBQSxVQUNsQixVQUFVO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxVQUNqQixtQkFBbUI7QUFBQSxVQUNuQixPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixvQkFBb0I7QUFBQSxVQUNwQixxQkFBcUI7QUFBQSxVQUNyQixtQkFBbUI7QUFBQSxVQUNuQixpQkFBaUI7QUFBQSxVQUNqQixVQUFVO0FBQUEsUUFDWjtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0wsaUJBQWlCO0FBQUEsVUFDakIsTUFBTTtBQUFBLFVBQ04sV0FBVztBQUFBLFVBQ1gsZUFBZTtBQUFBLFVBQ2YsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFVBQ2YsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsV0FBVztBQUFBLFVBQ1gsT0FB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QUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixTQUFTO0FB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UyxRQUFJLFFBQVMsUUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLElBQUssVUFBSSxLQUFNLFVBQUksS0FBTSxnQkFBSyxPQUFRLFFBQUksT0FBUSxRQUFJLE9BQVEsUUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksSUFBSyxVQUFJLEtBQU0sYUFBSyxLQUFNLGFBQUssUUFBUyxRQUFJLFFBQVMsUUFBSSxTQUFVLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksS0FBTSxLQUFJLEtBQU0sS0FBSSxRQUFTLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksVUFBVyxVQUFJLE1BQU8sVUFBSSxLQUFNLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLFVBQVcsVUFBSSxRQUFTLFVBQUksT0FBUSxRQUFJLFNBQVUsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssUUFBUyxVQUFJLElBQUssVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLEtBQUksZUFBZ0IsVUFBSSxRQUFTLFVBQUksVUFBVyxVQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxRQUFTLFVBQUksS0FBTSxLQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLFVBQVcsVUFBSSxPQUFRLFVBQUksVUFBVyxVQUFJLGFBQWMsVUFBSSxXQUFZLFVBQUksU0FBVSxVQUFJLFdBQVksVUFBSSxXQUFZLFVBQUksTUFBTyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFVBQVcsVUFBSSxNQUFPLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxTQUFVLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxZQUFhLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksU0FBVSxVQUFJLEtBQU0sYUFBSyxLQUFNLGFBQUssUUFBUyxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLFVBQVcsVUFBSSxXQUFZLFVBQUksVUFBVyxVQUFJLFNBQVUsVUFBSSxpQkFBa0IsVUFBSSxlQUFnQixVQUFJLFVBQVcsVUFBSSxRQUFTLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxjQUFlLFVBQUksYUFBYyxVQUFJLGVBQWdCLFVBQUksbUJBQW9CLFVBQUksbUJBQW9CLFVBQUksb0JBQXFCLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxLQUFNLFdBQUssU0FBVSxnQkFBSyxNQUFPLFVBQUksTUFBTyxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssS0FBTSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFVBQVcsVUFBSSxTQUFVLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxRQUFTLFFBQUksTUFBTyxhQUFLLE1BQU8sVUFBSSxPQUFRLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksTUFBTyxNQUFLLFVBQVcsVUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksc0JBQXVCLFVBQUksTUFBTyxnQkFBSyxPQUFRLFVBQUksT0FBUSxVQUFJLFNBQVUsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxPQUFRLFFBQUksU0FBVSxRQUFJLFNBQVUsVUFBSSxNQUFPLFFBQUksV0FBWSxRQUFJLFdBQVksUUFBSSxLQUFNLGFBQUssS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLFdBQVksVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxRQUFTLFVBQUksaUJBQWtCLFVBQUksa0JBQW1CLFVBQUksWUFBYSxVQUFJLGFBQWMsVUFBSSxhQUFjLFVBQUksV0FBWSxVQUFJLFVBQVcsUUFBSSxVQUFXLFVBQUksYUFBYyxVQUFJLFlBQWEsVUFBSSxhQUFjLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxTQUFVLFVBQUksMEJBQTJCLFVBQUksdUJBQXdCLFVBQUksaUJBQWtCLFVBQUksT0FBUSxVQUFJLFVBQVcsVUFBSSxPQUFRLEtBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLE9BQVEsS0FBSSxRQUFTLEtBQUksTUFBTyxVQUFJLFFBQVMsVUFBSSxZQUFhLFVBQUksV0FBWSxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksV0FBWSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksaUJBQWtCLFVBQUksTUFBTyxhQUFLLE1BQU8sVUFBSSxRQUFTLFVBQUksV0FBWSxVQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksUUFBUyxVQUFJLGlDQUFrQyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssTUFBTyxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFNBQVUsVUFBSSxVQUFXLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE1BQU8sZ0JBQUssUUFBUyxVQUFJLFNBQVUsVUFBSSxhQUFjLFVBQUksYUFBYyxVQUFJLFVBQVcsVUFBSSxZQUFhLFVBQUksUUFBUyxRQUFJLGdCQUFpQixVQUFJLGlCQUFrQixVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxJQUFLLFVBQUksSUFBSyxVQUFJLFVBQVcsVUFBSSxTQUFVLFVBQUksS0FBTSxRQUFJLEtBQU0sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxrQkFBbUIsUUFBSSxnQkFBaUIsVUFBSSx3QkFBeUIsVUFBSSxrQkFBbUIsS0FBSSxrQkFBbUIsVUFBSSxNQUFPLFVBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxhQUFjLFVBQUksT0FBUSxVQUFJLEtBQU0sUUFBSSxlQUFnQixVQUFJLFNBQVUsVUFBSSxPQUFRLFVBQUksS0FBTSxRQUFJLFFBQVMsUUFBSSxlQUFnQixVQUFJLFFBQVMsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxLQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssS0FBTSxRQUFJLEtBQU0sVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLFNBQVUsVUFBSSxXQUFZLFVBQUksZ0JBQWlCLFVBQUksdUJBQXdCLFVBQUksV0FBWSxRQUFJLGlCQUFrQixVQUFJLGlCQUFrQixVQUFJLHNCQUF1QixVQUFJLGVBQWdCLFVBQUkscUJBQXNCLFVBQUksMEJBQTJCLFVBQUksc0JBQXVCLFVBQUksa0JBQW1CLFVBQUksZ0JBQWlCLFVBQUksZUFBZ0IsVUFBSSxtQkFBb0IsVUFBSSxtQkFBb0IsVUFBSSxjQUFlLFVBQUksV0FBWSxVQUFJLFdBQVksVUFBSSxXQUFZLFVBQUksa0JBQW1CLFVBQUksV0FBWSxVQUFJLGdCQUFpQixVQUFJLGlCQUFrQixVQUFJLGtCQUFtQixVQUFJLHFCQUFzQixVQUFJLG1CQUFvQixVQUFJLG1CQUFvQixVQUFJLGdCQUFpQixVQUFJLG9CQUFxQixVQUFJLG9CQUFxQixVQUFJLGlCQUFrQixVQUFJLGNBQWUsVUFBSSxTQUFVLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxNQUFPLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksVUFBVyxVQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxRQUFJLE9BQVEsUUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksT0FBUSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLElBQUssVUFBSSxPQUFRLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxJQUFLLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLElBQUssVUFBSSxTQUFVLFVBQUksVUFBVyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFVBQVcsVUFBSSxrQkFBbUIsVUFBSSxRQUFTLFVBQUksc0JBQXVCLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxNQUFPLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLGFBQUssTUFBTyxhQUFLLE1BQU8sVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxZQUFhLFVBQUksYUFBYyxVQUFJLE9BQVEsVUFBSSxRQUFTLEtBQUksWUFBYSxVQUFJLFFBQVMsVUFBSSxhQUFjLFVBQUksT0FBUSxVQUFJLFNBQVUsVUFBSSxVQUFXLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksS0FBTSxRQUFJLEtBQU0sUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLE1BQU8sVUFBSSxNQUFPLEtBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxhQUFjLFVBQUksY0FBZSxVQUFJLGNBQWUsVUFBSSxlQUFnQixVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLEtBQU0sYUFBSyxLQUFNLGFBQUssT0FBUSxVQUFJLG1CQUFvQixVQUFJLHVCQUF3QixVQUFJLE9BQVEsTUFBSyxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxRQUFTLFVBQUksUUFBUyxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksWUFBYSxVQUFJLFVBQVcsVUFBSSxRQUFTLFFBQUksUUFBUyxVQUFJLFFBQVMsUUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsUUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksSUFBSyxVQUFJLElBQUssVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLFNBQVUsVUFBSSxVQUFXLFVBQUksTUFBTyxnQkFBSyxRQUFTLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxJQUFLLFVBQUksSUFBSyxVQUFJLEtBQU0sVUFBSSxPQUFRLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxLQUFNLFVBQUksSUFBSyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksTUFBTyxVQUFJLFVBQVcsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssT0FBUSxLQUFJLGNBQWUsVUFBSSxrQkFBbUIsVUFBSSxrQkFBbUIsVUFBSSxnQkFBaUIsVUFBSSxhQUFjLFVBQUksbUJBQW9CLFVBQUksY0FBZSxVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxJQUFLLEtBQUksSUFBSyxLQUFJLElBQUssVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFNBQVUsVUFBSSxXQUFZLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxXQUFZLFVBQUksWUFBYSxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksV0FBWSxnQkFBSyxNQUFPLGdCQUFLLE9BQVEsVUFBSSxRQUFTLFVBQUksTUFBTyxRQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFNBQVUsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxLQUFNLEtBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFdBQVksVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLEtBQU0sYUFBSyxLQUFNLFVBQUksY0FBZSxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxlQUFnQixVQUFJLGdCQUFpQixVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksUUFBUyxVQUFJLGdCQUFpQixVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksY0FBZSxVQUFJLFdBQVksVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksSUFBSyxVQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxPQUFRLFFBQUksS0FBTSxVQUFJLEtBQU0sYUFBSyxLQUFNLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxJQUFLLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksWUFBYSxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksT0FBUSxVQUFJLElBQUssVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksSUFBSyxVQUFJLE9BQVEsVUFBSSxVQUFXLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLGNBQWUsVUFBSSxVQUFXLFVBQUksU0FBVSxVQUFJLGdCQUFpQixVQUFJLGdCQUFpQixVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLGFBQUssTUFBTyxhQUFLLE1BQU8sVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLFFBQVMsUUFBSSxNQUFPLGFBQUssTUFBTyxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLElBQUssVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksTUFBTyxRQUFJLE1BQU8sUUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxPQUFRLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxNQUFPLGFBQUssTUFBTyxhQUFLLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJ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SSxPQUFRLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxRQUFTLFVBQUksU0FBVSxVQUFJLFFBQVMsVUFBSSxRQUFTLEtBQUksZ0JBQWlCLFVBQUksaUJBQWtCLFVBQUksS0FBTSxVQUFJLFNBQVUsVUFBSSxNQUFPLFVBQUksTUFBTyxLQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksS0FBTSxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksTUFBTyxhQUFLLE1BQU8sVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sS0FBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxJQUFLLEtBQUksSUFBSyxLQUFJLElBQUssVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxVQUFXLFVBQUksU0FBVSxVQUFJLFdBQVksZ0JBQUssTUFBTyxnQkFBSyxNQUFPLFFBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxRQUFTLFVBQUksWUFBYSxVQUFJLFlBQWEsVUFBSSxVQUFXLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksZUFBZ0IsVUFBSSxhQUFjLFVBQUksV0FBWSxVQUFJLEtBQU0sYUFBSyxLQUFNLGFBQUssS0FBTSxVQUFJLE9BQVEsUUFBSSxRQUFTLEtBQUksUUFBUyxVQUFJLEtBQU0sVUFBSSxRQUFTLFFBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksU0FBVSxVQUFJLFdBQVksVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxJ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QVEsZ0JBQUssU0FBVSxVQUFJLEtBQU0sVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLFNBQVUsZ0JBQUssTUFBTyxnQkFBSyxRQUFTLGdCQUFLLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxnQkFBSyxhQUFjLFVBQUksYUFBYyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksS0FBTSxVQUFJLFFBQVMsVUFBSSxNQUFPLGdCQUFLLE1BQU8sYUFBSyxNQUFPLGFBQUssV0FBWSxVQUFJLGdCQUFpQixVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxNQUFPLFVBQUksT0FBUSxnQkFBSyxPQUFRLFVBQUksU0FBVSxnQkFBSyxXQUFZLFVBQUksWUFBYSxnQkFBSyxPQUFRLFVBQUksU0FBVSxnQkFBSyxNQUFPLFVBQUksT0FBUSxnQkFBSyxPQUFRLFVBQUksU0FBVSxnQkFBSyxXQUFZLFVBQUksWUFBYSxnQkFBSyxNQUFPLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxNQUFPLFVBQUksZUFBZ0IsVUFBSSxpQkFBa0IsVUFBSSxnQkFBaUIsVUFBSSxrQkFBbUIsVUFBSSxJQUFLLFVBQUksSUFBSyxVQUFJLEtBQU0sS0FBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE1BQU8sZ0JBQUssUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLE1BQU8sZ0JBQUssTUFBTyxXQUFLLFFBQVMsVUFBSSxTQUFVLFVBQUksUUFBUyxVQUFJLE1BQU8sZ0JBQUssTUFBTyxXQUFLLFNBQVUsZ0JBQUssUUFBUyxVQUFJLFNBQVUsZ0JBQUssT0FBUSxnQkFBSyxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksUUFBUyxVQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksTUFBTyxVQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksTUFBTyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksT0FBUSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxNQUFPLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxLQUFNLFVBQUksT0FBUSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksT0FBUSxVQUFJLEtBQU0sVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssTUFBTyxVQUFJLHNCQUF1QixVQUFJLGdCQUFpQixVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLElBQUssVUFBSSxJQUFLLFVBQUksS0FBTSxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksTUFBTyxRQUFJLE1BQU8sUUFBSSxRQUFTLFVBQUksTUFBTyxVQUFJLFNBQVUsVUFBSSxLQUFNLFVBQUksSUFBSyxVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxNQUFPLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxVQUFXLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksV0FBWSxVQUFJLGFBQWMsVUFBSSxpQkFBa0IsVUFBSSxNQUFPLFFBQUksVUFBVyxVQUFJLEtBQU0sVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE1BQU8sVUFBSSxVQUFXLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxRQUFTLEtBQUksUUFBUyxLQUFJLFFBQVMsVUFBSSxNQUFPLFVBQUksU0FBVSxVQUFJLEtBQU0sYUFBSyxLQUFNLGFBQUssS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxJQUFLLFVBQUksSUFBSyxVQUFJLFdBQVksVUFBSSxLQUFNLFVBQUksUUFBUyxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksVUFBVyxVQUFJLE9BQVEsVUFBSSxTQUFVLFVBQUksTUFBTyxLQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLFdBQVksUUFBSSxRQUFTLFFBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxJQUFLLFFBQUksZUFBZ0IsVUFBSSxVQUFXLFVBQUksTUFBTyxhQUFLLE1BQU8sVUFBSSxPQUFRLFFBQUksTUFBTyxVQUFJLElBQUssVUFBSSxJQUFLLFVBQUksT0FBUSxVQUFJLFlBQWEsVUFBSSxNQUFPLFVBQUksYUFBYyxVQUFJLFVBQVcsVUFBSSxlQUFnQixVQUFJLG9CQUFxQixVQUFJLGVBQWdCLFVBQUksUUFBUyxVQUFJLGFBQWMsVUFBSSxVQUFXLFVBQUksVUFBVyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksVUFBVyxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksTUFBTyxVQUFJLGNBQWUsVUFBSSxZQUFhLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxRQUFTLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxLQUFNLFVBQUksS0FBTSxVQUFJLFFBQVMsVUFBSSxLQUFNLGFBQUssS0FBTSxhQUFLLE1BQU8sVUFBSSxNQUFPLGFBQUssTUFBTyxVQUFJLFFBQVMsVUFBSSxNQUFPLGFBQUssTUFBTyxhQUFLLGFBQWMsVUFBSSxTQUFVLFVBQUksT0FBUSxLQUFJLFNBQVUsVUFBSSxNQUFPLEtBQUssTUFBTyxLQUFLLE9BQVEsVUFBSSxNQUFPLGdCQUFLLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLFVBQVcsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLE9BQVEsUUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLFNB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LFNBQVUsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFVBQVcsVUFBSSxXQUFZLFVBQUksYUFBYyxVQUFJLFdBQVksVUFBSSxZQUFhLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksWUFBYSxVQUFJLE1BQU8sVUFBSSxhQUFjLFVBQUksVUFBVyxVQUFJLGVBQWdCLFVBQUksb0JBQXFCLFVBQUksZUFBZ0IsVUFBSSxRQUFTLFVBQUksYUFBYyxVQUFJLFVBQVcsVUFBSSxVQUFXLFVBQUksU0FBVSxVQUFJLFVBQVcsVUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLE1BQU8sUUFBSSxLQUFNLFVBQUksS0FBTSxVQUFJLFFBQVMsVUFBSSxTQUFVLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxTQUFVLFVBQUksVUFBVyxVQUFJLGVBQWdCLFVBQUksU0FBVSxVQUFJLFNBQVUsVUFBSSxTQUFVLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksU0FBVSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksVUFBVyxVQUFJLFdBQVksVUFBSSxXQUFZLFVBQUksWUFBYSxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksT0FBUSxVQUFJLFNBQVUsVUFBSSxRQUFTLFVBQUksT0FBUSxRQUFJLEtBQU0sS0FBSyxRQUFTLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksTUFBTyxVQUFJLFFBQVMsVUFBSSxLQUFNLGFBQUssS0FBTSxhQUFLLFFBQVMsVUFBSSxXQUFZLFVBQUksV0FBWSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksVUFBVyxVQUFJLFFBQVMsVUFBSSxhQUFjLFVBQUksVUFBVyxVQUFJLFlBQWEsZ0JBQUssV0FBWSxVQUFJLFFBQVMsVUFBSSxPQUFRLFVBQUksUUFB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QUFLLE9BQVEsVUFBSSxPQUFRLGdCQUFLLE9BQVEsZ0JBQUssTUFBTyxhQUFLLE1BQU8sYUFBSyxPQUFRLFVBQUksT0FBUSxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssUUFBUyxnQkFBSyxRQUFTLGdCQUFLLFFBQVMsZ0JBQUssUUFBUyxnQkFBSyxRQUFTLFVBQUksU0FBVSxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxLQUFNLGFBQUssS0FBTSxhQUFLLE1BQU8sYUFBSyxNQUFPLGFBQUssSUFBSyxVQUFJLElBQUssVUFBSSxRQUFTLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxNQUFPLFVBQUksT0FBUSxVQUFJLE1BQU8sVUFBSSxPQUFRLFVBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxPQUFRLFVBQUksT0FBUSxVQUFJLElBQUssVUFBSSxJQUFLLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxNQUFPLGFBQUssTUFBTyxhQUFLLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE9BQVEsVUFBSSxNQUFPLGFBQUssTUFBTyxhQUFLLFFBQVMsVUFBSSxRQUFTLFVBQUksT0FBUSxVQUFJLE1BQU8sVUFBSSxRQUFTLFVBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxNQUFPLFVBQUksTUFBTyxVQUFJLE9BQVEsVUFBSSxPQUFRLFVBQUksS0FBTSxVQUFJLEtBQU0sVUFBSSxLQUFNLFFBQUksS0FBTSxhQUFLLEtBQU0sYUFBSyxNQUFPLFVBQUksTUFBTyxVQUFJLE1BQU8sYUFBSyxNQUFPLGFBQUssTUFBTyxhQUFLLE1BQU8sYUFBSyxNQUFPLFVBQUksTUFBTyxVQUFJLE1BQU8sUUFBSSxNQUFPLFVBQUksUUFBUyxVQUFJLFFBQVMsVUFBSSxRQUFTLFVBQUksUUFBUyxVQUFJLEtBQU0sVUFBSSxLQUFNLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxRQUFTLFVBQUksZ0JBQWlCLFVBQUksTUFBTyxVQUFJLE1BQU8sVUFBSSxLQUFNLGFBQUssS0FBTSxVQUFJLE1BQU8sVUFBSSxNQUFPLFVBQUksU0FBVSxVQUFJLE1BQU8sYUFBSyxNQUFPLFVBQUksTUFBTyxhQUFLLE1BQU8sYUFBSyxLQUFNLFVBQUksTUFBTyxTQUFHO0FBQUE7QUFBQTs7O0FDQXQ3NEI7QUFBQSwrQ0FBQUMsVUFBQUMsU0FBQTtBQUFBLElBQUFBLFFBQUEsWUFBQyxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksT0FBUSxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxLQUFNLEtBQUksS0FBTSxLQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLE1BQU8sUUFBSSxRQUFTLFFBQUksS0FBTSxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxLQUFNLFFBQUksS0FBTSxRQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksSUFBSyxLQUFJLElBQUssS0FBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksT0FBUSxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksT0FBUSxRQUFJLElBQUssS0FBSSxJQUFLLEtBQUksTUFBTyxRQUFJLE9BQVEsUUFBSSxRQUFTLFFBQUksTUFBTyxRQUFJLEtBQU0sUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksT0FBUSxRQUFJLE9BQVEsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLFFBQVMsUUFBSSxPQUFRLFFBQUksTUFBTyxLQUFLLE1BQU8sS0FBSyxPQUFRLFFBQUksS0FBTSxRQUFJLEtBQU0sUUFBSSxNQUFPLFFBQUksS0FBTSxRQUFJLE1BQU8sUUFBSSxNQUFPLFFBQUksTUFBTyxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksT0FBUSxRQUFJLE9BQVEsUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLE9BQVEsUUFBSSxPQUFRLFFBQUksUUFBUyxRQUFJLFFBQVMsUUFBSSxLQUFNLFFBQUksTUFBTyxRQUFJLE1BQU8sUUFBSSxRQUFTLFFBQUksUUFBUyxRQUFJLEtBQU0sUUFBSSxNQUFPLE9BQUc7QUFBQTtBQUFBOzs7QUNBeHVDO0FBQUEsNENBQUFDLFVBQUFDLFNBQUE7QUFBQSxJQUFBQSxRQUFBLFlBQUMsS0FBTSxLQUFJLE1BQU8sS0FBSSxJQUFLLEtBQUksSUFBSyxLQUFJLE1BQU8sSUFBSTtBQUFBO0FBQUE7OztBQ0FuRDtBQUFBLCtDQUFBQyxVQUFBQyxTQUFBO0FBQUEsSUFBQUEsUUFBQSxZQUFDLEtBQUksT0FBTSxPQUFNLE1BQUssT0FBTSxNQUFLLE9BQU0sS0FBSSxPQUFNLE1BQUssT0FBTSxNQUFLLE9BQU0sTUFBSyxPQUFNLE1BQUssT0FBTSxLQUFJLE9BQU0sTUFBSyxPQUFNLEtBQUksT0FBTSxNQUFLLE9BQU0sS0FBSSxPQUFNLEtBQUksT0FBTSxNQUFLLE9BQU0sTUFBSyxPQUFNLE1BQUssT0FBTSxNQUFLLE9BQU0sTUFBSyxPQUFNLE1BQUssT0FBTSxNQUFLLE9BQU0sS0FBSSxPQUFNLE1BQUssT0FBTSxLQUFJLE9BQU0sTUFBSyxPQUFNLEtBQUksT0FBTSxLQUFJLE9BQU0sSUFBRztBQUFBO0FBQUE7OztBQ0F6UztBQUFBLGtEQUFBQyxVQUFBO0FBQUE7QUFDQSxRQUFJLGtCQUFtQkEsWUFBUUEsU0FBSyxtQkFBb0IsU0FB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QUFZLFNBQVosRUFDRTtBQUFBLFlBQU0sS0FBSyxRQUFRLDRDQUFDLGtCQUFPLGVBQVAsRUFBcUIsS0FBSyxNQUFNLEtBQUssTUFBTTtBQUFBLE1BQy9ELE1BQU0sS0FBSyxRQUFRLDRDQUFDLGtCQUFPLGVBQVAsRUFBcUIsS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFNLDRCQUEyQjtBQUFBLE9BQ25HO0FBQUEsSUFDQSw0Q0FBQyx1QkFBWSxTQUFaLEVBQ0UsZ0JBQU0sS0FBSyxRQUNWO0FBQUEsTUFBQyxrQkFBTztBQUFBLE1BQVA7QUFBQSxRQUNDLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDcEIsT0FBTTtBQUFBLFFBQ04sVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJO0FBQUE7QUFBQSxJQUMzQyxHQUVKO0FBQUEsS0FDRjtBQUVKO0FBRUEsU0FBUyxjQUFjLE9BQTZDO0FBQ2xFLFFBQU0sT0FBTyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLFFBQU0sU0FBUyxVQUFVLE1BQU0sSUFBSTtBQUNuQyxRQUFNLFdBQVcsWUFBWSxNQUFNLElBQUk7QUFFdkMsU0FDRTtBQUFBLElBQUMsZ0JBQUs7QUFBQSxJQUFMO0FBQUEsTUFDQztBQUFBLE1BQ0EsT0FBTyxNQUFNLEtBQUssU0FBUztBQUFBLE1BQzNCLFVBQVUsTUFBTSxLQUFLO0FBQUEsTUFDckIsYUFBYSxDQUFDLEVBQUUsTUFBTSxhQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsTUFBTSxjQUFPLFFBQVEsR0FBRyxDQUFDO0FBQUEsTUFFbkUsU0FBUyw0Q0FBQyxXQUFRLE1BQU0sTUFBTSxNQUFNO0FBQUE7QUFBQSxFQUN0QztBQUVKOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERPTUltcGxlbWVudGF0aW9uIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERPTUVycm9ySGFuZGxlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxET01TdHJpbmdMaXN0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERPTUNvbmZpZ3VyYXRpb24iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MQXR0cmlidXRlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTE5hbWVkTm9kZU1hcCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxFbGVtZW50IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTENoYXJhY3RlckRhdGEiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MQ0RhdGEiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MQ29tbWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxEZWNsYXJhdGlvbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxEVERBdHRMaXN0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERUREVudGl0eSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxEVERFbGVtZW50IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERURE5vdGF0aW9uIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTERvY1R5cGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MUmF3IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTFRleHQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MUHJvY2Vzc2luZ0luc3RydWN0aW9uIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTER1bW15IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTE5vZGVMaXN0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlhNTE5vZGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MU3RyaW5naWZpZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MV3JpdGVyQmFzZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxTdHJpbmdXcml0ZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MRG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiWE1MRG9jdW1lbnRDQiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJYTUxTdHJlYW1Xcml0ZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgInBhcnNlciIsICJzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgInByb2Nlc3NvcnMiLCAiUGFyc2VyIiwgImVyciIsICJwYXJzZXIiLCAiZXhwb3J0cyIsICJwYXJzZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJyZXF1aXJlX2RlY29kZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAicmVxdWlyZV9saWIiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJyZXF1aXJlX3BhcnNlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJQYXJzZXIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiUGFyc2VyIl0KfQo=
