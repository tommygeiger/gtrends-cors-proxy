var express = require('express'), 
    request = require('request'),
    app = express();

app.all('*', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');

    request({url: 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=US', method: 'GET', json: req.body},
        function (error, response, body) {
            if (error) {
                console.error('Error: ' + response.statusCode)
            }
          //  console.log(body);
        }).pipe(res);
    });
    
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), function () {
    console.log('Listening on port ' + app.get('port'));
    });