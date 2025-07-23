# Test Calculator
## Cypress testing suit for calculator

<br>
1. Installation (https://docs.cypress.io/app/get-started/install-cypress):

`npm install cypress --save-dev`

This will install latest cypress version.<br>
Because the latest version doesn't support my OS version, i installed earlier version which is committed in my repository.<br><br>
Due to cypress limitation the test files are under:<br>
`cypress/integration/??ShaiCalculator*.js`

2. Running the test suit:

`npx cypress run`

If you want to run without Performance test, you can run this:
`npm run noPerf`
<br><br>
3. Tests Summery:

| **#** | **Test Name**                     | **Test Description**                                                           | **Test Category**           |
| ----: | --------------------------------- | ------------------------------------------------------------------------------ | --------------------------- |
|     1 | All Digits Display                | Verifies all digit buttons (0–9) update result                  | UI Functionality / Digits   |
|     2 | Addition with Clear Midway        | Verifies clear (`AC`) resets calculator mid-operation, then performs 2 + 7 = 9 | UI + Arithmetic             |
|     3 | Subtraction: 9 − 6 = 3            | Basic subtraction using unique digits                                          | Arithmetic - Subtraction    |
|     4 | Multiplication: 3 × 4 = 12        | Basic multiplication using unique digits                                       | Arithmetic - Multiplication |
|     5 | Division: 8 ÷ 5 = 1.6             | Basic division using unique digits                                             | Arithmetic - Division       |
|     6 | Percentage: 33% of 1,000,000      | Uses `btn-percent` to calculate 33%                                            | Arithmetic - Percentage     |
|     7 | Negative Subtraction: -999−999    | Uses `btn-plus-minus` to handle negative numbers                               | Arithmetic - Negative       |
|     8 | Decimal Addition: 1.5 + 2.3 = 3.8 | Verifies decimal support using `btn-decimal`                                   | Arithmetic - Decimal        |
|     9 | Chained Operation: 2 + 3 × 4 | Validates behaviour with multiple operators in sequence     | Arithmetic - Chained Expression |
|     10 | Ignore Multiple Decimals      | Ignore entry of more than one decimal in a number        | Input Validation - Decimal      |
|     11 | Leading Operator Handling    | Tests if starting with an operator is handled or corrected | Input Validation - Operators    |
|     12 | Long Expression Support      | Validates UI and logic for long input like `1+2+3+...+9+0` | UI + Arithmetic - Stress Test   |
|     13 | Randomised Performance with Valid Result | Runs 100 calculations using random digits and random operators; ensures numeric output | Performance + Random Input      |
