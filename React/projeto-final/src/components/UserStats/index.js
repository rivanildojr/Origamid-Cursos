import React, { lazy, Suspense, useEffect } from "react";

import Head from "../../utils/Head";
import Error from "../../utils/Error";
import Loading from "../../utils/Loading";

import useFetch from "../../hooks/useFetch";

import { STATS_GET } from "../../service/api";

const UserStatsGraphs = lazy(() => import("../UserStatsGraphs"));

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
      <Suspense fallback={<Loading />}>
        <Head title="Estatística" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
