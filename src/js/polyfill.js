/*
  * Use this for Custom Apps or Projects where we need to emit CustomEvents
*/

/***
* Polyfill from:
* https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
* @private
*/
function customEvent(){
  (function(){

    if(typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params){
      params  = params || {
        bubbles    : false,
        cancelable : false,
        detail     : undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent    = CustomEvent;
  })();
}

/***
* Polyfill from:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
* @private
*/
function objectAssign(){
  if(typeof Object.assign != 'function'){
    Object.assign = function(target){
      'use strict';
      if(target == null){
        throw new TypeError('Cannot convert undefined or null to object');
      }
      target = Object(target);
      for(var index = 1; index < arguments.length; index++){
        var source = arguments[index];
        if(source != null){
          for(var key in source){
            if(Object.prototype.hasOwnProperty.call(source, key)){
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }
}

export default function(){
  objectAssign();
  customEvent();
}
