import React from "react";
import profile from "../assets/profile.jpg"

export function AboutMe() {
    return (
        <section id="about-me">
            <h2>About Me</h2>
            <img src={profile} alt="ALL" style={{ width: "250px", height: "250px", borderRadius: "30%"}} />
            <br /> <br />
            <p>
                Hi, I'm Alexis Lendechy, a Chemical Engineer who has decided to move to the coding world and face 
                new challenges here, which from what I've seen so far, there are plenty; it never ceases.
                <br /> <br /> I've goot some experience working as Chemical Engineer in water treatment, inverse osmosis, 
                hazardous waste management among others. <br /> <br /> As CSR I worked in several campaings such as:
                Billing, Account management, Downgrade. - Promo down, Change of services, Retention. <br /> <br />
                When I moved to the IT world I've stared as Dispute Resolver: Direct and indirect accounts management,
                Guidelines for returns and physical claims, Analysis of information such as: taxes, shipping & handling, 
                pricing, contracts, legal name, web-invoicing, proceed with transactions on SAP and S4, among others.
                <br /> <br /> Now in the coding world I'm about the be certificated as Full Stack Web Developer and it's been
                a real journey. What a challenge to move to a completely different area, but I've enjoyed it. 
            </p>
        </section>
    );
}