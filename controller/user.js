const path = require('path');
const sequelize = require('sequelize');
const Users = require('../model/user');

exports.getUser = (req, res, next) => {
    Users.findAll()
    .then(result => {
        console.log(JSON.stringify(result));
        return res.json(result);
    })
    .catch(err => console.log(err));
};

exports.getAddUser = (req, res, next) => {
     //console.log(req.name);
    console.log(req.url);
    res.sendFile(path.join(__dirname,'..','views','index.html'));
};

exports.postAddUser = (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    Users.create({
        name: name,
        email: email,
        phone: phone
    })
    .then(res => console.log('userdetails saved'))
    .catch(err => console.log(err));
    
    res.redirect('/addUser');
    
};

exports.getEditUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);

    Users.findByPk(userId)
    .then(user => {
        if(!user) {
            return res.redirect('/addUser');
        }
        console.log(user)
        res.json(user);
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

};

exports.deleteUser =(req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);

    Users.findByPk(userId)
    .then(user => {
        console.log('destroyed');
        user.destroy();
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(err=>console.log(err));
};