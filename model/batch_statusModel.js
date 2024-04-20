module.exports.SELECT_QUERY = 'SELECT * FROM batch_status';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM batch_status where id = ?';
module.exports.INSERT_QUERY='INSERT INTO batch_status (status,id) values (?,?)';
module.exports.UPDATE_QUERY='UPDATE batch_status SET status=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM batch_status where id=?';
