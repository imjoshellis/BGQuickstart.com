%%raw(`
import './css/styles.css'
import './css/tailwind.css'
`)

@module("framer-motion") external motion: {"div": React.element} = "motion"

@react.component
let make = () => {
  <Model> <Layout.Main /> </Model>
}
