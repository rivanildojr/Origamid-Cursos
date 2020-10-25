import React, { useEffect } from "react";

import styles from "./UserStats.module.css";

import UserStatsGraphs from "../UserStatsGraphs";

import Head from "../../utils/Head";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

import useFetch from "../../hooks/useFetch";

import { STATS_GET } from "../../service/api";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    (async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    })();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <Head title="Estatística" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
