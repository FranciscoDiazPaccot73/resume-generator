const addSocial = (doc, text, link, x, y) => {
  doc.textWithLink(text, x, y, {
    url: link
  });
}

const addTitle = (doc, text, x, y) => {
  doc.text(text, x, y)

  doc.setLineWidth(1.5);
  doc.line(x, y + 2, 190, y + 2);
}

const addBoldRow = (doc, left, right, x, y) => {
  doc.text(left, x, y);
  doc.text(right, 190, y, { align: 'right' })
}

const addBullet = (doc, info, yPos, maxLineWidth) => {
  doc.circle(20, yPos, 0.5, 'FD');
  const text = doc.splitTextToSize(info, maxLineWidth);
  doc.text(text, 24, yPos + 1)
  let lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  let lines = text.length;
  return lines * lineHeight
}

const template1 = (doc, info, options) => {
  const { name, profession, country, webpage, linkedin, email } = info || {};
  const { maxLineWidth, maxYPos, color = '#000' } = options;

  doc.setTextColor(color);
  doc.setFillColor(color);

  let yPos = 20;
  doc.setFont("default", 'bold');
  doc.setFontSize(24)
  doc.text(name, 105, yPos, null, null, "center")
  doc.setFont("default", 'bold');

  yPos += 10;
  doc.setFontSize(18)
  doc.text(profession, 105, yPos, null, null, "center")
  doc.setFont("default", 'normal');

  yPos += 10;
  doc.setFontSize(14)
  doc.text(country, 105, yPos, null, null, "center")

  yPos += 15;
  addSocial(doc, 'Webpage', webpage, 20, yPos);
  doc.circle(45, yPos - 1, 1, 'FD');
  addSocial(doc, 'Email', 'mailto:'+email, 50, yPos);
  doc.circle(68, yPos - 1, 1, 'FD');
  addSocial(doc, 'Linkedin', linkedin, 73, yPos);

  yPos += 15;
  doc.setFont("default", 'bold');
  doc.setFontSize(18)
  
  addTitle(doc, 'EXPERIENCE', 20, yPos)

  yPos += 12;
  doc.setFontSize(16)
  addBoldRow(doc, 'MERCADO LIBRE', 'Argentina', 20, yPos);
  yPos += 10;
  addBoldRow(doc, 'Sr. Frontend Software Engineer', '2019 - Current', 20, yPos);

  doc.setFontSize(12)
  doc.setFont("default", 'normal');

  yPos += 7;
  let text = 'Contribute to the initial experience of marketing tools for Mercado Shops.';
  let blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Develop the frontend of the "Central de Promociones" (space where Mercado Libre platform sellers can create offers for their products) and all related applications for the massive upload of items in their promotions.';
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Contributing to the development of the components in the internal UI Library of the company (called "Andes")';
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Participate in the early stages of the Performance team within the Frontend Platform team.'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Being part of the Benefits initiative enablement team, where we provide technical support to all the other teams of the initiative, in order to get involved with them when they have any kind of problem in their developments. In addition, we develop tools to automate the metrics collection in order to understand and find out quickly whenever our frontends are downgraded in a certain aspect.'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)

  yPos += blockHeight + 10;
  doc.setFont("default", 'bold');
  doc.setFontSize(16)
  addBoldRow(doc, 'SERFE', 'Argentina', 20, yPos);
  yPos += 10;
  addBoldRow(doc, 'Ssr. Full-Stack Developer', '2018 - 2019', 20, yPos);

  doc.setFontSize(12)
  doc.setFont("default", 'normal');
  yPos += 7;
  text = 'Maintenance of legacy mobile application made with phonegap and Angular 1.2'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Lead a team of 3 developers to build a new React Native mobile app.'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Be a part of the web platform development team for this application and we made it in react.'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight;
  text = 'Be part of the backend development team of the application. We made it in NodeJs.'
  blockHeight = addBullet(doc, text, yPos, maxLineWidth)
  
  yPos += blockHeight + 15;
  doc.setFont("default", 'bold');
  doc.setFontSize(18)
  addTitle(doc, 'LANGUAGES', 20, yPos)
  doc.text('LANGUAGES', 20, yPos)

  yPos += 12;
  doc.setFont("default", 'bold');
  doc.setFontSize(16)
  addBoldRow(doc, 'SPANISH', 'Native', 20, yPos);
  yPos += 10;
  addBoldRow(doc, 'ENGLISH', 'B2', 20, yPos);

  yPos += 20
  doc.setFontSize(18)
  addTitle(doc, 'SKILLS', 20, yPos)

  yPos +=12;
  doc.setFont("default", 'normal');
  doc.setFontSize(12)
  text = doc.splitTextToSize('JavaScript, HTML, CSS, Sass, ReactJs, NodeJs, NextJs, Astro, Git, Github, SQL, Looker, GraphQL...', maxLineWidth);
  doc.text(text, 20, yPos);

  doc.save("test.pdf");
}

export default template1;
