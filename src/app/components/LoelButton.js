"use client";
import React from "react";
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";

const LoelButton = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        console.log("I Do clicked", count);
    };

    return (
        <button
            ref={buttonRef}
            className={styles.loelBtnFont}
            style={{ width: "200px", height: "50px" }}
            onClick={handleClick}
        >
            Groom ({count})
        </button>
    );
};

export default LoelButton;
