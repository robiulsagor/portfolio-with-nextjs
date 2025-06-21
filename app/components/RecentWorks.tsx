import { recentWorks } from "../data"
import RecentWork from "./RecentWork"
import TextHeaders from "./TextHeaders"

const RecentWorks = () => {
    return (
        <div className="wrapper" id="recent-works">
            <TextHeaders
                header="Recent Works"
                subtitle="Some of my best works I did in past"
                bg="white"
            />

            <div className="mt-8 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    recentWorks.map(data => (
                        <RecentWork key={data.id} data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecentWorks