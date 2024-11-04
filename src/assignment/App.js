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

function Quiz() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleOption = (option) => {
        dispatch({ type: 'SELECT_OPTION', payload: option });
    }

    const handleNextQuestion = () => {
        dispatch({ type: 'NEXT_QUESTION' });
    }

    const handleRestart = () => {
        dispatch({ type: 'RESTART_QUIZ' });
    }

    if (state.showScore) {
        return (
            <Container>
                <Row className='bg-dark text-white mt-3 p-3 rounded'>
                    <Col >
                        <h2>Your score is {state.score}/{state.questions.length}</h2>
                        <button onClick={handleRestart} className="btn btn-outline-light">Restart Quiz</button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='bg-dark text-white mt-3 p-3 rounded'>
                <Col >
                    <h2>Question {state.questions[state.currentQuestion].id}</h2>
                    <h3>{state.questions[state.currentQuestion].question}</h3>
                    <Form>
                        <table className="table table-dark table-bordered">
                            <tbody>
                                {
                                    state.questions[state.currentQuestion].options.map((option, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    label={option}
                                                    name="quizOption"
                                                    id={`option-${index}`}
                                                    onChange={() => handleOption(option)}
                                                    checked={state.selectedOption === option}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Form>
                    <div>
                        <button onClick={handleNextQuestion} className="btn btn-outline-light" disabled={!state.selectedOption}>Next</button>
                    </div>
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
            <Col>
                <h2 className='text-center text-white'>Contact Us</h2>
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

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label={<span className="text-white">Agree to terms and conditions</span>}
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button variant="outline-light" type="submit">
                        Submit form
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
                        <Nav.Link as={Link} to="/quiz" className="text-dark-brown">
                            Quiz
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
                        <Route path="/quiz" element={<Quiz />} />
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

