import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Serve the src/assets directory statically so any generated or uploaded assets are accessible directly in all environments
  app.use("/src/assets", express.static(path.join(process.cwd(), "src/assets")));

  // Mock Database (In-Memory)
  const db = {
    users: [
      { id: "1", email: "admin@tdms.edu", password: await bcrypt.hash("admin123", 10), role: "admin", name: "Administrator" },
      { id: "2", email: "student@tdms.edu", password: await bcrypt.hash("student123", 10), role: "student", name: "Alex Simmons" }
    ],
    news: [
      { id: 1, title: "Annual Science Fair 2026", date: "2026-06-15", content: "Join us at our Maldahiya campus for the most exciting scientific display of the year.", category: "Academic" },
      { id: 2, title: "Admission Open for 2026-27", date: "2026-07-01", content: "Registration is now open for Thelma David Memorial School, Varanasi.", category: "Admissions" },
      { id: 3, title: "New Sports Wing", date: "2026-05-10", content: "Thelma David Memorial School is proud to announce our new state-of-the-art sports wing.", category: "Athletics" }
    ],
    courses: [
      { id: "mat101", name: "Mathematics", faculty: "Mr. Satish Gupta", description: "Advanced calculus and algebra for higher secondary students.", credits: 4 },
      { id: "sci101", name: "General Science", faculty: "Mrs. Priya Das", description: "Exploring the fundamentals of Physics, Chemistry, and Biology.", credits: 4 },
      { id: "eng101", name: "English Literature", faculty: "Ms. Sarah Jones", description: "A comprehensive study of classical and modern literature.", credits: 3 }
    ], road_map: "higher_secondary",
    faculty: [
      { id: 1, name: "Mrs. Margaret David", department: "Administration", role: "Principal", image: "/src/assets/images/principal_maam.jpg" },
      { id: 2, name: "Mr. Ramesh Sharma", department: "Management", role: "Director", image: "/src/assets/images/director_sir.jpg" },
      { id: 3, name: "Ms. Anjali Verma", department: "Humanities", role: "Senior Coordinator", image: "https://image.pollinations.ai/prompt/professional%20Indian%20woman%20teacher%20educator%20school%20coordinator%20glasses%2C%20warm%20smile%2C%20saree?width=400&height=400&nologo=true&seed=60" }
    ],
    gallery: [
      { id: 1,  url: "/src/assets/images/sch_1.jpg",  title: "Science Exhibition – Student Presentation",  category: "Academic" },
      { id: 2,  url: "/src/assets/images/sch_2.jpg",  title: "Independence Day Cultural Dance",            category: "Events" },
      { id: 3,  url: "/src/assets/images/sch_3.jpg",  title: "Baisakhi Celebration – Little Stars",        category: "Events" },
      { id: 4,  url: "/src/assets/images/sch_4.jpg",  title: "Nurturing Young Minds – Classroom",          category: "Campus" },
      { id: 5,  url: "/src/assets/images/sch_5.jpg",  title: "Art Exhibition – Student Paintings",         category: "Academic" },
      { id: 6,  url: "/src/assets/images/sch_6.jpg",  title: "Students at Cultural Fest with Teacher",     category: "Events" },
      { id: 7,  url: "/src/assets/images/sch_7.jpg",  title: "Students Representing School at City Event", category: "Events" },
      { id: 8,  url: "/src/assets/images/sch_8.jpg",  title: "Principal's Address – Baisakhi",             category: "Events" },
      { id: 9,  url: "/src/assets/images/sch_11.jpg", title: "Tribute to Nehru Ji – Garland Ceremony",     category: "Events" },
      { id: 10, url: "/src/assets/images/sch_13.jpg", title: "Dignitaries at School Function",             category: "Events" },
      { id: 11, url: "/src/assets/images/sch_15.jpg", title: "Annual Day – Faculty & Staff Group Photo",   category: "Events" },
      { id: 12, url: "/src/assets/images/sch_17.jpg", title: "Rangoli & Students – School Corridor",       category: "Campus" },
      { id: 13, url: "/src/assets/images/sch_20.jpg", title: "Diwali Rangoli with Students & Teachers",    category: "Events" },
      { id: 14, url: "/src/assets/images/sch_21.jpg", title: "Students with Rangoli Art Display",          category: "Campus" },
      { id: 15, url: "/src/assets/images/sch_22.jpg", title: "Happy Diwali – Group Celebration",           category: "Events" },
      { id: 16, url: "/src/assets/images/sch_23.jpg", title: "Certificate Distribution Ceremony",          category: "Academic" },
      { id: 17, url: "/src/assets/images/sch_24.jpg", title: "78th Independence Day – Staff Group Photo",  category: "Events" },
      { id: 18, url: "/src/assets/images/sch_19.jpg", title: "Creative Floor Art – Environment Theme",     category: "Events" },
      { id: 19, url: "/src/assets/images/sch_25.jpg", title: "Principal's Speech at Baisakhi",             category: "Events" },
    ],
    admissions: []
  };

  // Auth Routes
  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = db.users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { id: user.id, email: user.email, role: user.role, name: user.name } });
  });

  // API Routes
  const sendToGoogleSheet = async (payload) => {
    const sheetWebappUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (!sheetWebappUrl) {
      console.log("ℹ️ GOOGLE_SHEET_WEBAPP_URL is not set. Data successfully logged locally but not synced with Sheets.");
      return;
    }
    try {
      const response = await fetch(sheetWebappUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...payload,
          submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        })
      });
      if (response.ok) {
        console.log("✅ Successfully forwarded payload to Google Sheet Web App.");
      } else {
        console.log("⚠️ Google Sheet endpoint backend returned non-ok status:", response.status);
      }
    } catch (err) {
      console.error("❌ Failed to forward to Google Sheets:", err.message);
    }
  };

  app.get("/api/news", (req, res) => res.json(db.news));
  app.get("/api/courses", (req, res) => res.json(db.courses));
  app.get("/api/faculty", (req, res) => res.json(db.faculty));
  app.get("/api/gallery", (req, res) => res.json(db.gallery));

  app.post("/api/admissions/inquiry", async (req, res) => {
    const inquiry = { ...req.body, id: Date.now(), status: "pending", submittedAt: new Date() };
    db.admissions.push(inquiry);

    // Forward to google sheet if URL exists
    await sendToGoogleSheet({
      formType: "Admissions Inquiry",
      studentName: req.body.studentName || "",
      parentName: req.body.parentName || "",
      phone: req.body.phone || "",
      email: req.body.email || "",
      grade: req.body.grade || "",
      details: req.body.details || "",
      
      // Extensive compatibility aliases for dynamic name-matching or custom scripts
      fullName: req.body.studentName || "",
      name: req.body.studentName || "",
      contactInfo: req.body.phone ? `${req.body.phone} / ${req.body.email}` : req.body.email || "",
      contactNumber: req.body.phone || "",
      inquiryType: req.body.grade || "",
      class: req.body.grade || "",
      message: req.body.details || "",
      query: req.body.details || "",
      additionalDetails: req.body.details || ""
    });

    res.json({ success: true, inquiry });
  });

  app.post("/api/contact", async (req, res) => {
    const contact = { ...req.body, id: Date.now(), submittedAt: new Date() };

    // Forward to google sheet if URL exists
    await sendToGoogleSheet({
      formType: "Direct Contact Form",
      fullName: req.body.fullName || "",
      contactInfo: req.body.contactInfo || "",
      inquiryType: req.body.inquiryType || "",
      message: req.body.message || "",
      
      // Extensive compatibility aliases for dynamic name-matching or custom scripts
      studentName: req.body.fullName || "",
      parentName: req.body.fullName || "",
      name: req.body.fullName || "",
      email: req.body.contactInfo || "",
      phone: req.body.contactInfo || "",
      contactNumber: req.body.contactInfo || "",
      grade: req.body.inquiryType || "",
      class: req.body.inquiryType || "",
      details: req.body.message || "",
      query: req.body.message || "",
      additionalDetails: req.body.message || ""
    });

    res.json({ success: true, contact });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
