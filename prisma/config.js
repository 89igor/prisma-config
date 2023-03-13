const { casino_adminClient } = require('./prisma/generated/casino_admin');
const { fishClient } = require('./prisma/generated/fish');
const { fish_euClient } = require('./prisma/generated/fish_eu');
const { fish_haiwangClient } = require('./prisma/generated/fish_haiwang');
const { fish_kuailebuyuClient } = require('./prisma/generated/fish_kuailebuyu');
const { fish_leitingzhanjiClient } = require('./prisma/generated/fish_leitingzhanji');
const { fish_shenhaibuyuClient } = require('./prisma/generated/fish_shenhaibuyu');
const { gameClient } = require('./prisma/generated/game');
const { game_clubClient } = require('./prisma/generated/game_club');
const { game_hongbaoClient } = require('./prisma/generated/game_hongbao');
const { game_logClient } = require('./prisma/generated/game_log');
const { game_main_serverClient } = require('./prisma/generated/game_main_server');
const { jindian_cowClient } = require('./prisma/generated/jindian_cow');
const { la_baClient } = require('./prisma/generated/la_ba');
const { landlordsClient } = require('./prisma/generated/landlords');


const casino_admin = new casino_adminClient();
const fish = new fishClient();
const fish_eu = new fish_euClient();
const fish_haiwang = new fish_haiwangClient();
const fish_kuailebuyu = new fish_kuailebuyuClient();
const fish_leitingzhanji = new fish_leitingzhanjiClient();
const fish_shenhaibuyu = new fish_shenhaibuyuClient();
const game = new gameClient();
const game_club = new game_clubClient();
const game_hongbao = new game_hongbaoClient();
const game_log = new game_logClient();
const game_main_server = new game_main_serverClient();
const jindian_cow = new jindian_cowClient();
const la_ba = new la_baClient();
const landlords = new landlordsClient();

exports.casino_admin_Client = casino_admin;
exports.fish_Client = fish;
exports.fish_eu_Client = fish_eu;
exports.fish_haiwang_Client = fish_haiwang;
exports.fish_kuailebuyu_Client = fish_kuailebuyu;
exports.fish_leitingzhanji_Client = fish_leitingzhanji;
exports.fish_shenhaibuyu_Client = fish_shenhaibuyu;
exports.game_Client = game;
exports.game_club_Client = game_club;
exports.game_hongbao_Client = game_hongbao;
exports.game_log_Client = game_log;
exports.game_main_server_Client = game_main_server;
exports.jindian_cow_Client = jindian_cow;
exports.la_ba_Client = la_ba;
exports.landlords_Client = landlords;