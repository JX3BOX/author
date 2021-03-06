import { $next } from "./axios";

function getPapers(params) {
    return $next().get("api/question/user-exam-paper", {
        params: params,
    });
}

function getQuestions(params) {
    return $next().get("api/question/public-list", {
        params: params,
    });
}

export { getPapers, getQuestions };
