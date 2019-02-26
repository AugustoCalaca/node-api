'use strict';

exports.post = function(req, res, next) {
  res.status(200).send(req.body);
};

exports.put = function(req, res, next) {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body
  });
};

exports.delete = function(req, res, next) {
  res.status(200).send(req.body);
}; 