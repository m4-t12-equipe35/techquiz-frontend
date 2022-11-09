import axios from "axios";

const apiEmail = axios.create({
    baseURL: "https://email-tech-quiz.herokuapp.com",
    timeout: 5000,
})

export default apiEmail