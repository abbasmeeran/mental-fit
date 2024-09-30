import React, { useState } from "react";
import MentalStatForm from "../../components/MentalStatForm";
import { saveMentalStats } from "../../redux/actions/mentalStatsActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const MentalStat = ({ saveMentalStats, mentalStats, history }) => {
  const onSave = async (value) => {
    try {
      await saveMentalStats(value);
      toast.success("Saved succesfully");
      history.push("/home");
    } catch (error) {
      toast.error(
        "Save failed. Your Google signin has expired. Please Signin",
        {
          autoClose: false,
        }
      );
    }
  };

  return (
    <div>
      <MentalStatForm onSave={onSave} />
    </div>
  );
};

const mapDispatchToProps = {
  saveMentalStats,
};

export default connect(null, mapDispatchToProps)(MentalStat);
