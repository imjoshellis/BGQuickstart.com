module TheHeader = {
  @react.component
  let make = () => {
    <>
      <h1 className="text-4xl font-bold text-gray-200"> {React.string("BG QuickStart")} </h1>
      <h2 className="mb-6 text-sm text-gray-500">
        {React.string("Built by ")}
        <a
          className="text-gray-500 underline transition duration-500 ease-out hover:text-gray-300"
          href="https://github.com/imjoshellis"
          target="_blank"
          rel="noopener noreferrer">
          {React.string("@imjoshellis")}
        </a>
      </h2>
    </>
  }
}

module Page = {
  let initial = Motion.Style.make(~opacity=0.0, ~y=-10, ~scale=0.9, ())
  let animate = Motion.Style.make(~opacity=1.0, ~y=0, ~scale=1.0, ())
  let exit = Motion.Style.make(~opacity=0.0, ~y=10, ~scale=0.9, ())
  let transition = Motion.Style.make(~duration=0.1, ~ease="easeOut", ())

  module Spinner = {
    module Button = {
      @react.component
      let make = (~onClick, ~className, ~icon, ~label) => {
        <Motion.Div
          initial={Motion.Style.make(~opacity=0.0, ~y=-5, ())}
          animate={Motion.Style.make(~opacity=1.0, ~y=0, ())}
          transition={Motion.Style.make(~delay=0.25, ())}>
          <div
            onClick={_ => onClick()}
            className={[
              "flex flex-row justify-around items-center p-3 px-4 rounded font-bold cursor-pointer shadow-lg transform active:scale-95 hover:scale-105 transition",
              className,
            ]->Js.Array2.joinWith(" ")}>
            {icon} {React.string(Js.String2.toUpperCase(label))}
          </div>
        </Motion.Div>
      }
    }

    module StartPlayerArrow = {
      @react.component
      let make = (~angle, ~onClick) => {
        <Motion.Div
          initial={Motion.Style.make(~rotate=angle.Model.prev, ())}
          animate={Motion.Style.make(~rotate=angle.Model.next, ())}
          transition={Motion.Style.make(~duration=0.25, ())}
          onClick
          className="flex flex-col items-center justify-center text-gray-500 bg-gray-800 border-2 border-gray-700 border-solid rounded-full cursor-pointer start h-12 w-12 hover:bg-gray-700 transition">
          <div className="flex flex-col items-center justify-center w-2/3 startIcon">
            <Icon.Arrow width="32" height="32" />
          </div>
        </Motion.Div>
      }
    }

    module PlayerSeat = {
      @react.component
      let make = (~rotateString, ~seatNumber, ~player) => {
        <div style={ReactDOM.Style.make(~transform=rotateString, ())} className="m-auto dotBox">
          <Motion.Div className="w-8 h-8 bg-gray-800 rounded-full dotItem dot" />
          {seatNumber == player
            ? <Motion.Div
                initial={Motion.Style.make(~opacity=0.0, ())}
                animate={Motion.Style.make(~opacity=1.0, ())}
                transition={Motion.Style.make(~delay=0.125, ~duration=0.25, ~ease="easeIn", ())}
                className="w-8 h-8 bg-gray-400 rounded-full dotItem dot"
              />
            : <> </>}
        </div>
      }
    }

    module PlayerSeats = {
      @react.component
      let make = (~count, ~player) => {
        <>
          {Array.range(1, count)
          ->Array.map(seatNumber => {
            let angle = Int.toString(360 / count * seatNumber + 225) ++ "deg"
            let rotateString = `rotate(${angle})`

            <PlayerSeat
              key={`player-seat-${Int.toString(seatNumber)}`} seatNumber rotateString player
            />
          })
          ->React.array}
        </>
      }
    }

    @react.component
    let make = (~count, ~player, ~angle) => {
      let dispatch = Model.Dispatch.use()
      let reroll = () => dispatch(Model.Roll({count: count}))
      let reset = () => dispatch(Model.Reset)

      <Motion.Div initial animate exit transition key="spinner">
        <div className="dotWrap">
          <PlayerSeats count player />
          <div className="m-auto startBox"> <StartPlayerArrow onClick={reroll} angle /> </div>
        </div>
        <p className="text-sm font-bold text-gray-400"> {React.string("(YOU)")} </p>
        <div className="grid grid-cols-2 gap-4 mt-12">
          <Button
            onClick={reset}
            className="text-red-900 bg-red-300 hover:bg-red-200"
            icon={<Icon.Arrow height="24" width="24" />}
            label="reset"
          />
          <Button
            onClick={reroll}
            className="text-green-900 bg-green-400 hover:bg-green-300"
            icon={<Icon.Shuffle height="24" width="24" />}
            label="reroll"
          />
        </div>
      </Motion.Div>
    }
  }

  module Grid = {
    module CountButton = {
      @react.component
      let make = (~num: int) => {
        let dispatch = Model.Dispatch.use()
        <div
          onClick={_ => dispatch(Model.Roll({count: num}))}
          className="px-8 py-8 text-xl font-bold text-gray-900 bg-gray-600 rounded-lg shadow-lg cursor-pointer transform hover:bg-gray-400 hover:scale-105 active:bg-gray-700 active:scale-105 transition">
          {React.int(num)}
        </div>
      }
    }

    @react.component
    let make = () => {
      <Motion.Div initial animate exit transition key="grid">
        <div className="grid grid-cols-3 gap-4">
          {Array.range(2, 10)
          ->Array.map(num => <CountButton key={num->Int.toString} num />)
          ->React.array}
        </div>
      </Motion.Div>
    }
  }
}

module Transition = {
  @react.component
  let make = (~children) =>
    <Motion.Presence exitBeforeEnter=true initial=true> {children} </Motion.Presence>
}

@react.component
let make = () => {
  let state = Model.State.use()
  let page = switch state {
  | {count: Some(count), player: Some(player), angle} => <Page.Spinner count player angle />
  | _ => <Page.Grid />
  }

  <div
    className="flex flex-col items-center justify-center px-4 py-8 text-gray-300 bg-gray-900 App">
    <Transition> <TheHeader /> {page} </Transition>
  </div>
}
