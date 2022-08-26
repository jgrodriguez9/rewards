import { Row, Col, Table } from 'react-bootstrap';

function RewardPerMonth({data}){


    return (
        <Row>
            <Col xs="12" md="12">
            <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th colSpan={4}><h5>Rewards Points by Month</h5></th>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>Month</th>
                            <th># of Transactions</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.summaryByCustomer.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.month}</td>
                                    <td>{item.numTransactions}</td>
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

export default RewardPerMonth