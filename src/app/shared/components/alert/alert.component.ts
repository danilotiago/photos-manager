import { AlertService } from './alert.service';
import { Component, Input } from '@angular/core';
import { Alert, AlertType } from './alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    @Input() timeout = 3000;
    alerts: Alert[] = [];

    constructor(private alertService: AlertService) {
        // toda vez que o subject do alertService emitir um novo alert, 
        // sera recebido aqui este alert e sera exibido
        this.alertService.getAlert()
            .subscribe(alert => {
                if (alert) {
                    this.alerts.push(alert);
                    // remove o alerta apos o timeout acabar
                    setTimeout(() => this.removeAlert(alert), this.timeout);
                } else {
                    this.alerts = [];
                }
            })
    }

    removeAlert(alertToRemove: Alert): void {
        this.alerts = this.alerts.filter(alert => alert != alertToRemove);
    }

    getAlertClass(alert: Alert): string {
        if (! alert) return '';

        switch (alert.alertType) {
            case AlertType.SUCCESS:
                return 'alert alert-success';
            case AlertType.INFO:
                return 'alert alert-info';
            case AlertType.DANGER:
                return 'alert alert-danger';
            case AlertType.WARNING:
                return 'alert alert-warning';
        }
    }
}