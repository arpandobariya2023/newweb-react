import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Header from './componets/Header';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <!-- ============= BANNER ============= --> */}
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="content">
                <h1 className="title">Build beautiful website &amp; mobile apps.</h1>
                <span className="subtitle">Create live segments and target the right people for messages based on
                  their behaviors.</span>
                <a href="javascript:void(0)" className="axil-btn btn-large btn-fill-primary">Get Started</a>
              </div>
            </div>
            <div className="col-6">
              <div className="banner-thumbnail">
                <div className="img-1">
                  <div className="large">
                    <img src="image/ledy.jpeg" alt="Laptop" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============= SERVICES ============= --> */}
      <section className="services">
        <div className="container">
          <div className="heading">
            <span>What We Can Do For You</span>
            <h2>Services we can help you with</h2>
            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="services-card">
                <div className="services-image">
                  <img src="image/ball.png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Design</a></h3>
                  <p> Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="services-card">
                <div className="
                  ">
                  <img src="image/gallary.png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Development</a></h3>
                  <p>Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="services-card">
                <div className="services-image">
                  <img src="image/horn.png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Online marketing</a></h3>
                  <p>Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="services-card">
                <div className="services-image">
                  <img src="image/bussinas.png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Business</a></h3>
                  <p>Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="services-card">
                <div className="services-image">
                  <img src="image/clock.png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Technology</a></h3>
                  <p>Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="services-card">
                <div className="services-image">
                  <img src="image/camera (1).png" alt="services-image 1" />
                </div>
                <div className="services-data">
                  <h3><a href="javascript:void(0)" className="title">Content strategy</a></h3>
                  <p>Simply drag and drop photos and videos into your workspace to automatically add them to
                    your Collab Cloud library.</p>
                  <a href="javascript:void(0)" className="find-btn">Find out more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============= OUR PROJECT ============= --> */}
      <section className="project">
        <div className="container">
          <div className="heading">
            <span>Our Project</span>
            <h2>Some of our<br />finest work.</h2>
          </div>
          <div className="project-cat">
            <ul>
              <li><a href="javascript:void(0)">All Works</a></li>
              <li><a href="javascript:void(0)">Branding</a></li>
              <li><a href="javascript:void(0)">Mobile</a></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-1.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Creative Agency</a></h3>
                  <p>Branding, Website, App</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-2.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Digital Marketing</a></h3>
                  <p>Logo, Website, Mobile</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-3.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Digital Agency</a></h3>
                  <p>Website, UI/UX</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-4.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Plan Management</a></h3>
                  <p>Branding, Website, Mobile</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-5.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Social Engagement</a></h3>
                  <p>Design, Development</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="project-card">
                <div className="project-img">
                  <img src="image/project-6.png" alt="project-img 1" />
                </div>
                <div className="project-data">
                  <h3><a href>Web Application</a></h3>
                  <p>Logo, Webapp, Mobile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ============= FEATURED CASE STUDY ============= --> */}
      <section className="featured">
        <div className="container">
          <div className="heading">
            <span>Featured Case Study</span>
            <h2>Design startup movement</h2>
            <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac
              tellus.</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="featured-card">
                <div className="deatured-hover">
                  <i className="fa-solid fa-face-smile" />
                  <h2>15+</h2>
                  <p>Years of operation</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featured-card">
                <div className="deatured-hover">
                  <i className="fa-solid fa-house" />
                  <h2>360+</h2>
                  <p>Projects deliverd</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featured-card">
                <div className="deatured-hover">
                  <i className="fa-solid fa-user-group" />
                  <h2>600+</h2>
                  <p>Specialist</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="featured-card">
                <div className="deatured-hover">
                  <i className="fa-brands fa-apple" />
                  <h2>64+</h2>
                  <p>Years of operation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ============= TESTIMONIAL ============= --> */}
      <section className="testimonial">
        <div className="container">
          <div className="heading">
            <span>Testimonial</span>
            <h2>From getting started</h2>
            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus
              imperdiet.</p>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="testimonial-grid">
                <div className="yelp-img">
                  <img src="image/yelp-2.png" alt="Yelp" />
                  <p>“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit
                    nisi. Vestibulum eget risus velit. ”</p>
                </div>
                <div className="testimonial-info">
                  <div className="thumb">
                    <img src="image/testimonial-1.png" alt="Google Review" />
                  </div>
                  <div className="testimonial-content">
                    <span className="name">Darrell Steward</span>
                    <span className="designation">Executive Chairman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="testimonial-grid">
                <div className="yelp-img">
                  <img src="image/google-2.png" alt="Yelp" />
                  <p>“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit
                    nisi. Vestibulum eget risus velit. ”</p>
                </div>
                <div className="testimonial-info">
                  <div className="thumb">
                    <img src="image/testimonial-2.png" alt="Google Review" />
                  </div>
                  <div className="testimonial-content">
                    <span className="name">Savannah Nguyen</span>
                    <span className="designation">Executive Chairman</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="testimonial-grid">
                <div className="yelp-img">
                  <img src="image/fb-2.png" alt="Yelp" />
                  <p>“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit
                    nisi. Vestibulum eget risus velit. ”</p>
                </div>
                <div className="testimonial-info">
                  <div className="thumb">
                    <img src="image/testimonial-3.png" alt="Google Review" />
                  </div>
                  <div className="testimonial-content">
                    <span className="name">Floyd Miles</span>
                    <span className="designation">Executive Chairman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ============= PRICING PLAN ============= --> */}
      <section className="pricing-plan">
        <div className="container">
          <div className="heading">
            <span>Pricing Plan</span>
            <h2>We’ve built solutions for...</h2>
            <p>Flexible pricing options for freelancers and design teams.</p>
          </div>
          <div className="pricing-billing-duration">
            <ul>
              <li className="nav-item">
                <button className="nav-link"><a href>Billed Yearly</a></button>
              </li>
              <li className="nav-item">
                <button className="nav-link"><a href>Billed Monthly</a></button>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h2>Professional</h2>
                  <span className="pricing-card-span">A beautiful, simple website</span>
                  <div className="price-wrap">
                    <div className="yearly-pricing">
                      <span className="amount">$199.99</span>
                      <span className="duration">/yearly</span>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <a href="javascript:void(0)" className="btn axil-btn btn-large btn-borderd">Get Started
                      Today</a>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list-unstyled">
                    <li><i className="fa-solid fa-check" />10 Pages Responsive Website</li>
                    <li><i className="fa-solid fa-check" />5 PPC Campaigns</li>
                    <li><i className="fa-solid fa-check" />10 SEO Keywords</li>
                    <li><i className="fa-solid fa-check" />5 Facebook Camplaigns</li>
                    <li><i className="fa-solid fa-check" />2 Video Camplaigns</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h2>Standard</h2>
                  <span className="pricing-card-span">Small Team</span>
                  <div className="price-wrap">
                    <div className="yearly-pricing">
                      <span className="amount">$219.99</span>
                      <span className="duration">/yearly</span>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <a href="javascript:void(0)" className="btn axil-btn btn-large btn-borderd">Get Started
                      Today</a>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list-unstyled">
                    <li><i className="fa-solid fa-check" />20 Pages Responsive Website</li>
                    <li><i className="fa-solid fa-check" />Unlimited PPC Campaigns</li>
                    <li><i className="fa-solid fa-check" />Unlimited SEO Keywords</li>
                    <li><i className="fa-solid fa-check" />Unlimited Facebook Camplaigns</li>
                    <li><i className="fa-solid fa-check" />Unlimited Video Camplaigns</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h2>Ultimate</h2>
                  <span className="pricing-card-span">Large Team</span>
                  <div className="price-wrap">
                    <div className="yearly-pricing">
                      <span className="amount">$559.99</span>
                      <span className="duration">/yearly</span>
                    </div>
                  </div>
                  <div className="pricing-btn">
                    <a href="javascript:void(0)" className="btn axil-btn btn-large btn-borderd">Get Started
                      Today</a>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="list-unstyled">
                    <li><i className="fa-solid fa-check" />50 Pages Responsive Website</li>
                    <li><i className="fa-solid fa-check" />Unlimited PPC Campaigns</li>
                    <li><i className="fa-solid fa-check" />Unlimited SEO Keywords</li>
                    <li><i className="fa-solid fa-check" />Unlimited Facebook Camplaigns</li>
                    <li><i className="fa-solid fa-check" />Unlimited Video Camplaigns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ============= TOP CLIENTS ============= --> */}
      <section className="top-clients">
        <div className="container">
          <div className="heading">
            <span>Top Clients</span>
            <h2>We’ve built solutions for...</h2>
            <p>Design anything from simple icons to fully featured websites and applications.</p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-1.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-2.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-3.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-4.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-5.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-6.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-7.png" alt="top-clients-img-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="top-clients-img">
                <img src="image/brand-8.png" alt="top-clients-img-1" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ============= LATEST STORIES ============= --> */}
      <section className="latest-stories">
        <div className="container">
          <div className="heading">
            <span>What's Going On</span>
            <h2>Latest stories</h2>
            <p>News From Abstrak And Around The World Of Web Design And Complete Solution of Online Digital
              Marketing</p>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="blog-list">
                <div className="blog-thumbnail">
                  <a href="javascript:void(0)"><img src="image/thumb_5.png" alt="latest-stories-1" /></a>
                </div>
                <div className="blog-content">
                  <h4><a href="javascript:void(0)" className="blog-btn">Follow your own design process, whatever
                    gets you to the outcome.</a></h4>
                  <p>Want to know the one thing that every successful digital marketer does first to ensure
                    they get the biggest return on their marketing budget?</p>
                  <a href="javascript:void(0)" className="more-btn">Learn more<i className="fa-solid fa-chevron-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="blog-list border-start">
                <div className="blog-thumbnail">
                  <a href="javascript:void(0)"><img src="image/r2.png" alt="latest-stories-1" /></a>
                </div>
                <div className="blog-content">
                  <h4><a href="javascript:void(0)" className="blog-btn">How To Use a Remarketing Strategy To Get
                    More</a></h4>
                  <p>Want to know the one thing that every successful digital marketer does first to ensure
                    they get the biggest return on their marketing budget?</p>
                  <a href="javascript:void(0)" className="more-btn">Learn more<i className="fa-solid fa-chevron-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ============= LET'S WORK TOGETHER ============= --> */}
      <section className="lets-work-together">
        <div className="container">
          <div className="heading">
            <span>Let's Work Together</span>
            <h2>Need a successful project?</h2>
            <a className="axil-btn btn-large btn-work-together" href="javascript:void(0)">Estimate Project</a>
          </div>
        </div>
      </section>

      {/* <!-- ============= WORK-IMG ============= --> */}
      <div className="container">
        <div className="call-to-action">
          <div className="work-img">
            <img src="image/Untitled-1.png" alt="work-1" />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default App;
