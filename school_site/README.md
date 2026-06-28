# School Website Web Portal

Hi! 👋
Welcome to the repository of this School Website Web Portal project.

This project was built to create a modern, responsive, and user-friendly school website with a clean design and practical real-world functionality. The main goal was to provide a smooth user experience while keeping the website fast, interactive, and visually appealing.

## 🚀 About the Project

This is a full-stack web portal developed to manage and showcase different sections of a school website in a professional way.

One of the key highlights of this project is the smart form integration system. Instead of using a traditional database for handling form submissions, the website is connected directly with Google Sheets using Google Apps Script.

Whenever a user submits an Admission or Contact form:

* the data is automatically stored in Google Sheets
* an instant email notification is sent
* and the information can be managed easily in one place

This approach keeps the system lightweight, simple, and efficient.

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion

These technologies help create a smooth, modern, and responsive user interface with animations and fast performance.

### Backend

* Node.js
* Express.js

### Authentication

* JWT
* bcryptjs

Used for secure login and authentication systems.

### Data Storage & Integration

* Google Sheets API
* Google Apps Script

## ✨ Main Features

* Modern and responsive UI
* Smooth scrolling and animated transitions
* Premium dark and gold theme
* Admission and contact forms integrated with Google Sheets
* Instant email notifications for form submissions
* Secure admin and user login system
* Dynamic API routes for:

  * News
  * Faculty
  * Gallery
  * Courses
* Fast and optimized performance

## 💻 How to Run the Project Locally

### 1. Clone the Repository

Download or clone the repository to your local machine.

### 2. Install Dependencies

```bash id="zv7xgf"
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```env id="tznl4t"
GOOGLE_SHEET_WEBAPP_URL="your_google_script_url_here"
```

You can check the `GOOGLE_SHEET_SETUP.md` file for detailed setup instructions.

### 4. Start the Development Server

```bash id="9x4vct"
npm run dev
```

After starting the server, open:

```text id="rjlwm5"
http://localhost:3000
```

in your browser.

## 🚢 Deployment

This project is production-ready and can be deployed easily on platforms like:

* Render
* Railway

Simply connect the GitHub repository, configure the environment variables, and deploy the application.

## 📌 Final Note

Feel free to explore the code, customize the project, and use it as inspiration for your own web applications and full-stack projects. 🚀
