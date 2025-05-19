"use client";
import React from "react";
import styles from "../page.module.css";
import Link from "next/link";

export default function GuestBook  () {
  return (
    <div className={styles.auroraborealis}>
        <h1 className={styles.scrumRockSalt} style={{ fontSize: "4rem" }}>
          Guest Book
        </h1>
        <h1 className={styles.scrumCharmon} style={{ fontSize: "2rem" }}>
          We are so excited to share this special day with you!
        </h1>
        <p className={styles.scrumRockSalt}>Please leave us a message!</p>
        <textarea
          placeholder="Write your message here..."
          rows="10"
          cols="50"
        >         
        </textarea>
        <br />
        <GuestBookButton href="/">Submit</GuestBookButton>
      </div>
  );
};


