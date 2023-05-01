export interface MultiStepFormType {
    name: string,
    email: string,
    phoneNumber: string,
    planType: PlanType,
    monthly: boolean,
    onlineService: boolean,
    largerStorage: boolean,
    customizaleProfile: boolean,
}

export enum PlanType {
    Arcade,
    Advanced,
    Pro
}