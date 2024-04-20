module.exports.SELECT_QUERY = 'SELECT * FROM sub_course';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM sub_course where id = ?';
module.exports.INSERT_QUERY='INSERT INTO sub_course (name,syllabus,course_id,id) values (?,?,?,?)';
module.exports.UPDATE_QUERY='UPDATE sub_course SET name=? ,syllabus=?,course_id=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM sub_course where id=?';
