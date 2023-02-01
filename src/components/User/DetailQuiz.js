import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
const DetailQuiz = (props) => {
  const param = useParams();
  const quizId = param.id;

  const fetchQuestions = async () => {
    let res = await getDataQuiz(quizId);
    console.log(`check qs`, res);
  };

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  return (
    <div className="detail-quiz-contaniner">
      deltailQuiz
      <span></span>
    </div>
  );
};
export default DetailQuiz;
