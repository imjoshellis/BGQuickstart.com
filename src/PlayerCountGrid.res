open Belt

module CountButton = {
  @react.component
  let make = (~num: int, ~setCount) => {
    let whileHover = Animation.Style.make(~scale=1.05, ~backgroundColor="#CCD5E1", ())
    let whileTap = Animation.Style.make(~scale=1.05, ~backgroundColor="#EDF2F7", ())
    let onClick = () => setCount(_ => num)

    <Animation.Div
      whileHover
      whileTap
      onClick
      className="px-8 py-8 text-xl font-bold text-gray-900 bg-gray-600 rounded-lg shadow-lg cursor-pointer">
      {React.int(num)}
    </Animation.Div>
  }
}

@react.component
let make = (~setCount) => {
  <>
    <div className="grid grid-cols-3 gap-4">
      {Array.range(2, 10)
      ->Array.map(n => <CountButton setCount key={Int.toString(n)} num={n} />)
      ->React.array}
    </div>
  </>
}
