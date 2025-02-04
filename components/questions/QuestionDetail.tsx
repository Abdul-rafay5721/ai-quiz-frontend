import { QuestionsList } from "@/types/questions";
import { Info, Save } from "lucide-react";
import React from "react";

type QuestionDetailProps = {
  selectedQuestion: QuestionsList;
  updateQuestionAnswer: (questionAnswer: QuestionsList) => void;
  saveAnswer: () => void
};

const QuestionDetail = ({
  selectedQuestion,
  updateQuestionAnswer,
  saveAnswer
}: QuestionDetailProps) => {
  const onChangeAnswer = (e: any) => {
    const { ...newQuestion } = selectedQuestion;
    newQuestion.answer = e.target.value;
    updateQuestionAnswer(newQuestion);
  };

  return (
    <div className="w-full md:w-2/3 lg:w-3/4 bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Answer Editor</h2>

      <div className="border bg-gray-100 p-2 rounded-sm">
        <div className="flex justify-between">
          <span className="font-bold">{`Question ${String(
            selectedQuestion?.index
          )}`}</span>
          <span className="font-medium text-blue-400 flex gap-1 items-center cursor-pointer">
            <Info size={16} /> Get AI Explanation
          </span>
        </div>
        <p className="text-gray-600 text-sm/2 mt-3 mb-1">
          {selectedQuestion?.question}
        </p>
      </div>

      <h2 className="text-lg/2 font-bold mt-4 mb-1">Your draft</h2>
      <textarea
        placeholder="Type your answer draft here..."
        className="w-full p-3 border rounded-lg resize-none h-32"
        onChange={onChangeAnswer}
        value={selectedQuestion?.answer}
      />

      <div className="flex gap-2 mt-4 justify-between">
        <div>
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-sm">
            Request AI Refinement
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 py-2 px-4 bg-gray-300 rounded-sm">
            Discard
          </button>
          <button className="bg-green-600 text-white hover:bg-green-700 rounded-sm py-2 px-4" onClick={saveAnswer}>
            Approve
          </button>
        </div>
      </div>

      <div>
        <div className="mt-6 flex justify-between">
          <h3 className="font-bold text-sm">AI refined version</h3>
          <p className="text-blue-400 flex items-center gap-1 cursor-pointer">
            <Save size={16} />
            Use as draft
          </p>
        </div>
        <p className="text-sm border rounded-sm bg-gray-100 p-2 mt-2 text-gray-400">
          AI refined answer will appear here after refinement is requested...
        </p>
      </div>
    </div>
  );
};

export default QuestionDetail;
