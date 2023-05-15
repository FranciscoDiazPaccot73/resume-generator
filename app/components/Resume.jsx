import Bullets from './ResumeBullets';
import ResumeTitle from './ResumeTitle';
import TextSplitted from './TextSplitted';

import { toLocalString, getHexa } from '@/utils';

import styles from './Resume.module.scss';

const Resume = ({ lang = 'en', info, selectedColor }) => {
  const { name = '', surname = '', profession = '', webpage = '', country = '', city = '', email = '', linkedin = '', jobs = [] } = info;

  const isSpanish = lang === 'es';
  const experienceLabel = isSpanish ? 'EXPERIENCIA' : 'EXPERIENCE';
  const langLabel = isSpanish ? 'IDIOMAS' : 'LANGUAGES';
  const spanish = isSpanish ? 'ESPAÑOL' : 'SPANISH';
  const english = isSpanish ? 'INGLES' : 'ENGLISH';
  const nativeLabel = isSpanish ? 'Nativo' : 'Native';
  const skillsLabel = isSpanish ? 'HABILIDADES' : 'SKILLS';
  // const resumeLocation = isSpanish ? 'docs/FranciscoDiazPaccot-cv.pdf' : 'docs/FranciscoDiazPaccot-resume.pdf';
  // const buttonlabel = isSpanish ? 'Descargar CV' : 'Download Resume';

  return (
    <div className="flex flex-col px-2">
      {name ? (
        <p className={`text-2xl font-bold ${styles[selectedColor]}`}>
          {name.toUpperCase()} <span>{surname.toUpperCase()}</span>
        </p>
      ) : null}
      {profession ? <p className="text-lg font-bold mb-6">{profession}</p> : null}
      {webpage ? (
        <a className="text-blue-600 underline text-sm" href={webpage} rel="noreferrer" target="_blank">
          Webpage
        </a>
      ) : null}
      <div className="flex text-sm gap-1 mb-4">
        {city ? <p>{city}</p> : null}
        {country ? <p>&#x2022; {country}</p> : null}
        {email ? (
          <a className=" text-blue-600 underline" href={`mailto:${email}`} rel="noreferrer" target="_blank">
            &#x2022; Email
          </a>
        ) : null}
        {linkedin ? (
          <a className=" text-blue-600 underline" href={linkedin} rel="noreferrer" target="_blank">
            &#x2022; Linkedin
          </a>
        ) : null}
      </div>
      <div className="w-full">
        <ResumeTitle color={getHexa(selectedColor)} label={experienceLabel} />
        {jobs?.map(({ currentWork, description, employer, endDate, id, job, startDate, country: jobCountry = '' }) => {
          const start = toLocalString(new Date(startDate));
          const end = currentWork ? 'current' : toLocalString(new Date(endDate));
          const bullets = description.map((desc) => desc.value);

          return (
            <div key={id}>
              <TextSplitted left={employer.toUpperCase()} right={jobCountry} />
              <TextSplitted left={job} right={`${start}-${end}`} />
              <Bullets content={bullets} />
            </div>
          );
        })}
        <ResumeTitle color={getHexa(selectedColor)} label={langLabel} />
        <TextSplitted left={spanish} right={nativeLabel} />
        <TextSplitted left={english} right="B2" />
        <ResumeTitle className="mt-10" color={getHexa(selectedColor)} label={skillsLabel} />
        <p className="text-sm">JavaScript, HTML, CSS, Sass, ReactJs, NodeJs, NextJs, Astro, Git, Github, SQL, Looker, GraphQL...</p>
      </div>
    </div>
  );
};

export default Resume;
