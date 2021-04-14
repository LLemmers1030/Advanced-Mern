import GoogleMap from './GoogleMaps'
import "antd/dist/antd.css";
import { Collapse, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Use state is used for the navbar
import React, { useState } from 'react';
// Houses
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
import home4 from '../images/home4.jpg';
import home5 from '../images/home5.jpg';
import home6 from '../images/home6.jpg';
import home7 from '../images/home7.jpg';
import home8 from '../images/home8.jpg';
import home9 from '../images/home9.jpg';
import home10 from '../images/home10.jpg';
import home11 from '../images/home11.jpg';
import home12 from '../images/home12.jpg';
import home13 from '../images/home13.jpg';
import home14 from '../images/home14.jpg';
import home15 from '../images/home15.jpg';
import home16 from '../images/home16.jpg';
import home17 from '../images/home17.jpg';
import home18 from '../images/home18.jpg';
import home19 from '../images/home19.jpg';

const { Panel } = Collapse;

const HouseListings = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="App">
            {/* <Navbar toggle={toggle} /> */}

            {/* <h1 className="header">Listings</h1> */}
            <div className="container-1">

                {/* Maybe instead of div use Col/Row from ant design */}
                <div className="split col-1">
                    <div>
                        <h1 className="listings-header">Available Listings</h1>
                    </div>

                    <Collapse className="collapse-main" accordion span={12}>
                        <Panel className="odd" header="House A" key="1">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 2 Bathroom<br /> $800/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home1} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House B" key="2">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1.5 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home2} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House C" key="3">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home3} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House D" key="4">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1.5 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home4} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House E" key="5">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home5} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 1" key="6">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $675/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home6} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 2" key="7">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home7} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 5" key="8">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home8} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 6" key="9">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $625/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home9} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 7" key="10">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $675/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home10} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 8" key="11">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 2 Bathroom<br /> $750/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home11} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 10" key="12">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home12} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 11" key="13">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $625/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home13} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 12" key="14">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home14} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 13" key="15">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home15} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 14" key="16">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 1.5 Bathroom<br /> $750/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home16} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 15" key="17">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home17} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 16" key="18">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $500/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home18} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 17" key="19">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 2 Bathroom<br /> $700/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home19} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                    </Collapse>
                </div>

                <div className="split col-2">
                    <GoogleMap />
                </div>

            </div>
            {/* <Footer /> */}

        </div>
    )
}

export default HouseListings;