import { render, screen } from '@testing-library/react';
import RewardTotal from './RewardTotal';

const data = {
    totalPointsByCustomer: [
        {
            name: 'Name Test',
            points: 120
        }
    ]
}


test('renders the RewardTotal and show data', () => {
    render(<RewardTotal data={data} />);
    const textElement = screen.getByText('Name Test');
    expect(textElement).toBeInTheDocument();
  });