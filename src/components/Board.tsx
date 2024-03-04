import NewColumnForm from "./forms/NewColumnForm";

const columns = [
    {id:'asdfs', name:'todo', index:0}, 
    {id:'efdwf', name:'in progress', index:1}, 
    {id:'ddwde', name:'done', index:2}, 
];

export default function Board(){
    return(
        <div className="flex gap-4">
            {columns?.map(column => (
                <div className="w-36 bg-white shadow-sm rounded-md p-2"> 
                    {column.name}
                </div>
            ))}
            <NewColumnForm/>
        </div>
    );
}