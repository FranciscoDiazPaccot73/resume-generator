'use client'

import { createTemplate } from "@/utils/templates";

const Download = ({ info }) => {
  const name = 'FRANCISCO DIAZ PACCOT'
  const profession = 'Frontend Software Engineer';
  const webpage = 'https://www.franciscodiazpaccot.dev';
  const country = 'Argentina';
  const email = 'fran.diazpaccot@gmail.com';
  const linkedin = 'linkedin.com'
  const createForm = async () => {
    const inf = { name, webpage, profession, country, email, linkedin };

    createTemplate('template1', inf)
  }

  return (
    <section>
      <button onClick={createForm}>Create PDF</button>
    </section>
  )
}

export default Download;
