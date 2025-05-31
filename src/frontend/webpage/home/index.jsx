import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {

    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            new Typed(typedElement.current, {
                strings: ['FullStackDeveloper', 'Designer', 'Freelancer'],
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
    }, []);

    return (
        <main className="main">

            <section id="hero" className="hero section dark-background">

                <img src="/assets/img/2.2.jpg" alt="" data-aos="fade-in" className="" />

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2>Bapi Swarnakar</h2>
                    <p>
                    I'm{' '}
                    <span className="typed" ref={typedElement}></span>
                    </p>
                    <p>
                        <button className="contact-btn">Download CV</button>
                    </p>
                    <div className="social-links text-center d-lg-none">
                        <Link to="https://www.facebook.com/share/1CDewxPr1w" target="blank" className="facebook"><i className="bi bi-facebook"></i></Link>
                        <Link to="https://www.instagram.com/swarnakarbapi/profilecard/?igsh=MmhxbDNzbjZyaDV3" target="blank" className="instagram"><i className="bi bi-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/bapi-swarnakar-814974231" target="blank" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                        <Link to="https://www.youtube.com/@bapi.swarnakar" target="blank" className="google-plus"><i className="bi bi-youtube"></i></Link>
                    </div>
                </div>

            </section>

            <section id="about" className="about section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>
                        I'm Bapi Swarnakar, a passionate software developer from Kaliyaganj, Uttar Dinajpur, West Bengal. 
                        I hold a Master's degree in Computer Science from Raiganj University and bring over 5 years of 
                        hands-on experience in full-stack development.
                    </p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="/assets/img/bapi.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>FullStack Developer</h2>
                            <p className="fst-italic py-3">
                                My technical expertise spans across both frontend and backend technologies, with specialization in 
                                modern JavaScript frameworks and Java-based solutions. I thrive on building efficient, scalable 
                                applications that deliver exceptional user experiences.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>02 Nov 1999</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+916295283474</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kaliyaganj, Uttar Dinajpur</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master in Computer Science</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>swarnakarr34@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </section>


            <section id="technologies" className="technologies section dark-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Technologies I Work With</h2>
                </div>
                
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="tech-slider">
                    <div className="tech-slide-track">
                    {/* First set */}
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/php.png" alt="PHP" />
                        <span className="tech-name">PHP</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/java.png" alt="Java" />
                        <span className="tech-name">Java</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/postgres.png" alt="PostgreSQL" />
                        <span className="tech-name">PostgreSQL</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/cmd.png" alt="Command Line" />
                        <span className="tech-name">CLI</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/css3.png" alt="CSS3" />
                        <span className="tech-name">CSS3</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/git.png" alt="Git" />
                        <span className="tech-name">Git</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/html5.png" alt="HTML5" />
                        <span className="tech-name">HTML5</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/js.png" alt="JavaScript" />
                        <span className="tech-name">JavaScript</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/mysql.png" alt="MySQL" />
                        <span className="tech-name">MySQL</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/react.png" alt="React" />
                        <span className="tech-name">React</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/sql.png" alt="SQL" />
                        <span className="tech-name">SQL</span>
                        </div>
                    </div>
                    
                    {/* Duplicate set for seamless looping */}
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/php.png" alt="PHP" />
                        <span className="tech-name">PHP</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/java.png" alt="Java" />
                        <span className="tech-name">Java</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/postgres.png" alt="PostgreSQL" />
                        <span className="tech-name">PostgreSQL</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/cmd.png" alt="Command Line" />
                        <span className="tech-name">CLI</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/css3.png" alt="CSS3" />
                        <span className="tech-name">CSS3</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/git.png" alt="Git" />
                        <span className="tech-name">Git</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/html5.png" alt="HTML5" />
                        <span className="tech-name">HTML5</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/js.png" alt="JavaScript" />
                        <span className="tech-name">JavaScript</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/mysql.png" alt="MySQL" />
                        <span className="tech-name">MySQL</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/react.png" alt="React" />
                        <span className="tech-name">React</span>
                        </div>
                    </div>
                    <div className="tech-slide">
                        <div className="tech-card">
                        <img src="/assets/img/slider/sql.png" alt="SQL" />
                        <span className="tech-name">SQL</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="resume" className="resume section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Resume</h2>
                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Higher Secondary Education</h4>
                                <h5>2015 - 2017</h5>
                                <p><em>Debinagar K.C.R Vidyapith (H.S), Uttar Dinajpur, West Bengal</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>Bachelor of Computer Application (BCA)</h4>
                                <h5>2017 - 2020</h5>
                                <p><em>Raiganj University, Uttar Dinajpur, West Bengal</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>Master of Computer Science (M.Sc.)</h4>
                                <h5>2020 - 2022</h5>
                                <p><em>Raiganj University, Uttar Dinajpur, West Bengal</em></p>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Associate</h4>
                                <h5>Adosys</h5>
                                <ul>
                                    <li>Developed and maintained 10+ web applications including a doctor prescription system, e-commerce platform, and invoice generation tool</li>
                                    <li>Gained hands-on experience with full-stack development using PHP, JavaScript, and MySQL</li>
                                    <li>Built a prescription management system that reduced paperwork by 60% for clinic partners</li>
                                    <li>Developed dynamic invoice generation application that automated billing for 50+ small business clients</li>
                                    <li>Contributed to all phases of SDLC from requirement analysis to deployment</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Senior Associate</h4>
                                <p><em>Mejora infotech</em></p>
                                <ul>
                                    <li>Designed and developed a highly scalable financial application using Spring Boot Microservices, improving system performance by 40%</li>
                                    <li>Implemented RESTful APIs for core banking operations, transaction processing, and reporting modules</li>
                                    <li>Integrated JWT-based authentication & authorization for secure access to financial data</li>
                                    <li>Developed event-driven architecture using Spring Cloud Stream for real-time transaction updates</li>
                                    <li>Optimized database queries in MySQL/PostgreSQL, reducing query execution time by 35%</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* <section id="portfolio" className="portfolio section light-background">


                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                </div>

                <div className="container">

                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </section> */}

            <section id="contact" className="dark-background">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">I'd love to hear from you! Reach out for collaborations or just to say hello.</p>
                    </div>

                    <div className="contact-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="contact-info">
                        <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="contact-icon">
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Location</h4>
                            <p>Kaliyaganj, Uttar Dinajpur</p>
                            <p>West Bengal, 733129</p>
                        </div>
                        </div>

                        <div className="contact-card" data-aos="fade-up" data-aos-delay="250">
                        <div className="contact-icon">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Call Me</h4>
                            <p>+91 6295283474</p>
                            <p>Available: Mon-Fri, 10AM-6PM</p>
                        </div>
                        </div>

                        <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="contact-icon">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Email Me</h4>
                            <p>swarnakarr34@gmail.com</p>
                            <p>Response within 24 hours</p>
                        </div>
                        </div>
                    </div>

                    <div className="contact-form" data-aos="fade-up" data-aos-delay="400">
                        <form>
                        <div className="form-row">
                            <div className="form-group">
                            <input type="text" id="name" placeholder=" " required />
                            <label htmlFor="name">Your Name</label>
                            </div>
                            <div className="form-group">
                            <input type="email" id="email" placeholder=" " required />
                            <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" placeholder=" " />
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="form-group">
                            <textarea id="message" rows="5" placeholder=" " required></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>
                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <i className="bi bi-send-fill"></i>
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Home;