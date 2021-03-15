type rotation = Clockwise | CounterClockwise
type rotate = {next: int, prev: int}
type state = {
  count: option<int>,
  player: option<int>,
  rotation: rotation,
  rotate: rotate,
}

let initialState = {
  count: None,
  player: None,
  rotation: Clockwise,
  rotate: {prev: 0, next: 0},
}

type action =
  | Roll({count: int})
  | Reset

module Rotate = {
  let make = (~count, ~position) => 360 / count * position + 225
}

let reducer = (state: state, action: action) => {
  switch action {
  | Roll({count}) => {
      let rotation = switch state.rotation {
      | Clockwise => CounterClockwise
      | CounterClockwise => Clockwise
      }

      let player = Js.Math.random_int(1, count + 1)
      let currAngle = Rotate.make(~count, ~position=player)

      let nextAngle = switch rotation {
      | Clockwise => 360 * 3 + currAngle
      | CounterClockwise => currAngle
      }

      {
        player: Some(player),
        count: Some(count),
        rotation: rotation,
        rotate: {next: nextAngle, prev: state.rotate.next},
      }
    }
  | Reset => initialState
  }
}

module CtxFunctor = {
  module type Config = {
    type context
    let defaultValue: context
  }

  module Make = (Config: Config) => {
    let t = React.createContext(Config.defaultValue)

    module Provider = {
      let make = React.Context.provider(t)

      @obj
      external makeProps: (
        ~value: Config.context,
        ~children: React.element,
        ~key: string=?,
        unit,
      ) => {"value": Config.context, "children": React.element} = ""
    }

    let use = () => React.useContext(t)
  }
}

module State = {
  include CtxFunctor.Make({
    type context = state
    let defaultValue = initialState
  })
}

module Dispatch = {
  include CtxFunctor.Make({
    type context = action => unit
    let defaultValue = _ => ()
  })
}

@react.component
let make = (~children) => {
  let (state, dispatch) = React.useReducer(reducer, initialState)
  <Dispatch.Provider value={dispatch}>
    <State.Provider value={state}> {children} </State.Provider>
  </Dispatch.Provider>
}
