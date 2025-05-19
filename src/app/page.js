import styles from "./page.module.css";
import VideoBackground from "./components/VideoBackground";
import Link from "next/link";


export default function page({ Component, pageProps }) {
  return (
    <div>
      <VideoBackground />
    </div>
  );
}
