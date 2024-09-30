function mentalLogController(MentalLog) {
  function post(req, res) {
    const mentalLog = new MentalLog(req.body);
    mentalLog.user = req.userId;
    mentalLog.save();
    res.status(201);
    return res.json(mentalLog);
  }
  function get(req, res) {
    const query = {};
    if (req.userId) {
      query.user = req.userId;
    }
    MentalLog.find(query, (err, mentalLogs) => {
      if (err) {
        return res.send(err);
      }
      return res.json(mentalLogs);
    });
  }
  return { post, get };
}

module.exports = mentalLogController;
