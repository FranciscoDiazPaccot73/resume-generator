import styles from '../templates/page.module.scss';

const Preview = ({ imageSrc, shouldShow = true }) => (
  <div
    style={{
      height: '200px',
      width: '160px',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: '20px',
      overflow: 'hidden',
    }}
  >
    <img alt="Preview" src={imageSrc} />
    {shouldShow && <div className={styles.previewButton}>Preview</div>}
  </div>
);

export default Preview;
