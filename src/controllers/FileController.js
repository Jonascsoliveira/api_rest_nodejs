class FileController {
  store(req, res) {
    res.json(req.file);
  }
}

export default new FileController();
