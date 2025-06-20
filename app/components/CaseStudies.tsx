'use client'

import { caseStudies } from "../data"
import CaseStudy from "./CaseStudy"
import TextHeaders from "./TextHeaders"

const CaseStudies = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-14" id="case-studies">
            <TextHeaders
                header="Case Studies"
                subtitle="Solving user &amp; business problems for more than 5+ years"
                bg='white'
            />

            <div className="mt-12 md:mt-24 space-y-24">
                {
                    caseStudies.map((caseStudy, index) => (
                        <CaseStudy
                            key={caseStudy.id}
                            index={index}
                            title={caseStudy.title}
                            description={caseStudy.description}
                            category={caseStudy.category}
                            image={caseStudy.image}
                            link={caseStudy.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudies