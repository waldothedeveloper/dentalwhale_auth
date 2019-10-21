import React from "react";
import axios from "axios";

// ui faces API
const uiOptions = {
  url: "https://uifaces.co/api?random&emotion[]=happiness",
  headers: { "X-API-KEY": "c4d43bbbd2cb0a196d2df35c172273" },
  method: "GET"
};

// const options = {
//   url: "https://randomuser.me/api/",
//   method: "GET"
// };

export default function GetFakeUser() {
  const [fakeUser, setFakeUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      //get the fake user
      try {
        const result = await axios(uiOptions);
        setFakeUser(result.data);
      } catch (error) {
        setError(true);
        console.log("Something when wrong...", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return [{ fakeUser, isLoading, error }];
}
