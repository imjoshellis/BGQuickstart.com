// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Js_math from "bs-platform/lib/es6/js_math.js";
import * as Caml_int32 from "bs-platform/lib/es6/caml_int32.js";

var initialState = {
  count: undefined,
  player: undefined,
  rotation: /* Clockwise */0,
  rotate: {
    next: 0,
    prev: 0
  }
};

function make(count, position) {
  return Math.imul(Caml_int32.div(360, count), position) + 225 | 0;
}

var Rotate = {
  make: make
};

function reducer(state, action) {
  if (!action) {
    return initialState;
  }
  var count = action.count;
  var match = state.rotation;
  var rotation = match ? /* Clockwise */0 : /* CounterClockwise */1;
  var player = Js_math.random_int(1, count + 1 | 0);
  var currAngle = make(count, player);
  var nextAngle = rotation ? currAngle : 1080 + currAngle | 0;
  return {
          count: count,
          player: player,
          rotation: rotation,
          rotate: {
            next: nextAngle,
            prev: state.rotate.next
          }
        };
}

function Make(Config) {
  var t = React.createContext(Config.defaultValue);
  var make = t.Provider;
  var Provider = {
    make: make
  };
  var use = function (param) {
    return React.useContext(t);
  };
  return {
          t: t,
          Provider: Provider,
          use: use
        };
}

var CtxFunctor = {
  Make: Make
};

var t = React.createContext(initialState);

var make$1 = t.Provider;

var Provider = {
  make: make$1
};

function use(param) {
  return React.useContext(t);
}

var State = {
  t: t,
  Provider: Provider,
  use: use
};

function defaultValue(param) {
  
}

var t$1 = React.createContext(defaultValue);

var make$2 = t$1.Provider;

var Provider$1 = {
  make: make$2
};

function use$1(param) {
  return React.useContext(t$1);
}

var Dispatch = {
  t: t$1,
  Provider: Provider$1,
  use: use$1
};

function Model(Props) {
  var children = Props.children;
  var match = React.useReducer(reducer, initialState);
  return React.createElement(make$2, {
              value: match[1],
              children: React.createElement(make$1, {
                    value: match[0],
                    children: children
                  })
            });
}

var make$3 = Model;

export {
  initialState ,
  Rotate ,
  reducer ,
  CtxFunctor ,
  State ,
  Dispatch ,
  make$3 as make,
  
}
/* t Not a pure module */
