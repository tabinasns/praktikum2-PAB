// class component
class Counter extends React.Component {
    constructor(props) {
        super(props);

        // state declaration
        this.state = { counter: 0 };

        console.log("Ini dari constructor()");
    }

    // arrow function
    handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        // change state value
        this.setState({ counter: this.state.counter + val })
    }

    render() {
        console.log("Ini dari render()");
        return (
            <div>
                <h1> {this.state.counter} </h1>
                <button val="+1" onClick={this.handleButtonClick} >Counter + 1</button>
                <button val="-1" onClick={this.handleButtonClick} >Counter - 1</button>
            </div>
        )
    }

    componentDidMount = () => {
        console.log("Ini dari componentDidMount()");
    }

    componentDidUpdate = () => {
        console.log("Ini dari componentDidUpdate()");
    }
    
    componentWillUnmount = () => {
        console.log("Ini dari componentWillUnmount()");
    }
}

// class component
class MyApp extends React.Component {
    constructor(props) {
        super(props);

        // state declaration
        this.state = { showCounter: false };
    }

    // arrow function
    handleButtonClick = () => {
        // change state value
        this.setState({
            showCounter: !this.state.showCounter
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>
                    {this.state.showCounter ? "Hide counter" : "Show counter"}
                </button>
                {this.state.showCounter && <Counter />}
            </div>
        )
    }
}

const myElement = <MyApp />;
ReactDOM.createRoot(document.getElementById('root')).render(myElement);