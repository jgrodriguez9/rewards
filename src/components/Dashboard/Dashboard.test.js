import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';


test('renders the Dashboard component', () => {
  render(<Dashboard />);
  const textElement = screen.getByText(/Please enter 3 - error handler purpose/i);
  expect(textElement).toBeInTheDocument();
  const btnElement = screen.getByText(/Send/i);
  expect(btnElement).toBeInTheDocument();
});

test('show spinner when click on btn to send the request', () => {
    render(<Dashboard />);
    const btn = screen.getByTestId("btn-send-request");    
    fireEvent.click(btn);
    const spinnerElement = screen.getByTestId("div-spinner");
    expect(spinnerElement).toBeInTheDocument();
});