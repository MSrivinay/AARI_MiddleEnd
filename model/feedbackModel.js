module.exports.SELECT_QUERY = 'SELECT * FROM feedback';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM feedback where id = ?';
module.exports.INSERT_QUERY='INSERT INTO feedback (feedback) value(?)';
module.exports.UPDATE_QUERY='UPDATE feedback SET feedback=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM feedback where id=?';
