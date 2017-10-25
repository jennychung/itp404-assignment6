import Ember from 'ember';
import $ from 'jquery';
import Service from '@ember/service';

export default Ember.Controller.extend({
 
  actions:{
            searchReddit(){
               event.preventDefault();
              let subreddit  = this.get('subreddit');
              console.log(subreddit);
              this.transitionToRoute('subreddit', subreddit);

},

reddit(findAllForSubreddit, jQueryEvent){
            this.get('subreddit').add(findAllForSubreddit);
}
}


});
