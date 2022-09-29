const axios = require("axios");
// 밑에 어캐 환경변수에서 불러오나
const CLIENT_ID = "D4r4ETGu4W_Fha6R9hEc";
const CLIENT_SECRET = "k6Tg5gy65i";
const get = {
  frontend: (req, res) => {
    axios
      .get(
        "https://openapi.naver.com/v1/search/news.json",
        {
          params: {
            query: "프런트엔드 최신기술",
            display: 100, // 검색 결과 노출 개수
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        }
      )
      .then(({ data }) => {
        // 클라이언트에 보내기
        res.status(200).send(data);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      });
  },
  kbo: (req, res) => {
    axios
      .get(
        "https://openapi.naver.com/v1/search/news.json",
        {
          params: {
            query: "kbo",
            display: 100, // 검색 결과 노출 개수
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        }
      )
      .then(({ data }) => {
        // 클라이언트에 보내기
        res.status(200).send(data);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      });
  },
  nba: (req, res) => {
    axios
      .get(
        "https://openapi.naver.com/v1/search/news.json",
        {
          params: {
            query: "nba",
            display: 100, // 검색 결과 노출 개수
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        }
      )
      .then(({ data }) => {
        // 클라이언트에 보내기
        res.status(200).send(data);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      });
  },
  lol: (req, res) => {
    axios
      .get(
        "https://openapi.naver.com/v1/search/news.json",
        {
          params: {
            query: "리그 오브 레전드",
            display: 100, // 검색 결과 노출 개수
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        }
      )
      .then(({ data }) => {
        // 클라이언트에 보내기
        res.status(200).send(data);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      });
  },
  coin: (req, res) => {
    axios
      .get(
        "https://openapi.naver.com/v1/search/news.json",
        {
          params: {
            query: "가상화폐",
            display: 100, // 검색 결과 노출 개수
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        }
      )
      .then(({ data }) => {
        // 클라이언트에 보내기
        res.status(200).send(data);
      })
      .catch((error) => {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
      });
  },
};

module.exports = {
  get,
};
