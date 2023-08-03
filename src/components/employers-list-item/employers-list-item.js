import "./employers-list-item.css"
import {Component} from "react";


class EmployersListItem extends Component {
    constructor(props) {
        super(props);
    }

    onIncrease = (fun, id) => {
        fun(id);
    }

    onRise = (fun, id) => {
        fun(id);
    }

    render() {
        const {id, name, salary, onDelete, updateRise, updateIncrease, rise, increase} = this.props;

        return (
            <li className={`list-group-item d-flex justify-content-between ${increase ? "increase" : ""} ${rise ? "like" : ""}`}>
                <span onClick={() => this.onIncrease(updateIncrease, id)} className="list-group-item-label"  data-toggle='rise'>{name}</span>
                <input type="text" className="list-group-item-input" disabled="disabled" value={salary} defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={() => this.onRise(updateRise, id)} type="button"
                            className="btn-cookie btn-sm "
                            data-toggle="increase">
                        <i  className="fas fa-cookie"></i>
                    </button>

                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployersListItem;