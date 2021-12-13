import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import TopSection from '../components/HomePageTopSection';
import MyTable from '../components/MyTable';
import '../styles.css';

export default function HomePage() {

    const [rows,setRows]=useState([]);
    const [rowsToRender,setRowsToRender]=useState([]);
    const [nameFilter,setNameFilter]=useState('');
    const [emailFilter,setEmailFilter]=useState('');

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> setRowsfunc(res.data))

    },[]);

    useEffect(() => {
        setRowsToRender(rows.filter(item=>item.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())&&
          item.email.toLocaleLowerCase().includes(emailFilter.toLocaleLowerCase())))
    }, [nameFilter,emailFilter,rows])

    function setRowsfunc(rows){

        const newRows=[];

        rows.map(item =>
            newRows.push({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    cname: item.company.name
                })
        );
        setRows(newRows);
    }

  return (
    <div className="home-page">
        <TopSection 
            setNameFilter={setNameFilter}
            setEmailFilter={setEmailFilter}
        />
        <MyTable rows={rowsToRender}/>
    </div>
  );
}
