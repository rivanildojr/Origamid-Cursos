import React, { useEffect } from "react";

import styles from "./FeedModal.module.css";

import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

import PhotoContent from "../PhotoContent";

import useFetch from "../../hooks/useFetch";

import { PHOTO_GET } from "../../service/api";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
