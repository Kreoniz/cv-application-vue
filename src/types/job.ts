export type TJob = {
  id: string;
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
};

export interface IExperienceCardProps {
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
}
