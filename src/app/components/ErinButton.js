"use client";
import React from "react";
import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";


const ErinButton = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);
    // const { data: session } = useSession();

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        console.log("I Don't clicked", count);
        // router.push("/IDONT");
    };

    return (
        <button
            ref={buttonRef}
            className={styles.erinBtnFont}
            style={{ width: "200px", height: "50px" }}
            onClick={handleClick}
        >
            Bride ({count})
        </button>
    );
};

export default ErinButton;
