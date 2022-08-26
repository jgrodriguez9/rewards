import { render, screen } from '@testing-library/react';
import RewardPerMonth from './RewardPerMonth';

const data = {
    summaryByCustomer: [
        {
            name: 'Name Test',
            month: 'May',
            numTransactions: 3,
            points: 120
        }
    ]
}


test('renders the RewardPerMonth and show data', () => {
    render(<RewardPerMonth data={data} />);
    const textElement = screen.getByText('Name Test');
    expect(textElement).toBeInTheDocument();
  });