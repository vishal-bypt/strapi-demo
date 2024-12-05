module.exports = ({env}) => ({

    email : {
        config : {
            provider: "sendgrid",
            providerOptions: {
                apiKey : env('SENDGRID_API_KEY')
            },
            settings: {
                defaultFrom : "vishal.panchal@bypt.in",
                defaultReplyTo : 'vishal.panchal@bypt.in'
            },
        }
    }
});
