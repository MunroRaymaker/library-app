// app/controllers/index.js
/*import { computed, observer } from '@ember/object';*/
/*import { empty } from '@ember/object/computed';*/
import { match, not } from '@ember/object/computed';

import Controller from '@ember/controller';

export default Controller.extend({
    
    headerMessage: 'Coming Soon',

    emailAddress: '',
    /*isDisabled: computed('emailAddress', function() {
      return this.get('emailAddress') === '';
    })*/
    /*isDisabled: empty('emailAddress')*/
    isDisabled: not('isValid'),
    isValid: match('emailAddress', /^.+@.+\..+$/),

    actions: {

      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      }
    }
});
