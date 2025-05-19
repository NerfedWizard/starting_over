"use client";
import React from "react";
import styles from "../page.module.css";
import ErinButton from "./ErinButton";
import LoelButton from "./LoelButton";
import GuestBookButton from "./GuestBookButton";
import Link from "next/link";
import GuestBook from "../pages/guest";



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
        <h1 className={styles.scrumCharmon} style={{ fontSize: "4rem" }}>
          Loel Nelson & Dr. Erin Brekke
        </h1>
        
        <h1 className={styles.scrumCharmon} style={{ fontSize: "2rem" }}>
          We are very excited to share this special day with you!
        </h1>
        <p className={styles.scrumRockSalt}>Who's side are you on?</p>
        <LoelButton />
        <ErinButton />
        <h1 className={styles.scrumLobster}
        style={{ paddingTop: "20px", fontSize: "2rem" }}>
          This is the first day of our life....
        </h1>
        <GuestBookButton href="/guestbook">Submit</GuestBookButton>
      </div>
    </div>
  );
};

export default VideoBackground;
