import styles from "../page.module.css";

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="AB_Space_Video.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
        <h1 className={styles.scrumRockSalt} style={{ fontSize: "4rem" }}>
          The Wedding of...
        </h1>
        <h1 className={styles.scrumLobster} style={{ fontSize: "4rem" }}>
          Erin Marie Brekke & Loel Nelson
        </h1>
        <h1 className={styles.scrumCharmon}>
          This is the first day of our life....
        </h1>
        <h1 className={styles.scrumMonoton} style={{ fontSize: "2rem" }}>
          We are so excited to share this special day with you!
        </h1>
        
        <button className={styles.scrumSubmitBtn}  style={{ width: '200px', height: '50px' }}>I Do</button>
      </div>
      
    </div>
  );
};

export default VideoBackground;
