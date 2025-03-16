"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCtrl {
    // Get all
    getAll = async (req, res) => {
        try {
            const docs = await this.model.find({});
            return res.status(200).json(docs);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    // Count all
    count = async (req, res) => {
        try {
            const count = await this.model.countDocuments();
            return res.status(200).json(count);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    // Insert
    insert = async (req, res) => {
        try {
            const obj = await new this.model(req.body).save();
            return res.status(201).json(obj);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    // Get by id
    get = async (req, res) => {
        try {
            const obj = await this.model.findOne({ _id: req.params.id });
            return res.status(200).json(obj);
        }
        catch (err) {
            return res.status(500).json({ error: err.message });
        }
    };
    // Update by id
    update = async (req, res) => {
        try {
            await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
            return res.sendStatus(200);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    // Delete by id
    delete = async (req, res) => {
        try {
            await this.model.findOneAndDelete({ _id: req.params.id });
            return res.sendStatus(200);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
    // Drop collection (for tests)
    deleteAll = async (_req, res) => {
        try {
            await this.model.deleteMany();
            return res.sendStatus(200);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    };
}
exports.default = BaseCtrl;
//# sourceMappingURL=base.js.map