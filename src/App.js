import { useEffect, useState } from "react";
// import { initDB } from "react-indexed-db";
import "./App.css";
import Card from "./components/Card/Card";
// import { DBConfig } from "./DBConfig";

function App() {
  const [counter, setCounter] = useState(1);
  const [timeStamp, setTimeStamp] = useState(null);
  const [start, setStart] = useState(null);
  const [end1, setEnd1] = useState(null);
  const [end2, setEnd2] = useState(null);
  const [end3, setEnd3] = useState(null);
  const [end4, setEnd4] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [saveEndTimestamp1, setSaveEndTimestamp1] = useState(null);
  const [saveEndTimestamp2, setSaveEndTimestamp2] = useState(null);
  const [saveEndTimestamp3, setSaveEndTimestamp3] = useState(null);
  const [saveEndTimestamp4, setSaveEndTimestamp4] = useState(null);
  const [saveStartTimestamp1, setSaveStartTimestamp1] = useState(null);
  const [saveStartTimestamp2, setSaveStartTimestamp2] = useState(null);
  const [saveStartTimestamp3, setSaveStartTimestamp3] = useState(null);
  const [saveStartTimestamp4, setSaveStartTimestamp4] = useState(null);
  const [loading, setLoading] = useState(true);

  // initDB(DBConfig);

  const api1 = "https://jsonplaceholder.typicode.com/comments";
  const api2 = "https://jsonplaceholder.typicode.com/photos";
  const api3 = "https://jsonplaceholder.typicode.com/todos";
  const api4 = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setTimeStamp(new Date().getTime());
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);

  const handleStart = () => {
    setStart(new Date().getTime());
    setLoading(true);
    fetch(api1)
      .then((res) => res.json())
      .then((data) => {
        // console.log("res1 is ", data);
        setData1(data);
        setLoading(false);
        setEnd1(new Date().getTime());
      });
    fetch(api2)
      .then((res) => res.json())
      .then((data) => {
        // console.log("res2 is ", data);
        setData2(data);
        setLoading(false);
        setEnd2(new Date().getTime());
      });
    fetch(api3)
      .then((res) => res.json())
      .then((data) => {
        // console.log("res3 is ", data);
        setData3(data);
        setLoading(false);
        setEnd3(new Date().getTime());
      });
    fetch(api4)
      .then((res) => res.json())
      .then((data) => {
        // console.log("res4 is ", data);
        setData4(data);
        setLoading(false);
        setEnd4(new Date().getTime());
      });

    console.log("Data is ", data1);
    const dbName1 = "the_name1";
    var request1 = indexedDB.open(dbName1, 2);
    request1.onerror = function (event) {
      // Handle errors.
    };
    request1.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("customers", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });
      objectStore.createIndex("postId", "postId", { unique: false });
      objectStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        setSaveStartTimestamp1(new Date().getTime());
        var customerObjectStore = db
          .transaction("customers", "readwrite")
          .objectStore("customers");
        data1.forEach(function (customer) {
          customerObjectStore.add(customer);
        });
        setSaveEndTimestamp1(new Date().getTime());
      };
    };

    console.log("Data is ", data2);
    const dbName2 = "the_name2";
    var request2 = indexedDB.open(dbName2, 3);
    request2.onerror = function (event) {
      // Handle errors.
    };
    request2.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("customers", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });
      objectStore.createIndex("postId", "postId", { unique: false });
      objectStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        setSaveStartTimestamp2(new Date().getTime());
        var customerObjectStore = db
          .transaction("customers", "readwrite")
          .objectStore("customers");
        data2.forEach(function (customer) {
          customerObjectStore.add(customer);
        });
        setSaveEndTimestamp2(new Date().getTime());
      };
    };

    console.log("Data is ", data3);
    const dbName3 = "the_name3";
    var request3 = indexedDB.open(dbName3, 2);
    request3.onerror = function (event) {
      // Handle errors.
    };
    request3.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("customers", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });
      objectStore.createIndex("postId", "postId", { unique: false });
      objectStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        setSaveStartTimestamp3(new Date().getTime());
        var customerObjectStore = db
          .transaction("customers", "readwrite")
          .objectStore("customers");
        data3.forEach(function (customer) {
          customerObjectStore.add(customer);
        });
        setSaveEndTimestamp3(new Date().getTime());
      };
    };

    console.log("Data is ", data4);
    const dbName4 = "the_name4";
    var request4 = indexedDB.open(dbName4, 2);
    request4.onerror = function (event) {
      // Handle errors.
    };
    request4.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore("customers", { keyPath: "id" });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: false });
      objectStore.createIndex("postId", "postId", { unique: false });
      objectStore.transaction.oncomplete = function (event) {
        // Store values in the newly created objectStore.
        setSaveStartTimestamp4(new Date().getTime());
        var customerObjectStore = db
          .transaction("customers", "readwrite")
          .objectStore("customers");
        data4.forEach(function (customer) {
          customerObjectStore.add(customer);
        });
        setSaveEndTimestamp4(new Date().getTime());
      };
    };
  };
  
  const handleReset = () => {
    var req1 = indexedDB.deleteDatabase("the_name1");
    req1.onsuccess = function () {
      console.log("Deleted database successfully");
    };
    req1.onerror = function () {
      console.log("Couldn't delete database");
    };
    req1.onblocked = function () {
      console.log(
        "Couldn't delete database due to the operation being blocked"
      );
    };
  };

//   useEffect(() => {}, []);

  return (
    <div className="app">
      <h1>Test App</h1>

      <div className="cards__info">
        <Card
          start={start}
          end={end1}
          saveStartTimestamp={saveStartTimestamp1}
          saveEndTimestamp={saveEndTimestamp1}
        />
        <Card
          start={start}
          end={end2}
          saveStartTimestamp={saveStartTimestamp2}
          saveEndTimestamp={saveEndTimestamp2}
        />
        <Card
          start={start}
          end={end3}
          saveStartTimestamp={saveStartTimestamp3}
          saveEndTimestamp={saveEndTimestamp3}
        />
        <Card
          start={start}
          end={end4}
          saveStartTimestamp={saveStartTimestamp4}
          saveEndTimestamp={saveEndTimestamp4}
        />
      </div>
      <div className="buttons">
        <button onClick={handleStart} className="start__button">
          Start
        </button>
        <button
          style={{ display: "none" }}
          onClick={handleReset}
          className="start__button"
        >
          Reset
        </button>
        <div className="one__button">
          <button className="start__button">Button 1</button>
          <button className="start__button">Button 2</button>
          <button className="start__button">Button 3</button>
          <button className="start__button">Button 4</button>
        </div>
      </div>
      <div>
        <h1>{timeStamp}</h1>
      </div>
    </div>
  );
}

export default App;
