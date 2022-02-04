import AM from "../styles/AboutMe.module.css";
import MeIcon from "../icons/me.png";
import ContactData from "./ContactData";
import Navigation from "./Navigation";
export const AboutMe = () => {
    return (
        <div className={AM.mainWindow}>
            <img src={MeIcon} alt="callMeIcon" />
            <h1 className={AM.h1}>About Me</h1>
            <p className={AM.p}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente ut est, quis voluptatum mollitia repudiandae
                architecto, fugiat quo laborum voluptatem saepe optio dicta
                libero minima dolores quaerat iusto rem nemo. Expedita hic ad
                odit mollitia laboriosam sequi, iste quam qui! Est illo,
                deserunt ut ex animi veniam maxime perferendis accusamus natus,
                nesciunt rem nemo harum fugit amet. Ratione, enim. Non. Optio
                inventore fuga quam nihil distinctio, perferendis aspernatur
                harum itaque eos assumenda qui consequatur quos reprehenderit
                omnis illum quis iure atque accusantium voluptatibus sapiente
                sequi impedit natus cumque. Assumenda, cumque. Perspiciatis modi
                velit minus explicabo, ea mollitia tempore dicta quo dolorum
                quidem aperiam quas magnam voluptatum. Eius veniam,
                reprehenderit harum debitis cumque dolorum nostrum inventore
                optio sapiente molestias mollitia voluptatum! Quaerat ratione
                explicabo sapiente corporis maiores sint nostrum, atque modi
                ducimus neque placeat natus similique unde eos nihil dignissimos
                nesciunt autem accusamus culpa quisquam eius. Repudiandae
                voluptate eligendi officia eos!
            </p>
            <ContactData />
            <Navigation />
        </div>
    );
};
