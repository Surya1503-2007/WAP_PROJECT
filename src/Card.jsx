import { Bookmark } from 'lucide-react';
function Card(props) {
    let url = "data:image/png;base64,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";
    return(
            <div style={{height:"300px",width:"250px",borderRadius:"20px",backgroundColor:"white",display:"flex",margin:"30px",padding:"20px",flexDirection:"column",gap:"30px"}}>
                    <div style={{display: "flex", flexDirection: "column",justifyContent:"space-between",height:"100%"}}>
                        <div>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                                <img src={url} alt="break" style={{height:"50px",width:"50px",borderRadius:"50%",objectFit:"contain",border:"2px solid rgba(25, 31, 52, 0.1)"}}/>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",border:"1px solid rgba(169,169,169",width:'80px',height:'30px',borderRadius:"5px"}}>
                                    <p style={{fontSize:'15px',color:'rgba(169,169,169'}}>Save</p>
                                    <Bookmark style={{height:'17px',color:"rgba(169,169,169"}}/>
                                </div>
                                
                            </div>

                            <div>
                                <div style={{display:"flex",flexDirection:"row",alignItems:"baseline",marginTop:"20px"}}>
                                    <h3 style={{margin: "0px", padding: "0px"}}>{props.company}</h3>
                                    <p style={{fontSize:"10px",marginLeft:"5px",color:"gray",textAlign:"start"}}>{props.date}</p>
                                </div>
                            
                                <h3 style={{marginTop: "-5px", padding: "0px"}}>{props.post}</h3>
                                <div style={{display:"flex",gap:"10px"}}>
                                    <button style={{border:"none",backgroundColor:"rgba(236, 236, 236, 1)",width:"35%",height:"25px",borderRadius:"5px"}}>Full time</button>
                                    <button style={{border:"none",backgroundColor:"rgba(236, 236, 236, 1)",width:"35%",height:"25px",borderRadius:"5px"}}>Junior level</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{display:'flex', justifyContent: "space-between", borderTop: "1px solid black"}}>
                                <div style={{display:'flex',flexDirection:"column"}}>
                                    <h2 style={{padding:"0",marginBottom:"-3px"}}>{props.pay}</h2>
                                    <p style={{fontSize:"10px",color:"gray",}}>{props.locate}</p>
                                </div>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <button style={{backgroundColor:"black",color:"white",border:"none",borderRadius:"7px", padding: "10px 20px"}}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export {Card}