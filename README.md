## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Jun 17 2024 07:51:42 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.13.6|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>None|
|**Service URL**<br>N/A
|**Module Name**<br>form|
|**Application Title**<br>Job Application Form|
|**Namespace**<br>com.mit.form1.appl|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.124.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## form

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

## Detail Description 

# Job Application Form

## Description
The **Job Application Form** is a web-based application designed to streamline the process of collecting job applicant details. The form is divided into three sections (tabs) to ensure clarity and organization: **Personal Information**, **Educational Details**, and **Attachments**. The application is built using a combination of **HTML**, **JavaScript**.
After filling out the form, applicants can **preview** their information to verify before submitting the application.

---

## Features
### 1. **Personal Information Tab**  
   - Collects basic information about the applicant such as:
     - Name
     - Date of Birth
     - Contact Information (Email, Phone)
     - Address
     - Other personal details (Gender, Nationality, etc.)

### 2. **Educational Details Tab**  
   - Allows applicants to input their academic qualifications:
     - School/College Names
     - Degrees
     - Year of Passing
     - Grades/Percentages

### 3. **Attachments Tab**  
   - Enables applicants to upload necessary documents such as:
     - Resume (in PDF/Word format)

### 4. **Preview Section**  
   - Once the form is filled, the user can preview the entered information to ensure everything is accurate before submitting.  
   - This section provides a summary of the data entered in the Personal Information, Educational Details, and Attachments tabs.

### 5. **Submit Section**  
   - After verifying the preview, the user can submit the form.

### 6. **Tab Navigation**  
   - User-friendly navigation between the three tabs and the preview for a seamless experience.

### 7. **Data Validation**  
   - Ensures all required fields are filled correctly before submission.  
   - Validates formats for email, phone numbers, and document uploads.

## Technologies Used
### Frontend:
- **HTML**: To structure the form layout and elements.
- **JavaScript**: For client-side validations, dynamic tab navigation, and interactivity.




