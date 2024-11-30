import Content from "./Content.jsx";
import { AddButton } from "./Button.jsx";

function Dashboard({ userType }) {
    const companies = ['Cognizant', 'Accenture','Wipro'];
    //Checks if there are events
    const hasEvents = companies.length > 0;
    //Checks if user is an admin
    let isAdmin = userType === 'admin';


    return (
        <div style={{ margin: "10px" }} className="displayPane">
            {hasEvents ? companies.map((company,index)=>(
                <Content isAdmin={isAdmin} companyName={company} key={index}/>
            ))
                : <h2 style={{ margin: "10px" }}>No Events</h2>}
            {isAdmin && <AddButton />}
        </div>
    );
}

export default Dashboard;
