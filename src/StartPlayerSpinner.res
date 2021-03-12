module Button = {
  @react.component
  let make = (~handleClick, ~className, ~icon, ~label) => {
    <Animation.Div
      initial={Animation.Style.make(~opacity=0.0, ~y=-5, ())}
      animate={Animation.Style.make(~opacity=1.0, ~y=0, ())}
      transition={Animation.Style.make(~delay=0.25, ())}>
      <Animation.Div
        transition={Animation.Style.make(~duration=0.125, ())}
        whileHover={Animation.Style.make(~scale=1.05, ())}
        whileTap={Animation.Style.make(~scale=0.95, ())}
        onClick={() => handleClick()}
        className={"flex flex-row justify-around items-center p-3 px-4 rounded font-bold cursor-pointer shadow-lg " ++
        className}>
        {icon} {React.string(Js.String2.toUpperCase(label))}
      </Animation.Div>
    </Animation.Div>
  }
}

module ArrowBack = {
  @react.component
  let make = (~height="100%", ~width="100%", ~fill="currentColor") => {
    <svg height width viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill>
        <g>
          <path
            d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"
          />
        </g>
      </g>
    </svg>
  }
}

module Shuffle = {
  @react.component
  let make = (~height="100%", ~width="100%", ~fill="currentColor") => {
    <svg height width viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g fill>
        <g>
          <path
            d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z"
          />
        </g>
      </g>
    </svg>
  }
}

module StartPlayerArrow = {
  @react.component
  let make = (~chooseStartPlayer, ~isRotationClockwise, ~angle) => {
    let adjustedNextRotation = isRotationClockwise ? 360 * 3 + angle["next"] : angle["next"]

    let initial = Animation.Style.make(~width=56, ~height=56, ~rotate=angle["prev"], ())
    let animate = Animation.Style.make(~width=56, ~height=56, ~rotate=adjustedNextRotation, ())
    let transition = Animation.Style.make(~duration=0.125, ())
    let whileHover = Animation.Style.make(~backgroundColor="#5F6163", ())
    let onClick = () => chooseStartPlayer()
    <Animation.Div
      initial
      animate
      transition
      whileHover
      onClick
      className="flex flex-col items-center justify-center text-gray-500 bg-gray-800 border-2 border-gray-700 border-solid rounded-full cursor-pointer start">
      <div className="flex flex-col items-center justify-center w-2/3 startIcon">
        <ArrowBack width="32" height="32" />
      </div>
    </Animation.Div>
  }
}

module PlayerSeat = {
  @react.component
  let make = (~rotateString, ~seatNumber, ~startPlayer) => {
    <div style={ReactDOM.Style.make(~transform=rotateString, ())} className="m-auto dotBox">
      <Animation.Div className="w-8 h-8 bg-gray-800 rounded-full dotItem dot" />
      {seatNumber == startPlayer
        ? <Animation.Div
            initial={Animation.Style.make(~opacity=0.0, ())}
            animate={Animation.Style.make(~opacity=1.0, ())}
            transition={Animation.Style.make(~delay=0.125, ~duration=0.25, ~ease="easeIn", ())}
            className="w-8 h-8 bg-gray-400 rounded-full dotItem dot"
          />
        : <> </>}
    </div>
  }
}

module PlayerSeats = {
  @react.component
  let make = (~count, ~startPlayer) => {
    <>
      {Array.range(1, count)
      ->Array.map(seatNumber => {
        let angle = Int.toString(360 / count * seatNumber + 225) ++ "deg"
        let rotateString = `rotate(${angle})`

        <PlayerSeat
          key={`player-seat-${Int.toString(seatNumber)}`} seatNumber rotateString startPlayer
        />
      })
      ->React.array}
    </>
  }
}

@react.component
let make = (~count, ~setCount) => {
  let (isRotationClockwise, setIsRotationClockwise) = React.useState(() => true)
  let (startPlayer, setStartPlayer) = React.useState(() => 0)
  let (angle, setAngle) = React.useState(() => {"next": 0, "prev": 0})

  let chooseStartPlayer = () => {
    let newStartPlayer = Js.Math.floor_int(Js.Math.random() *. Int.toFloat(count)) + 1

    setStartPlayer(_ => newStartPlayer)
    setIsRotationClockwise(state => !state)

    let next = 360 / count * newStartPlayer + 225
    setAngle(state =>
      {
        "prev": state["next"],
        "next": next,
      }
    )
  }

  React.useEffect1(() => {
    chooseStartPlayer()
    None
  }, [count])

  let reset = () => {
    setCount(_ => 0)
    setStartPlayer(_ => 0)
  }

  <>
    <div className="dotWrap">
      <PlayerSeats startPlayer count />
      <div className="m-auto startBox">
        <StartPlayerArrow chooseStartPlayer isRotationClockwise angle />
      </div>
    </div>
    <p className="text-sm font-bold text-gray-400"> {React.string("(YOU)")} </p>
    <div className="grid grid-cols-2 gap-4 mt-12">
      <Button
        handleClick={reset}
        className="text-red-900 bg-red-300 hover:bg-red-200"
        icon={<ArrowBack height="24" width="24" />}
        label="reset"
      />
      <Button
        handleClick={chooseStartPlayer}
        className="text-green-900 bg-green-400 hover:bg-green-300"
        icon={<Shuffle height="24" width="24" />}
        label="reroll"
      />
    </div>
  </>
}
