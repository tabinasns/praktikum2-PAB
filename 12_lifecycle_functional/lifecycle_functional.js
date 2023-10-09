// functional component
const Counter = () => {
    // state declaration
    const [counter, setCounter] = React.useState(0);

    // Arrow funtion
    const handleButtonClick = (e) => {
        let val = parseInt(e.target.getAttribute("val"));

        // change state value
        setCounter(counter + val);
    }

    // hook
    React.useEffect(() => {
        console.log("Ini seperti componentDidMount()");
        return () => {
            console.log("Ini seperti componentWillUnmount()");
      }
    }, []);
    
    // hook
    React.useEffect(() => {
      console.log("Ini seperti componentDidMount() & componentDidUpdate()");
    });
    
    return (
        <div>
            <h1>{counter}</h1>
            <button val="+1" onClick={handleButtonClick}>Counter + 1</button>
            <button val="-1" onClick={handleButtonClick}>Counter - 1</button>
        </div>
    )
}
// functional component
const MyApp = () => {
    // state declaration
    const [showCounter, setShowCounter] = React.useState(false);

    // array function
    const handleButtonClick = () => {
        // change state value
        setShowCounter(!showCounter);
    }

    return (
        <div>
            <button onClick={handleButtonClick}>
                {showCounter ? "Hide counter" : "Show counter"}
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

const myElement = <MyApp />;

ReactDOM.createRoot(document.getElementById('root')).render(myElement);