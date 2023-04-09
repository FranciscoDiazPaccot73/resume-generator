const addSocial = (doc, text, link, x, y) => {
  doc.textWithLink(text, x, y, {
    url: link
  });
}

const addTitle = (doc, text, x, y, color) => {
  doc.setTextColor(color);
  doc.setDrawColor(color);
  doc.text(text, x, y)

  doc.setLineWidth(1.5);
  doc.line(x, y + 2, 190, y + 2);
}

const addBoldRow = (doc, left, right, x, y) => {
  doc.text(left, x, y);
  doc.text(right, 190, y, { align: 'right' })
}

const addBullet = (doc, info, yPos, maxLineWidth) => {
  doc.circle(20, yPos, 0.4, 'FD');
  const text = doc.splitTextToSize(info, maxLineWidth);
  doc.text(text, 24, yPos + 1)
  let lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  let lines = text.length;
  return lines * lineHeight
}

const template2 = (doc, info, options) => {
  const { name, profession, country, webpage, linkedin, email } = info || {};
  const { maxLineWidth, maxYPos, color = '#000' } = options;
  const baseFontColor = '#000';

  const maxLineWidthLeft = 55;

  doc.setTextColor(color);
  doc.setFillColor(color);

  let yPos = 20;
  doc.rect(20, yPos, 40, 40, 'F');

  yPos += 55;
  doc.setFont("default", 'bold');
  doc.setFontSize(14)
  doc.text('PERFIL', 20, yPos)
  
  yPos += 7;
  doc.setFont("default", 'normal');
  doc.setFontSize(12);
  const perfilText = 'Abogada joven e innovadora dedidaca con pasion al ejercicio de la profesion. Fuerte, decidida y con gran capacidad de actuar bajo presion. Responsable.'
  const text = doc.splitTextToSize(perfilText, maxLineWidthLeft);
  doc.text(text, 20, yPos)
  let lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  let lines = text.length;
  const next = lines * lineHeight;
  
  yPos += next + 10;
  doc.setFont("default", 'bold');
  doc.setFontSize(14)
  doc.text('DATOS PERSONALES', 20, yPos)

  doc.save("test2.pdf");
}

export default template2;
