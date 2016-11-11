var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');
var SALT_INDEX = 10
var userSchema = mongoose.Schema({

	email: 			{type: String, unique: true, required: true},
	password: 		{type: String, required: true},
	firstname: 		{type: String },
	lastname: 		{type: String },
	birthday: 		{type: Date},
	created: 		{type: Number, default: function() { Date.now(); }}

});

userSchema.pre('save', function(next) {
    var user = this; // new User(req.body);

    user.email = user.email.toLowerCase();

    // only hash the password if modified or a new user
    if( !user.isModified('password') ) {
        return next();
    }

    // generate a salt value to encrypt our password
    bcryptjs.genSalt(SALT_INDEX, (saltErr, salt) =>{
        if( saltErr ) {
            console.error(saltErr);
            return next(saltErr);
        }
        console.info('SALT GENERATED', salt);

        // hashing this bad boy!
        bcryptjs.hash(user.password, salt, (hashErr, hashedPassword) => {
            if( hashErr ) {
                console.error(hashErr);
                return next(hashErr);
            }
            // override the plain text password with the hashed one.
            user.password = hashedPassword;
            next();
        });
    });
});

module.exports = mongoose.model('user', userSchema);
