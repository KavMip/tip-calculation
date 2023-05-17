export interface MultiStepFormType {
    personalInfo: PersonalInfoType;
    planType: SelectPlanType;
    addOns: AddOnsType;
}

export enum PlanType {
    Arcade = "Arcade",
    Advanced = "Advanced",
    Pro = "Pro"
}

export interface PersonalInfoType {
    name: string | undefined;
    email: string | undefined;
    phoneNumber: string | undefined;
}

export interface SelectPlanType {
    planType: PlanType;
    yearly: boolean;
}

export interface AddOnsType {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
}

