import Ember from 'ember';

export default Ember.Controller.extend({
    
      sortedPosts: Ember.computed('model', function() {
    let posts = this.get('model');

    let sortedPosts = posts.sort(function(postA, postB) {
      let aScore = moment(postA.data.score);
      let bScore = moment(postB.data.score);
      if (aScore < bScore) {
        return 1;
      }
      if (aScore > bScore) {
        return -1;
      }
      return 0;
    });

    return sortedPosts;
  })
    
    
});

//
//Lastly, add some logic to the component so that if a user clicks the up arrow, they can only click the down arrow. If they click the down arrow, then they can only click the up arrow. This will prevent users from up-voting or down-voting for a given post more than once.