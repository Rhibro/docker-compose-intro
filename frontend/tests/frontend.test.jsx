import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App';

// Mock fetch globally
beforeAll(() => {
  global.fetch = vi.fn((url) => {
    if (url.endsWith('/api')) {
      return Promise.resolve({
        json: () => Promise.resolve({ message: 'Hello from API' }),
      });
    }
    if (url.endsWith('/api/data')) {
      return Promise.resolve({
        json: () => Promise.resolve({ id: 123 }),
      });
    }
  });
});

afterAll(() => {
  global.fetch = undefined; // just remove the mock
});

test('renders initial loading message', () => {
  render(<App />);
  expect(screen.getByText(/Laddar API-meddelande/i)).toBeInTheDocument();
});

test('sends data to API on button click', async () => {
  render(<App />);
  const button = screen.getByText(/Skicka data till API/i);
  fireEvent.click(button);

  await waitFor(( => {
    const statusMessage = screen.getByText(/Data sparad med ID: 123/i);
    expect(statusMessage).toBeInTheDocument();
  });
});