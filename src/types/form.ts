export interface Form {
  companyName: string;
  email: string;
  mobile: string;
  orgType: string;
  password: string;
  website: string;
  serviceProvider: boolean;
  secondaryEmail: string;
  secondaryMobile: string;
  indType: string;
  country: string;
  userName: string;
  city: string;
  state: string;
  pincode: string;
}

export interface FormProps {
  formData: Form;
  setFormData: (data: Form) => void;
}
