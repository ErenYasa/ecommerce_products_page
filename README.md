1000 products can be filtered by color, brand, and stock status, and at the same time, they can be sorted by "ascending price," "descending price," or "latest upload date." For the potential need of link sharing by the user, I tried to keep the user experience (UX) at a high level by writing the selected filter and sorting values into the URL.

### Follow the steps below to run locally:

1 - `git clone https://github.com/hiring11/FrontendDevelopment-ErenYasa.git`

2 - In the `api` folder, install the packages using the `npm install` command and run the service with `npm start`.

3 - Then, in the `client` folder, install the packages using the `npm install` command. Then run the app with the command `npm run dev`.

After these steps, the application will start running at http://localhost:3005. The API will start running at http://localhost:3004.

### Design

By using styled-components, I ran the design process in a creative and dynamic way. I tried to present a user interface focused on user experience (UX). To make the project adaptable to style and design changes easily, I created a centralized structure and separated the colors into three main options: "primary," "secondary," and "dark." You can easily switch by giving "kind (color type)" to components (button, checkbox, etc.).

Additionally, by assigning "variant (button type)" as "default," "outline," or "ghost" to the button component, you can take advantage of button variety according to the situation.

Moreover, you can adjust the sizes of components like checkbox and toggle switch by passing the "size" prop. I managed all these values by storing them in a global type (types/index.ts) file to make them easily manageable. In this way, you can see all the types in the project and easily change the theme colors or component appearances.

### Development

To improve the code quality and maintainability of the application, I used Typescript and tools like Eslint and Prettier. I aimed to minimize dependencies within the application by keeping the architecture as component-based as possible and breaking down components into smaller parts. I tried to design a flexible project considering sustainability and scalability as much as possible. During the development, I created a board (https://github.com/users/ErenYasa/projects/10/views/1) and managed the to-do list and process on this board.

### State Management

I developed two different slices using Redux-toolkit:

App: I track the general loading state of the application, products, currently displayed products, available filters (selectable brand, color), and active filters here.
Modal: I handle opening and closing modals here. This way, I can open multiple modals simultaneously.

### API Call

For requests, I integrated Redux-toolkit Query with Redux-toolkit.
