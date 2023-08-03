import "./app-info.css"

const AppInfo = ({employers, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting</h1>
            <h2>Total number of employees: {employers}</h2>
            <h2>The prize will be awarded to: {increased}</h2>
        </div>
    )
}

export default AppInfo;