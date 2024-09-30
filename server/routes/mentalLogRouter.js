/* eslint-disable no-param-reassign */
const express = require("express");
const mentalLogsController = require("../controllers/mentalLogController");

function routes(MentalLog) {
  const mentalLogRouter = express.Router();
  const controller = mentalLogsController(MentalLog);
  mentalLogRouter.route("/logs").post(controller.post).get(controller.get);
  mentalLogRouter.use("/logs/:logId", (req, res, next) => {
    MentalLog.findById(req.params.logId, (err, mentalLog) => {
      if (err) {
        return res.send(err);
      }
      if (log) {
        req.mentalLog = mentalLog;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  mentalLogRouter
    .route("/logs/:logId")
    .get((req, res) => {
      const returnMentalLog = req.mentalLog.toJSON();
      res.json(returnMentalLog);
    })
    .put((req, res) => {
      const { mentalLog } = req;
      mentalLog.anxiety = req.body.anxiety;
      mentalLog.mood = req.body.mood;
      mentalLog.sleepQuality = req.body.sleepQuality;
      mentalLog.hoursSleep = req.body.hoursSleep;
      mentalLog.stress = req.body.stress;
      mentalLog.user = req.body.user;
      mentalLog.logDate = req.body.logDate;
      req.mentalLog.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(mentalLog);
      });
    })
    .patch((req, res) => {
      const { mentalLog } = req;
      // eslint-disable-next-line no-underscore-dangle
      if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        mentalLog[key] = value;
      });
      req.mentalLog.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(mentalLog);
      });
    })
    .delete((req, res) => {
      req.mentalLog.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });
  return mentalLogRouter;
}

module.exports = routes;
