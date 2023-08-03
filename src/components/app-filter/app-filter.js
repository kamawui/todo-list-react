import "./app-filter.css"
import {Component} from "react";

function AppFilter(props){
    const buttons = [
        {title:'All employees', tag:''},
        {title:'For promotion', tag:'rise'},
        {title:'Salary more than 1000', tag:'moreThan1000'},
    ];
    const elements = buttons.map((el)=>{
        const active = props.filter === el.tag;
        const classes = active ? "btn-light" : "btn-outline-light"
        return(
            <button className={`btn ${classes}`} onClick={() => props.onFilter(el.tag)}
                    key={el.tag} name={el.tag}>{el.title}</button>
        )
    })

    return (
        <div className="btn-group">
            {elements}
        </div>
    )
}

export default AppFilter;