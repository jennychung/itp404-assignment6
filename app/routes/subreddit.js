import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
    reddit: Ember.inject.service(),
    model(params) {
        console.log(params);
        return this.get('reddit').findAllForSubreddit(params.subreddit);


        //  let redresults = this.modelFor('subreddit');
        //  return redresults.find(function(results){
        //    console.log(results);
        //    return results.data.children;
        //  })
    }
});
