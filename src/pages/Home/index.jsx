import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadMentalStats } from "../../redux/actions/mentalStatsActions";
import { connect } from "react-redux";
import MentalStatsChart from "../../components/MentalStatsChart";
import useWebSocket, { ReadyState } from "react-use-websocket";

const Home = ({ mentalStats, loadMentalStats, authenticated }) => {
  useEffect(() => {
    authenticated && loadMentalStats();
  }, [loadMentalStats, authenticated, mentalStats]);

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

  if (!authenticated) return <p>Welcome to Health Tracker</p>;
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
