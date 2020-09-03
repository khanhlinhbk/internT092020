import React, {useState,useEffect, Component} from 'react';
import Content from './Components/content';
import './App.css';

function App() { 
  const[data,setdata] = useState([{id: 1, title: "Cụ bà phố cổ Hà Nội và 70 năm gắn bó với nghề hoa lễ", createAt: "13/02/2020", url: "https://anh.24h.com.vn/upload/4-2015/images/2015-11-02/1446452764-1444118312-img_4595__880.jpg"}, {id:2, title: "NÓNG: “Ông trùm” Barca nhượng bộ, để Messi ra đi với điều kiện khó tin?", createAt: "14/02/20120", url: "https://vcdn-thethao.vnecdn.net/2020/08/30/messi-2-jpeg-1598744737-6374-1598744750.jpg"}])
  return ( 
    <div className="App">
      {
        data.map((item) => <Content title={item.title} url={item.url} date={item.createAt}/>)
      }
    </div>
  );
}

export default App;
