const { Schema, model } = require('mongoose');

const countrySchema = new Schema(
    {   
        name: String,
        name_lang:{
        en:String,
        ru:String,
        ua:String
    },
        capital:{
            en:String,
            ru:String,
            ua:String
        },
        UTC: Number,
        img:String,
        video:String,
        description: {
            en:String,
            ru:String,
            ua:String
        },
        attraction:[
            {
                name:{
                    en:String,
                    ru:String,
                    ua:String
                },
                img:String,
                description: {
                    en:String,
                    ru:String,
                    ua:String
                }
            }
        ]

    }
);

const Country = model('countries', countrySchema);

module.exports = Country;