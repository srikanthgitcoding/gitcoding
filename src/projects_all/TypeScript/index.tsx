// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type UserID = number;
// type UserData = string;
// interface APIData {
//   userId: UserID;
//   id: number;
//   title: string;
//   body: UserData;
// }

// interface Props{
//     Name:string
// }

// const Index: React.FC<Props> = (props): React.ReactElement => {
//   const [first, setfirst] = useState<APIData[]>([]);
//   useEffect(() => {
//     const handleGet = async () => {
//       const data: APIData[] = await axios.get<APIData[]>(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       console.log("handle", data);
//       setfirst(data);
//     };

//     handleGet();
//   }, []);

//   return (
//     <div>
//       {first &&
//         first.map((item, index) => {
//           return <div>{item.body}</div>;
//         })}
//     </div>
//   );
// };

// export default Index;
