import { useContext } from "react"
import Data from "../Contexts/Data"

export default function Stats() {

    const { applications } = useContext(Data);
    const responseCount = applications.filter(a => a.response).length;
    const interviewCount = applications.filter(a => a.interview).length;
    const rejectionsCount = applications.filter(a => a.rejection).length;
    const applicationsCount = applications.length;
    return (
        <>

            <div className="stats">
                <h2>Stats</h2>
                <div className="stats-content">
                    <div className="stats-data">
                        <div><span className="applications" >Applications: </span><span>{applicationsCount}</span></div>
                        <div><span className="responses" >Responses: </span><span>{responseCount}</span></div>
                        <div><span className="interviews" >Interviews: </span><span>{interviewCount}</span></div>
                        <div><span className="rejections" >Rejections: </span><span>{rejectionsCount}</span></div>
                    </div>
                    <div className="stats-graphics">
                        <div className="applications" style={{ height: applicationsCount / applicationsCount * 150 }}></div>
                        <div className="responses" style={{ height: responseCount / applicationsCount * 150 }}></div>
                        <div className="interviews" style={{ height: interviewCount / applicationsCount * 150 }}></div>
                        <div className="rejections" style={{ height: rejectionsCount / applicationsCount * 150 }}></div>
                    </div>
                </div>
            </div>
        </>

    )
}