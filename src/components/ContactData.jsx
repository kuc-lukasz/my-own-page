import CD from "../styles/ContactData.module.css";

import CallmeIcon from "../icons/callme.png";
import TextMeIcon from "../icons/textme.png";
import GithubIcon from "../icons/githubLogo.png";
import LinkedInIcon from "../icons/linkedin.png";

export const ContactData = () => {
    return (
        <ul className={CD.mainContainer}>
            
                <a href="tel:607154416" className={CD.a}>
                    <img src={CallmeIcon} alt="callMeIcon" />
                    +48 607 154 416
                </a>
                {/* <p>+48 607 154 416</p> */}
            
            
                <a href="mailto:lukaszkuc93@gmail.com" className={CD.a}>
                    <img src={TextMeIcon} alt="WriteMeIcon" />{" "}
                    lukaszkuc93@gmail.com
                </a>
            
            
                <a
                    href="https://github.com/kuc-lukasz"
                    className={CD.a}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={GithubIcon} alt="GithubIcon" /> Github
                </a>
            
            
                <a
                    href="https://www.linkedin.com/in/%C5%82ukasz-kuc-b83666a7/"
                    className={CD.a}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={LinkedInIcon} alt="LinkedInIcon" /> Linkedin
                </a>
           
        </ul>
    );
};

export default ContactData;
