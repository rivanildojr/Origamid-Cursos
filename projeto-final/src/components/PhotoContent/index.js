import React, { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./PhotoContent.module.css";

import PhotoComments from "../PhotoComments";
import PhotoDelete from "../PhotoDelete";

import { UserContext } from "../../Context/UserContext";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
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
      />
    </div>
  );
};

export default PhotoContent;
