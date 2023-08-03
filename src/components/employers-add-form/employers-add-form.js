import './employers-add-form.css';
import {Component} from "react";

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: +""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);

        this.setState({
            name: "",
            salary: +""
        })

        this.clearForm("#form");
    }

    clearForm = (id) => {
        let form = document.querySelector(id);
        form.reset();
    }

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Додати нового працівника</h3>
                <form
                    id="form"
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="What is his name?"
                           onChange={this.onValueChange}
                           name="name"/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Salary in $?"
                           onChange={this.onValueChange}
                           name="salary"/>
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }

}

export default EmployersAddForm;