import {Component} from "react";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    name: "John",
                    salary: 1200,
                    increase: true,
                    rise: true,
                    id: 1
                },
                {
                    name: "Jack",
                    salary: 900,
                    increase: false,
                    rise: false,
                    id: 2
                },
                {
                    name: "Alex",
                    salary: 1100,
                    increase: false,
                    rise: false,
                    id: 3
                }
            ],
            term: "",
            filter: ""
        }
        this.maxId = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const newArr = data.filter(obj => obj.id !== id);
            return {
                data : newArr
            }
        })
    }

    addItem = (name, salary) => {
        if (name && salary) {
            if (this.checkingItemForAdd(name, salary)) {
                this.maxId++;
                const newItem = {
                    name,
                    salary,
                    increase: false,
                    rise: false,
                    id: this.maxId
                }
                this.setState(({data}) => {
                    const newArr = [...data, newItem];
                    return {
                        data: newArr,
                    }
                })
            }
        } else {
            alert("Error")
        }
    }

    checkingItemForAdd = (name, salary) => {
        if (salary < 0) {
            alert("Salary can be negative");
            return false;
        }
        for (let i = 0; i < this.state.data; i++) {
            if (name == this.state.data[i].name && salary == this.state.data[i].salary) {
                alert("Such employer is already exist");
                return false;
            }
        }

        return true;
    }

    dynamicUpdateOfRise = (id) => {
        this.setState(({data}) => {
            const newArr = [...data];
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i].id == id) {
                    newArr[i].rise = !newArr[i].rise;
                }
            }
            return {
                data: newArr,
            }
        });
    }

    dynamicUpdateOfIncrease = (id) => {
        this.setState(({data}) => {
            const newArr = [...data];
            for (let i = 0; i < newArr.length; i++) {
                if (data[i].id == id) {
                    newArr[i].increase = !newArr[i].increase;
                }
            }

            return {
                data: newArr,
            }
        });
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter(obj => obj.rise);
            case "moreThan1000":
                return items.filter(obj => obj.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employers = data.length;
        const increased = data.filter(obj => obj.increase).length;
        const visibleData = this.searchEmployee(this.filterPost(data, filter), term);

        return (
            <div className="app">
                <AppInfo employers={employers} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilterSelect}/>
                </div>

                <EmployersList data={visibleData}
                               onDelete={this.deleteItem}
                               updateRise={this.dynamicUpdateOfRise} updateIncrease={this.dynamicUpdateOfIncrease}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;