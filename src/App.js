import React from 'react';
import { Col, Container, Nav, Navbar, Row , Button} from 'react-bootstrap';
import SkillsGallery from './components/skillsGallery';
import CustomCarousel from './components/carouselComponent';
import './App.css';
import LinksComponent from './utilities/linksAttributes';
import ContactForm from './components/contactForm';

function App() {

  return(
    <div>
      <header>
        <Navbar expand='lg' fixed='top' data-bs-theme='dark' className='mx-3 my-2 border-bottom border-light'>
          <Container fluid className='g-0 align-items-center  '>
            <Navbar.Brand href="#" className="text-uppercase l-2" style={{letterSpacing:'0.3rem'}} ><span className='text-brand-custom'> Tanya <strong>/</strong></span> Todorova</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#skills'>Skills</Nav.Link>
                <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                <Nav.Link href='#contact'>Contacts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <section>
          <Container fluid className='bg-banner-custom g-0 d-flex justify-content-center align-items-center'>

            <Row className='d-flex flex-column g-0'>

              <Col className='border border-color border-4 px-5 py-2 text-center mb-4 shadow '>
                <h1 className='text-white text-uppercase' style={{letterSpacing:'3px', fontSize:'2.25rem'}}>Hello! <span className='fw-bold'>I'm</span> Tanya</h1>
              </Col>

              <Col className='text-center'>
                <p className='text-white' style={{letterSpacing:'3px'}}>Welcome to my website!<br/> I am a junior front-end developer.</p>
              </Col>

            </Row>

          </Container>
        </section>

        <section id='about'>
          <Container fluid className='g-0 bg-about-custom'>
            <Row className='d-flex flex-column g-3'>

              <Col className='px-md-4 py-md-2'>

                <div className='m-5'>

                  <h4 className='border-start border-4 border-color text-uppercase py-2 px-4  mb-4'style={{letterSpacing:'3px'}}>About me</h4>
                  <p className='fst-italic' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href='/files/TanyaTodorova_CV.pdf' download><Button className='bg-button-custom text-uppercase fw-medium px-4 py-3 mt-3 rounded-0 '>Download CV</Button></a>

                </div>

              </Col>

            </Row>
          </Container>
        </section>

        <section id='skills'>
          <Container  fluid className='g-0 bg-skills-custom p-4'>
              <SkillsGallery/>
          </Container>
        </section>

        <section id='portfolio'>

          <Container fluid className='g-0 bg-about-custom'>

            <Row className='d-flex flex-column g-3'>
    
              <Col className='px-md-4 py-md-2'>
                <div className='m-5'>
                  <h4 className='border-start border-4 border-color text-uppercase py-2 px-4 mb-4'style={{letterSpacing:'3px'}}>featured work</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className='m-5'>
                  <CustomCarousel/>
                </div>


              </Col>

            </Row>

          </Container>

        </section>

        <section id='contact'>
          
          <Container fluid className='g-0'>

            <Row className='d-flex flex-row g-3'>

              <Col className='text-white bg-skills-custom px-md-4 py-md-2'  sm='12' lg='6'>

                <div className='p-5'>
                  <h4 className='border-start border-4 border-color text-uppercase py-2 px-4 mb-4'style={{letterSpacing:'3px'}}>Contacts</h4>
                  <p>Tanya Todorova</p>
                  <p>tanyatodorovaaa@gmail.com</p>
                  <p>London, United Kindgom</p>
                  <LinksComponent/>
                </div>

              </Col>

              <Col className='px-md-4 py-md-2 ' sm='12' lg='6'>
                <div className='p-5'>
                  <ContactForm/>
                </div>

              
              </Col>

            </Row>
          </Container>

        </section>

      </main>
    </div>
  )
}

export default App;
