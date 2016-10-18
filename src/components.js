angular.module('mailbox')
.component('mailboxes',{
    controller: function(MailsDataSvc) {	  
      MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.mailboxes = mailboxes;
        })
    },
    template: `<div class="slds-context-bar">
				  <div class="slds-context-bar__primary slds-context-bar__item--divider-right">
					<div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">
					  <div class="slds-context-bar__icon-action">
						<a href="javascript:void(0);" class="slds-icon-waffle_container slds-context-bar__button">
						  <div class="slds-icon-waffle">
							<div class="slds-r1"></div>
							<div class="slds-r2"></div>
							<div class="slds-r3"></div>
							<div class="slds-r4"></div>
							<div class="slds-r5"></div>
							<div class="slds-r6"></div>
							<div class="slds-r7"></div>
							<div class="slds-r8"></div>
							<div class="slds-r9"></div>
						  </div>          
						</a>
					  </div>
					  <span class="slds-context-bar__label-action slds-context-bar__app-name">
						<span class="slds-truncate">MailBox</span>
					  </span>
					</div>
				  </div>
				  <nav class="slds-context-bar__secondary" role="navigation">
					<ul class="slds-grid">
					   <li class="slds-context-bar__item" ng-repeat="mailbox in $ctrl.mailboxes" ui-sref="mailbox({mailboxId: mailbox._id })" ui-sref-active="slds-is-active">
						<a class="slds-context-bar__label-action" title={{mailbox.title}}>
						  <span class="slds-truncate">{{mailbox.title}}</span>
						</a>
					  </li>
					  <li class="slds-context-bar__item" ui-sref="create" ui-sref-active="slds-is-active">
						<a class="slds-context-bar__label-action" title="create">
						  <span class="slds-truncate">create</span>
						</a>
					  </li>
					  <li class="slds-context-bar__item" ui-sref="contacts" ui-sref-active="slds-is-active">
						<a class="slds-context-bar__label-action" title="contacts">
						  <span class="slds-truncate">contacts</span>
						</a>
					  </li>
					</ul>
				  </nav>
				</div>
				<ui-view></ui-view>`

  })
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
      <button class="slds-button slds-button--brand" ng-click="$ctrl.deleteMail($ctrl.letter._id)">Delete</button>
    </div>
  </div>
</div>
<div class="slds-backdrop slds-backdrop--open"></div>`,
    controller: function($state, MailsDataSvc) {
		MailsDataSvc.getAllMails().then(letters => {
			this.letter = letters.find(i => i._id == this.letterId);
		})
		this.goBack = function() {
			$state.go('^');
		}
		this.deleteMail = function(letterId) {			
			MailsDataSvc.deleteMail(this.letter._id);
			$state.go('^');
		}
    }
  })
  .component('letters', {
    bindings: {
      mailboxId: '<'
    },
    template: `<div class="slds-p-left--xx-large">	
				<div ng-repeat="letter in $ctrl.letters">
					<div ui-sref="letter({letterId:letter._id })" class="slds-p-around--xx-small emailCard">{{letter.subject}}</div>					
				 </div>
				 <ui-view></ui-view>
				</div>`,
    controller: function(MailsDataSvc) {
      MailsDataSvc.getAllMails().then(letters => {
        this.letters = letters.filter(i => i.mailbox == this.mailboxId);
      })
    }
  })