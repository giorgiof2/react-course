import { Link } from "@remix-run/react"
import React from "react"
import Bold from "~/components/Bold"
import illustration from "~/images/illustration-home.svg"



const Homepage = () => {
  return (
    <React.Fragment>
      <div className="font-hero">
        <div className="flex flex-col lg:flex-row-reverse pt-16">
          <div className="mb-12 lg:mb-0 w-full">
            <img
              src={illustration}
              alt="Home Illustration"
            />
          </div>
          <div className="text-center lg:text-left w-full px-4">
            <h1 className="text-5xl lg:text-7xl font-extralight mb-12">
              Immergiti nel mondo dello sviluppo web
            </h1>
            <p className="block font-light text-slate-600 mx-12 lg:mx-0 lg:mr-40 text-lg">
              Muovi i tuoi primi passi con <Bold>React</Bold>,{" "}
              <Bold>Typescript</Bold> ed altre librerie degne di
              importanza.
              <br />
              Non sarà necessaria nessuna conoscenza pregressa di{" "}
              <Bold>Javascript</Bold>, nonostante sia consigliata.
            </p>
            <div className="mt-16">
              <Link to="/lessons" className="font-bold text-sky-800 text-lg hover:bg-sky-700 hover:text-white px-6 py-2 border-2 border-sky-700 hover:border-sky-700 transition-colors">
                Visualizza lezioni
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 bg-sky-50">ciao</div>
    </React.Fragment>

    // support@reactbricks.com
    // xcPtfBwdtg
    //
    // supporto@retteweb.it
    // Vt612!
  )
}

export default Homepage
