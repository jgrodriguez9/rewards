import { useState } from "react";
import { Row, Col, Card, Spinner, Button, Form, Alert } from 'react-bootstrap';
import getInformation from "../../api/service";
import { calculateResult } from "../../utils/calculateResult";
import RewardPerMonth from "../RewardPerMonth/RewardPerMonth";
import RewardTotal from "../RewardTotal/RewardTotal";

function Dashboard(){
    const [data, setData] = useState({
        status: null,
        message: '',
        data: []
    });
    const [loading, setLoading] = useState(false)
    const [number, setNumber] = useState(0)

    const getData = async() => {
        setData({
            status: null,
            message: '',
            data: []
        })
        setLoading(true)
        try {
            const response = await getInformation(number);
            if(response.status === 200){
                const results = calculateResult(response.data); 
                setData({
                    status: response.status,
                    message: response.message,
                    data: results 
                })
            }
            setLoading(false)
        } catch (error) {
            setData(error)
            setLoading(false)
        }
    }
    return (
        <>
            <Row className="mb-5">
                <Col xs="12" md={{span: 4, offset: 4}}>
                    <Form.Control 
                        type="number" 
                        value={number} 
                        data-testid="input-element" 
                        onChange={e=>setNumber(e.target.value)} 
                    />
                    <Form.Text className="text-muted">
                        Please enter 3 - error handler purpose
                    </Form.Text>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="primary" onClick={getData} data-testid="btn-send-request">Send</Button>
                    </div>                    
                </Col>
            </Row>

            {
                loading && <div className="text-center" data-testid="div-spinner"><Spinner animation="border" variant="primary"/></div>
            }

            {
                data.status === 400 && 
                <Row>
                    <Col xs="12" md={{span: 4, offset: 4}}>
                        <Alert variant="danger">
                            {data.message}
                        </Alert>
                    </Col>
                </Row>                 
            }

            {
                data.status === 200 && 
                <Card>
                    <Card.Header>Reward Point Result</Card.Header>
                    <Card.Body>
                        <RewardPerMonth data={data.data}/>
                        <RewardTotal data={data.data}/>
                    </Card.Body>
                </Card>
            }
        </>
        
    )
    
}

export default Dashboard