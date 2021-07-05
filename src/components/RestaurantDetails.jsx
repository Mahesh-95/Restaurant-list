import React, { useState } from 'react';

const RestaurantDetails = ({item, show, index}) => {
    const [count, setCount] = useState();

    // const nestedHandler = (c) => {
    //     var c =  <ul> {a}</ul>
    //     return b
    // }

    const displayHandler = (x) => {
        if(count <= x){
            setCount(x)
            console.log(x)
        }else{
            setCount(x-1)
            console.log(x)
        }
    }

    return (
        <>
            <h2>{item.RestaurantName}</h2>
            {
                item.menu.map((m, i) => (
                    m.type === 'sectionheader'?(<>
                    <ul className={show === index? 'show': null }>
                        <li onClick={(e)=>displayHandler(1)}>{m.name}</li>
                        <ul className={(count===1 | count===2 | count===3 | count===4 | count===5)? 'show': null }>
                        {m.children.map((c, i)=>(
                            c.selected && c.type === 'item' ? (<>
                                <li onClick={()=>displayHandler(2)}>{c.name}</li>
                                <ul className={(count===2 | count===3 | count===4 | count===5)? 'show': null }>
                                    { c.children && (c.children.map((a,i)=>(
                                        a.selected && c.type === 'item' ? (<>
                                        <li onClick={()=>displayHandler(3)}>{a.name}</li>
                                            <ul className={(count===3 | count===4 | count===5)? 'show': null }>
                                            { a.children && (a.children.map((b,i)=>(
                                               b.selected && c.type === 'item'? ( <>
                                                <li onClick={()=>displayHandler(4)}>{b.name}</li>
                                                <ul className={(count===4 | count===5)? 'show': null }>
                                                    { b.children && (b.children.map((d,i)=>(
                                                    d.selected && c.type === 'item'? (<>
                                                        <li onClick={()=>displayHandler(5)}>{d.name}</li>
                                                        <ul className={count===5? 'show': null }>
                                                            { b.children && (b.children.map((e,i)=>(
                                                            e.selected && c.type === 'item'? (<>
                                                                <li>{e.name}</li>
                                                            </>):null
                                                            )))}
                                                        </ul>
                                                    </>):null
                                                    )))}
                                                </ul>
                                                </>) : null
                                            )))}
                                            </ul>
                                        </>):null
                                    )))}
                                </ul>
                            </>):null
                       ))}
                       </ul>
                    </ul>
                    </>):null
                ))
            }  
        </>
    )
}

export default RestaurantDetails







// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const Children = ({item, show, index}) => {
//     const [count, setCount] = useState();

//     const displayHandler = (x) => {
//         if(count <= x){
//             setCount(x)
//             console.log(x)
//         }else{
//             setCount(x-1)
//             console.log(x)
//         }
//     }

//     const move = (source, destination, droppableSource, droppableDestination) => {
//         const sourceClone = Array.from(source);
//         const destClone = Array.from(destination);
//         const [removed] = sourceClone.splice(droppableSource.index, 1);
      
//         destClone.splice(droppableDestination.index, 0, removed);
      
//         const result = {};
//         result[droppableSource.droppableId] = sourceClone;
//         result[droppableDestination.droppableId] = destClone;
      
//         return result;
//       };
//       const grid = 8;
      
//       const getItemStyle = (isDragging, draggableStyle) => ({
//         userSelect: "none",
//         padding: grid * 2,
//         margin: `0 0 ${grid}px 0`,
      
//         background: isDragging ? "lightgreen" : "grey",
      
//         ...draggableStyle
//       });
//       const getListStyle = isDraggingOver => ({
//         background: isDraggingOver ? "lightblue" : "lightgrey",
//         padding: grid,
//         width: 250
//       });

//     return (
//         <>
//             <h2>{item.RestaurantName}</h2>
//             <DragDropContext>
//             <Droppable key={index} droppableId={`${index}`}>
//               {(provided, snapshot) => (
//             <div
//                 ref={provided.innerRef}
//                 style={getListStyle(snapshot.isDraggingOver)}
//                 {...provided.droppableProps}
//                 >
//             {   
//                 item.menu.map((m, i) => (
//                     m.type === 'sectionheader'?(<>
//                     <ul className={show === index? 'show': null }>
                     
//                         <li onClick={(e)=>displayHandler(1)}>{m.name}</li>
                   
//                         <ul className={(count===1 | count===2 | count===3 | count===4 | count===5)? 'show': null }>
//                         {m.children.map((c, i)=>(
//                             c.selected && c.type === 'item' ? (<>
//                                 <li onClick={()=>displayHandler(2)}>{c.name}</li>
//                                 <ul className={(count===2 | count===3 | count===4 | count===5)? 'show': null }>
//                                     { c.children && (c.children.map((a,i)=>(
//                                         a.selected && c.type === 'item' ? (<>
//                                         <li onClick={()=>displayHandler(3)}>{a.name}</li>
//                                             <ul className={(count===3 | count===4 | count===5)? 'show': null }>
//                                             { a.children && (a.children.map((b,i)=>(
//                                                b.selected && c.type === 'item'? ( <>
//                                                 <li onClick={()=>displayHandler(4)}>{b.name}</li>
//                                                 <ul className={(count===4 | count===5)? 'show': null }>
//                                                     { b.children && (b.children.map((d,i)=>(
//                                                     d.selected && c.type === 'item'? (<>
//                                                         <li onClick={()=>displayHandler(5)}>{d.name}</li>
//                                                         <ul className={count===5? 'show': null }>
//                                                             { b.children && (b.children.map((e,i)=>(
//                                                             e.selected && c.type === 'item'? (<>
//                                                                 <li>{e.name}</li>
//                                                             </>):null
//                                                             )))}
//                                                         </ul>
//                                                     </>):null
//                                                     )))}
//                                                 </ul>
//                                                 </>) : null
//                                             )))}
//                                             </ul>
//                                         </>):null
//                                     )))}
//                                 </ul>
//                             </>):null
//                        ))}
//                        </ul>
                       
//                     </ul>
//                     </>):null
//                 ))
//             }  
//             </div>
//             )}
//             </Droppable>
//             </DragDropContext>
//         </>
//     )
// }

// export default Children


