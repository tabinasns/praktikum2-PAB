// class component
class MyApp extends React.Component {
    // constructor method
    constructor(props) {
        super(props);

        // state declaration
        this.state = {
            name: "",
            email: "",
            address: "",
            department: "",
            gender: "",
            scholarship: false
        };
    }

    // arrow function
    handleInputChange = (event) => {
        
        console.log(event.target);

        if (event.target.type === "checkbox") {
            // change state value
            this.setState({ [event.target.name]: event.target.checked })
        }
        else {
            // change state value
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    // arrow function
    handleButtonClick = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render () {
        return (
            <form action="" method="get" className="container">
                
                <div>
                    <label htmlFor="name">Name </label>
                    <input type="text" name="name" id="name" onChange={this.handleInputChange} />
                </div>

                <div>
                    <label htmlFor="email">Email </label>
                    <input type="email" name="email" id="email" onChange={this.handleInputChange} />
                </div>

                <div>
                    <label htmlFor="address">Address </label>
                    <textarea name="address" id="address" onChange={this.handleInputChange} />
                </div>
                
                <div>
                    <label htmlFor="department">Department </label>
                    <select name="department" value={this.state.department} onChange={this.handleInputChange}>
                        <option value="Ilmu Komputer">Ilmu Komputer</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Teknik Komputer">Teknik Komputer</option>
                    </select>
                </div>

                <div>
                    <label>Jenis Kelamin </label>

                    <input
                        type="radio"
                        name="gender"
                        id="gender1"
                        value="Man"
                        checked={this.state.gender === "Man"}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="gender1">Man</label>
                    
                    <input
                        type="radio"
                        name="gender"
                        id="gender2"
                        value="Woman"
                        checked={this.state.gender === "Woman"}
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="gender2">Woman</label>
                </div>

                <div>
                    <label>Scholarship Status </label>
                    <input type="checkbox" id="scholarship" name="scholarship" onChange={this.handleInputChange} />
                    <label htmlFor="scholarship">Get a scholarship</label>
                </div>

                <input type="submit" onClick={this.handleButtonClick} value="Save" />
            </form>
        )
    }
}

const myElement = <MyApp />;
ReactDOM.createRoot(document.getElementById('root')).render(myElement);