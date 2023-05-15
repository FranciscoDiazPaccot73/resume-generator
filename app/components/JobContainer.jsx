import { useState } from 'react';
import { motion } from 'framer-motion';

import { FaRegTrashAlt } from 'react-icons/fa';
import Form from './FormWork';
import Preview from './Preview';

import { store } from '@/store';
import { setGlobalInfo } from '@/store/searchSlice';
import { toLocalString } from '@/utils';

import styles from './Resume.module.scss';

const JobContainer = ({ imageSrc, previewClick }) => {
  const { globalInfo } = store.getState().state;
  const [showCard, setShowCard] = useState(false);
  const [jobsToShow, setJobs] = useState(globalInfo.jobs);

  const handlePreviewClick = () => {
    if (globalInfo.jobs) previewClick();
  };

  const handleRemoveJob = (id) => {
    const newJobs = globalInfo.jobs?.filter((job) => job.id !== id);

    store.dispatch(setGlobalInfo({ jobs: newJobs }));
    setJobs(newJobs);
  };

  return (
    <div className="relative md:mx-auto md:max-w-6xl md:min-w-2xl">
      <section className="flex justify-center my-8 gap-6">
        <div>
          <motion.div
            layout
            className="max-w-4xl rounded-lg mb-5 bg-secondary-black"
            style={{
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
            transition={{
              layout: {
                duration: 0.5,
                type: 'spring',
              },
            }}
            whileHover={{
              scale: !showCard ? 1.02 : 1,
              boxShadow: '0 0 10px rgba(0,0,0,0.4)',
            }}
          >
            {showCard ? (
              <motion.div
                animate={{
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                style={{ width: '600px' }}
              >
                <Form resetCardState={() => setShowCard(false)} setJobs={(jobs) => setJobs(jobs)} />
              </motion.div>
            ) : (
              <motion.h4
                className="min-w-[600px] p-6 cursor-pointer text-white font-bold"
                layout="position"
                onClick={() => setShowCard(!showCard)}
              >
                Add new job
              </motion.h4>
            )}
          </motion.div>
          <section className="flex flex-col gap-3">
            {jobsToShow?.map(({ id, job, startDate, endDate, employer, currentWork, description }) => (
              <div key={id} className="max-w-4xl w-full rounded-lg p-6 bg-secondary-black relative">
                <div className="absolute p-2 rounded-xl cursor-pointer right-0 top-0" onClick={() => handleRemoveJob(id)}>
                  <FaRegTrashAlt color="#fff" height="12" width="12" />
                </div>
                <div className="flex flex-col gap-1 font-bold">
                  <div className="text-xl text-main flex justify-between items-center">
                    <p>{employer}</p>
                    <p className="text-xs text-main-dark">{`${toLocalString(new Date(startDate))} - ${toLocalString(
                      currentWork ? new Date() : new Date(endDate),
                    )}`}</p>
                  </div>
                  <p className="text-md text-main-dark">{job}</p>
                </div>
                <ul className="mt-3">
                  {description?.map((desc) => (
                    <li key={desc.hash} className="text-white text-sm">
                      - {desc.value}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
        <article className={`rounded-2xl overflow-hidden relative mt-12 ${styles.article}`} onClick={handlePreviewClick}>
          <Preview imageSrc={imageSrc} shouldShow={Boolean(globalInfo.jobs)} />
        </article>
      </section>
    </div>
  );
};

export default JobContainer;
