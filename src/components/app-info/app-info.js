import "./app-info.css"

const AppInfo = ({employers, increased}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників</h1>
            <h2>Загальна кількість співробітників: {employers}</h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}

export default AppInfo;