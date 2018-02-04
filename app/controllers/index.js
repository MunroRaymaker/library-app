// app/controllers/index.js
/*import { computed, observer } from '@ember/object';*/
/*import { empty } from '@ember/object/computed';*/
import { match, not } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
    
    headerMessage: 'Coming Soon',
    responseMessage: '',
    emailAddress: '',

    isDisabled: not('isValid'),
    isValid: match('emailAddress', /^.+@.+\..+$/),

    actions: {

      saveInvitation() {
        const email = this.get('emailAddress');
        const newInvitation = this.store.createRecord('invitation', { email: email });
        newInvitation.save().then(response => {
          this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
          this.set('emailAddress', '');
        });
        
      }
    }
});
