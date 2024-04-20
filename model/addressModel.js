module.exports.SELECT_QUERY = 'SELECT * FROM address';
module.exports.SELECT_QUERY_ID = 'SELECT * FROM address where id = ?';
module.exports.INSERT_QUERY='INSERT INTO address (street1,street2,city,state,pincode) values (?,?,?,?,?)';
module.exports.UPDATE_QUERY='UPDATE address SET street1=?,street2=?,city=?,state=?,pincode=? WHERE id=?';
module.exports.DELETE_QUERY='DELETE FROM address where id=?';
