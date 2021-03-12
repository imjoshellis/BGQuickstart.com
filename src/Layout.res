module Header = {
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

module ThePage = {
  let initial = Animation.Style.make(~opacity=0.0, ~y=-10, ~scale=0.9, ())
  let animate = Animation.Style.make(~opacity=1.0, ~y=0, ~scale=1.0, ())
  let exit = Animation.Style.make(~opacity=0.0, ~y=10, ~scale=0.9, ())
  let transition = Animation.Style.make(~duration=0.1, ~ease="easeOut", ())

  open Animation

  @react.component
  let make = (~count, ~setCount) => {
    <Presence exitBeforeEnter=true initial=false>
      {switch count {
      | 0 => <Div initial animate exit transition key="grid"> <PlayerCountGrid setCount /> </Div>
      | _ =>
        <Div initial animate exit transition key="spinner">
          <StartPlayerSpinner count setCount />
        </Div>
      }}
    </Presence>
  }
}

module Main = {
  @react.component
  let make = () => {
    let (count, setCount) = React.useState(() => 0)

    <div
      className="flex flex-col items-center justify-center px-4 py-8 text-gray-300 bg-gray-900 App">
      <Header /> <ThePage count setCount />
    </div>
  }
}
