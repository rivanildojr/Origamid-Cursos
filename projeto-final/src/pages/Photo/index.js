import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Photo.module.css";

import useFetch from "../../hooks/useFetch";

import { PHOTO_ID_GET } from "../../service/api";

import Error from "../../utils/Error";
import Loading from "../../utils/Loading";
import PhotoContent from "../../components/PhotoContent";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_ID_GET(id);
    (async function () {
      await request(url, options);
    })();
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;

  return <div>Photo</div>;
};

export default Photo;
