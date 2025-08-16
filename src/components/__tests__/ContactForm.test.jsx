import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('ContactForm disabling', () => {
  afterEach(() => {
    jest.clearAllMocks();
    delete window.grecaptcha;
  });

  test('does not submit when reCAPTCHA is not loaded', () => {
    render(<ContactForm />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('prevents additional submits while submitting', async () => {
    window.grecaptcha = { execute: jest.fn().mockResolvedValue('token') };
    const pending = new Promise(() => {});
    axios.post.mockReturnValue(pending);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: 'Test' },
    });
    fireEvent.change(screen.getByLabelText(/correo electr\u00f3nico/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/mensaje/i), {
      target: { value: 'Hola' },
    });

    const button = await screen.findByRole('button', { name: /enviar/i });
    expect(button).toBeEnabled();

    fireEvent.click(button);
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(button).toBeDisabled());

    fireEvent.click(button);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
