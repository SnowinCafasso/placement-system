import { ViewButton, EditButton } from "./Button";

function Content({ isAdmin, companyName}) {

    return (
        <>
            <div className="content-container">
                <h2 style={{ display: "inline-block" }}>{companyName}</h2>
                <div className='buttonContainer'>
                    {
                        /* Conditional Rendering based on user type */
                        isAdmin ?
                            (<><EditButton /> <ViewButton /> </>) : (<ViewButton />)
                    }
                </div>
            </div>
        </>
    )
}

export default Content;