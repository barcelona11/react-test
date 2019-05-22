import React from "react";
import PropTypes from "prop-types";

class Home extends React.Component {
    state = {}
    constructor(props) {
        super(props);
        this.state.age = this.props.user.age;
        this.state.headerName = "hhhhhhh";
    }

    onAdd = () => {
        this.setState({
            age: this.state.age + 3
        });
        this.props.h();
    }

    changeHeaderName = ()=> {
        this.props.changeHeaderName(this.state.headerName);
    }

    handleChange = (event)=>{
        //console.dir(event.target.value);
        this.setState({
            headerName: event.target.value
        })
    }

    render() {
        let msg = "Hello, World.";
        return (
            <div>
                <div>{this.props.user.name}</div>
                <div>{this.state.age}</div>
                <div>
                    <ul>
                        {this.props.user.items.map((i) => { return (<li key={i}>{i}</li>) })}
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.onAdd}>Add</button>
                <button onClick={this.changeHeaderName}>ChangeHeaderName</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string
}

export default Home;