# 📊 Google Sheets Form Integration Setup Guide

Follow this simple, step-by-step guide to connect your school's **Admissions Form** and **Contact Form** directly to any Google Sheet.

---

## 🛠️ Step 1: Set Up your Google Sheet & Apps Script

1. Open [Google Sheets](https://sheets.google.com) and create a **blank spreadsheet**.
2. Rename the spreadsheet to something useful, like `TDMS Form Submissions`.
3. In the top menu, click **Extensions** ➡️ **Apps Script**.
4. Delete any code inside the editor and paste the following complete script:

```javascript
/**
 * Google Apps Script to capture and append Web Admissions & Contact requests to Google Sheets
 * AND send an email notification.
 */
function doPost(e) {
  try {
    // 1. Parse incoming JSON request safely
    var json = JSON.parse(e.postData.contents);
    
    // 2. Select Spreadsheet
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = activeSpreadsheet.getSheetByName("Submissions") || activeSpreadsheet.getSheets()[0];
    
    // Rename tab to "Submissions" for neatness
    if (sheet.getName() !== "Submissions") {
      sheet.setName("Submissions");
    }
    
    // 3. Auto-populate headers if Sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submission Date / Time", 
        "Form Type", 
        "Student / User Name", 
        "Parent Name", 
        "Email Address",
        "Phone Number",
        "Grade / Inquiry Type", 
        "Additional Details / Message"
      ]);
      // Headers added. No automatic colors or resizing so you can style it your way!
    }
    
    // 4. Map the payload depending on which form was submitted
    var rowData = [];
    var formType = json.formType || "General Submission";
    var submissionTime = json.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    
    rowData.push(submissionTime);
    rowData.push(formType);
    
    // Variables for columns and email notification
    var studentName = "", parentName = "", email = "", phone = "", inquiryType = "", message = "";

    if (formType === "Admissions Inquiry") {
      studentName = json.studentName || "";
      parentName = json.parentName || "";
      email = json.email || "";
      phone = json.phone || "";
      inquiryType = json.grade || "";
      message = json.details || "";
    } else {
      // Direct Contact Form
      studentName = json.fullName || "";
      parentName = "-"; // Not applicable for general contact
      
      // Determine if contactInfo looks like an email or a phone number
      var contactInfo = json.contactInfo || "";
      if (contactInfo.indexOf("@") !== -1) {
        email = contactInfo;
      } else {
        phone = contactInfo;
      }
      
      inquiryType = json.inquiryType || "";
      message = json.message || "";
    }
    
    // Push the organized variables into the row
    rowData.push(studentName);
    rowData.push(parentName);
    rowData.push(email);
    rowData.push(phone);
    rowData.push(inquiryType);
    rowData.push(message);
    
    // 5. Append Row to sheet
    sheet.appendRow(rowData);
    
    // 6. Send Email Notification
    // CHANGE THIS EMAIL TO YOUR ACTUAL EMAIL ADDRESS WHERE YOU WANT TO RECEIVE NOTIFICATIONS
    var emailAddress = Session.getActiveUser().getEmail(); 
    
    var subject = "New Submission: " + formType + " from " + studentName;
    var emailBody = "You have received a new form submission.\n\n" +
                    "Form Type: " + formType + "\n" +
                    "Time: " + submissionTime + "\n" +
                    "Name: " + studentName + "\n" +
                    "Parent Name: " + parentName + "\n" +
                    "Email: " + email + "\n" +
                    "Phone: " + phone + "\n" +
                    "Inquiry Type: " + inquiryType + "\n\n" +
                    "Message/Details:\n" + message + "\n\n" +
                    "View your Google Sheet for full details.";
                    
    MailApp.sendEmail({
      to: emailAddress,
      subject: subject,
      body: emailBody
    });
    
    // Return standard success response
    return ContentService.createTextOutput(JSON.stringify({ "success": true, "message": "Row successfully logged to Sheet and email sent" }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (err) {
    // Return descriptive error
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

// Support preflight headers check for cross-origin fetches if needed
function doOptions(e) {
  return ContentService.createTextOutput("")
                       .setMimeType(ContentService.MimeType.TEXT);
}
```

---

## 🚀 Step 2: Deploy the Script as a Web App

To allow the server to securely write into your Sheet, you will now publish this script:

1. In the Apps Script project editor, click the blue **Deploy** button on the top right ➡️ Select **New Deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `TDMS Contact and Admissions Form Endpoint`
   - **Execute as**: Change this to **Me (your electronic Google account)**.
   - **Who has access**: Change this to **Anyone** (this is crucial so the cloud server can securely forward submissions without visitor-level login).
4. Click **Deploy**.
5. Google will prompt you with *Authorize Access*. Click **Authorize Access**, select your Gmail account, click **Advanced** ➡️ Go to **Untitled project (unsafe)** (don't worry, this is your own script!), and click **Allow**.
6. When deployment finishes, copy the generated **Web app URL** (it ends with `/exec`).

---

## 🛠️ Step 3: Link to your Web Application

Now simply configure this URL into your application's secrets/environment variables!

1. Open your web app's environment configuration secrets panel or your local `.env` file.
2. Edit/Add the following key-value pair, pasting your copied URL inside the quotes:
   ```env
   GOOGLE_SHEET_WEBAPP_URL="YOUR_COPIED_GOOGLE_APPS_SCRIPT_WEBAPP_URL"
   ```
3. Save the secrets and restart/redeploy. 

🎉 *Everything is now fully wired! Any student/parent clicking "Submit Admission Inquiry" or sending direct messages on the Contact page will automatically appear as beautiful, organized rows right inside your Google Sheet tab in real-time!*
