def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def percentage(a, b):
    if b == 0:
        return "Error: Division by zero is not allowed"
    return (a / b) * 100

def main():
    """
    A simple calculator program that allows the user to perform basic arithmetic operations.
    The program displays a menu with the following options:
    1. Add - Adds two numbers.
    2. Subtract - Subtracts the second number from the first.
    3. Multiply - Multiplies two numbers.
    4. Percentage - Calculates the percentage of the first number relative to the second.
    The user is prompted to select an option by entering a number (1/2/3/4). 
    If the input is valid, the user is then prompted to enter two numbers, 
    and the corresponding operation is performed. The result is displayed to the user.
    If an invalid choice is entered, the program displays an error message.
    Note:
    - The functions `add`, `subtract`, `multiply`, and `percentage` are assumed to be defined elsewhere in the code.
    """
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Percentage")
    
    choice = input("Enter choice (1/2/3/4): ")
    
    if choice in ['1', '2', '3', '4']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()