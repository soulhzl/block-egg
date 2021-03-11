// 配置mongoose集合
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const UserSchema = new Schema({
      username: {
        'type': String,
        'require': true
      },
      password: {
        'type': String,
        'require': true
      },
    });
    return mongoose.model('User', UserSchema,'user');
  };