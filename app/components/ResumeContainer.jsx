'use client';

import Form from './Form';
import Preview from './Preview';

import styles from './Resume.module.scss';

const ResumeContainer = ({ imageSrc, previewClick }) => {
  return (
    <div className="relative md:mx-auto md:max-w-6xl md:min-w-2xl">
      <section className="flex justify-center my-8 gap-6">
        <Form />
        <article className={`rounded-2xl overflow-hidden relative mt-12 ${styles.article}`} onClick={previewClick}>
          <Preview imageSrc={imageSrc} />
        </article>
      </section>
    </div>
  );
};

export default ResumeContainer;
