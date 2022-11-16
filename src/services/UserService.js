import axios from "axios";

const API_ADRESS = "http://localhost:8080/api/users";

const fetchData = async () => { const result = await axios(API_ADRESS);
  return result;
};

export default fetchData;
