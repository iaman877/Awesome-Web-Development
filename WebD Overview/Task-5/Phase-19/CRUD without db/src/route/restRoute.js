const allRoutes = (app) => 
{

    app.route('/student')
        .get((req, res) => res.send('Sucessful GET request by  aman'))
        .post((req, res) =>res.send('Sucessful POST request.'));

    app.route('/student/:studentID')
        .delete((req, res) => res.send('Sucessful DELETE request..'))
        .put((req, res) =>res.send('Sucessful PUT request.'));
}
export default allRoutes;