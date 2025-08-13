import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';

import ContentBlock from '../components/ContentBlock.jsx';

function Home() {
    return <>
        {/* Hero Section */}
        <ContentBlock mt="15" mb="10" content={<>
            <h1 className="display-2 fw-bold text-primary mb-4">Welcome to UCI Wrestling Club</h1>
            <p className="lead fs-4 text-muted mb-5">
                Join the tradition of excellence, discipline, and camaraderie at UC Irvine's premier wrestling club.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact-us">
                    <Button variant="warning" size="lg" className="px-4 py-2">
                        Join Our Team
                    </Button>
                </Link>
                <Link to="/about">
                    <Button variant="outline-primary" size="lg" className="px-4 py-2">
                        Learn More
                    </Button>
                </Link>
            </div>
        </>} />

        {/* About Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">🤼‍♂️ Train Hard</h3>
                            <p className="text-muted">
                                Develop your wrestling skills with experienced coaches and dedicated teammates in a supportive environment.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">🏆 Compete</h3>
                            <p className="text-muted">
                                Represent UCI in tournaments and competitions against other universities throughout California and beyond.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">🤝 Connect</h3>
                            <p className="text-muted">
                                Build lasting friendships and be part of a tight-knit community that supports each other on and off the mat.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Schedule Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-4">Practice Schedule & Events</h2>
                    <p className="text-center text-muted fs-5 mb-4">
                        We practice regularly throughout the week with sessions designed for all skill levels. 
                        From beginner-friendly techniques to advanced competitive training, there's a place for everyone on our mat.
                    </p>
                    <div className="text-center">
                        <Link to="/schedule">
                            <Button variant="primary" size="lg" className="px-5 py-3">
                                View Full Schedule
                            </Button>
                        </Link>
                    </div>
                    <p className="text-center text-muted mt-3 mb-0">
                        Check out our complete practice times, tournament dates, and special events
                    </p>
                </Card.Body>
            </Card>
        </>} />

        {/* Call to Action Section */}
        <ContentBlock mt="5" mb="15" content={<>
            <Card className="bg-warning text-dark border-0 shadow">
                <Card.Body className="p-5">
                    <h2 className="text-center fw-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-center fs-5 mb-4">
                        Whether you're a complete beginner or an experienced wrestler, we welcome all skill levels. 
                        No wrestling experience? No problem! Our welcoming team will help you learn the fundamentals 
                        and develop your skills at your own pace.
                    </p>
                    <Row className="g-3 justify-content-center">
                        <Col xs="auto">
                            <Link to="/contact-us">
                                <Button variant="dark" size="lg" className="px-5 py-3 fw-bold">
                                    Contact Us Today
                                </Button>
                            </Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/schedule">
                                <Button variant="outline-dark" size="lg" className="px-5 py-3">
                                    See When We Meet
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <p className="text-center mt-4 mb-0">
                        Have questions? Want to visit a practice? Interested in joining? 
                        <br />
                        <strong>Reach out to us - we'd love to hear from you!</strong>
                    </p>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default Home;