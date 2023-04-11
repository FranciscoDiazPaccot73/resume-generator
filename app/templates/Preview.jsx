import styles from './page.module.scss';

const Preview = ({ imageSrc }) => (
  <div
    style={{
      height: "200px",
      width: "160px",
      position: "relative",
      cursor: "pointer",
      borderRadius: '20px',
      overflow: 'hidden',
    }}
  >
    <img src={imageSrc} alt="Preview" />
    <div className={styles.previewButton}>Preview</div>
  </div>
);

export default Preview;
