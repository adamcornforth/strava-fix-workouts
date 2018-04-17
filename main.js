var request = require('request');
var Xray = require('x-ray');
var x = Xray();

var items = [];

headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-Token': '9CS9P+Hem3+c89cE3Ghf/mebc/QuZvDZevGgT/WPJAXi8S9PGl9h9Lj9zuDkkq01Ak8pwoICm0bwfbhLK6Mv0A==',
  'Cookie': 'ajs_anonymous_id=%2240d1438e-4b24-4eb3-ba19-04dac7b826e3%22; fbm_284597785309=base_domain=.www.strava.com; ajs_group_id=null; ajs_user_id=7381; _strava3_session=BAh7DEkiD3Nlc3Npb25faWQGOgZFVEkiJTg3Nzg5ZTdiNGVlN2QxYmJhMDQxYzVjODU4MmMyYTUzBjsAVEkiEGNsZWFyX2NsaWNrBjsARlRJIhNhZnRlcl9hdXRoX2tleQY7AEZJIhRhY3Rpdml0aWVzI3Nob3cGOwBUSSIQX2NzcmZfdG9rZW4GOwBGSSIxQVgvMzNXRVk4RDRjNVBoUTBaeUxYV25yaERPV3NzSHYrZWVrcDZwdTNGYz0GOwBGSSIKcmVjYXAGOwBGSSIJaW5pdAY7AFRJIglmbG93BjsARkkiCmZsb3cyBjsAVEkiB2lkBjsARmkC1Rw%3D--bb7a5043dd82d4b8d23129842741e483121fbf55; _strava4_session=fipmmot9rel02abt7vrk5qrsn4s91962; strava_remember_id=7381; strava_remember_code=9c285d4ab3ecdcda7e4d367eb5cb521c18a8b7a6d9c872c0ce2f733a9ee08381; explore_activity_type=cycling; mp_b36aa4f2a42867e23d8f9907ea741d91_mixpanel=%7B%22distinct_id%22%3A%20%220ee3ef9c-aeea-4607-98d3-f784d12971aa%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.strava.com%2Fathlete%2Froutes%22%2C%22%24initial_referring_domain%22%3A%20%22www.strava.com%22%2C%22%24search_engine%22%3A%20%22google%22%7D; _strava_local_session=BAh7CUkiEGNsZWFyX2NsaWNrBjoGRUZUSSIKZmxhc2gGOwBUQzotQWN0aXZl%0AU3VwcG9ydDo6SGFzaFdpdGhJbmRpZmZlcmVudEFjY2Vzc3sHSSIMZGlzY2Fy%0AZAY7AFRbBkkiFWJyYW5jaF9pbnN0YWxsZWQGOwBGSSIMZmxhc2hlcwY7AFRD%0AOwZ7BkkiFWJyYW5jaF9pbnN0YWxsZWQGOwBGOhVhcHBsaWNhdGlvbl9oZWFk%0ASSIQaW5pdGlhbGl6ZWQGOwBUVEkiEF9jc3JmX3Rva2VuBjsARkkiMVVNeEQ4%0AVFJvYnVqTTBsSzV3Z29MOVVEV2MrY1VhcHRiSXNPbmU5RFhRMnc9BjsARg%3D%3D%0A'
};

request({
    url: 'https://www.strava.com/athlete/training_activities?keywords=&activity_type=Workout&order=start_date_local+DESC&page=1',
    headers: headers
  },
  function (error, response, body) {
    if (error || response.statusCode != 200 || response.headers['content-type'].indexOf('application/json') === -1) {
      console.log('error - Check headers');
      return;
    }

    json = JSON.parse(body);
    pages = Math.ceil(json.total/json.perPage);

    items.push.apply(items, json.models);

    console.log('Total rides ' + json.total + " (" + pages + " pages)");

    for (var page = 2; page <= pages; page++) {
      request({
        url: 'https://www.strava.com/athlete/training_activities?keywords=&activity_type=Workout&order=start_date_local+DESC&page=' + page,
        headers: headers
      },
      function (error, response, body) {
        if (error || response.statusCode != 200 || response.headers['content-type'].indexOf('application/json') === -1) {
          console.log('error - Check headers');
          return;
        }

        json = JSON.parse(body);
        pages = Math.ceil(json.total/json.perPage);

        items.push.apply(items, json.models);

        if (items.length === json.total) {
          // Hacky, but it works
        }
      });
    }
});