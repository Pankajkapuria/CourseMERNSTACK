const express = require('express');
const authUser = require('../middlewh/autuAction');
const NotesData = require('../models/NotesModel/NotesSchama');
const routes = express.Router();


// fatch all notes || END_PONT FATCH || METHOD GET
routes.route('/fatch').get(authUser, async (req, res) => {
    try {
        const notesFatch = await NotesData.find({ user: req.user.userId });
        res.status(200).json(notesFatch);
    } catch (error) {
        res.status(400).send({ msg: "error" })
    }
})


// ADD NOTES || END_POINT ADDNOTES || METHOD POST
routes.route('/addNotes').post(authUser, async (req, res) => {
    let { title, teg, dis } = req.body;
    const error = {};
    if (title.length > 50) {
        error.title = "title lenght should br less 50 charcactor"
    }
    if (teg.length > 20) {
        error.teg = "teg lenght should br less 20 charcactor"
    }

    if (Object.keys(error).length === 0) {
        const notedata = new NotesData({
            user: req.user.userId,
            title,
            teg,
            dis
        })

        await notedata.save();
        res.send({
            notedata
        });
    }
    else {
        res.send({
            error
        });
    }

})


// UPDATE NOTES || END_POINT UPDATENOTES || METHOD PUT 
routes.route('/updateNotes/:id').get(authUser, async (req, res) => {
    try {
        const { title, teg, dis } = req.body;
        const updateData = {};
        if (title) {
            updateData.title = title
        }
        if (teg) {
            updateData.teg = teg
        }
        if (dis) {
            updateData.dis = dis;
        }

        let note = await NotesData.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        if (req.user.userId !== note.user.toString()) {
            return res.status(401).send("Not Allowed");
        }

        note = await NotesData.findByIdAndUpdate(req.params.id, updateData);
        res.send({ note });
    } catch (error) {
        res.send({ "msg": "not update" })
    }
})

// DELETE NOTES || END_PONT DELETENOTES || METHOD DELETE
routes.route('/deleteNotes/:id').delete(authUser, async (req, res) => {
    try {
        let note = await NotesData.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.userId) {
            return res.status(401).send("Not Allowed");
        }

        note = await NotesData.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted" });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = routes;