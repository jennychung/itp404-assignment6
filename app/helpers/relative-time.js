import Ember from 'ember';
import moment from 'moment';

export function relativeTime(params) {
 
    let datetime = params[0];
    return moment(datetime * 1000).fromNow();
//    return day;
      
}

export default Ember.Helper.helper(relativeTime);
