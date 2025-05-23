# Chicks Gold Front-end / Full Stack Challenge :baby_chick:

## Challenge Description :game_die:

This challenge involves developing a **front-end application** based on a **mockup design**. The application's purpose is to demonstrate design implementation and **will not connect to any API**. The main objective is to showcase skills in user interface development, focusing on **design adaptability, code quality**, and the exclusive use of **pure CSS**.

## Solution Architecture :art:

**ReactJS** was chosen as the main framework for development, as it was considered the option that best demonstrated the developer's capabilities and experience. **JavaScript** was selected as the programming language due to its widespread use and versatility in web development. **Pure CSS** was utilized because, as per the challenge's restriction, CSS frameworks are not allowed. This aims to demonstrate a deep understanding of fundamental web technologies.

### Key Development Considerations and Strategies :triangular_ruler:

- **CSS Layout:** **Flexbox** was prioritized for organizing and aligning elements within components. For the distribution of product cards, **CSS Grid** was chosen, allowing for an adaptive and consistent layout that efficiently managed the number of columns based on screen size.

- **Responsive Design (Desktop-First):** Since the challenge did not provide designs for other screen sizes, a "Desktop-First" approach was adopted. This means the main design was built with desktop screens in mind, and subsequently, **media queries** were used to adapt and optimize the interface for smaller devices, such as tablets and mobiles, demonstrating the ability to create responsive design.

- **Componentization:** Emphasis was placed on creating reusable components. Interface elements that repeated throughout the application (such as *Card*, *Footer*, *Nav*, *Pagination*, *etc.*), or those that could be used in future expansions, were encapsulated into individual components. This strategy improves code readability and maintainability.

- **Mock Data Handling:** For product cards and other sections of the application, mock data (as seen in *dummyData.js*) was used. This was done to simulate interaction with a real data source and demonstrate the ability to work with information coming from databases or APIs, processing and rendering it effectively in the user interface.

- **Dynamic Image Management:** A function was implemented to render images dynamically, avoiding the need to import each image individually and optimizing visual resource management.

- **Global State Management (Context):** A context (as observed in *CartContext.js*) was implemented to manage the state of products added to the shopping cart. This ensures that information persists and is available throughout the application.

- **File Structuring:** The project's file structure combines organization by type (e.g., components, pages, helpers) with organization by feature within those types (e.g., *card/*, *footer/* inside *components*).

## Live Demo :tv:

The application was deployed on GitHub Pages for a live demonstration, accessible via this [Link](https://deibysprogrammer.github.io/chicksgold-page/)

## Getting Started :rocket:

### Prerequisites :page_facing_up:

- Node.js version 22 or higher. [Node.js](https://nodejs.org/en/)
- A code editor. [Visual Studio Code](https://code.visualstudio.com/) was used for this project.

### Steps :hammer:

To get this application running in a local environment, follow these steps:

1. **Obtain the Source Code:**

- **Clone the Repository:** Open a terminal or command prompt, navigate to your desired project folder, and execute the following commands:
``` bash
git clone https://github.com/deibysprogrammer/chicksgold-page.git
cd chicksgold-page
```
- **Download Directly:** If preferred, you can download the code as a *.zip* file from the repository page on GitHub and then extract it into your chosen folder.

2. **Install Dependencies:**

From the project root (the folder where *package.json* is located), execute the following command in your terminal:
``` bash
npm install
```

3. **Start the Application:**

Once dependencies are installed, start the application in development mode with:
``` bash
npm start
```
This will start the application in development mode. Open your browser and go to  [http://localhost:3000](http://localhost:3000) (or the port indicated in your console).

## Author :black_nib:
Deibys Chávez - [deibysprogrammer](https://github.com/deibysprogrammer)
