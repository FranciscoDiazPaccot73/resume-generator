'use client'

import { PDFDocument } from 'pdf-lib';

const Download = () => {
  const createForm = async () => {
    console.log("llega")
    const pdfDoc = await PDFDocument.create()
    console.log("llega2")

    const page = pdfDoc.addPage([550, 750])

    const form = pdfDoc.getForm()

    page.drawText('Enter your favorite superhero:', { x: 50, y: 700, size: 20 })

    const superheroField = form.createTextField('favorite.superhero')
    superheroField.setText('One Punch Man')
    superheroField.addToPage(page, { x: 55, y: 640 })

    page.drawText('Select your favorite rocket:', { x: 50, y: 600, size: 20 })

    page.drawText('Falcon Heavy', { x: 120, y: 560, size: 18 })
    page.drawText('Saturn IV', { x: 120, y: 500, size: 18 })
    page.drawText('Delta IV Heavy', { x: 340, y: 560, size: 18 })
    page.drawText('Space Launch System', { x: 340, y: 500, size: 18 })

    const rocketField = form.createRadioGroup('favorite.rocket')
    rocketField.addOptionToPage('Falcon Heavy', page, { x: 55, y: 540 })
    rocketField.addOptionToPage('Saturn IV', page, { x: 55, y: 480 })
    rocketField.addOptionToPage('Delta IV Heavy', page, { x: 275, y: 540 })
    rocketField.addOptionToPage('Space Launch System', page, { x: 275, y: 480 })
    rocketField.select('Saturn IV')

    page.drawText('Select your favorite gundams:', { x: 50, y: 440, size: 20 })

    page.drawText('Exia', { x: 120, y: 400, size: 18 })
    page.drawText('Kyrios', { x: 120, y: 340, size: 18 })
    page.drawText('Virtue', { x: 340, y: 400, size: 18 })
    page.drawText('Dynames', { x: 340, y: 340, size: 18 })

    const exiaField = form.createCheckBox('gundam.exia')
    const kyriosField = form.createCheckBox('gundam.kyrios')
    const virtueField = form.createCheckBox('gundam.virtue')
    const dynamesField = form.createCheckBox('gundam.dynames')

    exiaField.addToPage(page, { x: 55, y: 380 })
    kyriosField.addToPage(page, { x: 55, y: 320 })
    virtueField.addToPage(page, { x: 275, y: 380 })
    dynamesField.addToPage(page, { x: 275, y: 320 })

    exiaField.check()
    dynamesField.check()

    page.drawText('Select your favorite planet*:', { x: 50, y: 280, size: 20 })

    const planetsField = form.createDropdown('favorite.planet')
    planetsField.addOptions(['Venus', 'Earth', 'Mars', 'Pluto'])
    planetsField.select('Pluto')
    planetsField.addToPage(page, { x: 55, y: 220 })

    page.drawText('Select your favorite person:', { x: 50, y: 180, size: 18 })

    const personField = form.createOptionList('favorite.person')
    personField.addOptions([
      'Julius Caesar',
      'Ada Lovelace',
      'Cleopatra',
      'Aaron Burr',
      'Mark Antony',
    ])
    personField.select('Ada Lovelace')
    personField.addToPage(page, { x: 55, y: 70 })

    page.drawText(`* Pluto should be a planet too!`, { x: 15, y: 15, size: 15 })

    const pdfBytes = await pdfDoc.save()

    const myFile = new File([pdfBytes], "pdf-lib_form_creation_example.pdf")

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(myFile);
    link.download = "pdf-lib_form_creation_example.pdf";

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.parentNode.removeChild(link);
    }, 0);
  }

  return (
    <section>
      <p>Click the button to create a PDF document with form fields using <code>pdf-lib</code></p>
      <button onClick={createForm}>Create PDF</button>
      <p className="small">(Your browser will download the resulting file)</p>
    </section>
  )
}

export default Download;
