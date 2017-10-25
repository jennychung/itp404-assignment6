import Ember from 'ember';
import $ from 'jquery';
import Service from '@ember/service';

export default Ember.Service.extend({
    findAllForSubreddit(subreddit){
// let subreddit = params.subreddit;

let url = `https://www.reddit.com/r/${subreddit}` + ".json";
return $.getJSON(url).then(function(results){
    console.log(results);
    return results.data.children;
})
            }
});


//This service should have a method called findAllForSubreddit(subreddit)
 // which takes in the subreddit as a parameter (i.e. “cats”).
 // This method will return a promise that resolves with the array
 // of posts for that subreddit (the children property).
