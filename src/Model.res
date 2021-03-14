type rotation = Clockwise | CounterClockwise
type state = {
  count: option<int>,
  player: option<int>,
  rotation: rotation,
  prevAngle: int,
  angle: int,
}

let initialState: state = {
  count: None,
  player: None,
  rotation: Clockwise,
  prevAngle: 0,
  angle: 0,
}

type action =
  | Roll({count: int})
  | Reset

let reducer = (state: state, action: action) => {
  switch action {
  | Roll({count}) => {
      let choose = count => Js.Math.floor_int(Js.Math.random() *. Int.toFloat(count)) + 1

      let rotation = switch state.rotation {
      | Clockwise => CounterClockwise
      | CounterClockwise => Clockwise
      }

      let player = choose(count)
      let nextAngle = 360 / count * player + 225

      let angle = switch rotation {
      | Clockwise => 360 * 3 + nextAngle
      | CounterClockwise => nextAngle
      }

      {
        player: Some(player),
        count: Some(count),
        rotation: rotation,
        angle: angle,
        prevAngle: state.angle,
      }
    }
  | Reset => {
      player: None,
      count: None,
      rotation: Clockwise,
      angle: 0,
      prevAngle: 0,
    }
  }
}

module State = {
  let ctx = React.createContext(initialState)

  module Provider = {
    let provider = React.Context.provider(ctx)

    @react.component
    let make = (~children, ~value) => {
      React.createElement(provider, {"children": children, "value": value})
    }
  }
}

module Dispatch = {
  let ctx = React.createContext(_ => ())

  module Provider = {
    let provider = React.Context.provider(ctx)

    @react.component
    let make = (~children, ~value) => {
      React.createElement(provider, {"children": children, "value": value})
    }
  }
}

@react.component
let make = (~children) => {
  let (state, dispatch) = React.useReducer(reducer, initialState)
  <Dispatch.Provider value={dispatch}>
    <State.Provider value={state}> {children} </State.Provider>
  </Dispatch.Provider>
}
