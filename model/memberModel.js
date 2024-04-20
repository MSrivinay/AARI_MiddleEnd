module.exports.SELECT_QUERY = 'SELECT * FROM member';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM member where id = ?';
module.exports.INSERT_QUERY='INSERT INTO member (name, login_name,password,role_id,gender,email,phone_number) values (?,?,?,?,?,?,?)';
module.exports.UPDATE_QUERY='UPDATE member  SET name=?,login_name=?,password=?,role_id=?,gender=?,email=?,phone_number=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM member where id=?';
