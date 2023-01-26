export default function Contact() {


    return(
        <>
            <div style={{display: "flex",
                gap: 20,
                flexWrap: "wrap", minHeight: "100vh", alignItems: "start",
                padding: 20, justifyContent: "start"}}>

                <div style={{display: "flex", flexDirection: "column",

                    padding: 20,
                    border: "1px solid #d5d8df",
                    borderRadius: 4,
                }}>

                    <article>تواصل معنا</article>
                    <br/>
                    <a href={"tel:+201112233266"}  >⁦+20 111 223 3266⁩</a>
                    <br/>
                    <p><a href="mailto:mohamedalivip6@gmail.com">xyz@gmail.com</a></p>
                </div>


                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="400" height="400" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=%D9%85%D8%AF%D9%8A%D9%86%D8%AA%D9%8A%20%D9%85%D8%AC%D9%85%D8%B9%20%D8%A7%D9%84%D8%A8%D9%86%D9%88%D9%83%20skymap&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>



        </>
    );

}