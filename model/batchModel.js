module.exports.SELECT_QUERY = 'SELECT * FROM batch';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM batch where id = ?';
module.exports.INSERT_QUERY='INSERT INTO batch (batch_name,batch_status_id,course_id) values (?,?,?)';
module.exports.UPDATE_QUERY='UPDATE batch SET batch_name=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM batch where id=?';
