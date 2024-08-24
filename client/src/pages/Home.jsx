import { Analytics } from "../components/Analytics";
import Typewriter from 'typewriter-effect';

export const Home = () => {
    return (
        <>

        {/* 1st section */}
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p><Typewriter options={{
                            strings:["HELLO AND WELCOME "],
                            autoStart:true,
                            loop:true,
                        }}/></p>
                        <p>WiTHOUT WEAPONs, NOR HaTRED, NOR ViOLENCE!</p>
                        <h1>Welcome to CodesVehicle</h1>
                        <p> Learn
                            <Typewriter
                            options={{
                                strings: ["C Programming", "Python","HTML/CSS","C++","JavaScript","Java","DSA","Web Development","Machin Learning","DBMS","Data Science","MERN Application","React native Developer"],
                                autoStart:true,
                                loop:true,
                            }}
                            />
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn secondary">connect now</button>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/@CodingRahul">
                                <button className="btn secondary-btn">Visit YouTube</button>
                            </a>
                        </div>
                    </div>

                    {/* hero images */}
                <div className="hero-image">
                <img src="/image/images/aaaaa.jpg" alt="image reload failed" width="400" height="500"/>
                </div>
                </div>
            </section>
        </main>

        {/* 2nd section */}
        
        <Analytics />

        {/* 3rd section */}

        <section className="section-hero">
            <div className="container grid grid-two-cols">
                {/* hero image */}
                <div className="hero-image">
                    <img src="/image/images/aaaa.jpg" alt="your image not reload" width="400" height="500" />
                </div>

                <div className="hero-content">
                    <p>Start Learning with me </p>
                    <h1>Get Started Today</h1>
                    <p>Join me on my YouTube channel dedicated to web development, where you can start your learning journey by subscribing. Explore valuable tutorials, tips, and tricks to enhance your web development skills and stay updated with the latest trends."</p>
                    <div className="btn btn-group">
                        <a target="_blank" href="https://www.youtube.com/@CodingRahul">
                            <button className="btn">Check My YOuTube</button>
                        </a>
                        <a href="/register">
                            <button className="btn secondary-btn">Sign Up Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </>
    );
};