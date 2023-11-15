import React from "react";
import resume from "../assets/resume.pdf"

export function Resume() {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <ul>
                <li>
                    <strong>
                    Chemistry-Environment Department Intern at CFE, Veracruz
                    </strong>
                    <br />
                    - Volumetric analysis in water and oil.
                    - Chemical inventory management.
                    - Hazardous waste management.
                    - Regeneration of cation exchange resin.
                    - Support on filling in COA.
                    - NOM 052 SEMARNAT-2005.
                    - NOM 054 SEMARNAT-1993
                </li>
                <br />

                <li>
                    <strong>
                    Quality Analyst atPROMEXA, Veracruz
                    </strong>
                    <br />
                    - Quality analysis in rice.
                    - Production, security and hygiene management.
                    - Staff management.
                    - Residual pest control using Phostoxin and K-Obil.
                    - NOM 251 SSA-2009.
                    - BPM’s.
                    - 5S.
                </li>
                <br />

                <li>
                    <strong>
                    Customer Service Representative at Teleperformance , Zapopan
                    </strong>
                    <br />
                    - Customer service- ISO 27001
                    - Campaigns:- Billing, Account management, Downgrade. - Promo down, Change of
                    services, Retention.
                    - Sales representative
                </li>
                <br />

                <li>
                    <strong>
                    Dispute Resolutions at HPE, Zapopan                    
                    </strong>
                    <br />
                    - Worked to achieve high customer satisfaction rates by providing optimal customer service.
                    - Worked productively to determine the needs of customers and fast track solutions to
                    those needs.
                    - Tracked order status and work with several teams to get the most accurate delivery
                    date.
                    - Handled order escalations considering several points.
                    - Managed proper wording.
                </li>
                <br />

                <li>
                    <strong>
                    Customer Care at HPE, Zapopan                   </strong>
                    <br />
                    - Direct and indirect accounts management
                    - Guidelines for returns and physical claims
                    - Analysis of information such as: taxes, shipping & handling, pricing, contracts, legal name, web-
                    invoicing, to proceed with transactions on SAP and S4.
                    - Manual and cosmetic invoicing
                    - CRS ID creation process
                    - Customer communication
                    -Relationshipswithseveralbusinessgroupsintheirlevels toworktogetherandgetsolutions.
                </li>
                <br />

                <li>
                    <strong>
                    Full Stack Web Developer                
                    </strong>
                    <br />
                    This journey is just about to begin ✨
                </li>
                <br />
                <a href={resume} download>
                Download Resume
            </a>
            </ul>
        </section>
    );
}