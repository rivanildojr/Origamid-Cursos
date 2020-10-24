import React, { useEffect } from "react";

import styles from "./FeedPhotos.module.css";

import FeedPhotoItem from "../FeedPhotoItem";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

import useFetch from "../../hooks/useFetch";

import { PHOTOS_GET } from "../../service/api";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    (async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    })();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
