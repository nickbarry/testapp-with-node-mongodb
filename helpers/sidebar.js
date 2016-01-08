/**
 * Created by Nicholas on 1/6/2016.
 */
var Stats = require('./stats'),
    Images = require('./images'),
    Comments = require('./comments');

module.exports = function(viewModel, callback){
    viewModel.sidebar = {
        stats: Stats(),
        popular: Images.popular(),
        comments: Comments.newest()
    };

    callback(viewModel);
}