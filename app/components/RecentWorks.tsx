"use client"

import { recentWorks } from "../data"
import RecentWork from "./RecentWork"
import TextHeaders from "./TextHeaders"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const RecentWorks = () => {
    return (
        <div className="wrapper" id="recent-works">
            <TextHeaders
                header="Recent Works"
                subtitle="Some of my best works I did in past"
                bg="white"
            />

            <Carousel
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                className="mt-8 md:mt-16">
                {
                    recentWorks.map(data => (
                        <RecentWork key={data.id} data={data} />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default RecentWorks