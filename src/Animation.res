module Style = {
  type t

  @obj
  external make: (
    ~backgroundColor: string=?,
    ~delay: float=?,
    ~duration: float=?,
    ~ease: string=?,
    ~opacity: float=?,
    ~scale: float=?,
    ~width: int=?,
    ~rotate: int=?,
    ~height: int=?,
    ~y: int=?,
    unit,
  ) => t = ""
}

module Presence = {
  @react.component @module("framer-motion")
  external make: (
    ~initial: bool=?,
    ~onExitComplete: unit => unit=?,
    ~exitBeforeEnter: bool=?,
    ~children: React.element,
  ) => React.element = "AnimatePresence"
}

module Div = {
  @react.component @module("framer-motion") @scope("motion")
  external make: (
    ~children: React.element=?,
    ~exit: Style.t=?,
    ~initial: Style.t=?,
    ~animate: Style.t=?,
    ~whileHover: Style.t=?,
    ~whileTap: Style.t=?,
    ~transition: Style.t=?,
    ~onClick: unit => unit=?,
    ~className: string=?,
  ) => React.element = "div"
}
