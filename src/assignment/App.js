import React, { useReducer, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";
import { Navbar, Nav, Row, Col, Carousel, Card, Button, Form, Container, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { menuItems } from './Menu';
import './App.css';

const initialState = {
    questions: [
        {
            id: 1,
            question: 'What is ReactJS?',
            options: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
            answer: 'A JavaScript library for building user interfaces',
        },
        {
            id: 2,
            question: 'What is JSX?',
            options: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
            answer: 'A syntax extension for JavaScript',
        },
    ],
    currentQuestion: 0,
    selectedOption: '',
    score: 0,
    showScore: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SELECT_OPTION': return { ...state, selectedOption: action.payload };
        case 'NEXT_QUESTION':
            const isCorrect = state.questions[state.currentQuestion].answer === state.selectedOption;
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                selectedOption: '',
                score: isCorrect ? state.score + 1 : state.score,
                showScore: state.currentQuestion + 1 === state.questions.length
            };
        case 'RESTART_QUIZ': return initialState;
        default: throw new Error(`${action.type} is not a valid action type`);
    }
}

function HomePage() {
    return (
        <>
            <Carousel style={{ width: '100%', maxHeight: '600px', overflow: 'hidden' }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider1.webp"
                        alt="First slide"
                        style={{ objectFit: 'cover', height: '100%' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider2.png"
                        alt="Second slide"
                        style={{ objectFit: 'cover', height: '100%' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/slider3.webp"
                        alt="Third slide"
                        style={{ objectFit: 'cover', height: '100%' }}
                    />
                </Carousel.Item>
            </Carousel>

            <div className="welcome-section text-center my-4 bg-light p-3 rounded">
                <h2>Welcome to Our Bakery Paradise!</h2>
                <p>
                    Step into a world where every bite tells a story. At our bakery, we blend tradition and innovation to create baked goods that not only delight the taste buds but also warm the heart. From freshly baked artisan bread to exquisite pastries, we are dedicated to delivering the finest quality and unparalleled taste. Explore our recipes, join our live baking sessions, and stay inspired with the latest creations and seasonal specials. Join us for a journey of flavors and experiences that you won’t forget!
                </p>
            </div>

            <Row className="feature-section mt-4">
                <Col md={4}>
                    <Card bg="light" text="dark" className="h-100">
                        <Card.Img
                            variant="top"
                            src="./images/event-1.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Bakery Showcase</Card.Title>
                            <Card.Text className="flex-grow-1">Experience the artistry and passion behind our bakery delights.</Card.Text>
                            <Button variant="outline-brown" className="mt-auto">Discover More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg="light" text="dark" className="h-100">
                        <Card.Img
                            variant="top"
                            src="./images/event-2.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Live Baking Session</Card.Title>
                            <Card.Text className="flex-grow-1">Join our master baker as he demonstrates the secrets of perfect bread-making.</Card.Text>
                            <Button variant="outline-brown" className="mt-auto">Join Us</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card bg="light" text="dark" className="h-100">
                        <Card.Img
                            variant="top"
                            src="./images/event-3.jpg"
                            style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Delightful Desserts</Card.Title>
                            <Card.Text className="flex-grow-1">Indulge in our array of sweet treats, crafted with love and precision.</Card.Text>
                            <Button variant="outline-brown" className="mt-auto">Taste Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="d-flex flex-wrap align-items-center my-5 p-4 bg-light border rounded">
                <div className="col-md-6">
                    <img src="./images/menu-01.jpg" alt="Freshly baked goods" className="img-fluid rounded" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 px-4">
                    <h4 className="mt-3">Shop, Ship & Enjoy!</h4>
                    <p>
                        Indulge in the authentic taste of freshly baked artisan bread and delightful pastries. Whether you're gifting a basket of baked goods or savoring them at home, we promise a taste that feels like home. Order online for delivery and make every moment special with our lovingly crafted treats.
                    </p>
                    <Button variant="outline-brown" className="mt-2">Shop Our Online Store</Button>
                </div>
            </div>

            <div className="d-flex flex-wrap align-items-center my-5 p-4 bg-light border rounded">
                <div className="col-md-6 order-md-2">
                    <img src="./images/aaaa.webp" alt="Bakery location entrance" className="img-fluid rounded" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 order-md-1 px-4">
                    <h4 className="mt-3">Our Bakery Locations</h4>
                    <p>
                        Visit our cozy bakery locations across the city, including our flagship store downtown, for an experience filled with the aroma of freshly baked bread and sweet pastries. Stop by for breakfast, lunch, or a simple treat that brightens your day.
                    </p>
                    <Button variant="outline-brown" className="mt-2">Find a Location Near You</Button>
                </div>
            </div>
        </>
    );
}

function Menu() {
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {menuItems.map((news, id) => (
                    <Col key={id} className='mb-3'>
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={news.image}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    {news.description}
                                </Card.Text>
                                <Button variant="outline-brown" className="mt-auto">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

function AboutUs() {
    return (
        <Container>
            <Row className=' text-white mt-3 p-3 rounded'>
                <h1>Our Story</h1>
                <Col >
                    <p> Welcome to The Baker’s Corner, where the scent of freshly baked bread and pastries mingles with the spirit of a community that cherishes the simple joys of life. Our journey began in 2010, in the bustling heart of Đà Nẵng, with a single oven, a handful of cherished family recipes, and a dream to create a haven for all who step through our doors. </p> 
                    <p> The story of The Baker’s Corner is one woven with threads of passion, tradition, and a relentless pursuit of excellence. Our founder, inspired by the warmth and love of a family kitchen, sought to share this joy with the wider community. Armed with recipes passed down through generations, we opened our doors with a vision: to bring people together over shared meals and create memorable experiences through the art of baking. </p> 
                    <p> Our early days were modest. The kitchen was small, the resources limited, but the dreams were grand. With each loaf of bread that emerged from the oven, we felt a sense of accomplishment and a connection to our heritage. Every day was a new opportunity to learn, to refine our craft, and to bring smiles to the faces of our customers. </p> 
                    <p> As we grew, so did our commitment to quality. At The Baker’s Corner, we believe that baking is both an art and a science. We take pride in our meticulous processes and our creative flair. Our team of skilled bakers and pastry chefs put their heart and soul into each creation, ensuring that every bite is a testament to their passion and expertise. </p> 
                    <p> Each product, from our creamy cheesecakes to our buttery croissants, is crafted with the finest ingredients. We source our flour from local mills, our dairy from trusted farms, and our fruits from nearby orchards. This commitment to local sourcing not only supports our community but also ensures that our products are fresh, flavorful, and of the highest quality. </p> 
                    <p> The Baker’s Corner is more than just a bakery; it’s a place where the community gathers, where memories are made, and where every bite tells a story. Our cozy seating area invites friends to catch up over coffee and pastries, families to celebrate special occasions, and individuals to find a moment of peace and indulgence in their busy lives. </p> 
                    <p> We’re not just about selling pastries; we’re about sharing our passion and making your moments sweeter. Whether it’s a morning croissant, a birthday cake, or a wedding dessert table, we’re honored to be a part of your special occasions. Every product we create is made with love and care, with the hope that it brings joy to your day. </p> 
                    <p> We are deeply committed to sustainability and supporting local farmers. By sourcing our ingredients from trusted local suppliers, we ensure that every bite is not only delicious but also responsible. Our dedication to quality and community is at the heart of everything we do. We believe that food has the power to bring people together, and we strive to create a welcoming environment where everyone feels at home. </p> 
                    <p> Our bakery is designed with sustainability in mind. From our energy-efficient ovens to our use of biodegradable packaging, we are constantly seeking ways to reduce our environmental footprint. We believe that good business practices go hand in hand with taking care of our planet, and we are proud to be a part of a movement towards a more sustainable future. </p> 
                    <p> Our journey has been one of growth and learning. Over the years, we’ve expanded our offerings to include a wide variety of baked goods, from traditional favorites to innovative new creations. We’re constantly experimenting with new recipes and techniques to bring you the best of both worlds—comforting classics and exciting new flavors. </p> 
                    <p> In addition to our bakery, we also offer baking classes and workshops for those who want to learn the craft themselves. Sharing our knowledge and passion for baking is one of the most rewarding parts of what we do. We love seeing the joy on our students’ faces as they create their own delicious masterpieces. Our classes are designed for all skill levels, from beginners to seasoned bakers, and cover a wide range of topics, from bread making to pastry decoration. </p> 
                    <p> The Baker’s Corner is built on the hard work and dedication of a passionate team. Our bakers and pastry chefs come from diverse backgrounds, each bringing their unique skills and experiences to the kitchen. Together, we share a commitment to excellence and a love for the art of baking. </p> 
                    <p> Our team works tirelessly to ensure that every product meets our high standards. From the early morning hours when the first loaves of bread go into the oven, to the late-night shifts preparing pastries for the next day, every member of our team plays a vital role in our success. We are grateful for their dedication and proud to have such a talented and passionate group of individuals as part of our family. </p> 
                    <p> As we look to the future, we are excited about the possibilities that lie ahead. Our vision for The Baker’s Corner is one of continued growth and innovation, always staying true to our roots while embracing new opportunities. We are committed to expanding our reach, bringing our delicious baked goods to even more people, and continuing to be a place where the community can come together and celebrate the simple joys of life. </p> 
                    <p> Thank you for being part of our journey. Here’s to many more years of delightful baking and cherished memories. We look forward to serving you and creating sweet moments for you and your loved ones. </p> 
                    <p> Warmly,<br/> The Baker’s Corner Family 🍰✨ </p>
                </Col>
                <Col >
                    
                        <img src="./images/aboutus.png" alt="Our Story" style={{ width: '85%', marginBottom:'30px'}} />
                        <img src="./images/aboutus2.png" alt="Our Story2" style={{ width: '85%', marginBottom:'30px'}} />
                        <img src="./images/aboutus3.png" alt="Our Story3" style={{ width: '85%', marginBottom:'30px'}} />
                        <img src="./images/aboutus4.png" alt="Our Story4" style={{ width: '85%', marginBottom:'30px'}} />
                        <img src="./images/aboutus5.png" alt="Our Story" style={{ width: '85%', marginBottom:'30px'}} />
                        <img src="./images/aboutus6.png" alt="Our Story" style={{ width: '85%', marginBottom:'30px'}} />
                    
                </Col>
            </Row>
        </Container>
    );
}
function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Row className='mt-5 mb-5'>
            <Col className="left">
                <h1 style={{  fontWeight: 'bold' }}>
                    The Baker’s Corner
                </h1>
                <p>
                    Khu đô thị FPT City, Ngũ Hành Sơn, Da Nang 550000, Vietnam
                </p>
                <p>
                    2anhdeptrai@cake.com
                </p>
                <p>
                    +84 123 456 789
                </p>
                <p>
                    IČO: 27062708
                </p>
                <p>
                    Company registered in the Commercial Register kept by the Municipal Court in Da Nang, section ABC, File 8386.
                </p>
            </Col>
            <Col>
                <h2 className='text-center text-pink'>Contact Us</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="bg-dark p-4 rounded">
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="4" controlId="firstName">
                            <Form.Label className="text-white">First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="lastName">
                            <Form.Label className="text-white">Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid last name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="username">
                            <Form.Label className="text-white">Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Username"
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>

                    

                    <Row className='mb-3'>
                        <Form.Group as={Col} md="4" controlId="city">
                            <Form.Label className="text-white">City</Form.Label>
                            <Form.Control required placeholder="City" />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="state">
                            <Form.Label className="text-white">State</Form.Label>
                            <Form.Control required placeholder="State" />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="zip">
                            <Form.Label className="text-white">Zip</Form.Label>
                            <Form.Control required placeholder="Zip" />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button variant="outline-light" type="submit">
                        Send
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}



function App() {
    return (
        <Router>
            <Navbar bg="light" variant="light" expand="lg" className="bg-light-brown">
                <Navbar.Brand>
                    <h1 style={{ color: "#4b2e17" }}>The Baker’s Corner</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" exact className="text-dark-brown">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/menu" className="text-dark-brown">
                            Our Menu
                        </Nav.Link>
                        <Nav.Link as={Link} to="/aboutUs" className="text-dark-brown">
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-dark-brown">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <div className="container mt-4 app-container">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<HomePage />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/aboutUs" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </div>

            <div className="footer">
                <p>© 2023 The Baker’s Corner. All rights reserved.</p>
                <p>Follow us on:</p>
                <div>
                    <a href="#" className="text-dark-brown mx-2">Facebook</a>
                    <a href="#" className="text-dark-brown mx-2">Instagram</a>
                    <a href="#" className="text-dark-brown mx-2">Twitter</a>
                </div>
            </div>
        </Router>
    );
}



export default App;



