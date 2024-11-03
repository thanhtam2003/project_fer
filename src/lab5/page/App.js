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

            {/* Welcome Section */}
            <div className="welcome-section text-center my-4">
                <h2>Welcome to Our Site!</h2>
                <p>Explore amazing content, find new recipes, and stay updated with the latest news. Join us for an exciting experience!</p>
            </div>

            {/* Feature Section */}
            <Row className="feature-section mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="./images/feature1.jpg" />
                        <Card.Body>
                            <Card.Title>Featured Item 1</Card.Title>
                            <Card.Text>Learn more about this amazing item.</Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="./images/feature2.jpg" />
                        <Card.Body>
                            <Card.Title>Featured Item 2</Card.Title>
                            <Card.Text>Discover what makes this special.</Card.Text>
                            <Button variant="primary">Explore</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="./images/feature3.jpg" />
                        <Card.Body>
                            <Card.Title>Featured Item 3</Card.Title>
                            <Card.Text>Check out our latest addition.</Card.Text>
                            <Button variant="primary">Find Out More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Newsletter Signup */}
            <div className="newsletter-section mt-5 text-center">
                <h3>Stay Updated!</h3>
                <p>Subscribe to our newsletter for the latest updates and exclusive content.</p>
                <Form inline className="d-flex justify-content-center">
                    <Form.Control type="email" placeholder="Enter your email" className="mr-2" />
                    <Button variant="success">Subscribe</Button>
                </Form>
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section my-5">
                <h3>What Our Users Say</h3>
                <blockquote className="blockquote text-center">
                    <p>"This site has changed the way I find recipes! The content is top-notch and easy to follow."</p>
                    <footer className="blockquote-footer">Jane Doe, Food Enthusiast</footer>
                </blockquote>
            </div>

            {/* CTA Banner */}
            <div className="cta-banner text-center bg-info text-white py-4">
                <h4>Join Our Community!</h4>
                <p>Sign up now and be a part of a community that shares your passion for food, news, and much more.</p>
                <Button variant="light">Get Started</Button>
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
                        <Card style={{ width: '18rem', height: '100%' }}>
                            <Card.Img variant="top" src={news.image} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    {news.description}
                                </Card.Text>
                                <Button variant="outline-dark">Read more</Button>{' '}
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
                <Row className='bg-light text-black mt-3 p-3'>
                    <Col >
                        <h2>Your score is {state.score}/{state.questions.length}</h2>
                        <button onClick={handleRestart}>Restart Quiz</button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='bg-light text-black mt-3 p-3'>
                <Col >
                    <h2>Question {state.questions[state.currentQuestion].id}</h2>
                    <h3>{state.questions[state.currentQuestion].question}</h3>
                    <Form>
                        <table className="table table-bordered">
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
                        <button onClick={handleNextQuestion} disabled={!state.selectedOption}>Next</button>
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Form.Group as={Col} md="4" controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Please provide a valid last name.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="username">
                            <Form.Label>Username</Form.Label>
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
                            <Form.Control required placeholder="City" />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="state">
                            <Form.Control required placeholder="State" />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="zip">
                            <Form.Control required placeholder="Zip" />
                            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
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
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <h1 style={{ color: "green" }}>The Baker’s Corner</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/menu">
                            Our Menu
                        </Nav.Link>
                        <Nav.Link as={Link} to="/quiz">
                            Quiz
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<HomePage />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}
export default App;