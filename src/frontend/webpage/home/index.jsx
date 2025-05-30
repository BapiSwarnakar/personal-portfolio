import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Home = () => {

    const typedElement = useRef(null);

    useEffect(() => {
        if (typedElement.current) {
            new Typed(typedElement.current, {
                strings: ['FullStack Developer', 'Designer', 'Freelancer'],
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

                <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" className="" />

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2>Bapi Swarnakar</h2>
                    <p>
                    I'm{' '}
                    <span className="typed" ref={typedElement}></span>
                    </p>
                </div>

            </section>

            <section id="about" className="about section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>UI/UX Designer &amp; Web Developer.</h2>
                            <p className="fst-italic py-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <section id="stats" className="stats section">

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-people"></i>
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <section id="skills" className="skills section light-background">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row skills-content skills-animation">

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section id="resume" className="resume section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Sumary</h3>

                            <div className="resume-item pb-0">
                                <h4>Brandon Johnson</h4>
                                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                <h5>2015 - 2016</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                            </div>

                            <div className="resume-item">
                                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                                <h5>2010 - 2014</h5>
                                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Senior graphic design specialist</h4>
                                <h5>2019 - Present</h5>
                                <p><em>Experion, New York, NY </em></p>
                                <ul>
                                    <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                    <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                    <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Graphic design specialist</h4>
                                <h5>2017 - 2018</h5>
                                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                <ul>
                                    <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                    <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                    <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                    <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="portfolio" className="portfolio section light-background">


                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="container">

                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Product</li>
                            <li data-filter=".filter-branding">Branding</li>
                            <li data-filter=".filter-books">Books</li>
                        </ul>

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

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <Link to="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                        <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section id="contact" className="contact section">


                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>

                                <iframe title="abc" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder="0" style={{ border: 0, width: "100%", height: "270px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Home;