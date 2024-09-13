// "use strict";
// var _a;
// // Function to handle file input and preview image
// (_a = document.getElementById('fileInput')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (event) {
//     var _a;
//     const input = event.target;
//     const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             var _a;
//             const previewDiv = document.getElementById('imagePreview');
//             if (previewDiv) {
//                 // Set the uploaded image as background
//                 previewDiv.style.backgroundImage = `url('${(_a = e.target) === null || _a === void 0 ? void 0 : _a.result}')`;
//                 previewDiv.style.backgroundSize = 'cover';
//                 previewDiv.style.backgroundPosition = 'center';
//                 // Clear the text "This will remove any inner text or elements
//                 previewDiv.innerHTML = "";
//             }
//         };
//         reader.readAsDataURL(file);
//     }
// });
// // Function to change container background color
// function changeColor() {
//     // List of random colors
//     const colors = ['#9d9d9d', '#707f83', '#a5b5b0', '#b7ced8', '#e3e9ee', '#f0d0db', '#ececec', '#efefef', '#e1d8db', '#d4cbc'];
//     // Random index generate karna colors array se ek random color select karne ke liye
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     // Container element ka background color change karna
//     const container = document.querySelector('.container');
//     if (container) {
//         container.style.backgroundColor = colors[randomIndex];
//     }
// }
// ;
// // Function to populate the day dropdown (1-31)
// function populateDays(selectorId) {
//     const daySelect = document.getElementById(selectorId);
//     for (let i = 1; i <= 31; i++) {
//         const option = document.createElement("option");
//         option.value = i.toString();
//         option.text = i.toString();
//         daySelect.appendChild(option);
//     }
// }
// ;
// // Function to populate the year dropdown (current year to 100 years ago)
// function populateYears(selectorId) {
//     const yearSelect = document.getElementById(selectorId);
//     const currentYear = new Date().getFullYear();
//     for (let i = currentYear; i >= currentYear - 100; i--) {
//         const option = document.createElement("option");
//         option.value = i.toString();
//         option.text = i.toString();
//         yearSelect.appendChild(option);
//     }
// }
// // Populate the start and end date dropdowns on page load
// window.onload = () => {
//     populateDays("dayStart");
//     populateDays("dayEnd");
//     populateYears("yearStart");
//     populateYears("yearEnd");
// };





"use strict";

// Function to handle file input and preview image
document.getElementById('fileInput')?.addEventListener('change', function (event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const previewDiv = document.getElementById('imagePreview');
            if (previewDiv) {
                previewDiv.style.backgroundImage = `url('${e.target.result}')`;
                previewDiv.style.backgroundSize = 'cover';
                previewDiv.style.backgroundPosition = 'center';
                previewDiv.innerHTML = "";
            }
        };
        reader.readAsDataURL(file);
    }
});

// Function to change container background color
function changeColor() {
    const colors = ['#9d9d9d', '#707f83', '#a5b5b0', '#b7ced8', '#e3e9ee', '#f0d0db', '#ececec', '#efefef', '#e1d8db', '#d4cbc'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const container = document.querySelector('.container');
    if (container) {
        container.style.backgroundColor = colors[randomIndex];
    }
}

// Function to populate the day dropdown (1-31)
function populateDays(selectorId) {
    const daySelect = document.getElementById(selectorId);
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        daySelect.appendChild(option);
    }
}

// Function to populate the year dropdown (current year to 100 years ago)
function populateYears(selectorId) {
    const yearSelect = document.getElementById(selectorId);
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        yearSelect.appendChild(option);
    }
}

// Populate the start and end date dropdowns on page load
window.onload = () => {
    populateDays("dayStart");
    populateDays("dayEnd");
    populateYears("yearStart");
    populateYears("yearEnd");
};

// Function to generate the resume
function generateResume() {
    const form = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('resumeOutput');
    const resumeContent = document.getElementById('resumeContent');
    
    // Collect form data and format it into HTML
    let content = `
        <h2>Personal Information</h2>
        <p>Contact: ${form.querySelector('input[placeholder="contact"]').value}</p>
        <p>Home Address: ${form.querySelector('input[placeholder="HomeAdress"]').value}</p>
        <p>Email Address: ${form.querySelector('input[placeholder="Email Address"]').value}</p>
        <p>LinkedIn Profile: ${form.querySelector('input[placeholder="LinkedIn Profile (optional)"]').value}</p>
        <p>GitHub Profile: ${form.querySelector('input[placeholder="GitHub Profile (optional)"]').value}</p>
        <h2>Objective</h2>
        <p>${form.querySelector('textarea[placeholder="Write your career objective..."]').value}</p>
        <h2>Education</h2>
        <p>Degree: ${form.querySelector('input[placeholder="Degree/Qualification"]').value}</p>
        <p>University/College: ${form.querySelector('input[placeholder="University/College Name"]').value}</p>
        <p>Passing Year: ${form.querySelector('input[placeholder="Passing Year"]').value}</p>
        <h2>Work Experience</h2>
        <p>Job Title: ${form.querySelector('input[placeholder="Job Title"]').value}</p>
        <p>Company: ${form.querySelector('input[placeholder="Company Name"]').value}</p>
        <p>Start Date: ${form.querySelector('#dayStart').value}/${form.querySelector('#monthStart').value}/${form.querySelector('#yearStart').value}</p>
        <p>End Date: ${form.querySelector('#dayEnd').value}/${form.querySelector('#monthEnd').value}/${form.querySelector('#yearEnd').value}</p>
        <p>Responsibilities: ${form.querySelector('textarea[placeholder="Job Responsibilities..."]').value}</p>
        <h2>Skills</h2>
        <p>Technical Skills: ${form.querySelector('input[placeholder="Technical Skills"]').value}</p>
        <p>Soft Skills: ${form.querySelector('input[placeholder="Soft Skills"]').value}</p>
        <h2>Projects</h2>
        <p>Project Title: ${form.querySelector('input[placeholder="Project Title"]').value}</p>
        <p>Description: ${form.querySelector('textarea[placeholder="Project Description..."]').value}</p>
        <p>Technologies: ${form.querySelector('input[placeholder="Technologies Used"]').value}</p>
        <h2>Certifications & Courses</h2>
        <p>Course Title: ${form.querySelector('input[placeholder="Course Title"]').value}</p>
        <p>Institution: ${form.querySelector('input[placeholder="Institution Name"]').value}</p>
        <p>Completion Date: ${form.querySelector('input[placeholder="Completion Date"]').value}</p>
        <h2>Languages</h2>
        <p>${form.querySelector('input[placeholder="Language"]').value}</p>
        <h2>Hobbies & Interests</h2>
        <p>${form.querySelector('textarea[placeholder="Your hobbies..."]').value}</p>
        <h2>References</h2>
        <p>Reference Name: ${form.querySelector('input[placeholder="Reference Name"]').value}</p>
        <p>Job Title: ${form.querySelector('input[placeholder="Job Title"]').value}</p>
        <p>Contact Information: ${form.querySelector('input[placeholder="Contact Information"]').value}</p>
    `;

    resumeContent.innerHTML = content;
    resumeOutput.style.display = 'block';
}

// Function to edit the resume
function editResume() {
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.style.display = 'none';
}

// Function to delete the resume
function deleteResume() {
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.style.display = 'none';
    document.getElementById('resumeForm').reset(); // Optional: Reset form
}

// Function to save resume as PDF
function saveAsPDF() {
    const resumeContent = document.getElementById('resumeContent').innerHTML;
    const doc = new jsPDF();
    doc.fromHTML(resumeContent);
    doc.save('resume.pdf');
}
