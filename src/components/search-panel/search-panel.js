import "./search-panel.css"
import {Component} from "react";

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onValueChange = (e) => {
        const term = e.target.value;
        this.props.onSearch(e.target.value);
        this.setState({term});
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Знайти співробітника"
                    onChange={this.onValueChange}
                    value={this.state.term}/>
            </div>
        )
    }
}

export default SearchPanel;