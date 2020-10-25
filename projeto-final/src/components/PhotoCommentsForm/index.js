import React, { useState } from "react";

import styles from "./PhotoCommentsForm.module.css";

import { ReactComponent as Enviar } from "../../assets/enviar.svg";

import useFetch from "../../hooks/useFetch";

import { COMMENT_POST } from "../../service/api";

import Error from "../../utils/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");

  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;