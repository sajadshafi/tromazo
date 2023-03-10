import { screen, render } from '@testing-library/react';

import Login from './Login';

describe('Render <Login /> component', () => {
  test('Email input renders', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
  test('Password input renders', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test('Submit button renders', () => {
    render(<Login />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
