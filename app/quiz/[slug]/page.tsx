"use client";
import QuestionDetail from "@/components/questions/QuestionDetail";
import QuestionsListing from "@/components/questions/QuestionsListing";
import { useAppSelector } from "@/hook/redux.hook";
import { QuestionsList, QuestionStatus } from "@/types/questions";
import {
  getAllQuizes,
  getUserAttempQuiz,
  saveQuizAnswer,
} from "@/utils/api/quiz";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function QuizPage() {
  const { slug } = useParams();
  const user = useAppSelector((state: any) => state.auth.user);
  const { _id } = user;

  const [questions, setQuestions] = useState<QuestionsList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedQuestion, setSelectedQuestion] =
    useState<QuestionsList | null>(null);

  const saveAnswer = async () => {
    try {
      const [...rest] = questions;

      const payload = {
        userId: _id,
        result: {
          _id: selectedQuestion?._id,
          question: selectedQuestion?.question,
          status: QuestionStatus.COMPLETED,
          answer: selectedQuestion?.answer,
        },
      };

      rest[selectedQuestion?.index! - 1].answer = selectedQuestion?.answer!;
      setQuestions(rest);
      await saveQuizAnswer(payload);
      toast.success("Answer Saved Successful");
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const updateQuestionAnswer = async (updatedQuestion: QuestionsList) => {
    setSelectedQuestion(updatedQuestion);
  };

  const onClickSelectedQuestion = (activeQuestion: QuestionsList) => {
    setSelectedQuestion(activeQuestion);
  };

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const result = await getAllQuizes();
      const _result = await getUserAttempQuiz(_id);

      if (!result.data.length) {
        setQuestions([]);
        return;
      }

      const mapQuestions = result.data.map((el: any, i: number) => {
        let status = QuestionStatus.IN_PROGRESS;
        let answer = "";

        if (_result.data) {
          const attemptedQuestion = _result.data.result.find(
            (e: any) => e._id === el._id
          );

          answer = attemptedQuestion ? attemptedQuestion.answer : answer;
          status =
            slug === "new"
              ? QuestionStatus.NEW
              : attemptedQuestion
              ? QuestionStatus.COMPLETED
              : status;
        }

        return { ...el, status, answer, index: i + 1 };
      });

      setQuestions(mapQuestions);
      setSelectedQuestion(mapQuestions[0]);
      toast.success("Questions Fetched successfully");
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <QuestionsListing
        selectedQuestion={selectedQuestion!}
        onClickSelectedQuestion={onClickSelectedQuestion}
        questions={questions}
      />
      <QuestionDetail
        selectedQuestion={selectedQuestion!}
        updateQuestionAnswer={updateQuestionAnswer}
        saveAnswer={saveAnswer}
      />
    </>
  );
}
