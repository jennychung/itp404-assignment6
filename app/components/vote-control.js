import Ember from 'ember';

export default Ember.Component.extend({
     clickedup:false,
       clickeddown:false,
    actions:{
    increment(){

       if (!this.get("clickedup")) {
        let newVoteValue = this.get('score') +1;
        this.get('onvote')(newVoteValue)
          this.set("clickedup", true);
          if (this.get("clickeddown")){
          this.set("clickeddown", false);
        }
       console.log(clickedup);
       }
       else{
       }
},
        decrement(){

           if (!this.get("clickeddown")){

            let newVoteValue = this.get('score') -1;
            this.get('onvote')(newVoteValue)
            this.set("clickeddown", true);

              if (this.get("clickedup")){
          this.set("clickedup", false);
        }



           }
           else{

           }
        }
    }

});
