import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/HttpTrigger1?code=sENBd/ocIPe3Hw2vbLnGOeUaXgnQET3B4Do3ruwBFj3kM2RU/TNu6w==");
  }

  get(id) {
    return http.get(`/HttpTrigger2?code=YlO/5RT6J0RG78eKbweIfAhLEblO5k1KoJVaP3MUMlCXPLNvkeApNQ==&employeeid=${id}`);
  }

  create(data) {
    return http.post("/HttpTrigger3?code=PyfJgP1yD/b10OnrbS0juuXNVZa6gUHD0dcHAM3znzS4D66zFfSDdw==", data);
  }

  update(id, data) {
    return http.post(`/HttpTrigger5?code=YjSpRGptCHdDoSnUNkahpnd2sfktC8AsGY31U8X7JT81YInlJVWMeg==&employeeid=${id}`, data);
  }

  delete(id) {
    return http.post(`/HttpTrigger4?code=VF//e1HRWVVJSYrpTLr4qhFjwSJexvaJavl94dlpVxtyhkFsGrmE9A==&employeeid=${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();