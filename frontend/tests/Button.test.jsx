import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Button from "../src/Button";
import '@testing-library/jest-dom';

describe('Button Component', () => {
    test('renders with correct text', () => {
        render(<Button text="Click Me" onClick={() => {}} />);
        
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', async () => {
        const handleClick = jest.fn(); // Create a mock function
        render(<Button text="Click Me" onClick={handleClick} />);
        
        const buttonElement = screen.getByRole('button', { name: /click me/i });
        
        await act(async () => {
            fireEvent.click(buttonElement); // Simulate a click event
        })
        
        
        expect(handleClick).toHaveBeenCalledTimes(1); // Check if the handler was called
    });
});