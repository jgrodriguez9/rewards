import { Row, Col, Table } from 'react-bootstrap';

function RewardTotal({data}){

    return (
        <Row className='mb-2 mt-4'>
            <Col xs="12" md="12">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th colSpan={2}><h5>Rewards Points Total</h5></th>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.totalPointsByCustomer.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.points}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )

}

export default RewardTotal