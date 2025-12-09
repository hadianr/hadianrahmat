import { info } from "@data";

export const generateCVATS = () => {
  const {
    name,
    jobDescription,
    about,
    experience,
    education,
    socialMedia,
  } = info;

  // Format dates
  const formatDate = (date: string): string => {
    if (date === "Present") return "Present";
    return date;
  };

  // Create HTML content for CV
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${name} - CV</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Calibri', 'Arial', sans-serif;
          line-height: 1.4;
          color: #000;
          font-size: 11pt;
          padding: 0.5in;
        }
        
        .container {
          max-width: 8.5in;
          margin: 0 auto;
        }
        
        header {
          text-align: center;
          margin-bottom: 12pt;
          border-bottom: 2pt solid #000;
          padding-bottom: 6pt;
        }
        
        .name {
          font-size: 14pt;
          font-weight: bold;
          margin-bottom: 3pt;
        }
        
        .title {
          font-size: 11pt;
          margin-bottom: 6pt;
        }
        
        .contact-info {
          font-size: 10pt;
          margin-bottom: 3pt;
        }
        
        .contact-info a {
          color: #000;
          text-decoration: none;
        }
        
        section {
          margin-bottom: 12pt;
        }
        
        .section-title {
          font-size: 12pt;
          font-weight: bold;
          margin-bottom: 6pt;
          border-bottom: 1pt solid #000;
          padding-bottom: 2pt;
          text-transform: uppercase;
        }
        
        .experience-item,
        .education-item {
          margin-bottom: 8pt;
        }
        
        .position-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2pt;
        }
        
        .position-title {
          font-weight: bold;
          font-size: 11pt;
        }
        
        .company-name {
          font-size: 11pt;
          margin-bottom: 2pt;
        }
        
        .date-range {
          font-size: 10pt;
          color: #333;
        }
        
        .location {
          font-size: 10pt;
          color: #333;
          margin-bottom: 4pt;
        }
        
        .description {
          font-size: 10pt;
          margin: 4pt 0;
        }
        
        .description ul {
          margin-left: 20pt;
          margin-top: 4pt;
        }
        
        .description li {
          margin-bottom: 2pt;
        }
        
        .about {
          font-size: 10pt;
          line-height: 1.5;
          text-align: justify;
          margin-bottom: 6pt;
        }
        
        @media print {
          body {
            padding: 0;
            margin: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <div class="name">${name}</div>
          <div class="title">${jobDescription}</div>
          <div class="contact-info">
            <a href="mailto:${socialMedia.email.replace('mailto:', '')}">${socialMedia.email.replace('mailto:', '')}</a> | 
            <a href="${socialMedia.linkedin}">LinkedIn</a> | 
            <a href="${socialMedia.github}">GitHub</a>
          </div>
        </header>

        <section>
          <div class="section-title">Professional Summary</div>
          <div class="about">${about}</div>
        </section>

        <section>
          <div class="section-title">Experience</div>
          ${experience
            .map(
              (exp) => `
            <div class="experience-item">
              <div class="position-header">
                <div class="position-title">${exp.location}</div>
                <div class="date-range">${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}</div>
              </div>
              <div class="company-name">${exp.name}</div>
              <div class="description">
                ${exp.description
                  .map((desc) => {
                    if (desc.startsWith("-")) {
                      return `<li>${desc.substring(1).trim()}</li>`;
                    }
                    return `<p>${desc}</p>`;
                  })
                  .join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </section>

        <section>
          <div class="section-title">Education</div>
          ${education
            .map(
              (edu) => `
            <div class="education-item">
              <div class="position-header">
                <div class="position-title">${edu.description[0]}</div>
                <div class="date-range">${edu.startDate} - ${edu.endDate}</div>
              </div>
              <div class="company-name">${edu.name}</div>
              <div class="location">${edu.location}</div>
            </div>
          `
            )
            .join("")}
        </section>
      </div>
    </body>
    </html>
  `;

  return htmlContent;
};

export const downloadPDF = async () => {
  const cvHTML = generateCVATS();
  
  // Create blob and download
  const blob = new Blob([cvHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cv.html";
  link.click();
  URL.revokeObjectURL(url);

  // Use html2pdf for PDF conversion
  const htmlToPdf = (await import("html2pdf.js")).default;
  
  const element = document.createElement("div");
  element.innerHTML = cvHTML;
  
  const options = {
    margin: 0.5,
    filename: `${info.name.replace(/\s+/g, "_")}_CV.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  htmlToPdf().set(options).from(element).save();
};
