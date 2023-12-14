export default async function Posting ({ 
    params 
}: { 
    params: { id: string } 
}) {
    return (
        <>
            <h2>글 수정</h2>
            <h3>{ params.id }</h3>
        </>
    )
}