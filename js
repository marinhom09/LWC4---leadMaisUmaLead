import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class LeadMaisUmaLead extends NavigationMixin(LightningElement) {

recordId;
    handleSucess(event){
    
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: event.detail.id,
            objectApiName: 'Lead',
            actionName: 'view',
        },
    })
        const toastEvent = new ShowToastEvent({
            title: 'Feito!',
            message: 'Lead criada com sucesso!',
            variant: "success",
           
        });
        this.dispatchEvent(toastEvent);
        }

    limpar(){
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
    }
}
