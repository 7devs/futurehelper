var router = require('express').Router();
var models = require('../models');
var myasync = require('async');

router.route('/rank')
    .get(function(req, res, next) {
        var DailyFundModel = models.DailyFund;
        DailyFundModel.find({
            tradeDate: '20161020'
        }).limit(10).select('userId presentFund riskdegree earning earningRate').sort('-earningRate').exec(function(err, dailyfunds) {
            if (err) throw err;
            res.render('rank', {
                'results': dailyfunds
            });
        });
        // res.render('rank');
    });

router.route('/user')
    .get(function(req, res, next) {
        var DailyFundModel = models.DailyFund;
        var UserModel = models.User;
        DailyFundModel.find({
            tradeDate: '20161020',
            userId: '10606152'
        }).select('userId tradeDate previousFund presentFund riskdegree earning earningRate').exec(function(err, dailyfund) {
            if (err) throw err;
            console.log(dailyfund);
            res.render('user', {
                'result': dailyfund
            });
        });
        // res.render('rank');
    });

router.route('/position')
    .get(function(req, res, next) {
        var DailyFundModel = models.DailyFund;
        DailyFundModel.find({
            tradeDate: '20161020'
        }).limit(3).select('userId').sort('-earningrate').exec(function(err, dailyfunds) {
            if (err) throw err;
            var DailyPositionModel = models.DailyPosition;
            myasync.parallel({
                first_buy: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[0].userId,
                        tradeDate: '20161020',
                        positionType: true
                    }).select('userId contract').exec(echo);
                },
                first_sell: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[0].userId,
                        tradeDate: '20161020',
                        positionType: false
                    }).select('userId contract').exec(echo);
                },
                second_buy: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[1].userId,
                        tradeDate: '20161020',
                        positionType: true
                    }).select('userId contract').exec(echo);
                },
                second_sell: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[1].userId,
                        tradeDate: '20161020',
                        positionType: false
                    }).select('userId contract').exec(echo);
                },
                third_buy: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[2].userId,
                        tradeDate: '20161020',
                        positionType: true
                    }).select('userId contract').exec(echo);
                },
                third_sell: function(echo) {
                    DailyPositionModel.find({
                        userId: dailyfunds[2].userId,
                        tradeDate: '20161020',
                        positionType: false
                    }).select('userId contract').exec(echo);
                }
            }, function(err, results) {
                var positions = {
                    first: [],
                    second: [],
                    third: []
                };
                if (results.first_buy !== [] && results.first_sell !== []) {
                    var buy_contracts = [],
                        sell_contracts = [];
                    positions.first.push(results.first_buy[0].userId);
                    for (var i = 0; i < results.first_buy.length; i++) {
                        buy_contracts.push(results.first_buy[i].contract);
                    }
                    positions.first.push(buy_contracts.join(', '));
                    for (var i = 0; i < results.first_sell.length; i++) {
                        buy_contracts.push(results.first_sell[i].contract);
                    }
                    positions.first.push(sell_contracts.join(', '));
                }
                if (results.first_buy !== [] && results.first_sell === []) {
                    var buy_contracts = [];
                    positions.first.push(results.first_buy[0].userId);
                    for (var i = 0; i < results.first_buy.length; i++) {
                        buy_contracts.push(results.first_buy[i].contract);
                    }
                    positions.first.push(buy_contracts.join(', '));

                    positions.first.push('null');
                }
                if (results.first_buy === [] && results.first_sell !== []) {
                    var sell_contracts = [];
                    positions.first.push(results.first_sell[0].userId);

                    positions.first.push('null');
                    for (var i = 0; i < results.first_sell.length; i++) {
                        buy_contracts.push(results.first_sell[i].contract);
                    }
                    positions.first.push(sell_contracts.join(', '));
                }
                if (results.second_buy !== [] && results.second_sell !== []) {
                    var buy_contracts = [],
                        sell_contracts = [];
                    positions.second.push(results.second_buy[0].userId);
                    for (var i = 0; i < results.second_buy.length; i++) {
                        buy_contracts.push(results.second_buy[i].contract);
                    }
                    positions.second.push(buy_contracts.join(', '));
                    for (var i = 0; i < results.second_sell.length; i++) {
                        buy_contracts.push(results.second_sell[i].contract);
                    }
                    positions.second.push(sell_contracts.join(', '));
                }
                if (results.second_buy !== [] && results.second_sell === []) {
                    var buy_contracts = [];
                    positions.second.push(results.second_buy[0].userId);
                    for (var i = 0; i < results.second_buy.length; i++) {
                        buy_contracts.push(results.second_buy[i].contract);
                    }
                    positions.second.push(buy_contracts.join(', '));

                    positions.second.push('null');
                }
                if (results.second_buy === [] && results.second_sell !== []) {
                    var sell_contracts = [];
                    positions.second.push(results.second_sell[0].userId);

                    positions.second.push('null');
                    for (var i = 0; i < results.second_sell.length; i++) {
                        buy_contracts.push(results.second_sell[i].contract);
                    }
                    positions.second.push(sell_contracts.join(', '));
                }
                if (results.third_buy !== [] && results.third_sell !== []) {
                    var buy_contracts = [],
                        sell_contracts = [];
                    positions.third.push(results.third_buy[0].userId);
                    for (var i = 0; i < results.third_buy.length; i++) {
                        buy_contracts.push(results.third_buy[i].contract);
                    }
                    positions.third.push(buy_contracts.join(', '));
                    for (var i = 0; i < results.third_sell.length; i++) {
                        buy_contracts.push(results.third_sell[i].contract);
                    }
                    positions.third.push(sell_contracts.join(', '));
                }
                if (results.third_buy !== [] && results.third_sell === []) {
                    var buy_contracts = [];
                    positions.third.push(results.third_buy[0].userId);
                    for (var i = 0; i < results.third_buy.length; i++) {
                        buy_contracts.push(results.third_buy[i].contract);
                    }
                    positions.third.push(buy_contracts.join(', '));

                    positions.third.push('null');
                }
                if (results.third_buy === [] && results.third_sell !== []) {
                    var sell_contracts = [];
                    positions.third.push(results.third_sell[0].userId);

                    positions.third.push('null');
                    for (var i = 0; i < results.third_sell.length; i++) {
                        buy_contracts.push(results.third_sell[i].contract);
                    }
                    positions.third.push(sell_contracts.join(', '));
                }
                // res.send(positions);
                // res.send(results);
                res.render('position', {
                    'positions': positions
                });
            });

        });
    });

module.exports = router;
