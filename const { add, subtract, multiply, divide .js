const { add, subtract, multiply, divide } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Arithmetic Functions', () => {
    test('add() should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 5)).toBe(-5);
        expect(subtract(-3, -2)).toBe(-1);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    test('divide() should return the quotient of two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, 3)).toBe(-2);
        expect(divide(0, 5)).toBe(0);
    });

    test('divide() should return an error message when dividing by zero', () => {
        expect(divide(5, 0)).toBe("Error: Division by zero is not allowed.");
    });
});using System;

public class AdventureGame
{
    public static string PlayGame(int choice, ref int health, ref int score)
    {
        switch (choice)
        {
            case 1:
                score += 10;
                return "You go farther into the forest and discover a treasure chest!";
            case 2:
                health += 20;
                return "You rest by the campfire and regain 20 health.";
            case 3:
                return $"Thanks for playing! Your score: {score}";
            default:
                return "Invalid choice. Try again.";
        }
    }
}