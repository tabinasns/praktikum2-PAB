// class component
class MyApp extends React.Component {
    // Construstor methos
    constructor(props) {
        super(props);
        // state declaration
        this.state = {
            input: ""
        };    
    }

    // arrow function
    handleInputChange = (event) => {
        // change state value
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Judul: {this.state.input}</h1>
                <input type="text" onChange={this.handleInputChange} />
            </div>
        )
    }
}

const myElement = <MyApp />;
ReactDOM.createRoot(document.getElementById('root')).render(myElement);