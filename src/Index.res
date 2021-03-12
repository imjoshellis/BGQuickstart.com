@module("./serviceWorker") external registerServiceWorker: 'x = "register"

let rootQuery = ReactDOM.querySelector("#root")

switch rootQuery {
| Some(root) => ReactDOM.render(<App />, root)
| None => ()
}

registerServiceWorker()
