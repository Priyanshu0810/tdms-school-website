# Thelma David Memorial School - Web Portal

Hi there! 👋 Welcome to the repository for the **Thelma David Memorial School** website. I built this project to create a modern, fast, and interactive web experience for a school, focusing on both great design and practical functionality.

## 🚀 About the Project

I wanted to build a full-stack school portal that not only looks premium but also handles real-world tasks like admission inquiries and contact requests seamlessly. 

Instead of relying on a heavy database for simple form submissions, I integrated it directly with **Google Sheets**. So whenever someone fills out the Admission or Contact form on the site, the data automatically goes into my Google Sheet and sends me an email notification instantly!

### 🛠️ Built With

I used a modern tech stack to build this:
- **Frontend:** React.js, Vite, Tailwind CSS (for that sleek styling), and Framer Motion (for smooth animations).
- **Backend:** Node.js & Express.js
- **Database/Storage:** Google Sheets API (via Google Apps Script)
- **Authentication:** JWT & bcryptjs (for secure admin/student login)

## ✨ Key Features

- **Dynamic UI:** Smooth scrolling, animated page transitions, and a premium "Dark/Gold" color theme.
- **Google Sheets Integration:** Custom Google Apps Script webhook to capture form submissions directly into a spreadsheet and trigger email alerts.
- **Admin & Student Portals:** Secure JWT-based login system for different user roles.
- **API Endpoints:** Built-in Express routes to serve data for News, Faculty, Gallery, and Courses.

## 💻 How to Run This Locally

If you want to test my code on your own machine, follow these steps:

1. **Clone the repository** and navigate into the project folder.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Google Sheets Web App URL (check the `GOOGLE_SHEET_SETUP.md` file for instructions on how I set this up!).
   ```env
   GOOGLE_SHEET_WEBAPP_URL="your_google_script_url_here"
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## 🚢 Deployment

The app is production-ready. You can easily deploy it on platforms like **Render** or **Railway**. Just connect the GitHub repo, set the build command to `npm run build`, start command to `npm start`, and add your `.env` variables in the dashboard.

---
*Feel free to explore the code or use it as inspiration for your own projects!*
