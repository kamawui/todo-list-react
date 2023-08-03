import "./employers-list.css"
import EmployersListItem from "../employers-list-item/employers-list-item";



function EmployersList({data, onDelete, updateRise, updateIncrease}) {
    const elements = data.map((el, i) => {
        const {id, rise, increase, ...elProps} = el;
        return (
            <EmployersListItem key = {id}
                               {...elProps}
                               onDelete={() => onDelete(id)}
                               updateRise={() => updateRise(id)} updateIncrease={() => updateIncrease(id)}
                               rise={rise} increase={increase}
            />
        );
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;