import { useContext } from "react"
import Data from "../Contexts/Data"

export default function List() {
    const { applications, setApplications } = useContext(Data);
    const changeStatus = (e, timestamp) => {
        const name = e.target.name;
        console.log(timestamp);
        const singleApplication = applications.find(appl => appl.timestamp === timestamp);
        singleApplication[name] = !singleApplication[name];
        let filteredApplications = applications.filter((appl) => appl.timestamp !== timestamp);
        filteredApplications = ([...filteredApplications, { ...singleApplication }]);
        filteredApplications = filteredApplications.sort((a, b) => a.timestamp - b.timestamp);
        setApplications(filteredApplications);


        // application[name]

        console.log(filteredApplications);

    }

    return (
        <section className="applications-list">
            <h2>List:</h2>
            <div className="list-container">
                <ul>
                    <li>
                        <strong><div>Date:</div></strong>
                        <strong><div>Company:</div></strong>
                        <strong><div>Role:</div></strong>
                        <strong><div>Comment:</div></strong>
                        <strong><div>Response:</div></strong>
                        <strong><div>Interview: </div></strong>
                        <strong><div>Rejection: </div></strong>
                    </li>
                    {
                        applications.length > 0 &&
                        applications.map(application => (
                            <li key={application.timestamp}>
                                <div>{application.date}</div>
                                <div>{application.company}</div>
                                <div>{application.role}</div>
                                <div>{application.comment}</div>
                                <div>{!application.response ? 'no' : 'yes'} <button name="response" onClick={e => changeStatus(e, application.timestamp)}>{application.response ? 'no' : 'yes'}</button></div>
                                <div>{!application.interview ? 'no' : 'yes'} <button name="interview" onClick={e => changeStatus(e, application.timestamp)}>{application.interview ? 'no' : 'yes'}</button></div>
                                <div>{!application.rejection ? 'no' : 'yes'} <button name="rejection" onClick={e => changeStatus(e, application.timestamp)}>{application.rejection ? 'no' : 'yes'}</button></div>
                            </li>

                        ))
                    }


                </ul>
            </div>
        </section>
    )
}