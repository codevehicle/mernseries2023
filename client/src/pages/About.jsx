import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
    const {user} = useAuth();
    return (
        <>

        {/* 1st section */}
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome, { user ? ` ${user.username} to our website` : `to our website`}</p>
                        <h1>Who is CodesVehicle?</h1>
                        <p>
                        CodesVehicle is all about Website Development, Technical, Tips and Tricks, Designs Principle and Programming videos in the Hindi Language.
                        </p>
                        <p>
                        At CodesVehicle, we cover a wide range of website development languages such as HTML, CSS, JavaScript, React, Node, Express, MongoDB, Next.js, and more. We aim to make these topics easily accessible and understandable for everyone, regardless of your level of experience.
                        </p>
                        <p>
                        Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.” “Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.
                        </p>
                        <p>
                        Thank you for visiting CodesVehicle. We hope you find our content helpful and informative, and we look forward to helping you achieve your goals in website development and programming. If you have any questions or feedback, please don't hesitate to contact us.
                        </p>
                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn secondary">connect now</button>
                            </NavLink>
                            <NavLink to="/service">
                                <button className="btn secondary-btn">learn more</button>
                            </NavLink>
                        </div>
                    </div>

                    {/* hero images */}
                <div className="hero-image">
                <img src="/image/rahh.jpg" alt="image reload failed" width="400" height="500"/>
                </div>
                </div>
            </section>
        </main>
        <Analytics />
        </>
    );
};