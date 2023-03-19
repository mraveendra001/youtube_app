import React from 'react' ;

const commentsData = [
    {
          name : "Meghana R",
          text : "simply dummy text of the printing and typesetting industry.",
           replies :[ 
            {
                name : "Meghana R",
                text : "simply dummy text of the printing and typesetting industries.",
                replies :[            {
                    name : "Meghana R",
                    text : "simply dummy text of the printing and typesetting industries.",
                    replies :[]
                }]
            } ,
            {
                name : "Meghana R",
                text : "simply dummy text of the printing and typesetting industries.",
                replies :[            
                    
                ]
            }
           ]
        },
    {
          name : "Meghana R",
           text : "simply dummy text of the printing and typesetting industry.",
           replies : [
            {
                name : "Meghana R",
                text : "simply dummy text of the printing and typesetting industries.",
                replies : []
            }
           ]
        },

    {
          name : "Meghana R",
          text : "simply dummy text of the printing and typesetting industry.",
          replies :[]
    },
    {
          name : "Meghana R",
          text : "simply dummy text of the printing and typesetting industry.",
          replies :[]
},
{
          name : "Meghana R",
          text : "simply dummy text of the printing and typesetting industry." ,
          replies :[]
},
]
const Comment =({data}) =>{
    const {name,text}=data;
    return(
        <div className='flex shadow-md bg-gray-300 rounded-sm my-2'>
            <img
             className="w-8 h-8"
             alt="user"
             src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                 <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({comments}) =>{
    if (!Array.isArray(comments)) {
        return <div>No comments to display</div>
     }
  
   return comments.map((comment,index) => (
       <div key={index}> 
        {/* dont use index as keys */}
       <Comment  data={comment}/>
       {comment.replies && (
        <div className='pl-5 border border-l-black'>
        <CommentsList  comments={comment.replies} />                   {/* all these comment replies are comment List itself ,  */}
                                                                   {/* so we can call comment list here again  */}
        </div>                                                               /* <Comment key={index} data={comment}/> {/* this line is  comment replies */
        )}                                                                {/* <Comment key={index} data={comment}/> {/* this line is comment replies */}
        </div>
   ))
   // just looping through all the comment list from commentsData
}
const CommentsContainer =() =>{
    return (
        <div className='m-5 p-2'>
         <h1 className='text-2xl font-bold'>Comments : </h1>
         <Comment data={commentsData[0]}/>
         <CommentsList comments={commentsData}/>
        </div>
          
        )
}

export default CommentsContainer