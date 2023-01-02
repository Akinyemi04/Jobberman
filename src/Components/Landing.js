import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from './store'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
const Landing = () => {
    const search = useSelector((val)=>{
        return val.Data.search
    })
    const data = useSelector((val)=>{
        return val.Data.data
    })
    const array = useSelector((val)=>{
        return val.Data.searchArray
    })
    const dispatch= useDispatch()
    useEffect(()=>{
        fetch('data.json')
        .then(( res)=> res.json())
        .then(data =>dispatch(Search.Setdata(data)))
    },[])
    if( array.length === 0){
        function clicked(e){
            const key = e.target
            const action = key.dataset.action
            const keycontent = key.textContent
            
                if(array.length === 0){
                    dispatch(Search.setArray(keycontent))
                }
                else{
                    let status = false
                array.map((val)=>{
                    if (val === keycontent){
                        status = true
                    }
                    else{

                    }
                    
                })
                console.log(status)
                if (status=== false) {
                    dispatch(Search.setArray(keycontent))
                }
                else{

                }

                
            } 

        }
        console.log(array)
        return(
            <div className='landing'> 
                <header>
                </header>
                <ul className='major-list'>
                    {data && data.map((val,index)=>{
                        return(
                            <li key={index}>
                                <img src={val.logo} alt="logo" />
                                <section>
                                    <p className='first'><span className='one'>{val.company}</span>{val.new &&<span className='two'>NEW!</span>}{val.featured && <span className='three'>FEATURED</span>}</p>
                                    <p className='second'>{val.position}</p>
                                    <p className='third'><span>{val.postedAt}</span><span className='circle'></span><span>{val.contract}</span><span className='circle'></span><span>{val.location}</span></p>
                                    
                                </section>
                                <hr />
                                <aside onClick={clicked}>
                                    <span data-action='role'>{val.role}</span><span data-action='level'>{val.level}</span>
                                    {val.languages.map((data,index)=>{
                                        return(<span data-action='language' key={index}>{data}</span>)
                                    })}
                                </aside>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    else{
        
        function clicked(e){
            const key = e.target
            const action = key.dataset.action
            const keycontent = key.textContent
            let status = false
                array.map((val)=>{
                    if (val === keycontent){
                        status = true
                    }
                    else{

                    }
                    
                })
                if (status=== false) {
                    dispatch(Search.setArray(keycontent))
                }
                else{

                }

        }
        return(
            <div className='landing'>
                <header>
                    <div className='white'>
                        <ul className='list'>
                        {
                        array.map((val,index)=>{
                            return(
                                <li key={index} >{val} <ClearOutlinedIcon className='icon' onClick={()=>{
                                    //array.splice(index,1)
                                    console.log(array)
                                    dispatch(Search.deleteArray(index))
                                }}/> </li>
                            )
                        })
                    }
                        </ul>
                    
                    <span  onClick={()=>{dispatch(Search.emptyArray())}} className='right'>clear</span>
                    </div>
                </header>
                <ul className='major-list'>
                    {data.map((val,index)=>{
                        return(
                            <>
                            {array.map((value,ind)=>{
                            if(val.role === value || val.level ===value || val.languages.includes(value)){
                                return(
                                    <li key={ind}>
                                        <img src={val.logo} alt="logo" />
                                <section>
                                    <p className='first'><span className='one'>{val.company}</span>{val.new &&<span className='two'>NEW!</span>}{val.featured && <span className='three'>FEATURED</span>}</p>
                                    <p className='second'>{val.position}</p>
                                    <p className='third'><span>{val.postedAt}</span><span className='circle'></span><span>{val.contract}</span><span className='circle'></span><span>{val.location}</span></p>
                                    
                                </section>
                                   <hr/>
                                <aside onClick={clicked}>
                                    <span data-action='role'>{val.role}</span><span data-action='level'>{val.level}</span>
                                    {val.languages.map((data,index)=>{
                                        return(<span data-action='language' key={index}>{data}</span>)
                                    })}
                                </aside>
                                    </li>
                                )
                            }
                            else{
                            }
                        })}
                            </>
                        )
                    })}
                </ul>
                
            </div>
        )
    }

  
}

export default Landing