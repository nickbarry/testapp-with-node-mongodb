/**
 * Created by Nicholas on 1/19/2016.
 */
var home = require('../../controllers/home'),
    image = require('../../controllers/image'),
    routes = require('../../server/routes');

describe('Routes', function(){
    var app = {
        get: sinon.spy(),
        post: sinon.spy(),
        delete: sinon.spy()
    };
    beforeEach(function(){
        routes.initialize(app); // The textbook claims we created an
        // initialize function in the routes module, but the book didn't
        // mention that function before now (maybe in an earlier edition?).
        // So this test file doesn't work.
    });

    // todo: write tests...
    describe('GETs', function(){
        it('should handle /', function(){
            expect(app.get).to.be.calledWith('/', home.index);
        });
        it('should handle /images/:image_id', function(){
            expect(app.get).to.be.calledWith('/images/:image_id', image.index);
        });
    });
    describe('POSTs',function(){
        it('should handle /images',function(){
            expect(app.post).to.be.calledWith('/images',image.create);
        });
        it('should handle /images/:image_id/like', function(){
            expect(app.post).to.be.calledWith('/images/:image_id/like',image.like);
        });
        it('should handle /images/:image_id/comment', function(){
            expect(app.post).to.be.calledWith('/images/:image_id/comment', image.comment);
        });
    });
    describe('DELETEs', function(){
        it('should handle /images/:image_id', function(){
            expect(app.delete).to.be.calledWith('/images/:image_id', image.remove);
        });
    });
});