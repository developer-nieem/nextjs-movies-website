import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ curEle }) => {
  const { title, id, synopsis, type } = curEle.jawSummary;
  return (
    <div className="md:col-4 sm:col-6 my-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          {" "}
          <Image
            src={curEle.jawSummary.backgroundImage.url}
            alt={title}
            width={400}
            height={200}
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{synopsis}</p>
          <div className="card-actions justify-end">
            <Link href={`/movie/${id}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
