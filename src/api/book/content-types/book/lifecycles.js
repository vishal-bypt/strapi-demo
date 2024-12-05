module.exports = {
    async afterCreate(event){
        const {result} = event;
        try {console.log("-called-", result);
            await strapi.plugins['email'].services.email.send({
                to : "vishal.panchal@bypt.in",
                from : "vishal.panchal@bypt.in",
                subject : "Testing Email",
                html: `
                <h1>Congratulations!</h1>
                <p>Your book has been successfully created in our system.</p>
                <p><strong>Details:</strong></p>
                <ul>
                    <li><strong>Title:</strong> ${result.name || "N/A"}</li>
                    <li><strong>Author:</strong> ${result.createdBy.firstname + " " +result.createdBy.lastname || "N/A"}</li>
                </ul>
                <p>Thank you for using our service!</p>
            `
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}