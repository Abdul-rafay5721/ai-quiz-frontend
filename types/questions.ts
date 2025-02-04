export type Questions = {
  _id: string;
  questions: string;
  isDeleted: boolean;
  deleteDate: string | null;
  updatedAt: string;
  createdAt: string;
};

export enum QuestionStatus {
  NEW = "New",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

export type QuestionsList = {
  _id: string;
  index: number,
  question: string;
  status: QuestionStatus;
  answer: string;
};
