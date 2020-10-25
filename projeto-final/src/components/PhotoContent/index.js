import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./PhotoContent.module.css";

import PhotoComments from "../PhotoComments";
import PhotoDelete from "../PhotoDelete";
import Image from "../../utils/Image";

import { UserContext } from "../../Context/UserContext";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.user && user.user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === 1 ? photo.idade + "ano" : photo.idade + "anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments
        id={photo.id}
        comments={comments}
        className={styles.comments}
        single={single}
      />
    </div>
  );
};

export default PhotoContent;
