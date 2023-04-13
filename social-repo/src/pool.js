const pg = require("pg");

class Pool {
  _pool = null;

  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query(`SELECT 1 + 1;`);
  }

  close() {
    return this._pool.end();
  }

  query(sql) {
    // REALLY BIG SECURITY ISSUE HERE
    return this._pool.query(sql);
  }
}

module.exports = new Pool();
