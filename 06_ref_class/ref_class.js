// class component
class MyApp extends React.Component {
    // constructor method
    constructor() {
        super();
        // state declaration
        this.state = {
            title: "Learn React"
        };
        // ref declaration
        this.foo = "Hei";
        console.log('A: ',this.foo);
    }

    // arrow function
    handleButtonClick = () => {
        console.log('B: ', this.foo);
        this.foo = "Hello" //change variable value
        console.log('C: ', this.foo);

        if (this.state.title === "Learn React") {
            this.setState({ title: "Learn JavaScript" });
        }
        else {
            this.setState({ title: "Learn React" });
        }
    }

    // arrow function
    handleFooClick = () => {
        console.log('Get Foo:', this.foo);
        alert(this.foo);
    }

    render() {
        return (
            <div>
                <h3>Title: {this.state.title}</h3>
                <div>
                    <p><button onClick={this.handleButtonClick}>Change Title</button></p>
                    <p><button onClick={this.handleFooClick}>Get Foo Value</button></p>
                </div>
            </div>
        )
    }
}
const myElement = <MyApp />;
ReactDOM.createRoot(document.getElementById('root')).render(myElement);