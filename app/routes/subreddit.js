import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  reddit: Ember.inject.service(),
    model(params){
            return this.get('reddit').findAllForSubreddit(params.subreddit);

       console.log(params);
        //  let redresults = this.modelFor('subreddit');
        //  return redresults.find(function(results){
        //    console.log(results);
        //    return results.data.children;
        //  })
    }
});
