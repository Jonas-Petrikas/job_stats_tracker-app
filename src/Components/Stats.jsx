export default function Stats() {
    return (
        <>

            <div className="stats">
                <h2>Stats</h2>
                <div className="stats-content">
                    <div className="stats-data">
                        <div><span className="applications" >Applications: </span><span>#</span></div>
                        <div><span className="responses" >Responses: </span><span>#</span></div>
                        <div><span className="interviews" >Interviews: </span><span>#</span></div>
                        <div><span className="rejections" >Rejections: </span><span>#</span></div>
                    </div>
                    <div className="stats-graphics">
                        <div className="applications"></div>
                        <div className="responses"></div>
                        <div className="interviews"></div>
                        <div className="rejections"></div>
                    </div>
                </div>
            </div>
        </>

    )
}