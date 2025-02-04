import { useAppSelector } from "@/hook/redux.hook";
import { QuestionsList, QuestionStatus } from "@/types/questions";
import { getAllQuizes, getUserAttempQuiz } from "@/utils/api/quiz";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type QuestionsListProps = {
  selectedQuestion: QuestionsList;
  questions: QuestionsList[];
  onClickSelectedQuestion: (selectedQuestion: QuestionsList) => void;
};

const QuestionsListing = ({
  selectedQuestion,
  onClickSelectedQuestion,
  questions,
}: QuestionsListProps) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow rounded-lg h-[700px] overflow-y-scroll">
      <h2 className="text-lg font-semibold mb-4 px-4 pt-4 pb-2 sticky bg-white top-0 z-10">
        Questions
      </h2>
      <div className="space-y-2 px-4">
        {questions.map((q, index) => (
          <div
            key={q._id}
            onClick={() => onClickSelectedQuestion(q)}
            className={`p-3 rounded-md cursor-pointer border ${
              selectedQuestion._id === q._id
                ? "bg-blue-50 border-blue-300"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{`Question ${index + 1}`}</span>
              {q.status === QuestionStatus.IN_PROGRESS && (
                <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">
                  {q.status}
                </span>
              )}
              {q.status === QuestionStatus.COMPLETED && (
                <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                  {q.status}
                </span>
              )}
              {q.status === QuestionStatus.NEW && (
                <span className="bg-gray-200 text-xs px-2 py-1 rounded">
                  {q.status}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm/4 line-clamp-2 text-gray-600 mb-4 leading-6 relative">
              {q.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsListing;
