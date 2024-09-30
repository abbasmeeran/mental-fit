import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadMentalStats } from "../../redux/actions/mentalStatsActions";
import { connect } from "react-redux";
import MentalStatsChart from "../../components/MentalStatsChart";
import useWebSocket, { ReadyState } from "react-use-websocket";

const Home = ({ mentalStats, loadMentalStats, authenticated }) => {
  useEffect(() => {
    authenticated && loadMentalStats();
  }, [authenticated]);

  // const WS_URL = "ws://127.0.0.1:8181";
  // const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
  //   WS_URL,
  //   {
  //     share: false,
  //     shouldReconnect: () => true,
  //   }
  // );

  // // Run when the connection state (readyState) changes
  // useEffect(() => {
  //   console.log("Connection state changed");
  //   if (readyState === ReadyState.OPEN) {
  //     sendJsonMessage({
  //       event: "start",
  //       data: {
  //         user: profile?.userId,
  //       },
  //     });
  //   }
  // }, [readyState, profile]);

  // // Run when a new WebSocket message is received (lastJsonMessage)
  // useEffect(() => {
  //   console.log(`Got a new message: ${lastJsonMessage}`);
  // }, [lastJsonMessage]);

  if (!authenticated)
    return (
      <div class="px-4 sm:px-0">
        <h1 class="text-base font-semibold leading-7 text-gray-900">
          Welcome to our Personal Health Tracker
        </h1>
        <p class="mt-1 max-w-2xl text-md leading-6 text-gray-500">
          Track your helath on daily basis.
        </p>
      </div>
    );
  return (
    <div>
      <MentalStatsChart mentalStats={mentalStats} />
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const mentalStats = state.mentalStats;
  return { mentalStats, authenticated: localStorage.getItem("access_token") };
}

const mapDispatchToProps = {
  loadMentalStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
