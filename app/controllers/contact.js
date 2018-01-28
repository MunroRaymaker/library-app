import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed'

export default Controller.extend({

    emailAddress: '',
    message: '',
    id: '',
    
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: gte('message.length', 5),
    
    isValid: and('isValidEmail','isMessageLongEnough'),
    isNotValid: not('isValid'),

    actions: {        
              saveMessage() {
                alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
                this.set('responseMessage', `Thank you! We've just sent your message from: ${this.get('emailAddress')}`);
                //this.set('emailAddress', '');
                //this.set('message', '');
              }
            }
});
