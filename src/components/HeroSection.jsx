import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const HeroSection = ({ title, imgUrl }) => {
  return (
    <div className="relative mb-0">
      <div className="bg-slate-300 py-10">
        <div className="container">
          <div className="row items-center">
            <div className="md:col-6 space-y-5">
              <h2 className="text-4xl font-semibold ">{title}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                placeat accusamus nihil consequuntur alias similique!
              </p>
              <Link href="/movie" className="btn btn-warning">
                See more movies
              </Link>
            </div>
            <div className="md:col-6 py-20">
              <Image src={imgUrl} alt="web" height={200} width={400}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["custom-shape-divider-bottom-1692553328"]}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
    </svg>
</div>
    </div>
  );
};

export default HeroSection;
