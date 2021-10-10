import axios from 'axios';
import CountUp from 'react-countup';
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import CountryPicker from './CountryPicker';
import Analytics from './Analytics';

function Cards() {

    const [coviData, setCoviData] = useState({});
    const [country, setCountry] = useState('');

    useEffect(() => {

        async function getCovidData() {

            let endPoint = '';

            if (country) {
                endPoint = `https://covid19.mathdro.id/api/countries/${country}`
            } else {
                endPoint = 'https://covid19.mathdro.id/api'
            }

            let { data } = await axios.get(endPoint);
            setCoviData(data);
        }

        getCovidData();

    }, [country]);

    function getCountry(val) {
        setCountry(val);
    }

    return (
        <>
            <div className="d-flex justify-center ml-5 mt-5">
                <Container lg={4} className="mt-5 ">
                    <Row>
                        <Col>
                            <Card style={{ width: '25rem', border: "1px solid blue" }} className="p-5">

                                <Card.Body>

                                    <Card.Title style={{ fontSize: "2.5rem", whiteSpace: "nowrap" }}>Total Recovered</Card.Title>
                                    <p style={{ fontSize: "2.5rem", marginBottom: "2rem", marginTop: "2rem", fontWeight: "600", color: "blue" }}>
                                        <CountUp
                                            end={coviData?.recovered?.value}
                                            duration={5}
                                        />
                                    </p>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '25rem', border: "1px solid Green" }} className="p-5">

                                <Card.Body>

                                    <Card.Title style={{ fontSize: "2.5rem", whiteSpace: "nowrap" }}>Total Confirmed</Card.Title>
                                    <p style={{ fontSize: "2.5rem", marginBottom: "2rem", marginTop: "2rem", fontWeight: "500", color: "green" }}>
                                        <CountUp
                                            end={coviData?.confirmed?.value}
                                            duration={5}
                                        />

                                    </p>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '25rem', border: "1px solid Red" }} className="p-5">

                                <Card.Body>

                                    <Card.Title style={{ fontSize: "2.5rem" }}>Total Deaths</Card.Title>
                                    <p style={{ fontSize: "2.5rem", marginBottom: "2rem", marginTop: "2rem", fontWeight: "600", color: "red" }}>
                                        <CountUp
                                            end={coviData?.deaths?.value}
                                            duration={5}
                                        />


                                    </p>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <CountryPicker getCountry={getCountry} />
            <Analytics analyticData={coviData} />
        </>
    )
}

export default Cards
