const User = require('./User');
const Chat = require('./Chat');
const Channel = require('./Channel');

User.hasMany(Channel, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Channel.hasMany(Chat, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Chat.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Chat, Channel };
