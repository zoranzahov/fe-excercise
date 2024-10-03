# fe-excercise

## Instalation and start
1. First inside the shop and catalog folders, separately run "npm install".
2. To run both applications, in both respective directories in the terminal run "npm run dev".
3. In order to run tests, in both respective directories in the terminal run "npm test".


## Brief explanation on the approach for this exercise

1. Module Federation
I set up Webpack Module Federation to enable sharing components between App1(Shop) and App2(Catalog). I configured both applications' next.config.js files to expose and consume shared components.

2. API Setup
In Shop, I created a simple API using Next.js Pages API by defining an endpoint in the pages/api directory. The API returned static data (car ads). In Catalog, I fetched this API using fetch inside useEffect to retrieve the data and displayed it on a page. This demonstrates how data can be consumed between micro-frontends, showcasing communication between the applications.

3. Linting and Formatting
For linting and formatting, I used ESLint for code linting and Prettier for consistent code formatting across both Shop and Catalog. This ensures that both projects maintain clean and uniform code, improving readability and reducing potential bugs. Prettier was used in conjunction with ESLint to format the code automatically on save.

4. Shared Components
Shop exposed multiple shared UI components, such as a ItemCard, BasedLayout..., using Module Federation. In Catalog, I imported those shared components dynamically and rendered it within one of its pages. This demonstrated how to share UI elements across micro-frontends.

5. Dynamic Layout with HOC
In Shop, I implemented two pages with different layouts using Higher-Order Components (HOCs). I created a dynamic layout system by writing a HOC that accepted a layout component and applied it based on the page being rendered. Each page simply wraps itself in the appropriate HOC.

6. Styled Components & React MUI
For custom styling in Shop, I used Styled Components to define scoped, reusable styles for a UI component. This ensures that styles are component-specific and do not leak globally. In Catalog, I implemented a UI component using React MUI to demonstrate integration with a UI library.

7. Unit Testing
I set up unit testing in both applications using Jest and React Testing Library. For shared components, I wrote tests to ensure they rendered correctly. For the API functionality, I tested that the API endpoint returned the expected data. Tests were organized by features, with mocks and assertions covering key functionality.

