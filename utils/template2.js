const addBoldRow = (doc, left, right, x, y, maxLineWidth) => {
  doc.setFont('default', 'bold');
  const text = doc.splitTextToSize(left, maxLineWidth - 30);

  doc.text(text, x, y);
  const lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  const lines = text.length;
  const next = lines * lineHeight;

  doc.setFont('default', 'normal');
  doc.text(right, 190, y, { align: 'right' });

  return next;
};

const addBullet = (doc, info, yPos, maxLineWidth) => {
  doc.circle(90, yPos, 0.4, 'FD');
  const text = doc.splitTextToSize(info, maxLineWidth);

  doc.text(text, 92, yPos + 1);
  const lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  const lines = text.length;

  return lines * lineHeight;
};

const template2 = (doc, info, options) => {
  const { name, profession, country, webpage, linkedin, email } = info || {};
  const { maxLineWidth, maxYPos, color = '#000' } = options;
  const baseFontColor = '#000';

  const maxLineWidthLeft = 55;
  const maxLineWidthRight = 100;

  doc.setTextColor(baseFontColor);
  doc.setFillColor(color);

  // LEFT
  let yPos = 20;

  doc.rect(20, yPos, 35, 35, 'F');

  yPos += 45;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('PERFIL', 20, yPos);

  yPos += 7;
  doc.setFont('default', 'normal');
  doc.setFontSize(10);
  let perfilText =
    'Abogada joven e innovadora dedidaca con pasion al ejercicio de la profesion. Fuerte, decidida y con gran capacidad de actuar bajo presion. Responsable.';
  let text = doc.splitTextToSize(perfilText, maxLineWidthLeft);

  doc.text(text, 20, yPos);
  let lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  let lines = text.length;
  let next = lines * lineHeight;

  yPos += next + 10;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('DATOS PERSONALES', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setTextColor(color);
  doc.setFont('default', 'bold');
  doc.text('Fecha de nacimiento', 20, yPos);

  yPos += 5;
  doc.setTextColor(baseFontColor);
  doc.setFont('default', 'normal');
  doc.text('2 de febrero de 1995', 20, yPos);

  yPos += 7;
  doc.setTextColor(color);
  doc.setFont('default', 'bold');
  doc.text('Domicilio', 20, yPos);

  yPos += 5;
  doc.setTextColor(baseFontColor);
  doc.setFont('default', 'normal');
  doc.text('Parana - Entre Rios', 20, yPos);

  yPos += 10;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('CONTACTO', 20, yPos);

  yPos += 7;
  doc.setFont('default', 'normal');
  doc.setFontSize(10);
  doc.rect(20, yPos - 2, 2, 2, 'F');
  doc.text('3435137667', 24, yPos);

  yPos += 5;
  doc.rect(20, yPos - 2, 2, 2, 'F');
  perfilText = 'florenciacalierno@hotmail.com';
  text = doc.splitTextToSize(perfilText, maxLineWidthLeft);
  doc.text(text, 24, yPos);
  lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  lines = text.length;
  next = lines * lineHeight;

  yPos += next + 5;
  doc.rect(20, yPos - 2, 2, 2, 'F');
  perfilText = 'https://linkedin.com/in/florencia-calierno-asad123ads';
  text = doc.splitTextToSize(perfilText, maxLineWidthLeft);
  doc.text(text, 24, yPos);
  lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  lines = text.length;
  next = lines * lineHeight;

  // RIGHT
  yPos = 35;
  doc.setFontSize(24);
  doc.setTextColor(color);
  doc.setFont('default', 'bold');
  doc.text('Florencia Calierno', 90, yPos);

  yPos += 5;
  doc.setFontSize(10);
  doc.setTextColor(baseFontColor);
  perfilText = 'ABOGADA - MEDIADORA - ESPECIALISTA EN DERECHO PENAL TRIBUTARIO';
  text = doc.splitTextToSize(perfilText, maxLineWidthRight);
  doc.text(text, 90, yPos);
  lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor;
  lines = text.length;
  next = lines * lineHeight;

  yPos = 65;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('EXPERIENCIA LABORAL', 90, yPos);

  yPos += 5;
  doc.setFontSize(10);
  doc.setTextColor(color);
  doc.circle(90, yPos - 1, 0.6, 'FD');
  doc.text('Abogada', 92, yPos);

  yPos += 5;
  addBoldRow(doc, 'Estudio Juridico Integral', '2019 - Presente', 90, yPos, maxLineWidthRight);

  doc.setFont('default', 'normal');
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  yPos += 7;
  next = addBullet(doc, text, yPos, maxLineWidthRight);

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.';
  yPos += next;
  next = addBullet(doc, text, yPos, maxLineWidthRight);

  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.';
  yPos += next;
  next = addBullet(doc, text, yPos, maxLineWidthRight);

  yPos += next + 10;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('EDUCACION', 90, yPos);

  yPos += 5;
  doc.setFontSize(10);
  doc.setTextColor(color);
  doc.circle(90, yPos - 1, 0.6, 'FD');
  doc.text('Bachiller en Humanidades y Ciencias Sociales.', 92, yPos);

  yPos += 5;
  next = addBoldRow(doc, 'Instituto Nuestra Madre de la Merced', '2007 - 2012', 92, yPos, maxLineWidthRight);

  yPos += next;
  doc.circle(90, yPos - 1, 0.6, 'FD');
  doc.setFont('default', 'bold');
  doc.text('Abogada.', 92, yPos);

  yPos += 5;
  perfilText = 'Facultad Teresa de Avila de la Pontificia Universidad Catolica Argentina.';
  next = addBoldRow(doc, perfilText, '2013 - 2018', 92, yPos, maxLineWidthRight);

  yPos += next;
  doc.circle(90, yPos - 1, 0.6, 'FD');
  doc.setFont('default', 'bold');
  doc.text('Posgrado en Derecho Penal Tributario.', 92, yPos);

  yPos += 5;
  perfilText = 'Facultad Teresa de Avila de la Pontificia Universidad Catolica Argentina.';
  next = addBoldRow(doc, perfilText, '2019 - 2020', 92, yPos, maxLineWidthRight);

  yPos += next;
  doc.setFont('default', 'bold');
  perfilText = 'Formacion completa de mediadores "mediacion basica" - Introduccion, entrenamiento y pasantia.';
  next = addBullet(doc, perfilText, yPos, maxLineWidthRight);

  yPos += next + 5;
  perfilText = 'Humanitas ONG.';
  next = addBoldRow(doc, perfilText, '2022 - 2022', 92, yPos, maxLineWidthRight);

  yPos += next + 10;
  doc.setFont('default', 'bold');
  doc.setFontSize(12);
  doc.text('CURSOS', 90, yPos);

  yPos += 5;
  doc.setFontSize(10);
  doc.setFont('default', 'normal');

  perfilText = 'Libre Office';
  next = addBullet(doc, perfilText, yPos, maxLineWidthRight);

  yPos += 5;
  perfilText = 'Manejo de base de datos.';
  next = addBullet(doc, perfilText, yPos, maxLineWidthRight);

  doc.save('test2.pdf');
};

export default template2;
