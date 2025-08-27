import girl from "../assets/girl.jpg";
import abay from "../assets/abay.jpeg";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

function ImageText() {
    return (
        <div className="image-container" style={{ position: "relative", width: "100%", height: "600px", overflow: "hidden" }}>
            <img src={girl} alt="Background" className="bacground-img" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div className="overlay-text" style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "64px",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                fontFamily: "Times New Roman"
            }}>
                Welcome <br /> feel the miracle with Korme
            </div>
            <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)" }}>
                <Button>Buy ticket</Button>
                <p style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: "40px",
                    fontFamily: "margaret",
                    transform: "translate(50%, 85%)"
                }}>Abay Kunanbayev <br /> 1945 <br /> A.Kasteev</p>
            </div>
            <img src={abay} alt="Abay" className="abay-img" style={{
                position: "absolute",
                bottom: "-80px",
                right: "10%",
                width: "260px",
                height: "420px",
                borderRadius: "30px",
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }} />
        </div>
    );
}

export default function Home() {
    return (
        <>
            <ImageText />
<div className="text-section" style={{textAlign:"center", margin:"40px auto", maxWidth:"900px"}}>
        <h1 style={{fontFamily:"garamond", fontSize:"48px", fontWeight:"bold", marginBottom:"20px", color:"white"}}>WELCOME TO THE Körme</h1>
        <p style={{fontSize:"35px", color:"#ffffffff", lineHeight:"1.6", fontFamily:"garamond"}}>
          There are plenty of good reasons to visit the Körme! So many works of
          art to discover in this fabulous museum that used to be a palace! So
          plan your visit in advance to make the most of it.
        </p>
      </div>
      <div className="gallery" style={{display:"flex", justifyContent:"center", gap:"15px", margin:"40px auto", maxWidth:"1200px", padding:"0 20px"}}>
        <img src={girl} alt="Gallery 1" style={{width:"23%", aspectRatio:"3/4", borderRadius:"10px", objectFit:"cover"}}/>
        <img src={girl} alt="Gallery 2" style={{width:"23%", aspectRatio:"3/4", borderRadius:"10px", objectFit:"cover"}}/>
        <img src={girl} alt="Gallery 3" style={{width:"23%", aspectRatio:"3/4", borderRadius:"10px", objectFit:"cover"}}/>
        <img src={girl} alt="Gallery 4" style={{width:"23%", aspectRatio:"3/4", borderRadius:"10px", objectFit:"cover"}}/>
      </div>
      
     <div style={{display:"flex", justifyContent:"center", alignitems:"center"}}>
         <Button >More</Button>
     </div>
     <br/>
     <Footer/>
        </>
    );
}

