import ResumeTitle from "./ResumeTitle";
import TextSplitted from "./TextSplitted";
import Bullets from "./ResumeBullets";

import styles from './page.module.scss';

const Resume = ({ lang = "en", info }) => {
  const {
    name = '',
  } = info;
  const meliBulletsEn = [
    'Contribute to the initial experience of marketing tools for Mercado Shops.',
    'Develop the frontend of the "Central de Promociones" (space where Mercado Libre platform sellers can create offers for their products) and all related applications for the massive upload of items in their promotions.',
    'Contributing to the development of the components in the internal UI Library of the company (called "Andes")',
    'Participate in the early stages of the Performance team within the Frontend Platform team.',
    'Being part of the Benefits initiative enablement team, where we provide technical support to all the other teams of the initiative, in order to get involved with them when they have any kind of problem in their developments. In addition, we develop tools to automate the metrics collection in order to understand and find out quickly whenever our frontends are downgraded in a certain aspect.',
  ]
  const meliBulletsEs = [
    'Contribuir en la experiencia inicial de las herramientas de marketing para Mercado Shops.',
    'Llevar adelante el desarrollo del frontend de la Central de Promociones (espacio donde los vendedores de la plataforma Mercado Libre crean ofertas para sus items) y todas las aplicaciones paralelas para carga masiva de ítems a las promociones.',
    'Contribuir con el desarrollos de componentes en la librería de UI interna de la empresa (Andes).',
    'Formar parte de los primeros pasos del equipo de Performance dentro de Frontend Platform.',
    'Formar parte del equipo de enablings de la iniciativa de Benefits, donde damos soporte técnico a todos los equipos de la iniciativa, para poder colaborar con ellos cuando tienen algún tipo de traba en sus desarrollos. Además realizamos herramientas para poder automatizar la recolección de métricas y así entender y poder enterarnos de manera rápida cuando nuestros frontends están degradados en algún aspecto.'
  ]
  
  const serfeBulletsEn = [
    'Maintenance of legacy mobile application made with phonegap and Angular 1.2',
    'Lead a team of 3 developers to build a new React Native mobile app.',
    'Be a part of the web platform development team for this application and we made it in react.',
    'Be part of the backend development team of the application. We made it in NodeJs.',
  ]
  const serfeBulletsEs = [
    'Mantenimiento de aplicacion mobile legacy hecha con phonegap y Angular 1.2',
    'Liderar un equipo de 3 devs para la creación de una nueva aplicación móvil hecha con React Native.',
    'Formar parte del equipo de desarrollo de la plataforma web de dicha aplicación. Hecha con React.',
    'Formar parte del equipo de desarrollo del backend de la aplicación. Hecho en NodeJs.',
  ]
  
  const isSpanish = lang === 'es'
  const experienceLabel = isSpanish ? 'EXPERIENCIA' : 'EXPERIENCE';
  const nowText = isSpanish ? 'Actualidad' : 'Current';
  const meliBullets = isSpanish ? meliBulletsEs : meliBulletsEn;
  const serfeBullets = isSpanish ? serfeBulletsEs : serfeBulletsEn;
  const langLabel = isSpanish ? 'IDIOMAS' : "LANGUAGES";
  const spanish = isSpanish ? 'ESPAÑOL' : 'SPANISH';
  const english = isSpanish ? 'INGLES' : 'ENGLISH';
  const nativeLabel = isSpanish ? 'Nativo' : 'Native';
  const skillsLabel = isSpanish ? 'HABILIDADES' : 'SKILLS';
  const resumeLocation = isSpanish ? 'docs/FranciscoDiazPaccot-cv.pdf' : 'docs/FranciscoDiazPaccot-resume.pdf';
  const buttonlabel = isSpanish ? 'Descargar CV' : 'Download Resume';


  return (
    <div className={`flex ${styles.letter}`}>
      <p className="text-2xl font-bold">{name.toUpperCase()}</p>
      <p className="text-lg font-bold mb-6">Frontend Software Engineer</p>
      <a className=" text-blue-600 underline text-sm" target="_blank" href="https://franciscodiazpaccot.dev">https://franciscodiazpaccot.dev</a>
      <div className="flex text-sm gap-1 mb-4">
        <p className="">Argentina</p>&#x2022;
        <a className=" text-blue-600 underline" target="_blank" href="mailto:fran.diazpaccot@gmail.com">fran.diazpaccot@gmail.com</a>&#x2022;
        <a className=" text-blue-600 underline" target="_blank" href="https://www.linkedin.com/in/francisco-diaz-paccot-a98a36130/">Linkedin</a>
      </div>
      <div className="w-full">
        <ResumeTitle label={experienceLabel} />
        <TextSplitted left="MERCADO LIBRE" right='Argentina' />
        <TextSplitted left="Sr. Frontend Software Engineer" right={`2019-${nowText}`} />
        <Bullets content={meliBullets} />
        <TextSplitted left="Serfe" right='Argentina' />
        <TextSplitted left="Ssr. Full-Stack Developer" right='2018-2019' />
        <Bullets content={serfeBullets} />
        <ResumeTitle label={langLabel} />
        <TextSplitted left={spanish} right={nativeLabel} />
        <TextSplitted left={english} right='B2' />
        <ResumeTitle label={skillsLabel} className='mt-10' />
        <p className="text-sm">JavaScript, HTML, CSS, Sass, ReactJs, NodeJs, NextJs, Astro, Git, Github, SQL, Looker, GraphQL...</p>
      </div>
    </div>
  )
}

export default Resume;
