"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const cat_1 = tslib_1.__importDefault(require("./controllers/cat"));
const user_1 = tslib_1.__importDefault(require("./controllers/user"));
const setRoutes = (app) => {
    const router = (0, express_1.Router)();
    const catCtrl = new cat_1.default();
    const userCtrl = new user_1.default();
    // Cats
    router.route('/cats').get(catCtrl.getAll);
    router.route('/cats/count').get(catCtrl.count);
    router.route('/cat').post(catCtrl.insert);
    router.route('/cat/:id').get(catCtrl.get);
    router.route('/cat/:id').put(catCtrl.update);
    router.route('/cat/:id').delete(catCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Test routes
    if (process.env.NODE_ENV === 'test') {
        router.route('/cats/delete').delete(catCtrl.deleteAll);
        router.route('/users/delete').delete(userCtrl.deleteAll);
    }
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
};
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map