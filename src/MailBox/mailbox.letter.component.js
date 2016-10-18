angular.module('mailbox') 
.component('letter',{
    bindings: {
      letterId: '<'
    },
    template: ` <div role="dialog" tabindex="-1" aria-labelledby="modal_header" class="slds-modal slds-fade-in-open">
  <div class="slds-modal__container">
    <div class="slds-modal__header">	
	 <button class="slds-button slds-modal__close slds-button--icon-inverse"  ng-click="$ctrl.goBack()">
        <svg aria-hidden="true" class="slds-button__icon slds-button__icon--large">
          <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#close"></use>
        </svg>
        <span class="slds-assistive-text">Close</span>
      </button>
      <h2 id="modal_header" class="slds-text-heading--medium">{{$ctrl.letter.subject}}</h2>
    </div>
    <div class="slds-modal__content slds-p-around--medium">
      <div>
		<p><b>To:</b> {{$ctrl.letter.to}}</p><br/>
        <p>{{$ctrl.letter.body}}</p>		
      </div>
    </div>
    <div class="slds-modal__footer">      
      <button class="slds-button slds-button--brand" ng-click="$ctrl.deleteMail($ctrl.letter._id)" ng-disabled="$ctrl.deleting">Delete</button>
    </div>
  </div>
</div>
<div class="slds-backdrop slds-backdrop--open"></div>`,
    controller: function($state, $scope, MailsDataSvc) {
		this.deleting = false;
		MailsDataSvc.getAllMails().then(letters => {
			this.letter = letters.find(i => i._id == this.letterId);
		})
		MailsDataSvc.getAllMailboxes()
			.then(mailboxes => {
				this.trashMailbox = mailboxes.find(i => i.title.toUpperCase() == 'TRASH')
				this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
			})
		this.goBack = function() {
			$state.go('^');
		}
		this.deleteMail = function(letterId) {
			this.deleting = true;
			if(this.letter.mailbox == this.trashMailbox._id) {
				MailsDataSvc.deleteMail(this.letter._id).then( () => {
					$scope.$emit('deleteLetter', letterId);
					$state.go('^');
					this.deleting = false;
				});
			} else {
				MailsDataSvc.moveToTrash(this.letter._id, { mailbox: this.trashMailbox._id }).then( () => {
					$scope.$emit('deleteLetter', letterId);
					$state.go('^');
					this.deleting = false;
				});
			}
			
		}
    }
  })