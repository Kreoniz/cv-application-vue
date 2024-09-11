export type TEducation = {
  id: string;
  schoolName: string;
  title: string;
  startDate: string;
  endDate: string;
};

export interface IEducationCardProps {
  schoolName: string;
  title: string;
  startDate: string;
  endDate: string;
}
