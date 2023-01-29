export default function Test() {


    return(
        <>

            <div style={{
                height: "100%"
            }}>




                <p style={{fontSize: "2em"}}>&#129046;</p>



                <img
                    srcSet="/first.jpg 500w, /second.jpg 800w"
                    src="/first.jpg"
                    sizes="(max-width: 500px) 100vw, (min-width: 501px) 50vw"


                    alt="Elva dressed as a fairy"
                />

                {/*<img*/}
                {/*    style={{*/}
                {/*        width: "100vmax",*/}

                {/*    }}*/}

                {/*    src="/second.jpg"*/}


                {/*    alt="Elva dressed as a fairy"*/}
                {/*/>*/}


                {/*<img*/}

                {/*    height={300}*/}
                {/*    srcSet="/second.jpg 600w , /first.jpg 192w"*/}
                {/*    src="/second.jpg"*/}
                {/*    sizes="(max-width: 600px) 192px,*/}
                {/*          600px"*/}

                {/*    alt="Elva dressed as a fairy"*/}
                {/*    />*/}

            </div>
        </>

    );
}