# Default Note.md

# Tesing in React

<!--
    test(name, function, timeout)
    name: use to identify the test
    function: expectations to test
    timeout: (optional default value is 5 seconds) how log to wait before aborting the test

    render, screen : import from the react testing library
    test , expect : method from the jest
 -->

## TDD : Test Driven Development

- Software development process where you write tests before writing software code.

1. Creates tests functionality of a specific feature
2. Write software code tha run the tests successfully when re-executed
3. Refactor the code for optimization while ensuring the tests continue to pass

## Jest watch mode

- npm test

## filtering test

<!--
    test.only() : when multiple test case in one file this test case run
    test.skip() : this will not run in the test file

    ////////////////////////////////////////////////////
    describe(name, function)
    name: group name
    function: expectations to test

    nested describe is possible

    describe.only() : when multiple test case in one file this test case run
    describe.skip() : this will not run in the test file

 -->

<!-- ******************************* -->

## file name conventions

<!--
    filename.test.js
    filename.test.tsx

    filename.spec.js
    filename.spec.js

    inside __tests__ folders
    filename.js
    filename.tsx

    alternative for test method
        test(name, function, timeout)
        it(name, function, timeout)

        test.only()  = fit()
        test.skip()  = xit()

 -->

<!-- ************************************** -->

## Code coverage

- this is a metric help to understand how much tested.
  Common Metric 1. Statement coverage: how many statements have been excuted 2. Branches coverage: how many Branches have been excuted 3. Function coverage: how many function have been called 4. Line coverage: how many lines of source code tested

- add new script in package.json
  "coverage" : "yarn test --coverage --watchAll"

- to add or remove some test folder here all test file are inside of the src/compoents/ folder
<!--
  "coverage": "yarn test --coverage --watchAll
  cosider this folder/files =>
  --collectCoverageFrom='src/components/**/*.{ts,tsx}'"

  not cosider this folder/files =>
  --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'
  -->

- add Coverage Threshold (add package.json)
  "jest": {
  "coverageThreshold": {
  "global": {
  "branches": 80, // fail if branches < 80%
  "functions": 80, // fail if functions < 80%
  "lines": 80, // fail if lines < 80%
  "statements": -10 // fail if statements are uncover > 10%
  }
  }
  }

- run use comment => npm run coverage

<!-- *************************************** -->

## Assertions

<!--
    expect(value)
    value: our code produce value
 -->

### Matchers

- expect(value).MathchersName()

#### Number

1. toBe(4) // value == 4 (this is only valid integers)
2. toEqual(4) // value == 4 (this is only valid integers)
3. toBeCloseTo(5.5) // value == 5.5 (this is for floating poits)

4. toBeGreaterThan(4) // value > 4
5. toBeGreaterThanOrEqual(4.5) // value >= 4.5
6. toBeLessThan(5) // value < 5
7. toBeLessThanOrEqual(5) // value <= 5

#### String

- inside toMatch method we can give string or Regx

1. toMatch(/Kaja/)
2. not.toMatch(/Kaja/)

#### Arrays and iterables

const values = [
'Kaja',
'Arshath',
'Jathurshan',
'Gayan',
'Niroshan',
];

expect(values).toContain('Kaja');
expect(new Set(values)).toContain("Kaja");

1. toContain('Kaja')

#### Exceptions

- check whether the fuction throw an error
  function testFunction() {
  throw new Error('you are using the wrong JDK!');
  }
  expect(() => testFunction()).toThrow();
  expect(() => testFunction()).toThrow(Error);

// You can also use a string that must be contained in the error message or a regexp
expect(() => testFunction()).toThrow('you are using the wrong JDK');
expect(() => testFunction()).toThrow(/JDK/);

// Or you can match an exact error message using a regexp like below
expect(() => testFunction()).toThrow(/^you are using the wrong JDK$/); // Test fails
expect(() => testFunction()).toThrow(/^you are using the wrong JDK!$/); // Test pass

1. toThrow()

<!-- ******************************* -->

## What to test and not to test

### to test

1. Component renders
2. Component renders with props
3. Component renders in different states
4. Component reacts to events

### not to test

1. Implementation details
2. Third party code (eg: mui)
3. Code not imporatant from user point of view

<!-- ***************************** -->

## RTL Queries

- Finding an element rendered by the component

/_find single element on the page_/

1. getBy..
2. queryBy..
3. findBy..

/_find multiple element on the page_/

1. getAllBy..
2. queryAllBy..
3. findAllBy..

<!-- suffix .. can be, -->

1. LabelText
2. placeHolderText
3. Text
4. DisplayValue
5. AlterText
6. Title
7. TestId

### getBy

- class of queries this return matching node for a query

#### 1. getByRole

to add a role => role = 'button'

input text => role -> textbox
input checkbox => role -> checkbox
input radio => role -> radio

select => role -> combobox
textarea => role -> textbox

eg:
const submitButtonElement = screen.getByRole("button");
expect(submitButtonElement).toBeInTheDocument();

- getByRole options

  1. hidden?: boolean = false,
  2. name?: TextMatch,
  3. description?: TextMatch,
  4. selected?: boolean,
  5. checked?: boolean,
  6. pressed?: boolean,
  7. suggest?: boolean,
  8. current?: boolean | string,
  9. expanded?: boolean,
  10. queryFallbacks?: boolean,
  11. level?: number,

#### 2. getByLabelText

this will search the label matches the given text

- getByLabelText options
  1. selector?: string ,

#### 3. getByPlaceholderText

this will search the placeholder matches the given text

#### 4. getByText

this will search the all element text matches the given text

used to find,
i. paragraph
ii. div
iii. span

#### 5. getByDisplayValue

this will return the input, textarea or select element has the matching display value
i. input
ii. textarea
iii. select

#### 6. getByAltText

this will return the element has the given alt text
i. img
ii. input
iii. area
iv. custom HTML elements

#### 7. getByTitle

this will return the element has the given title attribute

#### 8. getByTestId

this will return the element has the matching data-testid attribute

#### Priority order for queries

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue

6. getByAltText
7. getByTitle
8. getByTestId

#### getAllBy

1. getAllByRole
2. getAllByLabelText
3. getAllByPlaceholderText
4. getAllByText
5. getAllByDisplayValue

6. getAllByAltText
7. getAllByTitle
8. getAllByTestId

<!-- *********************** -->

### TextMatch

- this represents a type which can be either a,

1. string
2. regex
3. function

#### string

<!-- <div> Hello World </div> -->

// full string match
screen.getByText('Hello World')

// substring match
screen.getByText('llo Worl', {exact:false})

// ignore case
screen.getByText('hello world', {exact:false})

#### regex

<!-- <div> Hello World </div> -->

// substring match
screen.getByText(/World/)

// substring match, ignore case
screen.getByText(/world/i)

// full string match, ignore case
screen.getByText(/^hello world$/i)

#### function

<!-- <div> Hello World </div> -->

(content?: string, element?: Element | null) => boolean

screen.getByText((content) => content.startsWith('Hello'))

### queryBy

- return the matching node for a query and return null if no elements match
- useful for an element not present
- throws an error if more than one match is found

#### queryAllBy

- return an array of all matching nodes for a query and return empty array if no elements match

### findBy

- returns a promise which resolves to an element is found otherwise promise is rejected(default timeout is 1000ms)

- we need to use keyword: await

#### findAllBy

- returns a promise which resolves to an array of elements are found otherwise promise is rejected(default timeout is 1000ms)

<!--
await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,  // change the default timeout value for findBy
      }
    );
-->

## Manual Queries

<!--
- we can use regular query selector DOM API to find elements

  const {container} = render (<MyComponent />)
  const foo = container.querySelector('[data-foo = "bar"]')
-->

## Debugging

<!--
  screen.debug()
or

  const view = render(<MyComponent >);
  logRoles(view.container);
-->

## User Interactions

- click using mouse or keypress
- user-event : this library is used (recommended)
- fireEvent : alternative for user-event

### Pointer Interactions

- we need to import **import user from "@testing-library/user-event"**
- we need to use **async** and **await**

<!--
test.skip("render a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
  });
-->

#### Convenience APIs

- this is recommended

##### mouse click

1. click()
2. dblclick()
3. tripleclick()

##### mouse movement

1. hover()
2. unhover()

#### Pointer APIs( low level APIs)

<!--
1. pointer({keys: '[MouseLeft]'}) // left mouse button si simulated
2. pointer({keys: '[MouseLeft][MouseRight]'}) // simulate left click  flow by right click
3. pointer('[MouseLeft][MouseRight]')

// press button without release use '>'
4. pointer ('[MouseLeft>]')

// relese the previously pressed button  use '/'
4. pointer ('[/MouseLeft]')

-->

### Keyboard Interactions

<!--
test("render a count of 10 after clicking the set buutton", async() =>{
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // number input field
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);    // this pass
    });
 -->

#### utility API

1. type()
2. clear() // clear the editable element
3. selectOptions()
4. deselectOptions()
5. upload() // file upload

#### Convenience API

1. tab()

#### Clipboard APIs

1. copy()
2. cut()
3. paste()

#### Keyboard APIs (low level APIs)

keyboard('foo') // translates to : f,o,o
keyboard('{Shift>}A{/Shift}') // translates to : shift(down), A, shift(up)

## Providers

<!--
test MUI theme
  test("render component", () => {

    render(<MuiMode />, {
      wrapper: AppProviders,
    });

    const headingElement = screen.getByRole("heading");
    /**
     * test fail if the render method don''t have the "wrapper : AppProviders" but this test pass because of we added the "wrapper : AppProviders" argument
     */
        expect(headingElement).toHaveTextContent("dark mode");
  });

 -->

### custom render

<!--
  import { render, RenderOptions } from "@testing-library/react";
  import { ReactElement } from "react";

  // this is our custom wrapper component
  import { AppProviders } from "./components/Providers/AppProviders";

  const CustomRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">
  ) => {
    render(ui, { wrapper: AppProviders, ...options });
  };

  export * from "@testing-library/react";
  export { CustomRender as render };

 -->

## Custom React Hooks

- start with **use**
<!--
const UseCounter = ({ initialCount = 0 }: useCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

  test("should render the initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
    // expect(result.current.count).not.toBe(0); // this fail because of count value is 0
  });

   test("should accept and render the initial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 100,
      },
    });

    expect(result.current.count).toBe(100);
  });

  -->

### act utlity

<!--
 test("should increment the count", () => {
    const { result } = renderHook(UseCounter);
    // result.current.increment(); // can't directly use
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(UseCounter);
    // result.current.decrement(); // can't directly use
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  -->

## Mocking Function

- function **jest.fn()**
<!--
  test("handlers are called", async () => {
    // without below 3 lines we can't call function in the props
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);

  });
 -->

## mocking http request

mswjs.io : use to api mocking

- install MSW: **npm install msw --save-dev**
- create folder **/src/mocks**
- create file **server.ts** from **mocks folder**
- inside server.js file

<!--
  import { setupServer } from 'msw/node'
  import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
-->

- modify the **setupTests.ts** file

<!--
 import { server } from './mocks/Server'
 // Establish API mocking before all tests.
 beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
-->

### error handle in MSW

<!--
test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
 -->

## Static analysis testing

- process of verifyung that our code meet certain expections without actually running it

  - ensure consistent style and formating
  - check for common mistakes and possible bugs
  - limit the complexity of code
  - verify type consistency

- this check code is writte well or not

- testing tools
  1. TypeScript
  2. ESlint
  3. Prettier
  4. Husky
  5. lint-staged

## ESlint
